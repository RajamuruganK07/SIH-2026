import React from 'react';
import { useApp } from '../context/AppContext';
import {
  UserCheck,
  Mail,
  Building,
  Briefcase,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  FileCheck,
} from 'lucide-react';
import { SkillRadarChart } from '../components/analytics/SkillRadarChart';

export const ProfileView: React.FC = () => {
  const { currentUser } = useApp();

  return (
    <div className="space-y-8 pb-12">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-6">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="w-24 h-24 rounded-2xl object-cover ring-4 ring-blue-500/20 shadow-md"
        />

        <div className="flex-1 text-center md:text-left space-y-2">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h1 className="text-2xl font-extrabold text-slate-900">{currentUser.name}</h1>
            <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold px-2.5 py-0.5 rounded-full w-fit mx-auto md:mx-0">
              {currentUser.role}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-slate-400" />
              {currentUser.title}
            </span>
            <span className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-slate-400" />
              {currentUser.department}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-slate-400" />
              {currentUser.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              Exp: {currentUser.experience}
            </span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl text-center space-y-1 shrink-0">
          <span className="text-xs font-semibold text-blue-700">Overall Competency</span>
          <p className="text-3xl font-extrabold text-blue-600">{currentUser.overallSkillScore}%</p>
          <span className="text-[10px] text-blue-500 font-medium">Level 3 Practitioner</span>
        </div>
      </div>

      {/* Radar Chart & Skill Baseline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Skill Baseline Radar Profile
          </h3>
          <SkillRadarChart skills={currentUser.skills} />
        </div>

        {/* Skill Progress Bars */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
            Skill Domain Competency Scores
          </h3>

          <div className="space-y-4">
            {currentUser.skills.map((sk) => (
              <div key={sk.skillId} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{sk.skillName}</span>
                  <span className="text-slate-500 font-medium">
                    Current: <strong className="text-blue-600">{sk.current}%</strong> / Target: {sk.target}%
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-600 h-full rounded-full transition-all"
                    style={{ width: `${sk.current}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* History & Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Assessment History */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-blue-600" />
            <span>Assessment & Evaluation History</span>
          </h3>

          <div className="space-y-3">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-slate-900">Spring Boot REST API Assessment</p>
                <p className="text-slate-500 text-[11px]">Score: 8/10 (80%) • Date: Sep 12, 2026</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                PASSED
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-slate-900">Cloud Infrastructure Benchmark</p>
                <p className="text-slate-500 text-[11px]">Score: 7/10 (70%) • Date: Sep 04, 2026</p>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                PASSED
              </span>
            </div>
          </div>
        </div>

        {/* Earned Certificates */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600" />
            <span>Verified Capacity Certificates</span>
          </h3>

          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex items-center gap-3">
              <Award className="w-8 h-8 text-blue-600 shrink-0" />
              <div>
                <p className="font-bold text-slate-900 text-xs">Enterprise Leadership & Team Management</p>
                <p className="text-[10px] text-slate-500">Issued by SIH Capacity Connect • Verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
