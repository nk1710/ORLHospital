import React from 'react';
import Link from 'next/link';
import { Ear, Wind, HeartPulse, Activity, ArrowRight } from 'lucide-react';
import './Conditions.css';

const conditionGroups = [
  {
    icon: Ear,
    heading: 'Ear & Hearing Conditions (Otology)',
    sub: 'Hearing loss, infections, eardrum disorders & microsurgery',
    items: [
      { name: 'Sensorineural Hearing Loss (SNHL)', href: '/conditions/ear-hearing' },
      { name: 'Conductive Hearing Loss (CHL)', href: '/conditions/ear-hearing' },
      { name: 'Mixed Hearing Loss', href: '/conditions/ear-hearing' },
      { name: 'Eardrum Perforation (Tympanic Membrane)', href: '/specialities/tympanoplasty-surgery' },
      { name: 'Chronic Suppurative Otitis Media (CSOM)', href: '/conditions/ear-infections' },
      { name: 'Acute Otitis Media (AOM)', href: '/conditions/ear-infections' },
      { name: 'Otitis Media with Effusion (Glue Ear)', href: '/conditions/ear-infections' },
      { name: 'Otosclerosis & Stapes Fixation', href: '/specialities/stapedotomy-surgery' },
      { name: 'Cholesteatoma Middle Ear Disease', href: '/specialities/mastoidectomy' },
      { name: 'Tinnitus (Ear Ringing & Buzzing)', href: '/conditions/ear-hearing' },
      { name: 'M\u00E9ni\u00E8re\u2019s Disease & Vestibular Vertigo', href: '/conditions/vertigo' },
      { name: 'BPPV (Benign Positional Vertigo)', href: '/conditions/vertigo' },
      { name: 'Vestibular Neuritis & Labyrinthitis', href: '/conditions/vertigo' },
      { name: 'Congenital Hearing Loss in Children', href: '/specialities/pediatric-ent' },
    ],
  },
  {
    icon: Wind,
    heading: 'Nose & Sinus Disorders (Rhinology)',
    sub: 'Sinusitis, nasal blockages, deviated septum & allergy',
    items: [
      { name: 'Chronic Sinusitis (Rhinosinusitis)', href: '/conditions/sinusitis' },
      { name: 'Acute Bacterial & Viral Sinusitis', href: '/conditions/sinusitis' },
      { name: 'Nasal Polyps & Polyposis', href: '/conditions/nasal-blockage' },
      { name: 'Deviated Nasal Septum (DNS)', href: '/specialities/septoplasty' },
      { name: 'Allergic & Non-Allergic Rhinitis', href: '/conditions/allergies' },
      { name: 'Nasal Obstruction & Chronic Blockage', href: '/conditions/nasal-blockage' },
      { name: 'Epistaxis (Recurrent Nosebleeds)', href: '/conditions/nose-sinus' },
      { name: 'Fungal Sinusitis & Mycetoma', href: '/conditions/sinusitis' },
      { name: 'Nasal Bone Fractures & Trauma', href: '/conditions/nose-sinus' },
      { name: 'Post-Nasal Drip (PND)', href: '/conditions/nose-sinus' },
      { name: 'Hypertrophied Turbinates', href: '/conditions/nasal-blockage' },
      { name: 'Anosmia (Loss of Smell & Taste)', href: '/conditions/nose-sinus' },
    ],
  },
  {
    icon: HeartPulse,
    heading: 'Throat & Voice Disorders (Laryngology)',
    sub: 'Tonsils, voice changes, sleep apnea & swallowing care',
    items: [
      { name: 'Chronic & Recurrent Tonsillitis', href: '/conditions/tonsillitis' },
      { name: 'Peritonsillar Abscess (Quinsy)', href: '/conditions/tonsillitis' },
      { name: 'Adenoid Hypertrophy & Obstruction', href: '/conditions/paediatric-ent' },
      { name: 'Laryngitis & Chronic Hoarseness', href: '/conditions/voice-disorders' },
      { name: 'Vocal Cord Nodules, Polyps & Cysts', href: '/conditions/voice-disorders' },
      { name: 'Vocal Cord Paralysis & Weakness', href: '/conditions/voice-disorders' },
      { name: 'Laryngopharyngeal Reflux (Silent Reflux)', href: '/conditions/throat-voice' },
      { name: 'Obstructive Sleep Apnea (OSA) & Snoring', href: '/conditions/throat-voice' },
      { name: 'Dysphagia (Swallowing Difficulties)', href: '/conditions/throat-voice' },
      { name: 'Pharyngitis & Persistent Sore Throat', href: '/conditions/throat-voice' },
      { name: 'Globus Pharyngeus (Throat Sensation)', href: '/conditions/throat-voice' },
    ],
  },
  {
    icon: Activity,
    heading: 'Head, Neck & Complex ENT Conditions',
    sub: 'Tumours, thyroid, salivary disorders & skull base care',
    items: [
      { name: 'Skull Base Tumours & Lesions', href: '/specialities/skull-base-surgery' },
      { name: 'Cerebrospinal Fluid (CSF) Leak Repair', href: '/specialities/skull-base-surgery' },
      { name: 'Head & Neck Neoplasms (Larynx/Pharynx)', href: '/specialities/head-neck-surgery' },
      { name: 'Salivary Gland Tumours (Parotid/Submandibular)', href: '/specialities/head-neck-surgery' },
      { name: 'Thyroid & Parathyroid Gland Nodules', href: '/specialities/head-neck-surgery' },
      { name: 'Branchial & Thyroglossal Duct Cysts', href: '/specialities/head-neck-surgery' },
      { name: 'Cervical Lymphadenopathy (Neck Lumps)', href: '/specialities/head-neck-surgery' },
      { name: 'Facial Nerve Paralysis & Decompression', href: '/specialities/otology' },
      { name: 'Complex Paediatric Airway Conditions', href: '/specialities/pediatric-ent' },
      { name: 'Tracheostomy Care & Management', href: '/conditions/head-neck' },
    ],
  },
];

const Conditions = () => (
  <section id="conditions" className="conditions-section section-pad py-16 bg-white" aria-labelledby="cond-h2">
    <div className="inner max-w-7xl mx-auto px-4 sm:px-6">
      
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="label inline-block px-3.5 py-1 text-xs font-bold text-teal-800 bg-teal-100/80 rounded-full uppercase tracking-wider mb-2">
          Clinical Conditions Directory
        </span>
        <h2 id="cond-h2" className="section-title text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Comprehensive ENT Conditions Treated by Dr. (Prof.) Dhirendra Singh Kushwah
        </h2>
        <p className="section-sub text-base text-slate-600 mt-3 leading-relaxed">
          Select any ear, nose, throat, or head-neck condition below to learn about symptoms, advanced diagnostic methodologies, and evidence-based surgical or medical treatments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {conditionGroups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div className="flex items-center gap-3.5 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-700 text-white shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{group.heading}</h3>
                  <p className="text-xs text-slate-500">{group.sub}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-200/60">
                {group.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="flex items-center justify-between p-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-teal-800 hover:bg-teal-50 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowRight size={11} className="text-slate-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/conditions"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm shadow-md transition-colors"
        >
          <span>View All 50+ Documented ENT Conditions</span>
          <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  </section>
);

export default Conditions;
