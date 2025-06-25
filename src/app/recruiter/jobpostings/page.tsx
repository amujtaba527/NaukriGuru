"use client"
import RecruiterNavbar from '@/components/RecruiterNavbar';
import React, { useState } from 'react';
import { Briefcase, X, ArrowRight, Calendar, DollarSign, Mail, MapPin, Clock, User } from 'lucide-react';
import Link from 'next/link';

const EnhancedJobPostForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    jobDescription: '',
    responsibilities: '',
    requirements: '',
    minSalary: '',
    maxSalary: '',
    locationType: '',
    jobType: '',
    experienceLevel: '',
    applicationDeadline: '',
    contactEmail: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Inter'] p-6">
      <div className="max-w-6xl mx-auto">
        <RecruiterNavbar/>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#007F5F] font-['Poppins']">Post a New Job</h1>
            <p className="text-[#007F5F]/80 mt-2">Fill out the form below to create a new job posting</p>
          </div>
          <Link href="/recruiter/jobs">
            <button className="flex items-center gap-2 text-[#007F5F] hover:text-[#FFB300] transition-colors">
              <X className="w-5 h-5" />
              Cancel
            </button>
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#007F5F]/10">
          <div className="p-6 border-b border-[#007F5F]/10">
            <h2 className="text-xl font-semibold text-[#007F5F]">Job Details</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#007F5F] mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Job Title*
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="e.g., Senior Software Engineer"
                    className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#007F5F] mb-2 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Company Name*
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#007F5F] mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location Type*
                  </label>
                  <select
                    name="locationType"
                    className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.locationType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select location type</option>
                    <option value="On-site">On-site</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#007F5F] mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Job Type*
                  </label>
                  <select
                    name="jobType"
                    className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.jobType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select job type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#007F5F] mb-2">
                    Experience Level*
                  </label>
                  <select
                    name="experienceLevel"
                    className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select experience level</option>
                    <option value="Entry Level">Entry Level</option>
                    <option value="Mid Level">Mid Level</option>
                    <option value="Senior Level">Senior Level</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#007F5F] mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#007F5F] mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contact Email*
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    placeholder="hr@yourcompany.com"
                    className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#007F5F] mb-2 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Salary Range (optional)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-[#007F5F]/60 mb-1">Minimum</label>
                      <input
                        type="number"
                        name="minSalary"
                        placeholder="$"
                        className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                        value={formData.minSalary}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#007F5F]/60 mb-1">Maximum</label>
                      <input
                        type="number"
                        name="maxSalary"
                        placeholder="$"
                        className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                        value={formData.maxSalary}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#007F5F] mb-2">Job Description*</label>
              <textarea
                name="jobDescription"
                rows={5}
                placeholder="Describe the role and its impact..."
                className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                value={formData.jobDescription}
                onChange={handleChange}
                required
              />
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#007F5F] mb-2">Key Responsibilities*</label>
              <textarea
                name="responsibilities"
                rows={5}
                placeholder="List the main responsibilities of the role..."
                className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                value={formData.responsibilities}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-[#007F5F]/60 mt-1">Use bullet points for better readability</p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-[#007F5F] mb-2">Requirements & Qualifications*</label>
              <textarea
                name="requirements"
                rows={5}
                placeholder="List the required skills and qualifications..."
                className="w-full px-4 py-3 border border-[#007F5F]/30 rounded-lg bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-[#007F5F]/10">
              <Link href="/recruiter/jobs">
                <button
                  type="button"
                  className="px-6 py-3 border border-[#007F5F] text-[#007F5F] rounded-full font-semibold hover:bg-[#007F5F]/10 transition"
                >
                  Cancel
                </button>
              </Link>
              <button
                type="submit"
                className="px-8 py-3 bg-[#FFB300] text-white rounded-full font-semibold hover:bg-[#e6a000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB300] transition flex items-center gap-2"
              >
                Post Job
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnhancedJobPostForm;