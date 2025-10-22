// import EmptyIllustration from "../assets/images/illustration-empty.svg";

import PhoneMockupIcon from "../icons/phone-mockup-icon.tsx";
import MainNav from "../nav/main-nav.tsx";
import type { ReactNode } from "react";

interface DashLayoutProps {
  children: ReactNode;
}
export default function DashLayout({ children }: DashLayoutProps) {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 p-0">
      <MainNav />

      {/* main container*/}
      <main className="flex h-[calc(100vh-120px)] flex-1 bg-gray-50 p-4 md:p-6 md:pt-0 gap-x-6">
        {/*phone image container*/}
        <div className="hidden lg:flex justify-center items-center bg-white w-140 rounded-xl">
          <PhoneMockupIcon className="w-77 h-158" />
        </div>

        {/*content container*/}
        <div className="flex flex-col bg-white w-full rounded-xl">
          {children}
        </div>
      </main>
    </div>
  );
}
