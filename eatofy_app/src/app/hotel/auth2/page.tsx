"use client"
import React, { useState } from 'react';

const Widget: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bgimg.jpg')" }}
    >
      <div className=" bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src="/logo1.png" width={200} alt="EATOFY Logo" />
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-card-foreground mb-2" htmlFor="username">
              UserName
            </label>
            <input
              className="w-full p-3 rounded bg-input text-foreground border border-border focus:outline-none focus:ring focus:ring-primary"
              type="text"
              id="username"
              placeholder="Enter Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-card-foreground mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 rounded bg-input text-foreground border border-border focus:outline-none focus:ring focus:ring-primary"
              type="email"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-card-foreground mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                className="w-full p-3 rounded bg-input text-foreground border border-border focus:outline-none focus:ring focus:ring-primary"
                type={passwordVisible ? 'text' : 'password'}
                id="password"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-muted-foreground"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <img
                    alt="eye-open-icon"
                    src="https://openui.fly.dev/openui/24x24.svg?text=👁️"
                  />
                ) : (
                  <img
                    alt="eye-closed-icon"
                    src="https://openui.fly.dev/openui/24x24.svg?text=👁️‍🗨️"
                  />
                )}
              </button>
            </div>
          </div>
          <button className="w-full p-3 bg-red-500 text-primary-foreground rounded hover:bg-primary/80">
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <h2 className="text-lg font-semibold text-card-foreground">Welcome To Eatofy</h2>
          <p className="text-muted-foreground">From ordering to paying, that's all contactless</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
