"use client";

export default function FormSelect({
  label,
  name,
  options = [],
  required,
  value = "",
  className = "",
  ...props
}) {
  return (
    <div className="w-full mb-4">
      <label>
        {label} {required && <span style={{ color: "#e74c3c" }}>*</span>}
      </label>
      <select
        name={name}
        id={name}
        value={value || ""}
        className={className || "h-[42px] w-full border border-slate-300 px-3 form-control rounded-lg"}
        required={required}
        {...props}
      >
        <option value="">Select {label}</option>
        {options && options.length > 0 && options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}