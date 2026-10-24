"use server";

import { clearSession, getSession } from "@/lib/auth/session";
import { getPool } from "@/lib/db";
import { redirect } from "next/navigation";

export async function logoutAction() {
  const sessionId = getSession();
  const pool = getPool();

  if (sessionId) {
    await pool.execute("DELETE FROM sessions WHERE id=?", [sessionId]);
  }

  clearSession();

  redirect("/login");
}