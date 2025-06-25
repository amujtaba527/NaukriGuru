import React from 'react';
import RecruiterNavbar from '../../components/RecruiterNavbar';
import Link from 'next/link';
import { Briefcase, Brain, FileText, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Inter'] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RecruiterNavbar />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#007F5F] font-['Poppins']">Welcome back</h1>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Active Job Postings" 
            value={5} 
            icon={<Briefcase className="w-6 h-6 text-[#FFB300]" />}
          />
          <StatCard 
            title="New Applicants Today" 
            value={10} 
            icon={<FileText className="w-6 h-6 text-[#FFB300]" />}
          />
          <StatCard 
            title="Total Applicants" 
            value={120} 
            icon={<Users className="w-6 h-6 text-[#FFB300]" />}
          />
          <StatCard 
            title="New Applicants This Week" 
            value={35} 
            icon={<Clock className="w-6 h-6 text-[#FFB300]" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upcoming Interviews */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
              <h2 className="text-xl font-semibold text-[#007F5F] mb-4">Upcoming Interviews</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-[#007F5F]/10">
                  <thead className="bg-[#FCFCF2]">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#007F5F] uppercase tracking-wider">Candidate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#007F5F] uppercase tracking-wider">Job Title</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#007F5F] uppercase tracking-wider">Interview Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-[#007F5F] uppercase tracking-wider">Date & Time</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-[#007F5F]/10">
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

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#007F5F]">Quick Actions</h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/recruiter/jobs/new">
                  <button className="px-6 py-3 bg-[#FFB300] text-white rounded-full font-semibold hover:bg-[#e6a000] transition flex items-center gap-2">
                    Post a New Job
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/recruiter/applicants">
                  <button className="px-6 py-3 border border-[#007F5F] text-[#007F5F] rounded-full font-semibold hover:bg-[#007F5F]/10 transition flex items-center gap-2">
                    View Applicants
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
              <h2 className="text-xl font-semibold text-[#007F5F] mb-4">Quick Links</h2>
              <div className="space-y-3">
                <LinkItem 
                  title="Decision Agent Reports" 
                  icon={<Brain className="w-5 h-5 text-[#FFB300]" />}
                />
                <LinkItem 
                  title="Analyze candidate performance" 
                  icon={<CheckCircle className="w-5 h-5 text-[#FFB300]" />}
                />
                <p className="text-sm text-[#007F5F]/80 mt-2">
                  Get detailed insights into candidate performance across all stages of the hiring process.
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
              <h2 className="text-xl font-semibold text-[#007F5F] mb-4">Key Metrics</h2>
              <div className="space-y-4">
                <MetricItem 
                  title="Average AI Score" 
                  value="85%" 
                  trend="up"
                />
                <MetricItem 
                  title="Time to Fill (Recent)" 
                  value="15 days" 
                  trend="down"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const StatCard = ({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-sm font-medium text-[#007F5F]/80">{title}</h3>
        <p className="text-3xl font-bold text-[#007F5F] mt-2">{value}</p>
      </div>
      <div className="p-2 bg-[#007F5F]/10 rounded-lg">
        {icon}
      </div>
    </div>
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
    <td className="px-6 py-4 whitespace-nowrap font-medium text-[#007F5F]">{candidate}</td>
    <td className="px-6 py-4 whitespace-nowrap text-[#007F5F]/80">{jobTitle}</td>
    <td className="px-6 py-4 whitespace-nowrap">
      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
        ${interviewType.includes('AI') ? 'bg-[#FFB300]/20 text-[#FFB300]' : 'bg-[#007F5F]/20 text-[#007F5F]'}`}>
        {interviewType}
      </span>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-[#007F5F]/80">{dateTime}</td>
  </tr>
);

const LinkItem = ({ title, icon }: { title: string; icon?: React.ReactNode }) => (
  <a href="#" className="flex items-center gap-3 text-[#007F5F] hover:text-[#FFB300] transition-colors">
    {icon}
    <span>{title}</span>
  </a>
);

const MetricItem = ({ title, value, trend }: { title: string; value: string; trend?: 'up' | 'down' }) => {
  const trendColor = trend === 'up' ? 'text-green-500' : 'text-red-500';
  const trendIcon = trend === 'up' ? '↑' : '↓';
  
  return (
    <div>
      <h4 className="text-sm font-medium text-[#007F5F]/80">{title}</h4>
      <div className="flex items-baseline gap-2">
        <p className="text-xl font-bold text-[#007F5F]">{value}</p>
        {trend && (
          <span className={`text-sm ${trendColor}`}>
            {trendIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Dashboard;