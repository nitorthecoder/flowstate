import { NextResponse } from 'next/server';
import { DBService } from '@/lib/db';
import { FlowStateCore } from '@/lib/core';

export async function PATCH(req: Request) {
  try {
    const { id, userId, success, useToken } = await req.json();
    
    const db = await DBService.getHabits(userId);
    const habit = db.find(h => h.id === id);
    
    if (!habit) return NextResponse.json({ error: 'Habit not found' }, { status: 404 });

    const updatedHabit = FlowStateCore.updateConsistency(habit, success, useToken);
    await DBService.updateHabit(updatedHabit);
    
    return NextResponse.json(updatedHabit);
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
