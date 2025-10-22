import Button from "../components/button.tsx";
import DashLayout from "../components/layouts/dash-layout.tsx";
import UploadImageIcon from "../assets/images/icon-upload-image.svg";
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
          <div className="p-6 bg-[#FAFAFA] rounded-xl">
            {/*profile picture container */}
            <div className="flex flex-col md:flex-row justify-center items-start md:items-center ">
              <p className="text-preset-3 w-60 mb-4 md:mb-0">profile picture</p>
              {/*upload image container */}
              <div className="flex flex-col md:flex-row justify-center items-start md:items-center">
                <div className="flex flex-col justify-center items-center w-48.25 h-48.25 mb-6 md:mb-0 bg-[#EEEEEE] rounded-xl">
                  <img src={UploadImageIcon} alt="upload image icon" />
                  <p className="text-center text-purple-600">+Upload Image</p>
                </div>
                <p className="text-preset-4 md:mx-19.5">
                  Image must be below 1024x1024px. use PNG or JPG format
                </p>
              </div>
            </div>
          </div>

          {/*personal information section */}
          <div className="flex-1 bg-[#FAFAFA] p-6 my-6 rounded-xl">
            <div className="md:flex justify-between items-center mb-4">
              <label
                htmlFor="first name"
                className="text-preset-4 md:text-preset-3 pb-2"
              >
                First Name*
              </label>
              <TextField
                placeholder="eg John"
                hasIcon={false}
                name="first name"
                type="text"
              />
            </div>
            <div className="md:flex justify-between items-center mb-4">
              <label
                htmlFor="first name"
                className="text-preset-4 md:text-preset-3 pb-2"
              >
                First Name*
              </label>
              <TextField
                placeholder="eg John"
                hasIcon={false}
                name="first name"
                type="text"
              />
            </div>
            <div className="md:flex justify-between items-center mb-4">
              <label
                htmlFor="first name"
                className="text-preset-4 md:text-preset-3 pb-2"
              >
                First Name*
              </label>
              <TextField
                placeholder="eg John"
                hasIcon={false}
                name="first name"
                type="text"
              />
            </div>
            <div className="md:flex justify-between items-center mb-4">
              <label
                htmlFor="first name"
                className="text-preset-4 md:text-preset-3 pb-2"
              >
                First Name*
              </label>
              <TextField
                placeholder="eg John"
                hasIcon={false}
                name="first name"
                type="text"
              />
            </div>
            <div className="md:flex justify-between items-center mb-4">
              <label
                htmlFor="last name"
                className="text-preset-4 md:text-preset-3 pb-2"
              >
                Last Name*
              </label>
              <TextField
                placeholder="eg Appleseed"
                hasIcon={false}
                name="last name"
                type="text"
              />
            </div>
            <div className="md:flex justify-between items-center mb-4">
              <label
                htmlFor="email"
                className="text-preset-4 md:text-preset-3 pb-2"
              >
                Email*
              </label>
              <TextField
                placeholder="eg email@example.com"
                hasIcon={false}
                name="email"
                type="email"
              />
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
