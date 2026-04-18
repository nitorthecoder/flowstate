import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { DBService } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Use Supabase Auth for login
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }

    const userProfile = await DBService.findUser(email);

    return NextResponse.json({ 
      success: true, 
      userId: data.user?.id, 
      user: userProfile 
    });
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
