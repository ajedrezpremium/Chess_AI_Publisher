import type { Lang } from '@/types';
export type { Lang };

const translations: Record<string, Record<Lang, string>> = {
  'nav.home': { es: 'Inicio', gl: 'Inicio', en: 'Home' },
  'nav.catalog': { es: 'Catálogo', gl: 'Catálogo', en: 'Catalog' },
  'nav.educational': { es: 'Proyecto Educativo', gl: 'Proxecto Educativo', en: 'Educational Project' },
  'nav.cyberchess': { es: 'CiberAjedrez', gl: 'CiberXadrez', en: 'CyberChess' },
  'nav.author': { es: 'Autor', gl: 'Autor', en: 'Author' },
  'nav.contact': { es: 'Contacto', gl: 'Contacto', en: 'Contact' },
  'header.login': { es: 'Entrar', gl: 'Entrar', en: 'Login' },
  'hero.badge': { es: 'Fundada en 2003 · Editorial Internacional', gl: 'Fundada en 2003 · Editorial Internacional', en: 'Founded in 2003 · International Publisher' },
  'hero.title1': { es: 'Donde el Ajedrez', gl: 'Onde o Xadrez', en: 'Where Chess' },
  'hero.title2': { es: 'se Convierte en Ciencia', gl: 'se Converte en Ciencia', en: 'Becomes Science' },
  'hero.subtitle': { es: 'Más de 20 años formando campeones desde la escuela hasta la maestría.', gl: 'Máis de 20 anos formando campións dende a escola ata a maestría.', en: 'Over 20 years forming champions from school to mastery.' },
  'hero.cta1': { es: 'Explorar Catálogo', gl: 'Explorar Catálogo', en: 'Explore Catalog' },
  'hero.cta2': { es: 'Conocer Agente IA', gl: 'Coñecer Axente IA', en: 'Meet AI Agent' },
  'stat.books': { es: 'Libros publicados', gl: 'Libros publicados', en: 'Books published' },
  'stat.years': { es: 'Años de experiencia', gl: 'Anos de experiencia', en: 'Years of experience' },
  'stat.students': { es: 'Estudiantes formados', gl: 'Estudantes formados', en: 'Students trained' },
  'stat.elo': { es: 'Elo en motores IA', gl: 'Elo en motores IA', en: 'Elo in AI engines' },
  'catalog.label': { es: 'Catálogo', gl: 'Catálogo', en: 'Catalog' },
  'catalog.title': { es: 'Nuestra Colección', gl: 'A Nosa Colección', en: 'Our Collection' },
  'catalog.subtitle': { es: 'Desde principiantes hasta Gran Maestría.', gl: 'Dende principiantes ata Gran Maestría.', en: 'From beginners to Grandmaster level.' },
  'filter.all': { es: 'Todos', gl: 'Todos', en: 'All' },
  'filter.school': { es: 'Ciclo Escolar', gl: 'Ciclo Escolar', en: 'School Cycle' },
  'filter.mastery': { es: 'Maestría', gl: 'Maestría', en: 'Mastery' },
  'filter.grandmaster': { es: 'Gran Maestría', gl: 'Gran Maestría', en: 'Grandmaster' },
  'filter.projects': { es: 'Proyectos', gl: 'Proxectos', en: 'Projects' },
  'chat.name': { es: 'Editor GM JREDITION', gl: 'Editor GM JREDITION', en: 'GM Editor JREDITION' },
  'chat.status': { es: 'Editor Gran Maestro · Online', gl: 'Editor Gran Mestre · Online', en: 'Grandmaster Editor · Online' },
  'chat.welcome': { es: '♚ Soy el Editor Gran Maestro de JREDITION. Domino cada fase de la edición de ajedrez: presupuestos, maquetación, impresión, logística y distribución. También conozco al detalle nuestro catálogo y proyecto educativo. ¿En qué puedo ayudarte?', gl: '♚ Son o Editor Gran Mestre de JREDITION. Domino cada fase da edición de xadrez: orzamentos, maquetación, impresión, loxística e distribución. Tamén coñezo ao detalle o noso catálogo e proxecto educativo. En que podo axudarche?', en: '♚ I am the Grandmaster Editor of JREDITION. I master every phase of chess publishing: budgeting, layout, printing, logistics, and distribution. I also know our catalog and educational project in detail. How can I help you?' },
  'chat.placeholder': { es: 'Escribe tu mensaje...', gl: 'Escribe a túa mensaxe...', en: 'Type your message...' },
  'product.details': { es: 'Ver Detalles', gl: 'Ver Detalles', en: 'View Details' },
  'product.buy': { es: 'Comprar en Amazon', gl: 'Comprar en Amazon', en: 'Buy on Amazon' },
  'product.kindle': { es: 'Comprar Kindle', gl: 'Comprar Kindle', en: 'Buy Kindle' },
  'footer.desc': { es: 'Editorial internacional especializada en ajedrez y ajedrez educativo.', gl: 'Editorial internacional especializada en xadrez e xadrez educativo.', en: 'International publisher specialized in chess and educational chess.' },
  'footer.rights': { es: 'Todos los derechos reservados', gl: 'Tódolos dereitos reservados', en: 'All rights reserved' },
  'footer.made': { es: 'Hecho con ♟️ para el ajedrez mundial', gl: 'Feito con ♟️ para o xadrez mundial', en: 'Made with ♟️ for world chess' },
  'badge.reader': { es: 'Lector', gl: 'Lector', en: 'Reader' },
  'badge.collector': { es: 'Coleccionista', gl: 'Coleccionista', en: 'Collector' },
  'badge.master': { es: 'Maestro', gl: 'Mestre', en: 'Master' },
  'badge.gm': { es: 'Gran Maestro', gl: 'Gran Mestre', en: 'Grandmaster' },
};

export function t(key: string, lang: Lang): string {
  return translations[key]?.[lang] || key;
}

export const languages: { code: Lang; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'gl', label: 'GL' },
  { code: 'en', label: 'EN' },
];
