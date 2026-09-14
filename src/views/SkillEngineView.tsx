import React from 'react';
import { useApp } from '../context/AppContext';
import { Cpu, Sparkles, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { SkillEngineDiagram } from '../components/learner/SkillEngineDiagram';

export const SkillEngineView: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center gap-2">
          <Cpu className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-extrabold text-slate-900">AI Skill Engine & Recommender Pipeline</h1>
        </div>
        <p className="text-xs text-slate-500 max-w-2xl">
          The Capacity Connect Skill Engine continuously evaluates organizational competency profiles against role frameworks, generating automated learning paths and post-learning verification assessments.
        </p>
      </div>

      <SkillEngineDiagram />

      {/* Logic Breakdown Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h3 className="text-base font-bold text-slate-900">Gap Prioritization Logic</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Gap magnitude &gt; 25% triggers <strong>HIGH PRIORITY</strong> status. The algorithm schedules mandatory learning modules in the user's weekly learning roadmap.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h3 className="text-base font-bold text-slate-900">Personalized Course Matching</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Course modules are matched by category, difficulty level, and prerequisite completion state to ensure optimal learning trajectory.
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
            3
          </div>
          <h3 className="text-base font-bold text-slate-900">Dynamic Score Mutation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Completing an AI quiz calculates score accuracy, adding a delta boost to the learner profile and updating team heatmaps in real time.
          </p>
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold">Ready to test the AI Assessment Generator?</h3>
          <p className="text-xs text-blue-100 mt-1">Generate a custom quiz topic and watch your skill score increase live!</p>
        </div>
        <button
          onClick={() => setActiveTab('quiz-generator')}
          className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2"
        >
          <span>Launch AI Quiz Generator</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
