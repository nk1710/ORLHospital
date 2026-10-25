"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquare,
  PhoneCall,
  FileText,
  HelpCircle,
  Building2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function StatsSection({ stats = {} }) {
  const cards = [
    {
      title: "Total Patient Enquiries",
      value: stats.totalEnquiries !== undefined ? stats.totalEnquiries : "—",
      subtext: `${stats.newLeadsCount ?? 0} new requiring attention`,
      icon: MessageSquare,
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-200",
      link: "/dashboard/queries",
      badge: "Live Leads",
    },
    {
      title: "Callback Requests",
      value: stats.callbackCount !== undefined ? stats.callbackCount : "—",
      subtext: "Urgent phone enquiries",
      icon: PhoneCall,
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      link: "/dashboard/queries",
      badge: "High Priority",
    },
    {
      title: "Published Medical Blogs",
      value: stats.blogsCount ?? 8,
      subtext: "Clinical guides & SEO articles",
      icon: FileText,
      color: "text-teal-700",
      bg: "bg-blue-50",
      border: "border-blue-200",
      link: "/dashboard/blog",
      badge: "Active",
    },
    {
      title: "Hospital & Clinic Centers",
      value: stats.branchesCount ?? 5,
      subtext: "Jasola, CR Park, Safdarjung, Palwal, Dhampur",
      icon: Building2,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      link: "/our-branches",
      badge: "Operational",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link href={item.link} className="block group">
              <Card className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all h-full">
                <CardContent className="p-5 flex flex-col justify-between h-full">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase">
                        {item.title}
                      </span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-3xl font-extrabold text-slate-900">
                          {item.value}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                      <Icon size={20} />
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5">
                    <TrendingUp size={13} className="text-emerald-500 shrink-0" />
                    <span className="truncate">{item.subtext}</span>
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
