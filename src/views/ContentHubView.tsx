import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { FolderKanban, Video, FileText, BookOpen, FileCode, Search, PlayCircle } from 'lucide-react';

export const ContentHubView: React.FC = () => {
  const { addToast } = useApp();
  const [filterType, setFilterType] = useState('ALL');
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const items = [
    { id: '1', title: 'Spring Beans & Annotations Deep Dive', type: 'video', duration: '25 mins', skill: 'Java Spring Boot', category: 'Backend' },
    { id: '2', title: 'Spring Core Architecture Cheatsheet', type: 'pdf', duration: '10 mins', skill: 'Java Spring Boot', category: 'Backend' },
    { id: '3', title: 'AWS Cloud Foundations Architecture Video', type: 'video', duration: '40 mins', skill: 'Cloud Computing', category: 'DevOps' },
    { id: '4', title: 'Spring Security 6 Auth Guide', type: 'article', duration: '30 mins', skill: 'Java Spring Boot', category: 'Security' },
    { id: '5', title: 'REST API CRUD Endpoint Practice Exercise', type: 'exercise', duration: '40 mins', skill: 'Java Spring Boot', category: 'Hands-on' },
    { id: '6', title: 'Zero Trust Cybersecurity Blueprint', type: 'pdf', duration: '15 mins', skill: 'Cyber Security', category: 'Security' },
  ];

  const filtered = items.filter((i) => {
    if (filterType === 'ALL') return true;
    return i.type.toUpperCase() === filterType;
  });

  return (
    <div className="space-y-8 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <FolderKanban className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-extrabold text-slate-900">Learning Content Hub</h1>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Centralized repository of multimedia resources, practice exercises, and technical guides.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {(['ALL', 'VIDEO', 'PDF', 'ARTICLE', 'EXERCISE'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                  filterType === t ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                  {item.category}
                </span>
                <span className="text-slate-400 font-medium">{item.duration}</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-slate-100 text-slate-700 shrink-0">
                  {item.type === 'video' && <Video className="w-5 h-5 text-blue-600" />}
                  {item.type === 'pdf' && <FileText className="w-5 h-5 text-rose-600" />}
                  {item.type === 'article' && <BookOpen className="w-5 h-5 text-emerald-600" />}
                  {item.type === 'exercise' && <FileCode className="w-5 h-5 text-indigo-600" />}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-[11px] text-blue-600 font-semibold mt-0.5">{item.skill}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveItem(item.title);
                addToast('Content Opened', `Opened "${item.title}"`, 'info');
              }}
              className="w-full py-2 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <PlayCircle className="w-4 h-4" />
              <span>Open Content Resource</span>
            </button>
          </div>
        ))}
      </div>

      {activeItem && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 text-white space-y-4 shadow-2xl">
            <h3 className="font-bold text-base">{activeItem}</h3>
            <div className="p-8 rounded-xl bg-slate-950 text-center text-xs text-slate-400 border border-slate-800 space-y-2">
              <PlayCircle className="w-10 h-10 text-blue-500 mx-auto animate-pulse" />
              <p>Simulated viewer active for selected content file.</p>
            </div>
            <button
              onClick={() => setActiveItem(null)}
              className="w-full py-2 bg-blue-600 text-white rounded-xl text-xs font-bold"
            >
              Close Resource
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
