'use client';

import { t, type Lang } from '@/lib/i18n';

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-image-bg" />
      <div className="hero-grid" />
      <div className="chess-piece" style={{ top: '15%', left: '8%', fontSize: '6rem' }}>♔</div>
      <div className="chess-piece" style={{ top: '60%', right: '10%', fontSize: '5rem', animationDuration: '25s' }}>♛</div>
      <div className="chess-piece" style={{ top: '30%', right: '20%', fontSize: '3rem', animationDuration: '18s' }}>♞</div>
      <div className="chess-piece" style={{ bottom: '20%', left: '15%', fontSize: '4rem', animationDuration: '22s' }}>♝</div>

      <div className="container hero-content">
        <div className="hero-badge">✨ {t('hero.badge', lang)}</div>
        <h1><span>{t('hero.title1', lang)}</span><br /><span>{t('hero.title2', lang)}</span></h1>
        <p>{t('hero.subtitle', lang)}</p>
        <div className="hero-buttons">
          <a href="#catalog" className="btn-primary">📚 {t('hero.cta1', lang)}</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><h3>15</h3><p>{t('stat.books', lang)}</p></div>
          <div className="hero-stat"><h3>22+</h3><p>{t('stat.years', lang)}</p></div>
          <div className="hero-stat"><h3>3000+</h3><p>{t('stat.students', lang)}</p></div>
          <div className="hero-stat"><h3>+3600</h3><p>{t('stat.elo', lang)}</p></div>
        </div>
      </div>
    </section>
  );
}
