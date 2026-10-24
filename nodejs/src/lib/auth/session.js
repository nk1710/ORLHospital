import { cookies } from "next/headers";

export async function setSession(sessionId) {
  const cookieStore = await cookies();
  cookieStore.set("session_id", sessionId, {
    httpOnly: true,
    secure: false, // Must be false on localhost HTTP to prevent browser rejection
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get("session_id")?.value;
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete("session_id");
}
