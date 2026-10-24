"use client"

import { useState } from "react"

export default function ChatForm(){

  const [form,setForm] = useState({
    name:"",
    phone:"",
    city:"",
    department:"",
    message:""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      const res = await fetch("/api/call-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
  
      let data = await res.json();
  
      if (data.success) {
        alert("Thank you! Our team will contact you soon.");
        setForm({
          name: "",
          phone: "",
          city: "",
          department: "",
          message: ""
        });
      }
    } catch (err) {
      alert("Network error");
    }
  
    setLoading(false);
  };
  const inputStyle = "w-full !border !border-slate-200 !rounded-lg !p-3 !my-2 !text-sm !bg-slate-50/50 focus:!bg-white focus:!ring-2 focus:!ring-teal-600/20 focus:!outline-none !transition-all";

  return(
    <form onSubmit={handleSubmit} className="!p-1 mx-auto w-full">

      <h4 className="!text-lg !font-bold !text-teal-900 !mb-4 !text-center">Request a Call Back</h4>
      
      <label htmlFor="name" className="hidden">Your Name</label>
      <input
        id="name"
        name="name"
        value={form.name}
        placeholder="Your Name"
        required
        onChange={handleChange}
        className={inputStyle}
      />

      <label htmlFor="phone" className="hidden">Phone Number</label>
      <input
        id="phone"
        name="phone"
        value={form.phone}
        placeholder="Phone Number"
        required
        onChange={handleChange}
        className={inputStyle}
      />

      <label htmlFor="city" className="hidden">City</label>
      <input
        id="city"
        name="city"
        value={form.city}
        placeholder="Your City"
        required
        onChange={handleChange}
        className={inputStyle}
      />

      <label htmlFor="departments" className="hidden">Department</label>
      <select
        id="departments"
        name="department"
        value={form.department}
        onChange={handleChange}
        className={inputStyle + " !cursor-pointer"}
      >
        <option value="">Select Department</option>
        <option>Ear (Otology)</option>
        <option>Nose (Rhinology)</option>
        <option>Throat (Laryngology)</option>
        <option>Cochlear Implant</option>
      </select>

      <label htmlFor="message" className="hidden">Your Message</label>
      <textarea
        id="message"
        name="message"
        value={form.message}
        placeholder="How can we help?"
        rows={2}
        onChange={handleChange}
        className={inputStyle + " !resize-none"}
      />

      {/* Forced button padding and layout */}
      <button 
        type="submit" 
        disabled={loading}
        className="!w-full !mt-4 !bg-teal-700 !text-white !font-bold !py-3.5 !px-6 !rounded-xl !shadow-md hover:!bg-teal-800 active:!scale-95 !transition-all !duration-200 disabled:!opacity-50"
      >
        {loading ? "Submitting..." : "Send Request →"}
      </button>

    </form>
  )
}