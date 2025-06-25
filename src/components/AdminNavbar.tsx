"use client";

import React from 'react';
import Link from 'next/link';
import { Briefcase, Brain } from 'lucide-react';

const RecruiterNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#F5F5DC]/80 backdrop-blur-md border-b border-black/10 shadow-sm font-['Inter']">
    <div className="max-w-7xl mx-auto px-6 lg:px-24">
      <div className="flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center justify-center h-20">
        <div className="relative">
              <Briefcase className="w-8 h-8 text-[#007F5F]" />
              <Brain className="w-4 h-4 text-[#FFB300] absolute -top-1 -right-1" />
            </div>
          <span className="text-2xl font-black text-[#007F5F] font-['Poppins']">Naukri Guru</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <Link href="/admin" className="text-[#007F5F] hover:text-[#FFB300] transition-colors font-semibold">
            Dashboard
          </Link>
          <Link href="/admin/jobposting" className="text-[#007F5F] hover:text-[#FFB300] transition-colors font-semibold">
            Job Postings
          </Link>
          <Link href="/admin/usermanagement" className="text-[#007F5F] hover:text-[#FFB300] transition-colors font-semibold">
            User Management
          </Link>
        </div>
        {/* Welcome Text */}
        <div className="flex items-center">
          <span className="text-[#007F5F] ">Welcome, </span>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default RecruiterNavbar;