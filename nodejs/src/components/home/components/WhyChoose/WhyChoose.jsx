import React from 'react'; 
import { Award, ShieldCheck, Stethoscope, BookOpenCheck, HeartHandshake, Globe2, } from 'lucide-react'; 
import './WhyChoose.css'; const reasons = [ { icon: Award, title: '25+ Years of ENT Experience', desc: 'Over two decades of clinical and surgical experience in Otorhinolaryngology, covering a wide range of ear, nose, throat, head and neck conditions.', }, 
    { icon: ShieldCheck, title: 'Specialised Septoplasty Approach', desc: 'Experienced in packless septoplasty techniques designed to improve postoperative comfort and support a smoother recovery when clinically appropriate.', }, 
    { icon: Stethoscope, title: 'Comprehensive ENT Expertise', desc: 'Expertise across otology, rhinology, laryngology, paediatric ENT, neuro-otology, cochlear implants, skull base surgery and head & neck conditions.', }, 
    { icon: BookOpenCheck, title: 'Evidence-Based ENT Care', desc: 'Treatment decisions are guided by clinical evidence, established ENT guidelines and the individual needs, symptoms and medical history of each patient.', }, 
    { icon: HeartHandshake, title: 'Personalised Patient Care', desc: 'Each patient receives an individual evaluation and treatment plan, with clear communication and attention to comfort, safety and informed decision-making.', }, 
    { icon: Globe2, title: 'Patients From India & Abroad', desc: 'Patients from Delhi NCR, across India and internationally seek consultation and specialised ENT treatment in Delhi for a wide range of complex conditions.', }, ]; 
    const WhyChoose = () => ( <section className="why-section section-pad" aria-labelledby="why-h2" > 
    <div className="inner"> 
        {/* HEADER */} 
        <div className="why-header"> 
            <span className="label label-light"> Why Choose Dr.(Prof.) Dhirendra Singh Kushwah </span> 
            <h2 id="why-h2"> Trusted ENT Care in Delhi, <span> Built Around You</span> </h2> 
            <p> Beyond surgical expertise, Dr. (Prof.) Dhirendra Singh Kushwah combines extensive clinical experience, evidence-based treatment and personalised patient care for conditions affecting the ear, nose, throat, head and neck. </p> 
        </div> 
        {/* REASONS */} 
        <div className="why-grid"> {reasons.map((r) => { const Icon = r.icon; 
        return ( 
        <article className="why-card" key={r.title}> 
            {/* CENTERED ICON */} 
            <div className="why-icon-wrap"> 
                <div className="why-icon"> 
                    <Icon size={27} strokeWidth={1.8} aria-hidden="true" /> 
                </div> 
            </div> 
            {/* CONTENT */} 
            <div className="why-card-content"> 
                <h3>{r.title}</h3> 
                <p>{r.desc}</p> 
            </div> {/* ACCENT */} 
            <div className="why-card-line"></div> 
        </article> ); })} 
    </div> 
    {/* TRUST BAR */} 
    <div className="why-trust-bar"> 
        <div className="why-trust-item"> 
            <strong>25+</strong> 
            <span>Years Experience</span> 
        </div> 
    <div className="why-trust-divider">
</div> 
<div className="why-trust-item"> 
    <strong>ENT</strong> 
    <span>Specialist & Surgeon</span> 
</div> 
<div className="why-trust-divider"></div> 
<div className="why-trust-item"> 
    <strong>Delhi</strong> 
    <span>South Delhi Practice</span> 
</div> 
<div className="why-trust-divider"></div> 
<div className="why-trust-item"> 
    <strong>Hindi + English</strong> 
    <span>Patient Communication</span> 
</div> 
</div> 
</div> 
</section> ); 
export default WhyChoose;