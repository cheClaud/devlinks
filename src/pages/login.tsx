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
    <div className="flex flex-col justify-center items-center bg-gray-50 h-screen ">
      <img src={LargeLogo} alt="DevLinks Logo" className="pb-[3rem]"/>
      <div className="p-[2.5rem] bg-white rounded-xl">
        <div className="pb-[2.5rem]">
          <p>Login</p>
          <p>Add your details below to get back into the app</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email address</label>
            <div className="relative">
              <div>
                <img src={EmailIcon} alt="Email icon" className="" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div className="relative">
              <div>
                <img
                  src={PasswordIcon}
                  alt="Password icon"
                  className=""
                />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? Create an account.</p>
      </div>
    </div>
  );
}
