export default function  SectionTitle ({title, subheading,textAlign="left"}){
    return (
    <div className={`text-${textAlign} mb-8`}>
    <h2 className="mb-2 font-bold text-teal-700">
      {title}
    </h2>
    <p className="text-slate-800">
      {subheading}
    </p>
  </div>
)}