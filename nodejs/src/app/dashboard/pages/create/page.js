"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import EditorClient from "@/components/dashboard/BlogEditor";

export default function CreatePage() {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    condition_id: "",
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
  const pageType = [{id:0,type:'blog'},{id:1,type:'pillar'},{id:2,type:'location'},{id:3,type:'treatment'},{id:4,type:'tourism'}]

  const router = useRouter();

  useEffect(() => {
    fetch("/api/entities/conditions").then(r => r.json()).then(setConditions);
    fetch("/api/entities/locations").then(r => r.json()).then(setLocations);
  }, []);
  useEffect(() => {
    if (!form.title) return
    setForm({ ...form, slug: form.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "") })
  }, [form.title])

  useEffect(() => {
    if (!form.condition_id) {
      setSymptoms([]);
      setTreatments([]);
      return;
    }

    async function fetchRelations() {
      try {
        const res = await fetch(
          `/api/entities/condition-relations?condition_id=${form.condition_id}`
        );
        const data = await res.json();

        setSymptoms(data.symptoms || []);
        setTreatments(data.treatments || []);

        setForm(prev => ({
          ...prev,
          treatment_id: ""
        }));

      } catch (err) {
        console.error("Relation fetch error:", err);
      }
    }

    fetchRelations();
  }, [form.condition_id]);

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
    } catch (err){
      alert("Network error :",err);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-6xl mx-auto p-6 bg-white rounded-xl shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >

      <div className="space-y-1">
        <Label>Page Title</Label>
        <Input
          value={form.title}
          placeholder="Enter Page Title"
          onChange={e => setForm({ ...form, title: e.target.value })}
        />
      </div>
      <div className="grid grid-cols-2 gap-8">
      <div className="space-y-1 w-full">
      <Label>Slug</Label>
      <Input value={form.slug} placeholder="Enter Page Slug (URL Name)" onChange={e => setForm({ ...form, slug: e.target.value })} />
      </div>
      <div className="space-y-1 w-full">
      <Label>Page Type</Label>
      <Select
      value={form.page_type}
      className="w-full"
      onValueChange={value =>
        setForm(prev => ({ ...prev, page_type: value }))
      }
      >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Page Type" />
            </SelectTrigger>
            <SelectContent>
              {pageType.map(p => (
                <SelectItem key={p.id} value={p.id.toString()}>
                  {p.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
      </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="space-y-1">
          <Label>Condition</Label>
          <Select
            value={form.condition_id}
            onValueChange={value =>
              setForm(prev => ({ ...prev, condition_id: value }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select condition" />
            </SelectTrigger>
            <SelectContent>
              {conditions.map(c => (
                <SelectItem key={c.id} value={c.id.toString()}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label>Symptom</Label>
          <Select
            value={form.symptom_id}
            onValueChange={value =>
              setForm(prev => ({ ...prev, symptom_id: value }))
            }
            disabled={!form.condition_id}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={
                  form.condition_id
                    ? "Select symptom"
                    : "Select condition first"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {symptoms.map(s => (
                <SelectItem key={s.id} value={s.id.toString()}>
                  {s.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label>Treatment</Label>
          <Select
            value={form.treatment_id}
            onValueChange={value =>
              setForm(prev => ({ ...prev, treatment_id: value }))
            }
            disabled={!form.condition_id}
          >
            <SelectTrigger className="w-full">
              <SelectValue
                placeholder={
                  form.condition_id
                    ? "Select treatment"
                    : "Select condition first"
                }
              />
            </SelectTrigger>
            <SelectContent>
              {treatments.map(t => (
                <SelectItem key={t.id} value={t.id.toString()}>
                  {t.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label>Location</Label>
          <Select
            value={form.location_id}
            onValueChange={value =>
              setForm(prev => ({ ...prev, location_id: value }))
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map(l => (
                <SelectItem key={l.id} value={l.id.toString()}>
                  {l.area} ({l.city})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

      </div>

      <EditorClient
        value={form.body}
        onChange={(content) =>
            setForm(prev => ({ ...prev, body: content }))
          }
      />

      <Input
        placeholder="Meta title"
        value={form.meta_title}
        onChange={e => setForm({ ...form, meta_title: e.target.value })}
      />

      <Textarea
        placeholder="Meta description"
        value={form.meta_description}
        onChange={e => setForm({ ...form, meta_description: e.target.value })}
      />

      <Button type="submit" disabled={loading} className="w-full">
        <Plus size={18} />
        {loading ? "Creating..." : "Create Page"}
      </Button>

    </motion.form>
  );
}