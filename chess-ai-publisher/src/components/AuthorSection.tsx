'use client';

import { t, type Lang } from '@/lib/i18n';

interface AuthorSectionProps { lang: Lang }

export default function AuthorSection({ lang }: AuthorSectionProps) {
  return (
    <section id="author" className="section author-section">
      <div className="container">
        <div className="author-content">
          <div className="author-image"><img src="/roberto-paramos.jpg" alt="Roberto Páramos Domínguez" style={{ width: '100%', height: '100%', borderRadius: 12, objectFit: 'cover' }} /></div>
          <div className="author-info">
            <div className="section-label">✍️ {t('author.label', lang)}</div>
            <h2>{t('author.name', lang)}</h2>
            <div className="author-title">{t('author.title', lang)}</div>
            <div className="bio">{t('author.bio', lang)}</div>
            <div className="author-stats">
              <div className="author-stat"><h4>1997</h4><p>{t('author.stat1', lang)}</p></div>
              <div className="author-stat"><h4>16</h4><p>{t('author.stat2', lang)}</p></div>
              <div className="author-stat"><h4>3000+</h4><p>{t('author.stat3', lang)}</p></div>
              <div className="author-stat"><h4>2003</h4><p>{t('author.stat4', lang)}</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
