"use client"

import AdminNavbar from '@/components/AdminNavbar';
import React, { useState } from 'react';
import { Search, Briefcase, Building, MapPin, Clock, AlertCircle, CheckCircle, XCircle, ChevronDown, MoreVertical, Filter, Plus } from 'lucide-react';

const JobPostsManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Sample job data
  const jobs = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Innovators Inc.',
      location: 'Lahore, Pakistan',
      status: 'Active',
      postedDate: '2025-08-15',
      recruiter: 'Ahmad Khan',
      applicants: 24,
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Digital Solutions Ltd.',
      location: 'Karachi, Pakistan',
      status: 'Pending Approval',
      postedDate: '2025-08-10',
      recruiter: 'Sarah Ahmed',
      applicants: 8,
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Creative Minds',
      location: 'Islamabad, Pakistan',
      status: 'Flagged',
      postedDate: '2025-08-05',
      recruiter: 'Ali Raza',
      applicants: 15,
    },
    {
      id: 4,
      title: 'Data Scientist',
      company: 'AI Pioneers',
      location: 'Remote',
      status: 'Active',
      postedDate: '2025-07-28',
      recruiter: 'Fatima Malik',
      applicants: 32,
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      company: 'Cloud Systems',
      location: 'Lahore, Pakistan',
      status: 'Expired',
      postedDate: '2025-07-15',
      recruiter: 'Usman Khan',
      applicants: 12,
    },
  ];

  const filteredJobs = jobs.filter(job =>
    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.recruiter.toLowerCase().includes(searchQuery.toLowerCase())
  )).filter(job => 
    statusFilter === 'All' || job.status === statusFilter
  );

  const statusCounts = {
    'All': jobs.length,
    'Pending Approval': jobs.filter(j => j.status === 'Pending Approval').length,
    'Active': jobs.filter(j => j.status === 'Active').length,
    'Expired': jobs.filter(j => j.status === 'Expired').length,
    'Flagged': jobs.filter(j => j.status === 'Flagged').length,
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC] p-6 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AdminNavbar />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#007F5F] font-['Poppins']">Job Posts Management</h1>
          <p className="text-gray-700 mt-2">Manage and monitor all job postings on the platform</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#007F5F]" />
              </div>
              <input
                type="text"
                placeholder="Search jobs by title, company, location..."
                className="block w-full pl-10 pr-3 py-2 border border-[#007F5F]/30 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#FFB300] focus:border-[#007F5F]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Filter className="h-5 w-5 text-[#007F5F]" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-2 border border-[#007F5F]/30 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#FFB300] focus:border-[#007F5F] appearance-none"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Pending Approval">Pending Approval</option>
                <option value="Active">Active</option>
                <option value="Expired">Expired</option>
                <option value="Flagged">Flagged</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-[#007F5F]" />
              </div>
            </div>
            <button className="px-4 py-2 bg-[#007F5F] text-white rounded-lg hover:bg-[#005a45] transition-colors flex items-center gap-2">
              <Plus className="w-5 h-5" />
              Add Job
            </button>
          </div>

          {/* Status Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(statusCounts).map(([status, count]) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1 rounded-full text-sm flex items-center gap-1 transition-colors ${
                  statusFilter === status 
                    ? 'bg-[#007F5F] text-white' 
                    : 'bg-white text-[#007F5F] border border-[#007F5F]/20 hover:bg-[#007F5F]/10'
                }`}
              >
                {status === 'All' ? (
                  <span>All: {count}</span>
                ) : (
                  <>
                    <StatusIcon status={status} className="w-4 h-4" />
                    {status}: {count}
                  </>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Jobs Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-[#007F5F]/20">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#007F5F]/10">
              <thead className="bg-[#007F5F]/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Job Details</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Recruiter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Applicants</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Posted</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#007F5F]/10">
                {filteredJobs.map((job) => (
                  <tr key={job.id} className="hover:bg-[#F5F5DC]/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-[#007F5F] rounded-full flex items-center justify-center text-white">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[#007F5F]">{job.title}</div>
                          <div className="text-sm text-gray-700 flex items-center">
                            <Building className="w-4 h-4 mr-1 text-[#FFB300]" />
                            {job.company}
                          </div>
                          <div className="text-xs text-gray-500 flex items-center">
                            <MapPin className="w-3 h-3 mr-1 text-[#FFB300]" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {job.recruiter}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-[#007F5F]">{job.applicants}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={job.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-[#FFB300]" />
                      {job.postedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end items-center gap-2">
                        <button className="p-2 text-[#007F5F] hover:text-[#FFB300] transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-[#F5F5DC]/50 px-6 py-3 flex items-center justify-between border-t border-[#007F5F]/10">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-[#007F5F]/20 text-sm font-medium rounded-md text-[#007F5F] bg-white hover:bg-[#007F5F]/10">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-[#007F5F]/20 text-sm font-medium rounded-md text-[#007F5F] bg-white hover:bg-[#007F5F]/10">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
                  <span className="font-medium">5</span> jobs
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-[#007F5F]/20 bg-white text-sm font-medium text-[#007F5F] hover:bg-[#007F5F]/10">
                    <span className="sr-only">Previous</span>
                    <ChevronDown className="h-5 w-5 rotate-90" aria-hidden="true" />
                  </button>
                  <button
                    aria-current="page"
                    className="z-10 bg-[#007F5F] text-white relative inline-flex items-center px-4 py-2 border border-[#007F5F] text-sm font-medium"
                  >
                    1
                  </button>
                  <button className="bg-white border-[#007F5F]/20 text-[#007F5F] hover:bg-[#007F5F]/10 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    2
                  </button>
                  <button className="bg-white border-[#007F5F]/20 text-[#007F5F] hover:bg-[#007F5F]/10 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
                    3
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-[#007F5F]/20 bg-white text-sm font-medium text-[#007F5F] hover:bg-[#007F5F]/10">
                    <span className="sr-only">Next</span>
                    <ChevronDown className="h-5 w-5 -rotate-90" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  let bgColor = 'bg-gray-100';
  let textColor = 'text-gray-800';
  let icon = null;

  if (status === 'Active') {
    bgColor = 'bg-green-100';
    textColor = 'text-green-800';
    icon = <CheckCircle className="w-4 h-4 mr-1" />;
  } else if (status === 'Pending Approval') {
    bgColor = 'bg-yellow-100';
    textColor = 'text-yellow-800';
    icon = <Clock className="w-4 h-4 mr-1" />;
  } else if (status === 'Expired') {
    bgColor = 'bg-gray-100';
    textColor = 'text-gray-800';
    icon = <AlertCircle className="w-4 h-4 mr-1" />;
  } else if (status === 'Flagged') {
    bgColor = 'bg-red-100';
    textColor = 'text-red-800';
    icon = <XCircle className="w-4 h-4 mr-1" />;
  }

  return (
    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
      {icon}
      {status}
    </div>
  );
};

const StatusIcon = ({ status, className }: { status: string; className?: string }) => {
  switch (status) {
    case 'Active':
      return <CheckCircle className={className} />;
    case 'Pending Approval':
      return <Clock className={className} />;
    case 'Expired':
      return <AlertCircle className={className} />;
    case 'Flagged':
      return <XCircle className={className} />;
    default:
      return null;
  }
};

export default JobPostsManagement;