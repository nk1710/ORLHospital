import Link from "next/link";
import {
  Mic,
  Stethoscope,
  Activity,
  AlertCircle,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ShieldCheck,
  UserRound,
} from "lucide-react";

export const metadata = {
  title:
    "Voice Disorders: Causes, Symptoms, Diagnosis & Treatment | ENT Specialist in Delhi",
  description:
    "Learn about voice disorders, hoarseness, vocal cord problems, causes, symptoms, diagnosis and treatment. Consult Dr. Dhirendra Singh Kushwah, ENT Specialist in Delhi.",
  alternates: {
    canonical:
      "https://www.drdhirendrasinghkushwah.in/conditions/voice-disorders",
  },
};

const commonDisorders = [
  {
    title: "Hoarseness",
    description:
      "A change in voice quality that may make the voice sound rough, raspy, weak or breathy.",
    icon: Mic,
  },
  {
    title: "Vocal Cord Nodules",
    description:
      "Small lesions that can develop from repeated or excessive voice use and may affect normal voice production.",
    icon: Activity,
  },
  {
    title: "Vocal Cord Polyps",
    description:
      "Benign growths that can interfere with normal vocal cord vibration and cause persistent voice changes.",
    icon: Activity,
  },
  {
    title: "Vocal Cord Cysts",
    description:
      "Fluid-filled lesions that may affect vocal cord vibration and contribute to hoarseness or vocal fatigue.",
    icon: Activity,
  },
  {
    title: "Vocal Cord Paralysis",
    description:
      "Reduced or absent movement of one or both vocal cords that may affect voice, swallowing or breathing.",
    icon: Stethoscope,
  },
  {
    title: "Laryngitis",
    description:
      "Inflammation of the larynx that can temporarily affect the quality and strength of the voice.",
    icon: Mic,
  },
];

const symptoms = [
  "Persistent or recurrent hoarseness",
  "Weak or breathy voice",
  "Raspy or rough voice",
  "Voice fatigue",
  "Frequent voice breaks",
  "Change in pitch",
  "Difficulty projecting the voice",
  "Loss of voice",
  "Frequent throat clearing",
  "Throat discomfort while speaking",
];

const causes = [
  "Viral respiratory infections",
  "Laryngitis",
  "Excessive or prolonged voice use",
  "Frequent shouting or speaking loudly",
  "Vocal cord nodules",
  "Vocal cord polyps",
  "Vocal cord cysts",
  "Acid reflux or laryngopharyngeal reflux",
  "Smoking",
  "Allergies and chronic coughing",
  "Vocal cord paralysis",
  "Age-related changes",
];

const diagnosisPoints = [
  "Detailed medical and voice history",
  "Examination of the throat and neck",
  "Assessment of voice quality",
  "Examination of the larynx and vocal cords",
  "Laryngoscopy when clinically appropriate",
  "Additional investigations or imaging when required",
];

const treatments = [
  {
    title: "Voice Care & Modification",
    description:
      "Reducing vocal strain, avoiding unnecessary shouting and following appropriate voice-care measures may help selected voice problems.",
  },
  {
    title: "Medical Treatment",
    description:
      "Treatment may be directed toward an underlying infection, inflammation, reflux or another contributing condition when appropriate.",
  },
  {
    title: "Voice Therapy",
    description:
      "Speech and voice therapy may be recommended for selected patients to improve voice production and reduce harmful vocal habits.",
  },
  {
    title: "Treatment of Vocal Cord Lesions",
    description:
      "Certain vocal cord nodules, polyps or cysts may require specialist management and, in selected cases, a procedure or surgery.",
  },
  {
    title: "Management of Vocal Cord Paralysis",
    description:
      "Treatment depends on the underlying cause, severity and effect on voice, swallowing and breathing.",
  },
];

const voiceCareTips = [
  "Stay adequately hydrated",
  "Avoid unnecessary shouting",
  "Take regular voice breaks",
  "Avoid prolonged speaking when your voice is strained",
  "Avoid smoking",
  "Manage conditions that cause chronic coughing",
  "Use appropriate voice techniques if your profession depends heavily on your voice",
  "Seek medical evaluation for persistent or unexplained hoarseness",
];

const faqs = [
  {
    question: "What are voice disorders?",
    answer:
      "Voice disorders are problems that affect the quality, pitch, loudness or normal production of the voice. They may result from temporary inflammation, vocal strain, vocal cord lesions, nerve problems or other conditions affecting the larynx.",
  },
  {
    question: "What is the most common symptom of a voice disorder?",
    answer:
      "Hoarseness is one of the most common symptoms. Other symptoms can include a weak or breathy voice, voice fatigue, frequent voice breaks, changes in pitch and difficulty projecting the voice.",
  },
  {
    question: "When should I see an ENT doctor for hoarseness?",
    answer:
      "You should consider an ENT evaluation if hoarseness is persistent, recurrent or unexplained, especially when it occurs with difficulty swallowing, breathing problems, a neck lump, unexplained weight loss or other concerning symptoms.",
  },
  {
    question: "Can acid reflux cause voice problems?",
    answer:
      "Acid or laryngopharyngeal reflux can irritate structures around the larynx in some people and may contribute to symptoms such as hoarseness, throat clearing or throat discomfort.",
  },
  {
    question: "Can vocal cord nodules be treated?",
    answer:
      "Treatment depends on the cause and severity. Voice therapy and modification of harmful voice habits may help selected patients. Some lesions may require additional specialist treatment.",
  },
  {
    question: "Is every voice disorder treated with surgery?",
    answer:
      "No. Treatment depends on the underlying cause. Many voice problems can be managed with voice care, medical treatment or voice therapy. Surgery may be considered for selected structural problems.",
  },
  {
    question: "Can smoking affect the voice?",
    answer:
      "Smoking can irritate the larynx and is associated with several serious laryngeal conditions. Persistent voice changes in people who smoke should be evaluated by an ENT specialist.",
  },
  {
    question: "What tests are used to diagnose voice disorders?",
    answer:
      "Depending on the symptoms, an ENT specialist may perform a clinical examination and examine the larynx and vocal cords using appropriate visualization techniques. Additional tests may be recommended when clinically necessary.",
  },
];

export default function VoiceDisordersPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(4,47,46,0.6) 0%, rgba(2,6,23,0.95) 50%, rgba(15,23,42,1) 100%)" }} />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-300">
                <Mic className="h-4 w-4" />
                Voice & Laryngeal Care
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                Voice Disorders: Causes, Symptoms, Diagnosis & Treatment
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Voice disorders can affect the quality, strength, pitch or
                ability to produce your normal voice. Persistent hoarseness,
                voice fatigue, vocal changes or difficulty speaking may be
                related to problems involving the vocal cords, larynx or
                surrounding structures.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-7 py-3.5 font-bold text-white transition hover:bg-teal-500"
                >
                  <Calendar className="h-5 w-5" />
                  Book an ENT Consultation
                </Link>

                <Link
                  href="/conditions"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  View ENT Conditions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="rounded-2xl bg-white p-7 shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-50">
                  <Mic className="h-7 w-7 text-teal-700" />
                </div>

                <h2 className="mt-5 text-2xl font-bold text-slate-900">
                  Persistent Voice Changes?
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Persistent or unexplained changes in your voice deserve
                  appropriate ENT evaluation to identify the underlying cause.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Hoarseness",
                    "Voice fatigue",
                    "Weak or breathy voice",
                    "Voice changes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2 className="h-5 w-5 text-teal-600" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT IS VOICE DISORDER */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-teal-700">
                Understanding Voice Problems
              </span>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                What Are Voice Disorders?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                A voice disorder occurs when your voice sounds different from
                normal or becomes difficult to produce. The change may affect
                voice quality, pitch, loudness or endurance.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Voice problems may be temporary, such as those associated with
                an acute infection, or may be related to vocal cord lesions,
                excessive voice use, reflux, nerve problems or other conditions
                affecting the larynx.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-7 md:p-9">
              <h3 className="text-xl font-bold text-slate-900">
                Your voice may be affected by:
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Vocal cords",
                  "Larynx",
                  "Nerves controlling the voice",
                  "Voice-use habits",
                  "Inflammation",
                  "Reflux or irritation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* COMMON DISORDERS */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-700">
              Common Conditions
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Common Voice Disorders
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Voice problems can occur for many different reasons. Identifying
              the underlying cause is important for choosing appropriate
              treatment.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commonDisorders.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                    <Icon className="h-6 w-6 text-teal-700" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
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

      {/* SYMPTOMS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-teal-700">
                Signs & Symptoms
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                How Do You Know If You Have a Voice Disorder?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Voice disorders can present differently depending on the
                underlying cause. Some people notice a gradual change while
                others may experience a sudden loss or alteration of their
                voice.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {symptoms.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CAUSES */}
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-300">
              Possible Causes
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              What Causes Voice Disorders?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Voice changes can have many causes. A proper ENT assessment can
              help determine whether the problem is related to inflammation,
              vocal strain, structural changes, nerve problems or another
              underlying condition.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {causes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* DIAGNOSIS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-10 lg:grid-cols-2">

            <div className="rounded-3xl bg-teal-50 p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white">
                <Stethoscope className="h-7 w-7 text-teal-700" />
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                How Are Voice Disorders Diagnosed?
              </h2>

              <p className="mt-4 leading-8 text-slate-600">
                Diagnosis begins with understanding your symptoms, voice use
                and medical history. An ENT specialist may then examine the
                throat, larynx and vocal cords using appropriate techniques.
              </p>
            </div>

            <div className="space-y-3">
              {diagnosisPoints.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-sm font-bold text-teal-700">
                    {index + 1}
                  </div>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TREATMENT */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-700">
              Treatment Options
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Voice Disorder Treatment
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Treatment depends on the underlying cause, severity of symptoms
              and the effect of the condition on your voice, swallowing or
              breathing.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50">
                  <CheckCircle2 className="h-5 w-5 text-teal-700" />
                </div>

                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHEN TO SEE ENT */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 md:p-10">

            <div className="flex items-start gap-4">
              <AlertCircle className="mt-1 h-7 w-7 shrink-0 text-amber-700" />

              <div>
                <h2 className="text-3xl font-bold">
                  When Should You See an ENT Specialist?
                </h2>

                <p className="mt-4 leading-8 text-slate-700">
                  Persistent, recurrent or unexplained voice changes should not
                  simply be ignored. An ENT evaluation may help identify the
                  underlying cause.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Hoarseness that persists or repeatedly returns",
                "Frequent loss of voice",
                "Difficulty speaking for long periods",
                "Pain or discomfort while speaking",
                "Difficulty swallowing",
                "A neck lump",
                "Unexplained weight loss",
                "Breathing difficulty",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* VOICE CARE */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="grid gap-10 lg:grid-cols-2">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-teal-700">
                Prevention & Voice Care
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                How to Protect Your Voice
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Healthy voice habits can help reduce unnecessary vocal strain.
                People who use their voice professionally may benefit from
                additional voice-care guidance.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {voiceCareTips.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ILLUSTRATIVE CASES */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-700">
              Illustrative Examples
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Common Voice-Related Situations
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                <UserRound className="h-6 w-6 text-teal-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Professional Voice User
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A person who frequently uses their voice professionally may
                develop persistent hoarseness and vocal fatigue. Appropriate
                ENT assessment can help determine the likely cause and guide
                voice-management strategies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50">
                <Stethoscope className="h-6 w-6 text-teal-700" />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Persistent Hoarseness
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                A patient with ongoing voice changes may require an ENT and
                laryngeal evaluation to determine whether the symptoms are
                related to inflammation, vocal cord changes or another
                underlying condition.
              </p>
            </div>

          </div>

          <p className="mt-5 text-center text-sm text-slate-500">
            These are illustrative examples for educational purposes and do
            not represent individual patient outcomes.
          </p>

        </div>
      </section>

      {/* WHY DR KUSHWAH */}
      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-teal-300">
                Experienced ENT Care
              </span>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Why Choose Dr. Dhirendra Singh Kushwah?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Dr. Dhirendra Singh Kushwah is an experienced ENT specialist
                and surgeon providing comprehensive evaluation and treatment
                for ear, nose and throat conditions.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "25+ Years of Experience",
                "MBBS, MS (ENT)",
                "ENT Specialist & Surgeon",
                "Head & Neck Surgery Experience",
                "Comprehensive ENT Evaluation",
                "Patient-Focused Treatment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-300" />
                  <span className="text-sm font-medium text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">

          <div className="mb-10 text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-700">
              Frequently Asked Questions
            </span>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Voice Disorders FAQs
            </h2>
          </div>

         <div className="space-y-4">
  
</div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-teal-800 py-16 text-white" style={{ background: "linear-gradient(135deg, #115e59 0%, #0f766e 100%)" }}>
        <div className="mx-auto max-w-4xl px-4 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Experiencing Persistent Voice Changes?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-teal-50">
            Donot ignore persistent hoarseness, voice fatigue or unexplained
            changes in your voice. An appropriate ENT evaluation can help
            identify the underlying cause and determine the right treatment
            approach.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-teal-700 transition hover:bg-teal-50"
            >
              <Calendar className="h-5 w-5" />
              Book an ENT Consultation
            </Link>

            <Link
              href="/conditions"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              Explore ENT Conditions
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}