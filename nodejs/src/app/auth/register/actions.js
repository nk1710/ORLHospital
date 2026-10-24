"use server";

import bcrypt from "bcrypt";
import { getPool } from "@/lib/db";
import { setSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export async function registerAction(_, formData) {
  const poll = getPool()
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
      return { error: "All fields are required" };
    }

    // check existing user
    const [existing] = await pool.execute(
      "SELECT id FROM users WHERE email=?",
      [email]
    );

    if (existing.length > 0) {
      return { error: "Email already registered" };
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const [result] = await db.query(
      "INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)",
      [name, email, hashedPassword]
    );

    const userId = result.insertId;

    // assign USER role (IMPORTANT)
    await db.query(
      "INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)",
      [userId, 4] // assuming USER role id = 4
    );

    await db.query(
      "INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)",
      [sessionId, userId, new Date(Date.now() + 86400000)]
    );

    setSession(sessionId);

    redirect("/login");
  } catch (e) {
    return { error: e.message };
  }
}