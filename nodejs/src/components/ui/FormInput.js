"use client";

export default function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value = "",
  ...props
}) {
  return (
    <div className="w-full mb-4">
      <label>
        {label} {required && <span style={{ color: "#e74c3c" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        placeholder={placeholder}
        required={required}
        className="h-[42px] w-full border border-slate-300 px-3 form-control rounded-lg"
        {...props}
      />
    </div>
  );
}