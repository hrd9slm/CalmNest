// pages/signup.tsx
import React from 'react';
import Image from 'next/image';

const SignUp: React.FC = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('images/signup-background3.png')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/calmest-icon.png" 
            alt="CalmNest Icon"
            width={80}
            height={80}
            className="rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold text-center text-dark-blue mb-4">
          Create Your Account
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Confirm your password"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#FFB6C1] bg-[#FFB6C1] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#FFB6C1]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;