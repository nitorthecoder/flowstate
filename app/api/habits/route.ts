import { NextResponse } from 'next/server';
import { DBService } from '@/lib/db';
import { FlowStateCore } from '@/lib/core';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const habits = await DBService.getHabits(userId);
    return NextResponse.json(habits);
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId, name } = await req.json();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const habit = {
      userId,
      name,
      consistencyScore: 50,
      restTokens: FlowStateCore.INITIAL_TOKENS,
      lastCheckIn: null,
      createdAt: new Date().toISOString(),
    };

    const createdHabit = await DBService.addHabit(habit);
    return NextResponse.json(createdHabit);
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
