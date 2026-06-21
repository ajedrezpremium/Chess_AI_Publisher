'use client';

import { useState } from 'react';
import type { Lang } from '@/types';
import { t } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const [lang, setLang] = useState<Lang>('es');

  return (
    <>
      <Header lang={lang} points={0} onLangChange={setLang} onGamificationOpen={() => {}} />
      <main style={{ paddingTop: 100 }}>
        <div className="container" style={{ padding: '80px 24px' }}>
          <div className="section-label">✍️ {t('author.label', lang)}</div>
          <div className="author-content">
            <div className="author-image"><span>♚</span></div>
            <div className="author-info">
              <h2>{t('author.name', lang)}</h2>
              <div className="author-title">{t('author.title', lang)}</div>
              <div className="bio" style={{ margin: '16px 0', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {t('author.bio', lang)}
              </div>
              <div className="author-stats">
                <div className="author-stat"><h4>1997</h4><p>{t('author.stat1', lang)}</p></div>
                <div className="author-stat"><h4>15</h4><p>{t('author.stat2', lang)}</p></div>
                <div className="author-stat"><h4>3000+</h4><p>{t('author.stat3', lang)}</p></div>
                <div className="author-stat"><h4>2003</h4><p>{t('author.stat4', lang)}</p></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
