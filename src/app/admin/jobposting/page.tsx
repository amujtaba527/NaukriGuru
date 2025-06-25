"use client"

import AdminNavbar from '@/components/AdminNavbar';
import React, { useState } from 'react';

const JobPostsManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Innovators Inc.',
      location: 'Lahore',
      status: 'Active',
      postedDate: '2025-08-15',
      recruiter: 'Ahmad',
    },
    // Add all other jobs from your example
  ];

  const filteredJobs = jobs.filter(job =>
    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
     job.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (statusFilter === 'All' || job.status === statusFilter)
  );

  const statusCounts = {
    'Pending Approval': jobs.filter(j => j.status === 'Pending Approval').length,
    'Active': jobs.filter(j => j.status === 'Active').length,
    'Expired': jobs.filter(j => j.status === 'Expired').length,
    'Flagged': jobs.filter(j => j.status === 'Flagged').length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AdminNavbar/>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Job Posts</h1>
          <p className="text-gray-600 mt-2">Manage all job posts on the platform</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search job posts..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <select
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending Approval">Pending Approval</option>
              <option value="Active">Active</option>
              <option value="Expired">Expired</option>
              <option value="Flagged">Flagged</option>
            </select>
          </div>

          {/* Status Quick Filters */}
          <div className="flex flex-wrap gap-4">
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 rounded-full text-sm ${statusFilter === status ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
              >
                {status}: {count}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posted Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredJobs.map((job) => (
                  <tr key={job.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{job.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.company}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={job.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{job.postedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  let bgColor = 'bg-gray-100';
  let textColor = 'text-gray-800';

  if (status === 'Active') {
    bgColor = 'bg-green-100';
    textColor = 'text-green-800';
  } else if (status === 'Pending Approval') {
    bgColor = 'bg-yellow-100';
    textColor = 'text-yellow-800';
  } else if (status === 'Expired') {
    bgColor = 'bg-gray-100';
    textColor = 'text-gray-800';
  } else if (status === 'Flagged') {
    bgColor = 'bg-red-100';
    textColor = 'text-red-800';
  }

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor} ${textColor}`}>
      {status}
    </span>
  );
};

export default JobPostsManagement;