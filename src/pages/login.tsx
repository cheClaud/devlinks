import React, { useState } from "react";
import LargeLogo from '../assets/images/logo-devlinks-large.svg'
import EmailIcon from "../assets/images/icon-email.svg";
import PasswordIcon from "../assets/images/icon-password.svg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will stay empty for now
    console.log("Email:", email, "Password:", password);
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 h-screen py-[13rem] px-30rem ">
      <div className = 'pb-[3rem]'>
        <img src={LargeLogo} alt="DevLinks Logo" className="" />
      </div>

      <div className="p-[2.5rem] bg-white rounded-xl w-[30rem]">
        <div className="pb-[2.5rem]">
          <p className="text-preset-1">Login</p>
          <p className="text-preset-4 ">
            Add your details below to get back into the app
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-[1.5rem]">
            <label htmlFor="email" className="mb-[0.5rem]">
              Email address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={EmailIcon} alt="Email icon" className="" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="alex@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 p-[0.5rem] border border-gray-300 rounded-[0.5rem]"
              />
            </div>
          </div>
          <div className="mb-[1.5rem]">
            <label htmlFor="password" className="mb-[0.5rem]">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <img src={PasswordIcon} alt="Password icon" className="" />
              </div>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 p-2 border border-gray-300 rounded-[0.5rem]"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mb-[1.5rem] w-full text-white text-center rounded-[0.5rem] p-2 cursor-pointer bg-purple-600"
          >
            Login
          </button>
        </form>
        <div className="text-center text-preset-4 ">
          Don't have an account?{" "}
          <span className="cursor-pointer text-purple-600">
            Create an account.
          </span>
        </div>
      </div>
    </div>
  );
}
