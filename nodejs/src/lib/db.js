// lib/db.js
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";

let pool;
let migrationsPromise = null;

async function checkAndRunMigrations(dbPool) {
    try {
        console.log("[DB Migration] Checking columns of users table...");
        const [columns] = await dbPool.query("DESCRIBE users;");
        const hasRoleColumn = columns.some(c => c.Field === 'role');

        if (!hasRoleColumn) {
            console.log("[DB Migration] Adding role column to users table...");
            await dbPool.query("ALTER TABLE users ADD COLUMN role VARCHAR(50) DEFAULT 'USER' AFTER password_hash;");
            console.log("[DB Migration] role column added successfully.");
        } else {
            console.log("[DB Migration] role column already exists.");
        }

        //const email = 'drdhirendrasinghent@gmail.com';
        //const password = 'admin123';
        const saltRounds = 10;
        //const passwordHash = await bcrypt.hash(password, saltRounds);

        const [users] = await dbPool.query("SELECT id FROM users WHERE email = ?;", [email]);

        if (users.length > 0) {
            console.log(`[DB Migration] User ${email} exists. Updating to SUPER_ADMIN with hashed password...`);
            await dbPool.query(
                "UPDATE users SET role = 'SUPER_ADMIN', password_hash = ?, is_active = 1 WHERE email = ?;",
                [passwordHash, email]
            );
            console.log("[DB Migration] User updated successfully.");
        } else {
            console.log(`[DB Migration] User ${email} does not exist. Creating new SUPER_ADMIN user...`);
            await dbPool.query(
                "INSERT INTO users (name, email, password_hash, role, is_active) VALUES (?, ?, ?, ?, ?);",
                ['drdhirendrademo', email, passwordHash, 'SUPER_ADMIN', 1]
            );
            console.log("[DB Migration] User created successfully.");
        }
    } catch (err) {
        console.error("[DB Migration] Migration failed:", err);
    }
}

export function getPool() {
    if (pool) {
        return pool;
    }

    const missingEnv = [];

    if (!process.env.DB_HOST) missingEnv.push("DB_HOST");
    if (!process.env.DB_USER) missingEnv.push("DB_USER");
    if (process.env.DB_PASSWORD === undefined) {
        missingEnv.push("DB_PASSWORD");
    }
    if (!process.env.DB_NAME) missingEnv.push("DB_NAME");

    if (missingEnv.length > 0) {
        const message =
            `Missing database env vars: ${missingEnv.join(", ")}. ` +
            `Please set them in your environment or .env.local.`;

        console.error(message);
        throw new Error(message);
    }

    pool = mysql.createPool({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 2,
        connectTimeout: 10000,
    });
console.log("[DB ENV CHECK]", {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  passwordExists: !!process.env.DB_PASSWORD,
  passwordLength: process.env.DB_PASSWORD?.length
});
    if (!migrationsPromise) {
        migrationsPromise = checkAndRunMigrations(pool);
    }

    return pool;
}