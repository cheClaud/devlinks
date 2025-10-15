import React from "react";

interface InputFieldProps {
  type: "text" | "email" | "password" | "url";
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: string;
  iconAlt?: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function InputField({
  type,
  label,
  name,
  value,
  onChange,
  placeholder,
  icon,
  iconAlt,
  errorMessage,
  required = false,
  disabled = false,
}: InputFieldProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        {/* Icon on the left */}
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img
              src={icon}
              alt={iconAlt || `${label} icon`}
              className=""
            />
          </div>
        )}

        {/* Error message on the right */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <p
            className={`text-xs ${
              errorMessage ? "text-red-500" : "text-gray-400 invisible"
            }`}
          >
            {errorMessage || "Placeholder"}
          </p>
        </div>

        {/* Input field */}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`
            w-full pl-10 p-2 border rounded-lg
            ${icon ? "pl-10" : "pl-3"}
            ${errorMessage ? "border-red-500" : " border-gray-300"}
            ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
            focus:outline-none focus:border-purple-500
          `}
        />
      </div>
    </div>
  );
}
