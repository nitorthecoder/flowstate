"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.success) {
      localStorage.setItem('userId', data.userId);
      router.push('/dashboard');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-flow-soft px-6">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
        <h1 className="text-4xl font-serif font-bold text-center mb-8">Welcome Back</h1>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Enter FlowState
          </button>
        </form>
        <p className="text-center mt-8 text-slate-500 text-sm">
          New here? <a href="/auth/register" className="text-indigo-600 font-medium hover:underline">Create account</a>
        </p>
      </div>
    </div>
  );
}
