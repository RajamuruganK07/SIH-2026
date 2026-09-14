import React from 'react';
import { MOCK_TEAM_MEMBERS } from '../../mockData';
import { AlertTriangle } from 'lucide-react';

export const TeamSkillHeatmap: React.FC = () => {
  const skillsList = ['Spring Boot', 'Cloud', 'React', 'Communication', 'Leadership', 'AI/ML'];

  const getHeatColor = (score: number) => {
    if (score < 50) return 'bg-rose-100 text-rose-800 border-rose-200 font-bold';
    if (score < 75) return 'bg-amber-100 text-amber-800 border-amber-200 font-semibold';
    return 'bg-emerald-100 text-emerald-800 border-emerald-200 font-bold';
  };

  const getHeatLabel = (score: number) => {
    if (score < 50) return 'Low';
    if (score < 75) return 'Medium';
    return 'High';
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">Team Competency Heatmap</h3>
            <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-200 font-semibold px-2 py-0.5 rounded-full">
              Manager View
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Real-time matrix mapping team members against critical skill domain thresholds.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-rose-200 border border-rose-300"></span>
            <span className="text-slate-600 font-medium text-[11px]">Low (&lt;50%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-200 border border-amber-300"></span>
            <span className="text-slate-600 font-medium text-[11px]">Med (50-74%)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-emerald-200 border border-emerald-300"></span>
            <span className="text-slate-600 font-medium text-[11px]">High (75%+)</span>
          </div>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="p-3 text-xs font-bold text-slate-700 rounded-l-xl">Team Member</th>
              <th className="p-3 text-xs font-bold text-slate-700">Role</th>
              <th className="p-3 text-xs font-bold text-slate-700 text-center">Avg Score</th>
              {skillsList.map((sk) => (
                <th key={sk} className="p-3 text-xs font-bold text-slate-700 text-center">
                  {sk}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_TEAM_MEMBERS.map((member) => (
              <tr key={member.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="p-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-200"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">{member.name}</p>
                      <p className="text-[10px] text-slate-500">{member.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-3 text-xs text-slate-600 font-medium">{member.title}</td>
                <td className="p-3 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-800">
                    {member.overallScore}%
                  </span>
                </td>
                {skillsList.map((sk) => {
                  const score = member.skills[sk] || 0;
                  return (
                    <td key={sk} className="p-2 text-center">
                      <div
                        className={`py-1.5 px-2 rounded-lg border text-xs flex flex-col items-center justify-center transition-transform hover:scale-105 ${getHeatColor(
                          score
                        )}`}
                      >
                        <span className="text-xs font-bold">{score}%</span>
                        <span className="text-[9px] uppercase tracking-wider opacity-80 font-medium">
                          {getHeatLabel(score)}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insight Alert Box */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <h4 className="font-bold text-amber-900">Manager Skill Gap Alert</h4>
          <p className="text-amber-700 text-[11px] mt-0.5">
            <strong>Java Spring Boot</strong> & <strong>AI/ML</strong> show critical low-competency clusters across Engineers (Rajamurugan, Meena Devi). Recommended action: Assign "Spring Boot Fundamentals" course path.
          </p>
        </div>
      </div>
    </div>
  );
};
