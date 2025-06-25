"use client"

import AdminNavbar from '@/components/AdminNavbar';
import React, { useState } from 'react';
import { Search, User, Mail, Shield, CheckCircle, XCircle, AlertCircle, ChevronDown, MoreVertical } from 'lucide-react';

const UsersManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample user data
  const users = [
    {
      id: 1,
      name: 'Kazim Raza',
      email: 'kazim@example.com',
      role: 'Job Seeker',
      status: 'Active',
      registrationDate: '2025-05-15'
    },
    {
      id: 2,
      name: 'Ayesha Malik',
      email: 'ayesha@example.com',
      role: 'Recruiter',
      status: 'Active',
      registrationDate: '2025-04-22'
    },
    {
      id: 3,
      name: 'Talha Raza',
      email: 'talha@example.com',
      role: 'Job Seeker',
      status: 'Suspended',
      registrationDate: '2025-03-10'
    },
    {
      id: 4,
      name: 'Sarah Khan',
      email: 'sarah@example.com',
      role: 'Recruiter',
      status: 'Inactive',
      registrationDate: '2025-02-18'
    },
    {
      id: 5,
      name: 'Ali Ahmed',
      email: 'ali@example.com',
      role: 'Admin',
      status: 'Active',
      registrationDate: '2025-01-05'
    },
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F5F5DC] p-6 font-['Inter']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AdminNavbar />
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#007F5F] font-['Poppins']">Users Management</h1>
          <p className="text-gray-700 mt-2">Search and manage all platform users</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-[#007F5F]" />
            </div>
            <input
              type="text"
              placeholder="Search users by name, email, role..."
              className="block w-full pl-10 pr-3 py-2 border border-[#007F5F]/30 rounded-lg bg-white/80 focus:ring-2 focus:ring-[#FFB300] focus:border-[#007F5F] text-[#007F5F]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <button className="px-4 py-2 bg-[#007F5F] text-white rounded-lg hover:bg-[#005a45] transition-colors flex items-center gap-2">
              <User className="w-5 h-5" />
              Add User
            </button>
            <button className="px-4 py-2 border border-[#007F5F] text-[#007F5F] rounded-lg hover:bg-[#007F5F]/10 transition-colors flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Roles
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-[#007F5F]/20">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#007F5F]/10">
              <thead className="bg-[#007F5F]/5">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Registration</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#007F5F] uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#007F5F]/10">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-[#F5F5DC]/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-[#007F5F] rounded-full flex items-center justify-center text-white font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-[#007F5F]">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-[#FFB300]" />
                        <div className="text-sm text-gray-700">{user.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">{user.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {user.registrationDate}
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
                  <span className="font-medium">5</span> users
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
  } else if (status === 'Inactive') {
    bgColor = 'bg-yellow-100';
    textColor = 'text-yellow-800';
    icon = <AlertCircle className="w-4 h-4 mr-1" />;
  } else if (status === 'Suspended') {
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

export default UsersManagement;