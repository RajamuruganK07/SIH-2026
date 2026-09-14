import React from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowRight,
  Sparkles,
  Award,
  ShieldCheck,
  Zap,
  BarChart3,
  BookOpen,
  Users,
  Brain,
  ChevronRight,
  UserCheck,
} from 'lucide-react';
import { SkillEngineDiagram } from '../components/learner/SkillEngineDiagram';

export const LandingPageView: React.FC = () => {
  const { setActiveTab, quickRoleSwitch } = useApp();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs py-2 px-4 text-center font-medium border-b border-blue-800/40">
        <span className="bg-blue-500/20 text-blue-300 border border-blue-400/30 px-2 py-0.5 rounded font-bold mr-2 text-[10px] uppercase">
          SIH 2026 Prototype
        </span>
        Problem Statement ID: <strong className="text-white">SIH26075</strong> • Smart Education • Founder: <strong className="text-blue-300">RAJAMURUGAN</strong> • Team <strong className="text-blue-300">OPERATORZ</strong>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Background Gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center max-w-3xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Digital Capacity Building & Learning Management Portal</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Build Skills. Measure Competency. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Grow Continuously.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A centralized digital capacity-building and learning management platform created by <strong>Rajamurugan</strong> (Founder) that connects organizational roles, skills, learning resources and competency assessment.
          </p>

          <blockquote className="text-sm font-semibold text-blue-800 bg-blue-50/80 border border-blue-200/80 py-2 px-4 rounded-xl inline-block">
            "One Platform • Right Skill • Right Learning • Measurable Growth."
          </blockquote>

          {/* Founder Profile Badge */}
          <div className="flex items-center justify-center gap-3 p-2 bg-white border border-slate-200/80 rounded-2xl shadow-sm max-w-sm mx-auto">
            <img src="/rajamurugan.jpg" alt="Rajamurugan" className="w-10 h-10 rounded-xl object-cover ring-2 ring-blue-500/30" />
            <div className="text-left">
              <p className="text-xs font-extrabold text-slate-900 leading-tight">RAJAMURUGAN</p>
              <p className="text-[10px] text-blue-600 font-semibold">Founder of Capacity Connect • Lead Developer</p>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('learner-dashboard')}
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('skill-engine')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl font-semibold text-sm shadow-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Explore Platform Workflow</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Demo Login Shortcuts */}
          <div className="pt-6 border-t border-slate-200/60 max-w-lg mx-auto">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Fast Hackathon Demo Login:
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => quickRoleSwitch('LEARNER')}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-blue-500 hover:text-blue-600 font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-all"
              >
                <Users className="w-3.5 h-3.5 text-blue-600" />
                <span>Rajamurugan (Founder)</span>
              </button>
              <button
                onClick={() => quickRoleSwitch('MANAGER')}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-indigo-500 hover:text-indigo-600 font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-all"
              >
                <BarChart3 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Manager Demo</span>
              </button>
              <button
                onClick={() => quickRoleSwitch('ADMIN')}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 hover:border-emerald-500 hover:text-emerald-600 font-semibold text-xs shadow-sm flex items-center gap-1.5 transition-all"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Admin Demo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Mockup Visual */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-slate-900 p-3 shadow-2xl border border-slate-800 relative group">
          <div className="absolute -top-3 left-6 bg-blue-600 text-white text-[10px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
            Live Analytics Dashboard Preview
          </div>
          <div className="rounded-xl bg-slate-950 overflow-hidden border border-slate-800 p-6 space-y-6 text-slate-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-mono text-slate-400 pl-2">capacity-connect.org/dashboard</span>
              </div>
              <span className="text-xs text-blue-400 font-semibold">Rajamurugan • Founder Mode</span>
            </div>

            {/* Mockup stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-[11px] text-slate-400 font-medium">Overall Skill Score</p>
                <p className="text-2xl font-bold text-blue-400 mt-1">72%</p>
                <span className="text-[10px] text-emerald-400 font-semibold">+8% from last test</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-[11px] text-slate-400 font-medium">Courses Completed</p>
                <p className="text-2xl font-bold text-white mt-1">8</p>
                <span className="text-[10px] text-slate-400 font-medium">2 in progress</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-[11px] text-slate-400 font-medium">Learning Hours</p>
                <p className="text-2xl font-bold text-indigo-400 mt-1">24h</p>
                <span className="text-[10px] text-slate-400 font-medium">This month</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <p className="text-[11px] text-slate-400 font-medium">Current Streak</p>
                <p className="text-2xl font-bold text-amber-400 mt-1">7 days 🔥</p>
                <span className="text-[10px] text-slate-400 font-medium">Active learner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Feature Cards */}
      <section className="py-16 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Core Capabilities of Capacity Connect
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Designed specifically to address organizational learning fragmentation and skill visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Centralized Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Single pane of glass unifying courses, technical guides, video content, and PDF resources across departments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Skill Intelligence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI engine mapping current vs target skill scores to identify high-priority skill gaps instantly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Personalized Learning</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated learning paths tailored specifically to each employee's priority skill gap baseline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-500 hover:shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Measurable Competency</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                AI-assisted quiz generation and verified post-test scoring that updates organizational heatmaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Workflow Diagram Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <SkillEngineDiagram />
      </section>
    </div>
  );
};
