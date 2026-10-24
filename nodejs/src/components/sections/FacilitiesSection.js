import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const facilities = [
  {
    title: "Advanced ENT Diagnostics",
    desc: "Endoscopy, audiometry & precise evaluation tools",
  },
  {
    title: "Microsurgery & Modern OT",
    desc: "Equipped for minimally invasive ENT procedures",
  },
  {
    title: "Experienced ENT Specialists",
    desc: "Expert care with years of clinical experience",
  },
  {
    title: "Emergency & Same-Day Care",
    desc: "Quick response for urgent ENT conditions",
  },
  {
    title: "Patient-Centered Approach",
    desc: "Personalized treatment with compassionate care",
  },
];

export default function FacilitiesSection() {
  return (
    <section className="py-6 md:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/img66.jpg"
              alt="ENT Hospital Facility"
              width={500}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>

          {/* FLOATING BADGE */}
          <div className="absolute -bottom-6 left-6 bg-white shadow-md rounded-xl px-4 py-3">
            <p className="font-semibold">Trusted Care</p>
            <p className="text-slate-500">
              Modern infrastructure & expert team
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          
          <SectionTitle title={'Advanced Facilities for Better Outcomes'} subheading={'We combine modern infrastructure with expert care to ensure accurate diagnosis, effective treatment, and patient comfort.'}/>

          {/* FEATURES GRID */}
          <div className="space-y-4">
            {facilities.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:shadow-md transition"
              >
                <div className="mt-1">
                  <CheckCircle2 className="text-teal-600" size={20} />
                </div>

                <div>
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {/* <button className="mt-8 px-6 py-3 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition">
            Explore Our Services
          </button> */}
        </div>

      </div>
    </section>
  );
}