import React from 'react';
import ClinicalBreadcrumbs from "@/components/ui/ClinicalBreadcrumbs";
import MedicalReviewBadge from "@/components/ui/MedicalReviewBadge";
import { DoctorImage, FaqAccordion } from "@/components/ui/custom";
import { Wind, ShieldAlert, Award, Calendar, Activity } from "lucide-react";

// export const metadata = {
//     title: "Nose & Sinus Treatment in New Delhi | Expert Sinus Specialist & ENT Surgeon",
//     description: "Get advanced nose & sinus treatment in New Delhi for sinusitis, DNS, nasal blockage, allergies, polyps, snoring, and endoscopic sinus surgery with expert ENT care by Dr. Dhirendra Singh Kushwah.",
//     alternates: {
//         canonical: "drdhirendrasinghkushwah.in/conditions/nose-sinus-treatment",
//     },
// };
export const metadata = {
    title:
        "Nose & Sinus Specialist in Delhi | Dr. Dhirendra Singh Kushwah",

    description:
        "Expert nose and sinus care in Delhi for sinusitis, nasal blockage, nasal polyps, deviated septum, allergies and other rhinology conditions, with advanced ENT evaluation and treatment.",

    alternates: {
        canonical:
            "https://www.drdhirendrasinghkushwah.in/conditions/nose-sinus-treatment",
    },
};

export default async function NoseSinusPage() {
    const specializationData = [
        { institution: "Functional Endoscopic Sinus Surgery (FESS)", focus: "Minimally invasive treatment for chronic sinusitis" },
        { institution: "Balloon Sinuplasty", focus: "Dilation of sinus openings without bone removal" },
        { institution: "Septoplasty", focus: "Correction of deviated nasal septum" },
        { institution: "Allergy Management", focus: "Comprehensive diagnostic and therapeutic approaches" },
    ];

    const trustPoints = [
        {
            title: "15+ Years in Rhinology",
            desc: "Specialist training from Graz University, Austria in advanced sinus surgery.",
            icon: <Award className="text-teal-400 w-6 h-6" />
        },
        {
            title: "1000+ Sinus Surgeries",
            desc: "Expert in treating complex chronic sinusitis and nasal polyps.",
            icon: <Activity className="text-teal-400 w-6 h-6" />
        },
        {
            title: "Advanced Technology",
            desc: "High-definition endoscopy and navigation systems for precision outcomes.",
            icon: <ShieldAlert className="text-teal-400 w-6 h-6" />
        }
    ];

    const faqItems = [
        { q: "What is the difference between a cold and sinusitis?", a: "A cold typically resolves within 7 to 10 days. Sinusitis is inflammation of the sinus lining - usually following a cold - that persists beyond 10 days, or keeps recurring. If nasal symptoms with facial pain and discoloured discharge persist beyond two weeks, sinusitis is more likely than a prolonged cold and should be assessed by a specialist." },
        { q: "Is sinus surgery painful?", a: "Modern FESS performed under general anaesthesia involves no external incisions and is not painful during the procedure. Post-operatively, patients experience nasal congestion, mild discomfort, and some crusting for one to two weeks. The majority of patients return to desk work within a week. Dr. kushwah uses a no-nasal-packing technique wherever possible, which considerably reduces post-operative discomfort." },
        { q: "Can a deviated septum be fixed without surgery?", a: "A structurally deviated septum cannot be corrected by medications or nasal sprays - these can reduce the inflammation around it but not straighten the cartilage or bone. Septoplasty is the only way to permanently correct a deviated septum. It is a straightforward, low-risk procedure with a very high patient satisfaction rate." },
        { q: "How many times do nasal polyps come back after surgery?", a: "Recurrence rates depend on the underlying cause. In patients with allergy-driven polyp disease - particularly those with asthma and aspirin sensitivity - recurrence without long-term maintenance treatment (nasal steroid sprays, saline rinses) can occur within one to five years. In well-managed patients who adhere to post-operative treatment, recurrence can be significantly delayed or prevented. Newer biologic medications (injections targeting the allergic pathway) can dramatically reduce recurrence in difficult cases." },
        { q: "What causes loss of smell, and can it be treated?", a: "Loss of smell most commonly results from nasal polyps, chronic sinusitis, post-viral damage (including post-COVID), or head trauma. When caused by nasal obstruction or polyps, surgical treatment often restores smell significantly. Post-viral anosmia can improve with olfactory training - a structured daily smell rehabilitation programme. Early treatment gives better recovery prospects." },
        { q: "Can children have FESS?", a: "Yes, FESS can be performed in children, though it is reserved for cases of chronic sinusitis or nasal polyps that have not responded to medical treatment. Adenoidectomy is often performed alongside or before FESS in children, as enlarged adenoids are frequently a contributing cause of paediatric sinusitis." },
        { q: "What is the best treatment for allergic rhinitis in Delhi?", a: "Given Delhi's high dust and pollution burden, allergen avoidance alone is rarely sufficient. A combination of daily intranasal corticosteroid spray, antihistamines during peak seasons, and allergen-specific immunotherapy (desensitisation treatment) is the most effective long-term approach. Allergy skin prick testing is available at the clinic to identify specific triggers." },
        { q: "How do I book a nose and sinus consultation in Delhi?", a: "Call or WhatsApp Dr. kushwah's clinic directly at +91-9311449825, or email drdhirendrasinghent@gmail.com. Appointments are available at both clinic locations - CR Park and Arjun Nagar, Safdarjung Enclave." }
    ];

    return (
        <div className="bg-white">
            {/* SEO Title */}
            {/* Nose & Sinus Treatment in New Delhi | Expert Sinus Specialist & ENT Surgeon */}

            {/* Meta Description */}
            {/* Get advanced nose & sinus treatment in New Delhi for sinusitis, DNS, nasal blockage, allergies, polyps, snoring, and endoscopic sinus surgery with expert ENT care by Dr. Dhirendra Singh Kushwah. */}

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
                Rhinology & Sinus Health — New Delhi
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Nose & Sinus Treatment(Rhinology) in Delhi | Dr. Dhirendra Singh Kushwah
            </h1>
        </div>
<div className="text-center mb-10 md:mb-14">
    <img src="/images/Ear-Hearing-Banner.png"  alt="Nose & Sinus Treatment(Rhinology) by Dr. Dhirendra Singh Kushwah in New Delhi"  className="w-full h-full object-contain" />
</div>
        {/* 50% CONTENT + 50% IMAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

            {/* LEFT — CONTENT 50% */}
            <div className="flex flex-col justify-center">
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Nasal blockage, persistent sinus headaches, difficulty breathing through the nose, or a constant drip at the back of the throat - these are not conditions you should learn to live with. They are treatable, and in most cases, highly effectively so.

                </p>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-5">
                    Dr. Dhirendra Singh kushwah is a senior ENT and rhinology specialist in New Delhi with over 25 years of clinical and surgical experience. He diagnoses and treats the full spectrum of nose and sinus conditions - from chronic sinusitis and nasal polyps to deviated septum surgery and complex endoscopic skull base procedures - at his clinics in CR Park and Arjun Nagar (Safdarjung Enclave), New Delhi.

                </p>
				<p className="text-gray-300 text-base md:text-lg leading-relaxed mt-5">
                    If you are searching for a nose and sinus specialist in Delhi, CR Park, South Delhi, or anywhere in the NCR, this page will help you understand your condition, your treatment options, and why thousands of patients across India have trusted Dr. kushwah with their nasal and sinus health.

                </p>
            </div>

            {/* RIGHT — IMAGE 50% */}
            <div className="w-full">
                <div className="w-full h-full min-h-[300px] lg:min-h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5">
                    <img src="/images/DrDhirendraSinghKushawh-ENT-Surgeon.webp"  alt="Ear and hearing care by Dr. Dhirendra Singh Kushwah in New Delhi"  className="w-full h-full object-contain" />
                </div>
            </div>

        </div>
		<div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                                <ShieldAlert size={16} className="text-teal-400" /> 25+ Years Experience
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white text-sm">
                                <Wind size={16} className="text-teal-400" /> 1000+ Sinus Surgeries
                            </div>
                        </div>
    </div>
</section>

            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
                <ClinicalBreadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "ENT Conditions", href: "/conditions" },
                        { label: "Nose & Sinus Conditions", href: "/conditions/nose-sinus" },
                    ]}
                />
                <MedicalReviewBadge procedureName="Rhinology & Sinus Clinical Evaluation" />
            </div>

            {/* WHAT IS RHINOLOGY SECTION */}
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-bold text-slate-800">What Is Rhinology? Understanding Nose and Sinus Care</h2>
                            <div className="w-16 h-1 bg-teal-600 rounded" />
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Rhinology is the subspecialty of ENT medicine that focuses on the anatomy, physiology, and diseases of the nose and paranasal sinuses -  the air-filled cavities surrounding the nasal passage within the skull. A rhinologist is trained to manage everything from allergic rhinitis and nasal polyps to advanced endoscopic sinus surgery and skull base tumour removal.
                                <br /><br />
                                The nose does far more than allow you to smell. It filters, warms, and humidifies the air you breathe. When it is blocked, infected, or structurally abnormal, the consequences ripple outward -  affecting sleep, energy, concentration, hearing, and overall quality of life.
                            </p>
                            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-xl">
                                <p className="text-teal-900 font-medium italic">
                                    "Chronic sinusitis affects quality of life significantly. With modern endoscopic techniques, we can achieve lasting relief without extensive surgery."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-4"><Wind /></div>
                                <h3 className="font-bold text-slate-800 mb-2">Chronic Sinusitis</h3>
                                <p className="text-sm text-slate-500">Persistent inflammation requiring specialized evaluation and targeted treatment.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                                <div className="w-10 h-10 bg-blue-100 text-teal-700 rounded-lg flex items-center justify-center mb-4"><Wind /></div>
                                <h3 className="font-bold text-slate-800 mb-2">Nasal Allergies</h3>
                                <p className="text-sm text-slate-500">Comprehensive allergy management with medical and surgical options.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* NOSE & SINUS CONDITIONS TREATED SECTION */}
            <section className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
            <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
                Comprehensive Rhinology & Sinus Care
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                Nose & Sinus Conditions Treated by an ENT Specialist in Delhi
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                Evaluation and treatment for nasal blockage, sinus problems,
                allergies, nasal polyps, smell disorders, nosebleeds and other
                conditions affecting the nose and paranasal sinuses in children
                and adults.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Chronic Sinusitis */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Chronic Sinusitis (Chronic Rhinosinusitis)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Chronic sinusitis is persistent inflammation of the nose and
                    sinuses, generally lasting 12 weeks or longer. Common symptoms
                    include nasal blockage, thick nasal discharge, facial pressure,
                    reduced sense of smell, headache and post-nasal drip. Causes
                    may include nasal polyps, allergies, a deviated septum and
                    ongoing inflammation. Assessment may involve nasal endoscopy
                    and, when appropriate, CT imaging. Treatment can include
                    medicines, saline irrigation, nasal sprays and surgery such
                    as Functional Endoscopic Sinus Surgery (FESS) when indicated.
                </p>
            </div>

            {/* Nasal Polyps */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Nasal Polyps
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Nasal polyps are soft, non-cancerous growths associated with
                    chronic inflammation of the nasal and sinus lining. They may
                    cause persistent nasal obstruction, reduced smell, mouth
                    breathing, post-nasal drip and recurrent sinus symptoms.
                    Treatment depends on the size and severity of the polyps and
                    may include saline irrigation, intranasal corticosteroids and
                    other medical therapy. Selected patients with persistent or
                    extensive disease may require endoscopic sinus surgery, while
                    advanced recurrent disease may be considered for biologic
                    treatment where appropriate.
                </p>
            </div>

            {/* Deviated Septum */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Deviated Nasal Septum (DNS)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    A deviated nasal septum occurs when the cartilage and bone
                    dividing the nasal passages are displaced from the midline.
                    A significant deviation may contribute to one-sided or
                    bilateral nasal obstruction, mouth breathing, disturbed sleep,
                    recurrent nasal symptoms and difficulty breathing during
                    exercise. Diagnosis is based on clinical examination and nasal
                    assessment. When symptoms are caused by structural obstruction
                    and do not improve adequately with medical treatment,
                    septoplasty may be considered to improve nasal airflow.
                </p>
            </div>

            {/* Allergic Rhinitis */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Allergic Rhinitis (Nasal Allergy)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Allergic rhinitis develops when the immune system reacts to
                    airborne allergens such as dust mites, pollen, mould or pet
                    dander. Typical symptoms include repeated sneezing, nasal
                    itching, watery discharge, congestion and itchy or watery eyes.
                    Allergy assessment may help identify relevant triggers.
                    Treatment can include allergen avoidance, antihistamines,
                    intranasal corticosteroids and, in selected patients,
                    allergen immunotherapy.
                </p>
            </div>

            {/* Turbinate Hypertrophy */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Enlarged Turbinates (Turbinate Hypertrophy)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Turbinates are structures inside the nose that help warm,
                    humidify and filter inhaled air. Persistent enlargement,
                    often associated with allergies or chronic nasal inflammation,
                    can contribute to nasal blockage and difficulty breathing.
                    Treatment depends on the underlying cause and may include
                    allergy management, nasal medication or turbinate reduction
                    procedures in appropriately selected patients.
                </p>
            </div>

            {/* Sinus Headache */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Sinusitis, Facial Pain & Sinus Headaches
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Facial pressure or headache may occur with sinus inflammation,
                    particularly when accompanied by nasal blockage, discharge or
                    reduced smell. However, many headaches described as "sinus
                    headaches" are actually related to migraine or other headache
                    disorders. A detailed history and ENT examination, with nasal
                    endoscopy or imaging when indicated, can help identify whether
                    the symptoms are related to sinus disease or another condition.
                </p>
            </div>

            {/* Loss of Smell */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Loss of Smell (Anosmia & Hyposmia)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Anosmia means complete loss of smell, while hyposmia refers to
                    reduced ability to smell. Causes may include nasal polyps,
                    chronic rhinosinusitis, allergic inflammation, viral
                    infections, head injury and certain neurological conditions.
                    Treatment depends on the underlying cause and may include
                    management of nasal inflammation, treatment of sinus disease
                    and olfactory training when appropriate.
                </p>
            </div>

            {/* Post Nasal Drip */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Post-Nasal Drip
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Post-nasal drip describes the sensation of mucus draining
                    from the nose or sinuses towards the throat. It may cause
                    frequent throat clearing, cough, throat irritation or a
                    sensation of mucus in the throat. Allergic rhinitis,
                    non-allergic rhinitis and chronic sinus conditions can
                    contribute to these symptoms. Treatment focuses on identifying
                    and managing the underlying nasal or sinus problem.
                </p>
            </div>

            {/* Nosebleeds */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Nosebleeds (Epistaxis)
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Nosebleeds are common and may occur because of nasal dryness,
                    irritation, trauma, nose picking, allergies or other nasal
                    conditions. Most bleeding originates from blood vessels near
                    the front of the nasal septum. Recurrent, prolonged or heavy
                    bleeding requires ENT evaluation to identify the source and
                    determine appropriate treatment, which may include local
                    measures or nasal cauterisation.
                </p>
            </div>

            {/* Nasal Trauma */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Nasal Fracture & Nasal Trauma
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Nasal injuries can result from falls, sports injuries, road
                    accidents or other trauma. Pain, swelling, bruising, nasal
                    deformity and difficulty breathing may occur. Early ENT
                    assessment is important to evaluate the nasal bones and
                    septum and to identify complications such as a septal
                    haematoma. Treatment depends on the type and severity of
                    injury and may range from observation to fracture reduction
                    or corrective surgery.
                </p>
            </div>

            {/* Paediatric Sinusitis */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Sinusitis in Children
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Children can develop prolonged or recurrent nasal and sinus
                    symptoms, including persistent nasal discharge, congestion,
                    cough, mouth breathing and disturbed sleep. Enlarged adenoids,
                    allergies and recurrent infections may contribute to symptoms.
                    Paediatric assessment helps determine whether medical treatment,
                    allergy management, adenoid evaluation or another approach is
                    appropriate.
                </p>
            </div>

            {/* Recurrent Sinus Infections */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Recurrent Sinus Infections
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Repeated episodes of sinus infection may be associated with
                    allergies, nasal obstruction, anatomical variations, nasal
                    polyps or other underlying factors. A detailed ENT assessment
                    can help identify contributing causes and distinguish recurrent
                    sinusitis from repeated viral upper-respiratory infections.
                    Treatment is tailored to the cause and may include medical
                    management, allergy treatment or surgery in selected cases.
                </p>
            </div>

            {/* Nasal Obstruction */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Nasal Blockage & Nasal Obstruction
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Persistent difficulty breathing through the nose may result
                    from a deviated septum, enlarged turbinates, nasal polyps,
                    allergies, chronic sinus inflammation or other structural
                    problems. Nasal obstruction can affect sleep, exercise,
                    breathing comfort and quality of life. ENT examination and
                    nasal endoscopy can help identify the underlying cause and
                    guide appropriate treatment.
                </p>
            </div>

            {/* Fungal Sinusitis */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Fungal Sinusitis
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Fungal involvement of the sinuses includes several different
                    clinical conditions, ranging from non-invasive fungal disease
                    to more serious invasive infections. Symptoms may include
                    persistent nasal blockage, facial pressure, discharge or
                    reduced smell. Diagnosis depends on the clinical presentation,
                    endoscopic findings and imaging. Treatment varies according
                    to the type of fungal sinus disease and may include medication,
                    endoscopic surgery or specialist management.
                </p>
            </div>

        </div>
    </div>
</section>
<section className="py-20 px-4 md:px-8 bg-slate-50">
    <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Common Nose & Sinus Symptoms
            </h2>
            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                Persistent nasal and sinus symptoms can affect breathing, sleep,
                smell and everyday comfort. An ENT evaluation can help identify
                the underlying cause and guide appropriate treatment.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
                {
                    title: "Blocked or Stuffy Nose",
                    description:
                        "Persistent difficulty breathing through the nose may be related to nasal congestion, allergies, a deviated septum, enlarged turbinates, nasal polyps or sinus disease."
                },
                {
                    title: "Facial Pain or Pressure",
                    description:
                        "Pressure or discomfort around the cheeks, forehead, eyes or nose may occur with sinus inflammation and other nasal conditions."
                },
                {
                    title: "Frequent Headaches",
                    description:
                        "Recurrent headaches with nasal congestion, facial pressure or other nasal symptoms may require assessment to determine whether the sinuses are involved."
                },
                {
                    title: "Runny Nose",
                    description:
                        "A persistent or recurrent runny nose may occur with allergic rhinitis, non-allergic rhinitis, infections or other nasal conditions."
                },
                {
                    title: "Sneezing and Nasal Allergy",
                    description:
                        "Frequent sneezing, nasal itching and watery discharge are common symptoms of allergic rhinitis and may interfere with daily activities and sleep."
                },
                {
                    title: "Post-Nasal Drip",
                    description:
                        "Mucus draining from the back of the nose into the throat may cause throat irritation, frequent throat clearing or coughing."
                },
                {
                    title: "Reduced or Loss of Smell",
                    description:
                        "A reduced sense of smell may occur with nasal inflammation, sinus disease, nasal polyps, infections or other conditions affecting the nose."
                },
                {
                    title: "Mouth Breathing",
                    description:
                        "Difficulty breathing through the nose may lead to habitual mouth breathing, particularly during sleep, and may be associated with nasal obstruction."
                },
                {
                    title: "Snoring",
                    description:
                        "Nasal obstruction can contribute to mouth breathing and snoring. Persistent snoring, especially with disturbed sleep, may require evaluation for sleep-related breathing problems."
                },
                {
                    title: "Nosebleeds",
                    description:
                        "Repeated nosebleeds may be associated with dryness, irritation, allergies, trauma, nasal inflammation or other nasal conditions and should be assessed when recurrent."
                },
                {
                    title: "Recurrent Sinus Infections",
                    description:
                        "Repeated episodes of nasal blockage, discharge, facial pressure or other sinus symptoms may require evaluation to identify contributing factors."
                },
                {
                    title: "Difficulty Breathing Through the Nose",
                    description:
                        "Long-standing nasal breathing difficulty may result from structural problems, allergies, turbinate enlargement, polyps or chronic nasal and sinus inflammation."
                }
            ].map((symptom, index) => (
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
<section className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                How Dr. Dhirendra Singh Kushwah Treats Nose & Sinus Problems
            </h2>

            <p className="text-slate-600 mt-4 max-w-3xl mx-auto">
                Treatment is planned according to the symptoms, examination
                findings and underlying cause. Dr. Dhirendra Singh Kushwah
                evaluates nasal and sinus problems in children and adults and
                recommends medical, procedural or surgical treatment when appropriate.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
                {
                    step: "01",
                    title: "Detailed Evaluation",
                    description:
                        "The consultation begins with a detailed discussion of symptoms, their duration, previous treatment and relevant medical history, followed by an ENT examination."
                },
                {
                    step: "02",
                    title: "Nasal & Sinus Assessment",
                    description:
                        "Depending on the symptoms, examination may include nasal examination and, when clinically appropriate, nasal endoscopy or other investigations."
                },
                {
                    step: "03",
                    title: "Personalised Treatment",
                    description:
                        "Treatment may include medicines, nasal sprays, allergy management and other non-surgical approaches when these are appropriate for the underlying condition."
                },
                {
                    step: "04",
                    title: "Surgical Treatment When Needed",
                    description:
                        "For selected patients who do not respond adequately to appropriate medical treatment or have structural problems, procedures such as septoplasty, turbinate surgery or FESS may be considered."
                }
            ].map((item, index) => (
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
            {/* NOSE AND SINUS SURGERIES SECTION */}
            {/* <section className="py-20 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Nose and Sinus Surgeries Performed by Dr. kushwah in New Delhi</h2>
                        <p className="text-slate-500 mt-4">Advanced endoscopic surgical techniques for optimal outcomes</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Functional Endoscopic Sinus Surgery (FESS)</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">FESS is the gold-standard surgical treatment for chronic sinusitis, nasal polyps, and sinus obstruction that has not responded to medical therapy. Using fine, high-definition endoscopes passed through the nostrils - with no external cuts - Dr. kushwah opens the blocked sinus drainage pathways, removes polyps or diseased tissue, and restores normal sinus ventilation and mucociliary clearance. FESS is performed under general anaesthesia, typically as a day procedure, with most patients resuming normal activity within one to two weeks. The technique has been refined enormously over the past two decades and carries very low complication rates in experienced hands.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Septoplasty - Deviated Septum Surgery in Delhi</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Septoplasty straightens the deviated nasal septum to restore normal airflow through both nasal passages. It is performed entirely through the nostrils - no external incisions, no change to the nose's shape - under general or local anaesthesia. Dr. kushwah performs a pain-free, pack-free septoplasty approach that significantly reduces post-operative discomfort and recovery time compared to traditional techniques.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Turbinate Reduction (Radiofrequency Coblation)</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Using radiofrequency energy delivered through a fine probe, the submucosal tissue of enlarged turbinates is reduced in volume while the overlying mucosa is preserved. This is a minimally invasive, low-bleeding procedure that can often be performed under local anaesthesia, with immediate improvement in nasal airflow.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Nasal Polyp Removal (Endoscopic Polypectomy)</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Nasal polyps are removed endoscopically using a microdebrider - a rotating cutting instrument that removes soft tissue with precision while protecting surrounding structures. This is almost always combined with FESS to open the sinus drainage pathways and reduce the risk of polyp recurrence.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Balloon Sinuplasty</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">For selected patients with frontal or maxillary sinus disease without significant polyps, balloon sinuplasty offers a minimally invasive alternative to traditional FESS. A small balloon catheter is introduced into the blocked sinus ostium and gently inflated to widen the opening - similar in concept to coronary angioplasty. No tissue is removed. Recovery is rapid.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all">
                            <h3 className="text-xl font-bold text-slate-800 mb-3">Endoscopic Skull Base Surgery</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">For tumours, CSF (cerebrospinal fluid) leaks, and other pathology extending from the sinuses to the skull base, Dr. kushwah performs extended endoscopic skull base procedures - often in collaboration with a neurosurgeon - via the nasal route, avoiding the need for craniotomy or facial incisions.</p>
                        </div>
                    </div>
                </div>
            </section> */}
            ```jsx
<section className="py-20 px-4 md:px-8 bg-slate-50">
    <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Nose & Sinus Surgeries Performed by Dr. Dhirendra Singh Kushwah in Delhi
            </h2>

            <p className="text-slate-500 mt-4 max-w-3xl mx-auto">
                Surgical treatment for selected nasal and sinus conditions, including
                chronic sinusitis, deviated nasal septum, nasal polyps, turbinate
                enlargement and other conditions causing persistent nasal obstruction.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* FESS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Functional Endoscopic Sinus Surgery (FESS)
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    FESS is an endoscopic procedure used for selected patients with
                    chronic rhinosinusitis, nasal polyps or persistent sinus drainage
                    problems when appropriate medical treatment has not provided
                    sufficient relief. The procedure is performed through the nostrils
                    using an endoscope to improve access to the affected sinus pathways.
                </p>

                <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Endoscopic approach through the nostrils</li>
                    <li>• Helps improve sinus drainage and ventilation</li>
                    <li>• May be considered for chronic sinusitis and nasal polyps</li>
                    <li>• Treatment is planned according to the individual sinus condition</li>
                </ul>
            </div>

            {/* Septoplasty */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Septoplasty – Deviated Nasal Septum Surgery
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Septoplasty is performed to correct a deviated nasal septum that
                    contributes to persistent nasal obstruction or breathing difficulty.
                    The procedure reshapes or removes selected portions of the septal
                    cartilage and bone to improve the nasal airway while preserving
                    appropriate nasal structure.
                </p>

                <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Treats symptomatic deviated nasal septum (DNS)</li>
                    <li>• Aims to improve nasal airflow</li>
                    <li>• Usually performed through the inside of the nose</li>
                    <li>• May be combined with turbinate treatment when appropriate</li>
                </ul>
            </div>

            {/* Turbinate Reduction */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Turbinate Reduction
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Enlarged nasal turbinates can contribute to chronic nasal blockage
                    and difficulty breathing through the nose. Turbinate reduction aims
                    to reduce excessive tissue volume while preserving the normal
                    function of the nasal lining.
                </p>

                <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Used for selected cases of turbinate hypertrophy</li>
                    <li>• Can help improve nasal airway space</li>
                    <li>• Radiofrequency techniques may be used in suitable patients</li>
                    <li>• Technique depends on the patient's nasal anatomy and condition</li>
                </ul>
            </div>

            {/* Nasal Polyps */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Endoscopic Nasal Polyp Removal
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Nasal polyps are non-cancerous inflammatory growths that can cause
                    nasal blockage, reduced sense of smell and persistent sinus symptoms.
                    When surgery is appropriate, polyps can be removed using an
                    endoscopic technique, with treatment directed at the underlying
                    nasal and sinus disease.
                </p>

                <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Endoscopic removal of obstructive nasal polyps</li>
                    <li>• May be combined with sinus surgery when indicated</li>
                    <li>• Can help improve nasal airflow and access to the sinuses</li>
                    <li>• Ongoing medical management may be needed after surgery</li>
                </ul>
            </div>

            {/* Balloon Sinuplasty */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Balloon Sinuplasty
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Balloon sinuplasty uses a small balloon catheter to widen the
                    drainage pathway of selected sinuses. It may be considered for
                    carefully selected patients depending on the sinus involved,
                    anatomy, symptoms and underlying disease.
                </p>

                <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Minimally invasive endoscopic technique</li>
                    <li>• Uses a small balloon catheter to widen the sinus opening</li>
                    <li>• Suitable only for selected sinus conditions</li>
                    <li>• Suitability is determined after clinical evaluation</li>
                </ul>
            </div>

            {/* Skull Base Surgery */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Endoscopic Skull Base Surgery
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Endoscopic skull base surgery uses the nasal and sinus passages to
                    access selected conditions involving the skull base. Depending on
                    the diagnosis, surgery may be considered for conditions such as
                    certain skull base tumours or cerebrospinal fluid (CSF) leaks.
                </p>

                <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Endoscopic access through the nasal passages</li>
                    <li>• Used for selected skull base conditions</li>
                    <li>• May involve multidisciplinary surgical care</li>
                    <li>• Treatment planning depends on imaging and diagnosis</li>
                </ul>
            </div>

        </div>
    </div>
</section>


            {/* WHEN SHOULD YOU SEE A SPECIALIST SECTION */}
            {/* <section className="py-16 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-teal-50 rounded-3xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-6">When Should You See a Nose and Sinus Specialist in Delhi?</h2>
                        <p className="text-slate-600 text-lg mb-4">See Dr.(Prof.) Dhirendra Singh Kushwah if you have been experiencing any of the following for more than two to four weeks:</p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                            <li>Nasal blockage or congestion on one or both sides.</li>
                            <li>Sinus pressure or facial pain around the forehead, cheeks, or eyes.</li>
                            <li>Thick yellow, green, or blood-stained nasal discharge.</li>
                            <li>Persistent loss of smell or taste.</li>
                            <li>Chronic post-nasal drip or throat-clearing.</li>
                            <li>Recurrent nosebleeds.</li>
                            <li>Snoring or mouth breathing caused by nasal obstruction.</li>
                            <li>Frequent colds or sinus infections - three or more per year.</li>
                            <li>A feeling that medicines are no longer helping your sinus or allergy symptoms.</li>
                        </ul>
                        <p className="text-slate-600">These are all signs that a specialist assessment - rather than another round of antibiotics or over-the-counter antihistamines - is needed.</p>
                    </div>
                </div>
            </section> */}
            ```jsx
<section className="py-16 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
        <div className="bg-teal-50 rounded-3xl p-8 md:p-12">

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                When Should You See a Nose & Sinus Specialist in Delhi?
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Persistent or recurrent nasal and sinus symptoms can affect breathing,
                sleep, smell and everyday comfort. Consider an ENT evaluation with
                Dr. Dhirendra Singh Kushwah if you experience any of the following:
            </p>

            <ul className="space-y-3 mb-6 text-slate-600">
                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Persistent nasal blockage or congestion</strong> affecting
                        one or both sides of the nose.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Facial pain, pressure or heaviness</strong> around the
                        forehead, cheeks, nose or eyes.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Persistent or recurrent nasal discharge</strong>,
                        particularly when associated with congestion or facial pressure.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Reduced or loss of smell</strong> that persists or keeps
                        returning.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Post-nasal drip</strong>, frequent throat clearing or
                        mucus sensation at the back of the throat.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Frequent or recurrent nosebleeds</strong> without an
                        obvious cause.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Snoring or mouth breathing</strong> associated with
                        difficulty breathing through the nose.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Repeated sinus infections or recurring sinus symptoms</strong>
                        that interfere with your daily activities or quality of life.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Nasal or allergy symptoms that persist despite treatment</strong>
                        or return frequently.
                    </span>
                </li>

                <li className="flex items-start gap-3">
                    <span className="text-teal-700 font-bold mt-1">✓</span>
                    <span>
                        <strong>Persistent breathing difficulty through the nose</strong>
                        that may be related to a deviated septum, enlarged turbinates,
                        nasal polyps or other nasal conditions.
                    </span>
                </li>
            </ul>

            <div className="border-t border-teal-100 pt-5">
                <p className="text-slate-600 leading-relaxed">
                    An ENT assessment can help identify the underlying cause of persistent
                    nasal or sinus symptoms. Depending on your symptoms and examination,
                    evaluation may include a nasal examination, nasal endoscopy or other
                    investigations. Treatment may involve medicines, allergy management,
                    nasal procedures or surgery when clinically appropriate.
                </p>
            </div>

        </div>
    </div>
</section>


            {/* LOCAL SEO SECTION
            <section className="py-16 px-4 md:px-8 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Local SEO - Serving Patients Across New Delhi and NCR</h2>
                    <p className="text-slate-600 text-left leading-relaxed mb-6">Dr.(Prof.) Dhirendra Singh Kushwah sees patients from across the Delhi-NCR region at his two conveniently located clinics. If you are looking for a nose and sinus specialist near any of the following areas, you are within easy reach:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-slate-600">CR Park, Kalkaji, Jasola Vihar, Sarita Vihar, Greater Kailash, Okhla, Lajpat Nagar, Defence Colony, Nehru Place, Govindpuri, Alaknanda, Jamia Nagar, Badarpur, Faridabad (Haryana), Noida (Uttar Pradesh), South Delhi, South East Delhi.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-slate-600">Safdarjung Enclave, Arjun Nagar, Green Park, Hauz Khas, Vasant Kunj, Vasant Vihar, Munirka, R K Puram, Sarojini Nagar, Karol Bagh, Patel Nagar, Rajouri Garden, Dwarka, Janakpuri, West Delhi, South West Delhi.</p>
                        </div>
                    </div>
                    <p className="text-slate-600 text-left leading-relaxed mt-4">Both clinics offer appointment-based consultations, and Dr.(Prof.) Dhirendra Singh Kushwah is personally available on WhatsApp for urgent queries.</p>
                </div>
            </section> */}
            ```jsx
{/* LOCAL SEO SECTION */}
<section className="py-16 px-4 md:px-8 bg-slate-50">
    <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                Nose & Sinus Specialist Serving Delhi NCR and Nearby Areas
            </h2>

            <p className="text-slate-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                Dr. Dhirendra Singh Kushwah provides ENT consultation and
                nose & sinus care for patients from South Delhi, South East Delhi,
                other parts of Delhi NCR and nearby areas. Consultations are
                available at selected clinic locations by appointment.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* JASOLA */}
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    ENT & Nose-Sinus Specialist in Jasola Vihar
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    The Jasola Vihar clinic provides access to ENT consultation
                    for patients with sinusitis, nasal blockage, allergic rhinitis,
                    nasal polyps, deviated nasal septum, recurrent sinus problems
                    and other nose and sinus conditions.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                    Convenient for patients from:
                </p>

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
                    <li>• Alaknanda</li>
                </ul>
            </div>

            {/* CR PARK */}
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    ENT & Sinus Specialist in CR Park
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Patients with persistent nasal congestion, sinus symptoms,
                    nasal allergy, loss of smell, post-nasal drip and other
                    nose-related problems can consult Dr. Dhirendra Singh Kushwah
                    at the CR Park clinic.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                    Convenient for patients from:
                </p>

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

            {/* ARJUN NAGAR */}
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    ENT & Nose-Sinus Specialist in Safdarjung Enclave
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    The Arjun Nagar clinic offers ENT consultations for nasal
                    obstruction, sinusitis, allergic rhinitis, nasal polyps,
                    deviated septum, recurrent sinus symptoms and related
                    nose and sinus conditions.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                    Convenient for patients from:
                </p>

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

            {/* NCR / PALWAL */}
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                    ENT & Sinus Care for Delhi NCR and Nearby Areas
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    Patients also travel from different parts of Delhi NCR and
                    neighbouring areas for specialist ENT consultation and
                    evaluation of persistent nose and sinus problems.
                </p>

                <p className="text-slate-600 text-sm leading-relaxed">
                    Patients may visit from:
                </p>

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

        {/* <div className="mt-10 bg-teal-50 rounded-2xl p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
                Looking for a Nose & Sinus Specialist Near You?
            </h3>

            <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
                If you have persistent nasal blockage, sinus pressure, recurrent
                sinus infections, nasal allergy, nasal polyps, reduced sense of smell
                or difficulty breathing through your nose, an ENT evaluation can
                help identify the underlying cause and determine the appropriate
                treatment.
            </p>

            <p className="text-slate-600 mt-4 font-medium">
                Consult Dr. Dhirendra Singh Kushwah at the clinic location most
                convenient for you, by appointment.
            </p>
        </div> */}
        
<div className="mt-10 bg-teal-50 rounded-2xl p-6 md:p-8 text-center border border-teal-100">
    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">
        Looking for a Nose & Sinus Specialist in Delhi?
    </h3>

    <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
        If you are experiencing persistent nasal blockage, sinus pressure,
        recurrent sinus infections, nasal allergy, nasal polyps, post-nasal drip,
        reduced sense of smell or difficulty breathing through your nose, an
        ENT consultation can help identify the underlying cause and guide
        appropriate treatment.
    </p>

    <p className="text-slate-600 mt-4 font-medium max-w-3xl mx-auto">
        Consult Dr. Dhirendra Singh Kushwah for evaluation and treatment of
        nose and sinus conditions in Delhi. Appointments are available at
        selected clinic locations in South Delhi and nearby areas.
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


            {/* WHY CHOOSE SECTION */}
            {/* <section className="py-20 px-4 md:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="bg-white rounded-3xl overflow-hidden">
                                <div className="p-8">
                                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Video - Receive top-quality ENT care from our highly experienced specialist</h2>
                                    <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/f8Si15IIe54"
                                            title="ENT Care Specialist"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                                Why Choose Dr.(Prof.) Dhirendra Singh Kushwah for Nose & Sinus Treatment in New Delhi?
                            </h2>
                            <p className="text-slate-600 leading-relaxed">
                                Dr.(Prof.) Dhirendra Singh Kushwah combines 25 years of ENT clinical experience with advanced rhinology surgical skills and a genuinely patient-centred approach. He is fluent in English and Hindi, and takes the time to explain each diagnosis and treatment option clearly - so patients never feel rushed or uncertain about their care.
                                <br /><br />
                                He is trusted by patients not just in Delhi, but from across India, for the following reasons: expertise in advanced endoscopic sinus surgery including FESS and skull base procedures; a pain-free, pack-free septoplasty technique that significantly improves post-operative comfort; high-definition video nasal endoscopy that allows patients to see their own diagnosis in real time; multidisciplinary care combining allergy testing, audiological assessment, and surgical expertise under one roof; and two accessible clinic locations in South Delhi, with WhatsApp availability for urgent queries.
                            </p>
                            <div className="space-y-6">
                                {trustPoints.map((point, i) => (
                                    <div key={i} className="flex gap-6">
                                        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-lg">
                                            {point.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 mb-1">{point.title}</h4>
                                            <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

<section className="py-20 px-4 md:px-8 bg-white">
    <div>
        <p className="text-2xl md:text-3xl font-bold text-slate-800">
                    Why Choose Dr. Dhirendra Singh Kushwah for
                        Nose & Sinus Treatment in Delhi?<br></br><br></br>
                </p>
    </div>
    <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* VIDEO */}
            <div className="max-w-4xl mx-auto w-full">
                <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100">
                    <div className="p-6 md:p-8">

                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                            Nose & Sinus Care by Dr. Dhirendra Singh Kushwah
                        </h2>

                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            Learn more about ENT care, nose and sinus conditions,
                            diagnosis and treatment options from Dr. Dhirendra
                            Singh Kushwah.
                        </p>

                        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/f8Si15IIe54"
                                title="Nose and Sinus Care by Dr. Dhirendra Singh Kushwah"
                                frameBorder="0"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                    </div>
                </div>
            </div>


            {/* WHY CHOOSE */}
            <div className="flex flex-col gap-8">

                <div>
                    <p className="text-slate-600 leading-relaxed mt-6">
                        Dr. Dhirendra Singh Kushwah is an ENT specialist and surgeon
                        with more than 25 years of clinical experience. His practice
                        includes evaluation and treatment of a wide range of ear,
                        nose and throat conditions, with a focus on nose and sinus
                        disorders, endoscopic procedures and related ENT surgery.
                    </p>

                    <p className="text-slate-600 leading-relaxed mt-4">
                        Patients with persistent nasal blockage, sinus symptoms,
                        nasal allergies, nasal polyps, deviated nasal septum,
                        recurrent sinus problems or reduced sense of smell can
                        undergo an appropriate ENT assessment before treatment
                        options are recommended.
                    </p>
                </div>


                {/* TRUST POINTS */}
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

            <FaqAccordion faqItems={faqItems} />

            {/* CONTACT CTA */}
<section className="py-16 px-4">
    <div className="max-w-5xl mx-auto bg-teal-600 rounded-[40px] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">

        <div className="relative z-10 flex flex-col items-center gap-6">

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Book a Nose & Sinus Consultation in Delhi
            </h2>

            <p className="text-teal-100 text-lg leading-relaxed max-w-3xl">
                If you have persistent nasal blockage, sinus pressure, recurrent
                sinus symptoms, nasal allergy, nasal polyps, post-nasal drip,
                reduced sense of smell or difficulty breathing through your nose,
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
                Consultation is available by appointment. The appropriate
                treatment depends on the patient's symptoms, examination findings
                and underlying diagnosis.
            </p>

        </div>
    </div>
</section>

        </div>
    );
}