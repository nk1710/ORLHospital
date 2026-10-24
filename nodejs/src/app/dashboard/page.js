"use client";

import { useEffect, useState, useCallback } from "react";
import StatsSection from "@/components/dashboard/Stats";
import { Performance } from "@/components/dashboard/Performance";
import RecentEnquiries from "@/components/dashboard/RecentEnquiries";
import { RefreshCw, Activity, Calendar, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  const fetchLiveStats = useCallback(async () => {
    try {
      const res = await fetch("/api/dashboard/live-stats", { cache: "no-store" });
      if (res.ok) {
        const stats = await res.json();
        setData(stats);
        setLastRefreshed(new Date());
      }
    } catch (err) {
      console.error("Failed to fetch live dashboard stats:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLiveStats();
    // Auto-refresh live data every 30 seconds
    const interval = setInterval(fetchLiveStats, 30000);
    return () => clearInterval(interval);
  }, [fetchLiveStats]);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const res = await fetch("/api/dashboard/update-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (res.ok) {
        // Optimistically update in state
        setData((prev) => {
          if (!prev) return prev;
          const updatedLeads = (prev.recentLeads || []).map((l) =>
            l.id === id ? { ...l, status: newStatus } : l
          );
          return { ...prev, recentLeads: updatedLeads };
        });
      }
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* 1. Hospital Live Command Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-gray-900">
              Hospital Operations & Patient Inquiries
            </h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Feed
            </span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Real-time consult bookings and operational analytics for Dr. (Prof.) Dhirendra Singh Kushwah
          </p>
        </div>

        <div className="flex items-center gap-3">
          {lastRefreshed && (
            <span className="text-[11px] text-gray-400 flex items-center gap-1">
              <Clock size={12} />
              Refreshed: {lastRefreshed.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </span>
          )}

          <Button
            variant="outline"
            size="sm"
            onClick={fetchLiveStats}
            disabled={loading}
            className="text-xs h-8 gap-1.5 border-gray-200 text-teal-700 hover:bg-teal-50"
          >
            <RefreshCw size={13} className={loading ? "animate-spin" : ""} />
            Refresh Live Data
          </Button>
        </div>
      </div>

      {/* 2. Top Key Metrics Cards */}
      <StatsSection stats={data || {}} />

      {/* 3. Live 14-Day Activity Chart & Branch Breakdown */}
      <Performance
        chartData={data?.chartData || []}
        branchCounts={data?.branchCounts || {}}
      />

      {/* 4. Live Patient Enquiries Table */}
      <RecentEnquiries
        leads={data?.recentLeads || []}
        onStatusUpdate={handleStatusUpdate}
      />
    </div>
  );
}
