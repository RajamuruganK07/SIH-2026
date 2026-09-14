import React from 'react';
import { useApp } from '../context/AppContext';
import { OrgSkillHeatmap } from '../components/analytics/OrgSkillHeatmap';
import { ShieldCheck, Users, BookOpen, Award, PieChart, Settings, FileText } from 'lucide-react';

export const AdminDashboardView: React.FC = () => {
  const { currentUser, setActiveTab } = useApp();

  return (
    <div className="space-y-8 pb-12">
      {/* Admin Header */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-slate-800">
        <div className="space-y-2">
          <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Head of Capacity Building • Admin
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Enterprise Admin Portal • {currentUser.name}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Organization-wide capacity analytics, competency benchmarks, management tools, and report generator.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('user-management')}
            className="px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5"
          >
            <Users className="w-4 h-4" />
            <span>User Admin</span>
          </button>
          <button
            onClick={() => setActiveTab('course-management')}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4" />
            <span>Course Admin</span>
          </button>
        </div>
      </div>

      {/* 6 Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-[11px] font-semibold text-slate-500">Total Learners</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">341</p>
          <span className="text-[10px] text-slate-400">Across 5 depts</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-[11px] font-semibold text-slate-500">Active Learners</p>
          <p className="text-2xl font-extrabold text-blue-600 mt-1">285</p>
          <span className="text-[10px] text-emerald-600 font-semibold">83% engagement</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-[11px] font-semibold text-slate-500">Active Courses</p>
          <p className="text-2xl font-extrabold text-indigo-600 mt-1">14</p>
          <span className="text-[10px] text-slate-400">Published</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-[11px] font-semibold text-slate-500">Assessments</p>
          <p className="text-2xl font-extrabold text-slate-900 mt-1">28</p>
          <span className="text-[10px] text-slate-400">AI generated</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-[11px] font-semibold text-slate-500">Avg Competency</p>
          <p className="text-2xl font-extrabold text-emerald-600 mt-1">76%</p>
          <span className="text-[10px] text-emerald-600 font-semibold">+6% YoY growth</span>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-center">
          <p className="text-[11px] font-semibold text-slate-500">Critical Gaps</p>
          <p className="text-2xl font-extrabold text-rose-600 mt-1">18</p>
          <span className="text-[10px] text-rose-600 font-semibold">High priority</span>
        </div>
      </div>

      {/* Organization Skill Heatmap */}
      <OrgSkillHeatmap />
    </div>
  );
};
