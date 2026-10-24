"use server";

import { loginUser } from "@/server/services/auth.service";
import { setSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";

export async function loginAction(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  let sessionId;

  try {
    sessionId = await loginUser(email, password);
    await setSession(sessionId);
  } catch (e) {
    return { error: e.message || "Invalid credentials" };
  }

  redirect("/dashboard");
}
