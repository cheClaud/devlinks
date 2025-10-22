import Button from "../components/button.tsx";
import DashLayout from "../components/layouts/dash-layout.tsx";
import TextField from "../components/textfield.tsx";

export default function ProfilePage() {
  return (
    <DashLayout>
      {/*profile details container*/}
      <div className="flex flex-col flex-1 px-6 pt-6 md:px-10 md:pt-10 gap-y-10 h-[calc(100%-107px)]">
        {/*profile details header*/}
        <div className="">
          <p className="text-preset-1">Profile Details</p>
          <p className="text-preset-3 text-gray-500">
            Add your details to create a personal touch to your profile
          </p>
        </div>

        {/*profile details form */}
        <div className="flex flex-col h-full overflow-y-scroll">
          {/*profile picture section */}
          <div className="p-6 bg-gray-50 rounded-xl">
            {/*profile picture container */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center ">
              <p className="text-preset-3 text-gray-500 w-60 border">
                Profile Picture
              </p>

              {/*upload image container */}
              <div className="flex flex-col md:flex-row gap-6 justify-center items-start md:items-center">
                <div className="flex flex-col justify-center items-center gap-2 size-48.25 bg-gray-100 rounded-xl">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V31.25C3.75 31.913 4.01339 32.5489 4.48223 33.0178C4.95107 33.4866 5.58696 33.75 6.25 33.75H33.75C34.413 33.75 35.0489 33.4866 35.5178 33.0178C35.9866 32.5489 36.25 31.913 36.25 31.25V8.75C36.25 8.08696 35.9866 7.45107 35.5178 6.98223C35.0489 6.51339 34.413 6.25 33.75 6.25ZM33.75 8.75V24.8047L29.6766 20.7328C29.4444 20.5006 29.1688 20.3164 28.8654 20.1907C28.5621 20.0651 28.2369 20.0004 27.9086 20.0004C27.5802 20.0004 27.2551 20.0651 26.9518 20.1907C26.6484 20.3164 26.3728 20.5006 26.1406 20.7328L23.0156 23.8578L16.1406 16.9828C15.6718 16.5143 15.0362 16.2512 14.3734 16.2512C13.7107 16.2512 13.075 16.5143 12.6062 16.9828L6.25 23.3391V8.75H33.75ZM6.25 26.875L14.375 18.75L26.875 31.25H6.25V26.875ZM33.75 31.25H30.4109L24.7859 25.625L27.9109 22.5L33.75 28.3406V31.25ZM22.5 15.625C22.5 15.2542 22.61 14.8916 22.816 14.5833C23.022 14.275 23.3149 14.0346 23.6575 13.8927C24.0001 13.7508 24.3771 13.7137 24.7408 13.786C25.1045 13.8584 25.4386 14.037 25.7008 14.2992C25.963 14.5614 26.1416 14.8955 26.214 15.2592C26.2863 15.6229 26.2492 15.9999 26.1073 16.3425C25.9654 16.6851 25.725 16.978 25.4167 17.184C25.1084 17.39 24.7458 17.5 24.375 17.5C23.8777 17.5 23.4008 17.3025 23.0492 16.9508C22.6975 16.5992 22.5 16.1223 22.5 15.625Z"
                      fill="#633CFF"
                    />
                  </svg>
                  <p className="text-center text-purple-600">+ Upload Image</p>
                </div>
                <p className="text-preset-4 text-gray-500">
                  Image must be below 1024x1024px. use PNG or JPG format
                </p>
              </div>
            </div>
          </div>

          {/*personal information section */}
          <div className="flex-1 bg-[#FAFAFA] p-6 my-6 rounded-xl">
            <div className="md:flex gap-4 items-center mb-4">
              <label
                htmlFor="first name"
                className="text-preset-4 text-gray-500 md:text-preset-3 pb-2 whitespace-nowrap w-60 border"
              >
                First Name*
              </label>
              <TextField placeholder="eg John" name="first name" type="text" />
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
