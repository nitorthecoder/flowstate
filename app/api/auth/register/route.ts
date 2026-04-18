import { NextResponse } from 'next/server';
import { DBService } from '@/lib/db';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const { email, password, name } = await req.json();
    
    if (!email || !password || !name) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Use Supabase Auth for registration
    const { data, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: name }
      }
    });

    if (authError) return NextResponse.json({ error: authError.message }, { status: 400 });

    // Create a profile in the 'profiles' table
    if (data.user) {
      await DBService.addUser({
        id: data.user.id,
        email,
        name,
        chronotype: 'Bear',
        identityStatement: '',
        createdAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ success: true, userId: data.user?.id });
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
