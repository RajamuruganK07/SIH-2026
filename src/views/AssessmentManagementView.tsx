import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, Plus, Edit3, CheckCircle2 } from 'lucide-react';

export const AssessmentManagementView: React.FC = () => {
  const { assessments, addToast } = useApp();

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-extrabold text-slate-900">Assessment Management Studio</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Configure question banks, passing thresholds, and AI prompt evaluation templates.
          </p>
        </div>

        <button
          onClick={() => addToast('Assessment Created', 'Opened assessment builder modal', 'info')}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>New Assessment</span>
        </button>
      </div>

      <div className="space-y-4">
        {assessments.map((asm) => (
          <div key={asm.id} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                {asm.skillName}
              </span>
              <h3 className="text-base font-bold text-slate-900">{asm.title}</h3>
              <p className="text-xs text-slate-500">
                {asm.questionCount} Questions • Passing Score: {asm.passingScore}% • Difficulty: {asm.difficulty}
              </p>
            </div>

            <button
              onClick={() => addToast('Assessment Config', `Configured questions for ${asm.title}`, 'info')}
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-xl flex items-center gap-1"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Configure</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
