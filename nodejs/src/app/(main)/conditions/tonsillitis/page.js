import React from "react";
import { FaqAccordion } from "@/components/ui/custom";
import {
    Activity,
    AlertCircle,
    Award,
    Calendar,
    CheckCircle2,
    ShieldAlert,
    Stethoscope,
    Syringe,
    Thermometer,
    UserRound,
} from "lucide-react";

export const metadata = {
    title:
        "Tonsillitis: Symptoms, Causes, Types, Treatment & When to See an ENT Doctor | Dr.(Prof.) Dhirendra Singh Kushwah",
    description:
        "Learn about tonsillitis symptoms, causes, types, diagnosis and treatment. Understand recurrent tonsillitis, tonsil stones, tonsillectomy and when to see an ENT specialist in Delhi.",
    alternates: {
        canonical:
            "https://www.drdhirendrasinghkushwah.in/conditions/tonsillitis",
    },
};

export default function TonsillitisPage() {
    const symptoms = [
        {
            title: "Sore Throat",
            desc:
                "Tonsillitis commonly causes throat pain or soreness, which may become more noticeable while swallowing.",
            icon: <Thermometer />,
        },
        {
            title: "Swollen Tonsils",
            desc:
                "The tonsils may become enlarged, red and inflamed. White or yellow patches can sometimes appear on the tonsils.",
            icon: <Activity />,
        },
        {
            title: "Difficulty Swallowing",
            desc:
                "Inflamed or enlarged tonsils can make swallowing food, liquids or even saliva uncomfortable or difficult.",
            icon: <Stethoscope />,
        },
        {
            title: "Fever",
            desc:
                "Tonsillitis may be associated with fever, particularly when the inflammation is caused by an infection.",
            icon: <Thermometer />,
        },
        {
            title: "Swollen Neck Glands",
            desc:
                "Lymph nodes in the neck may become enlarged and tender while the body responds to an infection.",
            icon: <UserRound />,
        },
        {
            title: "Bad Breath",
            desc:
                "Bad breath can occur during tonsil infections and may also be associated with tonsil stones or chronic tonsil problems.",
            icon: <Activity />,
        },
    ];

    const causes = [
        {
            title: "Viral Infection",
            desc:
                "Viruses are a common cause of tonsillitis. Viral tonsillitis may occur along with symptoms of a common cold or other respiratory infection.",
        },
        {
            title: "Bacterial Infection",
            desc:
                "Certain bacteria, including group A Streptococcus, can cause bacterial tonsillitis and may require specific medical treatment.",
        },
        {
            title: "Repeated Infections",
            desc:
                "Some patients experience recurrent episodes of tonsillitis over time, which can interfere with school, work, sleep and everyday activities.",
        },
        {
            title: "Enlarged Tonsils",
            desc:
                "Chronically enlarged tonsils can contribute to swallowing difficulties, mouth breathing, snoring and sleep-related breathing problems.",
        },
        {
            title: "Tonsil Stones",
            desc:
                "Debris can collect in tonsil crypts and form tonsil stones, which may cause bad breath, throat irritation or a foreign-body sensation.",
        },
        {
            title: "Chronic Tonsil Inflammation",
            desc:
                "Persistent or repeatedly inflamed tonsils may require assessment to determine whether medical management or surgical treatment is appropriate.",
        },
    ];

    const types = [
        {
            title: "Acute Tonsillitis",
            desc:
                "Acute tonsillitis develops suddenly and may cause sore throat, swollen tonsils, fever, painful swallowing and enlarged neck glands.",
            icon: <Thermometer />,
        },
        {
            title: "Recurrent Tonsillitis",
            desc:
                "Recurrent tonsillitis refers to repeated episodes of tonsil inflammation. The frequency and severity of episodes are important when considering long-term treatment.",
            icon: <Activity />,
        },
        {
            title: "Chronic Tonsillitis",
            desc:
                "Chronic tonsil inflammation can produce persistent throat discomfort, bad breath, tonsil debris and recurrent symptoms in some patients.",
            icon: <Stethoscope />,
        },
    ];

    const diagnosis = [
        {
            title: "Clinical Examination",
            desc:
                "An ENT specialist examines the throat, tonsils, neck glands and surrounding structures and reviews the patient's symptoms and medical history.",
        },
        {
            title: "Tonsil Examination",
            desc:
                "The size, redness, swelling, discharge and appearance of the tonsils can provide important clues about the underlying condition.",
        },
        {
            title: "Throat Swab",
            desc:
                "A throat swab may be recommended in selected patients when bacterial infection, including streptococcal infection, is suspected.",
        },
        {
            title: "Assessment of Recurrent Episodes",
            desc:
                "For recurrent tonsillitis, the number, severity and documentation of episodes help determine whether long-term treatment or tonsillectomy should be considered.",
        },
        {
            title: "Sleep & Airway Assessment",
            desc:
                "Patients with enlarged tonsils, loud snoring or suspected sleep-disordered breathing may require assessment of the upper airway and sleep-related symptoms.",
        },
        {
            title: "Additional Tests When Required",
            desc:
                "Further investigations may be recommended when symptoms are unusual, severe, persistent or associated with complications.",
        },
    ];

    const treatmentOptions = [
        {
            title: "Supportive Treatment",
            desc:
                "Depending on the cause and severity, treatment may include adequate fluids, rest, appropriate pain or fever relief and other supportive measures advised by a doctor.",
        },
        {
            title: "Treatment of Bacterial Infection",
            desc:
                "When bacterial tonsillitis is diagnosed or strongly suspected, an appropriate antibiotic may be prescribed by a qualified medical professional.",
        },
        {
            title: "Pain & Fever Management",
            desc:
                "Appropriate medicines may be used to control throat pain and fever. Medication should be selected according to age, medical history and individual circumstances.",
        },
        {
            title: "Management of Recurrent Tonsillitis",
            desc:
                "Repeated episodes should be assessed to identify triggers, document infections and determine whether continued medical management or surgery is appropriate.",
        },
        {
            title: "Tonsil Stone Management",
            desc:
                "Tonsil stones may sometimes be managed conservatively. Persistent or troublesome cases may require ENT evaluation and, in selected patients, a procedural or surgical approach.",
        },
        {
            title: "Tonsillectomy",
            desc:
                "Removal of the tonsils may be considered for selected patients with recurrent tonsillitis, significant obstructive symptoms or other appropriate indications.",
        },
    ];

    const emergencySigns = [
        "Difficulty breathing",
        "Inability to swallow saliva or significant drooling",
        "Rapidly increasing swelling of the throat or neck",
        "Severe difficulty opening the mouth",
        "Muffled or significantly changed voice",
        "Severe one-sided throat swelling or pain",
        "Signs of dehydration",
        "Rapid worsening of symptoms",
    ];

    const faqItems = [
        {
            q: "What is tonsillitis?",
            a:
                "Tonsillitis is inflammation of the tonsils, which are tissues located at the back of the throat. It is commonly caused by viral infections and can also be caused by bacteria. Symptoms may include sore throat, swollen tonsils, painful swallowing, fever and swollen neck glands.",
        },
        {
            q: "What are the most common symptoms of tonsillitis?",
            a:
                "Common symptoms include sore throat, red or swollen tonsils, painful swallowing, fever, swollen lymph nodes in the neck, bad breath and sometimes white or yellow patches on the tonsils. Symptoms can vary depending on whether the cause is viral or bacterial.",
        },
        {
            q: "Is tonsillitis caused by bacteria or viruses?",
            a:
                "Both viruses and bacteria can cause tonsillitis. Viral infections are common, while bacterial infections such as group A Streptococcus can also cause tonsillitis. A medical evaluation and, when appropriate, testing can help determine the likely cause.",
        },
        {
            q: "How long does tonsillitis usually last?",
            a:
                "The duration depends on the underlying cause and the individual's recovery. Many acute infections improve over several days, but persistent, severe or recurrent symptoms should be evaluated by a doctor rather than repeatedly self-treated.",
        },
        {
            q: "When should I see an ENT doctor for tonsillitis?",
            a:
                "You should consider an ENT evaluation if tonsillitis keeps returning, symptoms are severe or persistent, swallowing becomes difficult, tonsils remain significantly enlarged, you have frequent tonsil stones or bad breath, or enlarged tonsils are associated with snoring or sleep-related breathing problems.",
        },
        {
            q: "What is recurrent tonsillitis?",
            a:
                "Recurrent tonsillitis means repeated episodes of tonsil inflammation over time. The number and severity of episodes, their impact on daily life and whether they are appropriately documented are important when deciding on long-term management.",
        },
        {
            q: "When is tonsillectomy recommended?",
            a:
                "Tonsillectomy may be considered for selected patients with recurrent severe tonsillitis, significant obstructive symptoms caused by enlarged tonsils, certain complications or other specific medical indications. The decision should be made after an ENT assessment.",
        },
        {
            q: "Are enlarged tonsils always a reason for surgery?",
            a:
                "No. Enlarged tonsils do not automatically require surgery. Treatment depends on symptoms, the degree of enlargement, recurrent infections, swallowing problems, sleep-related breathing symptoms and other clinical findings.",
        },
        {
            q: "Can tonsillitis cause bad breath?",
            a:
                "Yes. Bad breath can occur during tonsil infections. Persistent bad breath may also be associated with tonsil stones, chronic tonsil problems, dental conditions or other causes, so persistent symptoms may require evaluation.",
        },
        {
            q: "What are tonsil stones?",
            a:
                "Tonsil stones are small deposits that can form in the crypts or pockets of the tonsils when debris, mucus and other material collect and harden. They may cause bad breath, throat irritation or a sensation of something stuck in the throat.",
        },
        {
            q: "Can tonsillitis cause difficulty breathing?",
            a:
                "Severe tonsil swelling can sometimes affect the upper airway. Difficulty breathing should be treated as an urgent symptom, particularly if it is sudden, worsening or associated with significant throat swelling.",
        },
        {
            q: "Is tonsillectomy painful?",
            a:
                "Tonsillectomy is performed under anaesthesia, so the patient does not experience surgical pain during the procedure. Throat pain is common during recovery and can last for several days. Recovery instructions, hydration, diet and prescribed medicines are important after surgery.",
        },
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
                            Tonsillitis & Tonsil Care — New Delhi
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-5xl">
                            Tonsillitis: Symptoms, Causes, Types, Treatment & When to See an ENT Doctor
                        </h1>

                        <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
                            Understand tonsillitis symptoms, causes, types and treatment.
                            Learn how to identify recurrent tonsillitis, when enlarged
                            tonsils require medical evaluation and when tonsillectomy may
                            be considered.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4">

                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                                <Award size={16} className="text-teal-400" />
                                25+ Years Experience
                            </div>

                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                                <Stethoscope size={16} className="text-teal-400" />
                                ENT Evaluation
                            </div>

                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                                <Activity size={16} className="text-teal-400" />
                                Tonsil & Throat Care
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* WHAT IS TONSILLITIS */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div className="flex flex-col gap-6">

                            <h2 className="text-3xl font-bold text-slate-800">
                                What Is Tonsillitis?
                            </h2>

                            <div className="w-16 h-1 bg-teal-600 rounded" />

                            <p className="text-slate-600 text-lg leading-relaxed">
                                Tonsillitis is inflammation of the tonsils, two areas of
                                lymphoid tissue located at the back of the throat. Tonsillitis
                                can occur at any age but is particularly common in children
                                and young people.
                            </p>

                            <p className="text-slate-600 text-lg leading-relaxed">
                                It may be caused by a viral infection or a bacterial infection.
                                The symptoms can range from a mild sore throat to significant
                                throat pain, fever, swollen tonsils and difficulty swallowing.
                            </p>

                            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">

                                <p className="text-teal-900 font-medium italic">
                                    Recurrent or persistent tonsillitis should be assessed
                                    by an ENT specialist to determine whether continued
                                    medical treatment, further evaluation or tonsillectomy
                                    may be appropriate.
                                </p>

                            </div>

                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4">
                                    <Thermometer />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-2">
                                    Infection
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Tonsillitis can result from viral or bacterial infections.
                                </p>

                            </div>


                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                                <div className="w-10 h-10 bg-blue-100 text-teal-700 rounded-lg flex items-center justify-center mb-4">
                                    <Stethoscope />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-2">
                                    Swollen Tonsils
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Inflamed tonsils can become red, enlarged and painful.
                                </p>

                            </div>


                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                                <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                                    <Activity />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-2">
                                    Recurrent Episodes
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Some patients experience repeated tonsil infections.
                                </p>

                            </div>


                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">

                                <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                                    <ShieldAlert />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-2">
                                    ENT Evaluation
                                </h3>

                                <p className="text-sm text-slate-500">
                                    Persistent or severe symptoms require appropriate medical assessment.
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* HOW TO IDENTIFY */}
            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl font-bold text-slate-900">
                            How Can You Identify Tonsillitis?
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            Symptoms can provide clues, but an examination may be required
                            to determine the cause and appropriate treatment.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            "You have a sore or painful throat.",
                            "Your tonsils appear red or swollen.",
                            "You have pain while swallowing.",
                            "You have fever or chills.",
                            "You notice white or yellow patches on the tonsils.",
                            "The glands in your neck feel swollen or tender.",
                            "You have bad breath during repeated throat infections.",
                            "You experience recurrent episodes of tonsillitis.",
                            "Enlarged tonsils are associated with snoring or breathing problems during sleep.",
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4"
                            >

                                <CheckCircle2 className="text-teal-600 flex-shrink-0" />

                                <p className="text-slate-600 leading-relaxed">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* SYMPTOMS */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">

                        <h2 className="text-3xl font-bold text-slate-900">
                            Common Symptoms of Tonsillitis
                        </h2>

                        <p className="text-slate-500 mt-4">
                            Tonsillitis can cause throat, swallowing and general infection-related symptoms.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {symptoms.map((item, index) => (

                            <div
                                key={index}
                                className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all"
                            >

                                <div className="w-11 h-11 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-5">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-teal-700">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* CAUSES */}
            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-16">

                        <h2 className="text-3xl font-bold text-slate-900">
                            Causes of Tonsillitis
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            Understanding the cause is important because treatment depends
                            on whether the problem is an acute infection, recurrent
                            inflammation, enlarged tonsils or another tonsil condition.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {causes.map((item, index) => (

                            <div
                                key={index}
                                className="bg-slate-50 p-7 rounded-2xl border border-slate-100"
                            >

                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* TYPES */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl font-bold text-slate-900">
                            Types of Tonsillitis
                        </h2>

                        <p className="text-slate-500 mt-4">
                            Tonsillitis can be described according to its duration and pattern.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {types.map((item, index) => (

                            <div
                                key={index}
                                className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-teal-400 flex items-center justify-center mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* RECURRENT TONSILLITIS */}
            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-6xl mx-auto">

                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white">

                        <div className="flex items-start gap-5 mb-8">

                            <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                                <Activity className="text-teal-400" />
                            </div>

                            <div>

                                <h2 className="text-3xl font-bold">
                                    Recurrent Tonsillitis
                                </h2>

                                <p className="text-slate-400 mt-3">
                                    Repeated throat infections may require a long-term treatment plan.
                                </p>

                            </div>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            <div>

                                <h3 className="text-xl font-bold mb-5">
                                    What to Consider
                                </h3>

                                <ul className="space-y-3">

                                    {[
                                        "How frequently tonsillitis episodes occur",
                                        "Severity and duration of each episode",
                                        "Whether episodes are appropriately documented",
                                        "Impact on school, work or everyday activities",
                                        "Any complications associated with infections",
                                        "Presence of enlarged tonsils or sleep-related symptoms",
                                    ].map((item, index) => (

                                        <li
                                            key={index}
                                            className="flex gap-3 text-gray-300"
                                        >

                                            <CheckCircle2
                                                size={20}
                                                className="text-teal-400 flex-shrink-0"
                                            />

                                            {item}

                                        </li>

                                    ))}

                                </ul>

                            </div>


                            <div>

                                <h3 className="text-xl font-bold mb-5">
                                    When Surgery May Be Discussed
                                </h3>

                                <p className="text-gray-300 leading-relaxed">
                                    Tonsillectomy may be considered for selected patients
                                    who experience significant recurrent tonsillitis or
                                    have other established indications such as obstructive
                                    symptoms caused by enlarged tonsils. The decision should
                                    follow an individual ENT assessment.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* TONSILLECTOMY */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        <div>

                            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                                Surgical Treatment
                            </span>

                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-6">
                                Tonsillectomy: When Is Tonsil Removal Considered?
                            </h2>

                            <p className="text-slate-600 text-lg leading-relaxed mb-5">
                                Tonsillectomy is a surgical procedure in which the palatine
                                tonsils are removed. It is not necessary for every person
                                who develops tonsillitis.
                            </p>

                            <p className="text-slate-600 text-lg leading-relaxed">
                                An ENT specialist may discuss tonsillectomy when a patient
                                has significant recurrent tonsillitis, obstructive symptoms
                                related to enlarged tonsils, certain complications or
                                another specific medical indication.
                            </p>

                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                            {[
                                {
                                    title: "Recurrent Infections",
                                    icon: <Activity />,
                                },
                                {
                                    title: "Enlarged Tonsils",
                                    icon: <Stethoscope />,
                                },
                                {
                                    title: "Sleep-Related Problems",
                                    icon: <ShieldAlert />,
                                },
                                {
                                    title: "Selected Complications",
                                    icon: <AlertCircle />,
                                },
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                                >

                                    <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                                        {item.icon}
                                    </div>

                                    <h3 className="font-bold text-slate-800">
                                        {item.title}
                                    </h3>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
            </section>


            {/* DIAGNOSIS */}
            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl font-bold text-slate-900">
                            How Is Tonsillitis Diagnosed?
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            Diagnosis is based on symptoms, physical examination and
                            additional testing when clinically required.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {diagnosis.map((item, index) => (

                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100"
                            >

                                <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-lg flex items-center justify-center mb-4">
                                    <Stethoscope size={20} />
                                </div>

                                <h3 className="font-bold text-slate-800 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* TREATMENT */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl font-bold text-slate-900">
                            Tonsillitis Treatment
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            Treatment depends on the cause, severity, frequency of episodes
                            and whether the tonsils are causing other problems.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {treatmentOptions.map((item, index) => (

                            <div
                                key={index}
                                className="bg-white p-7 rounded-2xl shadow-sm border border-slate-100"
                            >

                                <div className="w-11 h-11 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-5">
                                    <CheckCircle2 />
                                </div>

                                <h3 className="text-xl font-bold text-slate-800 mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* WHEN TO SEE DOCTOR */}
            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <h2 className="text-3xl font-bold text-slate-900">
                            When Should You See an ENT Doctor for Tonsillitis?
                        </h2>

                        <p className="text-slate-500 mt-4">
                            Medical evaluation is particularly important when symptoms
                            are severe, persistent or repeatedly returning.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {[
                            "Tonsillitis keeps coming back.",
                            "Your sore throat or swallowing difficulty persists.",
                            "You have significantly enlarged tonsils.",
                            "You experience frequent tonsil stones or persistent bad breath.",
                            "Tonsils interfere with eating or swallowing.",
                            "You snore loudly or have sleep-related breathing problems.",
                            "You have repeated fever associated with throat infections.",
                            "Symptoms are becoming more severe or frequent.",
                            "You have had a previous complication related to tonsillitis.",
                        ].map((item, index) => (

                            <div
                                key={index}
                                className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4"
                            >

                                <CheckCircle2
                                    className="text-teal-600 flex-shrink-0"
                                />

                                <p className="text-slate-600">
                                    {item}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>
            </section>


            {/* EMERGENCY */}
            <section className="py-16 px-4 md:px-8 bg-red-50">

                <div className="max-w-6xl mx-auto">

                    <div className="border border-red-200 rounded-3xl p-8 md:p-10">

                        <div className="flex items-start gap-5">

                            <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <AlertCircle />
                            </div>

                            <div className="w-full">

                                <h2 className="text-2xl md:text-3xl font-bold text-red-900 mb-4">
                                    Tonsillitis Warning Signs That Need Urgent Medical Attention
                                </h2>

                                <p className="text-red-800 leading-relaxed mb-6">
                                    Severe throat infections can occasionally lead to
                                    complications. Seek urgent medical attention if you
                                    develop significant breathing or swallowing problems
                                    or rapidly worsening symptoms.
                                </p>


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                    {emergencySigns.map((item, index) => (

                                        <div
                                            key={index}
                                            className="bg-white p-4 rounded-xl border border-red-100 flex gap-3"
                                        >

                                            <AlertCircle
                                                size={19}
                                                className="text-red-600 flex-shrink-0"
                                            />

                                            <span className="text-slate-600">
                                                {item}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* CASE EXAMPLES */}
            <section className="py-20 px-4 md:px-8 bg-white">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-14">

                        <h2 className="text-3xl font-bold text-slate-900">
                            Tonsillitis Case Examples
                        </h2>

                        <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                            These are illustrative clinical examples showing why treatment
                            decisions depend on the individual patient's symptoms and findings.
                        </p>

                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="p-7 bg-slate-50 rounded-2xl border border-slate-100">

                            <span className="text-teal-600 text-sm font-bold uppercase tracking-wider">
                                Case Example 01
                            </span>

                            <h3 className="text-xl font-bold text-slate-800 mt-3 mb-4">
                                Acute Tonsillitis
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                A patient develops a sudden sore throat, fever, painful
                                swallowing and red, swollen tonsils.
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                Clinical examination helps determine whether the presentation
                                is consistent with an acute infection and whether further
                                testing or specific treatment is required.
                            </p>

                        </div>


                        <div className="p-7 bg-slate-50 rounded-2xl border border-slate-100">

                            <span className="text-teal-700 text-sm font-bold uppercase tracking-wider">
                                Case Example 02
                            </span>

                            <h3 className="text-xl font-bold text-slate-800 mt-3 mb-4">
                                Recurrent Tonsillitis
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                A patient experiences repeated episodes of tonsillitis that
                                repeatedly interfere with school, work or daily activities.
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                An ENT specialist can review the frequency and severity of
                                episodes and discuss whether continued medical treatment
                                or tonsillectomy should be considered.
                            </p>

                        </div>


                        <div className="p-7 bg-slate-50 rounded-2xl border border-slate-100">

                            <span className="text-purple-600 text-sm font-bold uppercase tracking-wider">
                                Case Example 03
                            </span>

                            <h3 className="text-xl font-bold text-slate-800 mt-3 mb-4">
                                Enlarged Tonsils & Sleep Problems
                            </h3>

                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                A patient has persistently enlarged tonsils associated with
                                loud snoring and disturbed sleep.
                            </p>

                            <p className="text-slate-600 text-sm leading-relaxed">
                                The airway and sleep-related symptoms may require ENT
                                assessment to determine whether enlarged tonsils are
                                contributing to the problem and whether treatment is needed.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* WHY CHOOSE */}
            <section className="py-20 px-4 md:px-8 bg-slate-50">

                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* VIDEO */}

                        <div className="max-w-4xl mx-auto text-center w-full">

                            <div className="bg-white rounded-3xl overflow-hidden shadow-sm">

                                <div className="p-8">

                                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                                        Expert ENT Care in Delhi
                                    </h2>

                                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">

                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/X5fMt6BNgMc"
                                            title="ENT Care Specialist"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* CONTENT */}

                        <div className="flex flex-col gap-8">

                            <div>

                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                    Why Choose Dr.(Prof.) Dhirendra Singh Kushwah for Tonsillitis Treatment in Delhi?
                                </h2>

                                <p className="text-slate-600 text-lg mt-5 leading-relaxed">
                                    Tonsillitis treatment should be based on the underlying
                                    cause, severity and recurrence of symptoms. Dr. Dhirendra
                                    Singh Kushwah provides ENT evaluation for tonsil and
                                    throat-related conditions and develops treatment plans
                                    according to individual clinical findings.
                                </p>

                            </div>


                            <div className="space-y-6">

                                <div className="flex gap-6">

                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                                        <Award className="text-teal-400 w-6 h-6" />
                                    </div>

                                    <div>

                                        <h4 className="text-lg font-bold text-slate-800 mb-1">
                                            25+ Years of ENT Experience
                                        </h4>

                                        <p className="text-slate-600 leading-relaxed">
                                            Extensive experience in the evaluation and treatment
                                            of ENT conditions involving the throat and tonsils.
                                        </p>

                                    </div>

                                </div>


                                <div className="flex gap-6">

                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                                        <Stethoscope className="text-teal-400 w-6 h-6" />
                                    </div>

                                    <div>

                                        <h4 className="text-lg font-bold text-slate-800 mb-1">
                                            Comprehensive ENT Assessment
                                        </h4>

                                        <p className="text-slate-600 leading-relaxed">
                                            Evaluation of recurrent infections, enlarged tonsils,
                                            swallowing symptoms, tonsil stones and related
                                            throat conditions.
                                        </p>

                                    </div>

                                </div>


                                <div className="flex gap-6">

                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                                        <Syringe className="text-teal-400 w-6 h-6" />
                                    </div>

                                    <div>

                                        <h4 className="text-lg font-bold text-slate-800 mb-1">
                                            Medical & Surgical Treatment Options
                                        </h4>

                                        <p className="text-slate-600 leading-relaxed">
                                            Treatment planning may include medical management
                                            or discussion of tonsillectomy when appropriate.
                                        </p>

                                    </div>

                                </div>


                                <div className="flex gap-6">

                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                                        <Calendar className="text-teal-400 w-6 h-6" />
                                    </div>

                                    <div>

                                        <h4 className="text-lg font-bold text-slate-800 mb-1">
                                            Individualised Treatment Planning
                                        </h4>

                                        <p className="text-slate-600 leading-relaxed">
                                            Treatment recommendations are based on the patient's
                                            symptoms, examination findings and medical history.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* FAQ */}

            <FaqAccordion faqItems={faqItems} />


            {/* FINAL CTA */}

            <section className="py-16 px-4">

                <div className="max-w-5xl mx-auto bg-teal-600 rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">

                    <div className="relative z-10 flex flex-col items-center gap-6">

                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                            <Stethoscope className="text-white w-8 h-8" />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Get Expert Evaluation for Tonsillitis in Delhi
                        </h2>

                        <p className="text-teal-100 text-lg max-w-2xl leading-relaxed">
                            If you are experiencing recurrent tonsillitis, persistent sore
                            throat, enlarged tonsils, painful swallowing, tonsil stones or
                            sleep-related breathing problems, an ENT evaluation can help
                            identify the underlying cause and appropriate treatment.
                        </p>

                        <p className="text-teal-100 text-md">
                            Dr. Dhirendra Singh Kushwah provides ENT consultation for
                            tonsillitis and tonsil-related conditions in New Delhi.
                        </p>

                        <p className="text-teal-100 text-md">
                            Clinic locations: ORL International Clinic, C.R. Park,
                            New Delhi | ENT Clinic, Safdarjung Enclave, New Delhi
                        </p>

                    </div>

                </div>

            </section>

        </div>
    );
}