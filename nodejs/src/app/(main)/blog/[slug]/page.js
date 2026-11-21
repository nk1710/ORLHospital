import { cache } from "react";
import { generateSchema } from "@/lib/schemaGenerator";
import { notFound } from "next/navigation";
import { getBlogFromDB, getAllBlogs, formatBlogContent } from "@/lib/blog";
import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";

export const revalidate = 60; // ISR — revalidate every 60s

export const getBlog = cache(async (slug) => {
  if (!slug) return null;
  return await getBlogFromDB(slug);
});

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return (blogs || []).map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) return {};
  const canonicalUrl = `https://www.drdhirendrasinghkushwah.com/blog/${slug}`;
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt,
      url: canonicalUrl,
      type: "article",
    },
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

        {/* VIP High-Converting Surgery & 2nd Opinion Lead Desk */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <SurgeryLeadDesk 
            procedureName={blog.title ? `ENT Treatment & Surgery (${blog.title})` : "ENT Treatment & Surgery"}
            customMessage={`Hello Dr. Kushwah, I read your article on "${blog.title}". I would like to inquire about treatment evaluation, surgery cost, and 100% cashless insurance at ORL Hospital.`}
          />
        </div>
      </div>
    </>
  );
}