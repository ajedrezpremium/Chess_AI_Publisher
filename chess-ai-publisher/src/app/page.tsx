'use client';

import { useState, useCallback } from 'react';
import type { Lang } from '@/types';
import { DEFAULT_GAMIFICATION } from '@/lib/gamification';
import Header from '@/components/Header';
import MainContent from '@/components/MainContent';
import ChatWidget from '@/components/ChatWidget';
import GamificationPanel from '@/components/GamificationPanel';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<Lang>('es');
  const [points, setPoints] = useState(DEFAULT_GAMIFICATION.points);
  const [gamiOpen, setGamiOpen] = useState(false);
  const chatWidgetKey = `chat-${lang}`;

  const addPoints = useCallback((amount: number) => {
    setPoints(prev => prev + amount);
  }, []);

  return (
    <>
      <Header lang={lang} points={points} onLangChange={setLang} onGamificationOpen={() => setGamiOpen(true)} />
      <MainContent lang={lang} />
      <Footer lang={lang} />
      <ChatWidget key={chatWidgetKey} lang={lang} onPointsEarned={addPoints} />
      <GamificationPanel lang={lang} points={points} open={gamiOpen} onClose={() => setGamiOpen(false)} />
    </>
  );
}
