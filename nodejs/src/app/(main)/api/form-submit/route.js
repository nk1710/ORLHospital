import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import { sendAppointmentEmail } from "@/lib/sendAppointmentEmail";
import { recordLead } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, number, email, city, department, type = "appointment" } = body;

    if (!name || !number || !city) {
      return NextResponse.json(
        { success: false, message: "All required fields must be filled" },
        { status: 400 }
      );
    }

    const normalizedNumber = number.toString().replace(/\D/g, "");
    const sanitizedNumber =
      normalizedNumber.length === 12 && normalizedNumber.startsWith("91")
        ? normalizedNumber.slice(2)
        : normalizedNumber;

    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneRegex.test(sanitizedNumber)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }

    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, message: "Invalid email" },
          { status: 400 }
        );
      }
    }

    // Record lead in verified store & DB
    const recorded = await recordLead({
      type,
      name,
      phone: sanitizedNumber,
      email,
      city,
      department: department || "General ENT",
    });

    try {
      await sendAppointmentEmail({ name, number: sanitizedNumber, email, city, department });
    } catch (emailError) {
      console.warn("Appointment email notification:", emailError.message);
    }

    return NextResponse.json({ success: true, lead: recorded }, { status: 200 });
  } catch (error) {
    console.error("Backend Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
        code: error.code || "",
      },
      { status: 500 }
    );
  }
}
