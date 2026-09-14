import React from 'react';
import { useApp } from '../context/AppContext';
import { GitBranch, Clock, PlayCircle, Award } from 'lucide-react';

export const LearningPathView: React.FC = () => {
  const { setActiveTab, startCourse } = useApp();

  const pathSteps = [
    {
      id: 1,
      title: 'Spring Boot Fundamentals',
      type: 'Course',
      duration: '4h 30m',
      skill: 'Java Spring Boot',
      status: 'In Progress',
      progress: 35,
      description: 'Master backend architecture, REST API design, dependency injection, and data persistence.',
      courseId: 'crs-101',
    },
    {
      id: 2,
      title: 'REST API Development & Serialization',
      type: 'Module',
      duration: '2h 15m',
      skill: 'Java Spring Boot',
      status: 'Current Milestone',
      progress: 0,
      description: 'Build controllers, request mappings, response payloads, and exception handlers.',
      courseId: 'crs-101',
    },
    {
      id: 3,
      title: 'Spring Data JPA & Entity Mapping',
      type: 'Module',
      duration: '3h 00m',
      skill: 'Java Spring Boot',
      status: 'Upcoming',
      progress: 0,
      description: 'Entity mapping, repositories, custom queries, and database migrations.',
      courseId: 'crs-101',
    },
    {
      id: 4,
      title: 'Hands-on Project: Enterprise Microservice',
      type: 'Project',
      duration: '4h 00m',
      skill: 'Java Spring Boot',
      status: 'Upcoming',
      progress: 0,
      description: 'Build a production-grade microservice with JWT auth and database persistence.',
      courseId: 'crs-101',
    },
    {
      id: 5,
      title: 'Spring Boot Competency Assessment',
      type: 'Assessment',
      duration: '15 mins',
      skill: 'Java Spring Boot',
      status: 'Upcoming',
      progress: 0,
      description: 'Take the verified assessment to increase Spring Boot skill score from 45% to target level.',
      courseId: 'asm-101',
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center gap-2">
          <GitBranch className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-extrabold text-slate-900">Personalized Learning Path</h1>
        </div>
        <p className="text-xs text-slate-500">
          Automated milestone roadmap generated for <strong>Rajamurugan (Founder)</strong> to close priority gap in <strong>Java Spring Boot</strong>.
        </p>
      </div>

      {/* Visual Timeline Stepper */}
      <div className="relative pl-6 space-y-8 border-l-2 border-blue-200 ml-4">
        {pathSteps.map((step) => {
          const isCurrent = step.status === 'Current Milestone' || step.status === 'In Progress';

          return (
            <div key={step.id} className="relative group">
              {/* Timeline Dot */}
              <div
                className={`absolute -left-[31px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white ${
                  isCurrent
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/40 scale-110'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {step.id}
              </div>

              {/* Card */}
              <div
                className={`p-6 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-white border-blue-500 shadow-lg ring-1 ring-blue-500/20'
                    : 'bg-white border-slate-200 shadow-sm opacity-90'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {step.type}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full w-fit ${
                      isCurrent
                        ? 'bg-blue-100 text-blue-800 border border-blue-200'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {step.status}
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{step.description}</p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {step.duration}
                    </span>
                    <span className="text-blue-600 font-semibold">{step.skill}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (step.type === 'Assessment') {
                        setActiveTab('quiz-generator');
                      } else {
                        startCourse(step.courseId);
                      }
                    }}
                    className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isCurrent
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {step.type === 'Assessment' ? (
                      <>
                        <Award className="w-3.5 h-3.5" />
                        <span>Take Assessment</span>
                      </>
                    ) : (
                      <>
                        <PlayCircle className="w-3.5 h-3.5" />
                        <span>Open Module</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
