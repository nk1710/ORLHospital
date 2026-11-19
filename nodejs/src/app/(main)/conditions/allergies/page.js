import React from "react";
import { FaqAccordion } from "@/components/ui/custom";
import {
    Activity,
    ShieldAlert,
    Award,
    Calendar,
    Stethoscope,
    AlertTriangle,
    HeartPulse,
    Wind,
    Droplets,
    Search,
    Moon,
    ShieldCheck,
} from "lucide-react";

export const metadata = {
    title:
        "Allergies & Allergic Rhinitis: Symptoms, Causes, Types & Treatment | Dr.(Prof.) Dhirendra Singh Kushwah",
    description:
        "Learn about allergies and allergic rhinitis, including symptoms, causes, common triggers, diagnosis, treatment and prevention. Know when to see an ENT specialist for persistent nasal allergy symptoms in Delhi.",
    alternates: {
        canonical:
            "https://www.drdhirendrasinghkushwah.com/conditions/allergies",
    },
};

const allergyConditions = [
    {
        title: "Allergic Rhinitis",
        icon: Wind,
        description:
            "An allergic reaction inside the nose that may cause repeated sneezing, itching, runny nose and nasal blockage after exposure to an allergen.",
    },
    {
        title: "Seasonal Allergies",
        icon: Droplets,
        description:
            "Allergy symptoms that occur during particular seasons, commonly triggered by pollen from trees, grasses or weeds.",
    },
    {
        title: "Dust & Dust Mite Allergy",
        icon: Search,
        description:
            "A common indoor allergy that can cause persistent sneezing, nasal congestion, itching and post-nasal drip.",
    },
    {
        title: "Pet Allergy",
        icon: HeartPulse,
        description:
            "Allergic reactions associated with exposure to proteins from pets, including particles from skin, saliva or urine.",
    },
    {
        title: "Mould Allergy",
        icon: ShieldCheck,
        description:
            "Exposure to mould particles may trigger nasal and respiratory allergy symptoms in susceptible individuals.",
    },
    {
        title: "Post-Nasal Drip",
        icon: Droplets,
        description:
            "Excess mucus draining into the throat can cause throat clearing, cough, irritation and a sensation of mucus at the back of the throat.",
    },
    {
        title: "Allergy-Related Nasal Blockage",
        icon: Wind,
        description:
            "Inflammation of the nasal lining can make breathing through the nose difficult, particularly during allergy flare-ups.",
    },
    {
        title: "Allergic Eye Symptoms",
        icon: Activity,
        description:
            "Allergies may cause itchy, red or watery eyes along with nasal symptoms, especially during seasonal allergy episodes.",
    },
    {
        title: "Non-Allergic Rhinitis",
        icon: Stethoscope,
        description:
            "Nasal symptoms can sometimes occur without an allergy and may be triggered by smoke, strong smells, temperature changes or other irritants.",
    },
    {
        title: "Allergy & Sleep Problems",
        icon: Moon,
        description:
            "Persistent nasal blockage and congestion can interfere with comfortable nasal breathing and sleep quality.",
    },
];

const faqItems = [
    {
        question: "What is an allergy?",
        answer:
            "An allergy occurs when the immune system reacts to a normally harmless substance, known as an allergen. Common allergens include pollen, house dust mites, mould, animal dander, certain foods, insect stings and some medicines.",
    },
    {
        question: "What are the symptoms of allergic rhinitis?",
        answer:
            "Common symptoms include repeated sneezing, an itchy nose, runny or blocked nose, itchy or watery eyes and sometimes cough or an itchy throat. Symptoms often occur after exposure to a particular trigger.",
    },
    {
        question: "What causes nasal allergies?",
        answer:
            "Common triggers include pollen, house dust mites, mould and animal dander. Identifying individual triggers can help with long-term symptom management.",
    },
    {
        question: "How can I tell if my symptoms are caused by an allergy?",
        answer:
            "Symptoms such as repeated sneezing, nasal itching, clear runny discharge and itchy or watery eyes that repeatedly occur after exposure to a particular trigger may suggest an allergy. However, infections and non-allergic rhinitis can produce similar symptoms, so persistent or unclear symptoms should be evaluated by a doctor.",
    },
    {
        question: "Is allergic rhinitis the same as sinusitis?",
        answer:
            "No. Allergic rhinitis is caused by an allergic reaction, while sinusitis involves inflammation of the sinuses and may occur because of infection, inflammation or other factors. The two conditions can sometimes occur together.",
    },
    {
        question: "Can allergies cause a blocked nose?",
        answer:
            "Yes. Allergic inflammation can cause swelling of the nasal lining and lead to nasal blockage. Persistent blockage may also have other causes, so an ENT evaluation can be helpful when symptoms continue.",
    },
    {
        question: "Can allergies cause post-nasal drip?",
        answer:
            "Yes. Nasal inflammation can increase mucus production and cause mucus to drain towards the back of the throat. This may lead to frequent throat clearing, cough or throat irritation.",
    },
    {
        question: "What treatments are available for allergies?",
        answer:
            "Treatment depends on the type and severity of the allergy. Options may include trigger avoidance, saline nasal rinses, antihistamines and nasal corticosteroid sprays. Severe or difficult-to-control allergies may require specialist assessment and, in selected patients, allergy immunotherapy.",
    },
    {
        question: "When should I see an ENT specialist for allergies?",
        answer:
            "Consider an ENT consultation if symptoms are persistent, interfere with sleep or daily activities, cause significant nasal blockage, keep returning despite treatment, or if the diagnosis is uncertain.",
    },
    {
        question: "Can allergies affect sleep?",
        answer:
            "Yes. Persistent nasal congestion can make comfortable nasal breathing difficult and may disturb sleep. If significant snoring, mouth breathing or sleep-disordered breathing is also present, an ENT assessment may be appropriate.",
    },
    {
        question: "Are allergy tests necessary for everyone?",
        answer:
            "No. Testing is not required for every person with mild, typical allergy symptoms. When the trigger is unclear, symptoms are severe or treatment is not working adequately, a doctor may consider allergy testing such as skin-prick or blood testing.",
    },
    {
        question: "Can allergies be permanently cured?",
        answer:
            "Some allergies can be effectively controlled by avoiding triggers and using appropriate treatment. For selected allergies, specialist-supervised immunotherapy may reduce sensitivity to a specific allergen. The appropriate approach depends on the allergy and the individual patient.",
    },
];

export default function AllergiesPage() {
    return (
        <main className="bg-white text-slate-900">

            {/* =====================================================
                HERO SECTION
            ===================================================== */}
            <section className="relative overflow-hidden bg-slate-950 text-white">
                <div className="absolute inset-0">
                    <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <div className="max-w-4xl">

                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-semibold text-teal-300">
                            <Wind className="h-4 w-4" />
                            Allergies & Allergic Rhinitis — Delhi
                        </div>

                        <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                            Allergies & Allergic Rhinitis:
                            <span className="block text-teal-300">
                                Symptoms, Causes, Types, Treatment & When to See an ENT Doctor
                            </span>
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Allergies can cause repeated sneezing, nasal blockage,
                            runny nose, itching, watery eyes and post-nasal drip.
                            Understanding your triggers and choosing the right
                            treatment can help control symptoms and improve
                            breathing, sleep and everyday comfort.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                <Award className="h-4 w-4 text-teal-300" />
                                <span>25+ Years Experience</span>
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                <Stethoscope className="h-4 w-4 text-teal-300" />
                                <span>ENT & Head and Neck Specialist</span>
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                                <Activity className="h-4 w-4 text-teal-300" />
                                <span>Comprehensive Allergy Evaluation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
                WHAT ARE ALLERGIES?
            ===================================================== */}
            <section className="py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-teal-600">
                                Understanding Allergies
                            </p>

                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                What Are Allergies?
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                An allergy occurs when the immune system reacts to a
                                normally harmless substance called an allergen. Common
                                allergens include pollen, house dust mites, mould and
                                animal dander.
                            </p>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
  called allergic rhinitis. It may cause sneezing,
  nasal itching, a runny or blocked nose and itchy or
  watery eyes.
</p>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                Allergy symptoms can sometimes resemble a cold or
                                other nasal conditions. A proper assessment can help
                                identify whether the symptoms are allergic, infectious,
                                structural or related to another cause.
                            </p>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <Wind className="h-8 w-8 text-teal-600" />
                                <h3 className="mt-5 text-xl font-bold">
                                    Allergic Rhinitis
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Allergy-related inflammation inside the nose
                                    causing sneezing, itching, runny nose or blockage.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                                <ShieldCheck className="h-8 w-8 text-teal-600" />
                                <h3 className="mt-5 text-xl font-bold">
                                    Trigger Management
                                </h3>
                                <p className="mt-3 text-slate-600">
                                    Identifying and reducing exposure to relevant
                                    allergens can be an important part of long-term
                                    allergy control.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
                COMMON ALLERGY CONDITIONS
            ===================================================== */}
            <section className="bg-slate-50 py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                            Allergy-Related Conditions
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Common Allergy & Nasal Allergy Problems
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Allergies can affect the nose, eyes, throat and breathing.
                            The symptoms and treatment approach can vary depending
                            on the underlying trigger.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {allergyConditions.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                                        <Icon className="h-6 w-6 text-teal-600" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-bold text-slate-900">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* =====================================================
                HOW TO IDENTIFY
            ===================================================== */}
            <section className="py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-2">

                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                                Recognising Allergy Symptoms
                            </p>

                            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                How to Identify an Allergy?
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Allergy symptoms often appear after exposure to a
                                particular trigger. Keeping track of when symptoms
                                occur, where they occur and what seems to trigger
                                them can help during a medical consultation.
                            </p>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                However, allergy symptoms can overlap with infections,
                                non-allergic rhinitis and structural nasal problems.
                                Persistent or unclear symptoms may require an ENT
                                assessment.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">

                            {[
                                "Repeated sneezing",
                                "Itchy nose",
                                "Runny nose",
                                "Blocked nose",
                                "Itchy or watery eyes",
                                "Post-nasal drip",
                                "Throat irritation",
                                "Frequent throat clearing",
                                "Cough",
                                "Symptoms after specific exposure",
                            ].map((symptom, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                                >
                                    <div className="h-2.5 w-2.5 rounded-full bg-teal-500" />
                                    <span className="font-medium text-slate-700">
                                        {symptom}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
                COMMON TRIGGERS
            ===================================================== */}
            <section className="bg-slate-950 py-20 text-white lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="max-w-3xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
                            Common Allergy Triggers
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            What Can Trigger Allergies?
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-300">
                            Allergy triggers vary from person to person. Common
triggers include pollen, house dust mites, mould and
animal dander.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: "Pollen",
                                text: "Tree, grass and weed pollen may trigger seasonal allergy symptoms.",
                            },
                            {
                                title: "House Dust Mites",
                                text: "A common indoor trigger associated with persistent nasal allergy symptoms.",
                            },
                            {
                                title: "Animal Dander",
                                text: "Exposure to proteins associated with pets can trigger allergic reactions.",
                            },
                            {
                                title: "Mould",
                                text: "Mould particles can trigger allergy symptoms in susceptible individuals.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <h3 className="text-xl font-bold text-teal-300">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-300">
                                    {item.text}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =====================================================
                TYPES
            ===================================================== */}
            <section className="py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                            Types
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Types of Allergies & Rhinitis
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                title: "Seasonal Allergic Rhinitis",
                                text: "Symptoms that occur during particular seasons, often associated with pollen.",
                            },
                            {
                                title: "Perennial Allergic Rhinitis",
                                text: "Symptoms that may continue throughout the year because of persistent indoor or environmental triggers.",
                            },
                            {
                                title: "Occupational Allergy",
                                text: "Symptoms associated with exposure to specific substances in a work environment.",
                            },
                            {
                                title: "Non-Allergic Rhinitis",
                                text: "Nasal symptoms caused by irritants or other triggers rather than an allergic reaction.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-slate-200 p-6"
                            >
                                <h3 className="text-xl font-bold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-slate-600">
                                    {item.text}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =====================================================
                DIAGNOSIS
            ===================================================== */}
            <section className="bg-slate-50 py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                                Diagnosis
                            </p>

                            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                How Are Allergies Diagnosed?
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Diagnosis starts with a detailed history of symptoms,
                                possible triggers, duration and response to previous
                                treatment. A doctor may also examine the nose, throat
                                and related structures.
                            </p>

                            <p className="mt-4 text-lg leading-8 text-slate-600">
                                If the cause is unclear or symptoms are significant,
                                allergy testing may be considered. Depending on the
                                situation, this may include skin-prick testing or
                                blood tests. 
                            </p>
                        </div>

                        <div className="space-y-4">

                            {[
                                "Detailed allergy and symptom history",
                                "Nose, throat and ENT examination",
                                "Assessment of possible environmental triggers",
                                "Evaluation for associated sinus or nasal problems",
                                "Skin-prick testing when appropriate",
                                "Blood allergy testing when appropriate",
                                "Further ENT assessment for persistent nasal blockage",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm"
                                >
                                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-100 text-sm font-bold text-teal-700">
                                        {index + 1}
                                    </div>

                                    <p className="font-medium text-slate-700">
                                        {item}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
                TREATMENT
            ===================================================== */}
            <section className="py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                            Treatment Approach
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Allergy Treatment & Management
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Treatment is selected according to the type of allergy,
                            severity of symptoms, triggers and response to previous
                            treatment.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                icon: ShieldCheck,
                                title: "Trigger Avoidance",
                                text: "Reducing exposure to known allergens can help prevent or reduce symptoms.",
                            },
                            {
                                icon: HeartPulse,
                                title: "Antihistamines",
                                text: "Antihistamine medicines may help control symptoms such as sneezing and itching when appropriate.",
                            },
                            {
                                icon: Wind,
                                title: "Nasal Sprays",
                                text: "Nasal corticosteroid sprays may be used to reduce nasal inflammation and congestion.",
                            },
                            {
                                icon: Activity,
                                title: "Specialist Treatment",
                                text: "Selected patients with significant or difficult-to-control allergies may need specialist assessment and consideration of immunotherapy.",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                                >
                                    <Icon className="h-8 w-8 text-teal-600" />

                                    <h3 className="mt-5 text-xl font-bold">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 leading-7 text-slate-600">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}

                    </div>

                    <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-teal-100 bg-teal-50 p-6">
                        <p className="leading-7 text-slate-700">
                            <strong>Important:</strong> Not every blocked or runny
                            nose is caused by an allergy. Treatment should be based
                            on the underlying cause. Antihistamines and nasal
                            corticosteroid sprays can be useful for appropriate
                            allergy symptoms, but medication choice and use should
                            be discussed with a doctor or pharmacist when necessary.
                        </p>
                    </div>
                </div>
            </section>


            {/* =====================================================
                WHAT IF NOT TREATED
            ===================================================== */}
            <section className="bg-slate-50 py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                            Long-Term Impact
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            What Happens If Allergies Are Not Properly Managed?
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Allergic rhinitis is usually manageable, but persistent
                            symptoms can significantly affect everyday comfort,
                            sleep and quality of life.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            "Persistent nasal congestion",
                            "Poor sleep or disturbed sleep",
                            "Frequent mouth breathing",
                            "Ongoing post-nasal drip",
                            "Repeated throat clearing or cough",
                            "Reduced daily comfort and concentration",
                            "Difficulty controlling symptoms",
                            "Possible worsening of associated asthma symptoms in some people",
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-white p-6 shadow-sm"
                            >
                                <AlertTriangle className="h-7 w-7 text-amber-500" />

                                <p className="mt-4 font-semibold leading-7 text-slate-700">
                                    {item}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


            {/* =====================================================
                WHEN TO SEE DOCTOR
            ===================================================== */}
            <section className="py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-2">

                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                                Medical Evaluation
                            </p>

                            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                When Should You See an ENT Doctor?
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                Consider an ENT evaluation when allergy or nasal
                                symptoms continue despite appropriate treatment,
                                interfere with sleep or daily activities, or when
                                the cause is uncertain.
                            </p>
                        </div>

                        <div className="space-y-4">

                            {[
                                "Symptoms continue for weeks or keep returning",
                                "Nasal blockage is affecting normal breathing",
                                "Symptoms are disturbing sleep",
                                "You frequently breathe through your mouth",
                                "Post-nasal drip or throat irritation persists",
                                "Pharmacy treatment is not providing adequate relief",
                                "You are unsure what is triggering your symptoms",
                                "You have associated sinus or nasal problems",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 rounded-xl border border-slate-200 p-5"
                                >
                                    <ShieldCheck className="h-6 w-6 shrink-0 text-teal-600" />
                                    <span className="font-medium text-slate-700">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>


            {/* =====================================================
                EMERGENCY WARNING
            ===================================================== */}
            <section className="bg-red-50 py-16">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">

                    <div className="rounded-2xl border border-red-200 bg-white p-8 shadow-sm">

                        <div className="flex items-start gap-5">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100">
                                <ShieldAlert className="h-6 w-6 text-red-600" />
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold text-slate-900">
                                    Emergency Allergy Warning Signs
                                </h2>

                                <p className="mt-3 leading-7 text-slate-600">
                                    A severe allergic reaction, known as anaphylaxis,
                                    requires immediate emergency medical treatment.
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">

                            {[
                                "Sudden swelling of the lips, tongue, mouth or throat",
                                "Difficulty breathing or severe wheezing",
                                "Tightness in the throat or difficulty swallowing",
                                "Fainting or severe dizziness",
                                "Rapidly worsening allergic reaction",
                                "Blue, grey or unusually pale lips or skin",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl bg-red-50 p-4 font-medium text-slate-700"
                                >
                                    {item}
                                </div>
                            ))}

                        </div>

                        <p className="mt-6 font-semibold text-red-700">
                            These symptoms can indicate anaphylaxis and require
                            immediate emergency medical attention.
                        </p>

                    </div>
                </div>
            </section>


            {/* =====================================================
                CASE STUDIES
            ===================================================== */}
            <section className="py-20 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                            Patient Scenarios
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Illustrative Allergy Case Examples
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            The following are illustrative examples showing how
                            persistent allergy symptoms may be evaluated. They are
                            not presented as individual patient records.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-3">

                        <div className="rounded-2xl border border-slate-200 p-7">
                            <span className="text-sm font-bold text-teal-600">
                                CASE 01
                            </span>

                            <h3 className="mt-3 text-xl font-bold">
                                Persistent Sneezing & Nasal Blockage
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                A patient experiences repeated sneezing, nasal
                                itching and blockage, particularly after exposure
                                to dust. Evaluation focuses on identifying triggers
                                and distinguishing allergic rhinitis from other
                                causes of nasal obstruction.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-7">
                            <span className="text-sm font-bold text-teal-600">
                                CASE 02
                            </span>

                            <h3 className="mt-3 text-xl font-bold">
                                Allergy Affecting Sleep
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                A patient has persistent nasal congestion, mouth
                                breathing and disturbed sleep. ENT assessment can
                                evaluate allergy, nasal anatomy and other possible
                                causes of nighttime breathing difficulty.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-7">
                            <span className="text-sm font-bold text-teal-600">
                                CASE 03
                            </span>

                            <h3 className="mt-3 text-xl font-bold">
                                Symptoms Despite Treatment
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                A patient continues to experience allergy symptoms
                                despite using treatment. The next step may involve
                                reviewing the diagnosis, trigger exposure,
                                medication technique and whether specialist testing
                                is appropriate.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                WHY CHOOSE DR KUSHWAH
            ===================================================== */}
            <section className="bg-slate-950 py-20 text-white lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-teal-300">
                                ENT Care in Delhi
                            </p>

                            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                                Why Choose Dr. Dhirendra Singh Kushwah for Allergy & ENT Care?
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-slate-300">
                                Persistent allergy symptoms can sometimes overlap
                                with sinus disease, nasal structural problems,
                                enlarged turbinates or other ENT conditions.
                                A comprehensive ENT evaluation can help identify
                                the underlying cause and guide appropriate treatment.
                            </p>

                            <div className="mt-8 space-y-5">

                                <div className="flex gap-4">
                                    <Award className="mt-1 h-6 w-6 shrink-0 text-teal-300" />
                                    <div>
                                        <h3 className="font-bold">
                                            25+ Years of ENT Experience
                                        </h3>
                                        <p className="mt-1 text-slate-400">
                                            Extensive experience in ENT, sinus,
                                            nasal and head & neck conditions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Stethoscope className="mt-1 h-6 w-6 shrink-0 text-teal-300" />
                                    <div>
                                        <h3 className="font-bold">
                                            Comprehensive ENT Evaluation
                                        </h3>
                                        <p className="mt-1 text-slate-400">
                                            Assessment of allergy symptoms alongside
                                            possible nasal and sinus conditions.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <HeartPulse className="mt-1 h-6 w-6 shrink-0 text-teal-300" />
                                    <div>
                                        <h3 className="font-bold">
                                            Individualised Treatment
                                        </h3>
                                        <p className="mt-1 text-slate-400">
                                            Treatment recommendations are based on
                                            symptoms, examination and suspected cause.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-400/10">
                                <Calendar className="h-7 w-7 text-teal-300" />
                            </div>

                            <h3 className="mt-6 text-2xl font-bold">
                                Get Your Allergy Symptoms Evaluated
                            </h3>

                            <p className="mt-4 leading-7 text-slate-300">
                                If persistent sneezing, nasal blockage, post-nasal
                                drip or allergy symptoms are affecting your daily
                                life, an ENT consultation can help determine the
                                underlying cause and appropriate management.
                            </p>

                            <div className="mt-7 rounded-xl bg-white/5 p-5">
                                <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
                                    Consultation
                                </p>

                                <p className="mt-2 text-slate-300">
                                    ENT Specialist & Head and Neck Surgeon
                                </p>

                                <p className="mt-1 text-slate-400">
                                    Dr. (Prof.) Dhirendra Singh Kushwah
                                </p>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                FAQ
            ===================================================== */}
            <section className="py-20 lg:py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">

                    <div className="text-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-teal-600">
                            Frequently Asked Questions
                        </p>

                        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                            Allergies & Allergic Rhinitis FAQs
                        </h2>

                        <p className="mt-5 text-lg text-slate-600">
                            Answers to common questions about allergy symptoms,
                            diagnosis, treatment and ENT evaluation.
                        </p>
                    </div>

                    <div className="mt-10">
                        <FaqAccordion faqItems={faqItems} />
                    </div>

                </div>
            </section>


            {/* =====================================================
                FINAL CTA
            ===================================================== */}
            <section className="bg-teal-600 py-16 text-white">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

                    <h2 className="text-3xl font-bold sm:text-4xl">
                        Struggling With Persistent Allergy Symptoms?
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-teal-50">
                        Get a comprehensive ENT evaluation for persistent sneezing,
                        nasal blockage, post-nasal drip, allergy symptoms or
                        breathing problems.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <a href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-teal-700 transition hover:bg-teal-50">
    <Calendar className="h-5 w-5" />
    Book an ENT Consultation
</a>

                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
                        >
                            Contact Clinic
                        </a>

                    </div>
                </div>
            </section>

        </main>
    );
}