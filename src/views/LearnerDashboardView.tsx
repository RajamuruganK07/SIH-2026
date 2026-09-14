import React from 'react';
import { useApp } from '../context/AppContext';
import {
  Award,
  BookOpen,
  Clock,
  Flame,
  ArrowRight,
  Sparkles,
  PlayCircle,
  BrainCircuit,
  BarChart3,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';
import { SkillComparisonBarChart } from '../components/analytics/SkillComparisonBarChart';

export const LearnerDashboardView: React.FC = () => {
  const { currentUser, setActiveTab, setSelectedCourse, courses, startCourse } = useApp();

  const priorityGaps = currentUser.skills.filter((s) => s.priority === 'HIGH' || s.target - s.current > 20);

  return (
    <div className="space-y-8 pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-blue-100 text-xs font-semibold border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-blue-300" />
            <span>AI Skill Gap Engine Active</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Good morning, {currentUser.name.split(' ')[0]} 👋
          </h1>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl leading-relaxed">
            Continue your learning journey and close your priority skill gaps to reach your target role competency.
          </p>
        </div>

        {/* Quick Action Button */}
        <div className="shrink-0 relative z-10 flex flex-wrap gap-3">
          <button
            onClick={() => setActiveTab('quiz-generator')}
            className="px-5 py-3 bg-white hover:bg-blue-50 text-blue-700 font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 transition-all"
          >
            <BrainCircuit className="w-4 h-4 text-blue-600" />
            <span>Generate AI Quiz</span>
          </button>
          <button
            onClick={() => setActiveTab('skill-gap')}
            className="px-5 py-3 bg-blue-500/30 hover:bg-blue-500/40 text-white font-semibold text-xs rounded-xl border border-white/20 flex items-center gap-2 transition-all"
          >
            <BarChart3 className="w-4 h-4 text-white" />
            <span>Skill Gap Matrix</span>
          </button>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Overall Skill Score</span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">{currentUser.overallSkillScore}%</p>
          <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Target benchmark 80%</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Courses Completed</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">{currentUser.coursesCompleted}</p>
          <span className="text-[11px] text-slate-500 font-medium">Across 4 skill domains</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Learning Hours</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-extrabold text-slate-900">{currentUser.learningHours}h</p>
          <span className="text-[11px] text-slate-500 font-medium">Logged this month</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">Current Streak</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
          </div>
          <p className="text-3xl font-extrabold text-amber-600">{currentUser.streak} days 🔥</p>
          <span className="text-[11px] text-slate-500 font-medium">Daily learning habit</span>
        </div>
      </div>

      {/* Priority Skill Gaps Section & Skill Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Priority Gaps List */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">Your Priority Skill Gaps</h3>
            <span className="text-[10px] bg-rose-50 text-rose-700 border border-rose-200 font-bold px-2 py-0.5 rounded-full">
              Action Required
            </span>
          </div>

          <div className="space-y-5">
            {priorityGaps.map((sk) => {
              const gap = Math.max(0, sk.target - sk.current);
              return (
                <div key={sk.skillId} className="space-y-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-900">{sk.skillName}</span>
                    <span className="text-[10px] font-bold text-rose-600 bg-rose-100 px-2 py-0.5 rounded">
                      Gap: {gap}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full rounded-full transition-all duration-500"
                      style={{ width: `${sk.current}%` }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span>Current: <strong className="text-slate-800">{sk.current}%</strong></span>
                    <span>Target: <strong className="text-slate-800">{sk.target}%</strong></span>
                  </div>

                  <button
                    onClick={() => {
                      const course = courses.find((c) => c.skillId === sk.skillId);
                      if (course) startCourse(course.id);
                      else setActiveTab('courses');
                    }}
                    className="w-full py-1.5 mt-1 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Bridge This Gap</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Gap Visual Bar Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Competency Baseline Analysis</h3>
              <p className="text-xs text-slate-500">Comparison of current skill scores against role targets</p>
            </div>
            <button
              onClick={() => setActiveTab('skill-gap')}
              className="text-xs text-blue-600 hover:underline font-semibold"
            >
              Full Analysis →
            </button>
          </div>
          <SkillComparisonBarChart skills={currentUser.skills} />
        </div>
      </div>

      {/* Recommended For You Section */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-slate-900">Recommended For You</h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Because your <strong>Java Spring Boot</strong> skill is currently 35% below target level:
            </p>
          </div>
          <button
            onClick={() => setActiveTab('courses')}
            className="text-xs text-blue-600 hover:underline font-semibold shrink-0"
          >
            Browse All Courses ({courses.length}) →
          </button>
        </div>

        {/* Recommended Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="relative h-36">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {course.difficulty}
                </div>
              </div>

              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    {course.skillName}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">{course.title}</h4>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">{course.description}</p>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-600">{course.duration}</span>
                  <button
                    onClick={() => startCourse(course.id)}
                    className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-all flex items-center gap-1 shadow-md shadow-blue-500/20"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>{course.enrolled ? 'Continue' : 'Start Learning'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
