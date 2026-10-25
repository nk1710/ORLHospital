// lib/db.js
import mysql from "mysql2/promise";
import bcrypt from "bcrypt";
import fallbackBlogs from "../../data/blogs.json";

let pool;
let migrationsPromise = null;

async function checkAndRunMigrations(dbPool) {
  try {
    // 1. Ensure users table exists
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) DEFAULT 'Dr. (Prof.) Dhirendra Singh Kushwah',
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'SUPER_ADMIN',
        is_active TINYINT DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Ensure super admin user exists
    const adminEmail = "drdhirendrasinghent@gmail.com";
    const [existingUsers] = await dbPool.query("SELECT id FROM users WHERE email = ? LIMIT 1", [adminEmail]);
    if (!existingUsers || existingUsers.length === 0) {
      const defaultHash = await bcrypt.hash("admin123", 10);
      await dbPool.query(
        "INSERT INTO users (name, email, password_hash, role, is_active) VALUES (?, ?, ?, 'SUPER_ADMIN', 1)",
        ["Dr. (Prof.) Dhirendra Singh Kushwah", adminEmail, defaultHash]
      );
    }

    // 2. Ensure enquiries table exists
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        type VARCHAR(50) DEFAULT 'appointment',
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        email VARCHAR(255),
        city VARCHAR(255),
        department VARCHAR(255) DEFAULT 'General ENT',
        message TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 3. Ensure callback_requests table exists
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS callback_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(50) NOT NULL,
        city VARCHAR(255),
        department VARCHAR(255) DEFAULT 'General ENT',
        message TEXT,
        status VARCHAR(50) DEFAULT 'New',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // 4. Ensure blogs table exists
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(500) NOT NULL,
        slug VARCHAR(500) UNIQUE NOT NULL,
        excerpt TEXT,
        featured_image VARCHAR(500),
        category VARCHAR(100) DEFAULT 'General ENT',
        content LONGTEXT NOT NULL,
        author_name VARCHAR(255) DEFAULT 'Dr. (Prof.) Dhirendra Singh Kushwah',
        status VARCHAR(50) DEFAULT 'published',
        featured TINYINT DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);

    // Seed blogs if table has 0 rows
    const [existingBlogs] = await dbPool.query("SELECT COUNT(*) as count FROM blogs");
    if (existingBlogs && existingBlogs[0]?.count === 0 && Array.isArray(fallbackBlogs)) {
      for (const b of fallbackBlogs) {
        await dbPool.query(
          `INSERT IGNORE INTO blogs (title, slug, excerpt, featured_image, category, content, author_name, status, featured, created_at)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [
            b.title,
            b.slug,
            b.excerpt || "",
            b.featured_image || "/images/fallback.jpg",
            b.category || "General ENT",
            b.content || "",
            b.author_name || b.author || "Dr. (Prof.) Dhirendra Singh Kushwah",
            b.status || "published",
            b.featured ? 1 : 0,
            b.created_at ? new Date(b.created_at) : new Date(),
          ]
        );
      }
    }

    // 5. Ensure sessions table exists
    await dbPool.query(`
      CREATE TABLE IF NOT EXISTS sessions (
        id VARCHAR(128) PRIMARY KEY,
        user_id INT,
        expires_at DATETIME,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    `);
  } catch (err) {
    console.warn("[DB Migration] Table auto-provision note:", err.message);
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
        connectionLimit: 4,
        connectTimeout: 10000,
    });

    if (!migrationsPromise) {
        migrationsPromise = checkAndRunMigrations(pool);
    }

    return pool;
}