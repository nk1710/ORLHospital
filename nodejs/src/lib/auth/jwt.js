const JWT_SECRET = process.env.JWT_SECRET || "drdhirendrasingh-cms-jwt-secret-key-32-chars-long";

async function getCryptoKey() {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    "raw",
    enc.encode(JWT_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"]
  );
}

export async function signJWT(payload) {
  const header = { alg: "HS256", typ: "JWT" };
  const exp = Math.floor(Date.now() / 1000) + (24 * 60 * 60); // Token valid for 24 hours
  const fullPayload = { ...payload, exp };

  const base64UrlEncode = (obj) => {
    const str = JSON.stringify(obj);
    // Convert to base64 encoding (support utf-8)
    const base64 = btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
      return String.fromCharCode(parseInt(p1, 16));
    }));
    return base64.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  };

  const encodedHeader = base64UrlEncode(header);
  const encodedPayload = base64UrlEncode(fullPayload);

  const key = await getCryptoKey();
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(`${encodedHeader}.${encodedPayload}`)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");

  return `${encodedHeader}.${encodedPayload}.${encodedSignature}`;
}

export async function verifyJWT(token) {
  if (!token) return null;
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const [header, payload, signature] = parts;

    const key = await getCryptoKey();
    const data = new TextEncoder().encode(`${header}.${payload}`);

    // Decode signature
    const base64 = signature.replace(/-/g, "+").replace(/_/g, "/");
    const rawSig = atob(base64);
    const binarySig = new Uint8Array(rawSig.length);
    for (let i = 0; i < rawSig.length; i++) {
      binarySig[i] = rawSig.charCodeAt(i);
    }

    const isValid = await crypto.subtle.verify("HMAC", key, binarySig, data);
    if (!isValid) return null;

    // Decode payload
    const decodedPayloadStr = decodeURIComponent(
      atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    const decodedPayload = JSON.parse(decodedPayloadStr);

    if (decodedPayload.exp && decodedPayload.exp < Date.now() / 1000) {
      return null; // Token expired
    }

    return decodedPayload;
  } catch (e) {
    console.error("JWT verification failed:", e);
    return null;
  }
}
