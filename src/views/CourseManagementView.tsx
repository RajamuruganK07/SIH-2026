import React from 'react';
import { useApp } from '../context/AppContext';
import { BookOpen, Plus, Edit3, Trash2, CheckCircle2 } from 'lucide-react';

export const CourseManagementView: React.FC = () => {
  const { courses, addToast } = useApp();

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-extrabold text-slate-900">Course Management Studio</h1>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Create, edit, publish, and manage curriculum modules across skills.
          </p>
        </div>

        <button
          onClick={() => addToast('Create Course', 'Opened course creation modal', 'info')}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Course</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden divide-y divide-slate-100">
        {courses.map((course) => (
          <div key={course.id} className="p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <img src={course.image} alt={course.title} className="w-16 h-12 rounded-lg object-cover" />
              <div>
                <span className="text-[10px] uppercase font-bold text-blue-600">{course.category}</span>
                <h3 className="text-sm font-bold text-slate-900">{course.title}</h3>
                <p className="text-xs text-slate-500">{course.instructor} • {course.duration}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => addToast('Edit Course', `Editing ${course.title}`, 'info')}
                className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-semibold text-xs flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
              <button
                onClick={() => addToast('Deleted Course', `Course ${course.title} removed`, 'warning')}
                className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
