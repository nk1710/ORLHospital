import FacilityImage from './facilities'
import { FaqAccordion } from "@/components/ui/custom";

export async function generateMetadata() {
  const url = "https://www.drdhirendrasinghkushwah.in/facilities";

  return {
    title: "World-Class ENT Care Facilities | Dr.(Prof.) Dhirendra Singh kushwah – ENT Specialist, New Delhi",
    description: "Explore the advanced ENT diagnostic and surgical facilities offered by Dr.(Prof.) Dhirendra Singh kushwah — cochlear implants, microscopic ear surgery, endoscopy, allergy testing, speech therapy and more. Book a consultation in CR Park or Arjun Nagar, New Delhi.",
    keywords: [
      "ENT specialist in Delhi",
      "ENT doctor India",
      "ENT clinic Delhi",
      "Skull base surgery",
      "Cochlear implant India",
      "ENT facilities",
      "Ear nose throat treatment",
      "Dr.(Prof.) Dhirendra Singh kushwah",
       "ENT specialist near me",
	  "Ear Nose Throat specialist Delhi",
	  "Top rated ENT doctor South Delhi",
	  "ENT surgeon in Delhi hospital",
	  "Skull base surgery cost in India",
	  "Best skull base surgeon in Delhi",
	  "Cochlear implant surgery in India",
	  "Top cochlear implant clinic Delhi",
	  "Endoscopic skull base surgery India",
	  "Cochlear implant cost Delhi",
	  "Advanced skull base surgery center",
	  "Ear nose throat treatment Delhi",
	  "Sinusitis treatment clinic Delhi",
	  "Micro ear surgery India",
	  "Tinnitus treatment specialist Delhi",
	  "Hearing loss treatment India",
	  "Tonsillectomy surgeon Delhi",
	  "Snoring and sleep apnea treatment",
	  "Best ENT facilities in Delhi",
	  "ENT hospital with cochlear implant",
	  "State of the art ENT clinic India",
    ],
    authors: [{ name: "Dr.(Prof.) Dhirendra Singh kushwah" }],
    alternates: { canonical: url },
    openGraph: {
      title: "World-Class ENT Care Facilities | Dr.(Prof.) Dhirendra Singh kushwah – ENT Specialist, New Delhi",
      description: "Explore the advanced ENT diagnostic and surgical facilities offered by Dr.(Prof.) Dhirendra Singh kushwah — cochlear implants, microscopic ear surgery, endoscopy, allergy testing, speech therapy and more. Book a consultation in CR Park or Arjun Nagar, New Delhi.",
      url: url,
      siteName: "Your Website Name",
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: "World-Class ENT Care Facilities | Dr.(Prof.) Dhirendra Singh kushwah – ENT Specialist, New Delhi",
      description: "Explore the advanced ENT diagnostic and surgical facilities offered by Dr.(Prof.) Dhirendra Singh kushwah — cochlear implants, microscopic ear surgery, endoscopy, allergy testing, speech therapy and more.",
    },
    robots: { index: true, follow: true },
  };
}

export default async function Facilities() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Dr.(Prof.) Dhirendra Singh kushwah ENT Clinic",
    url: "https://www.drdhirendrasinghkushwah.in",
    logo: "https://www.drdhirendrasinghkushwah.in/images/logo.png",
    image: "https://www.drdhirendrasinghkushwah.in/images/clinic-facility.webp",
    description: "State-of-the-art ENT clinic offering advanced diagnostic and surgical care for pediatric and adult patients.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "CR Park, Jasola, Arjune Nagar",
      addressLocality: "New Delhi",
      postalCode: "110019",
      addressCountry: "IN",
    },
    telephone: "[Insert Phone Number]",
    medicalSpecialty: [
      "Otolaryngology",
      "Pediatric ENT",
      "Audiology",
      "Speech-Language Pathology",
      "Sleep Medicine",
      "Allergy & Immunology",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Endoscopic Sinus & Skull Base Surgery",
        description: "Minimally invasive surgery for nasal and sinus disorders using advanced endoscopic systems for precision and faster recovery.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Microscopic Ear Surgery",
        description: "High-magnification surgical treatment for hearing problems, chronic ear infections, and neuro-otologic disorders.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Laser & Radiofrequency Surgery (Coblation)",
        description: "Bloodless and minimally invasive procedures for tonsils, turbinates, and soft tissue ENT conditions.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cochlear & Auditory Brainstem Implant Program",
        description: "Advanced implantable hearing solutions for severe to profound hearing loss, including post-implant programming and auditory verbal therapy.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Hearing Assessments",
        description: "PTA, Speech Audiograms, Impedance, ABR, ASSR, OAE, Tympanometry, and newborn hearing screening.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Allergy Testing & Management",
        description: "Blood tests and skin prick tests to identify allergy triggers, followed by personalized management plans.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Sleep & Snoring Assessment",
        description: "Sleep apnea and snoring evaluations using high-end monitoring tools to detect breathing irregularities.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Balance & Vertigo Testing",
        description: "Specialized testing to determine the cause of dizziness or vertigo for accurate treatment.",
      },
      {
        "@type": "TherapeuticProcedure",
        name: "Speech & Language Therapy",
        description: "Therapy for articulation disorders, stuttering, voice disorders, feeding and swallowing challenges, and neurological speech issues.",
      },
    ],
    openingHours: "Mo-Su 09:00-21:00",
    sameAs: [
      "https://www.facebook.com/drdhirendrasinghkushwah",
      "https://www.instagram.com/drdhirendrasinghkushwah",
      "https://www.linkedin.com/in/drdhirendrasinghkushwah",
    ],
  };

  const faqItems = [
    { q: "What ENT surgical facilities are available at Dr.(Prof.) Dhirendra Singh kushwah's clinic?", a: "The clinic offers microscopic ear surgery, endoscopic sinus and skull base surgery, laser and coblation surgery, tympanoplasty, mastoidectomy, ossiculoplasty, stapedotomy, septoplasty, tonsillectomy, and cochlear implant surgery." },
    { q: "Is cochlear implant surgery available for children at this clinic?", a: "Yes. Dr.(Prof.) Dhirendra Singh kushwah's cochlear implant programme caters to children from infancy through adolescence, as well as adults. The programme includes pre-implant evaluation, surgery, device programming, and long-term auditory verbal therapy." },
    { q: "What hearing tests are available for newborns?", a: "Newborn hearing screening using OAE (Otoacoustic Emissions) and ABR (Auditory Brainstem Response) is available to detect hearing loss at birth, enabling early intervention before three months of age." },
    { q: "Does the clinic offer speech therapy after cochlear implantation?", a: "Yes. Dedicated Auditory Verbal Therapy (AVT) and speech-language pathology services are available as part of the post-implant rehabilitation programme." },
    { q: "Where are the clinics located?", a: "Dr.(Prof.) Dhirendra Singh kushwah operates from two locations: J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, New Delhi – 110019; and 19-C, Arjun Nagar, Safdarjung Enclave, New Delhi – 110029." },
    { q: "How do I book an appointment?", a: "Call or WhatsApp: +91-9311449825 | Email: drdhirendrasinghent@gmail.com" }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="relative facilities-banner w-full h-64 md:h-80 lg:h-100 overflow-hidden">
        <FacilityImage
          src="/images/ORL-Hospital-Facility-ENT-Surgeon-Dr-Dhirendra-Singh-Kushwah.png"
          alt="World-Class ENT Facilities"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </section>

      <section className="condition-cnt">
        <div className="max-w-7xl text-slate-600 mx-auto px-4 py-8">

          <div className="w-full py-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl text-teal-600">Facilities</h2>
            </div>
          </div>

          {/* <div className="text-center max-w-3xl mx-auto pb-10">
            <h1 className="py-4 text-xl font-semibold text-slate-800">
              World-Class ENT Care Facilities by Dr.(Prof.) Dhirendra Singh kushwah
            </h1>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Choosing the right ENT doctor is one of the most important decisions you can make when dealing with problems related to the ear, nose, or throat. Dr.(Prof.) Dhirendra Singh kushwah, a trusted ENT specialist in New Delhi with over 25 years of experience, offers a comprehensive range of diagnostic and surgical facilities designed to deliver accurate diagnosis, advanced treatment, and long-term relief for both children and adults.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base mt-4">
              At his clinics in CR Park and Arjun Nagar (Safdarjung Enclave), every patient is evaluated using modern, fully sterilised instruments in a safe, patient-centred environment. The facilities cover the full spectrum of ENT care - from routine consultations to complex cochlear implant surgeries and skull base procedures.
            </p>
          </div> */}
{/* Start */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 border-t border-slate-100">
        <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[320px] md:min-h-[440px]">
              <FacilityImage
                src="/images/dhirendra kushwah.webp"
                alt="Advanced ENT Diagnostic and Surgical Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug">
                World-Class ENT Care Facilities by Dr.(Prof.) Dhirendra Singh kushwah
              </h2>
              <div className="w-12 h-0.5 bg-teal-600 rounded" />
              <p className="text-slate-600 leading-relaxed text-md">
                Choosing the right ENT doctor is one of the most important decisions you can make when dealing with problems related to the ear, nose, or throat. Dr.(Prof.) Dhirendra Singh kushwah, a trusted ENT specialist in New Delhi with over 25 years of experience, offers a comprehensive range of diagnostic and surgical facilities designed to deliver accurate diagnosis, advanced treatment, and long-term relief for both children and adults.
                <br></br>At his clinics in CR Park and Arjun Nagar (Safdarjung Enclave), every patient is evaluated using modern, fully sterilised instruments in a safe, patient-centred environment. The facilities cover the full spectrum of ENT care - from routine consultations to complex cochlear implant surgeries and skull base procedures.
              </p>
              
            </div>            
          </div>

  {/* end */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 border-t border-slate-100">

            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug">
                Advanced Diagnostic Facilities for ENT Conditions
              </h2>
              <div className="w-12 h-0.5 bg-teal-600 rounded" />
              <p className="text-slate-600 leading-relaxed text-md">
                Accurate diagnosis is the foundation of effective treatment. Dr.(Prof.) Dhirendra Singh kushwah's clinic is equipped with advanced diagnostic tools that make findings visual, transparent, and easy to understand for every patient.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mt-2">Video Endoscopy of the Ear, Nose and Throat</h3>
              <p className="text-slate-600 leading-relaxed text-md">
                Video endoscopy allows Dr.(Prof.) Dhirendra Singh kushwah to examine the ear canal, nasal passages, and throat with a high-definition camera in real time. Patients can view their own findings on screen, making it easier to understand the diagnosis and follow through with the recommended treatment plan.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mt-2">Allergy Testing — Blood Tests and Skin Prick Tests</h3>
              <p className="text-slate-600 leading-relaxed text-md">
                For patients suffering from chronic nasal congestion, sneezing, or ear-related symptoms triggered by allergens, detailed allergy testing is available. Both blood tests and skin prick tests are used to accurately identify specific triggers, enabling targeted management rather than guesswork.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mt-2">Snoring and Sleep Apnea Assessment</h3>
              <p className="text-slate-600 leading-relaxed text-md">
                Sleep-disordered breathing - including snoring and obstructive sleep apnea — is evaluated using high-end monitoring equipment. The assessment detects breathing irregularities during sleep and helps determine the severity of the condition, guiding decisions between medical management and surgical intervention.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mt-2">Specialised Balance Testing for Dizziness and Vertigo</h3>
              <p className="text-slate-600 leading-relaxed text-md">
                Patients experiencing recurrent dizziness, spinning sensations, or balance problems can undergo dedicated neuro-otological balance testing. These tests identify whether the cause is inner-ear related (peripheral) or neurological (central), ensuring the right treatment pathway is chosen from the outset.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[320px] md:min-h-[440px]">
              <FacilityImage
                src="/images/fwdupdatesontheentswebsite/drdhirendrasinghkushwah-ENT-Surgeon.png"
                alt="Advanced ENT Diagnostic and Surgical Equipment"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 border-t border-slate-100">
            <div className="relative rounded-2xl overflow-hidden shadow-md min-h-[320px] md:min-h-[440px] order-2 md:order-1">
              <FacilityImage
                src="/images/fwdupdatesontheentswebsite/facility9.png"
                alt="Cochlear Implant and Hearing Program"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 order-1 md:order-2">
              <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug">
                Advanced Surgical Facilities at Dr.(Prof.) Dhirendra Singh kushwah's ENT Clinic
              </h2>
              <div className="w-12 h-0.5 bg-teal-600 rounded" />
              <p className="text-slate-600 leading-relaxed text-md">
                Dr.(Prof.) Dhirendra Singh kushwah performs a wide range of ENT surgeries using advanced equipment and minimally invasive techniques - reducing risk, improving outcomes, and helping patients recover faster.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mt-2">Endoscopic Nose, Sinus and Skull Base Surgery</h3>
              <p className="text-slate-600 leading-relaxed text-md">
                For patients with chronic sinusitis, nasal polyps, deviated septum, or skull base tumours, functional endoscopic sinus surgery (FESS) and extended endoscopic skull base surgery are performed using state-of-the-art endoscopic systems. These minimally invasive techniques offer high precision, minimal blood loss, and faster recovery compared to traditional open surgery.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mt-2">Microscopic Ear Surgery</h3>
              <p className="text-slate-600 leading-relaxed text-md">
                Ear surgeries - including tympanoplasty, ossiculoplasty, mastoidectomy, and stapedotomy — are performed under high-magnification operating microscopes. This level of precision allows the surgeon to work on the delicate ossicles, eardrum, and middle ear structures safely, protecting hearing and minimising risk.
              </p>
              <h3 className="text-lg font-semibold text-slate-800 mt-2">Laser and Radiofrequency (Coblation) Surgery</h3>
              <p className="text-slate-600 leading-relaxed text-md">
                Modern laser and radiofrequency coblation technology enables bloodless, minimally traumatic surgery on soft tissue structures including the tonsils, adenoids, nasal turbinates, and soft palate. These techniques reduce post-operative pain, bleeding, and recovery time — making them especially suitable for children and adults who prefer a gentler surgical option.
              </p>
            </div>
          </div>

          <div className="py-10 border-t border-slate-100">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug mb-4">
              Cochlear Implant and Hearing Implant Programme
            </h2>
            <div className="w-12 h-0.5 bg-teal-600 rounded mb-6" />
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              Dr.(Prof.) Dhirendra Singh kushwah runs one of India's most established cochlear implant and auditory brainstem implant programmes, with over 700 successful implant recipients. The programme is supported by a multidisciplinary team of surgeons, audiologists, and speech-language therapists working together to deliver reliable outcomes from surgery through to full rehabilitation.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mt-4">Who Is This Programme For?</h3>
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              The cochlear implant programme is designed for children and adults with severe to profound sensorineural hearing loss who do not benefit adequately from conventional hearing aids. Early implantation in children, ideally before 18 months of age, leads to significantly better speech and language development outcomes.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mt-4">Implantable Hearing Devices Available</h3>
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              When traditional hearing aids are not sufficient, implantable hearing devices offer life-changing results. Dr.(Prof.) Dhirendra Singh kushwah provides access to the following options:
            </p>
            <div className="space-y-3 mb-4">
              <p className="text-slate-600 leading-relaxed text-md"><strong>BAHA (Bone-Anchored Hearing Aid):</strong> A surgically implanted device that bypasses the outer and middle ear by transmitting sound vibrations directly to the cochlea through the skull bone. Ideal for patients with conductive or mixed hearing loss, or single-sided deafness.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Bonebridge:</strong> A fully implantable bone conduction hearing system with no external skin-penetrating component, offering a cleaner aesthetic and reduced risk of infection compared to traditional BAHA.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>VSB (Vibrant Soundbridge):</strong> A middle ear implant that directly stimulates the ossicular chain or round window, suitable for patients with sensorineural, conductive, or mixed hearing loss who cannot use conventional aids.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Cochlear Implant (CI):</strong> An electronic device that bypasses damaged hair cells in the cochlea and directly stimulates the auditory nerve, restoring meaningful hearing in patients with severe to profound hearing loss.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Auditory Brainstem Implant (ABI):</strong> For patients in whom the cochlear nerve is absent or non-functional (such as those with neurofibromatosis type 2), an ABI provides electrical stimulation directly at the cochlear nucleus in the brainstem.</p>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mt-4">Post-Implant Rehabilitation and Programming</h3>
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              Receiving a cochlear implant is just the beginning. Long-term success depends on dedicated programming and auditory rehabilitation. Dr.(Prof.) Dhirendra Singh kushwah's team provides:
            </p>
            <div className="space-y-2 mb-4">
              <p className="text-slate-600 leading-relaxed text-md">Expert cochlear implant device mapping and programming</p>
              <p className="text-slate-600 leading-relaxed text-md">Auditory Verbal Therapy (AVT) for children, teaching them to listen and speak using their implant</p>
              <p className="text-slate-600 leading-relaxed text-md">Long-term auditory training to develop speech perception over time</p>
              <p className="text-slate-600 leading-relaxed text-md">Guidance and coaching for parents and caregivers on supporting their child's listening journey at home and in school</p>
            </div>
          </div>

          <div className="py-10 border-t border-slate-100">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug mb-4">
              Comprehensive Hearing Evaluation and Audiological Testing
            </h2>
            <div className="w-12 h-0.5 bg-teal-600 rounded mb-6" />
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              Accurate hearing assessment is essential before any treatment decision is made. The clinic offers a full range of audiological tests for newborns, children, and adults.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mt-4">Hearing Tests Offered</h3>
            <div className="space-y-3 mb-4">
              <p className="text-slate-600 leading-relaxed text-md"><strong>Pure Tone Audiogram (PTA):</strong> The standard hearing test that measures the softest sounds a person can hear across a range of frequencies, producing an audiogram that classifies the type and degree of hearing loss.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Speech Audiogram:</strong> Evaluates how well a person can hear and understand speech at different volume levels — essential for understanding real-world hearing ability.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Impedance Testing (Tympanometry):</strong> Measures the movement of the eardrum and checks for fluid in the middle ear, Eustachian tube dysfunction, or ossicular chain problems.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Auditory Brainstem Response (ABR):</strong> Records the brain's electrical response to sounds — used for hearing assessment in newborns, infants, and patients who cannot cooperate with standard tests.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Auditory Steady-State Response (ASSR):</strong> Provides frequency-specific hearing thresholds — particularly useful in young children and for planning cochlear implant candidacy.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Otoacoustic Emissions (OAE):</strong> A quick, non-invasive test that checks the function of the outer hair cells in the cochlea — a standard component of universal newborn hearing screening.</p>
              <p className="text-slate-600 leading-relaxed text-md"><strong>Newborn Hearing Screening:</strong> Early detection of hearing loss at birth is critical. The clinic offers OAE and ABR-based newborn screening to identify hearing loss before a child reaches three months of age — maximising the window for early intervention.</p>
            </div>
          </div>

          <div className="py-10 border-t border-slate-100">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug mb-4">
              Speech and Language Therapy
            </h2>
            <div className="w-12 h-0.5 bg-teal-600 rounded mb-6" />
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              Hearing well is only part of communication. Dr.(Prof.) Dhirendra Singh kushwah's clinic offers holistic speech and language therapy services delivered by skilled, experienced pathologists — supporting patients of all ages from early childhood through adulthood.
            </p>
            <h3 className="text-lg font-semibold text-slate-800 mt-4">Conditions Treated by Speech-Language Pathologists</h3>
            <div className="space-y-2 mb-4">
              <p className="text-slate-600 leading-relaxed text-md">Articulation and phonological disorders (unclear or delayed speech sounds)</p>
              <p className="text-slate-600 leading-relaxed text-md">Stuttering and fluency difficulties</p>
              <p className="text-slate-600 leading-relaxed text-md">Language delays and disorders in children</p>
              <p className="text-slate-600 leading-relaxed text-md">Voice disorders including hoarseness, vocal nodules, and voice fatigue</p>
              <p className="text-slate-600 leading-relaxed text-md">Neurological communication disorders (post-stroke, Parkinson's, TBI)</p>
              <p className="text-slate-600 leading-relaxed text-md">Feeding and swallowing difficulties (dysphagia) in children and adults</p>
              <p className="text-slate-600 leading-relaxed text-md">Autism-related communication challenges</p>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mt-4">Post-Cochlear Implant Speech Therapy</h3>
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              Children and adults who receive cochlear implants require dedicated speech therapy to maximise the benefit of their device. The therapy programme includes Auditory Verbal Therapy (AVT), spoken language development, phonics and reading readiness for children, and communication strategies for adults transitioning back to work or social environments.
            </p>
          </div>

          <div className="py-10 border-t border-slate-100">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug mb-4">
              Why Choose Dr. Dhirendra Singh kushwah for ENT Treatment in New Delhi?
            </h2>
            <div className="w-12 h-0.5 bg-teal-600 rounded mb-6" />
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              Dr.(Prof.) Dhirendra Singh kushwah is an otorhinolaryngologist with over 25 years of clinical and surgical experience. He completed his MBBS from Jiwaji University, Gwalior (1999) and his MS (ENT) from Rani Durgawati University, Jabalpur (2005). He is fluent in English and Hindi and is widely known for his compassionate care, tireless work ethic, and genuine commitment to each patient's recovery.
            </p>
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              His clinics serve patients from across Delhi, NCR, and India — offering world-class ENT care in an accessible, patient-friendly setting.
            </p>
            <p className="text-slate-600 leading-relaxed text-md font-semibold mb-2">What sets Dr.(Prof.) Dhirendra Singh kushwah apart:</p>
            <div className="space-y-2">
              <p className="text-slate-600 leading-relaxed text-md">Over 700 successful cochlear and auditory brainstem implant recipients</p>
              <p className="text-slate-600 leading-relaxed text-md">Minimally invasive surgical approach across all procedures</p>
              <p className="text-slate-600 leading-relaxed text-md">Transparent diagnosis using video endoscopy — patients see their own findings</p>
              <p className="text-slate-600 leading-relaxed text-md">Multidisciplinary team covering surgery, audiology, and speech therapy under one roof</p>
              <p className="text-slate-600 leading-relaxed text-md">Available in English and Hindi; accessible to patients from all backgrounds</p>
              <p className="text-slate-600 leading-relaxed text-md">Personally reachable and committed to being available for patients at any time</p>
            </div>
          </div>

          <FaqAccordion faqItems={faqItems} />

          <div className="py-10 border-t border-slate-100 mt-6">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 leading-snug mb-4">
              Book an Appointment with Dr.(Prof.) Dhirendra Singh kushwah
            </h2>
            <div className="w-12 h-0.5 bg-teal-600 rounded mb-6" />
            <p className="text-slate-600 leading-relaxed text-md mb-4">
              If you or a loved one is experiencing any ear, nose, throat, hearing, or balance-related concern, do not delay seeking expert care. Dr.(Prof.) Dhirendra Singh kushwah and his team are available to guide you from accurate diagnosis through to complete recovery.
            </p>
            <p className="text-slate-600 leading-relaxed text-md mb-2">
            <b>Call or WhatsApp</b>: +91-9311449825 <b>Email</b>: drdhirendrasinghent@gmail.com
            </p>
            <p className="text-slate-600 leading-relaxed text-md mb-2">
             <b>CR Park Clinic:</b> J-1981, Near Market No. 1, Below ICICI Bank, Bipin Chandra Pal Marg, CR Park, New Delhi – 110019
            </p>
            <p className="text-slate-600 leading-relaxed text-md mb-2">
              <b>Jasola Vihar:</b> ORL International Group of Hospitals, Plot no. 89, Pocket 1, Jasola Vihar, New Delhi - 110025
            </p>
            <p className="text-slate-600 leading-relaxed text-md">
              <b>Arjun Nagar Clinic:</b> 19-C, Arjun Nagar, Safdarjung Enclave, New Delhi – 110029
            </p>
          </div>

        </div>
      </section>

      <section className="py-10 px-4 md:px-8 bg-teal-600">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-white">
              Ready to Experience World-Class ENT Care?
            </h2>
            <p className="text-teal-100 text-sm mt-1">
              Book a consultation with Dr. Dhirendra Singh kushwah today.
            </p>
          </div>
          <a
            href="tel:+919311449825"
            className="flex-shrink-0 bg-white text-teal-700 font-semibold px-8 py-3 shadow hover:bg-teal-50 transition-colors text-sm rounded"
          >
            Book Your Visit Today
          </a>
        </div>
      </section>
    </>
  );
}