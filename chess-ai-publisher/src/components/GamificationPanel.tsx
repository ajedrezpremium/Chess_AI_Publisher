'use client';

import type { Lang } from '@/types';
import { t } from '@/lib/i18n';
import { getLevel, getNextLevelPoints, getBadges } from '@/lib/gamification';

interface GamificationPanelProps {
  lang: Lang;
  points: number;
  open: boolean;
  onClose: () => void;
}

export default function GamificationPanel({ lang, points, open, onClose }: GamificationPanelProps) {
  if (!open) return null;

  const { level, name: levelName } = getLevel(points);
  const nextLevel = getNextLevelPoints(points);
  const progress = Math.min(100, (points / nextLevel) * 100);
  const badges = getBadges(points);

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" style={{ maxWidth: 480 }}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: 24 }}>🏅 {t('gamification.title', lang)}</h2>
        <div style={{ fontSize: '3rem', color: 'var(--gold)', fontWeight: 900, textAlign: 'center' }}>{points}</div>
        <div style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 24 }}>{t('gamification.points', lang)}</div>
        <div style={{ margin: '24px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 8 }}>
            <span>{t('gamification.level', lang).replace('2', String(level)).replace('Aprendiz', levelName)}</span>
            <span>{points} / {nextLevel} {t('gamification.toNext', lang)}</span>
          </div>
          <div style={{ height: 8, background: 'var(--bg-secondary)', borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'linear-gradient(90deg, var(--gold-dark), var(--gold))', borderRadius: 4, transition: 'width 0.8s ease' }} />
          </div>
        </div>
        <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 12 }}>{t('gamification.badges', lang)}</h4>
        <div className="badges" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          {badges.map(b => (
            <div key={b.id} className={`badge-item${!b.unlocked ? ' locked' : ''}`}
              style={{ textAlign: 'center', padding: 16, borderRadius: 12, background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', minWidth: 90, opacity: b.unlocked ? 1 : 0.3 }}>
              <div style={{ fontSize: '2rem' }}>{b.icon}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 4 }}>{t(b.nameKey, lang)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
