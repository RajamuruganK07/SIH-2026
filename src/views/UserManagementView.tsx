import React from 'react';
import { useApp } from '../context/AppContext';
import { Users, Search, MoreVertical, Shield, CheckCircle2, UserX } from 'lucide-react';
import { MOCK_TEAM_MEMBERS } from '../mockData';

export const UserManagementView: React.FC = () => {
  const { addToast } = useApp();

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-extrabold text-slate-900">User Management & Competency Roster</h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Manage organization employee accounts, role permissions, and individual skill progress.
            </p>
          </div>

          <button
            onClick={() => addToast('Add User', 'User invite modal triggered', 'info')}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md"
          >
            + Add New Employee
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-700">
              <th className="p-4">Name & Email</th>
              <th className="p-4">Department</th>
              <th className="p-4">Role</th>
              <th className="p-4 text-center">Skill Score</th>
              <th className="p-4 text-center">Active Courses</th>
              <th className="p-4 text-center">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-xs">
            {MOCK_TEAM_MEMBERS.map((user) => (
              <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-slate-900">{user.name}</p>
                      <p className="text-[10px] text-slate-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-slate-600 font-medium">{user.department}</td>
                <td className="p-4">
                  <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                    {user.title}
                  </span>
                </td>
                <td className="p-4 text-center font-extrabold text-blue-600">{user.overallScore}%</td>
                <td className="p-4 text-center font-semibold text-slate-700">{user.activeCourses}</td>
                <td className="p-4 text-center">
                  <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">
                    ACTIVE
                  </span>
                </td>
                <td className="p-4 text-right">
                  <button
                    onClick={() => addToast('User Action', `Viewed profile for ${user.name}`, 'info')}
                    className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded font-semibold text-[11px]"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
