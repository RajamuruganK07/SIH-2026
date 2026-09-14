import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Bell,
  Sparkles,
  ShieldCheck,
  User,
  LogOut,
  ChevronDown,
  Layers,
} from 'lucide-react';
import { Role } from '../../types';

export const Navbar: React.FC = () => {
  const {
    currentUser,
    currentRole,
    quickRoleSwitch,
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    addToast,
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);

  const isLandingOrLogin = activeTab === 'landing' || activeTab === 'login';

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand & Problem Badge */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => setActiveTab('landing')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight leading-none">
                  CAPACITY<span className="text-blue-600">CONNECT</span>
                </span>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide">
                  SIH 26075
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 hidden sm:block">
                Digital Capacity Building & Competency Portal
              </p>
            </div>
          </button>
        </div>

        {/* Middle: Global Search */}
        {!isLandingOrLogin && (
          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, skills, resources..."
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100/80 hover:bg-slate-100 focus:bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          </div>
        )}

        {/* Right Actions & Demo Role Selector */}
        <div className="flex items-center gap-3">
          {/* Quick Role Switcher */}
          <div className="flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200 text-xs">
            <span className="text-[10px] font-semibold text-slate-400 px-2 uppercase tracking-wider hidden lg:inline-block">
              Demo Role:
            </span>
            {(['LEARNER', 'MANAGER', 'ADMIN'] as Role[]).map((r) => (
              <button
                key={r}
                onClick={() => quickRoleSwitch(r)}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all text-xs ${
                  currentRole === r
                    ? 'bg-white text-blue-600 shadow-sm font-semibold border border-slate-200/60'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {r.charAt(0) + r.slice(1).toLowerCase()}
              </button>
            ))}
          </div>

          {/* Notifications */}
          {!isLandingOrLogin && (
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                title="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full ring-2 ring-white"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900">Notifications</h4>
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-semibold">
                      3 New
                    </span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto">
                    <div className="p-3 hover:bg-slate-50 text-xs transition-colors">
                      <p className="font-medium text-slate-800">Priority Skill Gap Identified</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Spring Boot skill is 35% below department benchmark.
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 block">10 mins ago</span>
                    </div>
                    <div className="p-3 hover:bg-slate-50 text-xs transition-colors">
                      <p className="font-medium text-slate-800">AI Quiz Ready</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Custom assessment generated for Java REST API design.
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 block">1 hour ago</span>
                    </div>
                    <div className="p-3 hover:bg-slate-50 text-xs transition-colors">
                      <p className="font-medium text-slate-800">Knowledge Shared</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Priya Kumar published "AWS Cloud Security Compliance Blueprint".
                      </p>
                      <span className="text-[10px] text-slate-400 mt-1 block">3 hours ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* User Profile / Auth State */}
          {isLandingOrLogin ? (
            <button
              onClick={() => setActiveTab('login')}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-500/20"
            >
              Sign In
            </button>
          ) : (
            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center gap-2.5 p-1 pl-2 hover:bg-slate-100 rounded-xl transition-colors border border-slate-200/60"
            >
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-8 h-8 rounded-lg object-cover ring-2 ring-blue-500/20"
              />
              <div className="text-left hidden sm:block">
                <p className="text-xs font-bold text-slate-900 leading-tight">{currentUser.name}</p>
                <p className="text-[10px] text-slate-500 font-medium capitalize">
                  {currentUser.role.toLowerCase()} • {currentUser.department}
                </p>
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
