import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const pool = getPool();
    const [rows] = await pool.execute("SELECT * FROM pages WHERE id = ?", [id]);
    return NextResponse.json(rows[0] || null);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = await params;
    const pool = getPool();
    const {
      title,
      body: pageBody,
      meta_title,
      meta_description,
      condition_id,
      symptom_id,
      treatment_id,
      location_id,
    } = await req.json();

    await pool.execute(
      `UPDATE pages 
        SET title=?, body=?, meta_title=?, meta_description=?, condition_id=?, symptom_id=?, treatment_id=?, location_id=?
        WHERE id=?`,
      [title, pageBody, meta_title, meta_description, condition_id, symptom_id, treatment_id, location_id, id]
    );

    return NextResponse.json({ message: "Updated" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;
    const pool = getPool();
    await pool.execute("DELETE FROM pages WHERE id = ?", [id]);
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
