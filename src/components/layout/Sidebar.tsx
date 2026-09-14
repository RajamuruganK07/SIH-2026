import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  UserCheck,
  BarChart3,
  Cpu,
  GitBranch,
  BookOpen,
  FolderKanban,
  BrainCircuit,
  Database,
  Users,
  Award,
  Settings,
  PieChart,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { ActiveTab } from '../../types';

export const Sidebar: React.FC = () => {
  const { currentRole, activeTab, setActiveTab, currentUser, quickRoleSwitch } = useApp();

  if (activeTab === 'landing' || activeTab === 'login') {
    return null;
  }

  interface NavItem {
    id: ActiveTab;
    label: string;
    icon: React.ElementType;
    badge?: string;
  }

  const learnerItems: NavItem[] = [
    { id: 'learner-dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'My Profile', icon: UserCheck },
    { id: 'skill-gap', label: 'Skill Gap Analysis', icon: BarChart3, badge: 'Priority' },
    { id: 'skill-engine', label: 'Skill Engine Flow', icon: Cpu, badge: 'AI' },
    { id: 'learning-path', label: 'Learning Path', icon: GitBranch },
    { id: 'courses', label: 'Courses Catalog', icon: BookOpen },
    { id: 'content-hub', label: 'Learning Content', icon: FolderKanban },
    { id: 'quiz-generator', label: 'AI Assessments', icon: BrainCircuit, badge: 'Interactive' },
    { id: 'knowledge-repo', label: 'Knowledge Hub', icon: Database },
  ];

  const managerItems: NavItem[] = [
    { id: 'manager-dashboard', label: 'Team Dashboard', icon: LayoutDashboard },
    { id: 'profile', label: 'Manager Profile', icon: UserCheck },
    { id: 'skill-gap', label: 'Team Competency', icon: BarChart3 },
    { id: 'learning-path', label: 'Path Progress', icon: GitBranch },
    { id: 'knowledge-repo', label: 'Knowledge Hub', icon: Database },
    { id: 'analytics', label: 'Team Analytics', icon: PieChart },
  ];

  const adminItems: NavItem[] = [
    { id: 'admin-dashboard', label: 'Admin Overview', icon: LayoutDashboard },
    { id: 'analytics', label: 'Org Skill Heatmap', icon: PieChart, badge: 'Org Wide' },
    { id: 'user-management', label: 'User Management', icon: Users },
    { id: 'course-management', label: 'Course Manager', icon: BookOpen },
    { id: 'assessment-management', label: 'Assessments', icon: Award },
    { id: 'knowledge-repo', label: 'Knowledge Base', icon: Database },
    { id: 'settings', label: 'Platform Settings', icon: Settings },
  ];

  const navItems =
    currentRole === 'LEARNER'
      ? learnerItems
      : currentRole === 'MANAGER'
      ? managerItems
      : adminItems;

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 min-h-[calc(100vh-4rem)] border-r border-slate-800 transition-all duration-300">
      {/* Role Banner */}
      <div className="p-4 border-b border-slate-800/80 bg-slate-950/40">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
            Current Workspace
          </span>
          <span className="text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded font-semibold uppercase">
            {currentRole}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-xs">
            {currentUser.name.charAt(0)}
          </div>
          <div className="truncate">
            <p className="text-xs font-semibold text-white truncate">{currentUser.name}</p>
            <p className="text-[10px] text-slate-400 truncate">{currentUser.department}</p>
          </div>
        </div>
      </div>

      {/* Nav List */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className="px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
          Main Menu
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* AI Assistant Banner */}
      <div className="p-3 m-3 rounded-xl bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border border-blue-500/20 text-xs">
        <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span>Competency AI Engine</span>
        </div>
        <p className="text-[11px] text-slate-300 leading-relaxed">
          Skill delta analyzer & automatic path recommender is active.
        </p>
      </div>

      {/* Sign Out / Exit to Landing */}
      <div className="p-3 border-t border-slate-800">
        <button
          onClick={() => setActiveTab('landing')}
          className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
        >
          <LogOut className="w-4 h-4 text-slate-400" />
          <span>Exit to Portal Landing</span>
        </button>
      </div>
    </aside>
  );
};
