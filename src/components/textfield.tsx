import type { ComponentProps } from "react";
import { cn } from "../libs/utils";
import CopyLink from '.././assets/images/icon-link-copied-to-clipboard.svg'

interface TextFieldProps extends ComponentProps<"input"> {
  error?: boolean;
  errorMessage?: string;
}

export default function TextField({
  className,
  error = false,
  errorMessage = "Can't be empty",
  ...props
}: TextFieldProps) {


  const inputClasses = cn(
    "w-full border border-gray-300 rounded-lg py-4 pl-10 pr-20",
    {
      "border-red-500 focus:border-red-500": error,
      "focus:border-[#633CFF]": !error,
    },
    className
  );

  return (
    <div className="w-120  p-0 mb-6 mx-16">
      <div className="relative">
        {/* Icon on the left */}

        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src={CopyLink} alt="copied link icon" className="w-4 h-4" />
        </div>

        {/* Error message on the right */}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <p className="text-red-500 text-sm">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Input field */}
        <input {...props} className={inputClasses} placeholder="" />
      </div>
    </div>
  );
}
