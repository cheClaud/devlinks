import React, { useState } from "react";
import EmailIcon from "../assets/images/icon-email.svg";
import PasswordIcon from "../assets/images/icon-password.svg";
import AuthLayout from "../components/layouts/auth-layout";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will stay empty for now
    console.log("Email:", email, "Password:", password);
  };

  return (
    <AuthLayout
      headerTitle="Create an account"
      headerSubtitle="Lets get you started sharing your links"
      footerCTA="Already have an account?"
      footerCTALink="/login"
      footerCTALinkLabel="Login."
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-[1.5rem]">
          <label htmlFor="email" className="mb-[0.5rem]">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={EmailIcon} alt="Email icon" className="" />
            </div>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <p className="text-xs text-gray-400 invisible">Can't be empty</p>
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
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <p className="text-xs text-gray-400 invisible">
                Please check again
              </p>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Atleast 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 p-2 border border-gray-300 rounded-[0.5rem]"
            />
          </div>
        </div>
        <div className="mb-0">
          <label htmlFor="password" className="mb-[0.5rem]">
            Confirm password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={PasswordIcon} alt="Password icon" className="" />
            </div>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <p className="text-xs text-gray-400 invisible">
                Please check again
              </p>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Atleast 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 p-2 border border-gray-300 rounded-[0.5rem]"
            />
          </div>
        </div>
        <p className="text-xs text-gray-400">
          Password must contain atleast 8 characters
        </p>
        <button
          type="submit"
          className="my-[1.5rem] w-full text-white text-center rounded-[0.5rem] p-2 cursor-pointer bg-purple-600"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
}
