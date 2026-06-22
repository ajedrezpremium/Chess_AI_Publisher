'use client';

import { useState } from 'react';
import type { Lang } from '@/types';
import { t } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/lib/products';

export default function AuthorPage() {
  const [lang, setLang] = useState<Lang>('es');
  const isabelBooks = products.filter(p => p.cat === 'math' || p.id === 20);

  return (
    <>
      <Header lang={lang} points={0} onLangChange={setLang} onGamificationOpen={() => {}} />
      <main style={{ paddingTop: 100 }}>
        <div className="container" style={{ padding: '80px 24px' }}>
          {/* Roberto Páramos */}
          <div className="section-label">✍️ {t('author.label', lang)}</div>
          <div className="author-content" style={{ marginBottom: 80 }}>
            <div className="author-image"><img src="/MANUAL EXCELLENCE CHESS ORGANIZERS 1.0 eng.jpg" alt="Chess Organizers" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} /></div>
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

          {/* Isabel López Martínez */}
          <div className="section-label">✍️ Autora</div>
          <div className="author-content" style={{ marginBottom: 80 }}>
            <div className="author-image"><img src="/cuento ajedrez.jpg" alt="Salvemos al Rey Blanco" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} /></div>
            <div className="author-info">
              <h2>{t('author.isabel.name', lang)}</h2>
              <div className="author-title">{t('author.isabel.title', lang)}</div>
              <div className="bio" style={{ margin: '16px 0', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {t('author.isabel.bio', lang)}
              </div>
              <div className="author-stats">
                <div className="author-stat"><h4>3</h4><p>{t('author.isabel.stat1', lang)}</p></div>
                <div className="author-stat"><h4>6+</h4><p>{t('author.isabel.stat2', lang)}</p></div>
                <div className="author-stat"><h4>✓</h4><p>{t('author.isabel.stat3', lang)}</p></div>
                <div className="author-stat"><h4>1</h4><p>{t('author.isabel.stat4', lang)}</p></div>
              </div>
            </div>
          </div>

          {/* Obras de Isabel López Martínez */}
          <div className="section-label">📚 {lang === 'es' ? 'Obras' : lang === 'gl' ? 'Obras' : 'Works'}</div>
          <h2 style={{ marginBottom: 32 }}>
            {t('author.isabel.name', lang)}
          </h2>
          <div className="catalog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
            {isabelBooks.map(book => (
              <div key={book.id} className="product-card card">
                <div className="product-emoji">{book.emoji}</div>
                <h3 style={{ margin: '8px 0' }}>{book.title[lang]}</h3>
                <p className="product-level" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{book.level[lang]}</p>
                <p style={{ margin: '8px 0', lineHeight: 1.6 }}>{book.desc[lang]}</p>
                <div style={{ fontWeight: 700, fontSize: 20, margin: '12px 0' }}>{book.price}</div>
                <a href={book.amazon} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>
                  {lang === 'es' ? 'Comprar en Amazon' : lang === 'gl' ? 'Comprar en Amazon' : 'Buy on Amazon'} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
