import React from 'react';
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { DoctorImage, FaqAccordion } from "@/components/ui/custom";
import { Mic, ShieldAlert, Award, Calendar, Activity, Stethoscope } from "lucide-react";

export const metadata = {
    title:
        "Voice & Throat Specialist in Delhi | Dr. Dhirendra Singh Kushwah",

    description:
        "Expert voice and throat care in Delhi for hoarseness, vocal cord disorders, laryngitis, swallowing problems, tonsillitis, LPR and other laryngology conditions with advanced ENT evaluation and treatment.",

    alternates: {
        canonical:
            "https://www.drdhirendrasinghkushwah.com/conditions/voice-throat",
    },
};

export default async function VoiceThroatPage() {
    const specializationData = [
        { institution: "Voice & Laryngeal Disorders", focus: "Evaluation and treatment of hoarseness, voice change and vocal cord problems" },
        { institution: "Vocal Cord & Laryngeal Surgery", focus: "Endoscopic and microsurgical treatment for selected structural lesions" },
        { institution: "Swallowing & Throat Disorders", focus: "Assessment of swallowing difficulty, throat discomfort and related conditions" },
        { institution: "Laryngopharyngeal Reflux (LPR)", focus: "Diagnosis and management of reflux-related throat and voice symptoms" },
    ];

    const trustPoints = [
        {
            title: "25+ Years of ENT Experience",
            desc: "Extensive clinical and surgical experience in the diagnosis and treatment of ear, nose and throat disorders.",
            icon: <Award className="text-teal-400 w-6 h-6" />
        },
        {
            title: "Advanced ENT Evaluation",
            desc: "Detailed examination with appropriate endoscopic and diagnostic assessment based on the patient's symptoms.",
            icon: <Activity className="text-teal-400 w-6 h-6" />
        },
        {
            title: "Patient-Centred Treatment",
            desc: "Treatment is planned according to the diagnosis, severity, lifestyle needs and whether medical, voice or surgical care is appropriate.",
            icon: <ShieldAlert className="text-teal-400 w-6 h-6" />
        }
    ];

    const faqItems = [
        { q: "When should I see an ENT specialist for hoarseness?", a: "Occasional hoarseness may occur with a cold, voice overuse or throat irritation. Persistent, recurrent or unexplained hoarseness should be assessed by an ENT specialist, particularly when it does not improve, keeps returning, or is associated with swallowing difficulty, breathing problems, neck swelling, pain or coughing blood." },
        { q: "What causes a hoarse or changed voice?", a: "Common causes include laryngitis, vocal strain, vocal cord nodules or polyps, reflux-related irritation, allergies and smoking. Less common causes include vocal cord paralysis, neurological disorders and laryngeal growths. The cause should be identified before treatment is selected." },
        { q: "How are vocal cord problems diagnosed?", a: "Depending on the symptoms, an ENT examination may include flexible or rigid laryngoscopy, video laryngoscopy, videostroboscopy, voice assessment or other investigations. The exact tests depend on the suspected condition." },
        { q: "Can vocal cord nodules or polyps be treated without surgery?", a: "Some vocal cord lesions may improve with voice rest, vocal hygiene, treatment of contributing conditions and professional voice therapy. Surgery may be considered when a structural lesion persists, significantly affects the voice or does not respond adequately to appropriate conservative treatment." },
        { q: "What is LPR and can it affect the voice?", a: "Laryngopharyngeal reflux (LPR) occurs when stomach contents reach the throat or voice box and may contribute to throat clearing, cough, irritation, globus sensation or voice changes. Treatment is based on the overall clinical assessment and may include lifestyle measures and medicines when appropriate." },
        { q: "What happens if a voice or throat problem is not treated on time?", a: "The consequences depend on the underlying condition. Some problems may settle without complications, while persistent inflammation, structural vocal cord lesions, swallowing disorders or airway problems may worsen or continue to affect communication, eating, sleep and quality of life. Persistent or unexplained symptoms should be evaluated rather than repeatedly self-treated." },
        { q: "How long does voice and throat treatment take?", a: "Treatment time varies widely. Minor inflammatory conditions may improve within days to a few weeks, while voice therapy can require several weeks or longer. Recovery after endoscopic or laryngeal surgery depends on the procedure and individual healing. Your ENT specialist can provide a more specific timeline after diagnosis." },
        { q: "How do I book a voice and throat consultation in Delhi?", a: "Call or WhatsApp Dr. Dhirendra Singh Kushwah's clinic at +91-9311449825, or email drdhirendrasinghent@gmail.com. Appointments are available at clinic locations in South Delhi by appointment." }
    ];

    const conditions = [
        {
            title: "Hoarseness & Voice Change",
            description: "Persistent hoarseness, weak voice, rough voice, breathy voice or a change in voice quality may result from inflammation, vocal strain, vocal cord lesions, reflux or other laryngeal conditions. Assessment helps identify the cause."
        },
        {
            title: "Vocal Cord Nodules",
            description: "Vocal cord nodules are benign lesions often associated with repeated voice strain or vocal overuse. Treatment may include voice therapy, vocal hygiene and management of contributing factors, with surgery considered in selected persistent cases."
        },
        {
            title: "Vocal Cord Polyps",
            description: "Vocal cord polyps are benign growths that may cause persistent hoarseness or an altered voice. Treatment depends on the lesion and may include voice therapy or endoscopic microlaryngeal surgery when clinically indicated."
        },
        {
            title: "Laryngitis",
            description: "Laryngitis is inflammation of the larynx and may cause hoarseness, weak voice, throat irritation and cough. Viral illness, voice overuse, smoking, reflux and other factors can contribute."
        },
        {
            title: "Vocal Cord Paralysis",
            description: "Vocal cord paralysis can affect voice quality, coughing and swallowing and, in some cases, breathing. Evaluation is important to identify the underlying cause and determine whether observation, voice therapy, injection treatment or surgery is appropriate."
        },
        {
            title: "Laryngopharyngeal Reflux (LPR)",
            description: "LPR may contribute to chronic throat clearing, cough, throat irritation, globus sensation and voice changes. Treatment focuses on the underlying reflux and other contributing factors identified during assessment."
        },
        {
            title: "Tonsillitis & Recurrent Throat Infection",
            description: "Tonsillitis can cause sore throat, painful swallowing, fever, swollen tonsils and enlarged neck glands. Recurrent or severe infections may require ENT assessment and, in selected patients, consideration of tonsil surgery."
        },
        {
            title: "Difficulty Swallowing (Dysphagia)",
            description: "Difficulty swallowing food, liquids or saliva can have many causes. Persistent dysphagia, choking, coughing while eating or unexplained weight loss should be medically assessed to identify the cause and reduce the risk of complications."
        },
        {
            title: "Globus Sensation",
            description: "Globus is the sensation of a lump or something stuck in the throat without a true blockage. Reflux, muscle tension, throat irritation and other conditions can contribute, so persistent symptoms should be evaluated."
        },
        {
            title: "Vocal Cord Cysts",
            description: "Vocal cord cysts are benign lesions that can affect vibration and voice quality. Depending on the lesion and symptoms, treatment may involve voice therapy or microlaryngeal surgery."
        },
        {
            title: "Spasmodic Dysphonia",
            description: "Spasmodic dysphonia is a neurological voice disorder that can cause involuntary changes in voice production. Specialist evaluation helps distinguish it from other causes of strained, broken or breathy speech."
        },
        {
            title: "Laryngeal & Throat Growths",
            description: "Persistent voice change, swallowing difficulty, throat pain, neck swelling or other unexplained symptoms may occasionally be associated with a growth in the larynx or throat. Early ENT assessment is important when warning symptoms are present."
        }
    ];

    const symptoms = [
        {
            title: "Persistent Hoarseness",
            description: "A rough, weak, breathy or strained voice that persists or keeps returning should be evaluated to identify the underlying cause."
        },
        {
            title: "Voice Fatigue",
            description: "Difficulty sustaining the voice, frequent voice breaks or tiring quickly while speaking may indicate a voice-use or laryngeal problem."
        },
        {
            title: "Throat Pain or Irritation",
            description: "Persistent throat discomfort, burning, irritation or pain can occur with infection, reflux, voice overuse and other throat conditions."
        },
        {
            title: "Frequent Throat Clearing",
            description: "Repeated throat clearing may be associated with post-nasal symptoms, reflux, throat irritation or other causes."
        },
        {
            title: "Chronic Cough",
            description: "A cough that persists may have several causes, including reflux, upper-airway problems, allergies or laryngeal irritation."
        },
        {
            title: "Lump-in-Throat Sensation",
            description: "A persistent feeling of something stuck or a lump in the throat may be related to globus, reflux, muscle tension or another condition."
        },
        {
            title: "Difficulty Swallowing",
            description: "Difficulty moving food or liquids from the mouth to the throat, coughing during meals or food sticking should be assessed when persistent."
        },
        {
            title: "Painful Swallowing",
            description: "Pain while swallowing can occur with throat infections, inflammation, ulcers and other conditions and may require examination when persistent or severe."
        },
        {
            title: "Breathing Difficulty or Noisy Breathing",
            description: "New or worsening breathing difficulty, stridor or noisy breathing can indicate an airway problem and may require urgent medical assessment."
        },
        {
            title: "Repeated Throat Infections",
            description: "Frequent sore throats, tonsillitis or enlarged tonsils may affect daily activities and should be assessed when recurrent or severe."
        },
        {
            title: "Voice Loss",
            description: "Temporary voice loss may occur with laryngitis or overuse, but unexplained, recurrent or prolonged voice loss warrants ENT evaluation."
        },
        {
            title: "Neck Swelling or Lump",
            description: "A persistent neck lump or swelling, especially when associated with voice or swallowing symptoms, should be assessed promptly."
        }
    ];

    const treatmentSteps = [
        {
            step: "01",
            title: "Detailed ENT & Voice Evaluation",
            description: "The consultation begins with a detailed discussion of voice, throat, swallowing and breathing symptoms, duration, previous treatment, smoking or voice-use history and relevant medical conditions."
        },
        {
            step: "02",
            title: "Laryngeal Examination",
            description: "When indicated, the throat and larynx may be assessed using flexible or rigid endoscopy. Additional voice or swallowing investigations may be recommended according to the symptoms."
        },
        {
            step: "03",
            title: "Personalised Non-Surgical Treatment",
            description: "Depending on the diagnosis, treatment may include medicines, hydration and vocal hygiene, reflux management, allergy treatment, voice therapy or other conservative measures."
        },
        {
            step: "04",
            title: "Endoscopic or Surgical Treatment",
            description: "Selected structural lesions, vocal cord problems or airway conditions may require an endoscopic procedure, microlaryngeal surgery, injection treatment or framework surgery."
        }
    ];

    const surgeries = [
        {
            title: "Microlaryngeal Surgery",
            description: "Microlaryngeal surgery is used for selected vocal cord lesions such as persistent polyps, cysts or other structural abnormalities. The procedure is performed through the mouth using specialised instruments and magnification."
        },
        {
            title: "Endoscopic Vocal Cord Procedures",
            description: "Selected laryngeal lesions can be evaluated and treated endoscopically without an external neck incision. The exact technique depends on the diagnosis, location and size of the lesion."
        },
        {
            title: "Injection Laryngoplasty",
            description: "Injection laryngoplasty may be considered for selected patients with vocal cord weakness or paralysis to improve voice closure and, in appropriate cases, swallowing or cough effectiveness."
        },
        {
            title: "Thyroplasty / Framework Surgery",
            description: "Framework surgery may be considered for selected long-standing vocal cord paralysis or other voice disorders when a more durable structural correction is appropriate."
        },
        {
            title: "Selected Airway Procedures",
            description: "Certain laryngeal or upper-airway narrowing conditions may require specialised endoscopic or surgical treatment. Management is individualised according to the cause and severity."
        },
        {
            title: "Tonsil Surgery",
            description: "Tonsillectomy may be considered in selected patients with recurrent or severe tonsillitis, complications or other specific indications after ENT assessment."
        }
    ];

    const treatmentTime = [
        { condition: "Acute laryngitis / minor irritation", time: "Often days to a few weeks" },
        { condition: "Voice therapy", time: "Often several weeks or longer" },
        { condition: "LPR-related symptoms", time: "Usually requires ongoing management and follow-up" },
        { condition: "Vocal cord nodules / polyps", time: "Varies with lesion and response to treatment" },
        { condition: "Endoscopic laryngeal surgery", time: "Procedure is usually short; voice recovery varies by case" },
        { condition: "Vocal cord paralysis", time: "Depends on cause, recovery and selected treatment" }
    ];

    return (
        <div className="bg-white">

            {/* HERO SECTION */}
            <section className="relative bg-slate-900 py-14 md:py-20 px-4 md:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center mb-10 md:mb-14">
                        <span className="text-teal-400 font-bold uppercase tracking-[0.15em] text-xs md:text-sm">
                            Voice, Throat & Laryngology Care — New Delhi
                        </span>

                        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Voice & Throat Disorders – Expert Laryngology Care in Delhi
                        </h1>
                    </div>

                    <div className="text-center mb-10 md:mb-14">
                        <img
                            src="/images/Ear-Hearing-Banner.png"
                            alt="Voice and throat treatment by Dr. Dhirendra Singh Kushwah in New Delhi"
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                        <div className="flex flex-col justify-center">
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                Persistent hoarseness, voice changes, throat pain, repeated throat clearing,
                                difficulty swallowing or breathing problems should not be ignored. These symptoms
                                can result from simple inflammation or voice overuse, but they may also indicate
                                a vocal cord, laryngeal, swallowing or airway disorder that needs specialist assessment.
                            </p>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-5">
                                Dr. Dhirendra Singh Kushwah is an experienced ENT specialist and surgeon in Delhi
                                with more than 25 years of clinical experience. He evaluates and treats a wide
                                range of voice, throat and laryngeal conditions, including hoarseness, vocal cord
                                nodules and polyps, laryngitis, LPR, swallowing problems and selected laryngeal disorders.
                            </p>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-5">
                                If you are searching for a voice and throat specialist in Delhi, South Delhi,
                                CR Park, Jasola Vihar, Safdarjung Enclave or Delhi NCR, this page explains common
                                symptoms, conditions, diagnosis, treatment options, expected recovery and when an
                                ENT consultation is important.
                            </p>
                        </div>

                        <div className="w-full">
                            <div className="w-full h-full min-h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                                <img
                                    src="/images/DrDhirendraSinghKushawh-ENT-Surgeon.webp"
                                    alt="Dr. Dhirendra Singh Kushwah ENT specialist and surgeon in New Delhi"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                            <ShieldAlert size={16} className="text-teal-400" /> 25+ Years Experience
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                            <Mic size={16} className="text-teal-400" /> Voice & Throat Care
                        </div>
                    </div>

                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
                <ClinicalBreadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "ENT Conditions", href: "/conditions" },
                        { label: "Voice & Throat Conditions", href: "/conditions/voice-throat-disorders-treatment-delhi" },
                    ]}
                />
                <MedicalReviewBadge procedureName="Laryngology & Voice Clinical Evaluation" />
            </div>

            {/* WHAT IS LARYNGOLOGY */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-slate-800">
                                What Is Laryngology? Understanding Voice & Throat Care
                            </h2>

                            <div className="w-16 h-1 bg-teal-600 rounded" />

                            <p className="text-slate-600 text-lg leading-relaxed">
                                Laryngology is the area of ENT care focused on the larynx, vocal cords,
                                voice production, swallowing and related throat and upper-airway disorders.
                                Voice depends on the coordinated movement and vibration of the vocal cords,
                                while the throat and larynx also play important roles in swallowing and protecting
                                the airway.
                                <br /><br />
                                A persistent change in voice or throat function can have many causes. A detailed
                                ENT evaluation helps distinguish temporary inflammation and irritation from
                                structural, neurological or other conditions that may require specific treatment.
                            </p>

                            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">
                                <p className="text-teal-900 font-medium italic">
                                    "Persistent voice or swallowing symptoms deserve the right diagnosis first,
                                    because treatment depends on the underlying cause."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                                    <Mic />
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2">Voice Disorders</h3>
                                <p className="text-sm text-slate-500">
                                    Evaluation of hoarseness, voice fatigue, voice loss and vocal cord disorders.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-10 h-10 bg-blue-100 text-teal-700 rounded-lg flex items-center justify-center mb-4">
                                    <Stethoscope />
                                </div>
                                <h3 className="font-bold text-slate-800 mb-2">Throat Disorders</h3>
                                <p className="text-sm text-slate-500">
                                    Assessment of throat pain, swallowing problems, reflux symptoms and recurrent infections.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* CONDITIONS */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
                            Comprehensive Laryngology & ENT Care
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Voice & Throat Conditions Treated by an ENT Specialist in Delhi
                        </h2>

                        <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                            Evaluation and treatment for hoarseness, vocal cord disorders, throat pain,
                            swallowing difficulty, reflux-related symptoms, recurrent infections and
                            other conditions affecting the voice, throat and larynx.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conditions.map((condition, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
                            >
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {condition.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {condition.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* SYMPTOMS */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Common Voice & Throat Symptoms
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Persistent voice, throat, swallowing or breathing symptoms can have different causes.
                            An ENT assessment can help identify the underlying problem and guide appropriate treatment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {symptoms.map((symptom, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
                            >
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {symptom.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {symptom.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* TREATMENT */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            How Dr. Dhirendra Singh Kushwah Treats Voice & Throat Disorders
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Treatment is based on the symptoms, examination findings, diagnosis and severity.
                            Many voice and throat problems can be managed without surgery, while selected
                            structural or airway disorders may require a procedure or surgery.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {treatmentSteps.map((item, index) => (
                            <div
                                key={index}
                                className="relative bg-slate-50 p-7 rounded-2xl border border-slate-100"
                            >
                                <div className="text-teal-700 font-bold text-sm mb-4">
                                    STEP {item.step}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* TREATMENT OPTIONS */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Voice & Throat Treatment Options in Delhi
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            Treatment may include medical care, voice therapy, vocal hygiene,
                            reflux management, endoscopic procedures or surgery depending on the diagnosis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            {
                                title: "Medical Treatment",
                                description: "Medicines may be used for selected inflammatory, infectious, allergic or reflux-related conditions. Treatment should be based on the underlying diagnosis rather than repeated self-medication."
                            },
                            {
                                title: "Voice Therapy",
                                description: "Professional voice therapy can help patients with certain voice disorders learn healthier voice-use techniques, reduce strain and improve vocal function."
                            },
                            {
                                title: "Vocal Hygiene & Voice Rest",
                                description: "Adequate hydration, avoiding unnecessary voice strain, managing irritants and following personalised vocal-care advice can support recovery in appropriate voice conditions."
                            },
                            {
                                title: "Endoscopic Evaluation",
                                description: "Flexible or rigid laryngoscopy allows direct assessment of the throat and larynx when symptoms suggest a vocal cord or laryngeal problem."
                            },
                            {
                                title: "Microlaryngeal Surgery",
                                description: "Selected persistent vocal cord lesions such as polyps or cysts may require precise endoscopic surgery when conservative treatment is not sufficient."
                            },
                            {
                                title: "Injection & Framework Procedures",
                                description: "Selected vocal cord weakness or paralysis may be treated with injection laryngoplasty or framework surgery depending on the cause, duration and functional impact."
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
                            >
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* PROCEDURES */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Voice & Throat Procedures Performed for Selected Patients
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            Procedures are recommended only when clinically appropriate after diagnosis
                            and discussion of expected benefits, limitations and risks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {surgeries.map((item, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
                            >
                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>

                                <ul className="space-y-2 text-sm text-slate-600">
                                    <li>• Treatment is selected according to the diagnosis</li>
                                    <li>• Endoscopic techniques may avoid an external incision in selected cases</li>
                                    <li>• Recovery and voice-rest requirements vary by procedure</li>
                                    <li>• Follow-up is important after treatment</li>
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* TREATMENT TIME */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            How Long Does Voice & Throat Treatment Take?
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Recovery depends on the underlying condition, treatment selected,
                            severity and individual healing. The following are general ranges, not guarantees.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-4 font-semibold">Condition / Treatment</th>
                                    <th className="p-4 font-semibold">Approximate Time</th>
                                </tr>
                            </thead>

                            <tbody>
                                {treatmentTime.map((item, index) => (
                                    <tr key={index} className="border-b border-slate-100 last:border-0">
                                        <td className="p-4 text-slate-600">{item.condition}</td>
                                        <td className="p-4 text-slate-600">{item.time}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="text-sm text-slate-500 mt-5">
                        These timeframes are approximate. Your ENT specialist can provide a more individualised
                        recovery plan after examination and diagnosis.
                    </p>

                </div>
            </section>

            {/* ADVANTAGES / LIMITATIONS */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Benefits & Limitations of Different Treatment Approaches
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            There is no single treatment that is best for every voice or throat disorder.
                            The right approach depends on the diagnosis and the patient's individual needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                Medical & Voice Therapy
                            </h3>
                            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                                <li>✓ Non-surgical and suitable for many conditions</li>
                                <li>✓ Can address contributing factors such as reflux or voice strain</li>
                                <li>✓ May improve voice technique and vocal efficiency</li>
                                <li>• May take time and patient participation</li>
                                <li>• Not sufficient for every structural lesion</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                Endoscopic Treatment
                            </h3>
                            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                                <li>✓ Direct access to selected laryngeal lesions</li>
                                <li>✓ Can avoid external neck incisions in many procedures</li>
                                <li>✓ Precise treatment of selected vocal cord abnormalities</li>
                                <li>• Requires appropriate diagnosis and specialist expertise</li>
                                <li>• Temporary voice changes or discomfort may occur after treatment</li>
                            </ul>
                        </div>

                        <div className="bg-slate-50 p-7 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                Framework / Open Surgery
                            </h3>
                            <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">
                                <li>✓ Useful for selected long-standing structural or vocal cord problems</li>
                                <li>✓ May provide a more durable correction in appropriate cases</li>
                                <li>• More invasive than simple medical or voice therapy</li>
                                <li>• Recovery and risks vary according to the procedure</li>
                                <li>• Requires careful patient selection</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* WHEN TO SEE SPECIALIST */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-teal-50 rounded-3xl p-8 md:p-12">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                            When Should You See a Voice & Throat Specialist in Delhi?
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Consider an ENT evaluation if you have persistent, recurrent or unexplained
                            voice, throat, swallowing or breathing symptoms.
                        </p>

                        <ul className="space-y-3 mb-6 text-slate-600">
                            <li className="flex items-start gap-3"><span className="text-teal-700 font-bold mt-1">✓</span><span><strong>Persistent or recurrent hoarseness</strong> or a noticeable change in voice quality.</span></li>
                            <li className="flex items-start gap-3"><span className="text-teal-700 font-bold mt-1">✓</span><span><strong>Voice fatigue or voice loss</strong> that affects speaking or professional communication.</span></li>
                            <li className="flex items-start gap-3"><span className="text-teal-700 font-bold mt-1">✓</span><span><strong>Persistent throat pain or irritation</strong> without a clear cause.</span></li>
                            <li className="flex items-start gap-3"><span className="text-teal-700 font-bold mt-1">✓</span><span><strong>Difficulty or pain while swallowing</strong>, food sticking or coughing during meals.</span></li>
                            <li className="flex items-start gap-3"><span className="text-teal-700 font-bold mt-1">✓</span><span><strong>Frequent throat clearing or chronic cough</strong> that keeps returning.</span></li>
                            <li className="flex items-start gap-3"><span className="text-teal-700 font-bold mt-1">✓</span><span><strong>Lump-in-throat sensation</strong> that persists despite routine measures.</span></li>
                            <li className="flex items-start gap-3"><span className="text-teal-700 font-bold mt-1">✓</span><span><strong>Repeated tonsillitis or throat infections</strong> affecting daily life.</span></li>
                            <li className="flex items-start gap-3"><span className="text-teal-700 font-bold mt-1">✓</span><span><strong>Neck swelling or a persistent neck lump</strong>, particularly with voice or swallowing symptoms.</span></li>
                        </ul>

                        <div className="border-t border-teal-100 pt-5">
                            <p className="text-slate-600 leading-relaxed">
                                An ENT assessment can help determine whether the symptoms are related to
                                inflammation, infection, reflux, vocal cord disease, swallowing dysfunction,
                                airway problems or another condition. Appropriate testing is selected according
                                to the clinical findings.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* IF NOT TREATED */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            What Can Happen If Voice & Throat Problems Are Not Treated on Time?
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            The effect of delaying treatment depends entirely on the underlying condition.
                            Some minor problems resolve on their own, while persistent disorders may continue
                            to affect communication, swallowing, breathing and quality of life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Persistent Voice Problems",
                                desc: "Ongoing hoarseness or vocal fatigue can interfere with professional communication and everyday interaction."
                            },
                            {
                                title: "Worsening Swallowing Issues",
                                desc: "Some swallowing disorders can make eating and drinking difficult and may increase the risk of choking or aspiration."
                            },
                            {
                                title: "Chronic Throat Irritation",
                                desc: "Untreated contributing factors such as reflux, allergy or repeated irritation may allow symptoms to persist."
                            },
                            {
                                title: "Delayed Diagnosis",
                                desc: "Persistent unexplained symptoms can occasionally be caused by conditions that benefit from earlier specialist assessment."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-7 rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* EMERGENCY */}
            <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-10">

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                            Seek Urgent Medical Attention for These Warning Signs
                        </h2>

                        <p className="text-slate-600 leading-relaxed mb-5">
                            New or severe breathing difficulty, noisy breathing, rapidly increasing neck or throat
                            swelling, inability to swallow saliva, significant bleeding or severe choking symptoms
                            require urgent medical assessment rather than waiting for a routine ENT appointment.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600 text-sm">
                            <li>• Severe or rapidly worsening breathing difficulty</li>
                            <li>• Stridor or significant noisy breathing</li>
                            <li>• Inability to swallow saliva</li>
                            <li>• Rapidly increasing throat or neck swelling</li>
                            <li>• Significant bleeding from the throat or airway</li>
                            <li>• Severe choking or aspiration symptoms</li>
                        </ul>

                    </div>
                </div>
            </section>

            {/* LOCAL SEO */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                            Voice & Throat Specialist Serving Delhi NCR and Nearby Areas
                        </h2>

                        <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                            Dr. Dhirendra Singh Kushwah provides ENT consultation and voice, throat and
                            laryngology care for patients from South Delhi, South East Delhi, other parts
                            of Delhi NCR and nearby areas. Consultations are available by appointment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                ENT & Voice-Throat Specialist in Jasola Vihar
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Patients with persistent hoarseness, throat pain, swallowing difficulty,
                                chronic throat irritation, voice problems and other ENT symptoms can seek
                                specialist evaluation in the Jasola Vihar area.
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed">Convenient for patients from:</p>

                            <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                <li>• Jasola Vihar</li>
                                <li>• Sarita Vihar</li>
                                <li>• Okhla</li>
                                <li>• Jamia Nagar</li>
                                <li>• Badarpur</li>
                                <li>• Kalindi Kunj</li>
                                <li>• Govindpuri</li>
                                <li>• Kalkaji</li>
                                <li>• Greater Kailash</li>
                                <li>• Nehru Place</li>
                            </ul>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                Voice & Throat Specialist in CR Park
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                ENT consultation is available for voice changes, hoarseness, throat disorders,
                                recurrent throat infections, swallowing problems and related ENT conditions.
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed">Convenient for patients from:</p>

                            <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                <li>• CR Park</li>
                                <li>• Kalkaji</li>
                                <li>• Greater Kailash</li>
                                <li>• Nehru Place</li>
                                <li>• Alaknanda</li>
                                <li>• Govindpuri</li>
                                <li>• Chittaranjan Park</li>
                                <li>• East of Kailash</li>
                                <li>• Lajpat Nagar</li>
                                <li>• South Delhi</li>
                            </ul>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                ENT & Voice-Throat Specialist in Safdarjung Enclave
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Patients with persistent throat symptoms, voice disorders, swallowing difficulty,
                                recurrent tonsillitis and other ENT problems can consult Dr. Dhirendra Singh Kushwah
                                in the Safdarjung Enclave area.
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed">Convenient for patients from:</p>

                            <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                <li>• Safdarjung Enclave</li>
                                <li>• Arjun Nagar</li>
                                <li>• Green Park</li>
                                <li>• Hauz Khas</li>
                                <li>• Munirka</li>
                                <li>• R.K. Puram</li>
                                <li>• Vasant Kunj</li>
                                <li>• Vasant Vihar</li>
                                <li>• Sarojini Nagar</li>
                                <li>• Defence Colony</li>
                            </ul>
                        </div>

                        <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">
                                Voice & Throat Care for Delhi NCR
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Patients also travel from different parts of Delhi NCR and neighbouring areas
                                for specialist ENT consultation and evaluation of persistent voice and throat symptoms.
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed">Patients may visit from:</p>

                            <ul className="mt-3 space-y-2 text-sm text-slate-600">
                                <li>• Faridabad, Haryana</li>
                                <li>• Noida, Uttar Pradesh</li>
                                <li>• Greater Noida, Uttar Pradesh</li>
                                <li>• Ghaziabad, Uttar Pradesh</li>
                                <li>• Palwal, Haryana</li>
                                <li>• South Delhi</li>
                                <li>• South East Delhi</li>
                                <li>• South West Delhi</li>
                                <li>• West Delhi</li>
                            </ul>
                        </div>

                    </div>

                    <div className="mt-10 bg-teal-50 rounded-2xl p-6 md:p-8 text-center border border-teal-100">

                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                            Looking for a Voice & Throat Specialist in Delhi?
                        </h3>

                        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            If you are experiencing persistent hoarseness, voice change, throat pain,
                            swallowing difficulty, chronic throat clearing, recurrent tonsillitis or other
                            unexplained throat symptoms, an ENT consultation can help identify the underlying cause.
                        </p>

                        <p className="text-slate-600 mt-4 font-medium max-w-3xl mx-auto">
                            Consult Dr. Dhirendra Singh Kushwah for evaluation and treatment of voice,
                            throat and laryngeal conditions in Delhi.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                            <a
                                href="#appointment"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal-700 text-white font-semibold hover:bg-teal-800 transition-all"
                            >
                                Book an ENT Appointment
                            </a>

                            <a
                                href="tel:+919311449825"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-teal-700 text-teal-700 font-semibold hover:bg-white transition-all"
                            >
                                Call for Consultation
                            </a>
                        </div>

                    </div>

                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        <div className="max-w-4xl mx-auto w-full">
                            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                                <div className="p-6 md:p-8">

                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                                        Voice & Throat Care by Dr. Dhirendra Singh Kushwah
                                    </h2>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        Learn more about ENT care, voice and throat conditions, diagnosis
                                        and treatment options from Dr. Dhirendra Singh Kushwah.
                                    </p>

                                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/f8Si15IIe54"
                                            title="Voice and Throat Care by Dr. Dhirendra Singh Kushwah"
                                            frameBorder="0"
                                            loading="lazy"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-8">

                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                    Why Choose Dr. Dhirendra Singh Kushwah for Voice & Throat Treatment in Delhi?
                                </h2>

                                <p className="text-slate-600 leading-relaxed mt-6">
                                    Dr. Dhirendra Singh Kushwah is an ENT specialist and surgeon with more than
                                    25 years of clinical experience. His practice includes evaluation and treatment
                                    of a wide range of ear, nose and throat conditions, including voice, throat and
                                    laryngeal disorders.
                                </p>

                                <p className="text-slate-600 leading-relaxed mt-4">
                                    Patients with persistent hoarseness, vocal cord symptoms, throat pain,
                                    swallowing difficulty, recurrent throat infections, reflux-related symptoms
                                    or other voice and throat problems can undergo an appropriate ENT assessment
                                    before treatment options are recommended.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {trustPoints.map((point, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-md">
                                            {point.icon}
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-bold text-slate-800 mb-1">
                                                {point.title}
                                            </h3>

                                            <p className="text-slate-600 leading-relaxed">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <FaqAccordion faqItems={faqItems} />

            {/* CONTACT CTA */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto bg-teal-600 rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">

                    <div className="relative z-10 flex flex-col items-center gap-6">

                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Book a Voice & Throat Consultation in Delhi
                        </h2>

                        <p className="text-teal-100 text-lg leading-relaxed max-w-3xl">
                            If you have persistent hoarseness, voice change, throat pain, swallowing difficulty,
                            chronic throat clearing, recurrent throat infections or other unexplained voice
                            and throat symptoms, an ENT consultation can help identify the underlying cause
                            and determine an appropriate treatment plan.
                        </p>

                        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white text-left">

                            <h3 className="text-xl font-bold mb-4 text-center">
                                Consultation & Contact Information
                            </h3>

                            <div className="space-y-3 text-teal-50">
                                <p>
                                    <strong>Call / WhatsApp:</strong>{" "}
                                    <a
                                        href="tel:+919311449825"
                                        className="hover:text-white underline underline-offset-2"
                                    >
                                        +91-9311449825
                                    </a>
                                </p>

                                <p>
                                    <strong>Email:</strong>{" "}
                                    <a
                                        href="mailto:drdhirendrasinghent@gmail.com"
                                        className="hover:text-white underline underline-offset-2 break-all"
                                    >
                                        drdhirendrasinghent@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div className="border-t border-white/20 my-5"></div>

                            <div className="space-y-4 text-sm md:text-base">

                                <div>
                                    <h4 className="font-bold text-white mb-1">
                                        CR Park Clinic
                                    </h4>
                                    <p className="text-teal-100 leading-relaxed">
                                        J-1981, Near Market No. 1,<br />
                                        Below ICICI Bank, Bipin Chandra Pal Marg,<br />
                                        CR Park, New Delhi – 110019
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-white mb-1">
                                        Arjun Nagar Clinic – Safdarjung Enclave
                                    </h4>
                                    <p className="text-teal-100 leading-relaxed">
                                        19-C, Arjun Nagar,<br />
                                        Safdarjung Enclave, New Delhi – 110029
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">

                            <a
                                href="tel:+919311449825"
                                className="bg-white text-teal-700 px-8 md:px-10 py-4 rounded-full font-bold shadow-xl hover:bg-gray-100 transition-all inline-flex items-center justify-center"
                            >
                                Call for Appointment
                            </a>

                            <a
                                href="https://wa.me/919311449825"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-teal-900/40 border border-teal-300/40 text-white px-8 md:px-10 py-4 rounded-full font-bold hover:bg-teal-900/60 transition-all inline-flex items-center justify-center"
                            >
                                WhatsApp Us
                            </a>

                        </div>

                        <p className="text-teal-100 text-sm max-w-2xl">
                            Consultation is available by appointment. The appropriate treatment depends on
                            the patient's symptoms, examination findings and underlying diagnosis.
                        </p>

                    </div>
                </div>
            </section>

        </div>
    );
}
