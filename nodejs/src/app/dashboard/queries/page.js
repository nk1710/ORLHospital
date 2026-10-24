"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Phone, Mail, MessageCircle, Clock, MapPin, Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

export default function QueriesPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [sort, setSort] = useState("latest");

  const loadQueries = () => {
    fetch("/api/queries", { cache: "no-store" })
      .then((res) => res.json())
      .then((res) => {
        if (Array.isArray(res)) setData(res);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadQueries();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await fetch("/api/dashboard/update-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      setData((prev) =>
        prev.map((q) => (q.id === id ? { ...q, status: newStatus } : q))
      );
    } catch (e) {
      console.error(e);
    }
  };

  const exportCSV = () => {
    if (data.length === 0) return;
    const headers = ["ID", "Name", "Phone", "Email", "City/Branch", "Department", "Status", "Date"];
    const rows = data.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.phone || l.phone_number || ''}"`,
      `"${l.email || ''}"`,
      `"${l.city || ''}"`,
      `"${l.department || ''}"`,
      `"${l.status || 'New'}"`,
      `"${new Date(l.created_at || l.date).toLocaleString()}"`,
    ]);
    const csv = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `All_Patient_Leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 🔍 Filter + Search + Sort logic
  const filteredData = useMemo(() => {
    let result = [...data];

    // Search
    if (search) {
      result = result.filter((q) =>
        [q.name, q.email, q.phone, q.phone_number, q.city, q.department]
          .filter(Boolean)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Filter by department
    if (department !== "all") {
      result = result.filter((q) => q.department === department);
    }

    // Sort
    result.sort((a, b) => {
      const dateA = new Date(a.created_at || a.date || 0);
      const dateB = new Date(b.created_at || b.date || 0);
      return sort === "latest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [data, search, department, sort]);

  // Get unique departments
  const departments = [
    ...new Set(
      data
        .map((q) => q.department)
        .filter((dep) => dep && dep.trim() !== "")
    ),
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patient Enquiries & Leads</h1>
          <p className="text-xs text-gray-500">
            Real-time consultation submissions across all 5 hospital centers
          </p>
        </div>

        <Button
          onClick={exportCSV}
          variant="outline"
          size="sm"
          className="gap-1.5 text-xs border-gray-200 text-teal-700 hover:bg-teal-50 self-start sm:self-auto"
        >
          <Download size={14} /> Export All to Excel
        </Button>
      </div>

      {/* Controls */}
      <Card className="p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between bg-white border-gray-200">
        <Input
          placeholder="Search by patient name, phone, city, department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="md:max-w-sm text-xs"
        />

        <div className="flex gap-3 flex-wrap">
          <Select onValueChange={setDepartment} defaultValue="all">
            <SelectTrigger className="w-[180px] text-xs">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              {departments.map((dep, i) => (
                <SelectItem key={i} value={dep}>
                  {dep}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setSort} defaultValue="latest">
            <SelectTrigger className="w-[140px] text-xs">
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* List */}
      <div className="grid gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((query) => {
            const phoneNumber = query.phone || query.phone_number || "";
            const leadDate = new Date(query.created_at || query.date || Date.now());

            return (
              <Card
                key={query.id}
                className="p-5 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-200 bg-white"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-gray-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-gray-900">{query.name}</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                        {query.department || "General ENT"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-gray-400" />
                        {query.city || "South Delhi"}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} className="text-gray-400" />
                        {leadDate.toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Select
                      defaultValue={query.status || "New"}
                      onValueChange={(val) => handleStatusChange(query.id, val)}
                    >
                      <SelectTrigger className="w-[130px] h-8 text-xs font-semibold">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">🆕 New</SelectItem>
                        <SelectItem value="Contacted">📞 Contacted</SelectItem>
                        <SelectItem value="Confirmed">📅 Confirmed</SelectItem>
                        <SelectItem value="Completed">✅ Completed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {query.message && (
                  <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl mt-3 italic border border-slate-100">
                    "{query.message}"
                  </p>
                )}

                <div className="flex items-center justify-between gap-3 mt-4 pt-2">
                  <div className="text-xs text-gray-500">
                    Phone: <span className="font-semibold text-gray-900">{phoneNumber}</span>
                    {query.email && (
                      <span className="ml-3">
                        Email: <span className="font-semibold text-gray-900">{query.email}</span>
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {phoneNumber && (
                      <>
                        <Link
                          href={`tel:${phoneNumber}`}
                          className="px-3 py-1.5 text-xs rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition flex items-center gap-1.5 font-medium"
                        >
                          <Phone size={13} /> Call
                        </Link>
                        <a
                          href={`https://wa.me/91${phoneNumber.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(
                            query.name
                          )},%20this%20is%20from%20Dr.%20(Prof.)%20Dhirendra%20Singh%20Kushwah's%20ENT%20Hospital%20regarding%20your%20consultation%20request.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition flex items-center gap-1.5 font-medium"
                        >
                          <MessageCircle size={13} /> WhatsApp
                        </a>
                      </>
                    )}
                    {query.email && (
                      <Link
                        href={`mailto:${query.email}`}
                        className="px-3 py-1.5 text-xs rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition flex items-center gap-1.5 font-medium"
                      >
                        <Mail size={13} /> Email
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            );
          })
        ) : (
          <p className="text-center text-muted-foreground py-10">
            No patient queries found
          </p>
        )}
      </div>
    </div>
  );
}
