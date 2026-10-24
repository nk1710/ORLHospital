"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Plus,
  HelpCircle,
  ChevronDown,
  Pencil,
  Trash2,
  Search,
  FilterX,
} from "lucide-react"
import { motion } from "framer-motion"

export default function FAQPage() {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [openId, setOpenId] = useState(null)

  // 🔍 Filters
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("/api/faq")
        const data = await res.json()
        if (data && Array.isArray(data.data)) {
          setFaqs(data.data)
        } else if (Array.isArray(data)) {
          setFaqs(data)
        } else {
          setFaqs([])
        }
      } catch (error) {
        console.error(error)
        setFaqs([])
      } finally {
        setLoading(false)
      }
    }

    fetchFaqs()
  }, [])

  const handleDelete = async (id) => {
    await fetch(`/api/faq/${id}`, { method: "DELETE" })
    setFaqs((prev) => prev.filter((f) => f.id !== id))
  }

  // 🔍 Filtered Data
  const filteredFaqs = useMemo(() => {
    return (faqs || [])
      .filter((faq) =>
        [faq?.question, faq?.answer]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes((search || "").toLowerCase())
      )
      .filter((faq) =>
        category === "all" ? true : faq?.category === category
      )
  }, [faqs, search, category])

  // 🎯 Categories (dynamic)
  const categories = [
    "all",
    ...new Set(faqs.map((f) => f.category).filter(Boolean)),
  ]

  return (
    <div className="p-6 space-y-6">

      {/* 🔝 Header + CTA */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">FAQs</h1>
          <p className="text-sm text-muted-foreground">
            Manage frequently asked questions
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button
            variant="outline"
            onClick={() => {
              setSearch("")
              setCategory("all")
            }}
            className="flex items-center gap-2"
          >
            <FilterX size={16} />
            Clear
          </Button>

          <Link href="/dashboard/faq/create">
            <Button className="flex items-center gap-2">
              <Plus size={16} />
              Add FAQ
            </Button>
          </Link>
        </div>
      </div>

      {/* 🔍 Filters */}
      <Card className="p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="flex items-center gap-2 w-full md:max-w-sm">
          <Search size={16} className="text-muted-foreground" />
          <Input
            placeholder="Search FAQs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat || "unknown"}>
              {cat || "Unknown"}
            </option>
          ))}
        </select>
      </Card>

      {/* 📦 Content */}
      <Card className="rounded-2xl border shadow-sm">
        <CardContent className="p-6">

          {loading ? (
            <div className="text-center py-10 text-muted-foreground">
              Loading FAQs...
            </div>
          ) : filteredFaqs.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground">
              <HelpCircle size={40} className="mx-auto mb-3 opacity-40" />
              <p>No FAQs found</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openId === faq.id

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border rounded-xl p-4 hover:bg-muted/40 transition"
                  >
                    {/* Top Row */}
                    <div className="flex items-start justify-between gap-4">

                      {/* Question */}
                      <div
                        className="flex-1 cursor-pointer"
                        onClick={() =>
                          setOpenId(isOpen ? null : faq.id)
                        }
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">
                            {faq.question}
                          </h3>

                          <ChevronDown
                            size={16}
                            className={`transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {/* Category badge */}
                        {faq.category && (
                          <span className="text-xs mt-1 inline-block px-2 py-0.5 rounded bg-muted">
                            {faq.category}
                          </span>
                        )}

                        {isOpen && (
                          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                            {faq.answer}
                          </p>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">

                        <Link href={`/dashboard/faq/edit/${faq.id}`}>
                          <Button size="icon" variant="outline">
                            <Pencil size={14} />
                          </Button>
                        </Link>

                        <Button
                          size="icon"
                          variant="destructive"
                          onClick={() => handleDelete(faq.id)}
                        >
                          <Trash2 size={14} />
                        </Button>

                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}