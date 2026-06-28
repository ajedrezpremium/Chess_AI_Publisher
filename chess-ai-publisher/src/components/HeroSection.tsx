'use client';

import { useEffect, useState, useRef } from 'react';
import { t, type Lang } from '@/lib/i18n';

interface HeroSectionProps {
  lang: Lang;
}

const pieces = [
  { char: '♔', top: '10%', left: '5%', size: '7rem', delay: '0s', dur: '28s' },
  { char: '♛', top: '55%', right: '8%', size: '6rem', delay: '2s', dur: '22s' },
  { char: '♞', top: '25%', right: '22%', size: '4rem', delay: '4s', dur: '18s' },
  { char: '♝', bottom: '15%', left: '12%', size: '5rem', delay: '1s', dur: '25s' },
  { char: '♜', top: '70%', left: '30%', size: '3.5rem', delay: '3s', dur: '20s' },
  { char: '♟', bottom: '30%', right: '35%', size: '3rem', delay: '5s', dur: '16s' },
  { char: '♚', top: '40%', left: '45%', size: '5.5rem', delay: '2.5s', dur: '30s' },
  { char: '♕', bottom: '10%', right: '15%', size: '4.5rem', delay: '3.5s', dur: '24s' },
];

export default function HeroSection({ lang }: HeroSectionProps) {
  const [offsetY, setOffsetY] = useState(0);
  const [counts, setCounts] = useState({ books: 0, years: 0, students: 0, elo: 0 });
  const counted = useRef(false);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted.current) {
        counted.current = true;
        const duration = 1500;
        const steps = 30;
        const interval = duration / steps;
        let step = 0;
        const timer = setInterval(() => {
          step++;
          setCounts({
            books: Math.min(16, Math.round((16 / steps) * step)),
            years: Math.min(22, Math.round((22 / steps) * step)),
            students: Math.min(3000, Math.round((3000 / steps) * step)),
            elo: Math.min(3600, Math.round((3600 / steps) * step)),
          });
          if (step >= steps) clearInterval(timer);
        }, interval);
      }
    }, { threshold: 0.3 });
    const el = document.querySelector('.hero-stats');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-image-bg" style={{ transform: `translateY(${offsetY * 0.15}px)` }} />
      <div className="hero-grid" />
      <div className="chess-board-bg" />
      {pieces.map((p, i) => (
        <div
          key={i}
          className="chess-piece"
          style={{
            top: p.top, left: p.left, right: p.right, bottom: p.bottom,
            fontSize: p.size, animationDuration: p.dur, animationDelay: p.delay,
            transform: `translateY(${offsetY * (0.05 + i * 0.01)}px)`,
          }}
        >
          {p.char}
        </div>
      ))}

      <div className="container hero-content">
        <div className="hero-badge">✨ {t('hero.badge', lang)}</div>
        <h1><span>{t('hero.title1', lang)}</span><br /><span>{t('hero.title2', lang)}</span></h1>
        <p>{t('hero.subtitle', lang)}</p>
        <div className="hero-buttons">
          <a href="#catalog" className="btn-primary">📚 {t('hero.cta1', lang)}</a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><h3>{counts.books}</h3><p>{t('stat.books', lang)}</p></div>
          <div className="hero-stat"><h3>{counts.years}+</h3><p>{t('stat.years', lang)}</p></div>
          <div className="hero-stat"><h3>{counts.students.toLocaleString()}+</h3><p>{t('stat.students', lang)}</p></div>
          <div className="hero-stat"><h3>+{counts.elo}</h3><p>{t('stat.elo', lang)}</p></div>
        </div>
      </div>
    </section>
  );
}
