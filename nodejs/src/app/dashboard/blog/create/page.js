"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

const EditorClient = dynamic(
  () => import("@/components/dashboard/BlogEditor"),
  { ssr: false }
)

export default function CreateBlog() {
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")

  const [featuredImage, setFeaturedImage] = useState("")
  const [imageAlt, setImageAlt] = useState("")

  const [authorName, setAuthorName] = useState("")
  const [authorSlug, setAuthorSlug] = useState("")
  const [categoryId, setCategoryId] = useState("")

  const [status, setStatus] = useState("draft")
  const [publishedAt, setPublishedAt] = useState("")
  const [readingTime, setReadingTime] = useState("")

  const [metaTitle, setMetaTitle] = useState("")
  const [metaDescription, setMetaDescription] = useState("")
  const [metaKeywords, setMetaKeywords] = useState("")

  const [ogTitle, setOgTitle] = useState("")
  const [ogDescription, setOgDescription] = useState("")
  const [ogImage, setOgImage] = useState("")

  const [canonicalUrl, setCanonicalUrl] = useState("")
  const [robots, setRobots] = useState("index, follow")
  const [schemaType, setSchemaType] = useState("Article")

  const [showSEO, setShowSEO] = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  useEffect(() => {
    if (!title) return
    setSlug(
      title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
    )
  }, [title])

  useEffect(() => {
    if (!content) return
    const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length
    setReadingTime(Math.ceil(words / 200))
  }, [content])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      title,
      slug,
      excerpt,
      content,
      featured_image: featuredImage,
      image_alt: imageAlt,
      author_name: authorName,
      author_slug: authorSlug,
      category_id: categoryId || null,
      status,
      published_at: publishedAt || null,
      reading_time: readingTime || null,
      meta_title: metaTitle,
      meta_description: metaDescription,
      meta_keywords: metaKeywords,
      og_title: ogTitle,
      og_description: ogDescription,
      og_image: ogImage,
      canonical_url: canonicalUrl,
      robots,
      schema_type: schemaType,
    }

    console.log(payload)

    await fetch("/api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })

    alert("Blog saved!")
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl space-y-6">

      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <input
        type="text"
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <textarea
        placeholder="Excerpt"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <EditorClient value={content} onChange={setContent} />

      <input
        type="text"
        placeholder="Featured Image URL"
        value={featuredImage}
        onChange={(e) => setFeaturedImage(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <input
        type="text"
        placeholder="Image Alt"
        value={imageAlt}
        onChange={(e) => setImageAlt(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <input
        type="text"
        placeholder="Author Name"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <input
        type="text"
        placeholder="Author Slug"
        value={authorSlug}
        onChange={(e) => setAuthorSlug(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <input
        type="number"
        placeholder="Category ID"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      >
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      <input
        type="datetime-local"
        value={publishedAt}
        onChange={(e) => setPublishedAt(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <input
        type="number"
        placeholder="Reading Time"
        value={readingTime}
        onChange={(e) => setReadingTime(e.target.value)}
        className="w-full border p-2 bg-white text-black"
      />

      <button type="button" onClick={() => setShowSEO(!showSEO)}>
        Toggle SEO
      </button>

      {showSEO && (
        <>
          <input
            type="text"
            placeholder="Meta Title"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className="w-full border p-2"
          />

          <textarea
            placeholder="Meta Description"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
            className="w-full border p-2"
          />

          <input
            type="text"
            placeholder="Keywords"
            value={metaKeywords}
            onChange={(e) => setMetaKeywords(e.target.value)}
            className="w-full border p-2"
          />

          <input
            type="text"
            placeholder="OG Title"
            value={ogTitle}
            onChange={(e) => setOgTitle(e.target.value)}
            className="w-full border p-2"
          />

          <textarea
            placeholder="OG Description"
            value={ogDescription}
            onChange={(e) => setOgDescription(e.target.value)}
            className="w-full border p-2"
          />

          <input
            type="text"
            placeholder="OG Image"
            value={ogImage}
            onChange={(e) => setOgImage(e.target.value)}
            className="w-full border p-2"
          />
        </>
      )}

      <button type="button" onClick={() => setShowAdvanced(!showAdvanced)}>
        Toggle Advanced
      </button>

      {showAdvanced && (
        <>
          <input
            type="text"
            placeholder="Canonical URL"
            value={canonicalUrl}
            onChange={(e) => setCanonicalUrl(e.target.value)}
            className="w-full border p-2"
          />

          <select
            value={robots}
            onChange={(e) => setRobots(e.target.value)}
            className="w-full border p-2"
          >
            <option value="index, follow">Index, Follow</option>
            <option value="noindex, follow">NoIndex</option>
          </select>

          <select
            value={schemaType}
            onChange={(e) => setSchemaType(e.target.value)}
            className="w-full border p-2"
          >
            <option value="Article">Article</option>
            <option value="BlogPosting">BlogPosting</option>
          </select>
        </>
      )}

      <button className="bg-teal-600 text-white px-4 py-2">
        Save Blog
      </button>
    </form>
  )
}