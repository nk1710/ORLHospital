"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  HelpCircle,
  FolderTree,
  Network,
  Settings,
  Hospital,
} from "lucide-react";
import Image from "next/image";

const menu = [
  { name: "Live Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Patient Enquiries", href: "/dashboard/queries", icon: MessageSquare },
  { name: "Medical Blogs", href: "/dashboard/blog", icon: FileText },
  { name: "Patient FAQs", href: "/dashboard/faq", icon: HelpCircle },
  { name: "Specialty Pages", href: "/dashboard/pages", icon: FolderTree },
  { name: "Local SEO Clusters", href: "/dashboard/clusters", icon: Network },
  { name: "OPD Settings", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white text-slate-900 border-r border-slate-200 hidden md:flex flex-col shrink-0">
      <div className="p-5 border-b border-slate-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-sm shadow-sm">
          ORL
        </div>
        <div>
          <h1 className="font-bold text-sm text-slate-900 leading-tight">
            ORL International
          </h1>
          <p className="text-[11px] text-teal-700 font-medium">Hospital Command Center</p>
        </div>
      </div>

      <nav className="p-3 space-y-1 flex-1">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition ${
                isActive
                  ? "bg-teal-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon size={18} className={isActive ? "text-white" : "text-slate-500"} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Hospital Centers Footer */}
      <div className="p-4 m-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
        <div className="flex items-center gap-1.5 font-semibold text-slate-900 mb-1">
          <Hospital size={14} className="text-teal-600" />
          <span>5 Hospital Centers</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          Jasola · CR Park · Safdarjung · Palwal · Dhampur
        </p>
      </div>
    </aside>
  );
}
