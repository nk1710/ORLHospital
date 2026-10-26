"use client";

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Stethoscope, Award, Ear, Sparkles, Activity, ShieldCheck, MapPin, Calendar, HeartPulse } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    category: 'Expert Consultation',
    icon: Stethoscope,
    q: 'Who is the best ENT Specialist in Delhi?',
    a: 'Dr. (Prof.) Dhirendra Singh Kushwah is widely regarded as one of the best ENT Specialists and ENT Surgeons in Delhi, with over 25 years of experience in Otorhinolaryngology. He holds an MBBS (Jiwaji University, 1999) and MS in Otorhinolaryngology (Rani Durgawati University, 2005). He consults across South Delhi (Jasola Vihar, CR Park, and Safdarjung Enclave / Arjun Nagar).',
  },
  {
    category: 'Doctor Credentials',
    icon: Award,
    q: 'What are the qualifications of Dr. (Prof.) Dhirendra Singh Kushwah?',
    a: 'Dr. (Prof.) Dhirendra Singh Kushwah is a Senior ENT Specialist and Head-Neck Surgeon based in South Delhi with 25+ years of clinical and operative experience. He specializes in stitchless ear surgeries, pain-free packless septoplasty, cochlear implants, anterior skull base surgery, FESS sinus surgery, paediatric ENT, and vertigo management. Contact: +91-9311449825.',
  },
  {
    category: 'Ear & Hearing Care',
    icon: Ear,
    q: 'What is Tympanoplasty and how is stitchless eardrum repair performed?',
    a: 'Tympanoplasty is a precision microsurgical procedure to repair a perforated eardrum caused by chronic ear infections (CSOM) or trauma. When the delicate middle ear bones are also eroded, ossiculoplasty is performed simultaneously. Dr. (Prof.) Dhirendra Singh Kushwah performs stitchless tympanoplasty with minimal downtime and high graft success rates.',
  },
  {
    category: 'Painless Nasal Surgery',
    icon: Sparkles,
    q: 'What is the pain-free packless Septoplasty technique?',
    a: 'Dr. (Prof.) Dhirendra Singh Kushwah utilizes a specialized packless technique for correcting a deviated nasal septum (DNS). Unlike traditional procedures, this technique completely eliminates painful nasal packing after surgery \u2014 resulting in minimal discomfort, immediate normal nasal breathing, and rapid recovery within 3 to 5 days.',
  },
  {
    category: 'Bionic Hearing & Implants',
    icon: Activity,
    q: 'Is Dr. (Prof.) Dhirendra Singh Kushwah a cochlear implant surgeon in Delhi?',
    a: 'Yes. Dr. (Prof.) Dhirendra Singh Kushwah is among Delhi\u2019s premier cochlear implant surgeons with over two decades of otologic surgery experience. He performs cochlear implantation for both children with congenital sensorineural hearing loss and adults with profound progressive deafness.',
  },
  {
    category: 'Vertigo & Balance Disorders',
    icon: HeartPulse,
    q: 'How are vertigo and dizziness diagnosed and treated?',
    a: 'Vertigo is commonly triggered by inner-ear balance disorders such as BPPV (benign paroxysmal positional vertigo), M\u00E9ni\u00E8re\u2019s disease, vestibular neuritis, or labyrinthitis. Dr. Kushwah conducts systematic vestibular testing followed by targeted particle repositioning (Epley manoeuvre) and clinical balance therapy.',
  },
  {
    category: 'Pediatric ENT Care',
    icon: ShieldCheck,
    q: 'Does Dr. Kushwah treat ENT conditions in infants and children?',
    a: 'Yes. Dr. Kushwah provides comprehensive Paediatric ENT care across Delhi NCR for glue ear, recurrent tonsillitis, adenoid hypertrophy, congenital hearing loss, paediatric sleep apnea, and noisy breathing (laryngomalacia).',
  },
  {
    category: 'Center Locations & Hours',
    icon: MapPin,
    q: 'Where are the hospital and clinic branches located in Delhi NCR?',
    a: 'Dr. Kushwah operates across 5 centers: (1) Primary ENT Hospital Center at Jasola Vihar (Near Living Style Mall, South Delhi), (2) CR Park Clinic (Bipin Chandra Pal Marg), (3) Arjun Nagar / Safdarjung Enclave Clinic, (4) Palwal Center (Haryana), and (5) Dhampur Center (Western UP). Helpline: +91-9311449825.',
  },
  {
    category: 'Appointments & Teleconsultation',
    icon: Calendar,
    q: 'How can I book an in-person OPD consultation or video call?',
    a: 'You can book directly by calling or sending a WhatsApp to +91-9311449825, submitting the online appointment form on this website, or visiting the nearest hospital center desk. Same-day emergency consultations and verified video teleconsultations are readily available.',
  },
  {
    category: 'Cashless Insurance / TPA',
    icon: ShieldCheck,
    q: 'Does the hospital provide cashless mediclaim for ENT surgeries?',
    a: 'Yes. All surgical procedures performed by Dr. Kushwah at hospital centers (such as Tympanoplasty, Mastoidectomy, Septoplasty, FESS, Coblation Tonsillectomy, and Cochlear Implants) support cashless insurance claims and reimbursement across major TPAs and private health insurance providers.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="faq-section section-pad py-16 bg-white"
      aria-labelledby="faq-h2"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="inner max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="label inline-block px-3.5 py-1 text-xs font-bold text-teal-800 bg-teal-100/80 rounded-full uppercase tracking-wider mb-2">
            Patient Support &amp; Clinical FAQ
          </span>
          <h2 id="faq-h2" className="section-title text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions \u2014 ENT Specialist Delhi
          </h2>
          <p className="section-sub text-base text-slate-600 mt-3 leading-relaxed">
            Essential clinical information regarding ENT diagnosis, microsurgical procedures, recovery timelines, and hospital OPD appointments with Dr. (Prof.) Dhirendra Singh Kushwah.
          </p>
        </div>

        <div className="faq-accordion space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            const Icon = faq.icon;
            return (
              <div
                key={index}
                className={`faq-item rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-teal-300 bg-teal-50/30 shadow-xs'
                    : 'border-slate-200/80 bg-white hover:border-slate-300'
                }`}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <button
                  type="button"
                  className="faq-question-btn w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`p-2 rounded-xl shrink-0 ${isOpen ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-teal-800 mb-0.5">
                        {faq.category}
                      </span>
                      <h3 className="faq-question-title text-base sm:text-lg font-bold text-slate-900" itemProp="name">
                        {faq.q}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-teal-700' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div
                    className="faq-answer-wrap px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-teal-100/60"
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Helpline Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-lg font-bold">Have a specific ENT question or medical emergency?</p>
            <p className="text-sm text-slate-300 mt-1">Our clinical desk is available to assist you with appointment schedules and patient guidance.</p>
          </div>
          <a
            href="tel:+919311449825"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm shrink-0 transition-colors"
          >
            <HelpCircle size={16} />
            <span>Call +91-9311449825</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
