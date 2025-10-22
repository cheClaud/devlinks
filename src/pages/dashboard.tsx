import EmptyIllustration from "../assets/images/illustration-empty.svg";
import Button from "../components/button.tsx";
import DashLayout from "../components/layouts/dash-layout.tsx";

export default function DashBoardPage() {
  return (
    <DashLayout>
      {/*link container*/}
      <div className="flex flex-col flex-1 p-6 md:p-10 gap-y-10">
        {/*header container*/}
        <div className="">
          <p className="text-preset-1">Customize your links</p>
          <p className="text-preset-3 text-gray-500">
            Add/edit/remove links below and then share all your profiles with
            the world
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
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*footer container*/}
      <div className="flex justify-end items-center px-4 md:px-10 py-4 md:py-6 border-t border-gray-200">
        <Button variant="secondary" className="w-full md:w-21.25">
          Save
        </Button>
      </div>
    </DashLayout>
  );
}
