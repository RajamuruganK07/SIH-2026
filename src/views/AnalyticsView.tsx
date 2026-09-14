import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  PieChart,
  Download,
  Filter,
  TrendingUp,
  Award,
  Users,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

export const AnalyticsView: React.FC = () => {
  const { addToast } = useApp();
  const [selectedDept, setSelectedDept] = useState('All');

  const monthlyGrowthData = [
    { month: 'Apr', Competency: 62, Engagement: 55 },
    { month: 'May', Competency: 65, Engagement: 60 },
    { month: 'Jun', Competency: 68, Engagement: 72 },
    { month: 'Jul', Competency: 72, Engagement: 78 },
    { month: 'Aug', Competency: 75, Engagement: 84 },
    { month: 'Sep', Competency: 78, Engagement: 88 },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <PieChart className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-extrabold text-slate-900">Capacity Analytics & Intelligence</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Enterprise analytics tracking competency growth trajectory, course completions, and department performance.
          </p>
        </div>

        <button
          onClick={() => addToast('Exporting Report', 'Capacity_Connect_SIH26075_Report.pdf generated', 'success')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all shrink-0"
        >
          <Download className="w-4 h-4" />
          <span>Export PDF Report</span>
        </button>
      </div>

      {/* Monthly Competency Growth Area Chart */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">6-Month Organizational Competency Trajectory</h3>
            <p className="text-xs text-slate-500">Average competency growth vs learning platform engagement</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            +16% Growth Since April
          </span>
        </div>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={monthlyGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorComp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4f46e5" stopOpacity={0.0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis domain={[40, 100]} tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', color: '#fff', borderRadius: '12px' }} />
              <Area type="monotone" dataKey="Competency" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorComp)" />
              <Area type="monotone" dataKey="Engagement" stroke="#4f46e5" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorEng)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
