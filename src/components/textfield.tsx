import type { ComponentProps } from "react";
import { cn } from "../libs/utils";
import CopyLink from ".././assets/images/icon-link-copied-to-clipboard.svg";

interface TextFieldProps extends ComponentProps<"input"> {
  error?: boolean;
  hasIcon: boolean;
  errorMessage?: string;
}

export default function TextField({
  className,
  hasIcon = true,
  error = false,
  errorMessage = "Can't be empty",
  ...props
}: TextFieldProps) {
  const inputClasses = cn(
    `w-full border border-gray-300 bg-white rounded-lg py-4 ${hasIcon? 'pl-10': 'pl-2'} pr-4 outline-none focus:border-purple-600 focus:shadow-lg focus:shadow-purple-600/20`,
    {
      "border-red-500 focus:border-red-500": error,
    },
    className
  );

  return (
    <div className="w-full md:w-120 p-0">
      <div className="relative">
        {/* Icon on the left */}
        {hasIcon && (
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <img src={CopyLink} alt="copied link icon" className="w-4 h-4" />
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
