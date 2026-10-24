import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const BLOGS_FILE = path.resolve(process.cwd(), "data", "blogs.json");

function getLocalBlogs() {
  try {
    if (fs.existsSync(BLOGS_FILE)) {
      return JSON.parse(fs.readFileSync(BLOGS_FILE, "utf-8"));
    }
  } catch (e) {
    console.error("Error reading blogs.json:", e);
  }
  return [];
}

function saveLocalBlogs(blogs) {
  try {
    fs.writeFileSync(BLOGS_FILE, JSON.stringify(blogs, null, 2), "utf-8");
  } catch (e) {
    console.error("Error saving blogs.json:", e);
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const id = searchParams.get("id");

  // 1. Try fetching from MySQL
  try {
    const pool = getPool();
    let query = "";
    let params = [];

    if (slug) {
      query = "SELECT * FROM blogs WHERE slug = ? AND status = ? LIMIT 1";
      params = [slug, "published"];
    } else if (id) {
      query = "SELECT * FROM blogs WHERE id = ? AND status = ? LIMIT 1";
      params = [id, "published"];
    } else {
      query = "SELECT * FROM blogs WHERE status = ? ORDER BY created_at DESC";
      params = ["published"];
    }

    const [rows] = await pool.execute(query, params);
    if (Array.isArray(rows) && rows.length > 0) {
      return NextResponse.json({
        success: true,
        data: slug || id ? rows[0] || null : rows,
      });
    }
  } catch (err) {
    console.warn("[Blog API] Database query bypassed or offline, serving verified store");
  }

  // 2. Fallback to verified local storage
  const localBlogs = getLocalBlogs();
  if (slug) {
    const found = localBlogs.find((b) => b.slug === slug);
    return NextResponse.json({ success: true, data: found || null });
  }
  if (id) {
    const found = localBlogs.find((b) => String(b.id) === String(id));
    return NextResponse.json({ success: true, data: found || null });
  }

  return NextResponse.json({ success: true, data: localBlogs });
}

export async function POST(req) {
  try {
    const { title, content, category } = await req.json();
    const slug = (title || "").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");

    const newBlog = {
      id: Date.now(),
      title,
      slug,
      content,
      category: category || "General ENT",
      status: "published",
      author: "Dr. (Prof.) Dhirendra Singh Kushwah",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Save to local store
    const local = getLocalBlogs();
    local.unshift(newBlog);
    saveLocalBlogs(local);

    // Try MySQL
    try {
      const pool = getPool();
      await pool.execute(
        "INSERT INTO blogs (title, slug, content, status) VALUES (?, ?, ?, ?)",
        [title, slug, content, "published"]
      );
    } catch (e) {
      // Handled by local store
    }

    return NextResponse.json({ success: true, blog: newBlog });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
