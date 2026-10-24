import { getPool } from "@/lib/db";
import EntityTable from "@/components/dashboard/EntityTable";
import fs from "fs";
import path from "path";

export const revalidate = 0;

async function getEntities() {
  const fallback = {
    conditions: [
      { id: 1, name: "Chronic Sinusitis", slug: "sinusitis" },
      { id: 2, name: "Eardrum Perforation", slug: "hearing-loss" },
      { id: 3, name: "Deviated Nasal Septum", slug: "nasal-polyps" },
      { id: 4, name: "Chronic Tonsillitis", slug: "tonsillitis" },
      { id: 5, name: "Benign Positional Vertigo", slug: "vertigo" },
    ],
    symptoms: [
      { id: 1, name: "Nasal Congestion & Blockage", slug: "nasal-blockage" },
      { id: 2, name: "Ear Discharge & Reduced Hearing", slug: "ear-discharge" },
      { id: 3, name: "Throat Pain & Difficulty Swallowing", slug: "throat-pain" },
      { id: 4, name: "Spinning Sensation / Dizziness", slug: "dizziness" },
      { id: 5, name: "Loud Snoring & Daytime Sleepiness", slug: "snoring" },
    ],
    treatments: [
      { id: 1, name: "Endoscopic Sinus Surgery (FESS)", slug: "fess-surgery" },
      { id: 2, name: "Tympanoplasty (Eardrum Repair)", slug: "tympanoplasty-surgery" },
      { id: 3, name: "Septoplasty & Turbinoplasty", slug: "septoplasty" },
      { id: 4, name: "Coblation Tonsillectomy", slug: "tonsillectomy-surgery" },
      { id: 5, name: "Epley Repositioning Maneuver", slug: "epley-maneuver" },
    ],
    locations: [
      { id: 1, city: "New Delhi", area: "Jasola Vihar", slug: "jasola" },
      { id: 2, city: "New Delhi", area: "CR Park", slug: "cr-park" },
      { id: 3, city: "New Delhi", area: "Arjun Nagar / Safdarjung", slug: "arjun-nagar" },
      { id: 4, city: "Haryana", area: "Palwal", slug: "palwal" },
      { id: 5, city: "Uttar Pradesh", area: "Dhampur", slug: "dhampur" },
    ],
  };

  try {
    const file = path.resolve(process.cwd(), "data", "entities.json");
    if (fs.existsSync(file)) {
      const data = JSON.parse(fs.readFileSync(file, "utf-8"));
      Object.assign(fallback, data);
    }
  } catch (e) {}

  try {
    const pool = getPool();
    const [conditions] = await pool.execute("SELECT * FROM conditions ORDER BY id DESC");
    const [symptoms] = await pool.execute("SELECT * FROM symptoms ORDER BY id DESC");
    const [treatments] = await pool.execute("SELECT * FROM treatments ORDER BY id DESC");
    const [locations] = await pool.execute("SELECT * FROM locations ORDER BY id DESC");

    return {
      conditions: conditions.length ? conditions : fallback.conditions,
      symptoms: symptoms.length ? symptoms : fallback.symptoms,
      treatments: treatments.length ? treatments : fallback.treatments,
      locations: locations.length ? locations : fallback.locations,
    };
  } catch (err) {
    return fallback;
  }
}

export default async function EntitiesPage() {
  const { conditions, symptoms, treatments, locations } = await getEntities();

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      {/* CONDITIONS */}
      <EntityTable
        title="Conditions"
        data={conditions}
        columns={["ID", "Name", "Slug"]}
        entity="conditions"
        keys={["id", "name", "slug"]}
      />

      {/* SYMPTOMS */}
      <EntityTable
        title="Symptoms"
        data={symptoms}
        columns={["ID", "Name", "Slug"]}
        entity="symptoms"
        keys={["id", "name", "slug"]}
      />

      {/* TREATMENTS */}
      <EntityTable
        title="Treatments"
        data={treatments}
        columns={["ID", "Name", "Slug"]}
        entity="treatments"
        keys={["id", "name", "slug"]}
      />

      {/* LOCATIONS */}
      <EntityTable
        title="Locations"
        data={locations}
        columns={["ID", "City", "Area", "Slug"]}
        entity="locations"
        keys={["id", "city", "area", "slug"]}
      />
    </div>
  );
}
