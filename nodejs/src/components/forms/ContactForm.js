"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useFormHandler from "@/hooks/useFormHandler";
import FormInput from "../ui/FormInput";
import FormSelect from "../ui/FormSelect";
import { formFields } from "@/lib/formConfig";
import FormLoader from "../ui/FormLoader";

export default function ContactForm() {
  const { formData, handleChange, handleSubmit, loading } = useFormHandler("appointment");

  return (
    <div className="w-full max-w-md mx-auto">
      <FormLoader open={loading} />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-2xl rounded-2xl border-none">
          <CardContent className="p-6 space-y-5">
            <div className="text-center space-y-1">
              <h3 className="text-xl font-bold">Book Appointment</h3>
              <p className="text-sm text-slate-500">Quick & easy booking</p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {formFields.map((field, i) => {
                if (field.type === "input") {
                  return (
                    <FormInput
                      key={i}
                      label={field.label}
                      name={field.name}
                      type={field.typeAttr || "text"}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required={field.required}
                      maxLength={field.maxLength}
                      pattern={field.pattern}
                    />
                  );
                }

                if (field.type === "select") {
                  return (
                    <FormSelect
                      key={i}
                      label={field.label}
                      name={field.name}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      options={field.options}
                      className="w-full h-10 pl-10 pr-3 rounded-xl border border-slate-200 text-slate-900 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                    />
                  );
                }

                return null;
              })}

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-10 bg-[#0d9488] hover:bg-[#0f766e] rounded-xl text-base transition-all duration-300"
              >
                {loading ? "Submitting..." : "Book Appointment"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}