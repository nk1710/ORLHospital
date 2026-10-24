export default function EditCluster({params}){
const symptomsForm = [
    { name: "name", label: "Name", type: "text" },
    { name: "slug", label: "Slug", type: "text" },
  ];
  const conditionsForm = [
    { name: "name", label: "Name", type: "text" },
    { name: "slug", label: "Slug", type: "text" },
    { name: "description", label: "Description", type: "text" },
  ];
  const treatmentsForm = [
    { name: "name", label: "Name", type: "text" },
    { name: "slug", label: "Slug", type: "text" },
  ];
  const locationsForm = [
    { name: "city", label: "City", type: "text" },
    { name: "area", label: "Area", type: "text" },
    { name: "slug", label: "Slug", type: "text" },
  ];
  const handlesymptomsSubmit = () => fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const handleconditionsSubmit = () => fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const handletreatmentsSubmit = () => fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const handlelocationsSubmit = () => fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
    return(
        <div>
        <form>
        <input />
        <input />
        <input />
        <input />
        <input />
        </form>
        </div>
    )
}