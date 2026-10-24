"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import EditorClient from "@/components/dashboard/BlogEditor";

export default function CreatePage() {
  const [form, setForm] = useState({
    title: "",
    condition_id: "",
    symptom_id: "",
    treatment_id: "",
    location_id: "",
    body: "",
    meta_title: "",
    meta_description: "",
  });

  const [conditions, setConditions] = useState([]);
  const [symptoms, setSymptoms] = useState([]);
  const [treatments, setTreatments] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    fetch("/api/entities/conditions").then(r=>r.json()).then(setConditions);
    fetch("/api/entities/symptoms").then(r=>r.json()).then(setSymptoms);
    fetch("/api/entities/treatments").then(r=>r.json()).then(setTreatments);
    fetch("/api/entities/locations").then(r=>r.json()).then(setLocations);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      router.push("/dashboard/pages");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-6xl mx-auto p-6 bg-white rounded-xl shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >

      {/* TITLE */}
      <div className="space-y-1">
        <Label htmlFor="title">Page Title</Label>
        <Input
          id="title"
          placeholder="Enter page title"
          value={form.title}
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
      </div>
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
      {/* CONDITION */}
      <div className="space-y-1">
        <Label>Condition</Label>
        <Select
        className="w-full"
          value={form.condition_id}
          onValueChange={value => setForm({ ...form, condition_id: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a condition" />
          </SelectTrigger>
          <SelectContent>
            {conditions.map(c => (
              <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* SYMPTOM */}
      <div className="space-y-1">
        <Label>Symptom</Label>
        <Select
        className="w-full"
          value={form.symptom_id}
          onValueChange={value => setForm({ ...form, symptom_id: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a symptom" />
          </SelectTrigger>
          <SelectContent>
            {symptoms.map(s => (
              <SelectItem key={s.id} value={s.id.toString()}>{s.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* TREATMENT */}
      <div className="space-y-1">
        <Label>Treatment</Label>
        <Select
        className="w-full"
          value={form.treatment_id}
          onValueChange={value => setForm({ ...form, treatment_id: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a treatment" />
          </SelectTrigger>
          <SelectContent>
            {treatments.map(t => (
              <SelectItem key={t.id} value={t.id.toString()}>{t.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* LOCATION */}
      <div className="space-y-1">
        <Label>Location</Label>
        <Select
          value={form.location_id}
          onValueChange={value => setForm({ ...form, location_id: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a location" />
          </SelectTrigger>
          <SelectContent>
            {locations.map(l => (
              <SelectItem key={l.id} value={l.id.toString()}>{l.area} ({l.city})</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      </div>

      {/* BODY */}
      <div className="space-y-1">
        <Label>Body</Label>
        <EditorClient placeholder="Write page content here..." value={form.body} onChange={e => setForm({ ...form, body: e.target.value })} />
      </div>

      {/* META TITLE */}
      <div className="space-y-1">
        <Label>Meta Title</Label>
        <Input
          placeholder="SEO meta title"
          value={form.meta_title}
          onChange={e => setForm({ ...form, meta_title: e.target.value })}
        />
      </div>

      {/* META DESCRIPTION */}
      <div className="space-y-1">
        <Label>Meta Description</Label>
        <Textarea
          placeholder="SEO meta description"
          value={form.meta_description}
          onChange={e => setForm({ ...form, meta_description: e.target.value })}
          className="h-24"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={loading}>
        <Plus size={18} />
        {loading ? "Creating..." : "Create Page"}
      </Button>
    </motion.form>
  );
}