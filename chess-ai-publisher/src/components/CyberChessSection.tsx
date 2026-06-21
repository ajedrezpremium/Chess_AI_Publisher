'use client';

import { t, type Lang } from '@/lib/i18n';

interface CyberChessSectionProps { lang: Lang }

const cards = [
  { icon: '🧠', titleKey: 'cyber.card1', descKey: 'cyber.card1desc' },
  { icon: '🔄', titleKey: 'cyber.card2', descKey: 'cyber.card2desc' },
  { icon: '📡', titleKey: 'cyber.card3', descKey: 'cyber.card3desc' },
];

export default function CyberChessSection({ lang }: CyberChessSectionProps) {
  return (
    <section id="cyberchess" className="section">
      <div className="container">
        <div className="section-label">🤖 {t('cyber.label', lang)}</div>
        <h2 className="section-title">{t('cyber.title', lang)}</h2>
        <p className="section-subtitle">{t('cyber.subtitle', lang)}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {cards.map((c, i) => (
            <div key={i} className="project-card">
              <div className="project-icon">{c.icon}</div>
              <h3>{t(c.titleKey, lang)}</h3>
              <p>{t(c.descKey, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
