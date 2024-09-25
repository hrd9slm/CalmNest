'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { fetchInstance } from '../utils/fetchInstance'; 

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const data = await fetchInstance('/login', {  
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });

     
      localStorage.setItem('token', data.token);

      
      router.push('/blog');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
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
        Welcome to CalmNest
      </h2>
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
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
        <div className="mb-6">
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
        <button
          type="submit"
          className="w-full px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#FFB6C1] bg-[#FFB6C1] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#FFB6C1]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;