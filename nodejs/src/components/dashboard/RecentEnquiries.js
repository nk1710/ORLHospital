"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
  Calendar,
  Download,
  Search,
} from "lucide-react";

export default function RecentEnquiries({ leads = [], onStatusUpdate }) {
  const [filterBranch, setFilterBranch] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = leads.filter((l) => {
    const matchesBranch =
      filterBranch === "all" ||
      (l.city && l.city.toLowerCase().includes(filterBranch.toLowerCase()));
    const matchesSearch =
      !search ||
      [l.name, l.phone, l.department, l.city]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase());
    return matchesBranch && matchesSearch;
  });

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ["ID", "Patient Name", "Phone", "Email", "Branch/City", "Department", "Status", "Date"];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.email || ''}"`,
      `"${l.city || ''}"`,
      `"${l.department || ''}"`,
      `"${l.status || 'New'}"`,
      `"${new Date(l.created_at).toLocaleString()}"`,
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ORL_Patient_Leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "Confirmed":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "Contacted":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-rose-50 text-rose-700 border-rose-200 animate-pulse";
    }
  };

  return (
    <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <CardHeader className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <CardTitle className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span>Live Patient Enquiries & Call Requests</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">
              {leads.length} Total
            </span>
          </CardTitle>
          <CardDescription className="text-xs text-slate-500 mt-0.5">
            Real-time consult bookings from website appointment and callback forms
          </CardDescription>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={exportCSV}
            className="text-xs h-8 gap-1.5 border-slate-200 text-slate-600 hover:bg-slate-50"
          >
            <Download size={13} /> Export CSV
          </Button>

          <select
            value={filterBranch}
            onChange={(e) => setFilterBranch(e.target.value)}
            className="text-xs h-8 px-2.5 rounded-lg border border-slate-200 bg-white text-slate-600 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option value="all">All Hospital Centers</option>
            <option value="jasola">Jasola Vihar</option>
            <option value="cr park">CR Park</option>
            <option value="arjun">Arjun Nagar / Safdarjung</option>
            <option value="palwal">Palwal (Haryana)</option>
            <option value="dhampur">Dhampur (UP)</option>
          </select>
        </div>
      </CardHeader>

      <div className="p-4 bg-slate-50 border-b border-slate-100">
        <div className="relative">
          <Search size={14} className="absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder="Search leads by patient name, phone number, symptoms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full text-xs pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-100 text-slate-600 font-semibold border-b border-slate-200">
              <th className="p-3.5">Patient Details</th>
              <th className="p-3.5">Requested Department</th>
              <th className="p-3.5">Hospital Center</th>
              <th className="p-3.5">Received</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5 text-right">Quick Contact</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-slate-400">
                  No patient inquiries found matching filters.
                </td>
              </tr>
            ) : (
              filtered.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/70 transition">
                  <td className="p-3.5">
                    <div className="font-semibold text-slate-900">{lead.name}</div>
                    <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                      <span>{lead.phone}</span>
                      {lead.email && <span className="text-slate-400">· {lead.email}</span>}
                    </div>
                    {lead.message && (
                      <p className="text-[11px] text-slate-600 italic mt-1 line-clamp-1 max-w-xs">
                        "{lead.message}"
                      </p>
                    )}
                  </td>

                  <td className="p-3.5">
                    <span className="font-medium text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                      {lead.department || "General ENT"}
                    </span>
                  </td>

                  <td className="p-3.5">
                    <div className="flex items-center gap-1 text-slate-600">
                      <MapPin size={12} className="text-slate-400 shrink-0" />
                      <span>{lead.city || "South Delhi"}</span>
                    </div>
                  </td>

                  <td className="p-3.5 text-slate-500 whitespace-nowrap">
                    <div className="flex items-center gap-1 text-[11px]">
                      <Clock size={11} className="text-slate-400" />
                      <span>{new Date(lead.created_at).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}</span>
                    </div>
                  </td>

                  <td className="p-3.5">
                    <select
                      value={lead.status || "New"}
                      onChange={(e) => onStatusUpdate && onStatusUpdate(lead.id, e.target.value)}
                      className={`text-[11px] font-semibold px-2 py-1 rounded-md border cursor-pointer focus:outline-none ${getStatusBadge(
                        lead.status
                      )}`}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>

                  <td className="p-3.5 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      <a
                        href={`tel:${lead.phone}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200 transition font-medium"
                        title="Call patient"
                      >
                        <Phone size={12} /> Call
                      </a>
                      <a
                        href={`https://wa.me/91${lead.phone.replace(/\D/g, "")}?text=Hello%20${encodeURIComponent(
                          lead.name
                        )},%20this%20is%20from%20Dr.%20(Prof.)%20Dhirendra%20Singh%20Kushwah's%20ENT%20Hospital%20regarding%20your%20consultation%20request.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition font-medium"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle size={12} /> WhatsApp
                      </a>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

