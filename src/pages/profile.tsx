import EmptyIllustration from "../assets/images/illustration-empty.svg";
import PhoneMockupIcon from "../components/phoneMockupIcon.tsx";
import Button from "../components/button.tsx";
import MainNav from "../components/main-nav.tsx";

export default function ProfilePage() {
  return (
    <div className="flex flex-col w-full h-screen bg-gray-50 p-0">
      <MainNav />

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
              <p className="text-preset-1">Profile</p>
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
            <Button variant="secondary">Save</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
