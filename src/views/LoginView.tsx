import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Layers, Mail, Lock, Users, BarChart3, ShieldCheck, ArrowRight } from 'lucide-react';

export const LoginView: React.FC = () => {
  const { quickRoleSwitch, addToast } = useApp();
  const [email, setEmail] = useState('rajamurugan@corp.org');
  const [password, setPassword] = useState('••••••••••••');

  const handleManualLogin = (e: React.FormEvent) => {
    e.preventDefault();
    quickRoleSwitch('LEARNER');
    addToast('Logged In', 'Successfully authenticated as Rajamurugan (Founder)', 'success');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Glow effect background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full bg-slate-950/90 border border-slate-800 rounded-2xl p-8 shadow-2xl relative z-10 space-y-6 text-white">
        {/* Brand header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold mx-auto shadow-lg shadow-blue-500/20">
            <Layers className="w-7 h-7" />
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            CAPACITY<span className="text-blue-500">CONNECT</span>
          </h2>
          <p className="text-xs text-slate-400">
            Sign in to your digital capacity-building portal
          </p>
        </div>

        {/* Demo Fast Login Buttons */}
        <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
            One-Click Presentation Demo Login:
          </p>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => quickRoleSwitch('LEARNER')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-blue-600/20 hover:border-blue-500 border border-slate-700 text-xs font-semibold text-slate-200 transition-all flex flex-col items-center gap-1"
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span>Rajamurugan</span>
            </button>
            <button
              onClick={() => quickRoleSwitch('MANAGER')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-indigo-600/20 hover:border-indigo-500 border border-slate-700 text-xs font-semibold text-slate-200 transition-all flex flex-col items-center gap-1"
            >
              <BarChart3 className="w-4 h-4 text-indigo-400" />
              <span>Manager</span>
            </button>
            <button
              onClick={() => quickRoleSwitch('ADMIN')}
              className="p-2 rounded-lg bg-slate-800 hover:bg-emerald-600/20 hover:border-emerald-500 border border-slate-700 text-xs font-semibold text-slate-200 transition-all flex flex-col items-center gap-1"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Admin</span>
            </button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-800 w-full"></div>
          <span className="bg-slate-950 px-3 text-[10px] uppercase font-bold text-slate-500">Or sign in with email</span>
        </div>

        {/* Form */}
        <form onSubmit={handleManualLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-slate-700 bg-slate-900 text-blue-600 focus:ring-blue-500" />
              <span>Remember me</span>
            </label>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-blue-400 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
          >
            <span>Login to Portal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-slate-500">
          SIH 2026 Problem Statement ID: <span className="text-slate-300 font-semibold">SIH26075</span> • Founder: <span className="text-slate-200 font-bold">RAJAMURUGAN</span>
        </div>
      </div>
    </div>
  );
};
