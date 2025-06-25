// components/AdminDashboard.tsx
import AdminNavbar from '@/components/AdminNavbar';
import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AdminNavbar/>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Overview of platform performance and key metrics</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Users" value="12,345" />
          <StatCard title="Job Posts" value="5,678" />
          <StatCard title="Resume Uploads" value="9,012" />
          <StatCard title="System Uptime" value="99.9%" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
              <div className="flex flex-wrap gap-4">
                <ActionButton title="Manage Users" />
                <ActionButton title="Moderate Job Posts" />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <ActivityItem 
                  type="User" 
                  name="Ahmad Mujtaba" 
                  action="New user registered" 
                />
                <ActivityItem 
                  type="Job" 
                  name="Software Engineer" 
                  action="Job post submitted" 
                />
                <ActivityItem 
                  type="Resume" 
                  name="Sarah Lee" 
                  action="Resume uploaded" 
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* System Health */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">System Health</h2>
              <div className="space-y-4">
                <MetricItem title="Error Rate" value="0.1%" />
                <MetricItem title="Pending Moderation" value="5" />
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Alerts & Notifications</h2>
              <AlertItem 
                type="System Alert" 
                message="High server load detected" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sub-components
const StatCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-3xl font-bold text-gray-800">{value}</p>
  </div>
);

const ActionButton = ({ title }: { title: string }) => (
  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
    {title}
  </button>
);

const ActivityItem = ({ type, name, action }: { type: string; name: string; action: string }) => (
  <div className="flex items-start">
    <input type="checkbox" className="mt-1 mr-3" />
    <div>
      <span className="font-medium text-gray-700">{type}: {name}</span>
      <p className="text-sm text-gray-500">{action}</p>
    </div>
  </div>
);

const MetricItem = ({ title, value }: { title: string; value: string }) => (
  <div>
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-xl font-bold text-gray-800">{value}</p>
  </div>
);

const AlertItem = ({ type, message }: { type: string; message: string }) => (
  <div className="flex items-start">
    <input type="checkbox" className="mt-1 mr-3" />
    <div>
      <span className="font-medium text-gray-700">{type}</span>
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  </div>
);

export default AdminDashboard;