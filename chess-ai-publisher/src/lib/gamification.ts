import type { GamificationState, Badge } from '@/types';

const BADGES: Badge[] = [
  { id: 'reader', nameKey: 'badge.reader', icon: '📖', unlocked: true },
  { id: 'collector', nameKey: 'badge.collector', icon: '⭐', unlocked: true },
  { id: 'master', nameKey: 'badge.master', icon: '🏅', unlocked: false },
  { id: 'gm', nameKey: 'badge.gm', icon: '👑', unlocked: false },
];

const LEVELS = [
  { min: 0, name: 'Novel' },
  { min: 100, name: 'Aprendiz' },
  { min: 300, name: 'Experto' },
  { min: 500, name: 'Maestro' },
  { min: 1000, name: 'Gran Maestro' },
];

export function getLevel(points: number): { level: number; name: string } {
  let level = 0;
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (points >= LEVELS[i].min) {
      level = i + 1;
      return { level, name: LEVELS[i].name };
    }
  }
  return { level: 1, name: LEVELS[0].name };
}

export function getNextLevelPoints(points: number): number {
  for (const l of LEVELS) {
    if (points < l.min) return l.min;
  }
  return LEVELS[LEVELS.length - 1].min;
}

export function getBadges(points: number): Badge[] {
  return BADGES.map(b => ({
    ...b,
    unlocked: b.id === 'reader' || b.id === 'collector' || (b.id === 'master' && points >= 500) || (b.id === 'gm' && points >= 1000),
  }));
}

export const DEFAULT_GAMIFICATION: GamificationState = {
  points: 150,
  level: 2,
  levelName: 'Aprendiz',
  badges: getBadges(150),
};
