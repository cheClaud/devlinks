import React from "react";
import LargeLogo from "../assets/images/logo-devlinks-large.svg";
import SmallLogo from "../assets/images/logo-devlinks-small.svg";
import ProfileDetails from "../components/layouts/profiledetails.tsx";
import LinkCopied from "../components/layouts/linkcopied.tsx";
import PreviewIcon from "../components/layouts/previewicon.tsx";
import EmptyIllustration from "../assets/images/illustration-empty.svg";
import PhoneMockupIcon from "../components/layouts/phoneMockupIcon.tsx";

export default function ActivePage() {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 p-0">
      <header className="w-full m-0 p-0">
        {/*header container*/}
        <div className="flex justify-between items-center bg-white m-6 rounded-[0.5rem] p-0 h-14">
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
            <div className="flex rounded-l justify-center items-center bg-gray-50 mr-4 px-4 py-2">
              <LinkCopied className="text-purple-400" />
              <p className="text-preset-3-semibold  text-purple-400 hidden md:block">
                Links
              </p>
            </div>
            <div className="flex justify-center items-center px-4 py-2">
              <ProfileDetails className="text-gray-400" />
              <p className="text-preset-3-semibold text-gray-400 hidden md:block">
                Profile Details
              </p>
            </div>
          </div>

          {/* preview button container*/}
          <div className="flex justify-center items-center">
            <PreviewIcon className=" border-purple-400 border-1 w-13 rounded-[1rem] h-13 p-4 text-gray-400 md:hidden" />
            <button className="hidden md:block border-1 rounded-[0.5rem] text-purple-400 border-purple-400 text-preset-3-semibold px-4 py-2 ">
              Preview
            </button>
          </div>
        </div>
      </header>
      {/* main container*/}
      <main className="flex justify-center items-center bg-white h-216">
        {/*phone image container*/}
        <div className="hidden lg:block bg-gray-50 w-140 h-216 px-31 py-29 mr-6">
          <PhoneMockupIcon className="w-76 h-157" />
        </div>

        {/*content container*/}
        <div className="flex flex-col justify-start h-216 p-6 w-full">
          {/*header container*/}
          <div className="my-10">
            <p className="text-preset-1">Customize your links</p>
            <p className="text-preset-4  text-gray-500">
              Add/edit/remove links below and then share all your profiles with
              the world
            </p>
          </div>
          {/*links list container*/}
          <div className="flex flex-col justify-center items-center">
            <button className="bg-white text-preset-4 w-full h-10 mb-6 border-1 rounded-[0.5rem] text-purple-400 border-purple-400 ">
              +Add new link
            </button>

            {/*link item container */}
            <div className="bg-gray-50 flex flex-col justify-center items-center mb-10">
              <img
                src={EmptyIllustration}
                alt="empty illustration image"
                className="mb-10"
              />
              <div className="w-122 h-36">
                <p className="text-preset-1 text-center mb-6">
                  Let’s get you started
                </p>
                <p className="text-preset-4 text-center  text-gray-500 ">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
            </div>
          </div>
          {/*footer container*/}
          <div className="flex justify-end items-center">
            <button className="bg-purple-200 w-full md:w-21 h-12 rounded-[0.5rem]">
              send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
