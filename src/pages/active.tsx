import React from 'react'
import LargeLogo from "../assets/images/logo-devlinks-large.svg";
import SmallLogo from "../assets/images/logo-devlinks-small.svg";
import ProfileDetails from '../assets/images/icon-profile-details-header.svg'
import LinkCopied from "../assets/images/icon-link-copied-to-clipboard.svg";
import PreviewIcon from "../assets/images/icon-link-copied-to-clipboard.svg";
import PhoneMockup from "../assets/images/illustration-phone-mockup.svg";
export default function active() {

  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 p-0">
      <header className="flex">
        {/* Logo Container */}
        <div>
          <img src={LargeLogo} alt="DevLinks Logo" className="" />
          <img src={SmallLogo} alt="small DevLinks Logo" className="" />
        </div>

        {/* links and profile Container */}
        <div>
          <div>
            <img src={LinkCopied} alt="profile icon" className="" />
            <p>Links</p>
          </div>
          <div>
            <img src={ProfileDetails} alt="profile icon" className="" />
            <p>Profile Details</p>
          </div>
        </div>

        {/* preview button container*/}
        <div>
          <img src={PreviewIcon} alt="preview icon" className="" />
          <button>preview</button>
        </div>
      </header>
      {/* main container*/}
      <main>
        <img src={PhoneMockup} alt="Phone display mockop" className="" />
        <div></div>
      </main>
    </div>
  );
}
