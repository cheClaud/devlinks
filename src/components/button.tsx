import type { ComponentProps } from "react";
import { cn } from "../libs/utils";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const customClassNames = cn(
    "hover:cursor-pointer rounded-lg py-4 px-6",
    {
      "bg-purple-600 hover:bg-purple-300 disabled:bg-purple-600/25 text-white":
        variant === "primary",
      "bg-transparent border border-purple-600 hover:bg-[#EFEBFF] disabled:opacity-25 text-purple-600":
        variant === "secondary",
    },
    className
  );

  return (
    <button {...props} className={customClassNames}>
      {children}
    </button>
  );
}
