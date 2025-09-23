import type { ReactElement } from "react";
import LargeLogo from "../../assets/images/logo-devlinks-large.svg";
import { Link } from "react-router";

interface AuthLayoutProps {
  children: ReactElement;
  headerTitle: string;
  headerSubtitle: string;
  footerCTA: string;
  footerCTALink: string;
  footerCTALinkLabel: string;
}

export default function AuthLayout({
  children,
  headerTitle,
  headerSubtitle,
  footerCTA,
  footerCTALink,
  footerCTALinkLabel,
}: AuthLayoutProps) {
  return (
    <div className="flex flex-col md:justify-center items-start md:items-center gap-y-16 md:gap-y-12 bg-gray-50 h-screen py-8 px-8">
      {/* Logo Container */}
      <img src={LargeLogo} alt="DevLinks Logo" className="h-10" />

      {/* Form Container */}
      <div className="p-0 md:p-10 md:bg-white rounded-xl w-full md:w-119">
        {/* Header */}
        <div className="pb-10 flex flex-col gap-2">
          <p className="text-preset-2 md:text-preset-1">{headerTitle}</p>
          <p className="text-preset-3 text-gray-500">{headerSubtitle}</p>
        </div>

        {/* Body */}
        {children}

        {/* Footer */}
        <div className="text-center text-preset-3 text-gray-500">
          <p className="md:inline">{footerCTA} </p>
          <Link to={footerCTALink} className="cursor-pointer text-purple-600">
            {footerCTALinkLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
