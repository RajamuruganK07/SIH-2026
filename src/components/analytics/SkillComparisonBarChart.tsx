import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { SkillScore } from '../../types';

interface Props {
  skills: SkillScore[];
}

export const SkillComparisonBarChart: React.FC<Props> = ({ skills }) => {
  const data = skills.map((s) => ({
    name: s.skillName,
    Current: s.current,
    Target: s.target,
    Gap: Math.max(0, s.target - s.current),
  }));

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 25 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: '#64748b' }}
            interval={0}
            angle={-20}
            textAnchor="end"
          />
          <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#64748b' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0f172a',
              borderRadius: '12px',
              border: 'none',
              color: '#fff',
              fontSize: '12px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            }}
            formatter={(value: any, name: any) => [`${value}%`, name]}
          />
          <Legend wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }} />
          <Bar dataKey="Current" fill="#2563eb" radius={[4, 4, 0, 0]} name="Current Score (%)" />
          <Bar dataKey="Target" fill="#94a3b8" radius={[4, 4, 0, 0]} name="Target Baseline (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
