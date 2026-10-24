"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, Activity } from "lucide-react";

export function Performance({ chartData = [], branchCounts = {} }) {
  const branches = Object.entries(branchCounts || {});

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* 1. Main Area Chart: 14-day consultation trend */}
      <Card className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <CardHeader className="p-5 pb-2 border-b border-slate-100 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Activity size={16} className="text-teal-600" />
              Patient Booking & Callback Activity (Last 14 Days)
            </CardTitle>
            <CardDescription className="text-xs text-slate-500 mt-0.5">
              Daily enquiry breakdown across all hospital channels
            </CardDescription>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            Real-Time
          </span>
        </CardHeader>

        <CardContent className="p-5 pt-4">
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="colorCallbacks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={11}
                  stroke="#94a3b8"
                  tickFormatter={(val) => {
                    const d = new Date(val);
                    return `${d.getDate()}/${d.getMonth() + 1}`;
                  }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  fontSize={11}
                  stroke="#94a3b8"
                  allowDecimals={false}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-lg text-xs">
                          <p className="font-bold text-slate-900 mb-1">{label}</p>
                          <p className="text-teal-700 font-medium">
                            Appointments: {payload[0]?.value}
                          </p>
                          {payload[1] && (
                            <p className="text-amber-700 font-medium">
                              Callbacks: {payload[1]?.value}
                            </p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="appointments"
                  stroke="#0d9488"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorAppointments)"
                  name="Appointments"
                />
                <Area
                  type="monotone"
                  dataKey="callbacks"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorCallbacks)"
                  name="Callbacks"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-center gap-6 mt-3 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
              Consultation Bookings
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
              Urgent Call Requests
            </span>
          </div>
        </CardContent>
      </Card>

      {/* 2. Hospital Branch Volume Breakdown */}
      <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
        <CardHeader className="p-5 pb-3 border-b border-slate-100">
          <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-2">
            <Users size={16} className="text-teal-600" />
            Branch Consultation Share
          </CardTitle>
          <CardDescription className="text-xs text-slate-500 mt-0.5">
            Geographic distribution across 5 hospital centres
          </CardDescription>
        </CardHeader>

        <CardContent className="p-5 space-y-3.5 flex-1 flex flex-col justify-center">
          {branches.map(([branch, count]) => {
            const total = branches.reduce((acc, [, c]) => acc + c, 0) || 1;
            const pct = Math.round((count / total) * 100);

            return (
              <div key={branch} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800">{branch}</span>
                  <span className="text-slate-500">
                    {count} leads ({pct}%)
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-600 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(pct, 8)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}
