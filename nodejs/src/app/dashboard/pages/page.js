"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Pencil,
  Trash2,
  FileText,
  Search,
} from "lucide-react";
import { motion } from "framer-motion"

export default function PageList() {
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/pages");
        const data = await res.json();
        if (Array.isArray(data)) {
          setPages(data);
        } else if (data && Array.isArray(data.data)) {
          setPages(data.data);
        } else {
          setPages([]);
        }
      } catch (err) {
        console.log("error occured: ", err);
        setPages([]);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/pages/${id}`, { method: "DELETE" });
    setPages((prev) => (prev || []).filter((p) => p.id !== id));
  };

  // 🔍 Search filter
  const filteredPages = useMemo(() => {
    return (pages || []).filter((p) =>
      [p?.title, p?.condition, p?.symptom, p?.treatment, p?.location]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes((search || "").toLowerCase())
    );
  }, [pages, search]);

  return (
    <div className="p-6 space-y-6">

      {/* 🔝 Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Pages</h1>
          <p className="text-sm text-muted-foreground">
            Manage all SEO pages and content
          </p>
        </div>

        <Link href="/dashboard/pages/create">
          <Button className="flex items-center gap-2">
            <Plus size={16} />
            Create Page
          </Button>
        </Link>
      </div>

      {/* 🔍 Search */}
      <Card className="p-4">
        <div className="flex items-center gap-2">
          <Search size={16} className="text-muted-foreground" />
          <Input
            placeholder="Search pages (title, condition, location...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </Card>

      {/* 📄 List */}
      <Card className="rounded-2xl border shadow-sm">
        <CardContent className="p-6">
      <div className="grid gap-4">
        {filteredPages.length > 0 ? (
          filteredPages.map((p,index) => (
            <motion.div
                  key={p.id}
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
                    <h3 className="text-lg">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                          Published •{" "}
                          {new Date(p.created_at).toLocaleDateString()}
                        </p>
{/*
                    <p className="text-sm text-muted-foreground mt-1">
                      {p.condition} • {p.symptom} • {p.treatment} • {p.location}
                    </p>
          */}
                  </div>
                </div>

                {/* Right Actions */}
                <div className="flex gap-2">

                  <Link href={`/dashboard/pages/edit/${p.id}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1"
                    >
                      <Pencil size={14} />
                    
                    </Button>
                  </Link>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(p.id)}
                    className="flex items-center gap-1"
                  >
                    <Trash2 size={14} />
                    
                  </Button>

                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <div className="text-center py-16 text-muted-foreground">
            <FileText size={40} className="mx-auto mb-3 opacity-40" />
            <p>No pages found</p>
          </div>
        )}
      </div>
      </CardContent>
      </Card>
    </div>
  );
}