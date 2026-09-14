import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from 'recharts';
import { SkillScore } from '../../types';

interface Props {
  skills: SkillScore[];
}

export const SkillRadarChart: React.FC<Props> = ({ skills }) => {
  const data = skills.map((s) => ({
    subject: s.skillName,
    A: s.current,
    B: s.target,
    fullMark: 100,
  }));

  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#cbd5e1" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#475569' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10, fill: '#94a3b8' }} />
          <Radar name="Current Competency" dataKey="A" stroke="#2563eb" fill="#2563eb" fillOpacity={0.4} />
          <Radar name="Target Requirement" dataKey="B" stroke="#4f46e5" fill="#4f46e5" fillOpacity={0.15} strokeDasharray="4 4" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0f172a',
              borderRadius: '12px',
              border: 'none',
              color: '#fff',
              fontSize: '12px',
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
