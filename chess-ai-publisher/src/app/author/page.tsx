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
            <div className="author-image">
              <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', borderRadius: 12 }}>
                <rect width="200" height="200" fill="#1a1a2e" rx="12" />
                <circle cx="100" cy="75" r="35" fill="#e8d5b7" />
                <circle cx="85" cy="68" r="4" fill="#333" />
                <circle cx="115" cy="68" r="4" fill="#333" />
                <path d="M88 82 Q100 92 112 82" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
                <rect x="75" y="115" width="50" height="55" rx="8" fill="#2c2c54" />
                <rect x="72" y="118" width="8" height="35" rx="4" fill="#2c2c54" />
                <rect x="120" y="118" width="8" height="35" rx="4" fill="#2c2c54" />
                <rect x="78" y="168" width="44" height="6" rx="3" fill="#2c2c54" />
                <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#d4a843" fontWeight="bold">♚ IM</text>
              </svg>
            </div>
            <div className="author-info">
              <h2>{t('author.name', lang)}</h2>
              <div className="author-title">{t('author.title', lang)}</div>
              <div className="bio" style={{ margin: '16px 0', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                {t('author.bio', lang)}
              </div>
              <div className="author-stats">
                <div className="author-stat"><h4>1997</h4><p>{t('author.stat1', lang)}</p></div>
                <div className="author-stat"><h4>16</h4><p>{t('author.stat2', lang)}</p></div>
                <div className="author-stat"><h4>3000+</h4><p>{t('author.stat3', lang)}</p></div>
                <div className="author-stat"><h4>2003</h4><p>{t('author.stat4', lang)}</p></div>
              </div>
            </div>
          </div>

          {/* Isabel López Martínez */}
          <div className="section-label">✍️ Autora</div>
          <div className="author-content" style={{ marginBottom: 80 }}>
            <div className="author-image">
              <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', borderRadius: 12 }}>
                <rect width="200" height="200" fill="#2e1a2e" rx="12" />
                <circle cx="100" cy="75" r="35" fill="#f0d5b7" />
                <circle cx="85" cy="68" r="4" fill="#333" />
                <circle cx="115" cy="68" r="4" fill="#333" />
                <path d="M88 82 Q100 92 112 82" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M92 45 Q100 52 108 45" stroke="#333" strokeWidth="2" fill="none" />
                <rect x="75" y="115" width="50" height="55" rx="8" fill="#4a2a4a" />
                <rect x="72" y="118" width="8" height="35" rx="4" fill="#4a2a4a" />
                <rect x="120" y="118" width="8" height="35" rx="4" fill="#4a2a4a" />
                <rect x="78" y="168" width="44" height="6" rx="3" fill="#4a2a4a" />
                <text x="100" y="195" textAnchor="middle" fontSize="10" fill="#d4a843" fontWeight="bold">♕ AUTORA</text>
              </svg>
            </div>
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
                <div className="product-card-image">
                  {book.image ? (
                    <img src={book.image} alt={book.title[lang]} className="product-cover" />
                  ) : (
                    <div className="product-emoji" style={{ fontSize: '4rem', opacity: 0.3 }}>{book.emoji}</div>
                  )}
                </div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ margin: '0 0 8px' }}>{book.title[lang]}</h3>
                  <p className="product-level" style={{ color: 'var(--text-secondary)', fontSize: 14 }}>{book.level[lang]}</p>
                  <p style={{ margin: '8px 0', lineHeight: 1.6 }}>{book.desc[lang]}</p>
                  <div style={{ fontWeight: 700, fontSize: 20, margin: '12px 0' }}>{book.price}</div>
                  <a href={book.amazon} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-block' }}>
                    {lang === 'es' ? 'Comprar en Amazon' : lang === 'gl' ? 'Comprar en Amazon' : 'Buy on Amazon'} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} />
    </>
  );
}
