import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import fs from "fs";
import path from "path";

const ENTITIES_FILE = path.resolve(process.cwd(), "data", "entities.json");

function getEntities(key) {
  try {
    if (fs.existsSync(ENTITIES_FILE)) {
      const data = JSON.parse(fs.readFileSync(ENTITIES_FILE, "utf-8"));
      return data[key] || [];
    }
  } catch (e) {}
  return [];
}

export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute("SELECT * FROM conditions ORDER BY id DESC");
    if (Array.isArray(rows) && rows.length > 0) return NextResponse.json(rows);
  } catch (err) {}

  return NextResponse.json(getEntities("conditions"));
}

export async function DELETE(req, { params }) {
  return NextResponse.json({ message: "Deleted" });
}
