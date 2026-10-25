import { NextResponse } from "next/server";
import { recordLead } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Contact form submission:", data);

    const recorded = await recordLead({
      type: "contact",
      name: data.name || "Website Inquirer",
      phone: data.phone || data.number || "",
      email: data.email || "",
      city: data.city || data.location || "South Delhi",
      department: data.department || "General ENT",
      message: data.message || "Contact Form Inquiry",
    });

    return NextResponse.json({ success: true, lead: recorded });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
