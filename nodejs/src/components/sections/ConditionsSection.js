import Link from "next/link";

import {
  Ear,
  Volume2,
  Wind,
  Thermometer,
  Flower2,
  Mic,
  Activity,
  Compass,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";

const conditions = [
  {
    name: "Ear Infections",
    icon: Ear,
    href: "/conditions/ear-infections",
  },
  {
    name: "Hearing Loss",
    icon: Volume2,
    //href: "/conditions/hearing-loss",
    href: "/conditions/hearingloss",
  },
  {
    name: "Sinusitis",
    icon: Wind,
    //href: "/conditions/sinusitis",
    href: "/conditions/sinusitis",
  },
  {
    name: "Tonsillitis",
    icon: Thermometer,
    //href: "/conditions/tonsillitis",
    href: "/conditions/tonsillitis",
  },
  {
    name: "Allergies",
    icon: Flower2,
    //href: "/conditions/allergies",
    href: "/conditions/allergies",
  },
  {
    name: "Voice Disorders",
    icon: Mic,
    //href: "/conditions/voice-disorders",
    href: "/conditions/voice-disorders",
  },
  {
    name: "Nasal Blockage",
    icon: Activity,
    href: "/conditions/nasal-blockage",
    //href: "/conditions/ear-hearing",
  },
  {
    name: "Vertigo",
    icon: Compass,
    href: "/conditions/vertigo",
    //href: "/conditions/ear-hearing",
  },
];

export default function ConditionsSection() {
  return (
    <section className="py-6 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <SectionTitle
          title="ENT Conditions We Treat"
          subheading="Specialized diagnosis and treatment for ear, nose, and throat conditions using modern techniques."
        />

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">

          {conditions.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="group bg-white border border-slate-100 p-5 rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-400/10 mb-4 group-hover:bg-teal-900/20 transition">
                  <Icon className="text-teal-700" size={22} />
                </div>

                {/* TEXT */}
                <h3 className="font-medium text-sm leading-tight">
                  {item.name}
                </h3>

                {/* HOVER LINK */}
                <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition">
                  Learn more →
                </p>
              </Link>
            );
          })}

        </div>

      </div>
    </section>
  );
}