"use server";

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { getAllBlogs } from "@/lib/blog";

export default async function LatestBlogs() {
  const blogs = await getAllBlogs();
  const limitedBlogs = blogs || [];

  return (
    <section className="w-full pt-8 md:pt-12 pb-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 md:px-4">
        <SectionTitle title={'Latest Blogs'} subheading={'Insights, treatments & expert ENT guidance'} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {limitedBlogs.map((blog, index) => (
            <Link
              key={blog.slug || index}
              href={`/blog/${blog.slug}`}
              className="
                group block bg-white rounded-2xl overflow-hidden
                shadow-sm hover:shadow-xl
                transition-all duration-300
                hover:-translate-y-1
              "
            >

              <div className="relative">
                <Image
                  src={
                    blog.featured_image
                      ? (blog.featured_image.startsWith('/') ? blog.featured_image : `/${blog.featured_image}`)
                      : "/images/fallback.jpg"
                  }
                  width={600}
                  height={400}
                  alt={blog.title || "Blog image"}
                  className="w-full h-44 object-cover"
                  unoptimized
                />

                <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)" }} />
              </div>

              <div className="p-4 space-y-2">
                <p className="text-slate-400">
                  Published  {new Date(blog.created_at).toLocaleDateString()} • {blog.author_name || blog.author || "Administrator"}
                </p>

                <h3 className="text-base group-hover:text-teal-600 transition">
                  {blog.title}
                </h3>

                <p className="text-sm text-slate-500 line-clamp-3">
                  {blog.excerpt}
                </p>

                <span className="bottom-0 text-teal-600 text-sm mt-2 inline-block transition">
                  Read more →
                </span>
              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}