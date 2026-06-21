-- =============================================
-- JREDITION - Supabase Schema
-- =============================================

-- Products table (optional - we use local data, but can be migrated)
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  category TEXT NOT NULL CHECK (category IN ('school', 'mastery', 'grandmaster', 'projects')),
  title JSONB NOT NULL,
  description JSONB NOT NULL,
  price TEXT NOT NULL,
  level JSONB NOT NULL,
  level_class TEXT NOT NULL,
  rating TEXT DEFAULT '5.0',
  amazon_url TEXT,
  kindle_url TEXT,
  emoji TEXT DEFAULT '📘',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User profiles (via Supabase Auth)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  display_name TEXT,
  preferred_lang TEXT DEFAULT 'es',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Gamification (points, level, badges)
CREATE TABLE IF NOT EXISTS gamification (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  points INTEGER DEFAULT 0,
  level INTEGER DEFAULT 1,
  badges JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Chat history
CREATE TABLE IF NOT EXISTS chat_history (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_gamification_user ON gamification(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_history_user ON chat_history(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_history_created ON chat_history(created_at DESC);

-- Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE gamification ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

-- Products: public read
CREATE POLICY "Products are public" ON products
  FOR SELECT USING (true);

-- Profiles: user can read/update own
CREATE POLICY "Users can read own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Gamification: user can read own
CREATE POLICY "Users can read own gamification" ON gamification
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own gamification" ON gamification
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own gamification" ON gamification
  FOR UPDATE USING (auth.uid() = user_id);

-- Chat history: user can read/insert own
CREATE POLICY "Users can read own chat" ON chat_history
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own chat" ON chat_history
  FOR INSERT WITH CHECK (auth.uid() = user_id);
