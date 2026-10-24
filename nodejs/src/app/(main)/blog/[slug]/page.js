import { cache } from "react";
import { generateSchema } from "@/lib/schemaGenerator";
import { notFound } from "next/navigation";
import { getPool } from "@/lib/db";
import { formatBlogContent } from "@/lib/blog";

export const revalidate = 60; // ISR — revalidate every 60s

export const getBlog = cache(async (slug) => {
  try {
    if (!slug) return null;

    const pool = getPool(); // ✅ inside try

    const [rows] = await pool.execute(
      `SELECT * FROM blogs WHERE slug = ? AND status = ? LIMIT 1`,
      [slug, "published"]
    );

    return rows[0] ?? null;
  } catch (error) {
    console.error("DB Error:", error?.message, error?.stack);
    return null;
  }
});

export async function generateStaticParams() {
  try {
    const pool = getPool();
    const [rows] = await pool.execute(
      "SELECT slug FROM blogs WHERE status = 'published'"
    );
    return rows.map((row) => ({ slug: row.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) return {};
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return notFound();

  const schemaData = generateSchema(blog);
  const formattedContent = formatBlogContent(blog.content);
  const authorName = blog.author_name || blog.author || "Administrator";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="container max-w-4xl py-12 px-4 md:px-6">
        <header className="mb-8 pb-8 border-b border-gray-100">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 font-medium">
            <span className="font-semibold text-teal-600 bg-teal-50/80 px-3 py-1 rounded-full">
              By {authorName}
            </span>
            <span>•</span>
            <time dateTime={blog.created_at}>
              {new Date(blog.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </header>
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{
            __html: formattedContent,
          }}
        />
      </div>
    </>
  );
}