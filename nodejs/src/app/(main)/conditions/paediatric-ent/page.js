import React from "react";
import { FaqAccordion } from "@/components/ui/custom";
import {
    Activity,
    AlertCircle,
    Award,
    Baby,
    Brain,
    Calendar,
    CheckCircle2,
    Ear,
    HeartPulse,
    MapPin,
    ShieldAlert,
    Stethoscope,
    UserRound,
} from "lucide-react";

export const metadata = {
    title:
        "Paediatric ENT Specialist in Delhi | Child ENT Doctor | Dr. Dhirendra Singh Kushwah",
    description:
        "Paediatric ENT care in Delhi for children with ear infections, hearing loss, enlarged adenoids, tonsils, snoring, mouth breathing, allergies, sinus problems and other ear, nose and throat conditions.",
    alternates: {
        canonical:
            "https://www.drdhirendrasinghkushwah.com/conditions/paediatric-ent",
    },
};

export default function PaediatricENTPage() {
    const specializationData = [
        {
            icon: <Ear className="w-7 h-7" />,
            title: "Children's Ear & Hearing Care",
            description:
                "Evaluation of recurrent ear infections, ear discharge, hearing difficulties, glue ear, tinnitus and other childhood ear problems.",
        },
        {
            icon: <Activity className="w-7 h-7" />,
            title: "Adenoids, Tonsils & Throat",
            description:
                "Assessment and treatment planning for enlarged adenoids, enlarged tonsils, recurrent tonsillitis, swallowing problems and related throat conditions.",
        },
        {
            icon: <HeartPulse className="w-7 h-7" />,
            title: "Snoring & Sleep Breathing",
            description:
                "Evaluation of persistent snoring, mouth breathing, restless sleep and suspected sleep-disordered breathing in children.",
        },
        {
            icon: <Stethoscope className="w-7 h-7" />,
            title: "Paediatric Nose & Sinus Care",
            description:
                "Child-friendly evaluation of nasal blockage, allergic rhinitis, recurrent nasal symptoms, sinus problems and breathing difficulties.",
        },
    ];

    const trustPoints = [
        {
            icon: <Award className="w-6 h-6" />,
            title: "25+ Years of ENT Experience",
            description:
                "Extensive experience in the evaluation and management of ear, nose and throat conditions.",
        },
        {
            icon: <Baby className="w-6 h-6" />,
            title: "Child-Focused ENT Evaluation",
            description:
                "A careful approach that considers the child's age, symptoms, development, hearing, sleep and overall wellbeing.",
        },
        {
            icon: <Ear className="w-6 h-6" />,
            title: "Comprehensive Ear & Hearing Care",
            description:
                "Assessment of childhood ear problems and hearing concerns with appropriate investigations when required.",
        },
        {
            icon: <CheckCircle2 className="w-6 h-6" />,
            title: "Personalised Treatment Planning",
            description:
                "Treatment is planned according to the child's condition, severity, age and clinical findings.",
        },
    ];

    const conditions = [
        {
            title: "Recurrent Ear Infections",
            description:
                "Repeated ear infections may cause pain, fever, irritability or temporary hearing difficulty and should be assessed when they recur.",
            icon: <Ear className="w-6 h-6" />,
        },
        {
            title: "Glue Ear / Middle-Ear Fluid",
            description:
                "Fluid behind the eardrum can temporarily reduce hearing and may affect communication or learning when persistent.",
            icon: <Activity className="w-6 h-6" />,
        },
        {
            title: "Childhood Hearing Loss",
            description:
                "Hearing concerns in children require timely assessment because hearing plays an important role in speech, language and learning.",
            icon: <Ear className="w-6 h-6" />,
        },
        {
            title: "Enlarged Adenoids",
            description:
                "Enlarged adenoids may contribute to nasal blockage, mouth breathing, snoring, recurrent infections and sleep-related breathing problems.",
            icon: <HeartPulse className="w-6 h-6" />,
        },
        {
            title: "Enlarged Tonsils & Tonsillitis",
            description:
                "Repeated throat infections or enlarged tonsils may cause sore throat, swallowing difficulty, snoring and sleep disturbance.",
            icon: <Stethoscope className="w-6 h-6" />,
        },
        {
            title: "Snoring & Mouth Breathing",
            description:
                "Persistent snoring or habitual mouth breathing can be associated with nasal obstruction, enlarged adenoids or tonsils and other conditions.",
            icon: <Activity className="w-6 h-6" />,
        },
        {
            title: "Paediatric Sleep-Disordered Breathing",
            description:
                "Noisy breathing, restless sleep or breathing pauses during sleep may require assessment for sleep-disordered breathing.",
            icon: <HeartPulse className="w-6 h-6" />,
        },
        {
            title: "Allergic Rhinitis",
            description:
                "Nasal allergy may cause sneezing, itching, watery discharge, congestion and persistent mouth breathing.",
            icon: <ShieldAlert className="w-6 h-6" />,
        },
        {
            title: "Chronic Nasal Blockage",
            description:
                "Persistent difficulty breathing through the nose can interfere with sleep, exercise, eating and daily comfort.",
            icon: <Activity className="w-6 h-6" />,
        },
        {
            title: "Paediatric Sinus Problems",
            description:
                "Persistent nasal discharge, congestion, facial discomfort or recurrent symptoms may require evaluation for underlying nasal or sinus disease.",
            icon: <Stethoscope className="w-6 h-6" />,
        },
        {
            title: "Foreign Body in Ear or Nose",
            description:
                "Objects placed in the ear or nose require careful assessment and safe removal, particularly when there is pain, bleeding or discharge.",
            icon: <AlertCircle className="w-6 h-6" />,
        },
        {
            title: "Congenital Ear Conditions",
            description:
                "Some children are born with structural differences involving the outer ear, ear canal or hearing system and may require specialist evaluation.",
            icon: <Ear className="w-6 h-6" />,
        },
    ];

    const symptoms = [
        {
            title: "Not Responding to Sounds",
            description:
                "A child may not consistently respond when called, particularly when the speaker is behind them or when background noise is present.",
        },
        {
            title: "Speech or Language Concerns",
            description:
                "Delayed or unclear speech may sometimes be associated with hearing difficulty and deserves appropriate assessment.",
        },
        {
            title: "Increasing TV or Device Volume",
            description:
                "Frequently turning up television, tablet or phone volume can be a possible sign of reduced hearing.",
        },
        {
            title: "Recurrent Ear Pain",
            description:
                "Repeated earache, irritability or pulling at the ear may indicate an ear problem that needs evaluation.",
        },
        {
            title: "Ear Discharge",
            description:
                "Fluid, pus or persistent discharge from the ear should not be ignored, especially when associated with pain or fever.",
        },
        {
            title: "Persistent Nasal Blockage",
            description:
                "A child who regularly struggles to breathe through the nose may have allergy, enlarged adenoids or another nasal condition.",
        },
        {
            title: "Mouth Breathing",
            description:
                "Habitual mouth breathing, especially during sleep, can be associated with nasal obstruction or enlarged adenoids.",
        },
        {
            title: "Snoring",
            description:
                "Frequent or loud snoring in children may warrant assessment, particularly when sleep is restless or breathing pauses are noticed.",
        },
        {
            title: "Restless Sleep",
            description:
                "Frequent movement, sweating, unusual sleeping positions or disturbed sleep may accompany breathing-related sleep problems.",
        },
        {
            title: "Difficulty Swallowing",
            description:
                "Pain or difficulty swallowing can occur with tonsillar and throat conditions and should be evaluated when persistent or severe.",
        },
        {
            title: "Frequent Sore Throat",
            description:
                "Repeated sore throats or tonsillitis may require assessment to determine the underlying cause and appropriate treatment.",
        },
        {
            title: "Frequent Nosebleeds",
            description:
                "Repeated nosebleeds can have several causes, including dryness, irritation, allergy or local nasal conditions.",
        },
    ];

    const causes = [
        {
            title: "Viral or Bacterial Infections",
            description:
                "Children commonly experience respiratory and ear infections because of exposure to infections and developing immune systems.",
        },
        {
            title: "Enlarged Adenoids or Tonsils",
            description:
                "Enlarged lymphoid tissue can contribute to nasal obstruction, mouth breathing, snoring and recurrent throat or ear problems.",
        },
        {
            title: "Allergies",
            description:
                "Allergic inflammation can cause nasal congestion, sneezing, itching, discharge and persistent breathing difficulties.",
        },
        {
            title: "Eustachian Tube Dysfunction",
            description:
                "Problems with pressure equalisation in the middle ear can contribute to fluid accumulation and temporary hearing changes.",
        },
        {
            title: "Anatomical Factors",
            description:
                "Structural differences involving the nose, throat, ear or airway can sometimes contribute to persistent ENT symptoms.",
        },
        {
            title: "Environmental Irritants",
            description:
                "Smoke, dust, pollution and other irritants may aggravate nasal, throat and respiratory symptoms.",
        },
    ];

    const diagnosticTests = [
        {
            title: "Detailed History",
            description:
                "Parents may be asked about symptoms, infections, hearing, speech, sleep, school performance and previous treatment.",
        },
        {
            title: "ENT Examination",
            description:
                "The ears, nose and throat are examined according to the child's symptoms and age.",
        },
        {
            title: "Hearing Assessment",
            description:
                "Age-appropriate hearing tests may be recommended when hearing loss, recurrent ear disease or speech concerns are present.",
        },
        {
            title: "Tympanometry",
            description:
                "When appropriate, tympanometry can help assess middle-ear pressure and fluid-related problems.",
        },
        {
            title: "Nasal & Adenoid Evaluation",
            description:
                "Persistent nasal obstruction, mouth breathing or snoring may require assessment of the nose and adenoid region.",
        },
        {
            title: "Further Tests When Required",
            description:
                "Imaging, sleep assessment or referral to another specialist may be recommended when clinical findings indicate a need.",
        },
    ];

    const treatmentSteps = [
        {
            number: "01",
            title: "Understand the Child's Symptoms",
            description:
                "A detailed history helps identify patterns involving the ears, hearing, nose, throat, breathing, sleep and development.",
        },
        {
            number: "02",
            title: "Child-Friendly ENT Examination",
            description:
                "The examination is adapted to the child's age and comfort while focusing on the suspected ENT problem.",
        },
        {
            number: "03",
            title: "Confirm the Cause",
            description:
                "Hearing tests, tympanometry or other investigations may be advised when they can improve diagnostic accuracy.",
        },
        {
            number: "04",
            title: "Personalised Treatment & Follow-Up",
            description:
                "Treatment may involve observation, medicines, hearing support, allergy management, procedures or surgery when clinically indicated.",
        },
    ];

    const treatmentOptions = [
        {
            title: "Observation & Follow-Up",
            description:
                "Some childhood ENT problems improve naturally and can be monitored safely with appropriate follow-up.",
            icon: <Calendar className="w-7 h-7" />,
        },
        {
            title: "Medicines When Appropriate",
            description:
                "Depending on the diagnosis, medicines may be used for infections, allergies, inflammation or symptom control.",
            icon: <Stethoscope className="w-7 h-7" />,
        },
        {
            title: "Ear & Hearing Management",
            description:
                "Children with hearing concerns may require hearing assessment, monitoring or further treatment based on the cause.",
            icon: <Ear className="w-7 h-7" />,
        },
        {
            title: "Allergy & Nasal Care",
            description:
                "Appropriate allergy and nasal management may help children with persistent congestion, sneezing and nasal obstruction.",
            icon: <Activity className="w-7 h-7" />,
        },
        {
            title: "Adenoid & Tonsil Treatment",
            description:
                "When enlarged adenoids or tonsils are causing significant problems, medical management or surgery may be considered.",
            icon: <HeartPulse className="w-7 h-7" />,
        },
        {
            title: "Ear Tube / Grommet Consideration",
            description:
                "Selected children with persistent middle-ear fluid or related hearing problems may be evaluated for ventilation tube treatment.",
            icon: <CheckCircle2 className="w-7 h-7" />,
        },
        {
            title: "Foreign Body Removal",
            description:
                "Objects in the ear or nose should be removed safely using an appropriate technique rather than attempting repeated home removal.",
            icon: <AlertCircle className="w-7 h-7" />,
        },
        {
            title: "Surgery in Selected Cases",
            description:
                "Surgical treatment is considered only when the benefits are expected to outweigh the risks and conservative care is insufficient or inappropriate.",
            icon: <ShieldAlert className="w-7 h-7" />,
        },
    ];

    const treatmentTime = [
        {
            condition: "Acute Ear or Throat Infection",
            time: "Often improves over days with appropriate management",
            note: "The exact duration depends on the cause, severity and response to treatment.",
        },
        {
            condition: "Glue Ear / Middle-Ear Fluid",
            time: "May require observation over weeks or months",
            note: "Persistent hearing problems may require further assessment and treatment planning.",
        },
        {
            condition: "Allergic Rhinitis",
            time: "Usually requires ongoing symptom management",
            note: "Treatment duration depends on triggers, severity and response.",
        },
        {
            condition: "Enlarged Adenoids / Tonsils",
            time: "Depends on severity and treatment approach",
            note: "Some children can be managed conservatively; selected cases may require surgery.",
        },
        {
            condition: "Hearing Problems",
            time: "Depends on the underlying cause",
            note: "Timely diagnosis is important because hearing supports speech, language and learning.",
        },
        {
            condition: "Sleep-Disordered Breathing",
            time: "Varies according to the underlying cause",
            note: "Persistent snoring or breathing pauses require appropriate assessment rather than assuming the child will simply outgrow them.",
        },
    ];

    const faqItems = [
        {
            question: "What is a paediatric ENT specialist?",
            answer:
                "A paediatric ENT specialist evaluates and treats ear, nose and throat conditions in children, including ear infections, hearing problems, enlarged adenoids and tonsils, nasal obstruction, allergies, snoring and sleep-related breathing problems.",
        },
        {
            question: "When should my child see an ENT doctor?",
            answer:
                "Consider an ENT evaluation when a child has recurrent ear infections, persistent hearing concerns, speech or language concerns, chronic nasal blockage, habitual mouth breathing, frequent snoring, recurrent tonsillitis, persistent ear discharge or other recurring ENT symptoms.",
        },
        {
            question: "What are signs of hearing loss in a child?",
            answer:
                "Possible signs include not responding consistently to sounds or their name, frequently asking for repetition, increasing television volume, difficulty following conversations, unclear speech or concerns about speech and language development. A hearing assessment can help determine whether hearing is contributing.",
        },
        {
            question: "Can ear infections affect a child's hearing?",
            answer:
                "Yes. Middle-ear fluid or inflammation can temporarily reduce hearing. Recurrent or persistent ear problems should be assessed, particularly when parents notice changes in communication, attention or speech.",
        },
        {
            question: "Can enlarged adenoids cause mouth breathing?",
            answer:
                "Enlarged adenoids can contribute to nasal obstruction and mouth breathing. Other causes are also possible, so persistent mouth breathing should be evaluated rather than assuming that adenoids are always responsible.",
        },
        {
            question: "Is snoring normal in children?",
            answer:
                "Occasional snoring can occur during a cold or nasal congestion. Frequent or loud snoring, particularly when associated with restless sleep, breathing pauses or daytime concerns, deserves medical evaluation.",
        },
        {
            question: "When are tonsils or adenoids removed in children?",
            answer:
                "Surgery may be considered when enlarged tonsils or adenoids cause significant or persistent problems such as sleep-disordered breathing, recurrent infections or other clinically important symptoms. The decision depends on the child's individual assessment.",
        },
        {
            question: "Does every child with an ear infection need antibiotics?",
            answer:
                "No. Treatment depends on the child's age, symptoms, examination findings and whether the condition is likely to be viral, bacterial or related to another cause. Antibiotics should be used when clinically appropriate rather than automatically.",
        },
        {
            question: "Can glue ear affect speech and learning?",
            answer:
                "Persistent middle-ear fluid can reduce hearing. If hearing is significantly affected for a prolonged period, it may interfere with communication and learning. Children with suspected persistent hearing difficulty should be assessed.",
        },
        {
            question: "Does my child need a hearing test?",
            answer:
                "A hearing assessment may be recommended when there are concerns about hearing, speech or language development, recurrent middle-ear problems, poor response to sound or other risk factors. The appropriate test depends on the child's age and ability to participate.",
        },
        {
            question: "When should childhood snoring be considered a concern?",
            answer:
                "Frequent or loud snoring, mouth breathing, restless sleep, unusual sleeping positions, witnessed breathing pauses or daytime behavioural and concentration concerns should prompt an assessment for possible sleep-disordered breathing.",
        },
        {
            question: "Where can I consult a paediatric ENT specialist in Delhi?",
            answer:
                "Dr.(Prof.) Dhirendra Singh Kushwah provides ENT consultation in South Delhi, including clinic locations in C.R. Park and Arjun Nagar, Safdarjung Enclave. Parents can contact the clinic for an appointment and discuss the child's symptoms before the visit.",
        },
    ];

    return (
        <div className="bg-white">
            {/* =========================================================
                HERO SECTION
            ========================================================= */}
            <section className="relative overflow-hidden bg-slate-900 text-white">
                <div className="absolute -top-24 -left-24 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/3 -right-24 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-sm font-semibold mb-6">
                            <Baby className="w-4 h-4" />
                            Child Ear, Nose & Throat Care — New Delhi
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                            Paediatric ENT Specialist in Delhi – Child Ear, Nose &
                            Throat Care
                        </h1>

                        <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
                            Comprehensive ENT care for children with ear infections,
                            hearing problems, enlarged adenoids and tonsils, snoring,
                            mouth breathing, allergies, nasal blockage and other
                            paediatric ENT conditions.
                        </p>
                        <p>
                            <img src="/images/DrDhirendraSinghKushwahWithInternationalPatient.jpeg" alt="Paediatric ENT care for children in Delhi"
                                className="w-full h-[280px] md:h-[360px] object-cover rounded-3xl shadow-2xl"
                            />
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
                            <img src="/images/DrDhirendraSinghKushwahWithPatient.jpeg"  alt="Dr. Dhirendra Singh Kushwah ENT Specialist in Delhi"
                                className="w-48 h-56 object-cover rounded-3xl border border-white/10 shadow-2xl"
                            />

                            <div className="text-center sm:text-left">
                                <h2 className="text-2xl font-bold">
                                    Dr.(Prof.) Dhirendra Singh Kushwah
                                </h2>

                                <p className="mt-2 text-teal-300 font-semibold">
                                    ENT Specialist & Surgeon
                                </p>

                                <p className="mt-4 text-slate-300 leading-relaxed">
                                    Child-focused ENT evaluation with attention to hearing,
                                    breathing, sleep, recurrent infections and age-related
                                    concerns.
                                </p>

                                <div className="mt-6 flex flex-wrap justify-center sm:justify-start gap-3">
                                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
                                        25+ Years Experience
                                    </span>
                                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
                                        Paediatric ENT
                                    </span>
                                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
                                        Ear & Hearing Care
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                INTRODUCTION
            ========================================================= */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Understanding Children ENT Health
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            What Is Paediatric ENT?
                        </h2>
                    </div>

                    <div className="mt-8 text-slate-600 text-lg leading-8 space-y-5">
                        <p>
                            Paediatric ENT focuses on the diagnosis and treatment of ear,
                            nose and throat conditions affecting infants, toddlers,
                            school-age children and teenagers. Children's ENT problems
                            can sometimes present differently from those in adults and
                            may affect hearing, speech, sleep, breathing, feeding,
                            learning and everyday comfort.
                        </p>

                        <p>
                            Common concerns include recurrent ear infections, hearing
                            difficulty, fluid behind the eardrum, enlarged adenoids,
                            enlarged tonsils, snoring, mouth breathing, allergies,
                            persistent nasal blockage and recurrent throat infections.
                        </p>

                        <p>
                            A timely ENT assessment can help identify the underlying
                            cause and determine whether the child needs observation,
                            medical treatment, hearing assessment, further investigation
                            or a procedure.
                        </p>
                    </div>
                </div>
            </section>

            {/* =========================================================
                SPECIALISED CARE
            ========================================================= */}
            <section className="py-16 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Comprehensive Child ENT Care
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            Specialised Paediatric ENT Services
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg">
                            Evaluation and treatment planning for common childhood ear,
                            nose, throat, hearing, breathing and sleep-related concerns.
                        </p>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specializationData.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                                    {item.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-7">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                COMMON CONDITIONS
            ========================================================= */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Common Childhood ENT Problems
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            Paediatric ENT Conditions Treated & Evaluated
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg leading-8">
                            Children can experience a wide range of ear, nose and throat
                            conditions. Persistent, recurrent or functionally significant
                            symptoms deserve appropriate evaluation.
                        </p>
                    </div>

                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {conditions.map((condition, index) => (
                            <div
                                key={index}
                                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                    {condition.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {condition.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-7">
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
            <section className="py-16 md:py-20 px-4 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-300 font-bold uppercase tracking-wider text-sm">
                            Signs Parents Should Notice
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                            Common Paediatric ENT Symptoms
                        </h2>

                        <p className="mt-4 text-slate-300 text-lg leading-8">
                            Young children may not always be able to describe ear,
                            hearing, nose or throat symptoms clearly. Parents and
                            caregivers often notice behavioural or sleep-related signs
                            first.
                        </p>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {symptoms.map((symptom, index) => (
                            <div
                                key={index}
                                className="rounded-2xl border border-white/10 bg-white/5 p-6"
                            >
                                <div className="flex gap-3 items-start">
                                    <CheckCircle2 className="w-5 h-5 text-teal-300 mt-1 shrink-0" />

                                    <div>
                                        <h3 className="font-bold text-lg">
                                            {symptom.title}
                                        </h3>

                                        <p className="mt-2 text-slate-300 leading-7">
                                            {symptom.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                CAUSES
            ========================================================= */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                                Why Children Develop ENT Problems
                            </span>

                            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                                Common Causes & Contributing Factors
                            </h2>

                            <p className="mt-5 text-slate-600 text-lg leading-8">
                                The cause of a child's ENT symptoms can vary considerably.
                                An examination helps distinguish a temporary problem from
                                a condition that requires ongoing management.
                            </p>

                            <div className="mt-8 rounded-3xl bg-teal-50 border border-teal-100 p-7">
                                <div className="flex gap-4">
                                    <Brain className="w-7 h-7 text-teal-600 shrink-0" />

                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            Why early evaluation matters
                                        </h3>

                                        <p className="mt-2 text-slate-600 leading-7">
                                            Hearing, sleep and comfortable nasal breathing
                                            are important during childhood. Persistent ENT
                                            symptoms should therefore be assessed when they
                                            interfere with communication, sleep, school,
                                            feeding or everyday activities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            {causes.map((cause, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-slate-200 p-6"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>

                                    <h3 className="mt-4 font-bold text-lg text-slate-900">
                                        {cause.title}
                                    </h3>

                                    <p className="mt-2 text-slate-600 leading-7">
                                        {cause.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                DIAGNOSIS
            ========================================================= */}
            <section className="py-16 md:py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Diagnosis & Assessment
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            How Are Paediatric ENT Problems Diagnosed?
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg leading-8">
                            Diagnosis is based on the child's symptoms, age, medical
                            history and clinical examination. Additional tests are
                            recommended only when they are clinically useful.
                        </p>
                    </div>

                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {diagnosticTests.map((test, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-teal-600">
                                        0{index + 1}
                                    </span>

                                    <Stethoscope className="w-6 h-6 text-slate-400" />
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {test.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-7">
                                    {test.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                TREATMENT PROCESS
            ========================================================= */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Child-Centred Treatment Approach
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            Paediatric ENT Treatment Process
                        </h2>
                    </div>

                    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {treatmentSteps.map((step, index) => (
                            <div
                                key={index}
                                className="relative rounded-3xl bg-slate-900 text-white p-7"
                            >
                                <div className="text-teal-300 font-black text-3xl">
                                    {step.number}
                                </div>

                                <h3 className="mt-5 text-xl font-bold">
                                    {step.title}
                                </h3>

                                <p className="mt-3 text-slate-300 leading-7">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                TREATMENT OPTIONS
            ========================================================= */}
            <section className="py-16 md:py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Treatment Options
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            How Are Childhood ENT Conditions Treated?
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg leading-8">
                            Treatment depends on the underlying diagnosis. Not every
                            child needs antibiotics, long-term medicines or surgery.
                            The goal is to choose an appropriate treatment while avoiding
                            unnecessary intervention.
                        </p>
                    </div>

                    <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {treatmentOptions.map((option, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center">
                                    {option.icon}
                                </div>

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {option.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-7">
                                    {option.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                TREATMENT TIME
            ========================================================= */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Recovery & Follow-Up
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            How Long Does Paediatric ENT Treatment Take?
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg leading-8">
                            Treatment time varies significantly between children and
                            depends on the condition, severity, age, underlying cause
                            and response to treatment.
                        </p>
                    </div>

                    <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200">
                        <table className="w-full min-w-[760px] text-left">
                            <thead className="bg-slate-900 text-white">
                                <tr>
                                    <th className="px-6 py-5 font-semibold">
                                        Condition
                                    </th>
                                    <th className="px-6 py-5 font-semibold">
                                        Typical Course
                                    </th>
                                    <th className="px-6 py-5 font-semibold">
                                        Important Note
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {treatmentTime.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={
                                            index % 2 === 0
                                                ? "bg-white"
                                                : "bg-slate-50"
                                        }
                                    >
                                        <td className="px-6 py-5 font-bold text-slate-900">
                                            {item.condition}
                                        </td>

                                        <td className="px-6 py-5 text-slate-700">
                                            {item.time}
                                        </td>

                                        <td className="px-6 py-5 text-slate-600">
                                            {item.note}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-5 text-sm text-slate-500">
                        These are general treatment-course descriptions, not guarantees.
                        Your child's treatment timeline should be determined after
                        appropriate clinical assessment.
                    </p>
                </div>
            </section>

            {/* =========================================================
                BENEFITS & LIMITATIONS
            ========================================================= */}
            <section className="py-16 md:py-20 px-4 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-300 font-bold uppercase tracking-wider text-sm">
                            Making Informed Treatment Decisions
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                            Benefits & Limitations of Paediatric ENT Treatment
                        </h2>
                    </div>

                    <div className="mt-10 grid lg:grid-cols-2 gap-6">
                        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
                            <h3 className="text-2xl font-bold text-teal-300">
                                Potential Benefits
                            </h3>

                            <ul className="mt-6 space-y-4">
                                {[
                                    "Identify hearing problems at an appropriate stage",
                                    "Address persistent ear infections and middle-ear problems",
                                    "Improve nasal breathing when obstruction is treatable",
                                    "Evaluate snoring and sleep-related breathing concerns",
                                    "Manage recurrent throat and tonsil problems",
                                    "Reduce symptoms affecting sleep, communication or daily activities",
                                    "Provide appropriate follow-up instead of unnecessary treatment",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-slate-300"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
                            <h3 className="text-2xl font-bold text-amber-300">
                                Important Limitations
                            </h3>

                            <ul className="mt-6 space-y-4">
                                {[
                                    "Not every ENT problem requires immediate treatment",
                                    "Some childhood conditions naturally improve with observation",
                                    "Antibiotics are not appropriate for every infection",
                                    "Surgery is recommended only when clinically justified",
                                    "Some hearing problems require ongoing monitoring",
                                    "Treatment outcomes vary according to the underlying cause",
                                    "Follow-up may be necessary even after symptoms improve",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-slate-300"
                                    >
                                        <AlertCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                WHEN TO SEE ENT
            ========================================================= */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                                Don't Ignore Persistent Symptoms
                            </span>

                            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                                When Should Your Child See an ENT Specialist?
                            </h2>

                            <p className="mt-5 text-slate-600 text-lg leading-8">
                                A paediatric ENT consultation can be useful when symptoms
                                are recurrent, persistent, affecting hearing or sleep,
                                or interfering with the child's normal activities.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Recurrent ear infections",
                                "Persistent hearing concerns",
                                "Speech or language concerns",
                                "Chronic nasal blockage",
                                "Habitual mouth breathing",
                                "Frequent or loud snoring",
                                "Breathing pauses during sleep",
                                "Repeated tonsillitis",
                                "Persistent ear discharge",
                                "Recurrent nosebleeds",
                                "Difficulty swallowing",
                                "Symptoms affecting school or sleep",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 rounded-2xl bg-teal-50 p-4 text-slate-800"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                UNTREATED
            ========================================================= */}
            <section className="py-16 md:py-20 px-4 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Why Timely Assessment Matters
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            What Can Happen If Paediatric ENT Problems Are Ignored?
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg leading-8">
                            The consequences depend on the condition. Not every untreated
                            symptom causes complications, but persistent problems should
                            not be dismissed when they affect hearing, breathing, sleep
                            or development.
                        </p>
                    </div>

                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Persistent Hearing Difficulty",
                                text: "Ongoing middle-ear problems or other hearing conditions may result in continued difficulty hearing sounds or conversations.",
                            },
                            {
                                title: "Communication Challenges",
                                text: "When hearing is affected during important developmental periods, communication and speech-language development may require closer attention.",
                            },
                            {
                                title: "Poor Sleep",
                                text: "Persistent snoring or sleep-disordered breathing can interfere with restful sleep and should be assessed.",
                            },
                            {
                                title: "Daytime Tiredness",
                                text: "Children with disturbed sleep may show daytime tiredness, irritability or concentration difficulties.",
                            },
                            {
                                title: "Recurrent Infections",
                                text: "Repeated ear or throat infections may continue to affect a child's comfort and daily activities if the underlying cause is not addressed.",
                            },
                            {
                                title: "Reduced Quality of Life",
                                text: "Persistent pain, nasal obstruction, hearing problems or sleep disruption can affect school, play and family life.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm"
                            >
                                <ShieldAlert className="w-7 h-7 text-teal-600" />

                                <h3 className="mt-5 text-xl font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-slate-600 leading-7">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                EMERGENCY
            ========================================================= */}
            <section className="py-16 px-4">
                <div className="max-w-5xl mx-auto rounded-[40px] bg-red-50 border border-red-100 p-8 md:p-12">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                            <AlertCircle className="w-8 h-8" />
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                                When Is a Child's ENT Problem an Emergency?
                            </h2>

                            <p className="mt-4 text-slate-600 leading-7">
                                Some symptoms require urgent medical attention rather than
                                waiting for a routine ENT appointment.
                            </p>

                            <div className="mt-6 grid sm:grid-cols-2 gap-3">
                                {[
                                    "Difficulty breathing",
                                    "Severe choking or suspected airway obstruction",
                                    "Sudden or significant hearing loss",
                                    "Severe or uncontrolled bleeding",
                                    "Foreign body causing breathing difficulty",
                                    "Rapidly increasing swelling of the face, neck or throat",
                                    "Severe difficulty swallowing with breathing concerns",
                                    "Child becoming unusually drowsy, unresponsive or seriously unwell",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-3 items-start bg-white rounded-xl p-4"
                                    >
                                        <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-slate-700 font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-6 font-semibold text-red-700">
                                If a child is having difficulty breathing, severe bleeding,
                                choking or another serious emergency, seek immediate
                                emergency medical care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                PARENT DO'S & DON'TS
            ========================================================= */}
            <section className="py-16 md:py-20 px-4 bg-slate-900 text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-300 font-bold uppercase tracking-wider text-sm">
                            Practical Guidance for Parents
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
                            Paediatric ENT Do's & Don'ts
                        </h2>
                    </div>

                    <div className="mt-10 grid md:grid-cols-2 gap-6">
                        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
                            <h3 className="text-2xl font-bold text-teal-300">
                                Do
                            </h3>

                            <ul className="mt-6 space-y-4">
                                {[
                                    "Pay attention to changes in hearing or speech",
                                    "Keep track of recurrent ear or throat infections",
                                    "Mention snoring and mouth breathing during consultation",
                                    "Follow prescribed medicines and follow-up advice",
                                    "Arrange hearing assessment when recommended",
                                    "Seek urgent care for breathing difficulty or severe symptoms",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-slate-300"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
                            <h3 className="text-2xl font-bold text-amber-300">
                                Don't
                            </h3>

                            <ul className="mt-6 space-y-4">
                                {[
                                    "Do not ignore persistent hearing concerns",
                                    "Do not repeatedly self-medicate without appropriate advice",
                                    "Do not insert objects into the child's ear",
                                    "Do not attempt unsafe removal of deep foreign bodies",
                                    "Do not assume persistent snoring is always harmless",
                                    "Do not delay urgent care when breathing is affected",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex gap-3 text-slate-300"
                                    >
                                        <AlertCircle className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                LOCAL SEO
            ========================================================= */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Paediatric ENT Care in South Delhi
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            Paediatric ENT Specialist Near You in Delhi
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg leading-8">
                            Dr.(Prof.) Dhirendra Singh Kushwah provides ENT consultation
                            for children from South Delhi and surrounding areas, with
                            clinic locations convenient for families in and around
                            Jasola Vihar, C.R. Park and Safdarjung Enclave.
                        </p>
                    </div>

                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-7">
                            <MapPin className="w-7 h-7 text-teal-600" />

                            <h3 className="mt-5 text-xl font-bold text-slate-900">
                                Jasola Vihar & Nearby Areas
                            </h3>

                            <p className="mt-3 text-slate-600 leading-7">
                                Paediatric ENT consultation for families from Jasola
                                Vihar, Sarita Vihar, Okhla, Jamia Nagar, Badarpur,
                                Kalindi Kunj, Govindpuri, Kalkaji and nearby South Delhi
                                areas.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-7">
                            <MapPin className="w-7 h-7 text-teal-600" />

                            <h3 className="mt-5 text-xl font-bold text-slate-900">
                                C.R. Park & South Delhi
                            </h3>

                            <p className="mt-3 text-slate-600 leading-7">
                                Child ENT care for families from C.R. Park, Greater
                                Kailash, Kalkaji, Nehru Place, Alaknanda, Govindpuri,
                                East of Kailash and Lajpat Nagar.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-7">
                            <MapPin className="w-7 h-7 text-teal-600" />

                            <h3 className="mt-5 text-xl font-bold text-slate-900">
                                Safdarjung Enclave
                            </h3>

                            <p className="mt-3 text-slate-600 leading-7">
                                Paediatric ENT consultation for children from Safdarjung
                                Enclave, Arjun Nagar, Green Park, Hauz Khas, Munirka,
                                R.K. Puram, Vasant Kunj and nearby areas.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-slate-50 border border-slate-200 p-7">
                            <MapPin className="w-7 h-7 text-teal-600" />

                            <h3 className="mt-5 text-xl font-bold text-slate-900">
                                Delhi NCR
                            </h3>

                            <p className="mt-3 text-slate-600 leading-7">
                                Families may also travel from Faridabad, Noida, Greater
                                Noida, Ghaziabad, Palwal and other parts of Delhi NCR for
                                specialist ENT evaluation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                WHY CHOOSE
            ========================================================= */}
            <section className="py-16 md:py-20 px-4 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                                Experienced ENT Care
                            </span>

                            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                                Why Choose Dr. Dhirendra Singh Kushwah for Paediatric
                                ENT Care?
                            </h2>

                            <p className="mt-5 text-slate-600 text-lg leading-8">
                                Children's ENT symptoms can involve several interconnected
                                areas including hearing, breathing, sleep, speech and
                                recurrent infections. A comprehensive ENT evaluation can
                                help identify the likely cause and guide appropriate
                                treatment.
                            </p>

                            <div className="mt-8 space-y-5">
                                {trustPoints.map((point, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 items-start"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                                            {point.icon}
                                        </div>

                                        <div>
                                            <h3 className="font-bold text-lg text-slate-900">
                                                {point.title}
                                            </h3>

                                            <p className="mt-1 text-slate-600 leading-7">
                                                {point.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl overflow-hidden shadow-xl bg-black">
                            <div className="aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/f8Si15IIe54"
                                    title="Dr. Dhirendra Singh Kushwah ENT Specialist"
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                FAQ
            ========================================================= */}
            <section className="py-16 md:py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-teal-600 font-bold uppercase tracking-wider text-sm">
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
                            Paediatric ENT FAQs
                        </h2>

                        <p className="mt-4 text-slate-600 text-lg">
                            Common questions parents ask about children's ear, nose,
                            throat, hearing, breathing and sleep-related problems.
                        </p>
                    </div>

                    <FaqAccordion faqItems={faqItems} />
                </div>
            </section>

            {/* =========================================================
                FINAL CTA
            ========================================================= */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto bg-teal-600 rounded-[40px] p-8 md:p-14 text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 text-white">
                            <Baby className="w-8 h-8" />
                        </div>

                        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
                            Book a Paediatric ENT Consultation in Delhi
                        </h2>

                        <p className="mt-5 text-teal-50 text-lg max-w-3xl mx-auto leading-8">
                            If your child has recurrent ear infections, hearing concerns,
                            persistent nasal blockage, mouth breathing, snoring,
                            enlarged tonsils or adenoids, or other ENT symptoms, arrange
                            an appropriate specialist evaluation.
                        </p>

                        <div className="mt-8 grid md:grid-cols-2 gap-5 text-left max-w-4xl mx-auto">
                            <div className="rounded-2xl bg-white/10 border border-white/10 p-6">
                                <h3 className="font-bold text-white text-lg">
                                    C.R. Park Clinic
                                </h3>

                                <p className="mt-2 text-teal-50 leading-7">
                                    J-1981, Near Market No. 1, Below ICICI Bank,
                                    Bipin Chandra Pal Marg, CR Park,
                                    New Delhi – 110019
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/10 border border-white/10 p-6">
                                <h3 className="font-bold text-white text-lg">
                                    Arjun Nagar Clinic – Safdarjung Enclave
                                </h3>

                                <p className="mt-2 text-teal-50 leading-7">
                                    19-C, Arjun Nagar, Safdarjung Enclave,
                                    New Delhi – 110029
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                            <a
                                href="tel:+919311449825"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-teal-700 font-bold hover:bg-slate-100 transition-colors"
                            >
                                <span>Call: +91-9311449825</span>
                            </a>

                            <a
                                href="https://wa.me/919311449825"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
                            >
                                WhatsApp Consultation
                            </a>
                        </div>

                        <div className="mt-6 text-teal-50">
                            <a
                                href="mailto:drdhirendrasinghent@gmail.com"
                                className="hover:text-white transition-colors"
                            >
                                drdhirendrasinghent@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}