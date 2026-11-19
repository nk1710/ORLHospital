import Link from "next/link";
import {
  Wind,
  Stethoscope,
  Activity,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  UserRound,
  Search,
  HeartPulse,
} from "lucide-react";

export const metadata = {
  title:
    "Nasal Blockage: Causes, Symptoms & Treatment | ENT Specialist in Delhi",
  description:
    "Learn about nasal blockage, common causes, symptoms, diagnosis and treatment options. Consult Dr. Dhirendra Singh Kushwah, experienced ENT specialist and surgeon in Delhi.",
  alternates: {
    canonical: "https://www.drdhirendrasinghkushwah.com/conditions/nasal-blockage",
  },
};

const faqs = [
  {
    question: "What is nasal blockage?",
    answer:
      "Nasal blockage, also called nasal obstruction, occurs when airflow through one or both nostrils becomes restricted. It may be temporary due to a cold or allergy or may persist because of conditions such as a deviated nasal septum, enlarged turbinates, nasal polyps or chronic sinus problems.",
  },
  {
    question: "What are the common causes of nasal blockage?",
    answer:
      "Common causes include allergies, common cold, sinusitis, deviated nasal septum, enlarged turbinates, nasal polyps and other structural problems inside the nose. In some cases, more than one condition can contribute to obstruction.",
  },
  {
    question: "Can a deviated nasal septum cause permanent nasal blockage?",
    answer:
      "Yes. A significantly deviated nasal septum can narrow one or both nasal passages and cause persistent difficulty breathing through the nose. If symptoms are significant and do not improve with appropriate medical treatment, an ENT specialist may evaluate whether surgery is appropriate.",
  },
  {
    question: "Is nasal blockage related to sinusitis?",
    answer:
      "Nasal blockage is a common symptom of sinusitis. Inflammation and swelling of the nasal and sinus lining can reduce airflow and interfere with normal sinus drainage. However, not every case of nasal blockage is caused by sinusitis.",
  },
  {
    question: "Can nasal blockage affect sleep?",
    answer:
      "Yes. Difficulty breathing through the nose can contribute to mouth breathing, snoring and disturbed sleep. Persistent nighttime nasal obstruction should be evaluated, particularly when it is associated with loud snoring, pauses in breathing or excessive daytime tiredness.",
  },
  {
    question: "When should I see an ENT doctor for nasal blockage?",
    answer:
      "You should consider an ENT consultation if nasal blockage persists, repeatedly returns, affects sleep or exercise, is mainly present on one side, causes recurrent sinus symptoms, or is associated with nosebleeds, reduced smell or facial pressure.",
  },
];

export default function NasalBlockagePage() {
  return (
    <main className="bg-white text-slate-800">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.16),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300">
                <Wind className="h-4 w-4" />
                Nasal & Breathing Care
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Nasal Blockage: Causes, Symptoms, Treatment & When to See an
                ENT Doctor
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Persistent nasal blockage can make breathing, sleeping and
                everyday activities difficult. Understanding the underlying
                cause is important because nasal obstruction may result from
                allergies, sinus disease or structural problems inside the
                nose.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-400"
                >
                  <Calendar className="h-5 w-5" />
                  Book an ENT Consultation
                </Link>

                <Link
                  href="#symptoms"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Learn More
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300">
                  <Wind className="h-9 w-9" />
                </div>

                <h2 className="text-2xl font-bold">
                  Better Nasal Breathing Starts With the Right Diagnosis
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  Nasal obstruction can have several different causes. An ENT
                  evaluation helps identify whether the problem is related to
                  the nasal septum, turbinates, allergies, sinus disease,
                  polyps or another condition.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    "Nasal obstruction evaluation",
                    "Deviated septum assessment",
                    "Sinus & allergy evaluation",
                    "Nasal breathing treatment",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl bg-white/5 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                      <span className="text-sm text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT IS NASAL BLOCKAGE */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-700">
                <Activity className="h-5 w-5" />
                Understanding the Condition
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                What Is Nasal Blockage?
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Nasal blockage or nasal obstruction occurs when air cannot move
                freely through the nasal passages. The obstruction may affect
                one nostril or both and can be temporary or persistent.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                A blocked nose can develop because of inflammation, swelling,
                excessive mucus or structural narrowing within the nose.
                Identifying the underlying cause is important because
                treatment depends on what is causing the obstruction.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Persistent nasal obstruction should not always be treated as
                simple congestion. Structural conditions such as a deviated
                nasal septum or enlarged turbinates may require specialist
                assessment.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  {
                    icon: Wind,
                    title: "Restricted Airflow",
                    text: "Difficulty moving air comfortably through the nose.",
                  },
                  {
                    icon: HeartPulse,
                    title: "Poor Sleep",
                    text: "Nasal obstruction may contribute to mouth breathing and snoring.",
                  },
                  {
                    icon: Activity,
                    title: "Reduced Smell",
                    text: "Inflammation or obstruction can affect the sense of smell.",
                  },
                  {
                    icon: Stethoscope,
                    title: "ENT Evaluation",
                    text: "Persistent symptoms may require examination by an ENT specialist.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <Icon className="h-7 w-7 text-teal-600" />

                      <h3 className="mt-4 font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMMON CAUSES */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 flex justify-center">
              <Search className="h-8 w-8 text-teal-600" />
            </div>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Common Causes of Nasal Blockage
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Nasal obstruction can result from several conditions. A proper
              ENT examination helps determine the cause and the most suitable
              treatment approach.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Deviated Nasal Septum",
                text: "A deviation of the nasal septum can narrow the nasal airway and make breathing difficult, particularly on one side.",
              },
              {
                title: "Allergic Rhinitis",
                text: "Allergies can cause swelling of the nasal lining, sneezing, congestion and persistent nasal obstruction.",
              },
              {
                title: "Sinusitis",
                text: "Inflammation of the nose and sinuses can cause congestion, facial pressure, mucus and difficulty breathing.",
              },
              {
                title: "Enlarged Turbinates",
                text: "Swollen turbinates can reduce the available space inside the nasal passages and contribute to chronic obstruction.",
              },
              {
                title: "Nasal Polyps",
                text: "Nasal polyps are soft growths associated with chronic inflammation and may cause blockage and reduced smell.",
              },
              {
                title: "Common Cold",
                text: "Viral infections can temporarily cause swelling and mucus production, leading to a blocked nose.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Wind className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
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

      {/* SYMPTOMS */}
      <section id="symptoms" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-700">
                <AlertCircle className="h-5 w-5" />
                Signs & Symptoms
              </div>

              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Symptoms of Nasal Blockage
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Symptoms can vary depending on the underlying cause and whether
                the obstruction is temporary or persistent.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Difficulty breathing through the nose",
                "Blocked or stuffy nose",
                "Mouth breathing",
                "Snoring",
                "Reduced sense of smell",
                "Frequent nasal congestion",
                "Facial pressure or discomfort",
                "Postnasal drip",
                "Recurrent sinus symptoms",
                "Poor sleep due to nasal obstruction",
              ].map((symptom) => (
                <div
                  key={symptom}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="bg-slate-950 py-20 text-white lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <Stethoscope className="mx-auto h-9 w-9 text-teal-400" />

            <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
              How Is Nasal Blockage Diagnosed?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Diagnosis focuses on identifying whether the obstruction is
              caused by inflammation, allergy, sinus disease or a structural
              problem inside the nose.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Medical History",
                text: "Your symptoms, duration, triggers, sleep problems and previous treatments are reviewed.",
              },
              {
                number: "02",
                title: "ENT Examination",
                text: "The nose and surrounding structures are examined to identify possible causes of obstruction.",
              },
              {
                number: "03",
                title: "Nasal Evaluation",
                text: "Where appropriate, detailed nasal assessment may help identify structural or inflammatory problems.",
              },
              {
                number: "04",
                title: "Imaging / Tests",
                text: "Additional tests or imaging may be recommended when clinically necessary.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="text-sm font-bold text-teal-400">
                  {item.number}
                </span>

                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TREATMENT */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Nasal Blockage Treatment
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Treatment depends on the cause, severity and duration of nasal
              obstruction. Not every patient requires surgery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Medical Treatment",
                text: "Depending on the cause, treatment may include medicines or nasal therapies to control inflammation, allergy symptoms or infection.",
              },
              {
                title: "Allergy Management",
                text: "Identifying and reducing exposure to relevant triggers can help control allergy-related nasal obstruction.",
              },
              {
                title: "Sinus Treatment",
                text: "When sinus inflammation contributes to obstruction, appropriate medical management can help improve nasal airflow and sinus drainage.",
              },
              {
                title: "Septal Surgery",
                text: "For significant structural obstruction caused by a deviated septum, septoplasty may be considered after specialist evaluation.",
              },
              {
                title: "Turbinate Treatment",
                text: "Persistently enlarged turbinates may sometimes require procedural treatment when appropriate medical therapy does not provide adequate relief.",
              },
              {
                title: "Endoscopic Procedures",
                text: "Selected patients with chronic sinus or nasal conditions may benefit from minimally invasive endoscopic treatment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">
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

      {/* WHEN TO SEE ENT */}
      <section className="bg-teal-50 py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="rounded-3xl border border-teal-100 bg-white p-8 shadow-sm lg:p-12">

            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                <AlertCircle className="h-7 w-7" />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  When Should You See an ENT Doctor?
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Occasional nasal congestion is common. However, persistent
                  or recurrent obstruction deserves specialist evaluation.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Nasal blockage lasts for several weeks",
                "One nostril remains consistently blocked",
                "Breathing difficulty affects sleep",
                "You frequently breathe through your mouth",
                "You have recurrent sinus symptoms",
                "Your sense of smell has reduced",
                "Nasal blockage affects daily activities",
                "Symptoms repeatedly return despite treatment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* VOICE / NASAL CARE */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Tips to Support Better Nasal Breathing
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                While treatment should address the underlying cause, some
                healthy habits can support nasal and respiratory health.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Stay adequately hydrated.",
                  "Avoid known allergy triggers whenever possible.",
                  "Keep indoor environments clean and reduce exposure to dust.",
                  "Follow prescribed nasal medicines correctly.",
                  "Avoid prolonged self-medication with decongestant nasal sprays.",
                  "Seek ENT evaluation for persistent or recurrent obstruction.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white lg:p-10">
              <ShieldCheck className="h-10 w-10 text-teal-400" />

              <h3 className="mt-6 text-2xl font-bold">
                Avoid Ignoring Persistent Nasal Obstruction
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Long-standing nasal blockage may affect sleep, breathing,
                smell and quality of life. The right treatment starts with
                identifying the reason behind the obstruction.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-teal-400 hover:text-teal-300"
              >
                Schedule an ENT Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* WHY DR KUSHWAH */}
      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                <UserRound className="h-8 w-8" />
              </div>

              <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Why Choose Dr. Dhirendra Singh Kushwah for Nasal Problems?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Dr. (Prof.) Dhirendra Singh Kushwah is an experienced ENT
                specialist and surgeon in Delhi with expertise in nasal,
                sinus, endoscopic and related ENT conditions.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                His approach focuses on identifying the underlying cause of
                symptoms and selecting an appropriate treatment plan based on
                the patient's individual condition.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "25+ Years of Experience",
                  "ENT Specialist & Surgeon",
                  "Endoscopic Sinus Expertise",
                  "Personalized Treatment Planning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="h-5 w-5 text-teal-600" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white lg:p-10">
              <Stethoscope className="h-10 w-10 text-teal-400" />

              <h3 className="mt-6 text-2xl font-bold">
                Comprehensive ENT & Nasal Care
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                Evaluation and management of nasal obstruction, sinus
                conditions, allergies, deviated nasal septum and other
                conditions affecting nasal breathing.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-6 py-3.5 font-semibold text-white transition hover:bg-teal-400"
              >
                Book Appointment
                <Calendar className="h-5 w-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions About Nasal Blockage
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Answers to common questions about nasal obstruction, its causes
              and treatment.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  <span>{faq.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-50 text-xl text-teal-700 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <Wind className="mx-auto h-10 w-10 text-teal-400" />

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Having Persistent Nasal Blockage?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Find out what may be causing your nasal obstruction and discuss
            suitable treatment options with an experienced ENT specialist in
            Delhi.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-7 py-4 font-semibold text-white transition hover:bg-teal-400"
          >
            Book an ENT Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>

        </div>
      </section>

    </main>
  );
}