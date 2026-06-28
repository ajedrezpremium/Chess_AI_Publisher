'use client';

import { t, type Lang } from '@/lib/i18n';

interface EducationalSectionProps { lang: Lang }

const cycles = [
  { icon: '📘', titleKey: 'edu.cycle1', descKey: 'edu.cycle1desc' },
  { icon: '📗', titleKey: 'edu.cycle2', descKey: 'edu.cycle2desc' },
  { icon: '📕', titleKey: 'edu.cycle3', descKey: 'edu.cycle3desc' },
];

export default function EducationalSection({ lang }: EducationalSectionProps) {
  return (
    <section id="educational" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-label">🎓 {t('edu.label', lang)}</div>
        <h2 className="section-title">{t('edu.title', lang)}</h2>
        <p className="section-subtitle">{t('edu.subtitle', lang)}</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20 }}>
          {cycles.map((c, i) => (
            <div key={i} className="project-card" style={{ textAlign: 'center' }}>
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
