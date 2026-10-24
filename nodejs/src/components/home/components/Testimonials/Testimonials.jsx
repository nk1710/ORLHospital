import React from 'react';
import { Quote, Star, MapPin, BadgeCheck } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    text: 'After years of visiting multiple ENT clinics in Delhi without relief, Dr. (Prof.) Dhirendra Singh Kushwah properly diagnosed my cholesteatoma and performed a successful stitchless mastoidectomy. His surgical precision, patience, and attentive post-operative care were extraordinary.',
    name: 'Rajesh Verma',
    initials: 'RV',
    tag: 'Mastoidectomy & Cholesteatoma',
    location: 'South Delhi',
    rating: 5,
  },
  {
    text: 'My 6-year-old son suffered from painful recurrent ear infections and glue ear. Dr. Dhirendra Singh Kushwah provided compassionate care and explained every step patiently to our family. We deeply appreciated his child-friendly, reassuring bedside manner.',
    name: 'Priya Malhotra',
    initials: 'PM',
    tag: 'Pediatric ENT & Glue Ear',
    location: 'Delhi NCR',
    rating: 5,
  },
  {
    text: 'I traveled from Faridabad specifically for Dr. (Prof.) Dhirendra Singh Kushwah\u2019s packless septoplasty. The procedure was truly painless with zero nasal packing, and I breathed freely from day one. I wholeheartedly recommend him for any nasal or sinus surgery.',
    name: 'Arun Sarin',
    initials: 'AS',
    tag: 'Packless Septoplasty (DNS)',
    location: 'Faridabad / NCR',
    rating: 5,
  },
];

const Testimonials = () => (
  <section
    className="testimonials-section section-pad py-16 bg-slate-50/70"
    aria-labelledby="test-h2"
  >
    <div className="inner max-w-7xl mx-auto px-4 sm:px-6">

      {/* HEADER */}
      <div className="testimonials-header text-center max-w-3xl mx-auto mb-12">
        <span className="label inline-block px-3.5 py-1 text-xs font-bold text-teal-800 bg-teal-100/80 rounded-full uppercase tracking-wider mb-2">
          Verified Patient Reviews
        </span>

        <h2 id="test-h2" className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          What Our Patients Say About Their Care &amp; Recovery
        </h2>

        <p className="text-base text-slate-600 mt-2.5 leading-relaxed">
          Over 15,000 satisfied patients across Delhi NCR, Haryana, Western UP, and abroad have trusted Dr. (Prof.) Dhirendra Singh Kushwah for advanced medical and surgical ENT treatments.
        </p>

        {/* Aggregate Badge */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/80 shadow-2xs">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={15} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs font-bold text-slate-800">
            4.9 / 5.0 Rating based on 725+ Verified Patient Consultations
          </span>
        </div>
      </div>

      {/* TESTIMONIALS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, idx) => (
          <article
            key={idx}
            className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-teal-50 text-teal-800 border border-teal-200/50">
                  {t.tag}
                </span>
                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <div className="mb-4 text-teal-600/30">
                <Quote size={28} />
              </div>

              <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center shrink-0">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 flex items-center gap-1">
                  <span>{t.name}</span>
                  <BadgeCheck size={14} className="text-teal-600" />
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin size={11} />
                  <span>{t.location}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

    </div>
  </section>
);

export default Testimonials;
