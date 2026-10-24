import AsideAppointmentForm from "@/components/ui/AsideAppointmentForm";

export default function BlogLayout({ children }) {
  return (
    <section className="bg-gray-50 py-10 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* LEFT ARTICLE CONTENT */}
        <div className="md:col-span-2 space-y-6">
          {children}
        </div>

        {/* RIGHT FORM - STICKY FOR CONVERSIONS */}
        <aside className="md:col-span-1 md:sticky md:top-24 self-start">
          <AsideAppointmentForm />
        </aside>
      </div>
    </section>
  );
}