"use client";

import React from 'react';
import Link from 'next/link';

const RecruiterNavbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 font-bold text-xl">Naukri Guru</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/recruiter" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Dashboard
              </Link>
              <Link href="/recruiter/jobpostings" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Job Postings
              </Link>
              <Link href="/recruiter/aiinterview" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                AI Interviews
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-gray-700 text-sm">Welcome, </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterNavbar;