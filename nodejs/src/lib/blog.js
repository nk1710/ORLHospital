// /lib/blog.js
import { getPool } from "./db";
import fallbackBlogs from "../../data/blogs.json";

export async function getAllBlogs() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      "SELECT * FROM blogs WHERE status = ? ORDER BY created_at DESC",
      ["published"]
    );
    if (rows && rows.length > 0) {
      return rows;
    }
  } catch (error) {
    console.error("DB Error in getAllBlogs:", error?.message);
  }
  return fallbackBlogs || [];
}

export async function getBlogFromDB(slug) {
  try {
    const pool = getPool();

    const [rows] = await pool.execute(
      `SELECT *
       FROM blogs
       WHERE slug = ?
       LIMIT 1`,
      [slug]
    );

    if (rows && rows.length > 0) {
      return rows[0];
    }
  } catch (error) {
    console.error("DB Error:", error?.message);
  }

  // Fallback to static blogs when DB has no rows or is disconnected
  const fallback = fallbackBlogs.find((b) => b.slug === slug);
  return fallback || null;
}

/**
 * Parses raw HTML content of a blog post to:
 * 1. Convert YouTube URLs (both links and plain text) into responsive iframe embeds.
 * 2. Wrap all <table> elements in a responsive container to prevent overflow.
 * 
 * @param {string} content Raw HTML blog content
 * @returns {string} Processed HTML content
 */
export function formatBlogContent(content) {
  if (!content) return "";

  let formatted = content;

  // 1. Convert YouTube links (both in anchor tags and plain text) to embedded iframes
  // Matches anchor tags with youtube links
  const youtubeAnchorRegex = /<a\b[^>]*href="[^"]*(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})[^"]*"[^>]*>[\s\S]*?<\/a>/gi;
  formatted = formatted.replace(youtubeAnchorRegex, (match, videoId) => {
    return `<div class="youtube-embed-wrapper"><iframe src="https://www.youtube.com/embed/${videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  });

  // Matches plain text YouTube links (excluding matches inside html attributes or existing tags).
  // Note: https?:// is mandatory to prevent lookbehind bypass (e.g. matching www.youtube.com inside src="https://www.youtube.com...")
  const youtubePlainRegex = /(?<!href="|src="|">)https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([a-zA-Z0-9_-]{11})(?:[^\s<]*)/gi;
  formatted = formatted.replace(youtubePlainRegex, (match, videoId) => {
    return `<div class="youtube-embed-wrapper"><iframe src="https://www.youtube.com/embed/${videoId}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
  });

  // Clean up paragraph wrappers around the new embeds: <p><div class="youtube-embed-wrapper">...</div></p>
  formatted = formatted.replace(/<p>\s*(<div class="youtube-embed-wrapper">[\s\S]*?<\/div>)\s*<\/p>/gi, '$1');

  // 2. Wrap all <table> elements in a responsive container div
  // Note: attributes captured by ([^>]*) will include the leading space, so we use <table${attributes}>
  const tableRegex = /<table\b([^>]*)>([\s\S]*?)<\/table>/gi;
  formatted = formatted.replace(tableRegex, (match, attributes, tableBody) => {
    return `<div class="table-responsive-wrapper"><table${attributes}>${tableBody}</table></div>`;
  });

  return formatted;
}