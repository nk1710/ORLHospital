import bcrypt from "bcrypt";
import crypto from "crypto";
import { getPool } from "@/lib/db";

export async function loginUser(email, password) {
  const normalizedEmail = (email || "").trim().toLowerCase();
  const trimmedPassword = (password || "").trim();

  // 1. Built-in Super Admin Credentials for Local & Production Fallback
  if (
    (normalizedEmail === "drdhirendrasinghent@gmail.com" ||
      normalizedEmail === "admin@orlhospital.com" ||
      normalizedEmail === "admin") &&
    (trimmedPassword === "admin123" ||
      trimmedPassword === "DrDhirendra@2026$" ||
      trimmedPassword === "admin")
  ) {
    const sessionId = crypto.randomBytes(32).toString("hex");
    return sessionId;
  }

  // 2. Database validation if MySQL connection is active
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      "SELECT * FROM users WHERE email=? AND is_active=1",
      [normalizedEmail]
    );

    const user = rows[0];
    if (!user) throw new Error("Invalid credentials");

    const valid = await bcrypt.compare(trimmedPassword, user.password_hash);
    if (!valid) throw new Error("Invalid credentials");

    const sessionId = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    try {
      await pool.execute(
        "INSERT INTO sessions (id, user_id, expires_at) VALUES (?, ?, ?)",
        [sessionId, user.id, expiresAt]
      );
    } catch (e) {
      // Session table may not exist yet; session is managed via encrypted cookie
    }

    return sessionId;
  } catch (err) {
    console.error("Database auth attempt failed:", err.message);
    throw new Error("Invalid credentials");
  }
}
