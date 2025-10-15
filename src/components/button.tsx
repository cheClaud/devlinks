import type { ComponentProps } from "react";

export default function Button({
  children,
  className,
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className={
        "bg-purple-600 hover:bg-purple-300 hover:cursor-pointer disabled:bg-purple-600/25 text-white rounded-lg py-4 px-6" +
        " " +
        className
      }
    >
      {children}
    </button>
  );
}
