import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './Specialities.css';

const specialities = [
  {
    icon: '/images/icons_sq/cochlear.png',
    title: 'Cochlear Implant Surgery',
    desc: 'Advanced bionic hearing restoration for children and adults suffering from severe-to-profound sensorineural deafness.',
    tags: ['Otology', 'Bionic Hearing', 'Paediatric'],
    link: 'Cochlear Implants',
    href: '/specialities/cochlear-hearing-implants',
  },
  {
    icon: '/images/icons_sq/tympanoplasty.png',
    title: 'Tympanoplasty \u2014 Eardrum Repair',
    desc: 'Microsurgical stitchless repair of perforated eardrums caused by chronic suppurative otitis media (CSOM) or ear trauma.',
    tags: ['CSOM', 'Eardrum Repair', 'Stitchless'],
    link: 'Tympanoplasty',
    href: '/specialities/tympanoplasty-surgery',
  },
  {
    icon: '/images/icons_sq/mastoidectomy.png',
    title: 'Mastoidectomy Surgery',
    desc: 'Precision surgical eradication for cholesteatoma, chronic mastoid bone infection, and complex middle-ear diseases.',
    tags: ['Cholesteatoma', 'Mastoiditis', 'Ear Infection'],
    link: 'Mastoidectomy',
    href: '/specialities/mastoidectomy',
  },
  {
    icon: '/images/icons_sq/skull_base.png',
    title: 'Skull Base Surgery',
    desc: 'Advanced multidisciplinary endoscopic and open microsurgical approaches for CSF leaks, pituitary, and acoustic tumours.',
    tags: ['Skull Base', 'Tumours', 'Endoscopic'],
    link: 'Skull Base Surgery',
    href: '/specialities/skull-base-surgery',
  },
  {
    icon: '/images/icons_sq/fesss.png',
    title: 'FESS \u2014 Functional Sinus Surgery',
    desc: 'Minimally invasive HD endoscopic sinus surgery for chronic sinusitis, refractory nasal polyps, and recurrent sinus pressure.',
    tags: ['FESS', 'Sinusitis', 'Nasal Polyps'],
    link: 'Sinus Surgery',
    href: '/specialities/nose-sinus-rhinology',
  },
  {
    icon: '/images/icons_sq/septoplasty.png',
    title: 'Septoplasty \u2014 Deviated Septum',
    desc: 'Pioneering pain-free, pack-less surgical correction of deviated nasal septum (DNS) to restore effortless nasal breathing.',
    tags: ['DNS', 'Packless', 'Nasal Breathing'],
    link: 'Septoplasty',
    href: '/specialities/septoplasty',
  },
  {
    icon: '/images/icons_sq/stapedotomy.png',
    title: 'Stapedotomy \u2014 Otosclerosis',
    desc: 'Laser & micro-drill stapes reconstruction with prosthesis placement for conductive hearing loss caused by otosclerosis.',
    tags: ['Otosclerosis', 'Conductive Loss', 'Stapes'],
    link: 'Stapedotomy',
    href: '/specialities/stapedotomy-surgery',
  },
  {
    icon: '/images/icons_sq/vertigo.png',
    title: 'Vertigo & Neuro-Otology',
    desc: 'Advanced diagnostic VNG testing, canalith repositioning, and clinical balance therapy for BPPV and M\u00E9ni\u00E8re\u2019s disease.',
    tags: ['Vertigo', 'BPPV', 'Balance Clinic'],
    link: 'Vertigo Care',
    href: '/specialities/neuro-otology',
  },
  {
    icon: '/images/icons_sq/laryngology.png',
    title: 'Voice & Throat (Laryngology)',
    desc: 'Comprehensive stroboscopic diagnostics and phonomicrosurgery for vocal cord nodules, hoarseness, and acid reflux (LPR).',
    tags: ['Laryngology', 'Vocal Cords', 'Reflux LPR'],
    link: 'Voice & Throat',
    href: '/specialities/laryngology',
  },
  {
    icon: '/images/icons_sq/paediatric.png',
    title: 'Pediatric ENT Care',
    desc: 'Compassionate pediatric care for childhood glue ear, speech delay, recurrent tonsillitis, and enlarged adenoid airway blockage.',
    tags: ['Pediatric', 'Adenoids', 'Glue Ear'],
    link: 'Pediatric Care',
    href: '/specialities/pediatric-ent',
  },
  {
    icon: '/images/icons_sq/tonsillectomy.png',
    title: 'Coblation Tonsillectomy',
    desc: 'Modern low-temperature plasma coblation tonsil and adenoid removal with minimal discomfort and fast recovery.',
    tags: ['Tonsillitis', 'Coblation', 'Sleep Apnea'],
    link: 'Tonsillectomy',
    href: '/specialities/tonsillectomy-surgery',
  },
  {
    icon: '/images/icons_sq/head_neck.png',
    title: 'Head & Neck Oncology & Surgery',
    desc: 'Specialized diagnosis and surgical resection of thyroid nodules, parotid salivary gland tumours, and neck lymph nodes.',
    tags: ['Head & Neck', 'Thyroid', 'Salivary Glands'],
    link: 'Head & Neck Surgery',
    href: '/specialities/head-neck-surgery',
  },
];

const Specialities = () => (
  <section
    id="specialities"
    className="section-pad specialities-section py-16 bg-white"
    aria-labelledby="spec-h2"
  >
    <div className="inner max-w-7xl mx-auto px-4 sm:px-6">

      {/* SECTION HEADER */}
      <div className="specialities-header text-center max-w-3xl mx-auto mb-12">
        <span className="label inline-block px-3.5 py-1 text-xs font-bold text-teal-800 bg-teal-100/80 rounded-full uppercase tracking-wider mb-2">
          Center of Surgical Excellence &middot; Delhi NCR
        </span>

        <h2 id="spec-h2" className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Advanced ENT Treatments &amp; Specialized Surgeries
        </h2>

        <p className="specialities-intro text-base text-slate-600 mt-3 leading-relaxed">
          <strong>Dr. (Prof.) Dhirendra Singh Kushwah</strong> offers state-of-the-art diagnostic evaluations and cutting-edge minimally invasive microsurgery across all subspecialties of Otorhinolaryngology.
        </p>
      </div>

      {/* SPECIALITY GRID */}
      <div className="spec-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialities.map((s, i) => (
          <article
            key={i}
            className="spec-card group bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-white border border-slate-200/80 p-2.5 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform">
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-wrap gap-1 justify-end">
                  {s.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200/40">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                <Link href={s.href} className="no-underline text-inherit">
                  {s.title}
                </Link>
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {s.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/50">
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 group-hover:text-teal-800 tracking-wide transition-colors"
              >
                <span>Learn Clinical Details</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/specialities"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors shadow-sm"
        >
          <span>Explore All 15+ Surgical Disciplines</span>
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  </section>
);

export default Specialities;
