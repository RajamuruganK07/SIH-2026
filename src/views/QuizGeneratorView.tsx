import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { BrainCircuit, Sparkles, Sliders, ArrowRight, Zap } from 'lucide-react';

export const QuizGeneratorView: React.FC = () => {
  const { assessments, setSelectedAssessment, setActiveTab, addToast } = useApp();
  const [topic, setTopic] = useState('Java');
  const [skill, setSkill] = useState('Spring Boot');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [questionCount, setQuestionCount] = useState(5);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      setSelectedAssessment(assessments[0]);
      setActiveTab('active-quiz');
      addToast('AI Quiz Generated', `Generated ${questionCount}-question quiz for ${skill}`, 'success');
    }, 1000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2 text-center">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
          <BrainCircuit className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-extrabold text-slate-900">AI Assessment Generator</h1>
        <p className="text-xs text-slate-500 max-w-lg mx-auto">
          Generate an intelligent, customized competency assessment based on your specific target skill gaps.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Sliders className="w-5 h-5 text-blue-600" />
          <h2 className="text-base font-bold text-slate-900">Configure Quiz Parameters</h2>
        </div>

        <form onSubmit={handleGenerateQuiz} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Topic Domain</label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Java">Java Enterprise</option>
                <option value="Cloud">Cloud Infrastructure</option>
                <option value="AI">AI & Machine Learning</option>
                <option value="Security">Cyber Security</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Skill</label>
              <select
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Spring Boot">Java Spring Boot</option>
                <option value="Cloud Computing">Cloud Computing</option>
                <option value="React">React & Frontend</option>
                <option value="Communication">Communication</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Difficulty Level</label>
              <div className="grid grid-cols-3 gap-2">
                {(['Beginner', 'Intermediate', 'Advanced'] as const).map((diff) => (
                  <button
                    type="button"
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                      difficulty === diff
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Number of Questions</label>
              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={5}>5 Questions (Express)</option>
                <option value={10}>10 Questions (Standard)</option>
                <option value={15}>15 Questions (Deep Evaluation)</option>
              </select>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-xs text-blue-900">
            <Zap className="w-5 h-5 text-blue-600 shrink-0" />
            <p>
              Completing this quiz will automatically calculate your updated score and mutate your skill score baseline in real time.
            </p>
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-sm rounded-xl shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2 transition-all"
          >
            {isGenerating ? (
              <span className="animate-pulse">Generating AI Questions...</span>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Quiz Now</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
