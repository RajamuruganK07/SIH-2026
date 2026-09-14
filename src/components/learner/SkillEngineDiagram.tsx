import React, { useState } from 'react';
import {
  UserCheck,
  Award,
  Cpu,
  Sparkles,
  BookOpen,
  CheckCircle2,
  RefreshCw,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

export const SkillEngineDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(3);

  const steps = [
    {
      id: 1,
      title: 'User Role & Org Dept',
      icon: UserCheck,
      short: '1. User',
      description: 'Employee or learner authenticates with assigned role (Developer, Tech Lead, Manager) and department benchmarks.',
    },
    {
      id: 2,
      title: 'Skill Baseline',
      icon: Award,
      short: '2. Profile',
      description: 'System captures initial competency scores across technical, soft skills, leadership, and domain knowledge.',
    },
    {
      id: 3,
      title: 'Skill Engine Comparison',
      icon: Cpu,
      short: '3. Skill Engine',
      description: 'AI compares Current Skills vs Target Role Requirements to measure gap magnitude and priority level.',
    },
    {
      id: 4,
      title: 'AI Recommender',
      icon: Sparkles,
      short: '4. Recommender',
      description: 'Intelligent recommender matches targeted learning modules, courses, and documentation to close identified gaps.',
    },
    {
      id: 5,
      title: 'Targeted Learning',
      icon: BookOpen,
      short: '5. Learn',
      description: 'Learner engages with interactive course material, video tutorials, practice exercises, and technical guides.',
    },
    {
      id: 6,
      title: 'Competency Assessment',
      icon: CheckCircle2,
      short: '6. Assess',
      description: 'AI-assisted quiz generator builds customized skill tests to objectively measure post-learning knowledge.',
    },
    {
      id: 7,
      title: 'Dynamic Profile Update',
      icon: RefreshCw,
      short: '7. Update',
      description: 'Assessment results dynamically update skill scores, closed gaps, streak metrics, and manager heatmaps in real time.',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-900">How Capacity Connect Works</h3>
            <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full">
              AI Competency Architecture
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Click any step to inspect the end-to-end competency development workflow from the hackathon framework.
          </p>
        </div>
        <div className="text-xs text-slate-500 font-medium">
          Step <span className="font-bold text-blue-600">{activeStep}</span> of 7
        </div>
      </div>

      {/* 7-Step Timeline Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
        {steps.map((step) => {
          const Icon = step.icon;
          const isActive = activeStep === step.id;
          const isPassed = activeStep > step.id;

          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all relative ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25 scale-105 z-10'
                  : isPassed
                  ? 'bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-100'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 font-bold text-xs ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : isPassed
                    ? 'bg-blue-200/80 text-blue-800'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold leading-tight">{step.short}</span>
            </button>
          );
        })}
      </div>

      {/* Active Step Details Card */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              Step {steps[activeStep - 1].id} Details
            </span>
            <h4 className="text-base font-bold text-white">{steps[activeStep - 1].title}</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {steps[activeStep - 1].description}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            disabled={activeStep === 1}
            onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors disabled:opacity-40"
          >
            Previous
          </button>
          <button
            disabled={activeStep === 7}
            onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors flex items-center gap-1 shadow-md shadow-blue-500/30 disabled:opacity-40"
          >
            <span>Next Step</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
