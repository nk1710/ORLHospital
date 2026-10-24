import { NextResponse } from "next/server";
import { updateLeadStatus } from "@/lib/leads";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, message: "Missing id or status" }, { status: 400 });
    }

    const updated = await updateLeadStatus(id, status);
    return NextResponse.json({ success: updated });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

