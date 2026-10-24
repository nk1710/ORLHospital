import React from 'react';
import { DoctorImage, FaqAccordion } from "@/components/ui/custom";
import { Award, Calendar, Ear, AirVent, Mic, Wind, Moon, Brain, Stethoscope, FileText } from "lucide-react";

export default function WeCarePage() {
    const faqItems = [
        { q: "What conditions does an ENT specialist treat?", a: "An ENT specialist diagnoses and treats conditions related to the ear, nose, throat, sinus, hearing, allergies, breathing, voice, snoring, sleep-related airway issues, and selected head & neck disorders." },
        { q: "When should I consult an ENT specialist?", a: "If symptoms are persistent, recurrent, worsening, affecting sleep, hearing, breathing, swallowing, or daily quality of life, specialist evaluation is recommended." },
        { q: "Are all ENT conditions surgical?", a: "No. Many ENT conditions are treated successfully through medication, allergy management, lifestyle adjustments, or minimally invasive therapies. Surgery is recommended only when clinically necessary." },
        { q: "Can allergies cause sinus and breathing problems?", a: "Yes. Allergies may lead to chronic nasal inflammation, blocked nose, sinus congestion, snoring, and recurrent ENT symptoms." }
    ];

    return (
        <div className="bg-white">
            {/* HERO SECTION */}
            <section className="relative bg-slate-900 py-20 px-4 md:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col gap-6">
                        <span className="text-teal-400 font-bold uppercase tracking-[0.2em] text-xs">
                            ENT Specialist — New Delhi
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
                            ENT Conditions & Specialized Treatment in Delhi
                        </h1>
                        <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                            Explore expert diagnosis and treatment for ear, nose, sinus, throat, allergy, hearing, snoring, sleep, voice, and head & neck conditions by Dr. Dhirendra Singh Kushwah, ENT specialist in Delhi.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                                <Award size={16} className="text-teal-400" /> 25+ Years Experience
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                                <Stethoscope size={16} className="text-teal-400" /> Comprehensive ENT Care
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION ENT CONDITIONS SECTION */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-slate-800">ENT Conditions</h2>
                            <div className="w-16 h-1 bg-teal-600 rounded" />
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Ear, nose, throat, sinus, hearing, breathing, sleep, voice, and head & neck conditions can significantly affect daily comfort, communication, sleep quality, and long-term health. At Dr. Dhirendra Singh Kushwah's ENT practice, we provide comprehensive evaluation, diagnosis, and treatment for a wide range of ENT disorders, from common everyday concerns to complex surgical conditions.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our approach combines evidence-based diagnosis, patient-centered care, minimally invasive treatment whenever possible, and advanced surgical expertise when clinically required.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Whether symptoms are mild, recurring, chronic, or complex, proper ENT evaluation helps identify the root cause and create the right treatment plan.
                            </p>
                            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">
                                <p className="text-teal-900 font-medium italic">
                                    "Comprehensive ENT evaluation helps identify the root cause and create the right treatment plan for every patient."
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-teal-500/10 rounded-[40px] rotate-3 z-0" />

                            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-video bg-gray-100 flex items-center justify-center">
                                <span className="absolute text-slate-400 text-sm font-medium">
                                    ENT Conditions & Specialized Treatment
                                </span>

                                <iframe
                                    className="relative w-full h-full z-10" // Added z-10 to sit on top of the text
                                    src="https://www.youtube.com/embed/JP7j1t2GuhE"
                                    title="Dr.(Prof.) Dhirendra Singh Kushwah – ENT Conditions & Specialized Treatment"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* COMPREHENSIVE ENT CONDITIONS WE TREAT */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Comprehensive ENT Conditions We Treat</h2>
                        <p className="text-slate-500 mt-4">Specialized care for a wide range of ear, nose, throat, and related conditions</p>
                    </div>

                    {/* NOSE & SINUS DISORDERS */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
                                <AirVent size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">1. Nose & Sinus Disorders</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            {/* Nasal breathing and sinus health play an important role in sleep, smell, immunity, breathing comfort, and overall quality of life. Persistent nasal blockage, allergies, sinus pressure, recurrent infection, or smell loss should not be ignored. */}
                            Nasal breathing and sinus health play an important role in sleep, smell, immunity, breathing comfort, and overall quality of life. Persistent nasal blockage, allergies, sinus pressure, recurrent infections, or reduced sense of smell should not be ignored. An ENT specialist can evaluate nasal and sinus problems and recommend appropriate medical or surgical treatment.
                        </p>
                        <p className="text-slate-600 mb-4 font-medium">We diagnose and manage conditions including:</p>
                        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                            {["Chronic sinusitis", "Deviated nasal septum (DNS)", "Nasal polyps", "Blocked nose / nasal obstruction", "Allergic rhinitis", "Recurrent sinus infections", "Loss of smell (Anosmia)", "Nose bleeding (Epistaxis)", "Snoring related nasal blockage", "Fungal sinusitis"].map((condition, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                    <span className="text-slate-600 text-sm">{condition}</span>
                                </div>
                            ))}
                        </div> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {[
        {
            name: "Chronic sinusitis",
            description:
                "Persistent inflammation of the sinuses that can cause facial pressure, nasal congestion, thick nasal discharge, headache, and reduced sense of smell.",
        },
        {
            name: "Deviated nasal septum (DNS)",
            description:
                "A displaced or crooked nasal septum that can restrict airflow, causing difficulty breathing through the nose, congestion, and sometimes snoring.",
        },
        {
            name: "Nasal polyps",
            description:
                "Soft, non-cancerous growths inside the nose or sinuses that may cause nasal blockage, reduced smell, postnasal drip, and breathing difficulties.",
        },
        {
            name: "Blocked nose / nasal obstruction",
            description:
                "Difficulty breathing through the nose caused by conditions such as nasal swelling, DNS, polyps, allergies, or other structural problems.",
        },
        {
            name: "Allergic rhinitis",
            description:
                "An allergic condition that can cause sneezing, runny or blocked nose, nasal itching, and watery eyes after exposure to allergens.",
        },
        {
            name: "Recurrent sinus infections",
            description:
                "Repeated episodes of sinus infection that may cause facial pain or pressure, nasal discharge, congestion, headache, and other sinus-related symptoms.",
        },
        {
            name: "Loss of smell (Anosmia)",
            description:
                "Reduced or complete loss of the sense of smell, which may occur due to sinus disease, nasal obstruction, infections, polyps, or other conditions.",
        },
        {
            name: "Nose bleeding (Epistaxis)",
            description:
                "Bleeding from the nose that may result from dryness, irritation, injury, allergies, infection, or other nasal conditions.",
        },
        {
            name: "Snoring related nasal blockage",
            description:
                "Nasal obstruction that can make nighttime breathing difficult and may contribute to snoring, mouth breathing, and disturbed sleep.",
        },
        {
            name: "Fungal sinusitis",
            description:
                "A sinus condition involving fungal growth or infection that may cause persistent nasal symptoms, facial pressure, congestion, or other sinus problems.",
        },
    ].map((condition, i) => (
        <div key={i} className="flex items-start gap-3 p-3">
            <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

            <div>
                <h3 className="text-sm font-semibold text-slate-800">
                    {condition.name}
                </h3>

                <p className="text-xs text-slate-600 leading-5 mt-1">
                    {condition.description}
                </p>
            </div>
        </div>
    ))}
</div>
                        <div className="bg-slate-50 p-6 rounded-2xl">
                            <p className="font-medium text-slate-800 mb-2">Common symptoms:</p>
                            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                {["blocked nose", "facial heaviness", "headache", "sneezing", "smell disturbance", "snoring", "mouth breathing", "postnasal drip", "recurrent cold-like symptoms"].map((symptom, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-teal-300 rounded-full" />
                                        <span className="text-slate-600 text-sm">{symptom}</span>
                                    </div>
                                ))}
                            </div> */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {[
        {
            name: "Blocked nose",
            description:
                "Difficulty breathing through the nose due to swelling, allergies, sinus problems, nasal polyps, or structural blockage.",
        },
        {
            name: "Facial heaviness",
            description:
                "A feeling of pressure, fullness, or heaviness around the forehead, cheeks, eyes, or nose that may occur with sinus problems.",
        },
        {
            name: "Headache",
            description:
                "Head or facial pain that may be associated with sinus inflammation, nasal blockage, or pressure within the sinuses.",
        },
        {
            name: "Sneezing",
            description:
                "Frequent or repeated sneezing that may occur due to allergic rhinitis, nasal irritation, or exposure to allergens.",
        },
        {
            name: "Smell disturbance",
            description:
                "Reduced, altered, or complete loss of smell that can occur with sinus disease, nasal polyps, infections, or nasal obstruction.",
        },
        {
            name: "Snoring",
            description:
                "Noisy breathing during sleep that may be associated with nasal obstruction, mouth breathing, or other upper-airway problems.",
        },
        {
            name: "Mouth breathing",
            description:
                "Breathing through the mouth instead of the nose, often associated with nasal blockage, allergies, enlarged tissues, or other airway conditions.",
        },
        {
            name: "Postnasal drip",
            description:
                "A sensation of mucus draining from the nose into the throat, commonly associated with sinus problems, allergies, or nasal inflammation.",
        },
        {
            name: "Recurrent cold-like symptoms",
            description:
                "Repeated episodes of congestion, nasal discharge, sneezing, or throat irritation that may sometimes be related to underlying nasal or sinus conditions.",
        },
    ].map((symptom, i) => (
        <div key={i} className="flex items-start gap-3 p-3">
            <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

            <div>
                <h3 className="text-sm font-semibold text-slate-800">
                    {symptom.name}
                </h3>

                <p className="text-xs text-slate-600 leading-5 mt-1">
                    {symptom.description}
                </p>
            </div>
        </div>
    ))}
</div>
                        </div>
                    </div>

                    {/* EAR CONDITIONS */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
                                <Ear size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">2. Ear Conditions</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            {/* Ear disorders may affect hearing, balance, communication, and overall daily functioning. */}
                            Ear disorders may affect hearing, balance, communication, and overall daily functioning. ENT specialists evaluate conditions involving the outer, middle, and inner ear, including infections, hearing problems, ear discharge, tinnitus, and balance disorders. Early assessment can help identify the underlying cause and guide appropriate medical, hearing-related, or surgical treatment.
                        </p>
                        <p className="text-slate-600 mb-4 font-medium">Conditions evaluated include:</p>
                        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {["Ear pain", "Ear infection", "Hearing loss", "Tinnitus (ringing in ears)", "Vertigo / dizziness", "Ear discharge", "Wax blockage", "Eardrum perforation", "Middle ear disease", "Hearing-related disorders"].map((condition, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                    <span className="text-slate-600 text-sm">{condition}</span>
                                </div>
                            ))}
                        </div> */}
                        
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {[
        {
            name: "Ear Infections",
            description:
                "Infections of the outer or middle ear may cause ear pain, discharge, fullness, fever, or temporary hearing difficulty.",
        },
        {
            name: "Hearing Loss",
            description:
                "Hearing difficulties may develop gradually or suddenly due to infections, age-related changes, noise exposure, or problems affecting the ear.",
        },
        {
            name: "Tinnitus",
            description:
                "Persistent ringing, buzzing, humming, or other sounds in the ear may require an ENT and hearing evaluation.",
        },
        {
            name: "Ear Discharge",
            description:
                "Recurrent or persistent fluid or pus coming from the ear can indicate infection, inflammation, or an underlying ear problem.",
        },
        {
            name: "Blocked or Full Ears",
            description:
                "A feeling of pressure or blockage may be associated with earwax, fluid, Eustachian tube dysfunction, or other conditions.",
        },
        {
            name: "Vertigo & Balance Disorders",
            description:
                "Inner-ear problems can cause spinning sensations, dizziness, imbalance, nausea, or difficulty walking.",
        },
        {
            name: "Eardrum Problems",
            description:
                "Perforation or other damage to the eardrum may affect hearing and sometimes cause recurrent ear discharge.",
        },
        {
            name: "Pediatric Ear Problems",
            description:
                "Children may experience recurrent ear infections, hearing difficulties, or fluid behind the eardrum that can affect communication and learning.",
        },
    ].map((condition, i) => (
        <div key={i} className="flex items-start gap-3 p-3">
            <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

            <div>
                <h3 className="text-sm font-semibold text-slate-800">
                    {condition.name}
                </h3>

                <p className="text-xs text-slate-600 leading-5 mt-1">
                    {condition.description}
                </p>
            </div>
        </div>
    ))}
</div>
                    </div>

                    {/* THROAT & VOICE DISORDERS */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
                                <Mic size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">3. Throat & Voice Disorders</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            {/* Throat discomfort, swallowing issues, voice changes, and persistent irritation may indicate underlying ENT conditions requiring evaluation. */}
                            Throat discomfort, swallowing difficulties, voice changes, and persistent irritation may indicate underlying ENT conditions requiring evaluation. ENT specialists assess problems affecting the throat, vocal cords, tonsils, and surrounding structures. Early evaluation can help identify the cause of persistent symptoms and determine whether medical, voice-related, or surgical treatment may be appropriate.
                        </p>
                        <p className="text-slate-600 mb-4 font-medium">Conditions include:</p>
                        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {["Chronic sore throat", "Tonsillitis", "Voice hoarseness", "Vocal strain", "Swallowing difficulty", "Throat irritation", "Recurrent throat infection", "Voice fatigue", "Laryngitis", "Chronic cough related throat irritation"].map((condition, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                    <span className="text-slate-600 text-sm">{condition}</span>
                                </div>
                            ))}
                        </div> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {[
        {
            name: "Chronic Sore Throat",
            description:
                "Persistent throat pain or irritation may be associated with infections, allergies, acid reflux, or other ENT conditions.",
        },
        {
            name: "Difficulty Swallowing (Dysphagia)",
            description:
                "Problems swallowing food, liquids, or even saliva may require specialist assessment to identify the underlying cause.",
        },
        {
            name: "Voice Changes & Hoarseness",
            description:
                "Persistent hoarseness, weak voice, or changes in voice quality can be related to vocal cord or throat conditions.",
        },
        {
            name: "Tonsil & Throat Infections",
            description:
                "Recurrent tonsillitis, throat infections, and inflammation can cause pain, fever, difficulty swallowing, and swollen tonsils.",
        },
        {
            name: "Vocal Cord Disorders",
            description:
                "Nodules, polyps, inflammation, and other vocal cord problems may affect voice quality and speaking ability.",
        },
        {
            name: "Persistent Throat Irritation",
            description:
                "Ongoing throat clearing, coughing, burning, or a foreign-body sensation may be linked to allergies, post-nasal drip, reflux, or other conditions.",
        },
    ].map((condition, i) => (
        <div key={i} className="flex items-start gap-3 p-3">
            <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

            <div>
                <h3 className="text-sm font-semibold text-slate-800">
                    {condition.name}
                </h3>

                <p className="text-xs text-slate-600 leading-5 mt-1">
                    {condition.description}
                </p>
            </div>
        </div>
    ))}
</div>
                    </div>

                    {/* ALLERGY & BREATHING CONDITIONS */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
                                <Wind size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">4. Allergy & Breathing Conditions</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            {/* ENT-related allergy and breathing issues can disrupt sleep, concentration, energy, and respiratory comfort. */}
                            ENT-related allergy and breathing issues can disrupt sleep, concentration, energy, and respiratory comfort. Allergic reactions and chronic nasal problems may cause sneezing, nasal congestion, runny nose, post-nasal drip, throat irritation, and difficulty breathing through the nose. An ENT evaluation can help identify contributing factors and guide appropriate medical or surgical treatment.
                        </p>
                        <p className="text-slate-600 mb-4 font-medium">Conditions include:</p>
                        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {["Allergic rhinitis", "Nasal allergy", "Seasonal allergy", "Chronic congestion", "Sinus allergy", "Breathing discomfort", "Dust allergy related ENT symptoms"].map((condition, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                    <span className="text-slate-600 text-sm">{condition}</span>
                                </div>
                            ))}
                        </div> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {[
        {
            name: "Allergic Rhinitis",
            description:
                "Allergies can cause repeated sneezing, runny or blocked nose, itching, and watery eyes, often triggered by dust, pollen, pollution, or other allergens.",
        },
        {
            name: "Nasal Allergy",
            description:
                "Persistent nasal allergy symptoms can interfere with comfortable breathing, sleep, and daily activities.",
        },
        {
            name: "Chronic Nasal Congestion",
            description:
                "Ongoing blockage of the nose may make breathing difficult and can contribute to mouth breathing and disturbed sleep.",
        },
        {
            name: "Post-Nasal Drip",
            description:
                "Excess mucus draining toward the throat may cause throat clearing, coughing, irritation, or a sensation of mucus in the throat.",
        },
        {
            name: "Sinus & Allergy-Related Problems",
            description:
                "Allergies may contribute to nasal inflammation and worsening sinus-related symptoms in some patients.",
        },
        {
            name: "Breathing Difficulty Through the Nose",
            description:
                "Structural or inflammatory nasal problems can restrict airflow and make normal nasal breathing difficult, particularly during sleep.",
        },
    ].map((condition, i) => (
        <div key={i} className="flex items-start gap-3 p-3">
            <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

            <div>
                <h3 className="text-sm font-semibold text-slate-800">
                    {condition.name}
                </h3>

                <p className="text-xs text-slate-600 leading-5 mt-1">
                    {condition.description}
                </p>
            </div>
        </div>
    ))}
</div>
                    </div>

                    {/* SNORING & SLEEP-RELATED ENT DISORDERS */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
                                <Moon size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">5. Snoring & Sleep-Related ENT Disorders</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            {/* Sleep-related ENT problems often go untreated despite major effects on health. */}
                            Sleep-related ENT problems often go untreated despite their significant impact on sleep quality, daytime energy, and overall health. Persistent snoring, mouth breathing, nasal blockage, disturbed sleep, and breathing pauses during sleep may be associated with conditions such as obstructive sleep apnea (OSA). ENT evaluation can help identify underlying nose, throat, tonsil, or airway-related problems and guide appropriate treatment.
                        </p>
                        <p className="text-slate-600 mb-4 font-medium">We evaluate:</p>
                        {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                            {["Snoring", "Mouth breathing", "Nasal airway blockage", "Sleep-disordered breathing", "Suspected obstructive sleep apnea symptoms", "Throat-related airway narrowing"].map((condition, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                    <span className="text-slate-600 text-sm">{condition}</span>
                                </div>
                            ))}
                        </div> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
    {[
        {
            name: "Snoring",
            description:
                "Persistent or loud snoring may be related to nasal blockage, enlarged tissues, or obstructive sleep apnea and should be properly evaluated.",
        },
        {
            name: "Mouth breathing",
            description:
                "Breathing through the mouth, especially during sleep, may be associated with nasal obstruction, enlarged adenoids, or other airway problems.",
        },
        {
            name: "Sleep apnea",
            description:
                "Assessment and treatment of interrupted breathing during sleep, including symptoms such as loud snoring, choking, and daytime sleepiness.",
        },
        {
            name: "Nasal obstruction",
            description:
                "Evaluation of blocked nasal passages that can make breathing difficult and contribute to snoring or mouth breathing.",
        },
        {
            name: "Enlarged tonsils and adenoids",
            description:
                "Evaluation of enlarged tonsils or adenoids that may interfere with normal breathing, particularly during sleep.",
        },
        {
            name: "Poor sleep quality",
            description:
                "Assessment of sleep-related breathing problems that may cause frequent waking, restless sleep, or daytime tiredness.",
        },
    ].map((condition, i) => (
        <div key={i} className="flex items-start gap-3 p-3">
            <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

            <div>
                <h3 className="text-sm font-semibold text-slate-800">
                    {condition.name}
                </h3>

                <p className="text-xs text-slate-600 leading-5 mt-1">
                    {condition.description}
                </p>
            </div>
        </div>
    ))}
</div>
                    </div>

                    {/* HEAD & NECK CONDITIONS */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center">
                                <Brain size={20} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-800">6. Head & Neck Conditions</h3>
                        </div>
                        <p className="text-slate-600 mb-4">
                            {/* ENT specialists also evaluate several head and neck conditions affecting glands, lymph nodes, oral structures, and neck tissues. */}
                            ENT specialists also evaluate and treat a wide range of head and neck conditions affecting the salivary glands, lymph nodes, thyroid region, oral cavity, throat, and neck tissues. Early evaluation can help identify infections, swellings, cysts, tumors, and other abnormalities, allowing timely diagnosis and appropriate treatment.
                        </p>
                        <p className="text-slate-600 mb-4 font-medium">Conditions include:</p>
                        {/* <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                            {["Neck swelling", "Salivary gland disorders", "Oral cavity concerns", "Lumps in neck", "Thyroid-related neck symptoms", "Persistent gland swelling"].map((condition, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
                                    <span className="text-slate-600 text-sm">{condition}</span>
                                </div>
                            ))}
                        </div> */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[
        {
            name: "Neck swelling",
            description:
                "Evaluation and treatment of unusual or persistent swelling in the neck, including swollen lymph nodes and other neck masses.",
        },
        {
            name: "Salivary gland disorders",
            description:
                "Diagnosis and management of salivary gland problems such as swelling, infection, stones, and other gland-related conditions.",
        },
        {
            name: "Oral cavity concerns",
            description:
                "Assessment of persistent mouth ulcers, oral lesions, throat-related discomfort, and other concerns affecting the oral cavity.",
        },
        {
            name: "Lumps in neck",
            description:
                "Careful examination of new or persistent neck lumps to identify their underlying cause and determine appropriate treatment.",
        },
        {
            name: "Thyroid-related neck symptoms",
            description:
                "Evaluation of neck swelling, discomfort, or other symptoms that may be associated with thyroid-related conditions.",
        },
        {
            name: "Persistent gland swelling",
            description:
                "Assessment of ongoing swelling of glands or lymph nodes in the neck to determine the cause and appropriate management.",
        },
    ].map((condition, i) => (
        <div
            key={i}
            className="p-4 rounded-lg border border-slate-100 bg-white hover:shadow-sm transition-shadow"
        >
            <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

                <div>
                    <h3 className="text-base font-semibold text-slate-800 mb-1">
                        {condition.name}
                    </h3>

                    <p className="text-sm text-slate-600 leading-6">
                        {condition.description}
                    </p>
                </div>
            </div>
        </div>
    ))}
</div>
                    </div>
                </div>
            </section>

            {/* VIDEO SECTION */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Video - Receive top-quality ENT care from our highly experienced specialist</h2>
                            <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/QgiVZO9DJjU"
                                    title="ENT Care Specialist"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW ENT CONDITIONS ARE DIAGNOSED */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">How ENT Conditions Are Diagnosed</h2>
                        <div className="w-16 h-1 bg-teal-600 rounded mx-auto mt-4" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {["detailed symptom review", "clinical ENT examination", "hearing assessment", "nasal endoscopy", "throat visualization", "imaging studies (when indicated)", "allergy evaluation", "sleep assessment", "balance evaluation"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl">
                                <div className="w-2 h-2 bg-teal-500 rounded-full" />
                                <span className="text-slate-600 text-sm">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TREATMENT PHILOSOPHY */}
            <section className="py-20 px-4 md:px-8 bg-teal-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900">Treatment Philosophy</h2>
                        <div className="w-16 h-1 bg-teal-600 rounded mx-auto mt-4" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {["accurate diagnosis first", "conservative care where appropriate", "minimally invasive intervention when needed", "personalized treatment planning", "long-term symptom relief", "safe surgical care when clinically indicated", "follow-up and recovery support"].map((item, i) => (
                            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm text-center">
                                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <FileText size={18} />
                                </div>
                                <p className="text-slate-600 font-medium text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY PATIENTS CHOOSE */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Why Patients Choose Dr.(Prof.) Dhirendra Singh Kushwah
                            </h2>
                            <div className="w-16 h-1 bg-teal-600 rounded" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {["comprehensive ENT expertise", "advanced diagnosis", "patient-focused care", "ethical treatment recommendations", "minimally invasive philosophy", "long-term disease management", "specialized ENT consultation in Delhi NCR"].map((reason, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-white rounded-full" />
                                        </div>
                                        <span className="text-slate-600">{reason}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-teal-500/10 rounded-[40px] rotate-3" />
                            <DoctorImage
                                src="images/dherendra_patient.png"
                                alt="Dr. Dhirendra Singh Kushwah – ENT Specialist"
                                className="relative rounded-[32px] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <FaqAccordion faqItems={faqItems} />

            {/* CONTACT CTA */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto bg-teal-600 rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Book Your ENT Consultation Today
                        </h2>
                        <p className="text-teal-100 text-lg max-w-2xl">
                            Get expert diagnosis and treatment for ear, nose, throat, sinus, allergy, hearing, snoring, sleep, voice, and head & neck conditions.
                        </p>
                        {/* <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <a href="tel:+919311449825" className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold shadow-xl hover:bg-gray-100 transition-all flex items-center gap-2">
                                <Calendar size={20} /> Call/WhatsApp: +91-9311449825
                            </a>
                            <a href="mailto:drdhirendrasinghent@gmail.com" className="bg-teal-900/30 backdrop-blur-md border border-teal-400/30 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-900/50 transition-all">
                                Email: drdhirendrasinghent@gmail.com
                            </a>
                        </div> */}
                        <div className="text-teal-100 text-sm mt-4 space-y-1">
                            <p>CR Park Clinic: J-1981, Near Market No. 1, Bipin Chandra Pal Marg, New Delhi – 110019</p>
                            <p>Arjun Nagar Clinic: 19-C, Arjun Nagar, Safdarjung Enclave, New Delhi – 110029</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}