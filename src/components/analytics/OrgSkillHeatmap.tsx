import React from 'react';
import { MOCK_ORG_DEPARTMENTS } from '../../mockData';
import { Building2, AlertCircle, Award } from 'lucide-react';

export const OrgSkillHeatmap: React.FC = () => {
  const coreSkills = ['Java Spring Boot', 'Cloud Computing', 'AI/ML', 'React', 'Communication', 'Leadership'];

  const getIntensity = (val: number) => {
    if (val < 45) return 'bg-rose-500 text-white font-bold';
    if (val < 65) return 'bg-amber-500 text-white font-bold';
    if (val < 80) return 'bg-blue-600 text-white font-bold';
    return 'bg-emerald-600 text-white font-bold';
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">Organization Skill Gap Heatmap</h3>
            <span className="text-[10px] bg-indigo-50 text-indigo-700 border border-indigo-200 font-bold px-2 py-0.5 rounded-full">
              Enterprise Admin
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Cross-departmental matrix tracking average skill levels against enterprise capability benchmarks.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-rose-500"></span>
            <span className="text-[11px] text-slate-600 font-medium">Critical (&lt;45%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-amber-500"></span>
            <span className="text-[11px] text-slate-600 font-medium">Moderate (45-64%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-blue-600"></span>
            <span className="text-[11px] text-slate-600 font-medium">Proficient (65-79%)</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-emerald-600"></span>
            <span className="text-[11px] text-slate-600 font-medium">Mastery (80%+)</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th className="p-3 text-xs font-bold text-slate-700">Department</th>
              <th className="p-3 text-xs font-bold text-slate-700 text-center">Learners</th>
              <th className="p-3 text-xs font-bold text-slate-700 text-center">Avg Score</th>
              <th className="p-3 text-xs font-bold text-slate-700 text-center">Critical Gaps</th>
              {coreSkills.map((s) => (
                <th key={s} className="p-3 text-xs font-bold text-slate-700 text-center">
                  {s}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_ORG_DEPARTMENTS.map((dept) => (
              <tr key={dept.department} className="hover:bg-slate-50 transition-colors">
                <td className="p-3">
                  <span className="text-xs font-bold text-slate-900">{dept.department}</span>
                </td>
                <td className="p-3 text-center text-xs font-semibold text-slate-700">{dept.learnerCount}</td>
                <td className="p-3 text-center">
                  <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-2 py-1 rounded-md border border-blue-200">
                    {dept.avgSkillScore}%
                  </span>
                </td>
                <td className="p-3 text-center">
                  <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded-md border border-rose-200">
                    {dept.criticalGaps}
                  </span>
                </td>
                {coreSkills.map((s) => {
                  const val = dept.skills[s] || 0;
                  return (
                    <td key={s} className="p-2 text-center">
                      <div
                        className={`py-2 px-3 rounded-xl text-xs font-bold shadow-sm transition-transform hover:scale-105 ${getIntensity(
                          val
                        )}`}
                      >
                        {val}%
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
