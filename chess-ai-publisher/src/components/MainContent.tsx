'use client';

import HeroSection from './HeroSection';
import CatalogSection from './CatalogSection';
import EducationalSection from './EducationalSection';
import CyberChessSection from './CyberChessSection';
import AuthorSection from './AuthorSection';

interface MainContentProps {
  lang: 'es' | 'gl' | 'en';
}

export default function MainContent({ lang }: MainContentProps) {
  return (
    <main>
      <HeroSection lang={lang} />
      <CatalogSection lang={lang} />
      <EducationalSection lang={lang} />
      <CyberChessSection lang={lang} />
      <AuthorSection lang={lang} />
    </main>
  );
}
