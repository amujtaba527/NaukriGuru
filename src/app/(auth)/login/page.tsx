"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Briefcase, Brain, ArrowRight         , Lock, User, X, ChevronDown } from 'lucide-react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Simple authentication logic
    if (formData.username === 'recruiter' && formData.password === 'recruiter') {
      router.push('/recruiter');
    } else if (formData.username === 'admin' && formData.password === 'admin') {
      router.push('/admin');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Inter'] flex flex-col justify-center py-12 px-6">
      <div className="max-w-md mx-auto w-full">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <Briefcase className="w-8 h-8 text-[#007F5F]" />
              <Brain className="w-4 h-4 text-[#FFB300] absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-black text-[#007F5F] font-['Poppins']">Naukri Guru</span>
          </Link>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#007F5F] font-['Poppins'] mb-2">Welcome Back</h1>
              <p className="text-gray-600">Sign in to your Naukri Guru account</p>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm flex items-center gap-2">
                <X className="w-5 h-5" />
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-[#007F5F] mb-2">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-[#007F5F]" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    placeholder="recruiter or admin"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#007F5F] mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-[#007F5F]" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#FFB300] focus:ring-[#FFB300] border-[#007F5F]/30 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-[#007F5F]">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link href="/forgot-password" className="font-medium text-[#FFB300] hover:text-[#e6a000]">
                    Forgot password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-full shadow-sm text-lg font-bold text-black bg-[#FFB300] hover:bg-[#e6a000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB300]"
                >
                  Sign In
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          <div className="px-8 py-6 bg-[#FCFCF2] border-t border-[#007F5F]/10 text-center">
            <p className="text-[#007F5F]">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-bold text-[#FFB300] hover:text-[#e6a000]">
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Back to home link */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-[#007F5F] hover:text-[#FFB300] flex items-center justify-center gap-1">
            <ChevronDown className="w-5 h-5 rotate-90" />
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;