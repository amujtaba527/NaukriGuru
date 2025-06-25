"use client"
import React, { useState } from 'react';
import RecruiterNavbar from '@/components/RecruiterNavbar';
import { Briefcase, Brain, Users,User, Clock, MessageSquare, CheckCircle, ArrowRight, Search, Play, Pause, Download } from 'lucide-react';
import Link from 'next/link';

const RecruiterAIInterview = () => {
  const [activeTab, setActiveTab] = useState<'scheduled' | 'completed'>('scheduled');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  // Sample interview data
  const interviews = [
    {
      id: 1,
      candidate: 'Ahmad Khan',
      jobTitle: 'Senior Software Engineer',
      date: '2023-08-15',
      status: 'Scheduled',
      duration: '45 mins',
      score: null
    },
    {
      id: 2,
      candidate: 'Mujtaba Ali',
      jobTitle: 'Product Manager',
      date: '2023-08-16',
      status: 'Completed',
      duration: '52 mins',
      score: '87%'
    },
    {
      id: 3,
      candidate: 'Kazim Raza',
      jobTitle: 'Data Analyst',
      date: '2023-08-17',
      status: 'Scheduled',
      duration: '30 mins',
      score: null
    },
    {
      id: 4,
      candidate: 'Sarah Ahmed',
      jobTitle: 'UX Designer',
      date: '2023-08-14',
      status: 'Completed',
      duration: '48 mins',
      score: '92%'
    }
  ];

  const filteredInterviews = interviews.filter(interview => {
    const matchesSearch = interview.candidate.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         interview.jobTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === 'scheduled' ? interview.status === 'Scheduled' : interview.status === 'Completed';
    return matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Inter']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RecruiterNavbar />
        
        {/* Main Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#007F5F] font-['Poppins'] mb-2">AI Interviews</h1>
              <p className="text-[#007F5F]/80">Review and manage all AI-conducted interviews</p>
            </div>
            
            <Link href="/recruiter/interviews/schedule">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#FFB300] text-white rounded-full font-semibold hover:bg-[#e6a000] transition">
                Schedule New Interview
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* Tabs and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-[#007F5F]/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="flex space-x-2">
                <button
                  onClick={() => setActiveTab('scheduled')}
                  className={`px-4 py-2 rounded-full font-medium ${activeTab === 'scheduled' ? 'bg-[#007F5F] text-white' : 'bg-[#F5F5DC] text-[#007F5F]'}`}
                >
                  Scheduled
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`px-4 py-2 rounded-full font-medium ${activeTab === 'completed' ? 'bg-[#007F5F] text-white' : 'bg-[#F5F5DC] text-[#007F5F]'}`}
                >
                  Completed
                </button>
              </div>

              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[#007F5F]" />
                </div>
                <input
                  type="text"
                  placeholder="Search candidates..."
                  className="block w-full pl-10 pr-3 py-2 border border-[#007F5F]/30 rounded-full bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Interview List */}
            <div className="space-y-4">
              {filteredInterviews.map((interview) => (
                <div key={interview.id} className="bg-[#FCFCF2] rounded-xl p-4 border border-[#007F5F]/10 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#007F5F]/10 p-3 rounded-full">
                        <Users className="w-6 h-6 text-[#007F5F]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#007F5F]">{interview.candidate}</h3>
                        <p className="text-sm text-[#007F5F]/80">{interview.jobTitle}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-[#007F5F]">
                        <Clock className="w-4 h-4" />
                        <span>{interview.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#007F5F]">
                        <span className="px-3 py-1 rounded-full bg-[#007F5F]/10 text-[#007F5F]">
                          {interview.date}
                        </span>
                      </div>
                      {interview.score && (
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#FFB300]/20 text-[#FFB300] font-medium">
                            Score: {interview.score}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {interview.status === 'Completed' ? (
                        <>
                          <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-2 bg-[#007F5F]/10 text-[#007F5F] rounded-full hover:bg-[#007F5F]/20 transition"
                          >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                          </button>
                          <button className="p-2 bg-[#007F5F]/10 text-[#007F5F] rounded-full hover:bg-[#007F5F]/20 transition">
                            <Download className="w-5 h-5" />
                          </button>
                          <Link href={`/recruiter/interviews/${interview.id}`}>
                            <button className="px-4 py-2 bg-[#FFB300] text-white rounded-full text-sm font-medium hover:bg-[#e6a000] transition">
                              View Report
                            </button>
                          </Link>
                        </>
                      ) : (
                        <Link href={`/recruiter/interviews/${interview.id}/edit`}>
                          <button className="px-4 py-2 bg-[#007F5F] text-white rounded-full text-sm font-medium hover:bg-[#005a45] transition">
                            Manage
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Transcript Preview (for completed interviews) */}
                  {interview.status === 'Completed' && (
                    <div className="mt-4 pl-14">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="bg-[#FFB300]/10 p-2 rounded-full">
                          <MessageSquare className="w-4 h-4 text-[#FFB300]" />
                        </div>
                        <div className="bg-[#F5F5DC] p-3 rounded-lg flex-1">
                          <p className="text-sm text-[#007F5F]">"Can you explain your experience with React?"</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-[#007F5F]/10 p-2 rounded-full">
                          <User className="w-4 h-4 text-[#007F5F]" />
                        </div>
                        <div className="bg-white p-3 rounded-lg flex-1 border border-[#007F5F]/10">
                          <p className="text-sm text-[#007F5F]">"I've worked with React for 3 years on several projects..." [AI analyzing response]</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
              <h3 className="text-lg font-semibold text-[#007F5F] mb-4">AI Interview Stats</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-[#007F5F]/80 mb-1">Average Score</p>
                  <p className="text-2xl font-bold text-[#FFB300]">85%</p>
                </div>
                <div>
                  <p className="text-sm text-[#007F5F]/80 mb-1">Total Conducted</p>
                  <p className="text-2xl font-bold text-[#007F5F]">24</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
              <h3 className="text-lg font-semibold text-[#007F5F] mb-4">Recent Feedback</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-[#FFB300]/10 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-[#FFB300]" />
                  </div>
                  <p className="text-sm text-[#007F5F]">"Excellent technical depth from Ahmad Khan"</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#FFB300]/10 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-[#FFB300]" />
                  </div>
                  <p className="text-sm text-[#007F5F]">"Sarah Ahmed showed strong problem-solving skills"</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
              <h3 className="text-lg font-semibold text-[#007F5F] mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link href="/recruiter/interviews/schedule">
                  <button className="w-full text-left px-4 py-3 bg-[#F5F5DC] hover:bg-[#007F5F]/10 text-[#007F5F] rounded-lg transition flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Schedule New Interview
                  </button>
                </Link>
                <Link href="/recruiter/interviews/templates">
                  <button className="w-full text-left px-4 py-3 bg-[#F5F5DC] hover:bg-[#007F5F]/10 text-[#007F5F] rounded-lg transition flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Manage Question Templates
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterAIInterview;