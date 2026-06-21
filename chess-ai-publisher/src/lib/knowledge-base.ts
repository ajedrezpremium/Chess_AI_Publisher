import type { Lang } from '@/types';

interface KBEntry {
  pattern: RegExp;
  response: (lang: Lang) => string;
}

const beginner: KBEntry[] = [
  {
    pattern: /8\s*años|niño|niña|infantil|peque/i,
    response: (lang) => {
      if (lang === 'gl') return '📚 Para un neno de 8 anos, recomendo "Ajedrez 1er Grado" (principiantes) ou "Salvemos ao Rei Branco" se quere unha aventura divertida. O 1er Grado ten 208 páxinas con regras básicas. 🛒 https://amzn.to/3u2HTvR';
      if (lang === 'en') return '📚 For an 8-year-old, I recommend "Chess 1st Grade" (beginners) or "Save the White King" for a fun adventure. The 1st Grade has 208 pages with basic rules. 🛒 https://amzn.to/3u2HTvR';
      return '📚 Para un niño de 8 años, recomiendo "Ajedrez 1er Grado" (principiantes) o "Salvemos al Rey Blanco" si prefiere una aventura divertida. El 1er Grado tiene 208 páginas con reglas básicas. 🛒 https://amzn.to/3u2HTvR';
    },
  },
];

const catalog: KBEntry[] = [
  {
    pattern: /diferencia|difference|diferenza.*(grado|grade|grao)/i,
    response: (lang) => {
      if (lang === 'gl') return '📖 O Grado 3 (escolar) chega ata ~1800 Elo. O Grado 4 (maestría) esixe máis, con aperturas e análise profunda. Son ciclos diferentes: escolar vs maestría.';
      if (lang === 'en') return '📖 Grade 3 (school cycle) reaches ~1800 Elo. Grade 4 (mastery) demands more, with openings and deep analysis. They are different cycles: school vs mastery.';
      return '📖 El Grado 3 (escolar) llega hasta ~1800 Elo. El Grado 4 (maestría) exige más, con aperturas y análisis profundo. Son ciclos diferentes: escolar vs maestría.';
    },
  },
  {
    pattern: /profesor|teacher|profesor|material.*docente/i,
    response: (lang) => {
      if (lang === 'gl') return '👨‍🏫 Para profesores, recomendo "Ajedrez Educativo" (pedagoxía dixital, 40€) e toda a serie "Ajedrez na Escola" (10 volumes).';
      if (lang === 'en') return '👨‍🏫 For teachers, I recommend "Educational Chess" (digital pedagogy, €40) and the complete "Chess at School" series (10 volumes).';
      return '👨‍🏫 Para profesores, recomiendo "Ajedrez Educativo" (pedagogía digital, 40€) y toda la serie "Ajedrez en la Escuela" (10 volúmenes).';
    },
  },
];

const cyber: KBEntry[] = [
  {
    pattern: /ciberajedrez|ciberxadrez|cyberchess|ciber/i,
    response: (lang) => {
      if (lang === 'gl') return '🤖 O CiberXadrez é a fusión do home coa máquina. Usamos motores de +3600 Elo para analizar partidas. O libro "CiberXadrez" (40€) mergúllase en IA, desenvolvemento, enroque, peóns dobrados... Unha revolución!';
      if (lang === 'en') return '🤖 CyberChess is the fusion of man and machine. We use +3600 Elo engines to analyze games. The book "CyberChess" (€40) dives into AI, development, castling, doubled pawns... A revolution!';
      return '🤖 El CiberAjedrez es la fusión del hombre con la máquina. Usamos motores de +3600 Elo para analizar partidas. El libro "CiberAjedrez" (40€) se sumerge en IA, desarrollo, enroque, peones doblados... ¡Una revolución!';
    },
  },
];

const general: KBEntry[] = [
  {
    pattern: /recomienda|recomend|recommend|sugiere|suggest|que.*libro|which.*book/i,
    response: (lang) => {
      if (lang === 'gl') return '📚 Depende do teu nivel! \n• Principiante: "Ajedrez 1er Grado" (25€) ou "Salvemos ao Rei Branco" (10,99€)\n• Intermedio: "Ajedrez 3er Grado" (25€) ou "Ajedrez 5º Grado" (27€)\n• Avanzado: "Ajedrez 6º Grado" (30€)\n• Profesional: "CiberXadrez" (40€)\n\nDime o teu nivel e recoméndoche o perfecto! 🎯';
      if (lang === 'en') return '📚 It depends on your level!\n• Beginner: "Chess 1st Grade" (€25) or "Save the White King" (€10.99)\n• Intermediate: "Chess 3rd Grade" (€25) or "Chess 5th Grade" (€27)\n• Advanced: "Chess 6th Grade" (€30)\n• Professional: "CyberChess" (€40)\n\nTell me your level and I\'ll recommend the perfect one! 🎯';
      return '📚 Depende de tu nivel!\n• Principiante: "Ajedrez 1er Grado" (25€) o "Salvemos al Rey Blanco" (10,99€)\n• Intermedio: "Ajedrez 3er Grado" (25€) o "Ajedrez 5º Grado" (27€)\n• Avanzado: "Ajedrez 6º Grado" (30€)\n• Profesional: "CiberAjedrez" (40€)\n\n¡Dime tu nivel y te recomiendo el perfecto! 🎯';
    },
  },
  {
    pattern: /punto|point|score|puntos|pts/i,
    response: (lang) => {
      if (lang === 'gl') return '⭐ Gaña puntos JREDITION: explora o catálogo (+10), fala co asistente (+5), comparte (+20). Alcanza 500 pts para desbloquear a insignia "Mestre"!';
      if (lang === 'en') return '⭐ Earn JREDITION points: browse the catalog (+10), talk with the assistant (+5), share (+20). Reach 500 pts to unlock the "Master" badge!';
      return '⭐ Gana puntos JREDITION: explora el catálogo (+10), habla con el asistente (+5), comparte (+20). ¡Alcanza 500 pts para desbloquear la insignia "Maestro"!';
    },
  },
  {
    pattern: /precio|price|prezo|costo|cost/i,
    response: (lang) => {
      if (lang === 'gl') return '💰 Prezos: Ciclo Escolar 25€ · Maestría 27-30€ · Gran Maestría 30€ · Salvemos ao Rei Branco 10,99€ · Ajedrez Educativo 40€ · CiberXadrez 40€. Todos en Amazon! 🛒';
      if (lang === 'en') return '💰 Prices: School Cycle €25 · Mastery €27-30 · Grandmaster €30 · Save the White King €10.99 · Educational Chess €40 · CyberChess €40. All on Amazon! 🛒';
      return '💰 Precios: Ciclo Escolar 25€ · Maestría 27-30€ · Gran Maestría 30€ · Salvemos al Rey Blanco 10,99€ · Ajedrez Educativo 40€ · CiberAjedrez 40€. ¡Todos en Amazon! 🛒';
    },
  },
  {
    pattern: /roberto|páramos|paramos|author|autor/i,
    response: (lang) => {
      if (lang === 'gl') return '✍️ Roberto Páramos Domínguez é MI dende 1997. 30+ anos, 3000+ estudantes, 50+ xogadores >2200 FIDE. Fundou JREDITION en 2003. Filosofía: "O xadrez, como a vida, é 90% estratexia".';
      if (lang === 'en') return '✍️ Roberto Páramos Domínguez is an IM since 1997. 30+ years, 3000+ students, 50+ players >2200 FIDE. Founded JREDITION in 2003. Philosophy: "Chess, like life, is 90% strategy."';
      return '✍️ Roberto Páramos Domínguez es MI desde 1997. 30+ años, 3000+ estudiantes, 50+ jugadores >2200 FIDE. Fundó JREDITION en 2003. Filosofía: "El ajedrez, como la vida, es 90% estrategia".';
    },
  },
  {
    pattern: /contacto|contact|email/i,
    response: () => '📬 Contáctanos: xg@xadrezgalego.net · +34 986 260 259 · C/Reiseñor, 15, 36205 Vigo. Web: xadrezgalego.net',
  },
  {
    pattern: /hola|ola|hello|hi|buenas|saludos/i,
    response: (lang) => {
      if (lang === 'gl') return '👋 Ola! Son JR Assistant, o teu guía no mundo JREDITION. Pregúntame o que queiras sobre libros, proxecto educativo ou CiberXadrez!';
      if (lang === 'en') return '👋 Hello! I\'m JR Assistant, your guide to the JREDITION world. Ask me about books, educational project, or CyberChess!';
      return '👋 ¡Hola! Soy JR Assistant, tu guía en el mundo JREDITION. ¡Pregúntame sobre libros, proyecto educativo o CiberAjedrez!';
    },
  },
];

const fallback = (lang: Lang): string => {
  if (lang === 'gl') return '🤔 Non atopei información específica. Pregúntame sobre: recomendacións, prezos, CiberXadrez, proxecto educativo, Roberto Páramos ou puntos de gamificación.';
  if (lang === 'en') return "🤔 I couldn't find specific information. Ask me about: recommendations, prices, CyberChess, educational project, Roberto Páramos, or gamification points.";
  return '🤔 No encontré información específica. Pregúntame sobre: recomendaciones, precios, CiberAjedrez, proyecto educativo, Roberto Páramos o puntos de gamificación.';
};

const allEntries: KBEntry[] = [...beginner, ...catalog, ...cyber, ...general];

export function getBotResponse(input: string, lang: Lang): string {
  const lower = input.toLowerCase();
  for (const entry of allEntries) {
    if (entry.pattern.test(lower)) return entry.response(lang);
  }
  return fallback(lang);
}
