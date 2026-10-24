import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const conditionId = searchParams.get("condition_id");
  if (!conditionId) {
    return NextResponse.json({ symptoms: [], treatments: [] });
  }
  const pool = getPool();
  try {
    const [symptoms] = await pool.execute(
      `SELECT s.id, s.name
       FROM symptoms s
       JOIN condition_symptoms cs ON cs.symptom_id = s.id
       WHERE cs.condition_id = ?`,
      [conditionId]
    );

    const [treatments] = await pool.execute(
      `SELECT t.id, t.name
       FROM treatments t
       JOIN condition_treatments ct ON ct.treatment_id = t.id
       WHERE ct.condition_id = ?`,
      [conditionId]
    );

    return NextResponse.json({ symptoms, treatments });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ symptoms: [], treatments: [] }, { status: 500 });
  }
}
