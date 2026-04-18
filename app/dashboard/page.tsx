"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { type Habit } from '@/lib/core';

export default function DashboardPage() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [newHabit, setNewHabit] = useState('');
  const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
  const router = useRouter();

  useEffect(() => {
    if (!userId) router.push('/auth/login');
    else fetchHabits();
  }, [userId]);

  const fetchHabits = async () => {
    const res = await fetch(`/api/habits?userId=${userId}`);
    const data = await res.json();
    setHabits(data);
  };

  const addHabit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/habits', {
      method: 'POST',
      body: JSON.stringify({ userId, name: newHabit }),
    });
    if (res.ok) {
      setNewHabit('');
      fetchHabits();
    }
  };

  const checkHabit = async (id: string, success: boolean, useToken: boolean) => {
    const res = await fetch(`/api/habits/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ id, userId, success, useToken }),
    });
    if (res.ok) fetchHabits();
  };

  if (!userId) return null;

  return (
    <div className="min-h-screen bg-flow-soft px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-2">Your Flow</h1>
            <p className="text-slate-500 font-light">Maintain consistency, absorb life's interruptions.</p>
          </div>
          <button 
            onClick={() => { localStorage.removeItem('userId'); router.push('/auth/login'); }}
            className="text-sm font-medium text-slate-400 hover:text-red-500 transition-colors"
          >
            Logout
          </button>
        </div>

        <form onSubmit={addHabit} className="flex gap-4 mb-12">
          <input 
            type="text" 
            placeholder="What new habit are we engineering?"
            className="flex-1 px-6 py-4 rounded-2xl border border-slate-200 outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
            value={newHabit}
            onChange={e => setNewHabit(e.target.value)}
            required
          />
          <button type="submit" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Add Habit
          </button>
        </form>

        <div className="grid gap-6">
          {habits.map(h => (
            <div key={h.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between group hover:border-indigo-200 transition-all">
              <div>
                <h3 className="text-xl font-bold mb-1">{h.name}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-500">Consistency: <b className="text-indigo-600">{h.consistencyScore}%</b></span>
                  <span className="text-slate-500">Rest Tokens: <b className="text-indigo-600">{h.restTokens}</b></span>
                </div>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => checkHabit(h.id, true, false)}
                  className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl font-medium hover:bg-emerald-100 transition-all"
                >
                  Success
                </button>
                <button 
                  onClick={() => checkHabit(h.id, false, false)}
                  className="px-4 py-2 bg-rose-50 text-rose-600 rounded-xl font-medium hover:bg-rose-100 transition-all"
                >
                  Fail
                </button>
                <button 
                  onClick={() => checkHabit(h.id, false, true)}
                  disabled={h.restTokens === 0}
                  className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-xl font-medium hover:bg-indigo-100 disabled:opacity-50 transition-all"
                >
                  Use Token
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
