import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BarChart3, AlertCircle, ArrowRight, CheckCircle2, Sparkles, Filter } from 'lucide-react';
import { SkillComparisonBarChart } from '../components/analytics/SkillComparisonBarChart';
import { PriorityLevel } from '../types';

export const SkillGapView: React.FC = () => {
  const { currentUser, setActiveTab, courses, startCourse } = useApp();
  const [filterPriority, setFilterPriority] = useState<'ALL' | PriorityLevel>('ALL');

  const filteredSkills = currentUser.skills.filter((s) => {
    if (filterPriority === 'ALL') return true;
    return s.priority === filterPriority;
  });

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-extrabold text-slate-900">Skill Gap Analysis</h1>
            <span className="text-xs bg-rose-50 text-rose-700 border border-rose-200 font-bold px-2.5 py-0.5 rounded-full">
              Automated Diagnosis
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Comparing current employee capabilities against target benchmarks to determine learning priorities.
          </p>
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-2 text-xs">
          <Filter className="w-4 h-4 text-slate-400" />
          <span className="font-semibold text-slate-600">Filter Priority:</span>
          {(['ALL', 'HIGH', 'MEDIUM', 'LOW'] as const).map((p) => (
            <button
              key={p}
              onClick={() => setFilterPriority(p)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                filterPriority === p
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
          Current Skills vs Required Benchmark
        </h3>
        <SkillComparisonBarChart skills={currentUser.skills} />
      </div>

      {/* Detailed Skill Gap Cards Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900">Individual Skill Gap Breakdown</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredSkills.map((sk) => {
            const gap = Math.max(0, sk.target - sk.current);
            const isHigh = sk.priority === 'HIGH';
            const isMed = sk.priority === 'MEDIUM';

            return (
              <div
                key={sk.skillId}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400">{sk.category}</span>
                    <h4 className="text-base font-bold text-slate-900">{sk.skillName}</h4>
                  </div>
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      isHigh
                        ? 'bg-rose-100 text-rose-800 border border-rose-200'
                        : isMed
                        ? 'bg-amber-100 text-amber-800 border border-amber-200'
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}
                  >
                    Priority: {sk.priority}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>
                      Current: <strong className="text-blue-600">{sk.current}%</strong>
                    </span>
                    <span>
                      Target: <strong className="text-slate-900">{sk.target}%</strong>
                    </span>
                    <span className="text-rose-600 font-bold">Gap: {gap}%</span>
                  </div>

                  <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex">
                    <div className="bg-blue-600 h-full transition-all" style={{ width: `${sk.current}%` }}></div>
                    <div className="bg-rose-200 h-full transition-all" style={{ width: `${gap}%` }}></div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Recommended focus area</span>
                  <button
                    onClick={() => {
                      const matched = courses.find((c) => c.skillId === sk.skillId);
                      if (matched) startCourse(matched.id);
                      else setActiveTab('courses');
                    }}
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1 shadow-md shadow-blue-500/20"
                  >
                    <span>View Recommended Learning</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
