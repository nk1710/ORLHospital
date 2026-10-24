import React from 'react';
import { Award, Users, CheckCircle2, Building, Star } from 'lucide-react';
import './HospitalStats.css';

const hospitalStats = [
  {
    icon: Award,
    value: '25+',
    label: 'Years Experience',
    sub: 'Clinical & Surgical Excellence',
  },
  {
    icon: CheckCircle2,
    value: '15,000+',
    label: 'Surgeries Performed',
    sub: 'Micro, Laser & Endoscopic',
  },
  {
    icon: Users,
    value: '50,000+',
    label: 'Treated Patients',
    sub: 'Across India & Overseas',
  },
  {
    icon: Building,
    value: '5',
    label: 'Hospital & Clinic Centers',
    sub: 'Delhi NCR, Haryana & UP',
  },
  {
    icon: Star,
    value: '4.9 \u2605',
    label: 'Google Patient Rating',
    sub: 'Based on 725+ Reviews',
  },
];

export default function HospitalStats() {
  return (
    <section className="hospital-stats-strip py-8 bg-slate-900 text-white border-y border-slate-800" aria-label="Hospital Clinical Milestones">
      <div className="inner max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {hospitalStats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="stat-item flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-800 flex items-center justify-center text-teal-400 mb-3 shadow-2xs">
                  <Icon size={22} />
                </div>
                <div className="stat-value text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="stat-label text-xs sm:text-sm font-bold text-teal-300 mt-1">
                  {stat.label}
                </div>
                <div className="stat-sub text-[11px] text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
