import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyJWT } from "./lib/auth/jwt";
//import { getPool } from "./lib/db";

export async function proxy(request) {
  // ── www and domain redirect (.in -> .com, non-www -> www)
  const host = (request.headers.get("host") || "").split(":")[0]; // strip port if any
  const targetHost = "www.drdhirendrasinghkushwah.com";
  
  if (host === "drdhirendrasinghkushwah.in" || host === "www.drdhirendrasinghkushwah.in" || host === "drdhirendrasinghkushwah.com") {
    const url = request.nextUrl.clone();
    url.host = targetHost;
    url.protocol = "https:";
    return NextResponse.redirect(url, { status: 301 });
  }

  // old paths redirection
  const path = request.nextUrl.pathname;
  const REDIRECT_MAP = {
    "/index.html": "/",
    "/best-ent-doctor-jasola-delhi.html": "/location/jasola-delhi",
    "/best-ent-doctor-palwal-haryana.html": "/location/palwal-haryana",
    "/location/palwal-haryana": "/location/palwal",
    "/best-ent-doctor-south-delhi.html": "/location/arjun-nagar-delhi",
    "/location/arjun-nagar-delhi": "/location/arjun-nagar",
    "/best-ent-doctor-cr-park-delhi.html": "/location/cr-park-delhi",
    "/location/cr-park-delhi": "location/cr-park",
    "/about.html": "/about/drdhirendrasinghkushwah",
    "/about": "/about/drdhirendrasinghkushwah",
    "/faq.html": "/faq",
    "/facilities.html": "/facilities",
    "/condition.html": "/conditions/ear-hearing",
    "/ent-and-gynae-clinic.html": "/specialities/ent-and-gynae-clinic",
    "/blog.html": "/blog/",
    "/gallery.html": "/gallery",
    "/contact.html": "/contact",
    "/ear.html": "/specialities/otology-ear-treatment",
    "/nose-sinus.html": "/blog/nose-and-sinus-rhinology-surgery-in-delhi",
    "/voice-throat.html": "/specialities/laryngology",
    "/head-neck.html": "/specialities/head-neck-surgery",
    "/dizziness-vertigo.html": "/specialities/neuro-otology",
    "/allergies.html": "/blog/septoplasty-pain-free-pack-less-septoplasty",
    "/tympanoplasty.html": "/specialities/tympanoplasty-surgery",
    "/ossicul.html": "/specialities/ossiculoplasty-surgery",
    "/masto.html": "/specialities/mastoidectomy",
    "/stapedo.html": "/specialities/stapedotomy-surgery",
    "/skullbase.html": "/specialities/skull-base-surgery",
    "/septoplasty.html": "/specialities/septoplasty",
    "/cochlear-hearing.html": "/specialities/cochlear-hearing-implants",
    "/tonsil.html": "/specialities/tonsillectomy-surgery",
    "/diagnchildern.html": "/specialities/pediatric-ent",
    "/cochlear-implant.html": "/specialities/cochlear-hearing-implants",
    "/coch.html": "/specialities/cochlear-hearing-implants",
    "/skull.html": "/specialities/skull-base-surgery",
    "/b1.html": "/blog/which-ent-issues-are-most-common-in-the-summer"
  };

  if (REDIRECT_MAP[path]) {
    return NextResponse.redirect(
      new URL(REDIRECT_MAP[path], request.url),
      301
    );
  }

  const cookieStore = await cookies();


  // auth
  const session = cookieStore.get("session_id");

  const isAuthPage = request.nextUrl.pathname.startsWith("/auth");

  if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};