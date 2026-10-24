import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const PAGES_FILE = path.resolve(process.cwd(), "data", "pages.json");

function getLocalPages() {
  try {
    if (fs.existsSync(PAGES_FILE)) {
      return JSON.parse(fs.readFileSync(PAGES_FILE, "utf-8"));
    }
  } catch (e) {
    console.error("Error reading pages.json:", e);
  }
  return [];
}

export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute("SELECT * FROM pages ORDER BY id DESC");
    if (Array.isArray(rows) && rows.length > 0) {
      return NextResponse.json(rows);
    }
  } catch (err) {
    console.warn("[Pages API] DB offline, serving verified store");
  }

  const local = getLocalPages();
  return NextResponse.json(local);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const local = getLocalPages();
    const newPage = { id: Date.now(), ...body };
    local.unshift(newPage);
    fs.writeFileSync(PAGES_FILE, JSON.stringify(local, null, 2), "utf-8");

    try {
      const pool = getPool();
      const [res] = await pool.execute(
        `INSERT INTO pages 
          (title, condition_id, symptom_id, treatment_id, location_id, body, meta_title, meta_description)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          body.title,
          body.condition_id,
          body.symptom_id,
          body.treatment_id,
          body.location_id,
          body.body,
          body.meta_title,
          body.meta_description,
        ]
      );
      newPage.id = res.insertId;
    } catch (e) {}

    return NextResponse.json({ success: true, id: newPage.id, message: "Page created" });
  } catch (err) {
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}
