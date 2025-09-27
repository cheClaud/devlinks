import React from 'react'
import LargeLogo from "../assets/images/logo-devlinks-large.svg";
import SmallLogo from "../assets/images/logo-devlinks-small.svg";
import ProfileDetails from '../components/layouts/profiledetails.tsx';
import LinkCopied from "../components/layouts/linkcopied.tsx";
import PreviewIcon from "../components/layouts/previewicon.tsx";
import PhoneMockup from "../assets/images/illustration-phone-mockup.svg";
import EmptyIllustration from "../assets/images/illustration-empty.svg";


export default function ActivePage() {

  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 p-0">
      <header className="w-full m-0 p-0">
        {/*header container*/}
        <div className="flex justify-between items-center bg-white m-6 rounded-[0.5rem] p-0 h-14">
          {/* Logo Container */}
          <div className="flex justify-center items-center">
            <img src={LargeLogo} alt="DevLinks Logo" className="w-36 h-8" />
            <img src={SmallLogo} alt="small DevLinks Logo" className="" />
          </div>

          {/* links and profile Container */}
          <div className="flex justify-between items-center">
            <div className="flex rounded-l justify-center items-center bg-gray-50 mr-4 px-4 py-2">
              <LinkCopied className="text-purple-400" />
              <p className="text-preset-3-semibold  text-purple-400">Links</p>
            </div>
            <div className="flex justify-center items-center px-4 py-2">
              <ProfileDetails className="text-gray-400" />
              <p className="text-preset-3-semibold text-gray-400">
                Profile Details
              </p>
            </div>
          </div>

          {/* preview button container*/}
          <div className="flex justify-center items-center">
            <PreviewIcon className="text-gray-400" />
            <button className="border-1 rounded-[0.5rem] text-purple-400 border-purple-400 text-preset-3-semibold px-4 py-2 ">
              Preview
            </button>
          </div>
        </div>
      </header>
      {/* main container*/}
      <main className="flex justify-center items-center">
        <img src={PhoneMockup} alt="Phone display mockop" className="" />
        {/*content container*/}
        <div>
          {/*links container*/}
          <div>
            {/*header container*/}
            <div>
              <p>Customize your links</p>
              <p>
                Add/edit/remove links below and then share all your profiles
                with the world
              </p>
            </div>
            {/*links list container*/}
            <div>
              <button>+Add link</button>
              {/*link list */}
              <div>
                {/*link item container */}
                <div>
                  <img
                    src={EmptyIllustration}
                    alt="empty illustration image"
                    className=""
                  />
                  <div>
                    <p>Let’s get you started</p>
                    <p>
                      Use the “Add new link” button to get started. Once you
                      have more than one link, you can reorder and edit them.
                      We’re here to help you share your profiles with everyone!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button>send</button>
          </div>
        </div>
      </main>
    </div>
  );
}
