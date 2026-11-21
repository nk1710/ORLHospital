import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";
import { buildEmailTemplate } from "@/lib/template/baseTemplate";
import { recordLead } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, concern, pageUrl } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, message: "Please enter your name." },
        { status: 400 }
      );
    }

    if (!phone) {
      return NextResponse.json(
        { success: false, message: "Please enter your phone number." },
        { status: 400 }
      );
    }

    const normalizedNumber = phone.toString().replace(/\D/g, "");
    const sanitizedNumber =
      normalizedNumber.length === 12 && normalizedNumber.startsWith("91")
        ? normalizedNumber.slice(2)
        : normalizedNumber;

    const phoneRegex = /^[6-9][0-9]{9}$/;
    if (!phoneRegex.test(sanitizedNumber)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid 10-digit Indian mobile number." },
        { status: 400 }
      );
    }

    const patientConcern = concern?.trim() || "General ENT / Surgery Consultation";
    const sourcePage = pageUrl || "https://www.drdhirendrasinghkushwah.com";
    const timestampStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST";

    // 1. Record lead locally and in database
    let recorded = null;
    try {
      recorded = await recordLead({
        type: "urgent_callback",
        name: name.trim(),
        phone: sanitizedNumber,
        city: "Delhi NCR",
        department: patientConcern,
        message: `25-Second Smart Popup Lead. Concern: ${patientConcern} | Source: ${sourcePage}`,
      });
    } catch (recordErr) {
      console.warn("Lead record notice:", recordErr.message);
    }

    // 2. Build email template and send notification
    try {
      const emailHtml = buildEmailTemplate({
        title: "🚨 URGENT SURGICAL / CALLBACK LEAD (Website Popup)",
        subtitle: "Dr. (Prof.) Dhirendra Singh Kushwah - Patient Lead Desk",
        fields: [
          { label: "Patient Name", value: name.trim() },
          { label: "Phone Number", value: sanitizedNumber, isPhone: true },
          { label: "Selected Concern", value: patientConcern },
          { label: "Page Where Lead Filled", value: sourcePage },
          { 
            label: "Direct WhatsApp", 
            value: `<a href="https://wa.me/91${sanitizedNumber}?text=Hello%20${encodeURIComponent(name.trim())},%20we%20received%20your%20callback%20request%20from%20Dr.%20Dhirendra%20Singh%20Kushwah's%20hospital." style="color:#16a34a;font-weight:bold;">Chat on WhatsApp &rarr;</a>` 
          },
          { label: "Submission Time", value: timestampStr },
        ],
      });

      await sendEmail({
        subject: `🚨 [URGENT LEAD] ${name.trim()} - ${sanitizedNumber} (${patientConcern})`,
        html: emailHtml,
      });
    } catch (emailErr) {
      console.warn("Callback email send notice:", emailErr.message);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Callback request received. Our team will contact you within 10-15 minutes.",
        lead: recorded 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quick callback API error:", error);
    return NextResponse.json(
      { success: false, message: error.message || "Failed to submit request" },
      { status: 500 }
    );
  }
}
