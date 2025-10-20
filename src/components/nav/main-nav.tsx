import LargeLogo from "../../assets/images/logo-devlinks-large.svg";
import SmallLogo from "../../assets/images/logo-devlinks-small.svg";
import LinkCopied from "../icons/links-icon.tsx";
import PreviewIcon from "../icons/previewicon.tsx";
import { useLocation } from "react-router";
import ProfileDetails from "../icons/profile-details-icon.tsx";
import NavItem from "./nav-item.tsx";

export default function MainNav() {
  const { pathname } = useLocation();

  return (
    <header className="w-full p-4 pl-6 md:px-6 bg-white md:bg-transparent">
      {/*header container*/}
      <div className="flex justify-between items-center bg-white rounded-[0.5rem] p-0 md:p-4 md:pr-6">
        {/* Logo Container */}
        <div className="flex justify-center items-center">
          <img
            src={LargeLogo}
            alt="DevLinks Logo"
            className="w-36 h-8 hidden md:block"
          />
          <img
            src={SmallLogo}
            alt="small DevLinks Logo"
            className="md:hidden"
          />
        </div>

        {/* links and profile Container */}
        <div className="flex justify-between items-center">
          <NavItem
            link="/dashboard"
            icon={<LinkCopied />}
            label="Links"
            isActive={pathname === "/dashboard"}
          />

          <NavItem
            link="/profile"
            icon={<ProfileDetails />}
            label="Profile Details"
            isActive={pathname === "/profile"}
          />
        </div>

        {/* preview button container*/}
        <div className="flex justify-center items-center">
          <PreviewIcon className=" border-purple-600 border-1 w-13 rounded-lg h-13 p-4 text-purple-600 md:hidden" />
          <button className="hidden md:block border-1 rounded-lg text-purple-600 border-purple-600 text-preset-3-semibold px-4 py-2 h-14">
            Preview
          </button>
        </div>
      </div>
    </header>
  );
}
