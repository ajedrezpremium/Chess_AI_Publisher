export interface Product {
  id: number;
  cat: 'school' | 'mastery' | 'grandmaster' | 'projects' | 'math';
  title: Record<string, string>;
  desc: Record<string, string>;
  price: string;
  level: Record<string, string>;
  levelClass: 'beginner' | 'intermediate' | 'advanced' | 'professional';
  rating: string;
  amazon: string;
  kindle: string;
  emoji: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export type Lang = 'es' | 'gl' | 'en';

export interface GamificationState {
  points: number;
  level: number;
  levelName: string;
  badges: Badge[];
}

export interface Badge {
  id: string;
  nameKey: string;
  icon: string;
  unlocked: boolean;
}

export interface KnowledgeItem {
  pattern: RegExp;
  response: (lang: Lang) => string;
}
