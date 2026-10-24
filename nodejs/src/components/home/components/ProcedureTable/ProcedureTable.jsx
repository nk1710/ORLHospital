import React from 'react';
import Link from 'next/link';
import { Activity, Clock, ShieldCheck, Stethoscope } from 'lucide-react';
import './ProcedureTable.css';

const procedures = [
  {
    name: 'Tympanoplasty',
    badge: 'Stitchless / Microsurgery',
    condition: 'Eardrum perforation, CSOM, Chronic Ear Discharge',
    approach: 'High-Precision Microsurgical',
    recovery: '2 \u2013 4 weeks',
  },
  {
    name: 'Ossiculoplasty',
    badge: 'Hearing Restoration',
    condition: 'Conductive hearing loss (ossicular chain damage)',
    approach: 'Middle-Ear Microsurgical',
    recovery: '3 \u2013 4 weeks',
  },
  {
    name: 'Mastoidectomy',
    badge: 'Infection Eradication',
    condition: 'Cholesteatoma, chronic mastoiditis',
    approach: 'Microscopic / Endoscopic',
    recovery: '4 \u2013 6 weeks',
  },
  {
    name: 'Stapedotomy',
    badge: 'Laser / Microsurgery',
    condition: 'Otosclerosis & Stapes Fixation',
    approach: 'Precision Laser Microsurgery',
    recovery: '2 \u2013 3 weeks',
  },
  {
    name: 'Cochlear Implant Surgery',
    badge: 'Advanced Bionic Hearing',
    condition: 'Severe to profound sensorineural hearing loss',
    approach: 'Minimally Invasive Surgical Implant',
    recovery: '4 \u2013 6 wks (activation: 4 wks)',
  },
  {
    name: 'FESS (Endoscopic Sinus Surgery)',
    badge: 'Minimally Invasive HD',
    condition: 'Chronic sinusitis, nasal polyps, fungal infection',
    approach: 'HD Endoscopic (No external incisions)',
    recovery: '1 \u2013 2 weeks',
  },
  {
    name: 'Septoplasty',
    badge: 'Pain-Free Packless',
    condition: 'Deviated nasal septum, breathing obstruction',
    approach: 'Endoscopic Pack-Free Technique',
    recovery: '1 \u2013 2 weeks',
  },
  {
    name: 'Coblation Tonsillectomy',
    badge: 'Low-Temp Plasma',
    condition: 'Recurrent tonsillitis, sleep apnea, hypertrophy',
    approach: 'Cold Coblation Controlled Ablation',
    recovery: '1 \u2013 2 weeks',
  },
  {
    name: 'Microlaryngeal Surgery',
    badge: 'Phonomicrosurgery',
    condition: 'Vocal cord polyps, nodules, voice hoarseness',
    approach: 'Precision Endolaryngeal Laser / Micro-flap',
    recovery: '7 \u2013 14 days vocal rest',
  },
];

const ProcedureTable = () => (
  <section className="section-pad procedure-section py-16 bg-slate-50/70" aria-label="Surgical Procedures Reference">
    <div className="inner max-w-7xl mx-auto px-4 sm:px-6">
      
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="inline-block px-3.5 py-1 text-xs font-bold text-teal-800 bg-teal-100/80 rounded-full uppercase tracking-wider mb-2">
          Clinical Guidance
        </span>
        <h2 id="proc-h2" className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Surgical Procedures &amp; Expected Recovery Timeline
        </h2>
        <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
          Dr. (Prof.) Dhirendra Singh Kushwah utilizes advanced microsurgical and endoscopic technologies designed to reduce patient discomfort, eliminate painful nasal packing, and accelerate postoperative recovery.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider">
              <th className="py-4 px-5">Surgical Procedure</th>
              <th className="py-4 px-5">Technique / Badge</th>
              <th className="py-4 px-5">Target Indication / Condition</th>
              <th className="py-4 px-5">Surgical Approach</th>
              <th className="py-4 px-5">Expected Recovery</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {procedures.map((proc, idx) => (
              <tr key={idx} className="hover:bg-teal-50/40 transition-colors">
                <td className="py-4 px-5 font-bold text-slate-900 flex items-center gap-2">
                  <Stethoscope size={15} className="text-teal-600 shrink-0" />
                  <span>{proc.name}</span>
                </td>
                <td className="py-4 px-5">
                  <span className="inline-block px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 text-xs font-bold border border-teal-200/50">
                    {proc.badge}
                  </span>
                </td>
                <td className="py-4 px-5 text-slate-600 text-xs sm:text-sm">
                  {proc.condition}
                </td>
                <td className="py-4 px-5 text-xs text-slate-500 font-medium">
                  {proc.approach}
                </td>
                <td className="py-4 px-5 text-xs font-bold text-slate-800">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-teal-600" />
                    {proc.recovery}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  </section>
);

export default ProcedureTable;
