'use client';

import { useState } from 'react';
import type { Lang } from '@/types';
import { t } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cycles = [
  { icon: '📘', titleKey: 'edu.cycle1', descKey: 'edu.cycle1desc' },
  { icon: '📗', titleKey: 'edu.cycle2', descKey: 'edu.cycle2desc' },
  { icon: '📕', titleKey: 'edu.cycle3', descKey: 'edu.cycle3desc' },
  { icon: '🏆', titleKey: 'edu.method', descKey: 'edu.methoddesc' },
];

export default function EducationalPage() {
  const [lang, setLang] = useState<Lang>('es');

  return (
    <>
      <Header lang={lang} points={0} onLangChange={setLang} onGamificationOpen={() => {}} />
      <main style={{ paddingTop: 100 }}>
        <div className="container" style={{ padding: '80px 24px' }}>
          <div className="section-label">🎓 {t('edu.label', lang)}</div>
          <h2 className="section-title">{t('edu.title', lang)}</h2>
          <p className="section-subtitle">{t('edu.subtitle', lang)}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 20, marginTop: 40 }}>
            {cycles.map((c, i) => (
              <div key={i} className="project-card" style={{ textAlign: 'center' }}>
                <div className="project-icon">{c.icon}</div>
                <h3>{t(c.titleKey, lang)}</h3>
                <p>{t(c.descKey, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
