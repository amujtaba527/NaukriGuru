"use client"

import { Briefcase, FileText, Users, Zap, ChevronRight, Search, Star, Award, MapPin, Building } from 'lucide-react';
import Link from 'next/link';
import JobseekerNavbar from '@/components/JobseekerNavbar';

const JobSeekerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F5DC] p-6 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <JobseekerNavbar />
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#007F5F] font-['Poppins']">Hello, Sarah</h1>
          <p className="text-gray-700 mt-2">Welcome back to your job search dashboard</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Applications Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#007F5F]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#007F5F]/10 rounded-full flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#007F5F]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-600">Applications</h3>
                <p className="text-2xl font-bold text-[#007F5F]">3 in progress</p>
              </div>
            </div>
            <Link href="/applications" className="mt-4 text-[#FFB300] flex items-center gap-1 text-sm font-medium">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Saved Jobs Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#007F5F]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#007F5F]/10 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-[#007F5F]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-600">Saved Jobs</h3>
                <p className="text-2xl font-bold text-[#007F5F]">12 saved</p>
              </div>
            </div>
            <Link href="/saved-jobs" className="mt-4 text-[#FFB300] flex items-center gap-1 text-sm font-medium">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interview Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#007F5F]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#007F5F]/10 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#007F5F]" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-600">AI Mock Interview</h3>
                <p className="text-2xl font-bold text-[#007F5F]">Next in 2 days</p>
              </div>
            </div>
            <Link href="/interviews" className="mt-4 text-[#FFB300] flex items-center gap-1 text-sm font-medium">
              Schedule now <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Link href="/resume-analyzer" className="bg-[#007F5F]/5 hover:bg-[#007F5F]/10 rounded-xl p-6 border border-[#007F5F]/20 transition-colors flex items-center gap-4">
            <div className="w-10 h-10 bg-[#007F5F] rounded-full flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-[#007F5F]">AI Resume Analyzer</h3>
              <p className="text-sm text-gray-600">Get your resume score</p>
            </div>
          </Link>

          <Link href="/resume-builder" className="bg-[#007F5F]/5 hover:bg-[#007F5F]/10 rounded-xl p-6 border border-[#007F5F]/20 transition-colors flex items-center gap-4">
            <div className="w-10 h-10 bg-[#007F5F] rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-[#007F5F]">Resume Builder</h3>
              <p className="text-sm text-gray-600">Create a winning resume</p>
            </div>
          </Link>

          <Link href="/job-search" className="bg-[#007F5F]/5 hover:bg-[#007F5F]/10 rounded-xl p-6 border border-[#007F5F]/20 transition-colors flex items-center gap-4">
            <div className="w-10 h-10 bg-[#007F5F] rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-[#007F5F]">Job Search</h3>
              <p className="text-sm text-gray-600">Find your next role</p>
            </div>
          </Link>

          <Link href="/profile" className="bg-[#007F5F]/5 hover:bg-[#007F5F]/10 rounded-xl p-6 border border-[#007F5F]/20 transition-colors flex items-center gap-4">
            <div className="w-10 h-10 bg-[#007F5F] rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-[#007F5F]">Profile</h3>
              <p className="text-sm text-gray-600">Complete your profile</p>
            </div>
          </Link>
        </div>

        {/* Recommended Jobs */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-[#007F5F]/20 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#007F5F] font-['Poppins']">Recommended For You</h2>
            <Link href="/jobs" className="text-[#FFB300] flex items-center gap-1 text-sm font-medium">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Job 1 */}
            <div className="bg-white rounded-lg p-6 border border-[#007F5F]/10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#007F5F] rounded-lg flex items-center justify-center text-white">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#007F5F]">Software Engineer</h3>
                  <p className="text-gray-700">Tech Solutions Inc.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <MapPin className="w-4 h-4 text-[#FFB300]" />
                <span>Remote</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-[#007F5F]/10 text-[#007F5F] px-2 py-1 rounded">Full-time</span>
                <button className="text-[#FFB300] text-sm font-medium">Apply Now</button>
              </div>
            </div>

            {/* Job 2 */}
            <div className="bg-white rounded-lg p-6 border border-[#007F5F]/10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#007F5F] rounded-lg flex items-center justify-center text-white">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#007F5F]">Data Analyst</h3>
                  <p className="text-gray-700">Data Insights Co.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <MapPin className="w-4 h-4 text-[#FFB300]" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-[#007F5F]/10 text-[#007F5F] px-2 py-1 rounded">Contract</span>
                <button className="text-[#FFB300] text-sm font-medium">Apply Now</button>
              </div>
            </div>

            {/* Job 3 */}
            <div className="bg-white rounded-lg p-6 border border-[#007F5F]/10 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#007F5F] rounded-lg flex items-center justify-center text-white">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#007F5F]">Product Manager</h3>
                  <p className="text-gray-700">Innovate Products LLC</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <MapPin className="w-4 h-4 text-[#FFB300]" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs bg-[#007F5F]/10 text-[#007F5F] px-2 py-1 rounded">Full-time</span>
                <button className="text-[#FFB300] text-sm font-medium">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;