import { supabase } from './supabase';
import { User, Habit } from './core';

export class DBService {
  static async addUser(user: Partial<User>) {
    const { data, error } = await supabase
      .from('profiles')
      .insert([user])
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  static async findUser(email: string) {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single();
    if (error) return null;
    return data;
  }

  static async addHabit(habit: Partial<Habit>) {
    const { data, error } = await supabase
      .from('habits')
      .insert([habit])
      .select()
      .single();
    if (error) throw error;
    return data;
  }

  static async getHabits(userId: string): Promise<Habit[]> {
    const { data, error } = await supabase
      .from('habits')
      .select('*')
      .eq('userId', userId);
    if (error) throw error;
    return data || [];
  }

  static async updateHabit(habit: Partial<Habit>) {
    const { data, error } = await supabase
      .from('habits')
      .update(habit)
      .eq('id', habit.id)
      .select()
      .single();
    if (error) throw error;
    return data;
  }
}
