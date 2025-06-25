"use client"
import React from 'react';
import AdminNavbar from '@/components/AdminNavbar';
import { Briefcase, Users, FileText, BarChart2, Shield, Settings, Mail, Search } from 'lucide-react';
import Link from 'next/link';

const AdminDashboard = () => {
  // Sample data
  const stats = [
    { title: "Total Users", value: "12,345", icon: <Users className="w-6 h-6 text-[#FFB300]" /> },
    { title: "Job Posts", value: "5,678", icon: <Briefcase className="w-6 h-6 text-[#FFB300]" /> },
    { title: "Resume Uploads", value: "9,012", icon: <FileText className="w-6 h-6 text-[#FFB300]" /> },
    { title: "System Uptime", value: "99.9%", icon: <Shield className="w-6 h-6 text-[#FFB300]" /> }
  ];

  const recentActivities = [
    { user: "Alex Chen", action: "New user registered", time: "2 mins ago" },
    { user: "Software Engineer", action: "Job post submitted", time: "15 mins ago" },
    { user: "Sarah Lee", action: "Resume uploaded", time: "32 mins ago" }
  ];

  const systemAlerts = [
    { title: "High Server Load", message: "Increased traffic detected on API endpoints", time: "1 hour ago" },
    { title: "Database Backup", message: "Nightly backup completed successfully", time: "3 hours ago" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC] font-['Inter']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AdminNavbar />
        
        {/* Main Content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#007F5F] font-['Poppins']">Admin Dashboard</h1>
              <p className="text-[#007F5F]/80">Overview of platform performance and key metrics</p>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-[#007F5F]" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="block w-full pl-10 pr-3 py-2 border border-[#007F5F]/30 rounded-full bg-[#F5F5DC]/20 focus:ring-2 focus:ring-[#007F5F] focus:border-[#007F5F] text-[#007F5F]"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-[#007F5F]/80">{stat.title}</h3>
                    <p className="text-3xl font-bold text-[#007F5F] mt-2">{stat.value}</p>
                  </div>
                  <div className="p-2 bg-[#007F5F]/10 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
                <h2 className="text-xl font-semibold text-[#007F5F] mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/admin/users">
                    <button className="w-full text-left px-4 py-3 bg-[#F5F5DC] hover:bg-[#007F5F]/10 text-[#007F5F] rounded-lg transition flex items-center gap-3">
                      <Users className="w-5 h-5" />
                      Manage Users
                    </button>
                  </Link>
                  <Link href="/admin/jobs">
                    <button className="w-full text-left px-4 py-3 bg-[#F5F5DC] hover:bg-[#007F5F]/10 text-[#007F5F] rounded-lg transition flex items-center gap-3">
                      <Briefcase className="w-5 h-5" />
                      Moderate Job Posts
                    </button>
                  </Link>
                  <Link href="/admin/settings">
                    <button className="w-full text-left px-4 py-3 bg-[#F5F5DC] hover:bg-[#007F5F]/10 text-[#007F5F] rounded-lg transition flex items-center gap-3">
                      <Settings className="w-5 h-5" />
                      System Settings
                    </button>
                  </Link>
                  <Link href="/admin/reports">
                    <button className="w-full text-left px-4 py-3 bg-[#F5F5DC] hover:bg-[#007F5F]/10 text-[#007F5F] rounded-lg transition flex items-center gap-3">
                      <BarChart2 className="w-5 h-5" />
                      Generate Reports
                    </button>
                  </Link>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
                <h2 className="text-xl font-semibold text-[#007F5F] mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <input 
                        type="checkbox" 
                        className="mt-1 accent-[#FFB300]"
                      />
                      <div>
                        <p className="text-[#007F5F]">
                          <span className="font-medium">{activity.user}</span> - {activity.action}
                        </p>
                        <p className="text-sm text-[#007F5F]/60">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* System Health */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
                <h2 className="text-xl font-semibold text-[#007F5F] mb-4">System Health</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-[#007F5F]">Error Rate</span>
                      <span className="text-sm font-medium text-[#FFB300]">0.1%</span>
                    </div>
                    <div className="w-full bg-[#F5F5DC] rounded-full h-2">
                      <div className="bg-[#FFB300] h-2 rounded-full" style={{ width: '1%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-[#007F5F]">Pending Moderation</span>
                      <span className="text-sm font-medium text-[#007F5F]">5</span>
                    </div>
                    <div className="w-full bg-[#F5F5DC] rounded-full h-2">
                      <div className="bg-[#007F5F] h-2 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alerts & Notifications */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
                <h2 className="text-xl font-semibold text-[#007F5F] mb-4">Alerts & Notifications</h2>
                <div className="space-y-4">
                  {systemAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <input 
                        type="checkbox" 
                        className="mt-1 accent-[#FFB300]"
                      />
                      <div>
                        <p className="font-medium text-[#007F5F]">{alert.title}</p>
                        <p className="text-sm text-[#007F5F]/80">{alert.message}</p>
                        <p className="text-xs text-[#007F5F]/60 mt-1">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Support */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#007F5F]/10">
                <h2 className="text-xl font-semibold text-[#007F5F] mb-4">Quick Support</h2>
                <p className="text-sm text-[#007F5F]/80 mb-4">
                  Need help with anything? Contact our support team directly.
                </p>
                <Link href="/admin/support">
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#FFB300] text-white rounded-lg font-medium hover:bg-[#e6a000] transition">
                    <Mail className="w-5 h-5" />
                    Contact Support
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

export default AdminDashboard;