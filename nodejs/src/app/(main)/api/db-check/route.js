import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    DB_HOST: process.env.DB_HOST || null,
    DB_PORT: process.env.DB_PORT || null,
    DB_USER: process.env.DB_USER || null,
    DB_NAME: process.env.DB_NAME || null,
    DB_PASSWORD_EXISTS: !!process.env.DB_PASSWORD,
    EMAIL_USER: process.env.EMAIL_USER || null,
  });
}
