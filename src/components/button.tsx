import type { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  console.log(variant);
  let customClassNames = "hover:cursor-pointer rounded-lg py-4 px-6 ";

  // when variant = primary
  // bgcolor purple 600
  // textcolor white
  if (variant === "primary") {
    customClassNames +=
      "bg-purple-600 hover:bg-purple-300 disabled:bg-purple-600/25 text-white";
  }

  // when variant = secondary
  // bgcolor transparent
  // textcolor purple 600
  // border purple 600
  if (variant === "secondary") {
    customClassNames +=
      "bg-transparent border border-purple-600 hover:bg-[#EFEBFF] disabled:opacity-25 text-purple-600";
  }

  customClassNames += " " + className;

  return (
    <button {...props} className={customClassNames}>
      {children}
    </button>
  );
}
