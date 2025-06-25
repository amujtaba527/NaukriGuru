"use client"

import AdminNavbar from '@/components/AdminNavbar';
import React, { useState } from 'react';

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
      registrationDate: '2025-056-15'
    },
    // Add all other users from your example
  ];

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AdminNavbar/>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>
          <p className="text-gray-600 mt-2">Search by name, email, role, status</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder="Search users..."
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
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                      <button className="rounded-full text-blue-600 hover:text-blue-900 bg-blue-100 px-1">View</button>
                      <button className="text-gray-600 hover:text-gray-900 px-1">Edit</button>
                      {user.status === 'Active' || user.status === 'Suspended' ? (
                        <button className="rounded-full text-red-600 hover:text-red-900 bg-red-100 px-1">Deactivate</button>
                      ) : (
                        <button className="rounded-full text-green-600 hover:text-green-900 bg-green-100 px-1">Activate</button>
                      )}
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
  } else if (status === 'Inactive') {
    bgColor = 'bg-yellow-100';
    textColor = 'text-yellow-800';
  } else if (status === 'Suspended') {
    bgColor = 'bg-red-100';
    textColor = 'text-red-800';
  }

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${bgColor} ${textColor}`}>
      {status}
    </span>
  );
};

export default UsersManagement;