import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Star,
  Award,
  PlayCircle,
  FileText,
  CheckCircle2,
  Lock,
  Video,
  FileCode,
  Sparkles,
} from 'lucide-react';

export const CourseDetailView: React.FC = () => {
  const { selectedCourse, setActiveTab, updateCourseProgress, addToast } = useApp();
  const [activeResource, setActiveResource] = useState<{ title: string; type: string } | null>(null);

  if (!selectedCourse) {
    return (
      <div className="p-8 text-center space-y-4">
        <p className="text-slate-600">No course selected.</p>
        <button
          onClick={() => setActiveTab('courses')}
          className="px-4 py-2 bg-blue-600 text-white font-bold text-xs rounded-xl"
        >
          Back to Catalog
        </button>
      </div>
    );
  }

  const handleOpenResource = (title: string, type: string) => {
    setActiveResource({ title, type });
    updateCourseProgress(selectedCourse.id, Math.min(100, selectedCourse.progress + 15));
    addToast('Resource Opened', `Completed lesson: ${title}`, 'success');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Back button */}
      <button
        onClick={() => setActiveTab('courses')}
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Course Catalog</span>
      </button>

      {/* Header Banner */}
      <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center border border-slate-800">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 text-white font-bold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
              {selectedCourse.category}
            </span>
            <span className="bg-slate-800 text-slate-300 font-medium text-[10px] px-2.5 py-0.5 rounded-full">
              {selectedCourse.difficulty}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold">{selectedCourse.title}</h1>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{selectedCourse.description}</p>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium pt-2">
            <span>Instructor: <strong className="text-white">{selectedCourse.instructor}</strong></span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-400" />
              {selectedCourse.duration}
            </span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-4 h-4 fill-amber-400" />
              {selectedCourse.rating} Rating
            </span>
          </div>
        </div>

        {/* Thumbnail & Action */}
        <div className="lg:col-span-1 space-y-4">
          <img
            src={selectedCourse.image}
            alt={selectedCourse.title}
            className="w-full h-44 rounded-xl object-cover ring-2 ring-slate-800 shadow-md"
          />
          <button
            onClick={() => setActiveTab('quiz-generator')}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Take Competency Assessment</span>
          </button>
        </div>
      </div>

      {/* Curriculum Syllabus Accordion */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
          Course Modules & Learning Resources
        </h2>

        <div className="space-y-4">
          {selectedCourse.modules.map((mod, idx) => (
            <div key={mod.id} className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="bg-slate-50 p-4 border-b border-slate-200/80 flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-slate-900">{mod.title}</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">{mod.description}</p>
                </div>
                <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">
                  Module {idx + 1}
                </span>
              </div>

              <div className="divide-y divide-slate-100 p-2">
                {mod.resources.map((res) => (
                  <div
                    key={res.id}
                    onClick={() => handleOpenResource(res.title, res.type)}
                    className="p-3 hover:bg-blue-50/50 rounded-lg flex items-center justify-between cursor-pointer transition-colors text-xs"
                  >
                    <div className="flex items-center gap-3">
                      {res.type === 'video' && <Video className="w-4 h-4 text-blue-600 shrink-0" />}
                      {res.type === 'pdf' && <FileText className="w-4 h-4 text-rose-600 shrink-0" />}
                      {res.type === 'exercise' && <FileCode className="w-4 h-4 text-indigo-600 shrink-0" />}
                      {res.type === 'article' && <BookOpen className="w-4 h-4 text-emerald-600 shrink-0" />}
                      <span className="font-semibold text-slate-800">{res.title}</span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-400">
                      <span className="text-[11px]">{res.duration}</span>
                      <span className="px-2 py-1 bg-blue-600 text-white rounded font-bold text-[10px]">
                        Launch
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Modal Simulator */}
      {activeResource && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-sm">{activeResource.title}</h3>
              </div>
              <button
                onClick={() => setActiveResource(null)}
                className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded-lg text-slate-300 font-semibold"
              >
                Close Viewer
              </button>
            </div>

            <div className="h-64 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-center p-6 space-y-3">
              <PlayCircle className="w-12 h-12 text-blue-500 animate-pulse" />
              <p className="text-xs text-slate-300 font-medium">
                Interactive {activeResource.type.toUpperCase()} Viewer Simulator
              </p>
              <p className="text-[11px] text-slate-500">
                Playing stream for "{activeResource.title}". Module progress has been registered.
              </p>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setActiveResource(null)}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20"
              >
                Mark Lesson Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
