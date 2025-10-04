import LargeLogo from "../assets/images/logo-devlinks-large.svg";
import SmallLogo from "../assets/images/logo-devlinks-small.svg";
import ProfileDetails from "../components/layouts/profiledetails.tsx";
import LinkCopied from "../components/layouts/linkcopied.tsx";
import PreviewIcon from "../components/layouts/previewicon.tsx";
import EmptyIllustration from "../assets/images/illustration-empty.svg";
import PhoneMockupIcon from "../components/layouts/phoneMockupIcon.tsx";

export default function DashoardPage() {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 p-0">
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
            <div className="flex justify-center items-center bg-gray-50 mr-4 px-6 py-4 rounded-lg gap-x-2">
              <LinkCopied className="text-purple-600" />
              <p className="text-preset-3-semibold  text-purple-600 hidden md:block">
                Links
              </p>
            </div>
            <div className="flex justify-center items-center px-4 py-2 gap-x-2">
              <ProfileDetails className="text-gray-500" />
              <p className="text-preset-3-semibold text-gray-500 hidden md:block">
                Profile Details
              </p>
            </div>
          </div>

          {/* preview button container*/}
          <div className="flex justify-center items-center">
            <PreviewIcon className=" border-purple-400 border-1 w-13 rounded-[1rem] h-13 p-4 text-gray-400 md:hidden" />
            <button className="hidden md:block border-1 rounded-[0.5rem] text-purple-400 border-purple-400 text-preset-3-semibold px-4 py-2 h-14">
              Preview
            </button>
          </div>
        </div>
      </header>

      {/* main container*/}
      <main className="flex justify-center items-center flex-1 bg-gray-50 p-4 md:p-6 md:pt-0 gap-x-6">
        {/*phone image container*/}
        <div className="hidden lg:flex justify-center items-center bg-white w-140 rounded-xl overflow-hidden h-full">
          <PhoneMockupIcon className="w-77 h-158" />
        </div>

        {/*content container*/}
        <div className="flex flex-col bg-white w-full rounded-xl overflow-hidden h-full">
          {/*link container*/}
          <div className="flex flex-col flex-1 p-6 md:p-10 gap-y-10">
            {/*header container*/}
            <div className="">
              <p className="text-preset-1">Customize your links</p>
              <p className="text-preset-3 text-gray-500">
                Add/edit/remove links below and then share all your profiles
                with the world
              </p>
            </div>

            {/*links list container */}
            <div className="flex flex-col flex-1 gap-y-6">
              <button className="bg-white text-preset-3 w-full h-14 border-1 rounded-lg text-purple-600 border-purple-600">
                + Add new link
              </button>

              {/*links list */}
              <div className="flex flex-col flex-1 justify-center bg-gray-50 rounded-xl p-6">
                {/*link item container */}
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={EmptyIllustration}
                    alt="empty illustration image"
                    className="mb-10"
                  />
                  <div className="w-full md:w-122">
                    <p className="text-preset-2 md:text-preset-1 text-center mb-6">
                      Let’s get you started
                    </p>
                    <p className="text-preset-3 text-center text-gray-500 ">
                      Use the “Add new link” button to get started. Once you
                      have more than one link, you can reorder and edit them.
                      We’re here to help you share your profiles with everyone!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*footer container*/}
          <div className="flex justify-end items-center px-4 md:px-10 py-4 md:py-6">
            <button className="bg-purple-600/25 text-white w-full md:w-21 h-14 rounded-lg">
              Save
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
