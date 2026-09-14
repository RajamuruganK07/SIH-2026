import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, CheckCircle2, TrendingUp, ArrowRight, RefreshCw, Sparkles, BookOpen } from 'lucide-react';

export const QuizResultView: React.FC = () => {
  const { activeQuizResult, selectedAssessment, setActiveTab, startCourse, courses } = useApp();

  if (!activeQuizResult || !selectedAssessment) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-slate-600">No quiz result found.</p>
        <button
          onClick={() => setActiveTab('learner-dashboard')}
          className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  const isPassed = activeQuizResult.percentage >= selectedAssessment.passingScore;

  return (
    <div className="max-w-2xl mx-auto space-y-8 pb-12">
      {/* Result Card Header */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg text-center space-y-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto ${
            isPassed ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
          }`}
        >
          <Award className="w-10 h-10" />
        </div>

        <div>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">
            Competency Assessment Evaluation
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-2">{selectedAssessment.title}</h1>
          <p className="text-xs text-slate-500 mt-1">Completed on {activeQuizResult.date}</p>
        </div>

        {/* Score metrics grid */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl">
            <p className="text-[11px] text-slate-500 font-semibold">Total Score</p>
            <p className="text-xl font-extrabold text-slate-900">
              {activeQuizResult.score}/{activeQuizResult.totalQuestions}
            </p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <p className="text-[11px] text-slate-500 font-semibold">Accuracy</p>
            <p className="text-xl font-extrabold text-blue-600">{activeQuizResult.percentage}%</p>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl">
            <p className="text-[11px] text-slate-500 font-semibold">Result State</p>
            <p
              className={`text-sm font-extrabold mt-1 ${
                isPassed ? 'text-emerald-600 uppercase' : 'text-amber-600 uppercase'
              }`}
            >
              {isPassed ? 'PASSED' : 'RETRY NEEDED'}
            </p>
          </div>
        </div>
      </div>

      {/* Skill Profile Delta Update Visualizer */}
      <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 rounded-2xl text-white shadow-xl space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <RefreshCw className="w-5 h-5 text-emerald-400 animate-spin" />
          <h3 className="text-base font-bold">Skill Score Profile Updated</h3>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-bold uppercase ml-auto">
            Live Engine Mutation
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 font-medium">{selectedAssessment.skillName} Score</p>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-lg font-bold text-slate-400 line-through">
                {activeQuizResult.scoreBefore}%
              </span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              <span className="text-2xl font-extrabold text-emerald-400">
                {activeQuizResult.scoreAfter}%
              </span>
            </div>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 font-extrabold text-xs flex items-center gap-1 border border-emerald-500/30">
            <TrendingUp className="w-4 h-4" />
            <span>+{activeQuizResult.scoreAfter - activeQuizResult.scoreBefore}% Boost</span>
          </div>
        </div>

        <p className="text-xs text-slate-300">
          Your manager heatmap and skill baseline radar have automatically updated to reflect this score improvement.
        </p>
      </div>

      {/* Recommended Next Step */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-blue-600" />
          <h3 className="text-base font-bold text-slate-900">Recommended Next Step</h3>
        </div>
        <p className="text-xs text-slate-600">
          Based on your assessment performance, continue your learning trajectory with advanced JPA data persistence.
        </p>
        <button
          onClick={() => {
            const crs = courses.find((c) => c.skillId === activeQuizResult.skillId);
            if (crs) startCourse(crs.id);
            else setActiveTab('courses');
          }}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
        >
          <BookOpen className="w-4 h-4" />
          <span>Continue with Next Module</span>
        </button>
      </div>
    </div>
  );
};
