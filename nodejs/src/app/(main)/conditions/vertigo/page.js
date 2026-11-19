import React from "react";
import { FaqAccordion } from "@/components/ui/custom";
import {
    Activity,
    AlertCircle,
    Award,
    Calendar,
    CheckCircle2,
    Ear,
    HeartPulse,
    ShieldAlert,
    Stethoscope,
    UserRound,
    Brain,
} from "lucide-react";

export const metadata = {
    title:
        "Vertigo Treatment in Delhi | Symptoms, Causes & ENT Specialist | Dr. Dhirendra Singh Kushwah",

    description:
        "Vertigo treatment in Delhi for BPPV, dizziness, balance disorders, Ménière's disease, vestibular neuritis and related inner-ear conditions. Learn symptoms, diagnosis, treatment and when to see an ENT specialist.",

    alternates: {
        canonical:
            "https://www.drdhirendrasinghkushwah.com/conditions/vertigo",
    },
};

export default async function VertigoPage() {

    const specializationData = [
        {
            institution: "Vertigo & Balance Disorders",
            focus:
                "Evaluation and treatment of recurrent vertigo, dizziness, imbalance and vestibular disorders"
        },
        {
            institution: "BPPV & Positional Vertigo",
            focus:
                "Assessment and treatment of brief spinning episodes triggered by head movement or changes in position"
        },
        {
            institution: "Inner Ear & Vestibular Disorders",
            focus:
                "Evaluation of conditions affecting the inner ear, balance system and hearing"
        },
        {
            institution: "Neuro-Otology Evaluation",
            focus:
                "Assessment of complex dizziness, balance disorders, hearing-related symptoms and selected neurological causes"
        },
    ];

    const trustPoints = [
        {
            title: "25+ Years of ENT Experience",
            desc:
                "Extensive clinical and surgical experience in the diagnosis and management of ear, nose and throat disorders.",
            icon: <Award className="text-teal-400 w-6 h-6" />
        },
        {
            title: "Detailed Vertigo Evaluation",
            desc:
                "Vertigo is assessed according to the pattern of symptoms, triggers, hearing changes, balance problems and relevant clinical findings.",
            icon: <Activity className="text-teal-400 w-6 h-6" />
        },
        {
            title: "Personalised Treatment",
            desc:
                "Treatment is selected according to the underlying cause and may include repositioning manoeuvres, medicines, vestibular rehabilitation or selected procedures.",
            icon: <ShieldAlert className="text-teal-400 w-6 h-6" />
        }
    ];

    const conditions = [
        {
            title: "BPPV",
            description:
                "Benign paroxysmal positional vertigo is a common inner-ear cause of brief spinning episodes triggered by specific head movements or changes in position."
        },
        {
            title: "Vestibular Neuritis",
            description:
                "Vestibular neuritis can cause sudden and prolonged vertigo, imbalance and difficulty walking. Hearing loss is generally not a prominent feature."
        },
        {
            title: "Labyrinthitis",
            description:
                "Labyrinthitis involves the inner ear and may cause vertigo together with hearing changes, tinnitus, nausea and balance problems."
        },
        {
            title: "Ménière's Disease",
            description:
                "Ménière's disease can cause recurrent attacks of vertigo together with fluctuating hearing loss, tinnitus and a feeling of fullness or pressure in the ear."
        },
        {
            title: "Vestibular Migraine",
            description:
                "Vestibular migraine can cause vertigo, motion sensitivity, imbalance and dizziness with or without a typical migraine headache."
        },
        {
            title: "Persistent Balance Disorders",
            description:
                "Some patients experience continuing dizziness or imbalance after an earlier vestibular problem and may benefit from specialist assessment and rehabilitation."
        },
        {
            title: "Inner Ear Disorders",
            description:
                "Problems affecting the balance organs of the inner ear can produce vertigo, dizziness, hearing changes, tinnitus or imbalance."
        },
        {
            title: "Medication-Related Dizziness",
            description:
                "Some medicines can contribute to dizziness or balance problems. Medication-related symptoms should be reviewed medically rather than stopping prescribed treatment independently."
        },
        {
            title: "Neurological Causes",
            description:
                "Less commonly, vertigo or severe imbalance can occur with neurological conditions. Sudden neurological symptoms require urgent medical assessment."
        }
    ];

    const symptoms = [
        {
            title: "Spinning Sensation",
            description:
                "A feeling that you or your surroundings are spinning, moving, tilting or rotating is one of the characteristic symptoms of vertigo."
        },
        {
            title: "Loss of Balance",
            description:
                "Vertigo can cause unsteadiness while standing or walking and may increase the risk of falls during an attack."
        },
        {
            title: "Nausea & Vomiting",
            description:
                "Strong stimulation of the balance system can cause nausea, vomiting, sweating and significant discomfort during a vertigo episode."
        },
        {
            title: "Head-Movement Sensitivity",
            description:
                "Turning in bed, getting up, bending down or looking upward may trigger brief spinning episodes in positional vertigo such as BPPV."
        },
        {
            title: "Hearing Changes",
            description:
                "Hearing loss or fluctuating hearing together with vertigo may suggest an inner-ear disorder and should be assessed."
        },
        {
            title: "Tinnitus",
            description:
                "Ringing, buzzing or other sounds in the ear may occur with some vestibular and inner-ear disorders."
        },
        {
            title: "Unsteady Walking",
            description:
                "Some patients feel unstable while walking or have difficulty maintaining a straight path after a vertigo episode."
        },
        {
            title: "Headache or Migraine Symptoms",
            description:
                "Vertigo can occur with migraine-related vestibular disorders, sometimes with light or sound sensitivity."
        },
        {
            title: "Visual Disturbance",
            description:
                "Difficulty focusing or a sensation that the surroundings are moving may accompany some vestibular disorders."
        },
        {
            title: "Ear Fullness",
            description:
                "A blocked or pressured sensation in one ear, especially when associated with hearing changes and vertigo, can provide an important diagnostic clue."
        },
        {
            title: "Motion Sensitivity",
            description:
                "Some people develop increased sensitivity to movement, travelling, crowded visual environments or rapid head movements."
        },
        {
            title: "Fear of Falling",
            description:
                "Repeated vertigo or imbalance can make patients feel unsafe while walking, climbing stairs or performing normal daily activities."
        }
    ];

    const causes = [
        {
            title: "BPPV",
            description:
                "BPPV occurs when tiny calcium crystals in the inner ear become displaced and stimulate the balance canals during certain head movements."
        },
        {
            title: "Vestibular Neuritis",
            description:
                "Inflammation affecting the vestibular nerve can cause sudden and prolonged vertigo with significant imbalance."
        },
        {
            title: "Labyrinthitis",
            description:
                "Inflammation involving the inner ear can produce vertigo and may also affect hearing."
        },
        {
            title: "Ménière's Disease",
            description:
                "This inner-ear disorder can cause recurrent vertigo attacks with hearing loss, tinnitus or ear fullness."
        },
        {
            title: "Vestibular Migraine",
            description:
                "Migraine-related vestibular symptoms can cause dizziness, vertigo, imbalance and motion sensitivity."
        },
        {
            title: "Previous Head Injury",
            description:
                "Head trauma can sometimes affect the vestibular system and may contribute to positional vertigo or ongoing balance symptoms."
        },
        {
            title: "Medication Effects",
            description:
                "Certain medicines can cause or worsen dizziness and balance problems. A doctor should review the medication history before changes are made."
        },
        {
            title: "Neurological Disorders",
            description:
                "Problems affecting the brain or neurological balance pathways can occasionally cause vertigo or severe imbalance and require appropriate assessment."
        }
    ];

    const vertigoTypes = [
        {
            title: "Peripheral Vertigo",
            description:
                "Peripheral vertigo generally originates from the inner ear or vestibular nerve. BPPV, Ménière's disease, vestibular neuritis and labyrinthitis are examples."
        },
        {
            title: "Central Vertigo",
            description:
                "Central vertigo results from problems involving the brain or central nervous system. It requires careful assessment, particularly when neurological symptoms are present."
        },
        {
            title: "Positional Vertigo",
            description:
                "Positional vertigo occurs when particular head movements trigger spinning. BPPV is a common cause."
        },
        {
            title: "Recurrent Vertigo",
            description:
                "Repeated episodes can occur with conditions such as Ménière's disease, vestibular migraine and recurrent BPPV."
        }
    ];

    const diagnosticTests = [
        {
            title: "Detailed Clinical History",
            description:
                "The doctor assesses when the vertigo started, how long episodes last, what triggers them and whether hearing, headache, visual or neurological symptoms occur."
        },
        {
            title: "ENT & Ear Examination",
            description:
                "The ears and relevant ENT structures are examined for findings that may help identify an inner-ear or other cause."
        },
        {
            title: "Positional Testing",
            description:
                "When BPPV is suspected, positional tests may reproduce characteristic symptoms and eye movements that help identify the affected balance canal."
        },
        {
            title: "Hearing Assessment",
            description:
                "Audiological evaluation may be recommended when vertigo occurs with hearing loss, tinnitus, ear fullness or other auditory symptoms."
        },
        {
            title: "Vestibular Testing",
            description:
                "Selected patients may require additional vestibular or balance testing depending on the symptoms and suspected diagnosis."
        },
        {
            title: "Imaging When Indicated",
            description:
                "Brain or inner-ear imaging is not required for every patient. When imaging is clinically indicated, the appropriate test is selected according to the suspected cause."
        }
    ];

    const treatmentSteps = [
        {
            step: "01",
            title: "Detailed Vertigo Assessment",
            description:
                "The consultation begins with a detailed history of the spinning sensation, duration, triggers, hearing symptoms, headache, medications and previous episodes."
        },
        {
            step: "02",
            title: "ENT & Balance Evaluation",
            description:
                "The ears, hearing and balance-related findings are assessed to identify clues suggesting an inner-ear, vestibular or other cause."
        },
        {
            step: "03",
            title: "Positional & Vestibular Assessment",
            description:
                "When appropriate, positional testing and other vestibular assessments may be used to identify conditions such as BPPV and other balance disorders."
        },
        {
            step: "04",
            title: "Personalised Treatment",
            description:
                "Treatment depends on the diagnosis and may include repositioning manoeuvres, selected medicines, vestibular rehabilitation, lifestyle measures or treatment of the underlying condition."
        }
    ];

    const treatmentOptions = [
        {
            title: "Canalith Repositioning",
            description:
                "Repositioning manoeuvres such as the Epley manoeuvre may be used for appropriately diagnosed BPPV. The exact manoeuvre depends on the affected canal and clinical findings."
        },
        {
            title: "Medicines",
            description:
                "Selected medicines may be used for nausea, acute vertigo or specific underlying conditions. Medication choice depends on the diagnosis and should be guided by a doctor."
        },
        {
            title: "Vestibular Rehabilitation",
            description:
                "Vestibular exercises can help selected patients improve balance, gaze stability and adaptation following certain vestibular disorders."
        },
        {
            title: "Treatment of the Underlying Cause",
            description:
                "Management may focus on the specific underlying disorder, such as migraine-related vestibular symptoms, inner-ear disease or another identified condition."
        },
        {
            title: "Lifestyle & Trigger Management",
            description:
                "Depending on the diagnosis, patients may receive advice regarding sleep, hydration, movement, dietary triggers, fall prevention and other individual factors."
        },
        {
            title: "Selected Surgical Treatment",
            description:
                "Surgery is not required for most vertigo cases. It may be considered only for selected disorders when appropriate non-surgical treatment is unsuccessful or when a structural problem requires intervention."
        }
    ];

    const treatmentTime = [
        {
            condition: "BPPV after appropriate repositioning",
            time:
                "Many patients improve quickly, although repeat treatment or follow-up may sometimes be required."
        },
        {
            condition: "Acute vestibular neuritis / labyrinthitis",
            time:
                "The severe phase may improve over days, while balance recovery can take longer."
        },
        {
            condition: "Vestibular rehabilitation",
            time:
                "Often requires several weeks, depending on the cause, severity and individual response."
        },
        {
            condition: "Ménière's disease",
            time:
                "Usually requires ongoing management and follow-up because episodes can recur."
        },
        {
            condition: "Vestibular migraine",
            time:
                "Management is individualised and may require ongoing prevention and trigger management."
        },
        {
            condition: "Complex or recurrent vertigo",
            time:
                "Recovery depends on the underlying diagnosis and may require further testing or specialist follow-up."
        }
    ];

    const treatmentBenefits = [
        {
            title: "Repositioning Treatment",
            points: [
                "✓ Can provide rapid improvement in appropriately diagnosed BPPV",
                "✓ Non-surgical treatment",
                "✓ Usually performed as an outpatient manoeuvre",
                "• Only appropriate for specific positional vertigo patterns",
                "• Symptoms may recur"
            ]
        },
        {
            title: "Medicines",
            points: [
                "✓ Can reduce acute nausea or vertigo symptoms in selected situations",
                "✓ May support short-term symptom control",
                "• Does not necessarily correct the underlying cause",
                "• Long-term inappropriate use may interfere with vestibular compensation",
                "• Medication choice depends on the diagnosis"
            ]
        },
        {
            title: "Vestibular Rehabilitation",
            points: [
                "✓ Can improve balance and gaze stability in appropriate patients",
                "✓ Useful during recovery from selected vestibular disorders",
                "✓ Can support return to daily activities",
                "• Requires regular participation",
                "• Improvement may take several weeks"
            ]
        }
    ];

    const vertigoDuration = [
        {
            condition: "BPPV / Positional Vertigo",
            time:
                "Usually brief episodes, often lasting seconds and triggered by specific head movements."
        },
        {
            condition: "Vestibular Neuritis",
            time:
                "Acute symptoms may be severe and prolonged, with imbalance sometimes continuing during recovery."
        },
        {
            condition: "Labyrinthitis",
            time:
                "Vertigo may persist for hours or days, depending on the severity and underlying cause."
        },
        {
            condition: "Ménière's Disease",
            time:
                "Episodes commonly last from minutes to hours and may recur."
        },
        {
            condition: "Vestibular Migraine",
            time:
                "Episodes vary considerably and may last from minutes to hours or longer."
        },
        {
            condition: "Persistent Balance Disorders",
            time:
                "Symptoms can continue for weeks or longer and may require vestibular rehabilitation."
        }
    ];

    const untreatedEffects = [
        {
            title: "Repeated Falls",
            desc:
                "Persistent imbalance can increase the risk of falls, particularly in older adults or people with significant balance impairment."
        },
        {
            title: "Reduced Daily Activity",
            desc:
                "Fear of another vertigo attack may lead some people to avoid walking, travelling, exercise or normal social activities."
        },
        {
            title: "Work & Driving Problems",
            desc:
                "Vertigo and dizziness can interfere with concentration, mobility and safe driving or machinery operation."
        },
        {
            title: "Persistent Imbalance",
            desc:
                "Some vestibular disorders may leave ongoing balance problems even after the strongest spinning symptoms have improved."
        },
        {
            title: "Delayed Diagnosis",
            desc:
                "Repeatedly treating unexplained vertigo without identifying its cause may delay appropriate management of an underlying ear, vestibular or neurological condition."
        },
        {
            title: "Reduced Quality of Life",
            desc:
                "Recurrent dizziness, nausea, imbalance or fear of attacks can affect sleep, work, travel and everyday independence."
        }
    ];

    const whenToSeeDoctor = [
        "Vertigo keeps coming back or is interfering with daily activities.",
        "Spinning episodes are repeatedly triggered by turning in bed, bending or looking up.",
        "Vertigo occurs together with hearing loss, tinnitus or ear fullness.",
        "You have persistent imbalance or difficulty walking after an episode.",
        "Dizziness or vertigo continues without an obvious explanation.",
        "You are having repeated falls or feel unsafe while walking.",
        "Vertigo is associated with significant nausea or vomiting.",
        "Symptoms are affecting driving, work, sleep or normal daily activities."
    ];

    const faqItems = [
        {
            q: "What is vertigo?",
            a:
                "Vertigo is a sensation that you or your surroundings are spinning, moving or tilting. It is a symptom rather than a single disease and can result from problems involving the inner ear, vestibular system, migraine or, less commonly, neurological conditions."
        },
        {
            q: "What is the difference between vertigo and dizziness?",
            a:
                "Dizziness is a broad term that can describe lightheadedness, unsteadiness or a spinning sensation. Vertigo specifically refers to an illusion of movement, such as spinning, tilting or the surroundings moving."
        },
        {
            q: "What is the most common cause of vertigo?",
            a:
                "BPPV is one of the most common causes of vertigo. It typically causes brief spinning episodes triggered by specific head movements, such as turning in bed, looking up or bending down."
        },
        {
            q: "How long does vertigo last?",
            a:
                "The duration depends on the cause. BPPV commonly causes brief positional episodes, while some inner-ear disorders can cause prolonged symptoms lasting hours or days. Recurrent or persistent vertigo should be evaluated to identify the underlying cause."
        },
        {
            q: "Can BPPV be treated without surgery?",
            a:
                "Yes. Appropriately diagnosed BPPV is commonly treated with canalith repositioning manoeuvres such as the Epley manoeuvre. The exact manoeuvre depends on the affected balance canal."
        },
        {
            q: "Can vertigo cause hearing loss or tinnitus?",
            a:
                "Some inner-ear conditions can cause vertigo together with hearing loss, tinnitus or ear fullness. These associated symptoms are important during an ENT evaluation because they can help identify the likely cause."
        },
        {
            q: "Can vertigo be completely cured?",
            a:
                "Some causes of vertigo respond very well to appropriate treatment, while other vestibular disorders may require longer-term management. The expected outcome depends on the underlying diagnosis, severity and response to treatment."
        },
        {
            q: "How long does vertigo treatment take?",
            a:
                "Treatment time varies according to the cause. Some patients with BPPV may improve rapidly after appropriate repositioning, while vestibular rehabilitation or management of recurrent vestibular disorders may take several weeks or require ongoing follow-up."
        },
        {
            q: "Should I see an ENT doctor for vertigo?",
            a:
                "An ENT specialist can be appropriate when vertigo is associated with ear symptoms, hearing changes, tinnitus, recurrent episodes or suspected vestibular disorders. Sudden vertigo with neurological warning signs requires urgent medical assessment."
        },
        {
            q: "What happens if vertigo is left untreated?",
            a:
                "The consequences depend on the cause. Recurrent vertigo can contribute to falls, persistent imbalance, activity limitations and reduced quality of life. More importantly, unexplained or atypical symptoms may require assessment to identify the underlying condition."
        },
        {
            q: "Can vertigo be caused by an ear problem?",
            a:
                "Yes. The inner ear contains structures involved in balance, so disorders such as BPPV, Ménière's disease, vestibular neuritis and labyrinthitis can cause vertigo."
        },
        {
            q: "When is vertigo an emergency?",
            a:
                "Seek urgent medical attention if sudden vertigo occurs with weakness or numbness, facial drooping, speech difficulty, double vision, inability to stand or walk, severe headache or neck pain, confusion or other new neurological symptoms."
        },
        {
            q: "Where can I consult an ENT specialist for vertigo in Delhi?",
            a:
                "Dr. Dhirendra Singh Kushwah provides ENT consultation for vertigo, dizziness, balance disorders and related ear conditions in South Delhi. Appointments are available at the listed clinic locations by appointment."
        },
        {
            q: "How do I book a vertigo consultation in Delhi?",
            a:
                "You can contact Dr. Dhirendra Singh Kushwah's clinic by phone or WhatsApp at +91-9311449825, or email drdhirendrasinghent@gmail.com for appointment information."
        }
    ];

    return (
        <div className="bg-white">

            {/* =========================================================
                HERO SECTION
            ========================================================= */}

            <section className="relative bg-slate-900 py-14 md:py-20 px-4 md:px-8 overflow-hidden">

                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center mb-10 md:mb-14">

                        <span className="text-teal-400 font-bold uppercase tracking-[0.15em] text-xs md:text-sm">
                            Vertigo, Dizziness & Balance Care — New Delhi
                        </span>

                        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Vertigo Treatment in Delhi – Symptoms, Causes, Diagnosis & ENT Care
                        </h1>

                    </div>

                    <div className="text-center mb-10 md:mb-14">

                        <img   src="/images/Ear-Hearing-Banner.jpeg" alt="Vertigo and balance disorder treatment by Dr. Dhirendra Singh Kushwah in New Delhi"
                            className="w-full h-full object-contain"/>

                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

                        <div className="flex flex-col justify-center">

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                Vertigo is a sensation of spinning, movement or tilting that can
                                affect balance, walking and daily activities. It may occur because
                                of an inner-ear balance disorder, migraine, vestibular nerve problem
                                or, less commonly, a neurological condition.
                            </p>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-5">
                                Dr. Dhirendra Singh Kushwah is an experienced ENT specialist and
                                surgeon in Delhi with more than 25 years of clinical experience.
                                He evaluates patients with vertigo, dizziness, BPPV, imbalance,
                                hearing-related symptoms, tinnitus and other vestibular conditions.
                            </p>

                            <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-5">
                                If you are searching for an ENT specialist for vertigo treatment
                                in Delhi, South Delhi, CR Park, Jasola Vihar, Safdarjung Enclave
                                or Delhi NCR, this page explains common symptoms, causes, types,
                                diagnosis, treatment, recovery time and when urgent assessment is needed.
                            </p>

                        </div>

                        <div className="w-full">

                            <div className="w-full h-full min-h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">

                                <img  src="/images/DrDhirndraSinghKushwahWithPatient.jpeg" alt="Dr. Dhirendra Singh Kushwah ENT specialist and surgeon in New Delhi"
                                    className="w-full h-full object-contain"/>

                            </div>

                        </div>

                    </div>

                    <div className="flex flex-wrap gap-4 mt-8">

                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                            <ShieldAlert size={16} className="text-teal-400" />
                            25+ Years Experience
                        </div>

                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                            <Activity size={16} className="text-teal-400" />
                            Vertigo & Balance Care
                        </div>

                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                            <Ear size={16} className="text-teal-400" />
                            Ear & Vestibular Evaluation
                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHAT IS VERTIGO
            ========================================================= */}

            <section className="py-16 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="flex flex-col gap-6">

                            <h2 className="text-3xl font-bold text-slate-800">
                                What Is Vertigo? Understanding Spinning & Balance Problems
                            </h2>

                            <div className="w-16 h-1 bg-teal-600 rounded" />

                            <p className="text-slate-600 text-lg leading-relaxed">
                                Vertigo is the false sensation that you or your surroundings
                                are spinning, moving, tilting or rotating. It is a symptom rather
                                than a single disease and can have several different causes.
                            </p>

                            <p className="text-slate-600 text-lg leading-relaxed">
                                The balance system depends on information from the inner ear,
                                eyes and brain. When these systems send conflicting signals,
                                a person may experience vertigo, dizziness or imbalance.
                            </p>

                            <p className="text-slate-600 text-lg leading-relaxed">
                                Some causes are relatively straightforward to treat, such as
                                appropriately diagnosed BPPV. Other causes require more detailed
                                ENT, vestibular or neurological assessment.
                            </p>

                            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">

                                <p className="text-teal-900 font-medium italic">
                                    "Vertigo is a symptom, so identifying the underlying cause
                                    is an important part of choosing the right treatment."
                                </p>

                            </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                                    <Activity />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-2">
                                    Balance System
                                </h3>

                                <p className="text-sm text-slate-500">
                                    The inner ear, eyes and brain work together to maintain
                                    balance and spatial orientation.
                                </p>

                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                                <div className="w-10 h-10 bg-blue-100 text-teal-700 rounded-lg flex items-center justify-center mb-4">
                                    <Ear />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-2">
                                    Inner Ear
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Problems involving the inner ear can affect both hearing
                                    and the body's balance system.
                                </p>

                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                                    <Brain />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-2">
                                    Brain & Vestibular Pathways
                                </h3>

                                <p className="text-sm text-slate-500">
                                    The brain processes balance signals and coordinates
                                    movement and orientation.
                                </p>

                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                                    <Stethoscope />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-2">
                                    ENT Evaluation
                                </h3>

                                <p className="text-sm text-slate-500">
                                    ENT assessment can help identify ear, vestibular and
                                    related causes of vertigo.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                VERTIGO VS DIZZINESS
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-6xl mx-auto">

                    <div className="text-center mb-14">

                        <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
                            Understanding Your Symptoms
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Vertigo vs Dizziness: What Is the Difference?
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
                            People often use the words dizziness and vertigo interchangeably,
                            but they can describe different sensations.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Vertigo
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Vertigo usually refers to a false sensation of movement,
                                such as spinning, rotating, tilting or the surroundings
                                appearing to move.
                            </p>

                            <ul className="mt-5 space-y-3 text-slate-600 text-sm">
                                <li>✓ Spinning sensation</li>
                                <li>✓ Room or surroundings may appear to move</li>
                                <li>✓ May be triggered by head movement</li>
                                <li>✓ May occur with nausea or imbalance</li>
                                <li>✓ May be associated with hearing symptoms</li>
                            </ul>

                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">

                            <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                Dizziness
                            </h3>

                            <p className="text-slate-600 leading-relaxed">
                                Dizziness is a broader term and may describe lightheadedness,
                                feeling faint, unsteadiness, imbalance or a spinning sensation.
                            </p>

                            <ul className="mt-5 space-y-3 text-slate-600 text-sm">
                                <li>✓ Feeling off-balance</li>
                                <li>✓ Lightheadedness</li>
                                <li>✓ Feeling faint or weak</li>
                                <li>✓ Unsteadiness while walking</li>
                                <li>✓ May or may not involve spinning</li>
                            </ul>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                CONDITIONS
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
                            Comprehensive Vestibular & ENT Care
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Vertigo & Balance Conditions Evaluated by an ENT Specialist
                        </h2>

                        <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                            Vertigo can have different causes. Identifying the pattern of symptoms
                            and associated ear, hearing, migraine or neurological features helps
                            guide further evaluation and treatment.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {conditions.map((condition, index) => (

                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
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


            {/* =========================================================
                SYMPTOMS
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Common Vertigo Symptoms
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Vertigo can affect balance, movement, hearing and daily activities.
                            Symptoms vary depending on the underlying cause.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {symptoms.map((symptom, index) => (

                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
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


            {/* =========================================================
                CAUSES
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Common Causes of Vertigo
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Different disorders can produce similar spinning or imbalance symptoms.
                            Diagnosis should be based on the overall symptom pattern and clinical assessment.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {causes.map((cause, index) => (

                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
                            >

                                <h3 className="text-lg font-bold text-slate-800 mb-3">
                                    {cause.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {cause.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                TYPES
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Types of Vertigo
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Understanding whether vertigo is positional, peripheral or central
                            can help guide the diagnostic approach.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {vertigoTypes.map((item, index) => (

                            <div
                                key={index}
                                className="bg-slate-50 p-7 rounded-2xl border border-slate-100"
                            >

                                <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-lg flex items-center justify-center mb-4">
                                    <Activity size={20} />
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


            {/* =========================================================
                BPPV
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div>

                            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
                                Common Positional Vertigo
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                                BPPV: A Common Cause of Positional Vertigo
                            </h2>

                            <p className="text-slate-600 leading-relaxed mt-6">
                                Benign paroxysmal positional vertigo, commonly called BPPV,
                                occurs when tiny calcium crystals in the inner ear become
                                displaced and stimulate the balance canals during certain
                                head movements.
                            </p>

                            <p className="text-slate-600 leading-relaxed mt-4">
                                Typical symptoms include brief spinning when rolling over
                                in bed, lying down, getting up, bending forward or looking
                                upward. Nausea and temporary imbalance can also occur.
                            </p>

                            <p className="text-slate-600 leading-relaxed mt-4">
                                BPPV is diagnosed from the symptom pattern and appropriate
                                positional testing. When confirmed, repositioning manoeuvres
                                such as the Epley manoeuvre can often be used.
                            </p>

                        </div>

                        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">

                            <h3 className="text-2xl font-bold text-slate-900 mb-5">
                                Typical BPPV Pattern
                            </h3>

                            <ul className="space-y-4 text-slate-600">

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                                    <span>Brief spinning episodes</span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                                    <span>Triggered by particular head positions</span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                                    <span>Turning in bed may trigger symptoms</span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                                    <span>Looking up or bending may trigger spinning</span>
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-teal-600 flex-shrink-0" />
                                    <span>Temporary imbalance may remain after an attack</span>
                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                DIAGNOSIS
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            How Is Vertigo Diagnosed?
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            Vertigo diagnosis is based on the pattern of symptoms, triggers,
                            associated hearing or neurological symptoms and findings during
                            clinical examination.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {diagnosticTests.map((item, index) => (

                            <div
                                key={index}
                                className="bg-slate-50 p-7 rounded-2xl border border-slate-100"
                            >

                                <div className="text-teal-700 font-bold text-sm mb-4">
                                    ASSESSMENT {String(index + 1).padStart(2, "0")}
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


            {/* =========================================================
                TREATMENT PROCESS
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            How Dr. Dhirendra Singh Kushwah Treats Vertigo
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Treatment is selected according to the underlying cause,
                            severity, associated symptoms and clinical findings.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {treatmentSteps.map((item, index) => (

                            <div
                                key={index}
                                className="relative bg-white p-7 rounded-2xl border border-slate-100"
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


            {/* =========================================================
                TREATMENT OPTIONS
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Vertigo Treatment Options in Delhi
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            Vertigo treatment depends on the diagnosis. Options may include
                            repositioning manoeuvres, medicines, vestibular rehabilitation,
                            lifestyle management and selected procedures.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {treatmentOptions.map((item, index) => (

                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all"
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


            {/* =========================================================
                HOW LONG DOES VERTIGO LAST
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            How Long Does Vertigo Last?
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Vertigo duration varies significantly depending on the underlying
                            cause. The following are general patterns rather than guaranteed
                            recovery timelines.
                        </p>

                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl border border-slate-100 shadow-sm">

                        <table className="w-full text-left border-collapse">

                            <thead>

                                <tr className="bg-slate-900 text-white">

                                    <th className="p-4 font-semibold">
                                        Condition
                                    </th>

                                    <th className="p-4 font-semibold">
                                        Typical Pattern
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {vertigoDuration.map((item, index) => (

                                    <tr
                                        key={index}
                                        className="border-b border-slate-100 last:border-0"
                                    >

                                        <td className="p-4 text-slate-600 font-medium">
                                            {item.condition}
                                        </td>

                                        <td className="p-4 text-slate-600">
                                            {item.time}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    <p className="text-sm text-slate-500 mt-5">
                        Persistent, recurrent or unexplained vertigo should be assessed
                        rather than assuming that the symptoms will resolve on their own.
                    </p>

                </div>

            </section>


            {/* =========================================================
                TREATMENT TIME
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-5xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            How Long Does Vertigo Treatment Take?
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Treatment and recovery time depend on the cause, severity,
                            response to treatment and whether the condition is recurrent.
                        </p>

                    </div>

                    <div className="overflow-x-auto bg-slate-50 rounded-2xl border border-slate-100">

                        <table className="w-full text-left border-collapse">

                            <thead>

                                <tr className="bg-teal-700 text-white">

                                    <th className="p-4 font-semibold">
                                        Condition / Treatment
                                    </th>

                                    <th className="p-4 font-semibold">
                                        Approximate Recovery Pattern
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                {treatmentTime.map((item, index) => (

                                    <tr
                                        key={index}
                                        className="border-b border-slate-100 last:border-0 bg-white"
                                    >

                                        <td className="p-4 text-slate-600">
                                            {item.condition}
                                        </td>

                                        <td className="p-4 text-slate-600">
                                            {item.time}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    <p className="text-sm text-slate-500 mt-5">
                        These are general estimates and not a promise of recovery.
                        An individual treatment timeline can be discussed after diagnosis.
                    </p>

                </div>

            </section>


            {/* =========================================================
                BENEFITS / LIMITATIONS
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            Benefits & Limitations of Vertigo Treatment Approaches
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            There is no single treatment that is appropriate for every
                            type of vertigo. The advantages and limitations depend on
                            the underlying diagnosis.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {treatmentBenefits.map((item, index) => (

                            <div
                                key={index}
                                className="bg-white p-7 rounded-2xl border border-slate-100"
                            >

                                <h3 className="text-xl font-bold text-slate-900 mb-4">
                                    {item.title}
                                </h3>

                                <ul className="space-y-3 text-slate-600 text-sm leading-relaxed">

                                    {item.points.map((point, i) => (
                                        <li key={i}>
                                            {point}
                                        </li>
                                    ))}

                                </ul>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                DO'S AND DON'TS
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            What Should You Do During a Vertigo Episode?
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            Safety is important during an attack because sudden imbalance
                            can increase the risk of falls and injury.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100">

                            <h3 className="text-2xl font-bold text-slate-900 mb-5">
                                What You Can Do
                            </h3>

                            <ul className="space-y-4 text-slate-600">

                                <li>✓ Sit or lie down somewhere safe until the severe spinning settles.</li>
                                <li>✓ Move slowly when changing position.</li>
                                <li>✓ Keep yourself hydrated unless a doctor has advised fluid restriction.</li>
                                <li>✓ Use support when walking if you feel unstable.</li>
                                <li>✓ Follow the treatment and rehabilitation plan recommended for your diagnosis.</li>

                            </ul>

                        </div>

                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100">

                            <h3 className="text-2xl font-bold text-slate-900 mb-5">
                                What You Should Avoid
                            </h3>

                            <ul className="space-y-4 text-slate-600">

                                <li>• Do not drive while experiencing active vertigo or significant dizziness.</li>
                                <li>• Avoid ladders or potentially dangerous machinery during symptoms.</li>
                                <li>• Avoid sudden head movements when you are unstable.</li>
                                <li>• Do not repeatedly self-medicate without identifying the cause.</li>
                                <li>• Do not ignore sudden neurological warning signs.</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHEN TO SEE DOCTOR
            ========================================================= */}

            <section className="py-16 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="bg-teal-50 rounded-3xl p-8 md:p-12">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                            When Should You See an ENT Specialist for Vertigo?
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Consider an ENT evaluation if vertigo is persistent, recurrent,
                            associated with ear symptoms or affecting your safety and quality of life.
                        </p>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-600">

                            {whenToSeeDoctor.map((item, index) => (

                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >

                                    <span className="text-teal-700 font-bold mt-1">
                                        ✓
                                    </span>

                                    <span>
                                        {item}
                                    </span>

                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

            </section>


            {/* =========================================================
                IF NOT TREATED
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                            What Can Happen If Vertigo Is Not Treated on Time?
                        </h2>

                        <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                            The effect of untreated vertigo depends on its underlying cause.
                            Some mild episodes resolve, while recurrent or persistent symptoms
                            may continue to affect balance, safety and quality of life.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {untreatedEffects.map((item, index) => (

                            <div
                                key={index}
                                className="bg-white p-7 rounded-2xl border border-slate-100"
                            >

                                <h3 className="text-xl font-bold text-slate-900 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                EMERGENCY
            ========================================================= */}

            <section className="py-16 px-4 md:px-8 bg-white">

                <div className="max-w-5xl mx-auto">

                    <div className="bg-red-50 border border-red-100 rounded-3xl p-8 md:p-10">

                        <div className="flex items-start gap-4">

                            <div className="flex-shrink-0 w-12 h-12 bg-red-100 text-red-700 rounded-xl flex items-center justify-center">
                                <AlertCircle />
                            </div>

                            <div>

                                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                    When Is Vertigo an Emergency?
                                </h2>

                                <p className="text-slate-600 leading-relaxed mb-5">
                                    Sudden severe vertigo can occasionally be associated with a
                                    neurological emergency. Do not assume that every sudden spinning
                                    episode is an inner-ear problem.
                                </p>

                            </div>

                        </div>

                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600 text-sm mt-6">

                            <li>• New weakness or numbness of the face, arm or leg</li>
                            <li>• Difficulty speaking or understanding speech</li>
                            <li>• New double vision or significant visual disturbance</li>
                            <li>• Inability to stand or walk normally</li>
                            <li>• Sudden severe headache or neck pain</li>
                            <li>• New confusion or loss of consciousness</li>
                            <li>• Severe persistent vomiting with acute vertigo</li>
                            <li>• Sudden severe vertigo with other concerning neurological symptoms</li>

                        </ul>

                        <p className="text-red-800 font-semibold mt-6">
                            These symptoms require urgent medical evaluation rather than waiting
                            for a routine ENT appointment.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                LOCAL SEO
            ========================================================= */}

            <section className="py-16 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                            Vertigo & Balance Specialist Serving Delhi NCR
                        </h2>

                        <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                            Dr. Dhirendra Singh Kushwah provides ENT consultation for vertigo,
                            dizziness, balance disorders, BPPV and selected inner-ear conditions
                            for patients from South Delhi, South East Delhi, Delhi NCR and nearby areas.
                        </p>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {[
                            {
                                title: "Vertigo Specialist in Jasola Vihar",
                                areas: [
                                    "Jasola Vihar",
                                    "Sarita Vihar",
                                    "Okhla",
                                    "Jamia Nagar",
                                    "Badarpur",
                                    "Kalindi Kunj",
                                    "Govindpuri",
                                    "Kalkaji",
                                    "Greater Kailash",
                                    "Nehru Place"
                                ]
                            },
                            {
                                title: "Vertigo & ENT Specialist in CR Park",
                                areas: [
                                    "CR Park",
                                    "Chittaranjan Park",
                                    "Kalkaji",
                                    "Greater Kailash",
                                    "Nehru Place",
                                    "Alaknanda",
                                    "Govindpuri",
                                    "East of Kailash",
                                    "Lajpat Nagar",
                                    "South Delhi"
                                ]
                            },
                            {
                                title: "Vertigo Specialist in Safdarjung Enclave",
                                areas: [
                                    "Safdarjung Enclave",
                                    "Arjun Nagar",
                                    "Green Park",
                                    "Hauz Khas",
                                    "Munirka",
                                    "R.K. Puram",
                                    "Vasant Kunj",
                                    "Vasant Vihar",
                                    "Sarojini Nagar",
                                    "Defence Colony"
                                ]
                            },
                            {
                                title: "Vertigo Care for Delhi NCR",
                                areas: [
                                    "Faridabad",
                                    "Noida",
                                    "Greater Noida",
                                    "Ghaziabad",
                                    "Palwal",
                                    "South Delhi",
                                    "South East Delhi",
                                    "South West Delhi",
                                    "West Delhi"
                                ]
                            }
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm"
                            >

                                <h3 className="text-xl font-bold text-slate-800 mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    Patients experiencing recurrent vertigo, dizziness,
                                    imbalance, BPPV, hearing-related symptoms or other
                                    balance problems can seek specialist ENT evaluation.
                                </p>

                                <p className="text-slate-600 text-sm font-medium">
                                    Patients may visit from:
                                </p>

                                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">

                                    {item.areas.map((area, i) => (

                                        <li key={i}>
                                            • {area}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        ))}

                    </div>

                    <div className="mt-10 bg-teal-50 rounded-2xl p-6 md:p-8 text-center border border-teal-100">

                        <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                            Looking for Vertigo Treatment in Delhi?
                        </h3>

                        <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            If you are experiencing recurrent spinning, dizziness, imbalance,
                            BPPV, tinnitus, hearing changes or unexplained balance problems,
                            an ENT consultation can help identify the underlying cause.
                        </p>

                        <p className="text-slate-600 mt-4 font-medium max-w-3xl mx-auto">
                            Consult Dr. Dhirendra Singh Kushwah for evaluation and treatment
                            of vertigo and related ear and balance disorders in Delhi.
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


            {/* =========================================================
                WHY CHOOSE DR KUSHWAH
            ========================================================= */}

            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        <div className="max-w-4xl mx-auto w-full">

                            <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">

                                <div className="p-6 md:p-8">

                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                                        Vertigo & Balance Care by Dr. Dhirendra Singh Kushwah
                                    </h2>

                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                        Learn more about ENT care, vertigo symptoms, ear conditions,
                                        balance disorders and treatment options.
                                    </p>

                                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">

                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/f8Si15IIe54"
                                            title="Vertigo and ENT Care by Dr. Dhirendra Singh Kushwah"
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
                                    Why Choose Dr. Dhirendra Singh Kushwah for Vertigo Evaluation in Delhi?
                                </h2>

                                <p className="text-slate-600 leading-relaxed mt-6">
                                    Dr. Dhirendra Singh Kushwah is an ENT specialist and surgeon
                                    with more than 25 years of clinical experience. His practice
                                    includes evaluation and treatment of a wide range of ear,
                                    nose and throat conditions, including dizziness, vertigo,
                                    hearing-related symptoms and balance disorders.
                                </p>

                                <p className="text-slate-600 leading-relaxed mt-4">
                                    Patients with recurrent spinning, BPPV-type symptoms,
                                    imbalance, tinnitus, hearing changes or unexplained dizziness
                                    can undergo appropriate ENT assessment before treatment options
                                    are recommended.
                                </p>

                            </div>

                            <div className="space-y-6">

                                {trustPoints.map((point, i) => (

                                    <div
                                        key={i}
                                        className="flex gap-5 items-start"
                                    >

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


            {/* =========================================================
                FAQ
            ========================================================= */}

            <FaqAccordion faqItems={faqItems} />


            {/* =========================================================
                CONTACT CTA
            ========================================================= */}

            <section className="py-16 px-4">

                <div className="max-w-5xl mx-auto bg-teal-600 rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">

                    <div className="relative z-10 flex flex-col items-center gap-6">

                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Book a Vertigo Consultation in Delhi
                        </h2>

                        <p className="text-teal-100 text-lg leading-relaxed max-w-3xl">
                            If you have recurrent spinning, dizziness, imbalance, BPPV,
                            hearing changes, tinnitus or other unexplained balance symptoms,
                            an ENT consultation can help identify the underlying cause and
                            determine an appropriate treatment plan.
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
                            Consultation is available by appointment. The appropriate treatment
                            depends on the patient's symptoms, examination findings and underlying diagnosis.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                MEDICAL DISCLAIMER
            ========================================================= */}

            <section className="px-4 md:px-8 pb-12">

                <div className="max-w-5xl mx-auto">

                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 md:p-6">

                        <p className="text-xs md:text-sm text-slate-500 leading-relaxed text-center">
                            <strong className="text-slate-600">
                                Medical information:
                            </strong>{" "}
                            This page is intended for general educational information and
                            does not replace an in-person medical examination or emergency care.
                            Vertigo has many possible causes and treatment should be based on
                            an appropriate clinical diagnosis. Sudden vertigo associated with
                            neurological symptoms requires urgent medical assessment.
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}