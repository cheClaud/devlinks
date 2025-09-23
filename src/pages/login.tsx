import React, { useState } from "react";
import EmailIcon from "../assets/images/icon-email.svg";
import PasswordIcon from "../assets/images/icon-password.svg";
import AuthLayout from "../components/layouts/auth-layout";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will stay empty for now
    console.log("Email:", email, "Password:", password);
  };

  return (
    <AuthLayout
      headerTitle="Login"
      headerSubtitle="Add your details below to get back into the app"
      footerCTA="Don’t have an account?"
      footerCTALink="/register"
      footerCTALinkLabel="Create account"
    >
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="email" className="mb-2">
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
              className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="mb-">
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mb-6 w-full text-white text-center rounded-lg p-2 cursor-pointer bg-purple-600"
        >
          Login
        </button>
      </form>
    </AuthLayout>
  );
}
