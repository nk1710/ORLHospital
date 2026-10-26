import React from 'react';
import Link from 'next/link';
import { PhoneCall, CalendarCheck, MapPin, ShieldCheck, ArrowRight, Clock } from 'lucide-react';
import './HospitalQuickActions.css';

const hospitalPillars = [
  {
    icon: PhoneCall,
    tag: 'Emergency & Acute Care',
    title: '24/7 Acute ENT Assistance',
    desc: 'Immediate triage for severe nosebleeds (epistaxis), foreign body removal, acute ear pain & sudden hearing loss.',
    actionLabel: 'Call +91-9311449825',
    actionHref: 'tel:+919311449825',
    isEmergency: true,
  },
  {
    icon: CalendarCheck,
    tag: 'Priority Appointments',
    title: 'OPD & Teleconsultation',
    desc: 'Consult Dr. (Prof.) Dhirendra Singh Kushwah in person or via high-definition video call with minimal waiting time.',
    actionLabel: 'Book Consultation',
    actionHref: '/contact',
    isEmergency: false,
  },
  {
    icon: MapPin,
    tag: '5 Centers in Delhi NCR',
    title: 'Hospital & Clinic Network',
    desc: 'State-of-the-art surgical facilities and clinics in Jasola Vihar, CR Park, Arjun Nagar, Palwal, and Dhampur.',
    actionLabel: 'View All Locations',
    actionHref: '#locations',
    isEmergency: false,
  },
  {
    icon: ShieldCheck,
    tag: 'Insurance Assistance',
    title: 'Cashless Mediclaim & TPA',
    desc: 'Dedicated hospital desk for hassle-free cashless admission and reimbursement for all ENT surgeries.',
    actionLabel: 'Insurance Desk',
    actionHref: '/contact',
    isEmergency: false,
  },
];

export default function HospitalQuickActions() {
  return (
    <section className="hospital-actions-section" aria-label="Hospital Quick Services">
      <div className="inner">
        <h2 className="sr-only">Emergency Services and Clinical Quick Actions</h2>
        <div className="hospital-actions-grid">
          {hospitalPillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className={`hospital-action-card ${item.isEmergency ? 'emergency-card' : ''}`}
              >
                <div className="action-card-header">
                  <div className={`action-icon-wrap ${item.isEmergency ? 'emergency-icon' : ''}`}>
                    <Icon size={24} />
                  </div>
                  <span className="action-tag">{item.tag}</span>
                </div>

                <div className="action-card-body">
                  <h3 className="action-title">{item.title}</h3>
                  <p className="action-desc">{item.desc}</p>
                </div>

                <div className="action-card-footer">
                  <a
                    href={item.actionHref}
                    className={`action-btn ${item.isEmergency ? 'emergency-btn' : ''}`}
                  >
                    <span>{item.actionLabel}</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

