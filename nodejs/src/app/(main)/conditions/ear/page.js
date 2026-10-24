import React from 'react';
import { DoctorImage, FaqAccordion } from "@/components/ui/custom";
import { Ear, Headphones, ShieldAlert, Award, Calendar, Activity } from "lucide-react";

export default async function EarPage() {
  const faqItems = [
    { q: "What is the difference between an ENT doctor and an otologist?", a: "An ENT (Ear, Nose and Throat) specialist treats all three areas of the head and neck. An otologist is an ENT who has undergone additional specialised training exclusively in ear diseases, hearing, and balance — including microsurgery and cochlear implantation. Dr.(Prof.) Dhirendra Singh Kushwah practises as both a senior ENT and an experienced otologist." },
    { q: "Can hearing loss be cured?", a: "Conductive hearing loss — caused by eardrum perforation, fluid, or ossicular damage — is often curable with surgery. Sensorineural hearing loss caused by cochlear damage is generally not reversible, but can be highly effectively managed with hearing aids or cochlear implants, restoring functional hearing." },
    { q: "Is tympanoplasty a major surgery?", a: "Tympanoplasty is performed under general or local anaesthesia and typically takes one to two hours. It is not considered a major surgery, but it is microsurgical — requiring great precision. Most patients are discharged the same day or after one night's observation, with full recovery in four to six weeks." },
    { q: "At what age can a child receive a cochlear implant?", a: "Cochlear implants can be placed in children as young as 12 months of age — and earlier in cases of bilateral profound hearing loss where medical urgency is established. The earlier the implant, the better the child's prospects for natural speech and language development." },
    { q: "Is stapedotomy safe? What are the risks?", a: "Stapedotomy is a highly refined procedure with excellent outcomes in experienced hands. In a small number of cases there is a risk of inner ear damage leading to sensorineural hearing loss - which is why it should only be performed by a specialist with significant experience. Dr.(Prof.) Dhirendra Singh Kushwah has performed this procedure extensively with high success rates." },
    { q: "What causes sudden hearing loss in one ear?", a: "Sudden sensorineural hearing loss (SSNHL) can result from viral infection, vascular disruption to the cochlea, autoimmune conditions, or perilymph fistula. In many cases the exact cause is not found. It is a medical emergency — seek evaluation within 24-48 hours for the best chance of recovery." },
    { q: "How do I know if my child has a hearing problem?", a: "Signs in infants include not reacting to loud sounds, not turning toward voices, and not babbling by 6 months. In older children, watch for not responding when called, asking for things to be repeated, turning the TV up too loud, or falling behind in speech. Bring your child for a hearing evaluation without delay if you notice any of these signs." }
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
              Otology & Ear Health — New Delhi
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
              Ear & Hearing Conditions — Expert Diagnosis and Treatment in New Delhi
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
              Ear problems are among the most common health concerns affecting people of all ages — yet they are also among the most under-treated. Whether you are dealing with recurring ear infections, unexplained hearing loss, a persistent ringing sound, or a sensation of spinning, the root cause almost always lies in the delicate structures of the ear and its connected systems.
            </p>
            <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">
              Dr. Dhirendra Singh kushwah is a senior ENT and otology specialist based in New Delhi with over 25 years of clinical and surgical experience. He diagnoses and treats the full range of ear and hearing conditions in children, adults, and the elderly — from simple infections to complex cochlear implant surgeries — using advanced, minimally invasive techniques designed for lasting relief.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS OTOLOGY SECTION */}
      <section className="py-16 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold text-slate-800">What Is Otology? Understanding the Science of Ear Health</h2>
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
            <h2 className="text-3xl font-bold text-slate-900">Ear & Hearing Conditions Treated by Dr.(Prof.) Dhirendra Singh Kushwah</h2>
          </div>

          <div className="space-y-12">
            {/* Chronic Ear Infections */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Chronic Ear Infections (Chronic Otitis Media)</h3>
              <p className="text-slate-600 leading-relaxed">Chronic otitis media is a persistent or recurrent infection of the middle ear, often associated with a perforated eardrum and continuous ear discharge. Left untreated, it can lead to progressive hearing loss, mastoid bone damage, and in rare cases, serious intracranial complications.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Dr.(Prof.) Dhirendra Singh Kushwah evaluates each case using video endoscopy and microscopy, and tailors treatment — medical or surgical — based on the severity and duration of the infection.</p>
            </div>

            {/* Eardrum Perforation */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Eardrum Perforation (Tympanic Membrane Perforation)</h3>
              <p className="text-slate-600 leading-relaxed">A hole or tear in the eardrum can result from chronic infection, a sudden pressure change (barotrauma), direct injury, or a previous surgery. Symptoms include hearing loss, recurrent discharge, and susceptibility to further infections.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Tympanoplasty — surgical repair of the eardrum — is performed by Dr.(Prof.) Dhirendra Singh Kushwah under high-magnification operating microscopy, with high success rates and minimal downtime. The procedure restores the integrity of the eardrum and significantly improves hearing.</p>
            </div>

            {/* Cholesteatoma */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Cholesteatoma</h3>
              <p className="text-slate-600 leading-relaxed">Cholesteatoma is an abnormal growth of skin cells within the middle ear or mastoid bone. Though not cancerous, it is destructive — it erodes the ossicles, mastoid bone, and can eventually invade the inner ear or skull base if untreated.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Symptoms include a foul-smelling ear discharge, progressive hearing loss, and sometimes dizziness or facial weakness. Treatment is surgical: mastoidectomy with or without reconstruction of the hearing mechanism (ossiculoplasty).</p>
            </div>

            {/* Hearing Loss */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Hearing Loss — Conductive, Sensorineural, and Mixed</h3>
              <p className="text-slate-600 leading-relaxed">Hearing loss is classified into three types based on where in the auditory pathway the problem lies:</p>
              <p className="text-slate-600 leading-relaxed mt-2">Conductive hearing loss occurs when sound cannot travel efficiently from the outer ear to the inner ear — commonly caused by earwax blockage, fluid in the middle ear, eardrum perforation, or ossicular chain disruption. It is often treatable with surgery or medical management.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Sensorineural hearing loss results from damage to the hair cells of the cochlea or the auditory nerve — caused by ageing (presbycusis), prolonged noise exposure, viral infections, ototoxic medications, or genetic factors. Mild to moderate cases are managed with hearing aids; severe to profound cases may require a cochlear implant.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Mixed hearing loss involves both conductive and sensorineural components and requires a combined treatment approach.</p>
              <p className="text-slate-600 leading-relaxed mt-2">A full audiological evaluation — including Pure Tone Audiogram (PTA), Speech Audiogram, and Tympanometry — is performed at the clinic to classify the type and degree of hearing loss before any treatment is recommended.</p>
            </div>

            {/* Tinnitus */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Tinnitus (Ringing in the Ears)</h3>
              <p className="text-slate-600 leading-relaxed">Tinnitus is the perception of sound — ringing, buzzing, hissing, or whooshing — when no external sound is present. It affects millions of people and can range from a mild nuisance to a severely disruptive condition that impairs concentration, sleep, and emotional wellbeing.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Tinnitus is a symptom, not a disease in itself. It can arise from noise-induced cochlear damage, middle ear pathology, Eustachian tube dysfunction, Menière's disease, cardiovascular conditions, or certain medications. Identifying the underlying cause is the first step — and Dr. kushwah's structured evaluation helps pinpoint it accurately, guiding targeted treatment rather than symptomatic suppression alone.</p>
            </div>

            {/* Otosclerosis */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Otosclerosis and Conductive Hearing Loss</h3>
              <p className="text-slate-600 leading-relaxed">Otosclerosis is a condition in which abnormal bone growth in the middle ear — particularly around the stapes (stirrup bone) — prevents the ossicles from vibrating freely. This results in progressive conductive hearing loss that is often bilateral and worsens over time.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Stapedotomy — a precise microsurgical procedure to bypass the fixed stapes and restore sound conduction — is performed by Dr. kushwah with excellent outcomes. Most patients experience significant hearing improvement within weeks of surgery.</p>
            </div>

            {/* Menière's Disease */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Menière's Disease</h3>
              <p className="text-slate-600 leading-relaxed">Menière's disease is a chronic condition of the inner ear characterised by episodes of severe vertigo lasting minutes to hours, fluctuating low-frequency hearing loss, tinnitus, and a sensation of fullness or pressure in the affected ear. It is believed to be caused by abnormal fluid pressure within the endolymphatic system of the inner ear.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Management includes dietary modifications (low-sodium diet), medications to control vertigo episodes, and in refractory cases, procedures such as intratympanic steroid or gentamicin injections, or endolymphatic sac decompression surgery.</p>
            </div>

            {/* Sudden Sensorineural Hearing Loss */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Sudden Sensorineural Hearing Loss (SSNHL)</h3>
              <p className="text-slate-600 leading-relaxed">Sudden sensorineural hearing loss is a medical emergency — a rapid, unexplained loss of hearing, typically in one ear, that occurs within 72 hours. It requires urgent assessment and treatment, as delay significantly worsens prognosis.</p>
              <p className="text-slate-600 leading-relaxed mt-2">If you or someone you know experiences sudden hearing loss, especially accompanied by tinnitus or dizziness, contact Dr. kushwah's clinic immediately. Early treatment with corticosteroids (oral or intratympanic) offers the best chance of recovery.</p>
            </div>

            {/* Swimmer's Ear */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Swimmer's Ear (Otitis Externa)</h3>
              <p className="text-slate-600 leading-relaxed">Otitis externa is an infection or inflammation of the outer ear canal, commonly triggered by water exposure, skin conditions (eczema, psoriasis), or repeated trauma from cotton buds. Symptoms include ear pain, itching, discharge, and blocked hearing.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Management involves thorough ear cleaning (aural toilet), topical antibiotic or antifungal drops, and in severe cases, wick insertion to deliver medication deep into the canal.</p>
            </div>

            {/* Earwax Buildup */}
            <div className="border-b border-slate-200 pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Earwax Buildup (Cerumen Impaction)</h3>
              <p className="text-slate-600 leading-relaxed">While earwax is a natural protective secretion, excessive accumulation can cause blocked hearing, earache, tinnitus, and dizziness. Dr. kushwah performs safe, professional microsuction or syringing to remove impacted wax — avoiding the risks of self-removal with cotton buds or ear drops alone.</p>
            </div>

            {/* Congenital Ear Conditions */}
            <div className="pb-8">
              <h3 className="text-xl font-bold text-teal-700 mb-3">Congenital Ear Conditions (Microtia, Atresia)</h3>
              <p className="text-slate-600 leading-relaxed">Some children are born with structural abnormalities of the outer or middle ear — including microtia (underdeveloped pinna) and aural atresia (absent or narrowed ear canal). These can cause significant conductive hearing loss from birth.</p>
              <p className="text-slate-600 leading-relaxed mt-2">Early audiological assessment and — where appropriate — bone-anchored hearing devices (BAHA or Bonebridge) or surgical reconstruction are evaluated and planned as part of a child-centred, family-involved care pathway.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING SIGNS SECTION */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">Warning Signs — When to See an Ear Specialist</h2>
          <p className="text-slate-600 text-left leading-relaxed max-w-3xl mx-auto mb-8">Do not ignore ear symptoms. Seek expert evaluation if you or your child experiences any of the following:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-slate-600">Hearing loss in one or both ears — sudden or gradual.</p></div>
            <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-slate-600">Persistent ear discharge, especially if foul-smelling.</p></div>
            <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-slate-600">A ringing, buzzing, or hissing sound in the ear.</p></div>
            <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-slate-600">Recurring ear infections, especially in children.</p></div>
            <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-slate-600">Earache or feeling of pressure or fullness.</p></div>
            <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-slate-600">Dizziness, spinning sensations, or balance problems.</p></div>
            <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-slate-600">Blockage or muffled hearing that does not resolve on its own.</p></div>
            <div className="bg-white p-4 rounded-xl shadow-sm"><p className="text-slate-600">Facial weakness or numbness alongside ear symptoms.</p></div>
          </div>
          <p className="text-teal-700 font-medium text-left max-w-3xl mx-auto mt-6">Early diagnosis almost always leads to better outcomes and fewer complications.</p>
        </div>
      </section>

      {/* EAR SURGERIES SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Ear Surgeries Performed by Dr.(Prof.) Dhirendra Singh Kushwah</h2>
          <p className="text-slate-600 text-left leading-relaxed max-w-2xl mx-auto mb-8">Dr.(Prof.) Dhirendra Singh Kushwah is an experienced ear surgeon performing a wide range of microsurgical and reconstructive procedures:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl"><p className="text-slate-600"><strong>Tympanoplasty</strong> — repair of a perforated eardrum, with or without ossicular chain reconstruction.</p></div>
            <div className="bg-slate-50 p-6 rounded-2xl"><p className="text-slate-600"><strong>Mastoidectomy</strong> — surgical removal of diseased mastoid bone, performed for cholesteatoma, chronic mastoiditis, and complications of chronic ear disease.</p></div>
            <div className="bg-slate-50 p-6 rounded-2xl"><p className="text-slate-600"><strong>Ossiculoplasty</strong> — reconstruction of the tiny hearing bones (ossicles) damaged by infection, cholesteatoma, or trauma, using prosthetic implants or the patient's own tissue.</p></div>
            <div className="bg-slate-50 p-6 rounded-2xl"><p className="text-slate-600"><strong>Stapedotomy</strong> — microsurgical procedure for otosclerosis, creating a small opening in the fixed stapes and placing a prosthesis to restore sound transmission.</p></div>
            <div className="bg-slate-50 p-6 rounded-2xl"><p className="text-slate-600"><strong>Cochlear Implantation</strong> — surgical placement of an electronic device that directly stimulates the auditory nerve, restoring meaningful hearing in patients with severe to profound sensorineural hearing loss.</p></div>
            <div className="bg-slate-50 p-6 rounded-2xl"><p className="text-slate-600"><strong>Intratympanic Injections</strong> — targeted injection of steroids or gentamicin directly into the middle ear, used for sudden hearing loss, Menière's disease, and refractory tinnitus.</p></div>
          </div>
        </div>
      </section>

      {/* HEARING TESTS SECTION */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">Hearing Tests and Audiological Evaluation</h2>
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
              <div className="absolute -inset-4 bg-teal-500/10 rounded-[40px] rotate-3" />
              <DoctorImage
                src="images/dherendra_patient.png"
                alt="Dr.(Prof.) Dhirendra Singh Kushwah – ENT Specialist"
                className="relative rounded-[32px] shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Patients Choose Dr. Dhirendra Singh kushwah for Ear Treatment</h2>
              <div className="space-y-4 text-slate-600">
                <p>Dr.(Prof.) Dhirendra Singh kushwah completed his MBBS from Jiwaji University, Gwalior (1999) and his MS in ENT from Rani Durgawati University, Jabalpur (2005). He has been practising and operating in New Delhi for over two decades and is recognised as one of India's most trusted ear surgeons.</p>
                <p>Patients choose Dr.(Prof.) Dhirendra Singh kushwah for ear and hearing treatment because of his precision surgical technique, transparent communication, and genuine commitment to every patient's recovery — whether they are a newborn undergoing hearing screening or an adult seeking cochlear implantation after years of profound hearing loss.</p>
                <p>He is available in English and Hindi, personally reachable at all hours, and operates from two conveniently located clinics in New Delhi.</p>
                <p className="font-medium">Over 700 cochlear and auditory brainstem implant recipients under his care — one of the highest programme volumes in India.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-slate-50">
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
              <p className="text-slate-600 mt-2">Stapedotomy is a highly refined procedure with excellent outcomes in experienced hands. In a small number of cases there is a risk of inner ear damage leading to sensorineural hearing loss - which is why it should only be performed by a specialist with significant experience. Dr. kushwah has performed this procedure extensively with high success rates.</p>
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
      </section>

      {/* BOOK APPOINTMENT SECTION */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto bg-teal-600 rounded-[40px] p-8 md:p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book an Appointment with Dr. Dhirendra Singh kushwah</h2>
          <p className="text-teal-100 text-lg mb-6">If you are experiencing any ear or hearing concern - however mild it may seem - early expert assessment leads to better outcomes. Dr. kushwah and his team are available six days a week at two New Delhi locations.</p>
          <div className="space-y-2 text-white">
            <p className="text-xl font-semibold">Call or WhatsApp: +91-9311449825</p>
            <p>Email: drdhirendrasinghent@gmail.com</p>
            <div className="mt-6 pt-4 border-t border-teal-400/30">
              <p><strong>CR Park Clinic:</strong> J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, New Delhi – 110019</p>
              <p className="mt-2"><strong>Arjun Nagar Clinic:</strong> 19-C, Arjun Nagar, Safdarjung Enclave, New Delhi – 110029</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="tel:+919311449825" className="bg-white text-teal-700 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all">
              Call Now
            </a>
            <a href="https://wa.me/919311449825" className="bg-teal-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-teal-800 transition-all">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}