import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function GET(req, { params }) {
  const { slug } = await params;
  const pool = getPool();
  try {
    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ success: false, error: "Invalid or missing slug" }, { status: 400 });
    }
    const cleanSlug = slug.trim().toLowerCase();
    const [rows] = await pool.execute(
      `SELECT * FROM blogs WHERE LOWER(TRIM(slug)) = ? AND LOWER(TRIM(status)) = 'published' LIMIT 1`,
      [cleanSlug]
    );
    if (rows.length === 0) {
      return NextResponse.json({ success: false, error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: rows[0] });
  } catch (err) {
    console.error("BLOG_API_ERROR:", { slug, message: err.message });
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
