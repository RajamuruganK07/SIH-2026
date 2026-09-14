import React from 'react';
import { useApp } from '../context/AppContext';
import { TeamSkillHeatmap } from '../components/analytics/TeamSkillHeatmap';
import { Users, BarChart3, TrendingUp, AlertTriangle, BookOpen, ShieldCheck } from 'lucide-react';

export const ManagerDashboardView: React.FC = () => {
  const { currentUser, setActiveTab } = useApp();

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-blue-950 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 border border-indigo-900/50">
        <div className="space-y-2">
          <span className="bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
            Engineering Manager Portal
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Welcome back, {currentUser.name} 👋
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Monitor team-level competency, identify skill bottleneck clusters, and assign targeted learning resources.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('analytics')}
          className="px-5 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all shrink-0"
        >
          <BarChart3 className="w-4 h-4" />
          <span>Full Team Analytics</span>
        </button>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-semibold text-slate-500">Direct Team Members</span>
          <p className="text-3xl font-extrabold text-slate-900">5 Engineers</p>
          <span className="text-[11px] text-slate-500 font-medium">Engineering Dept</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-semibold text-slate-500">Avg Team Skill Score</span>
          <p className="text-3xl font-extrabold text-blue-600">78%</p>
          <span className="text-[11px] text-emerald-600 font-semibold">+4% growth this quarter</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-semibold text-slate-500">Critical Skill Gaps</span>
          <p className="text-3xl font-extrabold text-rose-600">2 Gaps</p>
          <span className="text-[11px] text-rose-600 font-medium">Spring Boot & AI/ML</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <span className="text-xs font-semibold text-slate-500">Training Completion</span>
          <p className="text-3xl font-extrabold text-indigo-600">84%</p>
          <span className="text-[11px] text-slate-500 font-medium">12 completed courses</span>
        </div>
      </div>

      {/* Team Competency Heatmap */}
      <TeamSkillHeatmap />
    </div>
  );
};
