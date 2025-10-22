import type { ComponentProps, ReactElement } from "react";
import { cn } from "../libs/utils";

interface TextFieldProps extends ComponentProps<"input"> {
  error?: boolean;
  icon?: ReactElement;
  errorMessage?: string;
}

export default function TextField({
  className,
  icon,
  error = false,
  errorMessage = "Can't be empty",
  ...props
}: TextFieldProps) {
  const inputClasses = cn(
    `w-full border border-gray-300 bg-white rounded-lg py-4 ${
      icon ? "pl-10" : "pl-4"
    } pr-4 outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-purple-600/20`,
    {
      "border-red-500 focus:border-red-500": error,
    },
    className
  );

  return (
    <div className="w-full p-0">
      <div className="relative">
        {/* Icon on the left */}
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            {icon}
          </div>
        )}

        {/* Error message on the right */}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <p className="text-red-500 text-sm bg-white/90 pl-1 py-1">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Input field */}
        <input {...props} className={inputClasses} />
      </div>
    </div>
  );
}
