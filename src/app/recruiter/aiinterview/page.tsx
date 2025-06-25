"use client"

import React, { useState } from 'react';
import RecruiterNavbar from '@/components/RecruiterNavbar';

const AIInterviews = () => {
  const [activeTab, setActiveTab] = useState<'schedule' | 'results'>('schedule');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample interview data
  const interviews = [
    {
      id: 1,
      candidate: 'Kazim',
      jobTitle: 'Software Engineer',
      interviewDate: '2025-06-15',
      status: 'Completed',
    },
    {
      id: 2,
      candidate: 'Raza',
      jobTitle: 'Project Manager',
      interviewDate: '2025-06-12',
      status: 'Completed',
    },
    {
      id: 3,
      candidate: 'Ahmad',
      jobTitle: 'Data Scientist',
      interviewDate: '2025-06-10',
      status: 'Completed',
    },
    {
      id: 4,
      candidate: 'Mujtaba',
      jobTitle: 'UX Designer',
      interviewDate: '2025-06-08',
      status: 'Completed',
    },
  ];

  const filteredInterviews = interviews.filter(interview =>
    interview.candidate.toLowerCase().includes(searchQuery.toLowerCase()) ||
    interview.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 ">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <RecruiterNavbar/>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">AI Interviews</h1>
        </div>

        {/* Tabs and Search */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-4 py-2 rounded-md ${activeTab === 'schedule' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Schedule AI Interview
            </button>
            <button
              onClick={() => setActiveTab('results')}
              className={`px-4 py-2 rounded-md ${activeTab === 'results' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              Review AI Interview Results
            </button>
          </div>

          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search candidates or jobs..."
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Introduction</h2>
          <p className="text-gray-600">
            Manage all your AI-powered interviews in one place. Schedule new interviews or review completed ones.
          </p>
        </div>

        {/* Interviews Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interview Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredInterviews.map((interview) => (
                  <tr key={interview.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{interview.candidate}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{interview.jobTitle}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{interview.interviewDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {interview.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900">View Results</button>
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

export default AIInterviews;