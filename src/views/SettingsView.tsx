import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Settings, User, Building, Bell, Shield, Palette, Save } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { currentUser, addToast } = useApp();
  const [activeTab, setActiveTab] = useState<'Profile' | 'Organization' | 'Notifications' | 'Security'>('Profile');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addToast('Settings Saved', 'Platform preferences updated successfully', 'success');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
        <div className="flex items-center gap-2">
          <Settings className="w-6 h-6 text-blue-600" />
          <h1 className="text-2xl font-extrabold text-slate-900">Platform Settings</h1>
        </div>
        <p className="text-xs text-slate-500">Configure your profile, organization defaults, and AI notification preferences.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">
        {/* Tabs sidebar */}
        <div className="w-full md:w-56 p-3 bg-slate-50 border-r border-slate-200 space-y-1">
          {(['Profile', 'Organization', 'Notifications', 'Security'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                activeTab === tab ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <form onSubmit={handleSave} className="flex-1 p-6 space-y-6">
          {activeTab === 'Profile' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">Profile Preferences</h3>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  defaultValue={currentUser.name}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  defaultValue={currentUser.email}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>
            </div>
          )}

          {activeTab === 'Organization' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">Organization Settings</h3>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Department Name</label>
                <input
                  type="text"
                  defaultValue={currentUser.department}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>
            </div>
          )}

          {activeTab === 'Notifications' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">Notification Triggers</h3>
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                <span>Notify me when priority skill gap rises above 20%</span>
              </label>
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                <span>Weekly team competency digest emails</span>
              </label>
            </div>
          )}

          {activeTab === 'Security' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-2">Security Controls</h3>
              <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded text-blue-600" />
                <span>Require Multi-Factor Authentication (MFA)</span>
              </label>
            </div>
          )}

          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>Save Preferences</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
