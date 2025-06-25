"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Brain, ArrowRight, Mail, Lock, User, X, ChevronDown } from 'lucide-react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Inter'] flex flex-col justify-center py-12 px-6">
      <div className="max-w-md mx-auto w-full">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <a href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <Briefcase className="w-8 h-8 text-[#007F5F]" />
              <Brain className="w-4 h-4 text-[#FFB300] absolute -top-1 -right-1" />
            </div>
            <span className="text-2xl font-black text-[#007F5F] font-['Poppins']">Naukri Guru</span>
          </a>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#007F5F] font-['Poppins'] mb-2">Create Account</h1>
              <p className="text-gray-600">Join Naukri Guru today</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#007F5F] mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-[#007F5F]" />
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#007F5F] mb-2">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-[#007F5F]" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.email}
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
                    autoComplete="new-password"
                    placeholder="••••••••"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    className="focus:ring-[#FFB300] h-4 w-4 text-[#FFB300] border-[#007F5F]/30 rounded"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-[#007F5F]">
                    I agree to the{' '}
                    <Link href="/terms" className="text-[#FFB300] hover:text-[#e6a000] font-medium">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-[#FFB300] hover:text-[#e6a000] font-medium">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-full shadow-sm text-lg font-bold text-black bg-[#FFB300] hover:bg-[#e6a000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB300]"
                >
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>

          <div className="px-8 py-6 bg-[#FCFCF2] border-t border-[#007F5F]/10 text-center">
            <p className="text-[#007F5F]">
              Already have an account?{' '}
              <Link href="/login" className="font-bold text-[#FFB300] hover:text-[#e6a000]">
                Sign in
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

export default SignupForm;