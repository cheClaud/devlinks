import { Link } from "react-router";
import { cn } from "../libs/utils";
import type { JSX } from "react";

interface NavItemProps {
  isActive?: boolean;
  icon: JSX.Element;
  label: string;
  link: string;
}

export default function NavItem({
  isActive = false,
  label,
  icon,
  link,
}: NavItemProps) {
  return (
    <Link
      to={link}
      className={cn(
        "flex justify-center items-center px-4 py-2 gap-x-2 hover:text-purple-600",
        {
          "bg-gray-100 mr-4 px-6 py-4 rounded-lg gap-x-2 text-purple-600":
            isActive,
        }
      )}
    >
      {icon}
      <p className="text-preset-3-semibold hidden md:block">{label}</p>
    </Link>
  );
}
