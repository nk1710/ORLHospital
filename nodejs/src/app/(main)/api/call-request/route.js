import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";
import { buildEmailTemplate } from "@/lib/template/baseTemplate";
import { recordLead } from "@/lib/leads";

export const runtime = "nodejs";

async function sendCallRequestEmail(data) {
  const html = buildEmailTemplate({
    title: "New Callback Request",
    subtitle: "ENT Specialist Callback Form",
    fields: [
      { label: "Name", value: data.name },
      { label: "Phone", value: data.phone, isPhone: true },
      { label: "City", value: data.city },
      { label: "Department", value: data.department },
      { label: "Message", value: data.message },
    ],
  });

  await sendEmail({
    subject: "New CallBack Request - Dr. (Prof.) Dhirendra Singh Kushwah",
    html,
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, city, department, message } = body;

    if (!name || !phone || !city) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }

    const recorded = await recordLead({
      type: "callback",
      name,
      phone,
      city,
      department: department || "General ENT",
      message: message || "Urgent Callback Requested",
    });

    try {
      await sendCallRequestEmail({ name, phone, city, department, message });
    } catch (emailErr) {
      console.warn("Callback email notification:", emailErr.message);
    }

    return NextResponse.json({ success: true, lead: recorded }, { status: 200 });
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
