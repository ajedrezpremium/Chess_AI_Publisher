'use client';

import { useState, useEffect } from 'react';
import { t, languages, type Lang } from '@/lib/i18n';
import { useTheme } from '@/lib/useTheme';

interface HeaderProps {
  lang: Lang;
  points: number;
  onLangChange: (lang: Lang) => void;
  onGamificationOpen: () => void;
}

export default function Header({ lang, points, onLangChange, onGamificationOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = ['home', 'catalog', 'educational', 'cyberchess', 'author', 'contact'] as const;

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a href="/" className="logo">
          <div className="logo-icon">♚</div>
          <span>JREDITION</span>
        </a>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={t('header.menu', lang)}>
          <span /><span /><span />
        </button>
        <nav className={`nav${menuOpen ? ' open' : ''}`}>
          {navItems.map(item => (
            <a key={item} href={item === 'home' ? '/' : `/${item === 'cyberchess' ? '#cyberchess' : item}`}
              onClick={() => setMenuOpen(false)}>
              {t(`nav.${item}`, lang)}
            </a>
          ))}
        </nav>
        <div className="header-right">
          <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          {languages.map(l => (
            <button key={l.code} className={`lang-btn${l.code === lang ? ' active' : ''}`}
              onClick={() => onLangChange(l.code)}>{l.label}</button>
          ))}
          <div className="gamification-badge" onClick={onGamificationOpen}>
            ⭐ {points} {t('header.points', lang)}
          </div>
          <button className="btn-login">{t('header.login', lang)}</button>
        </div>
      </div>
    </header>
  );
}
