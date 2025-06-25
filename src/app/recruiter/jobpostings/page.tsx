"use client"
import RecruiterNavbar from '@/components/RecruiterNavbar';
import React, { useState } from 'react';

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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <RecruiterNavbar/>
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Post a New Job</h1>
            <p className="text-gray-600 mt-2">Fill out the form below to create a new job posting</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Job Details</h2>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
                  <input
                    type="text"
                    name="jobTitle"
                    placeholder="e.g., Senior Software Engineer"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name*</label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Your company name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location Type*</label>
                  <select
                    name="locationType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Type*</label>
                  <select
                    name="jobType"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level*</label>
                  <select
                    name="experienceLevel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
                  <input
                    type="date"
                    name="applicationDeadline"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email*</label>
                  <input
                    type="email"
                    name="contactEmail"
                    placeholder="hr@yourcompany.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range (optional)</label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Minimum</label>
                      <input
                        type="number"
                        name="minSalary"
                        placeholder="$"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        value={formData.minSalary}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Maximum</label>
                      <input
                        type="number"
                        name="maxSalary"
                        placeholder="$"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Job Description*</label>
              <textarea
                name="jobDescription"
                rows={5}
                placeholder="Describe the role and its impact..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.jobDescription}
                onChange={handleChange}
                required
              />
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Responsibilities*</label>
              <textarea
                name="responsibilities"
                rows={5}
                placeholder="List the main responsibilities of the role..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.responsibilities}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Use bullet points for better readability</p>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-1">Requirements & Qualifications*</label>
              <textarea
                name="requirements"
                rows={5}
                placeholder="List the required skills and qualifications..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => console.log("Cancel")}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Post Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnhancedJobPostForm;