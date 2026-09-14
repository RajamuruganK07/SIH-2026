import React from 'react';
import { Layers, ShieldCheck, Heart } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Footer: React.FC = () => {
  const { setActiveTab } = useApp();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1 */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                CAPACITY<span className="text-blue-500">CONNECT</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Centralized digital capacity-building & learning management portal connecting organizational roles, skills, resources, and competency assessment.
            </p>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-blue-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>SIH 2026 Prototype • Team OPERATORZ</span>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Platform Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('landing')} className="hover:text-white transition-colors">
                  Portal Home
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('skill-engine')} className="hover:text-white transition-colors">
                  AI Skill Engine Workflow
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('skill-gap')} className="hover:text-white transition-colors">
                  Skill Gap Matrix
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('knowledge-repo')} className="hover:text-white transition-colors">
                  Knowledge Repository
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Hackathon Info</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Problem Statement ID: <span className="text-white font-semibold">SIH26075</span></li>
              <li>Theme: <span className="text-white font-semibold">Smart Education</span></li>
              <li>Category: <span className="text-white font-semibold">Software</span></li>
              <li>Team: <span className="text-white font-semibold">OPERATORZ</span></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-3">Core Tagline</h4>
            <blockquote className="italic border-l-2 border-blue-500 pl-3 py-1 text-slate-300">
              "One Platform. Right Skill. Right Learning. Measurable Growth."
            </blockquote>
            <div className="mt-4 p-3 rounded-lg bg-slate-800/80 border border-slate-700 text-[11px]">
              <span className="font-semibold text-emerald-400 block mb-0.5">● Ready for Demonstration</span>
              <span>All roles (Learner, Manager, Admin) fully functional with dynamic datasets.</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 CAPACITY CONNECT (SIH26075). Built for Smart India Hackathon by Team OPERATORZ.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors">Terms of Service</span>
            <span className="hover:text-slate-400 transition-colors">Architecture Documentation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
