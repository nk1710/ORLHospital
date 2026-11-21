import React from 'react';
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import SurgeryLeadDesk from "@/components/ui/SurgeryLeadDesk";
import { DoctorImage, FaqAccordion } from "@/components/ui/custom";
import { Ear, Headphones, ShieldAlert, Award, Calendar, Activity } from "lucide-react";

// export const metadata = {
//     title: "Ear & Hearing Conditions — Diagnosis & Treatment | Dr.(Prof.) Dhirendra Singh kushwah, New Delhi",
//     description: "Suffering from hearing loss, ear infections, tinnitus, or vertigo? Dr.(Prof.) Dhirendra Singh kushwah, a leading otology specialist in New Delhi, offers advanced ear care for children and adults. Book a consultation today.",
//     alternates: {
//         canonical: "drdhirendrasinghkushwah.com/conditions/ear-hearing",
//     },
// };
export const metadata = {
    title:
        "Ear & Hearing Specialist in Delhi | Hearing Loss & Ear Treatment | Dr. Dhirendra Singh Kushwah",

    description:
        "Expert ear and hearing care in Delhi for hearing loss, ear infections, tinnitus, eardrum problems and other ear conditions. Advanced hearing tests, ear surgery and cochlear implant evaluation for children and adults.",

    alternates: {
        canonical:
            "https://www.drdhirendrasinghkushwah.com/conditions/ear-hearing",
    },
};

export default async function EarPage() {
const earHearingConditions = [
    {
        name: "Hearing Loss",
        description:
            "Difficulty hearing sounds or understanding speech may result from ageing, noise exposure, ear infections, eardrum problems, or inner-ear conditions. Evaluation helps determine the type and degree of hearing loss.",
    },
    {
        name: "Chronic Ear Infections",
        description:
            "Repeated or persistent ear infections can cause ear pain, discharge, hearing loss, eardrum damage, and other middle-ear complications if left untreated.",
    },
    {
        name: "Eardrum Perforation",
        description:
            "A hole or tear in the eardrum may cause hearing loss, ear discharge, recurrent infections, or ear discomfort and may require medical or surgical treatment.",
    },
    {
        name: "Cholesteatoma",
        description:
            "An abnormal collection of skin cells in the middle ear or mastoid that can gradually damage the hearing bones and surrounding structures and may require surgery.",
    },
    {
        name: "Tinnitus",
        description:
            "Ringing, buzzing, humming, hissing, or other sounds heard without an external source. Tinnitus may be associated with hearing loss, noise exposure, middle-ear problems, or inner-ear conditions.",
    },
    {
        name: "Otosclerosis",
        description:
            "Abnormal bone growth around the stapes can interfere with sound transmission and cause progressive conductive hearing loss, sometimes affecting both ears.",
    },
    {
        name: "Menière's Disease",
        description:
            "An inner-ear disorder that can cause episodes of vertigo, fluctuating hearing loss, tinnitus, and a sensation of fullness or pressure in the affected ear.",
    },
    {
        name: "Sudden Sensorineural Hearing Loss",
        description:
            "A rapid unexplained reduction in hearing, usually affecting one ear, requires prompt medical assessment because early evaluation and treatment may improve the chance of recovery.",
    },
    {
        name: "Swimmer's Ear",
        description:
            "Inflammation or infection of the outer ear canal commonly associated with water exposure, skin irritation, or trauma from inserting objects into the ear.",
    },
    {
        name: "Earwax Buildup",
        description:
            "Excessive earwax can block the ear canal and cause muffled hearing, fullness, tinnitus, discomfort, or occasionally dizziness.",
    },
    {
        name: "Eustachian Tube Dysfunction",
        description:
            "Problems with pressure regulation between the middle ear and the back of the nose can cause ear fullness, popping, muffled hearing, or discomfort.",
    },
    {
        name: "Glue Ear",
        description:
            "Fluid behind the eardrum can cause muffled or reduced hearing and is particularly common in children. Persistent cases may require ENT assessment.",
    },
    {
        name: "Noise-Induced Hearing Loss",
        description:
            "Repeated or prolonged exposure to loud sounds can permanently damage the inner ear and cause gradual hearing loss or tinnitus.",
    },
    {
        name: "Age-Related Hearing Loss",
        description:
            "Gradual hearing loss associated with ageing can make it difficult to understand conversations, particularly in noisy environments.",
    },
    {
        name: "Congenital Ear Conditions",
        description:
            "Some children are born with structural abnormalities such as microtia or aural atresia that can affect the development of normal hearing.",
    },
];

const earHearingSymptoms = [
    {
        name: "Difficulty hearing conversations",
        description:
            "Trouble following normal conversations or frequently asking others to repeat themselves can be an early sign of hearing impairment.",
    },
    {
        name: "Muffled hearing",
        description:
            "Sounds may seem unclear, distant, or blocked because of earwax, infection, middle-ear fluid, or other hearing conditions.",
    },
    {
        name: "Ringing in the ears",
        description:
            "Ringing, buzzing, humming, or hissing without an external sound may indicate tinnitus and should be evaluated when persistent.",
    },
    {
        name: "Ear pain",
        description:
            "Earache or discomfort can occur with ear infections, inflammation, injury, pressure problems, or other ear conditions.",
    },
    {
        name: "Ear fullness or pressure",
        description:
            "A blocked or pressured feeling in the ear can occur with Eustachian tube dysfunction, infection, fluid, or other middle-ear problems.",
    },
    {
        name: "Ear discharge",
        description:
            "Fluid or pus coming from the ear can be associated with infection, inflammation, or a perforated eardrum.",
    },
    {
        name: "Hearing loss in one ear",
        description:
            "Reduced hearing affecting one ear should be evaluated to identify whether the problem involves the outer, middle, or inner ear.",
    },
    {
        name: "Difficulty hearing in noisy places",
        description:
            "Difficulty understanding speech in restaurants, meetings, or crowded environments can be an important sign of hearing impairment.",
    },
    {
        name: "Dizziness or balance problems",
        description:
            "Vertigo, spinning sensations, or balance difficulties may sometimes be associated with conditions affecting the inner ear and balance system.",
    },
];

const earHearingTreatments = [
    {
        name: "Tympanoplasty",
        description:
            "Surgical repair of a perforated or damaged eardrum, sometimes combined with reconstruction of the middle-ear hearing mechanism.",
    },
    {
        name: "Mastoidectomy",
        description:
            "Surgery to remove diseased mastoid tissue in selected cases of chronic ear disease, cholesteatoma, or related complications.",
    },
    {
        name: "Ossiculoplasty",
        description:
            "Reconstruction of the tiny middle-ear bones when damage caused by infection, trauma, or cholesteatoma affects sound transmission.",
    },
    {
        name: "Stapedotomy",
        description:
            "A specialised microsurgical procedure used in selected patients with otosclerosis to improve sound transmission and hearing.",
    },
    {
        name: "Cochlear Implantation",
        description:
            "An implantable hearing solution for appropriately selected patients with severe to profound sensorineural hearing loss who receive limited benefit from conventional hearing aids.",
    },
    {
        name: "Intratympanic Injections",
        description:
            "Medication delivered directly into the middle ear in selected cases of sudden hearing loss, Ménière's disease, and other inner-ear conditions.",
    },
];
    const faqItems = [
        { q: "What is the difference between an ENT doctor and an otologist?", a: "An ENT (Ear, Nose and Throat) specialist treats all three areas of the head and neck. An otologist is an ENT who has undergone additional specialised training exclusively in ear diseases, hearing, and balance — including microsurgery and cochlear implantation. Dr.(Prof.) Dhirendra Singh kushwah practises as both a senior ENT and an experienced otologist." },
        { q: "Can hearing loss be cured?", a: "Conductive hearing loss — caused by eardrum perforation, fluid, or ossicular damage — is often curable with surgery. Sensorineural hearing loss caused by cochlear damage is generally not reversible, but can be highly effectively managed with hearing aids or cochlear implants, restoring functional hearing." },
        { q: "Is tympanoplasty a major surgery?", a: "Tympanoplasty is performed under general or local anaesthesia and typically takes one to two hours. It is not considered a major surgery, but it is microsurgical — requiring great precision. Most patients are discharged the same day or after one night's observation, with full recovery in four to six weeks." },
        { q: "At what age can a child receive a cochlear implant?", a: "Cochlear implants can be placed in children as young as 12 months of age — and earlier in cases of bilateral profound hearing loss where medical urgency is established. The earlier the implant, the better the child's prospects for natural speech and language development." },
        { q: "Is stapedotomy safe? What are the risks?", a: "Stapedotomy is a highly refined procedure with excellent outcomes in experienced hands. In a small number of cases there is a risk of inner ear damage leading to sensorineural hearing loss - which is why it should only be performed by a specialist with significant experience. Dr.(Prof.) Dhirendra Singh kushwah has performed this procedure extensively with high success rates." },
        { q: "What causes sudden hearing loss in one ear?", a: "Sudden sensorineural hearing loss (SSNHL) can result from viral infection, vascular disruption to the cochlea, autoimmune conditions, or perilymph fistula. In many cases the exact cause is not found. It is a medical emergency — seek evaluation within 24-48 hours for the best chance of recovery." },
        { q: "How do I know if my child has a hearing problem?", a: "Signs in infants include not reacting to loud sounds, not turning toward voices, and not babbling by 6 months. In older children, watch for not responding when called, asking for things to be repeated, turning the TV up too loud, or falling behind in speech. Bring your child for a hearing evaluation without delay if you notice any of these signs." }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalCondition",
                "name": "Ear & Hearing Conditions",
                "description": "A comprehensive overview of ear and hearing conditions including infections, hearing loss, tinnitus, and balance disorders.",
                "url": "https://www.drdhirendrasinghkushwah.com/conditions/ear-hearing",
                "associatedAnatomy": {
                    "@type": "AnatomicalStructure",
                    "name": "Ear",
                    "url": "https://en.wikipedia.org/wiki/Ear"
                },
                "possibleComplication": [
                    {
                        "@type": "MedicalCondition",
                        "name": "Hearing Loss"
                    },
                    {
                        "@type": "MedicalCondition",
                        "name": "Tinnitus"
                    },
                    {
                        "@type": "MedicalCondition",
                        "name": "Vertigo"
                    }
                ]
            },
            {
                "@type": "Physician",
                "name": "Dr.(Prof.) Dhirendra Singh kushwah",
                "url": "https://www.drdhirendrasinghkushwah.com/",
                "image": "https://www.drdhirendrasinghkushwah.com/images/dherendra_patient.png",
                "description": "Senior ENT and Otology Specialist in New Delhi with over 25 years of experience",
                "medicalSpecialty": "Otology",
                "qualifications": [
                    {
                        "@type": "EducationalOccupationalCredential",
                        "name": "MBBS",
                        "educationalLevel": "Bachelor's degree",
                        "issuingOrganization": {
                            "@type": "EducationalOrganization",
                            "name": "Jiwaji University, Gwalior",
                            "year": 1999
                        }
                    },
                    {
                        "@type": "EducationalOccupationalCredential",
                        "name": "MS in ENT",
                        "educationalLevel": "Master's degree",
                        "issuingOrganization": {
                            "@type": "EducationalOrganization",
                            "name": "Rani Durgawati University, Jabalpur",
                            "year": 2005
                        }
                    }
                ],
                "areaServed": {
                    "@type": "Place",
                    "name": "New Delhi, India"
                },
                "contactPoint": [
                    {
                        "@type": "ContactPoint",
                        "telephone": "+91-9311449825",
                        "contactType": "Customer Service",
                        "areaServed": "IN",
                        "availableLanguage": ["en", "hi"]
                    }
                ],
                "knowsAbout": [
                    "Cochlear Implants",
                    "Tympanoplasty",
                    "Mastoidectomy",
                    "Ossiculoplasty",
                    "Stapedotomy",
                    "Otosclerosis",
                    "Menière's Disease"
                ]
            },
            {
                "@type": "FAQPage",
                "url": "https://www.drdhirendrasinghkushwah.com/conditions/ear-hearing",
                "mainEntity": faqItems.map((item, index) => ({
                    "@type": "Question",
                    "name": item.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.a
                    }
                }))
            }
        ]
    };

    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

            <section className="relative bg-slate-900 py-14 md:py-20 px-4 md:px-8 overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
    </div>

    <div className="max-w-7xl mx-auto relative z-10">

        {/* FULL WIDTH TITLE */}
        <div className="text-center mb-10 md:mb-14">
            <span className="text-teal-400 font-bold uppercase tracking-[0.15em] text-xs md:text-sm">
                Otology & Ear Health — New Delhi
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ear & Hearing Conditions - Expert Diagnosis and Treatment in New Delhi
            </h1>
        </div>
<div className="text-center mb-10 md:mb-14">
    <img src="/images/Ear-Hearing-Banner.jpeg"  alt="Ear and hearing care by Dr. Dhirendra Singh Kushwah in New Delhi"  className="w-full h-full object-contain" />
</div>
        {/* 50% CONTENT + 50% IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* LEFT — CONTENT 50% */}
            <div className="flex flex-col justify-center">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Ear problems are among the most common health concerns
                    affecting people of all ages — yet they are also among
                    the most under-treated. Recurring ear infections,
                    unexplained hearing loss, persistent ringing sounds,
                    or balance problems may require professional ENT
                    evaluation to identify the underlying cause.
                </p>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-5">
                    Dr. (Prof.) Dhirendra Singh Kushwah is a senior ENT and
                    otology specialist based in New Delhi with over 25 years
                    of clinical and surgical experience. He diagnoses and
                    treats a wide range of ear and hearing conditions in
                    children and adults, including complex ear disorders
                    and cochlear implant cases.
                </p>
            </div>

            {/* RIGHT — IMAGE 50% */}
            <div className="w-full">
                <div className="w-full h-full min-h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                    <img src="/images/DrDhirendraSinghKushawh-ENT-Surgeon.webp"  alt="Ear and hearing care by Dr. Dhirendra Singh Kushwah in New Delhi"  className="w-full h-full object-contain" />
                </div>
            </div>

        </div>
    </div>
</section>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
                <ClinicalBreadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "ENT Conditions", href: "/conditions" },
                        { label: "Ear & Hearing Conditions", href: "/conditions/ear-hearing" },
                    ]}
                />
                <MedicalReviewBadge procedureName="Ear & Hearing Clinical Diagnosis" />
            </div>

            {/* WHAT IS OTOLOGY SECTION */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-slate-800"> What Is Otology? Understanding the Science of Ear Health</h2>
                            <div className="w-16 h-1 bg-teal-600 rounded" />
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Otology is the branch of medicine dedicated to the anatomy, function, and diseases of the ear. An otologist — also called an ear specialist or otology surgeon — is trained to manage conditions affecting the outer ear, middle ear, inner ear, hearing nerve, and the balance system.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Unlike a general ENT doctor, an otology specialist has advanced training in microsurgery of the ear, cochlear implantation, and neuro-otology. This depth of expertise is essential when dealing with conditions that affect hearing, balance, and quality of life at a fundamental level.
                            </p>
                        </div>
                        <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">
                            <p className="text-teal-900 font-medium italic">
                                "Precision is paramount in ear surgery. The structures we work with are measured in millimeters, and the impact on a patient's life is measured in years of better hearing."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* EAR & HEARING CONDITIONS TREATED */}
<section className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
                Comprehensive Ear Care
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Ear & Hearing Conditions Treated
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                Comprehensive diagnosis and treatment for common and complex
                ear and hearing conditions in children and adults.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {earHearingConditions.map((condition, i) => (
                <div
                    key={i}
                    className="p-5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all"
                >
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

                        <div>
                            <h3 className="text-base font-bold text-slate-800">
                                {condition.name}
                            </h3>

                            <p className="text-sm text-slate-600 leading-6 mt-1">
                                {condition.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
</section>

            {/* COMMON EAR & HEARING SYMPTOMS */}
<section className="py-20 px-4 md:px-8 bg-slate-50">
    <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
                Know the Warning Signs
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Common Ear & Hearing Symptoms
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                Persistent ear symptoms should not be ignored. Early evaluation
                can help identify the underlying cause and guide appropriate treatment.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {earHearingSymptoms.map((symptom, i) => (
                <div
                    key={i}
                    className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm"
                >
                    <div className="flex items-start gap-3">
                        <div className="w-2 h-2 mt-2 bg-teal-500 rounded-full flex-shrink-0" />

                        <div>
                            <h3 className="text-sm font-bold text-slate-800">
                                {symptom.name}
                            </h3>

                            <p className="text-sm text-slate-600 leading-6 mt-2">
                                {symptom.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
</section>

            {/* EAR SURGERIES SECTION */}
            {/* EAR SURGERIES & TREATMENTS */}
<section className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
                Advanced Otology Care
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Ear Surgeries & Hearing Treatments
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                Treatment is selected according to the cause, severity, hearing
                status, age, and individual needs of each patient.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {earHearingTreatments.map((treatment, i) => (
                <div
                    key={i}
                    className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all"
                >
                    <h3 className="text-lg font-bold text-teal-700 mb-2">
                        {treatment.name}
                    </h3>

                    <p className="text-slate-600 text-sm leading-6">
                        {treatment.description}
                    </p>
                </div>
            ))}
        </div>

    </div>
</section>

            {/* HEARING TESTS SECTION */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center"> Hearing Tests and Audiological Evaluation</h2>
                    <p className="text-slate-600 text-left leading-relaxed max-w-2xl mx-auto mb-8">Before any treatment is recommended, every patient undergoes a structured hearing assessment. The following tests are available at the clinic:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                        <div className="bg-white p-5 rounded-xl shadow-sm"><p className="text-slate-600"><strong>Pure Tone Audiogram (PTA)</strong> identifies the degree and type of hearing loss across all frequencies.</p></div>
                        <div className="bg-white p-5 rounded-xl shadow-sm"><p className="text-slate-600"><strong>Speech Audiogram</strong> measures how clearly a person can hear and understand spoken words — reflecting real-world functional hearing ability.</p></div>
                        <div className="bg-white p-5 rounded-xl shadow-sm"><p className="text-slate-600"><strong>Tympanometry</strong> checks the mobility of the eardrum and detects middle ear fluid, Eustachian tube dysfunction, or ossicular problems.</p></div>
                        <div className="bg-white p-5 rounded-xl shadow-sm"><p className="text-slate-600"><strong>Auditory Brainstem Response (ABR)</strong> records the brain's electrical response to sound — used for infants, newborns, and uncooperative patients who cannot complete standard tests.</p></div>
                        <div className="bg-white p-5 rounded-xl shadow-sm"><p className="text-slate-600"><strong>Auditory Steady-State Response (ASSR)</strong> provides frequency-specific thresholds essential for planning cochlear implant candidacy in young children.</p></div>
                        <div className="bg-white p-5 rounded-xl shadow-sm"><p className="text-slate-600"><strong>Otoacoustic Emissions (OAE)</strong> tests outer hair cell function in the cochlea — a quick, objective, and non-invasive screening tool.</p></div>
                        <div className="bg-white p-5 rounded-xl shadow-sm"><p className="text-slate-600"><strong>Newborn Hearing Screening</strong> — OAE and ABR-based screening to detect hearing loss at birth and trigger early intervention before the critical language development window closes.</p></div>
                    </div>
                </div>
            </section>

            {/* WHY PATIENTS CHOOSE SECTION */}
            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-teal-500/10 rounded-[40px] rotate-3 z-0" />

                            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-video bg-gray-100 flex items-center justify-center">
                                <span className="absolute text-slate-400 text-sm font-medium">
                                    ENT Conditions & Specialized Treatment
                                </span>

                                <iframe
                                    className="relative w-full h-full z-10" // Added z-10 to sit on top of the text
                                    src="https://www.youtube.com/embed/aC8UxzOKVw4"
                                    title="Dr.(Prof.) Dhirendra Singh Kushwah – ENT Conditions & Specialized Treatment"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6"> Why Patients Choose Dr. Dhirendra Singh kushwah for Ear Treatment</h2>
                            <div className="space-y-4 text-slate-600">
                                <p>Dr.(Prof.) Dhirendra Singh kushwah completed his MBBS from Jiwaji University, Gwalior (1999) and his MS in ENT from Rani Durgawati University, Jabalpur (2005). He has been practising and operating in New Delhi for over two decades and is recognised as one of India's most trusted ear surgeons.</p>
                                <p>Patients choose Dr.(Prof.) Dhirendra Singh kushwah for ear and hearing treatment because of his precision surgical technique, transparent communication, and genuine commitment to every patient's recovery — whether they are a newborn undergoing hearing screening or an adult seeking cochlear implantation after years of profound hearing loss.</p>
                                <p>He is available in English and Hindi, personally reachable at all hours, and operates from two conveniently located clinics in New Delhi.</p>
                                <p className="font-medium"><strong>Over 700 cochlear and auditory brainstem implant recipients under his care — one of the highest programme volumes in India.</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FaqAccordion faqItems={faqItems} />

            {/* FAQ SECTION */}
            {/* <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center"> Frequently Asked Questions About Ear & Hearing Conditions</h2>
          <div className="max-w-3xl mx-auto space-y-4 mt-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800">What is the difference between an ENT doctor and an otologist?</p>
              <p className="text-slate-600 mt-2">An ENT (Ear, Nose and Throat) specialist treats all three areas of the head and neck. An otologist is an ENT who has undergone additional specialised training exclusively in ear diseases, hearing, and balance — including microsurgery and cochlear implantation. Dr. kushwah practises as both a senior ENT and an experienced otologist.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800">Can hearing loss be cured?</p>
              <p className="text-slate-600 mt-2">Conductive hearing loss — caused by eardrum perforation, fluid, or ossicular damage — is often curable with surgery. Sensorineural hearing loss caused by cochlear damage is generally not reversible, but can be highly effectively managed with hearing aids or cochlear implants, restoring functional hearing.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800">Is tympanoplasty a major surgery?</p>
              <p className="text-slate-600 mt-2">Tympanoplasty is performed under general or local anaesthesia and typically takes one to two hours. It is not considered a major surgery, but it is microsurgical — requiring great precision. Most patients are discharged the same day or after one night's observation, with full recovery in four to six weeks.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800">At what age can a child receive a cochlear implant?</p>
              <p className="text-slate-600 mt-2">Cochlear implants can be placed in children as young as 12 months of age — and earlier in cases of bilateral profound hearing loss where medical urgency is established. The earlier the implant, the better the child's prospects for natural speech and language development.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800">Is stapedotomy safe? What are the risks?</p>
              <p className="text-slate-600 mt-2">Stapedotomy is a highly refined procedure with excellent outcomes in experienced hands. In a small number of cases there is a risk of inner ear damage leading to sensorineural hearing loss - which is why it should only be performed by a specialist with significant experience. Dr.(Prof.) Dhirendra Singh kushwah has performed this procedure extensively with high success rates.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800">What causes sudden hearing loss in one ear?</p>
              <p className="text-slate-600 mt-2">Sudden sensorineural hearing loss (SSNHL) can result from viral infection, vascular disruption to the cochlea, autoimmune conditions, or perilymph fistula. In many cases the exact cause is not found. It is a medical emergency — seek evaluation within 24-48 hours for the best chance of recovery.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="font-bold text-slate-800">How do I know if my child has a hearing problem?</p>
              <p className="text-slate-600 mt-2">Signs in infants include not reacting to loud sounds, not turning toward voices, and not babbling by 6 months. In older children, watch for not responding when called, asking for things to be repeated, turning the TV up too loud, or falling behind in speech. Bring your child for a hearing evaluation without delay if you notice any of these signs.</p>
            </div>
          </div>
        </div>
      </section> */}

            {/* VIP High-Converting Surgery Lead Desk */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 my-10">
                <SurgeryLeadDesk 
                    procedureName="Stitchless Tympanoplasty & Micro-Ear Surgery" 
                    customMessage="Hello Dr. Kushwah, I have ear discharge / eardrum hole / hearing loss and want to check ear surgery package cost & 100% cashless insurance at ORL Hospital." 
                />
            </div>

            <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-4xl mx-auto bg-teal-600 rounded-[40px] p-8 md:p-12 text-center shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> Book an Appointment with Dr.(Prof.) Dhirendra Singh kushwah</h2>
                    <p className="text-teal-100 text-lg mb-6">If you are experiencing any ear or hearing concern - however mild it may seem - early expert assessment leads to better outcomes. Dr.(Prof.) Dhirendra Singh kushwah and his team are available six days a week at two New Delhi locations.</p>
                    <div className="space-y-2 text-white">
                        <p className="text-xl font-semibold">Call or WhatsApp: +91-9311449825</p>
                        <p>Email: drdhirendrasinghent@gmail.com</p>
                        <div className="mt-6 pt-4 border-t border-teal-400/30">
                            <p><strong>CR Park Clinic:</strong> J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, New Delhi – 110019</p>
                            <p className="mt-2"><strong>Arjun Nagar Clinic:</strong> 19-C, Arjun Nagar, Safdarjung Enclave, New Delhi – 110029</p>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="tel:+919311449825" className="bg-white text-teal-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all">
              Call Now
            </a>
            <a href="https://wa.me/919311449825" className="bg-teal-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-teal-800 transition-all">
              WhatsApp
            </a>
          </div> */}
                </div>
            </section>
        </div>
    );
}