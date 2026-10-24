import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const FAQS_FILE = path.resolve(process.cwd(), "data", "faqs.json");

function getLocalFaqs() {
  try {
    if (fs.existsSync(FAQS_FILE)) {
      return JSON.parse(fs.readFileSync(FAQS_FILE, "utf-8"));
    }
  } catch (e) {
    console.error("Error reading faqs.json:", e);
  }
  return [];
}

function saveLocalFaqs(faqs) {
  try {
    fs.writeFileSync(FAQS_FILE, JSON.stringify(faqs, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving faqs.json:", e);
  }
}

export async function GET() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute("SELECT * FROM faqs ORDER BY id DESC");
    if (Array.isArray(rows) && rows.length > 0) {
      return NextResponse.json({ success: true, data: rows });
    }
  } catch (err) {
    console.warn("[FAQ API] DB offline, serving verified store");
  }

  const localFaqs = getLocalFaqs();
  return NextResponse.json({ success: true, data: localFaqs });
}

export async function POST(req) {
  try {
    const { question, answer, category } = await req.json();

    const newFaq = {
      id: Date.now(),
      question,
      answer,
      category: category || "General ENT",
    };

    const local = getLocalFaqs();
    local.unshift(newFaq);
    saveLocalFaqs(local);

    try {
      const pool = getPool();
      await pool.execute(
        "INSERT INTO faqs (question, answer) VALUES (?, ?)",
        [question, answer]
      );
    } catch (e) {}

    return NextResponse.json({ success: true, faq: newFaq });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
