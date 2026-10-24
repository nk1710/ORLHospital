import { NextResponse } from "next/server";
import { getLiveDashboardMetrics } from "@/lib/leads";

export const runtime = "nodejs";

export async function GET() {
  try {
    const stats = await getLiveDashboardMetrics();
    return NextResponse.json(stats);
  } catch (err) {
    console.error("Dashboard Stats API error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

