"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Plus,
  FileText,
  Pencil,
  Trash2,
  Search,
  FilterX,
} from "lucide-react"
import { motion } from "framer-motion"

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)

  // 🔍 Search
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blog")
        const data = await res.json()
        if (data && Array.isArray(data.data)) {
          setBlogs(data.data)
        } else if (Array.isArray(data)) {
          setBlogs(data)
        } else {
          setBlogs([])
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
        setBlogs([])
      } finally {
        setLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  const handleDelete = async (id) => {
    await fetch(`/api/blog/${id}`, { method: "DELETE" })
    setBlogs((prev) => prev.filter((b) => b.id !== id))
  }

  // 🔍 Filtered Blogs
  const filteredBlogs = useMemo(() => {
    return (blogs || []).filter((b) =>
      (b?.title || "").toLowerCase().includes((search || "").toLowerCase())
    )
  }, [blogs, search])

  return (
    <div className="p-6 space-y-6">

      {/* 🔝 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Blog Posts</h1>
          <p className="text-sm text-muted-foreground">
            Manage your blog content
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant="outline"
            onClick={() => setSearch("")}
            className="flex items-center gap-2"
          >
            <FilterX size={16} />
            Clear
          </Button>

          <Link href="/dashboard/blog/create">
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              New Post
            </Button>
          </Link>
        </div>
      </div>

      {/* 🔍 Search */}
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <Search size={16} className="text-muted-foreground" />
          <Input
          placeholder="Search blog posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </div>
      </Card>

      {/* 📦 Content */}
      <Card className="rounded-2xl border shadow-sm">
        <CardContent className="p-6">

          {loading ? (
            <div className="text-center py-10 text-muted-foreground">
              Loading posts...
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <FileText size={40} className="mx-auto mb-3 opacity-40" />
              <p>No blog posts found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border rounded-xl p-4 hover:bg-muted/40 transition"
                >
                  <div className="flex items-center justify-between gap-4">

                    {/* Left */}
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-muted">
                        <FileText size={18} />
                      </div>

                      <div>
                        <h3 className="font-medium">
                          {blog.title}
                        </h3>

                        <p className="text-xs text-muted-foreground mt-1">
                          Published •{" "}
                          {new Date(blog.created_at).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">

                      <Link href={`/dashboard/blog/edit/${blog.id}`}>
                        <Button size="icon" variant="outline">
                          <Pencil size={14} />
                        </Button>
                      </Link>

                      <Button
                        size="icon"
                        variant="destructive"
                        onClick={() => handleDelete(blog.id)}
                      >
                        <Trash2 size={14} />
                      </Button>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </CardContent>
      </Card>
    </div>
  )
}