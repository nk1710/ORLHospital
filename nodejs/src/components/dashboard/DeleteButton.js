"use client";

import { useState } from "react";
import { Trash } from "lucide-react";

export default function DeleteButton({ entity, id }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Are you sure?")) return;
    setLoading(true);
    await fetch(`/api/entities/${entity}/${id}`, { method: "DELETE" });
    window.location.reload();
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="flex items-center gap-1 text-red-600 hover:text-red-800 disabled:opacity-50"
    >
      <Trash size={16} />
      {loading ? "Deleting..." : ""}
    </button>
  );
}