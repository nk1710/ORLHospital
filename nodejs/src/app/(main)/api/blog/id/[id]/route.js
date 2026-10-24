import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const pool = getPool();
    const [rows] = await pool.execute(
      "SELECT * FROM blogs WHERE id = ? AND status = ? LIMIT 1",
      [id, "published"]
    );
    return NextResponse.json({ success: true, blog: rows[0] || null });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
