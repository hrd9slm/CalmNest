'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { fetchInstance } from '../../utils/fetchInstance'

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const data = {
        firstName,
        lastName,
        email,
        password,
        gender,
        birthDate,
      };

      const response = await fetchInstance('/register', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      setSuccess('Registration successful!');
      setError('');
      // Optionally, redirect the user or clear the form
    } catch (err: any) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('images/signup-background3.png')" }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
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
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="gender">
                Gender
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="birthDate">
                Birth Date
              </label>
              <input
                type="date"
                id="birthDate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Confirm your password"
              />
            </div>
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