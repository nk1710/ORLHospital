"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, Phone, Mail, Building2, ShieldCheck, Check } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [settings, setSettings] = useState({
    doctorName: "Dr. (Prof.) Dhirendra Singh Kushwah",
    designation: "Senior ENT Specialist & Surgeon",
    experience: "25+ Years Experience",
    helpline: "+91-9311449825",
    email: "drdhirendrasinghent@gmail.com",
    jasolaTimings: "Mon - Sat: 9:30 AM - 3:30 PM",
    crParkTimings: "Mon, Wed, Fri: 4:30 PM - 7:30 PM",
    safdarjungTimings: "Tue, Thu, Sat: 4:00 PM - 7:00 PM",
    palwalTimings: "Sunday OPD: 10:00 AM - 2:00 PM",
    dhampurTimings: "Monthly Camp: 1st & 3rd Sunday",
  });

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Hospital & OPD Settings</h1>
        <p className="text-xs text-gray-500">
          Manage clinical hours, emergency contact numbers, and branch schedules
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Doctor Profile */}
        <Card className="rounded-2xl border-gray-200 bg-white">
          <CardHeader className="p-5 border-b border-gray-100">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <ShieldCheck size={16} className="text-teal-600" />
              Doctor & Chief Consultant Profile
            </CardTitle>
            <CardDescription className="text-xs">
              Primary physician credentials displayed across all digital touchpoints
            </CardDescription>
          </CardHeader>
          <CardContent className="p-5 grid sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="font-semibold text-gray-700 block mb-1">Doctor Name</label>
              <Input
                value={settings.doctorName}
                onChange={(e) => setSettings({ ...settings, doctorName: e.target.value })}
                className="text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">Clinical Designation</label>
              <Input
                value={settings.designation}
                onChange={(e) => setSettings({ ...settings, designation: e.target.value })}
                className="text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">Direct Phone / Helpline</label>
              <Input
                value={settings.helpline}
                onChange={(e) => setSettings({ ...settings, helpline: e.target.value })}
                className="text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">Official Email</label>
              <Input
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="text-xs"
              />
            </div>
          </CardContent>
        </Card>

        {/* Branch OPD Schedules */}
        <Card className="rounded-2xl border-gray-200 bg-white">
          <CardHeader className="p-5 border-b border-gray-100">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Clock size={16} className="text-teal-600" />
              Branch Consultation & OPD Timings
            </CardTitle>
            <CardDescription className="text-xs">
              Configure OPD schedules for each of the 5 hospital centres
            </CardDescription>
          </CardHeader>
          <CardContent className="p-5 space-y-3 text-xs">
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Jasola Vihar Hospital (Pocket 1, Living Style Mall)
              </label>
              <Input
                value={settings.jasolaTimings}
                onChange={(e) => setSettings({ ...settings, jasolaTimings: e.target.value })}
                className="text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                CR Park Clinic (J-1981, Market No. 1)
              </label>
              <Input
                value={settings.crParkTimings}
                onChange={(e) => setSettings({ ...settings, crParkTimings: e.target.value })}
                className="text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Arjun Nagar / Safdarjung Enclave Clinic
              </label>
              <Input
                value={settings.safdarjungTimings}
                onChange={(e) => setSettings({ ...settings, safdarjungTimings: e.target.value })}
                className="text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Palwal Hospital (Aasha Tower, Sohna Road)
              </label>
              <Input
                value={settings.palwalTimings}
                onChange={(e) => setSettings({ ...settings, palwalTimings: e.target.value })}
                className="text-xs"
              />
            </div>
            <div>
              <label className="font-semibold text-gray-700 block mb-1">
                Dhampur Hospital (RSM Tiraha, Moradabad Road)
              </label>
              <Input
                value={settings.dhampurTimings}
                onChange={(e) => setSettings({ ...settings, dhampurTimings: e.target.value })}
                className="text-xs"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center gap-3">
          <Button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white text-xs h-9 px-5">
            {saved ? (
              <span className="flex items-center gap-1.5 text-white">
                <Check size={14} /> Saved Successfully
              </span>
            ) : (
              "Save Settings"
            )}
          </Button>
          {saved && (
            <span className="text-xs text-emerald-600 font-semibold animate-fade-in">
              OPD settings updated!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
