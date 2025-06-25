
import React from 'react';
import RecruiterNavbar from '../../components/RecruiterNavbar';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RecruiterNavbar />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Active Job Postings" value={5} />
          <StatCard title="New Applicants Today" value={10} />
          <StatCard title="Total Applicants" value={120} />
          <StatCard title="New Applicants This Week" value={35} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Interviews */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Interviews</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interview Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <InterviewRow 
                      candidate="Ahmad" 
                      jobTitle="Senior Software Engineer" 
                      interviewType="AI Interview" 
                      dateTime="Tomorrow, 10:00 AM" 
                    />
                    <InterviewRow 
                      candidate="Mujtaba" 
                      jobTitle="Project Manager" 
                      interviewType="Manual Interview" 
                      dateTime="Next Monday, 2:00 PM" 
                    />
                    <InterviewRow 
                      candidate="Kazim" 
                      jobTitle="Data Analyst" 
                      interviewType="AI Interview" 
                      dateTime="Next Tuesday, 11:00 AM" 
                    />
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Quick Actions</h2>
              </div>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                  Post a New Job
                </button>
                <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition">
                  View Applicants
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h2>
              <div className="space-y-2">
                <LinkItem title="Decision Agent Reports" />
                <LinkItem title="Analyze candidate performance" />
                <p className="text-sm text-gray-600 mt-2">
                  Get detailed insights into candidate performance across all stages of the hiring process.
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Metrics</h2>
              <div className="space-y-4">
                <MetricItem title="Average AI Score" value="85%" />
                <MetricItem title="Time to Fill (Recent)" value="15 days" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const StatCard = ({ title, value }: { title: string; value: number }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
  </div>
);

const InterviewRow = ({ 
  candidate, 
  jobTitle, 
  interviewType, 
  dateTime 
}: { 
  candidate: string; 
  jobTitle: string; 
  interviewType: string; 
  dateTime: string; 
}) => (
  <tr>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{candidate}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{jobTitle}</td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
        ${interviewType.includes('AI') ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
        {interviewType}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{dateTime}</td>
  </tr>
);

const LinkItem = ({ title }: { title: string }) => (
  <a href="#" className="block text-blue-600 hover:text-blue-800 hover:underline">{title}</a>
);

const MetricItem = ({ title, value }: { title: string; value: string }) => (
  <div>
    <h4 className="text-sm font-medium text-gray-500">{title}</h4>
    <p className="text-xl font-bold text-gray-800">{value}</p>
  </div>
);

export default Dashboard;