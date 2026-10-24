"use client";

import { useState } from "react";

const initialState = {
  name: "",
  number: "",
  email: "",
  city: "",
  department: ""
};

export default function useFormHandler(type = "appointment") {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => setFormData(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/form-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, type }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Appointment submitted successfully!");
        resetForm();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      alert("Network error");
    }

    setLoading(false);
  };

  return {
    formData,
    loading,
    handleChange,
    handleSubmit,
    setFormData,
  };
}