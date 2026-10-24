import { NextResponse } from "next/server";
import { getAllLeads } from "@/lib/leads";

export const runtime = "nodejs";

export async function GET() {
  try {
    const leads = await getAllLeads();
    return NextResponse.json(leads);
  } catch (error) {
    console.error("Queries API error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
