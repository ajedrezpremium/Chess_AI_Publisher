import { createBrowserClient } from '@supabase/ssr';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

export async function getProductsFromDB() {
  const { data, error } = await supabase.from('products').select('*').order('id');
  if (error) throw error;
  return data;
}

export async function getUserPoints(userId: string) {
  const { data, error } = await supabase
    .from('gamification')
    .select('points, level, badges')
    .eq('user_id', userId)
    .single();
  if (error) return { points: 0, level: 1, badges: [] };
  return data;
}

export async function updateUserPoints(userId: string, points: number) {
  const { data, error } = await supabase
    .from('gamification')
    .upsert({ user_id: userId, points, updated_at: new Date().toISOString() })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function saveChatMessage(userId: string | null, message: string, role: string) {
  const { error } = await supabase.from('chat_history').insert({
    user_id: userId,
    message,
    role,
    created_at: new Date().toISOString(),
  });
  if (error) console.error('Error saving chat:', error);
}
