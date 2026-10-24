import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Stethoscope, Navigation, Calendar } from 'lucide-react';
import './Locations.css';

const clinicLocations = [
  {
    id: 'clinic-jasola',
    badge: 'Main Surgical Facility',
    type: 'Hospital Center',
    title: 'Primary ENT Hospital \u2014 Jasola Vihar',
    address: 'Plot No. 89, Pocket-1, Near Living Style Mall, Jasola Vihar, New Delhi - 110025',
    metro: 'Jasola Vihar Shaheen Bagh (Pink Line)',
    phone: '+919311449825',
    hours: 'Mon \u2013 Sat: 9:00 AM \u2013 8:00 PM',
    speciality: 'Comprehensive ENT & Advanced Surgeries (FESS, Tympanoplasty, Cochlear)',
    mapUrl: 'https://maps.google.com/?q=Plot+No.+89+Pocket-1+Jasola+Vihar+New+Delhi',
    pageUrl: '/location/jasola',
  },
  {
    id: 'clinic-crpark',
    badge: 'South Delhi Clinic',
    type: 'Consultation Clinic',
    title: 'Dr. Kushwah ENT Clinic \u2014 CR Park',
    address: 'J-1981, Near Market No 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, Delhi - 110019',
    metro: 'Nehru Enclave / Greater Kailash (Magenta Line)',
    phone: '+919311449825',
    hours: 'Mon \u2013 Sat: 6:00 PM \u2013 8:00 PM',
    speciality: 'OPD Consultations, Vertigo, Ear & Sinus Diagnostics',
    mapUrl: 'https://maps.google.com/?q=J-1981+CR+Park+New+Delhi',
    pageUrl: '/location/cr-park',
  },
  {
    id: 'clinic-arjun',
    badge: 'Safdarjung Enclave',
    type: 'Speciality Clinic',
    title: 'ENT & Gynaecology Clinic \u2014 Arjun Nagar',
    address: '19 C Basement Arjun Nagar, Near Sukhmani Hospital, Safdarjung Enclave, New Delhi - 110029',
    metro: 'Green Park / AIIMS Metro Station',
    phone: '+919311449825',
    hours: 'Mon \u2013 Sat: Prior Appointment (Call to Confirm)',
    speciality: 'Dual Speciality ENT & Gynaecology Consultations',
    mapUrl: 'https://maps.google.com/?q=19+C+Basement+Arjun+Nagar+Safdarjung+Enclave+New+Delhi',
    pageUrl: '/location/arjun-nagar',
  },
  {
    id: 'clinic-palwal',
    badge: 'Haryana NCR',
    type: 'Hospital Center',
    title: 'Dr. Kushwah ENT Center \u2014 Palwal',
    address: 'Aasha Tower, Ground Floor, New Sohna Road, Near Ambedkar College, Palwal, Haryana - 121103',
    metro: 'Accessible via Delhi-Agra Highway / NH-19',
    phone: '+919311449825',
    hours: 'Mon \u2013 Sat: By Prior Appointment',
    speciality: 'Advanced ENT Surgical Consultation & Triage',
    mapUrl: 'https://maps.google.com/?q=Aasha+Tower+New+Sohna+Road+Palwal+Haryana',
    pageUrl: '/location/palwal',
  },
  {
    id: 'clinic-dhampur',
    badge: 'Regional Facility',
    type: 'Hospital Center',
    title: 'Dr. Kushwah ENT Hospital \u2014 Dhampur',
    address: 'Near RSM Tiraha, Front of Pari Farm House, Muradabad Road, Dhampur, Uttar Pradesh - 246761',
    metro: 'Direct Highway Access (Moradabad Road)',
    phone: '+919311449825',
    hours: 'Mon \u2013 Sat: By Prior Appointment',
    speciality: 'Regional Advanced ENT Surgical Care',
    mapUrl: 'https://maps.google.com/?q=Near+RSM+Tiraha+Muradabad+Road+Dhampur',
    pageUrl: '/location/dhampur',
  },
];

const areas = [
  'Jasola Vihar', 'Sarita Vihar', 'CR Park', 'Chittaranjan Park', 'Safdarjung Enclave', 'Arjun Nagar',
  'Greater Kailash', 'Kalkaji', 'Green Park', 'Hauz Khas', 'Okhla', 'Nehru Place', 'Alaknanda',
  'Govindpuri', 'Faridabad', 'Noida', 'Gurgaon', 'Palwal', 'Dhampur', 'Delhi NCR', 'International Patients'
];

const Locations = () => (
  <section id="locations" className="locations-section section-pad py-16 bg-slate-50/60" aria-labelledby="loc-h2">
    <div className="inner max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="locations-header text-center max-w-3xl mx-auto mb-12">
        <span className="label inline-block px-3.5 py-1 text-xs font-bold text-teal-800 bg-teal-100/80 rounded-full uppercase tracking-wider mb-2">
          Hospital &amp; Clinic Network
        </span>
        <h2 id="loc-h2" className="section-title text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Our ENT Hospital &amp; Clinic Centers
        </h2>
        <p className="section-sub text-base text-slate-600 mt-3 leading-relaxed">
          Dr. (Prof.) Dhirendra Singh Kushwah consults and operates across <strong>5 premier hospital and clinical centers</strong>,
          providing accessible, state-of-the-art care throughout South Delhi, Delhi NCR, Haryana, and Western UP.
        </p>
      </div>

      {/* Grid of Locations */}
      <div className="locations-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clinicLocations.map((loc) => (
          <article
            key={loc.id}
            id={loc.id}
            className="hospital-loc-card bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            itemScope
            itemType="https://schema.org/MedicalClinic"
          >
            <div>
              <div className="loc-card-top flex items-center justify-between mb-3">
                <span className="loc-type-badge text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                  {loc.type}
                </span>
                <span className="loc-tag-badge text-xs font-bold px-2.5 py-1 rounded-md bg-teal-50 text-teal-700 border border-teal-200/50">
                  {loc.badge}
                </span>
              </div>

              <h3 className="loc-title text-xl font-bold text-slate-900 mb-4" itemProp="name">
                <Link href={loc.pageUrl} className="hover:text-teal-700 transition-colors">
                  {loc.title}
                </Link>
              </h3>

              <div className="loc-card-body space-y-3 text-sm text-slate-600 mb-6">
                <div className="loc-row flex items-start gap-2.5">
                  <MapPin size={17} className="text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div itemProp="address">
                    <strong className="block text-slate-900 font-semibold">Address</strong>
                    <span className="text-slate-600">{loc.address}</span>
                  </div>
                </div>

                <div className="loc-row flex items-start gap-2.5">
                  <Navigation size={17} className="text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Connectivity / Metro</strong>
                    <span className="text-slate-600">{loc.metro}</span>
                  </div>
                </div>

                <div className="loc-row flex items-start gap-2.5">
                  <Clock size={17} className="text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">OPD Hours</strong>
                    <span className="text-slate-600">{loc.hours}</span>
                  </div>
                </div>

                <div className="loc-row flex items-start gap-2.5">
                  <Stethoscope size={17} className="text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Clinical Scope</strong>
                    <span className="text-slate-600">{loc.speciality}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="loc-card-actions pt-4 border-t border-slate-100 flex items-center gap-2">
              <a
                href={`tel:${loc.phone}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold transition-colors"
                aria-label={`Call ${loc.title}`}
              >
                <Phone size={14} />
                <span>Call Center</span>
              </a>
              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                aria-label={`Directions to ${loc.title}`}
              >
                <Navigation size={14} />
                <span>Directions</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Coverage Tags */}
      <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 text-center sm:text-left">
          Key Service Areas Across Delhi NCR:
        </h4>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {areas.map((area) => (
            <span key={area} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium">
              {area}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Locations;
