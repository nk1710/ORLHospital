import React from 'react';
import Link from 'next/link';
import { Phone, Calendar, Clock, ShieldCheck, MapPin } from 'lucide-react';
import './CTASection.css';

const CTASection = () => (
  <section className="cta-hospital-section" role="complementary" aria-label="Appointment booking call to action">
    <div className="inner">
      <div className="cta-content-box">
        <div className="cta-badge">Hospital OPD &amp; Emergency Consultation</div>
        <h2>Book Your ENT Consultation in Delhi Today</h2>
        <p>
          Don't let ear, nose, or throat (ENT) problems go undiagnosed. Consult{' '}
          <strong>Dr. (Prof.) Dhirendra Singh Kushwah</strong> — Senior ENT Specialist &amp;
          Head-Neck Surgeon in Delhi for accurate diagnosis and evidence-based surgical treatment at Jasola Vihar, CR Park, and Arjun Nagar (Safdarjung Enclave).
        </p>

        <div className="cta-trust-tags">
          <span className="cta-tag">
            <Clock size={14} />
            Same-Day OPD Available
          </span>
          <span className="cta-tag">
            <ShieldCheck size={14} />
            Cashless Mediclaim Accepted
          </span>
          <span className="cta-tag">
            <MapPin size={14} />
            5 Hospital &amp; Clinic Centers
          </span>
        </div>

        <div className="cta-actions">
          <a href="tel:+919311449825" className="btn-call-emergency">
            <Phone size={18} />
            <span>Call +91-9311449825</span>
          </a>
          <Link href="/contact" className="btn-book-consult">
            <Calendar size={18} />
            <span>Book Online Appointment</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
