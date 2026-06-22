import type { Lang } from '@/types';

interface KBEntry {
  pattern: RegExp;
  response: (lang: Lang) => string;
}

const persona: KBEntry[] = [
  {
    pattern: /quién\s*eres|who\s*are\s*you|quen\s*es|presenta|about\s*you/i,
    response: (lang) => {
      if (lang === 'gl') return '♚ Son o Editor Gran Mestre de JREDITION. Dominio completo da edición de materiais de ajedrez: orzamentos, maquetación, impresión, loxística, distribución. Experto en levar un proxecto educativo desde o manuscrito ata o andel. Pregúntame sobre calquera fase do proceso editorial.';
      if (lang === 'en') return '♚ I am the Grandmaster Editor of JREDITION. Complete mastery of chess publishing: budgeting, layout, printing, logistics, distribution. Expert in taking an educational project from manuscript to shelf. Ask me about any phase of the publishing process.';
      return '♚ Soy el Editor Gran Maestro de JREDITION. Dominio completo de la edición de materiales de ajedrez: presupuestos, maquetación, impresión, logística, distribución. Experto en llevar un proyecto educativo desde el manuscrito hasta el estante. Pregúntame sobre cualquier fase del proceso editorial.';
    },
  },
];

const publishing: KBEntry[] = [
  {
    pattern: /presupuesto|budget|orzamento|costo.*editar|cost.*publish|cuánto.*cuesta.*editar/i,
    response: (lang) => {
      if (lang === 'gl') return '💰 Orzamentos editoriales JREDITION:\n• Libro escolar A4 cor (200 páx): 4.500-7.000€ (1.000 unid.)\n• Maquetación profesional: 800-2.500€\n• Corrección ortotipográfica: 300-600€\n• ISBN + Depósito Legal: ~150€\n• Impresión offset vs dixital: offset rendibiliza desde 500 unid.\n• Podemos axustar cada partida orzamentaria ás túas necesidades. Pídeme un desglose detallado!';
      if (lang === 'en') return '💰 JREDITION publishing budgets:\n• School A4 color book (200 pp): €4,500-7,000 (1,000 units)\n• Professional layout: €800-2,500\n• Proofreading: €300-600\n• ISBN + Legal Deposit: ~€150\n• Offset vs digital printing: offset is cost-effective from 500 units\n• We can adjust each budget line to your needs. Ask me for a detailed breakdown!';
      return '💰 Presupuestos editoriales JREDITION:\n• Libro escolar A4 color (200 pág): 4.500-7.000€ (1.000 ej.)\n• Maquetación profesional: 800-2.500€\n• Corrección ortotipográfica: 300-600€\n• ISBN + Depósito Legal: ~150€\n• Impresión offset vs digital: offset rentabiliza desde 500 ej.\n• Podemos ajustar cada partida presupuestaria a tus necesidades. ¡Pídeme un desglose detallado!';
    },
  },
  {
    pattern: /maquetación|layout|maquetac|design|diseño|indesign|latex|quark/i,
    response: (lang) => {
      if (lang === 'gl') return '📐 Maquetación profesional JREDITION:\n• Software: Adobe InDesign CC (estándar), con LaTeX para contido técnico-científico con notación de xadrez\n• Formatos: A4, A5, US Letter, personalizado\n• Xestión de cor: CMYK para impresión, RGB para digital\n• Estilos mestres, grellas modulares, folios, sangrías\n• 15 libros maquetados con máis de 2.000 páxinas de experiencia\n• Incluímos notación de xadrez (figurina algebraica), diagramas e tablas\n  Pídeme unha simulación!';
      if (lang === 'en') return '📐 Professional JREDITION layout:\n• Software: Adobe InDesign CC (standard), LaTeX for technical-scientific chess notation\n• Formats: A4, A5, US Letter, custom\n• Color management: CMYK for print, RGB for digital\n• Master pages, modular grids, running heads, margins\n• 15 books laid out with 2,000+ pages of experience\n• We include chess notation (figurine algebraic), diagrams, and tables\n  Ask me for a simulation!';
      return '📐 Maquetación profesional JREDITION:\n• Software: Adobe InDesign CC (estándar), con LaTeX para contenido técnico-científico con notación de ajedrez\n• Formatos: A4, A5, US Letter, personalizado\n• Gestión de color: CMYK para impresión, RGB para digital\n• Páginas maestras, retículas modulares, folios, sangrías\n• 15 libros maquetados con más de 2.000 páginas de experiencia\n• Incluimos notación de ajedrez (figurina algebraica), diagramas y tablas\n  ¡Pídeme una simulación!';
    },
  },
  {
    pattern: /impresión|printing|imprenta|offset|digital.*print|print.*on.*demand|pod/i,
    response: (lang) => {
      if (lang === 'gl') return '🖨️ Impresión editorial JREDITION:\n• **Offset**: tiraxes >500 unid. Mellor calidade, custo unitario baixo. Recomendado para colexios\n• **Digital / POD**: tiraxes curtas (1-200 unid.). Ideal para probas, edicións limitadas, autoedición\n• **Acabados**: rústica con solapas, tapa dura, wire-o, cosido a cabalete\n• **Papel**: estucado mate 150g, offset 90g, reciclado, certificado FSC\n• **Tintas**: CMYK, Pantone, barniz selectivo UV\n• Traballamos con imprentas en España e Portugal con prazos de 7-15 días\n  Que tiraxe e acabado necesitas?';
      if (lang === 'en') return '🖨️ JREDITION publishing printing:\n• **Offset**: runs >500 units. Best quality, low unit cost. Recommended for schools\n• **Digital / POD**: short runs (1-200 units). Ideal for proofs, limited editions, self-publishing\n• **Finishing**: perfect bound with flaps, hardcover, wire-o, saddle-stitched\n• **Paper**: matte coated 150g, offset 90g, recycled, FSC certified\n• **Inks**: CMYK, Pantone, selective UV varnish\n• We work with printers in Spain and Portugal with 7-15 day turnaround\n  What run size and finish do you need?';
      return '🖨️ Impresión editorial JREDITION:\n• **Offset**: tirajes >500 ej. Mejor calidad, coste unitario bajo. Recomendado para colegios\n• **Digital / POD**: tirajes cortos (1-200 ej.). Ideal para pruebas, ediciones limitadas, autoedición\n• **Acabados**: rústica con solapas, tapa dura, wire-o, cosido a cabalete\n• **Papel**: estucado mate 150g, offset 90g, reciclado, certificado FSC\n• **Tintas**: CMYK, Pantone, barniz selectivo UV\n• Trabajamos con imprentas en España y Portugal con plazos de 7-15 días\n  ¿Qué tiraje y acabado necesitas?';
    },
  },
  {
    pattern: /logística|logistics|almacén|warehouse|envío|shipping|distribución|distribution|stock/i,
    response: (lang) => {
      if (lang === 'gl') return '📦 Loxística JREDITION:\n• **Almacenaxe**: inventario xestionado en Vigo (Galicia) con capacidade para 10.000+ volumes\n• **Distribución**: Amazon FBA (fulfillment), venda directa web, distribución a tendas e colexios\n• **Envios**: nacional 24/48h, internacional 5-10 días\n• **Canles**: Amazon.es, Amazon.com, tendas especializadas, centros educativos, feiras\n• **Stock mínimo**: mantemos 50-100 unid. por título para rotación óptima\n• **Expansión**: preparados para escalar a outros deportes e mercados (Latam, USA, Europa)\n  Necesitas un plan loxístico para o teu proxecto?';
      if (lang === 'en') return '📦 JREDITION logistics:\n• **Warehousing**: managed inventory in Vigo (Galicia) with capacity for 10,000+ volumes\n• **Distribution**: Amazon FBA, direct web sales, distribution to stores and schools\n• **Shipping**: domestic 24/48h, international 5-10 days\n• **Channels**: Amazon.es, Amazon.com, specialty stores, schools, fairs\n• **Minimum stock**: we maintain 50-100 units per title for optimal rotation\n• **Expansion**: ready to scale to other sports and markets (LatAm, USA, Europe)\n  Do you need a logistics plan for your project?';
      return '📦 Logística JREDITION:\n• **Almacenaje**: inventario gestionado en Vigo (Galicia) con capacidad para 10.000+ volúmenes\n• **Distribución**: Amazon FBA (fulfillment), venta directa web, distribución a tiendas y colegios\n• **Envíos**: nacional 24/48h, internacional 5-10 días\n• **Canales**: Amazon.es, Amazon.com, tiendas especializadas, centros educativos, ferias\n• **Stock mínimo**: mantenemos 50-100 ej. por título para rotación óptima\n• **Expansión**: preparados para escalar a otros deportes y mercados (Latam, USA, Europa)\n  ¿Necesitas un plan logístico para tu proyecto?';
    },
  },
  {
    pattern: /isbn|depósito.*legal|legal.*deposit|derechos.*autor|copyright|registro.*propiedad/i,
    response: (lang) => {
      if (lang === 'gl') return '📋 Xestión legal JREDITION:\n• **ISBN**: xestionamos o rexistro (10 díxitos / 13 díxitos). Cada formato necesita o seu propio ISBN (rústica, tapa dura, ePub, Kindle)\n• **Depósito Legal**: obrigatorio en España. Tramitamos coa axencia correspondente\n• **Dereitos de autor**: contratos claros, regalías 10-15% sobre vendas netas\n• **Creative Commons**: opcional para contido educativo\n• **Copyright**: rexistro na Propiedade Intel·lectual\n  Creamos proxectos 100% legais desde o día cero.';
      if (lang === 'en') return '📋 JREDITION legal management:\n• **ISBN**: we manage registration (10-digit / 13-digit). Each format needs its own ISBN (paperback, hardcover, ePub, Kindle)\n• **Legal Deposit**: mandatory in Spain. We process with the corresponding agency\n• **Author rights**: clear contracts, royalties 10-15% on net sales\n• **Creative Commons**: optional for educational content\n• **Copyright**: Intellectual Property registration\n  We create 100% legal projects from day zero.';
      return '📋 Gestión legal JREDITION:\n• **ISBN**: gestionamos el registro (10 dígitos / 13 dígitos). Cada formato necesita su propio ISBN (rústica, tapa dura, ePub, Kindle)\n• **Depósito Legal**: obligatorio en España. Tramitamos con la agencia correspondiente\n• **Derechos de autor**: contratos claros, regalías 10-15% sobre ventas netas\n• **Creative Commons**: opcional para contenido educativo\n• **Copyright**: registro en Propiedad Intelectual\n  Creamos proyectos 100% legales desde el día cero.';
    },
  },
  {
    pattern: /escalar|scale|escalar.*deporte|other.*sport|outros.*deportes|deporte.*editorial|sports.*publishing/i,
    response: (lang) => {
      if (lang === 'gl') return '🚀 Escalabilidade JREDITION - O modelo editorial multideporte:\nO noso know-how en edición de ajedrez é **100% transferible** a outros deportes:\n• **Ajedrez** → modelo base validado (15 títulos, 10 niveis, 20 anos)\n• **Xadrez educativo** → mesma metodoloxía para: matemáticas, idiomas, ciencias\n• **Outros deportes**: metodoloxía progresiva por niveis (principiante a profesional): fútbol, baloncesto, tenis, natación, artes marciais\n• **Estrutura**: mesmo sistema de graos, cadernos de exercicios, guías para profesores\n• **Operativa**: mesmos provedores de impresión, loxística Amazon, sistema de distribución\n  Podemos editar a túa serie deportiva educativa con excelencia contrastada. Contáctanos!';
      if (lang === 'en') return '🚀 JREDITION scalability - The multi-sport publishing model:\nOur chess publishing know-how is **100% transferable** to other sports:\n• **Chess** → validated base model (15 titles, 10 levels, 20 years)\n• **Educational chess** → same methodology for: math, languages, sciences\n• **Other sports**: progressive level methodology (beginner to professional): soccer, basketball, tennis, swimming, martial arts\n• **Structure**: same grade system, exercise books, teacher guides\n• **Operations**: same printing suppliers, Amazon logistics, distribution system\n  We can publish your educational sports series with proven excellence. Contact us!';
      return '🚀 Escalabilidad JREDITION - El modelo editorial multideporte:\nNuestro know-how en edición de ajedrez es **100% transferible** a otros deportes:\n• **Ajedrez** → modelo base validado (15 títulos, 10 niveles, 20 años)\n• **Ajedrez educativo** → misma metodología para: matemáticas, idiomas, ciencias\n• **Otros deportes**: metodología progresiva por niveles (principiante a profesional): fútbol, baloncesto, tenis, natación, artes marciales\n• **Estructura**: mismo sistema de grados, cuadernos de ejercicios, guías para profesores\n• **Operativa**: mismos proveedores de impresión, logística Amazon, sistema de distribución\n  ¡Podemos editar tu serie deportiva educativa con excelencia contrastada! Contáctanos.';
    },
  },
  {
    pattern: /editorial.*project|project.*management|xestión.*editorial|gestión.*proyecto|workflow.*edición|proceso.*edición/i,
    response: (lang) => {
      if (lang === 'gl') return '📊 Xestión de proxectos editoriais JREDITION:\nO noso workflow completo:\n1. **Manuscrito** → avaliación, corrección, validación técnica\n2. **Maquetación** → deseño, diagramas, notación, ilustracións\n3. **Preimpresión** → probas de cor, imposición, CTF\n4. **Impresión** → offset/dixital, control de calidade en fábrica\n5. **ISBN + Depósito Legal** → rexistro e legalización\n6. **Almacenaxe** → recepción, inventario, xestión de stock\n7. **Distribución** → Amazon FBA, tendas, colexios, venda directa\n8. **Promoción** → marketing dixital, feiras, redes, author branding\n  Prazos: 3-6 meses desde o manuscrito ata a venda (edición estándar).';
      if (lang === 'en') return '📊 Editorial project management JREDITION:\nOur complete workflow:\n1. **Manuscript** → evaluation, proofreading, technical validation\n2. **Layout** → design, diagrams, notation, illustrations\n3. **Prepress** → color proofs, imposition, CTP\n4. **Printing** → offset/digital, factory quality control\n5. **ISBN + Legal Deposit** → registration and legalization\n6. **Warehousing** → reception, inventory, stock management\n7. **Distribution** → Amazon FBA, stores, schools, direct sales\n8. **Promotion** → digital marketing, fairs, social media, author branding\n  Timeline: 3-6 months from manuscript to sale (standard edition).';
      return '📊 Gestión de proyectos editoriales JREDITION:\nNuestro workflow completo:\n1. **Manuscrito** → evaluación, corrección, validación técnica\n2. **Maquetación** → diseño, diagramas, notación, ilustraciones\n3. **Preimpresión** → pruebas de color, imposición, CTF\n4. **Impresión** → offset/digital, control de calidad en fábrica\n5. **ISBN + Depósito Legal** → registro y legalización\n6. **Almacenaje** → recepción, inventario, gestión de stock\n7. **Distribución** → Amazon FBA, tiendas, colegios, venta directa\n8. **Promoción** → marketing digital, ferias, redes, author branding\n  Plazos: 3-6 meses desde el manuscrito hasta la venta (edición estándar).';
    },
  },
  {
    pattern: /autopublicación|self.publish|autoedición|publicar.*solo|publicar.*mesmo/i,
    response: (lang) => {
      if (lang === 'gl') return '📝 Autoedición asistida JREDITION:\nQueres publicar o teu propio libro de ajedrez (ou outro deporte)? Ofrecemos:\n• **Pack Básico** (1.500€): maquetación, ISBN, subida a Amazon KDP\n• **Pack Profesional** (4.500€): maquetación premium, corrección, impresión 200 ej., ISBN + Depósito Legal, distribución Amazon\n• **Pack Premium** (9.000€): tiraxe completa 1.000 ej., loxística, promoción, lanzamento\n• **Consultoría**: orientación completa sobre viabilidade, mercado e estratexia\n  Contáctanos e facemos realidade o teu libro!';
      if (lang === 'en') return '📝 Assisted self-publishing JREDITION:\nWant to publish your own chess (or other sports) book? We offer:\n• **Basic Pack** (€1,500): layout, ISBN, upload to Amazon KDP\n• **Professional Pack** (€4,500): premium layout, proofreading, 200 copies printing, ISBN + Legal Deposit, Amazon distribution\n• **Premium Pack** (€9,000): full run 1,000 copies, logistics, promotion, launch\n• **Consulting**: complete guidance on feasibility, market, and strategy\n  Contact us and let\'s make your book a reality!';
      return '📝 Autoedición asistida JREDITION:\n¿Quieres publicar tu propio libro de ajedrez (u otro deporte)? Ofrecemos:\n• **Pack Básico** (1.500€): maquetación, ISBN, subida a Amazon KDP\n• **Pack Profesional** (4.500€): maquetación premium, corrección, impresión 200 ej., ISBN + Depósito Legal, distribución Amazon\n• **Pack Premium** (9.000€): tiraje completo 1.000 ej., logística, promoción, lanzamiento\n• **Consultoría**: orientación completa sobre viabilidad, mercado y estrategia\n  ¡Contáctanos y hacemos realidad tu libro!';
    },
  },
  {
    pattern: /precio.*libro|price.*book|marxe|margin|rendibilidade|profit.*margin|custo.*unitario|unit.*cost/i,
    response: (lang) => {
      if (lang === 'gl') return '📊 Estrutura de prezos e marxes JREDITION:\nExemplo para un libro escolar de 200 páx. A4 cor, vendido a 25€:\n• **Custo impresión** (offset, 1.000 ej.): 4-5€/unid.\n• **Regalía autor**: 2-3€/unid.\n• **Comisión Amazon**: 4-5€/unid. (~15-20%)\n• **Logística**: 1-2€/unid.\n• **Marxe neta**: 8-12€/unid. (~35-45%)\n• **Punto de equilibrio**: ~250 unidades vendidas\n  Para tiraxes maiores (5.000+), o custo unitario baixa a 2-3€. Queres que modelemos o teu caso?';
      if (lang === 'en') return '📊 JREDITION pricing and margin structure:\nExample for a 200-page A4 color school book sold at €25:\n• **Printing cost** (offset, 1,000 units): €4-5/unit\n• **Author royalty**: €2-3/unit\n• **Amazon commission**: €4-5/unit (~15-20%)\n• **Logistics**: €1-2/unit\n• **Net margin**: €8-12/unit (~35-45%)\n• **Breakeven**: ~250 units sold\n  For larger runs (5,000+), unit cost drops to €2-3. Want us to model your case?';
      return '📊 Estructura de precios y márgenes JREDITION:\nEjemplo para un libro escolar de 200 pág. A4 color, vendido a 25€:\n• **Costo impresión** (offset, 1.000 ej.): 4-5€/unid.\n• **Regalía autor**: 2-3€/unid.\n• **Comisión Amazon**: 4-5€/unid. (~15-20%)\n• **Logística**: 1-2€/unid.\n• **Margen neto**: 8-12€/unid. (~35-45%)\n• **Punto de equilibrio**: ~250 unidades vendidas\n  Para tirajes mayores (5.000+), el costo unitario baja a 2-3€. ¿Quieres que modelemos tu caso?';
    },
  },
  {
    pattern: /tradutor|translator|translation|traducción|idioma|language|en.*galego|en.*inglés|en.*español|versión.*idioma/i,
    response: (lang) => {
      if (lang === 'gl') return '🌍 Tradución e localización JREDITION:\n• **Idiomas actuais**: Español, Galego, Inglés\n• **Metodoloxía**: tradución especializada en contido deportivo-educativo\n• **Proceso**: tradución humana + revisión técnica (vocabulario específico de ajedrez/deporte)\n• **Localización**: adaptación de exemplos, referencias culturais, sistema educativo\n• **Versións simultáneas**: publicamos o mesmo título en 3 idiomas ao mesmo tempo\n• **Custo**: 0,08-0,12€/palabra segundo complexidade\n  Listos para engadir máis idiomas segundo demanda do mercado.';
      if (lang === 'en') return '🌍 Translation and localization JREDITION:\n• **Current languages**: Spanish, Galician, English\n• **Methodology**: specialized translation in sports-educational content\n• **Process**: human translation + technical review (chess/sports specific vocabulary)\n• **Localization**: adaptation of examples, cultural references, educational system\n• **Simultaneous versions**: publish the same title in 3 languages simultaneously\n• **Cost**: €0.08-0.12/word depending on complexity\n  Ready to add more languages according to market demand.';
      return '🌍 Traducción y localización JREDITION:\n• **Idiomas actuales**: Español, Gallego, Inglés\n• **Metodología**: traducción especializada en contenido deportivo-educativo\n• **Proceso**: traducción humana + revisión técnica (vocabulario específico de ajedrez/deporte)\n• **Localización**: adaptación de ejemplos, referencias culturales, sistema educativo\n• **Versiones simultáneas**: publicamos el mismo título en 3 idiomas al mismo tiempo\n• **Costo**: 0,08-0,12€/palabra según complejidad\n  Listos para añadir más idiomas según demanda del mercado.';
    },
  },
];

const chess: KBEntry[] = [
  {
    pattern: /8\s*años|niño|niña|infantil|peque/i,
    response: (lang) => {
      if (lang === 'gl') return '📚 Para un neno de 8 anos, recomendo "Ajedrez 1er Grado" (principiantes) ou "Salvemos ao Rei Branco" se quere unha aventura divertida. O 1er Grado ten 208 páxinas con regras básicas. 🛒 https://amzn.to/3u2HTvR';
      if (lang === 'en') return '📚 For an 8-year-old, I recommend "Chess 1st Grade" (beginners) or "Save the White King" for a fun adventure. The 1st Grade has 208 pages with basic rules. 🛒 https://amzn.to/3u2HTvR';
      return '📚 Para un niño de 8 años, recomiendo "Ajedrez 1er Grado" (principiantes) o "Salvemos al Rey Blanco" si prefiere una aventura divertida. El 1er Grado tiene 208 páginas con reglas básicas. 🛒 https://amzn.to/3u2HTvR';
    },
  },
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
  {
    pattern: /ciberajedrez|ciberxadrez|cyberchess|ciber/i,
    response: (lang) => {
      if (lang === 'gl') return '🤖 O CiberXadrez é a fusión do home coa máquina. Usamos motores de +3600 Elo para analizar partidas. O libro "CiberXadrez" (40€) mergúllase en IA, desenvolvemento, enroque, peóns dobrados... Unha revolución!';
      if (lang === 'en') return '🤖 CyberChess is the fusion of man and machine. We use +3600 Elo engines to analyze games. The book "CyberChess" (€40) dives into AI, development, castling, doubled pawns... A revolution!';
      return '🤖 El CiberAjedrez es la fusión del hombre con la máquina. Usamos motores de +3600 Elo para analizar partidas. El libro "CiberAjedrez" (40€) se sumerge en IA, desarrollo, enroque, peones doblados... ¡Una revolución!';
    },
  },
  {
    pattern: /recomienda|recomend|recommend|sugiere|suggest|que.*libro|which.*book/i,
    response: (lang) => {
      if (lang === 'gl') return '📚 Depende do teu nivel! \n• Principiante: "Ajedrez 1er Grado" (25€) ou "Salvemos ao Rei Branco" (10,99€)\n• Intermedio: "Ajedrez 3er Grado" (25€) ou "Ajedrez 5º Grado" (27€)\n• Avanzado: "Ajedrez 6º Grado" (30€)\n• Profesional: "CiberXadrez" (40€)\n\nDime o teu nivel e recoméndoche o perfecto! 🎯';
      if (lang === 'en') return '📚 It depends on your level!\n• Beginner: "Chess 1st Grade" (€25) or "Save the White King" (€10.99)\n• Intermediate: "Chess 3rd Grade" (€25) or "Chess 5th Grade" (€27)\n• Advanced: "Chess 6th Grade" (€30)\n• Professional: "CyberChess" (€40)\n\nTell me your level and I\'ll recommend the perfect one! 🎯';
      return '📚 Depende de tu nivel!\n• Principiante: "Ajedrez 1er Grado" (25€) o "Salvemos al Rey Blanco" (10,99€)\n• Intermedio: "Ajedrez 3er Grado" (25€) o "Ajedrez 5º Grado" (27€)\n• Avanzado: "Ajedrez 6º Grado" (30€)\n• Profesional: "CiberAjedrez" (40€)\n\n¡Dime tu nivel y te recomiendo el perfecto! 🎯';
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
    pattern: /punto|point|score|puntos|pts/i,
    response: (lang) => {
      if (lang === 'gl') return '⭐ Gaña puntos JREDITION: explora o catálogo (+10), fala co asistente (+5), comparte (+20). Alcanza 500 pts para desbloquear a insignia "Mestre"!';
      if (lang === 'en') return '⭐ Earn JREDITION points: browse the catalog (+10), talk with the assistant (+5), share (+20). Reach 500 pts to unlock the "Master" badge!';
      return '⭐ Gana puntos JREDITION: explora el catálogo (+10), habla con el asistente (+5), comparte (+20). ¡Alcanza 500 pts para desbloquear la insignia "Maestro"!';
    },
  },
  {
    pattern: /contacto|contact|email/i,
    response: () => '📬 Contáctanos: xg@xadrezgalego.net · +34 986 260 259 · C/Reiseñor, 15, 36205 Vigo. Web: xadrezgalego.net',
  },
  {
    pattern: /hola|ola|hello|hi|buenas|saludos/i,
    response: (lang) => {
      if (lang === 'gl') return '👋 Ola! Son o Editor Gran Mestre de JREDITION. Pregúntame sobre edición de ajedrez: presupostos, maquetación, impresión, loxística, distribución... ou sobre os nosos libros e proxecto educativo. En que podo axudarche?';
      if (lang === 'en') return '👋 Hello! I am the Grandmaster Editor of JREDITION. Ask me about chess publishing: budgeting, layout, printing, logistics, distribution... or about our books and educational project. How can I help you?';
      return '👋 ¡Hola! Soy el Editor Gran Maestro de JREDITION. Pregúntame sobre edición de ajedrez: presupuestos, maquetación, impresión, logística, distribución... o sobre nuestros libros y proyecto educativo. ¿En qué puedo ayudarte?';
    },
  },
];

const fallback = (lang: Lang): string => {
  if (lang === 'gl') return '🎯 Non atopei información específica sobre iso. Pregúntame sobre:\n📊 **Edición editorial**: presupostos, maquetación, impresión, loxística, distribución, escalabilidade a outros deportes\n📚 **Catálogo**: libros por nivel, recomendacións, prezos\n🤖 **CiberXadrez**: IA + ajedrez\n🎓 **Proxecto educativo**: metodoloxía, graos\n✍️ **Autor**: Roberto Páramos\n⭐ **Gamificación**: puntos e insignias';
  if (lang === 'en') return '🎯 I couldn\'t find specific information about that. Ask me about:\n📊 **Publishing**: budgeting, layout, printing, logistics, distribution, scaling to other sports\n📚 **Catalog**: books by level, recommendations, prices\n🤖 **CyberChess**: AI + chess\n🎓 **Educational project**: methodology, grades\n✍️ **Author**: Roberto Páramos\n⭐ **Gamification**: points and badges';
  return '🎯 No encontré información específica sobre eso. Pregúntame sobre:\n📊 **Edición editorial**: presupuestos, maquetación, impresión, logística, distribución, escalabilidad a otros deportes\n📚 **Catálogo**: libros por nivel, recomendaciones, precios\n🤖 **CiberAjedrez**: IA + ajedrez\n🎓 **Proyecto educativo**: metodología, grados\n✍️ **Autor**: Roberto Páramos\n⭐ **Gamificación**: puntos e insignias';
};

const editorialDesign: KBEntry[] = [
  {
    pattern: /diseño editorial|editorial design|deseño editorial|fundamentos.*edición|concepto.*editorial/i,
    response: (lang) => {
      if (lang === 'gl') return '📐 Deseño editorial profesional: é a maquetación + proceso produtivo global. Metodoloxía: modelo conceptual → concepto editorial → estrutura editorial → retícula → composición → maquetación final. Tipos: libros, catálogos, revistas, folletos, periódicos. Dominamos desde a conceptualización ata a produción. En que fase necesitas axuda?';
      if (lang === 'en') return '📐 Professional editorial design: layout + global production process. Methodology: conceptual model → editorial concept → editorial structure → grid → composition → final layout. Types: books, catalogs, magazines, brochures, newspapers. We master from conceptualization to production. What phase do you need help with?';
      return '📐 Diseño editorial profesional: es la maquetación + proceso productivo global. Metodología: modelo conceptual → concepto editorial → estructura editorial → retícula → composición → maquetación final. Tipos: libros, catálogos, revistas, folletos, periódicos. Dominamos desde la conceptualización hasta la producción. ¿En qué fase necesitas ayuda?';
    },
  },
  {
    pattern: /formato.*libro|formato.*editorial|tamaño.*libro|paper.*size|tamaño.*papel|a4|a5|bolsillo|académico|comercial.*formato|format.*selection/i,
    response: (lang) => {
      if (lang === 'gl') return '📏 Selección de formatos:\n• **Bolsillo** (10×15 - 11×18 cm): económico, distribución masiva\n• **Comercial** (15×21 - 15×23 cm): estándar para narrativa\n• **Académico** (17×24 - 21×29,7 cm / A4): técnico e educativo\n• **Especiais**: 21×21 cm (infantís), 24×32 cm (arte), desplegables, troquelados\n• **Serie A (ISO 216)**: A0 → A1 → A2 → A3 → A4 (210×297) → A5 (148×210) → A6\n  Que formato se adapta mellor ao teu proxecto?';
      if (lang === 'en') return '📏 Format selection:\n• **Pocket** (4×6 - 4.3×7 in): economical, mass distribution\n• **Trade** (5.9×8.3 - 5.9×9 in): standard for fiction\n• **Academic** (6.7×9.4 - 8.3×11.7 in / A4): technical and educational\n• **Special**: 8.3×8.3 in (children), 9.4×12.6 in (art), fold-outs, die-cuts\n• **A Series (ISO 216)**: A0 → A1 → A2 → A3 → A4 (8.3×11.7) → A5 (5.8×8.3) → A6\n  Which format best suits your project?';
      return '📏 Selección de formatos:\n• **Bolsillo** (10×15 - 11×18 cm): económico, distribución masiva\n• **Comercial** (15×21 - 15×23 cm): estándar para narrativa\n• **Académico** (17×24 - 21×29,7 cm / A4): técnico y educativo\n• **Especiales**: 21×21 cm (infantiles), 24×32 cm (arte), desplegables, troquelados\n• **Serie A (ISO 216)**: A0 → A1 → A2 → A3 → A4 (210×297) → A5 (148×210) → A6\n  ¿Qué formato se adapta mejor a tu proyecto?';
    },
  },
  {
    pattern: /tipografía|typography|fonte|font|typeface|serif|sans.*serif|helvetica|times|garamond|legibilidad|legibilidade|readability/i,
    response: (lang) => {
      if (lang === 'gl') return '🔤 Tipografía editorial:\n• **Serif (Romanas)**: Garamond, Times, Baskerville — ideais para texto continuo en papel\n• **Sans Serif**: Helvetica, Futura, Gill Sans — títulos e pantalla/dixital\n• **Lexibilidade**: corpo 10-12 pt para texto, interliñado 120-150%, liña 55-75 caracteres\n• **Xerarquía**: titulares 18-36 pt, subtítulos 14-18 pt, corpo 10-12 pt, notas 8-9 pt\n• **Microtipografía**: kerning, tracking, ligaduras, viúvas, orfas, liñas colgantes\n  Unha boa elección tipográfica define a personalidade do libro. En que podo aconsellarte?';
      if (lang === 'en') return '🔤 Editorial typography:\n• **Serif (Roman)**: Garamond, Times, Baskerville — ideal for continuous text on paper\n• **Sans Serif**: Helvetica, Futura, Gill Sans — headings and screen/digital\n• **Readability**: body 10-12 pt for text, leading 120-150%, line length 55-75 characters\n• **Hierarchy**: headings 18-36 pt, subheadings 14-18 pt, body 10-12 pt, notes 8-9 pt\n• **Microtypography**: kerning, tracking, ligatures, widows, orphans, hanging lines\n  A good typeface choice defines the book\'s personality. What can I advise on?';
      return '🔤 Tipografía editorial:\n• **Serif (Romanas)**: Garamond, Times, Baskerville — ideales para texto continuo en papel\n• **Sans Serif**: Helvetica, Futura, Gill Sans — títulos y pantalla/digital\n• **Legibilidad**: cuerpo 10-12 pt para texto, interlineado 120-150%, línea 55-75 caracteres\n• **Jerarquía**: titulares 18-36 pt, subtítulos 14-18 pt, cuerpo 10-12 pt, notas 8-9 pt\n• **Microtipografía**: kerning, tracking, ligaduras, viudas, huérfanas, líneas colgantes\n  Una buena elección tipográfica define la personalidad del libro. ¿En qué puedo aconsejarte?';
    },
  },
  {
    pattern: /retícula|grid|columnas|margen|gutter|medianil|modular|maquetación.*páginas|page.*layout|composición.*editorial|proporción|sección.*áurea|golden.*ratio|simetría|asimetría|mancha.*texto/i,
    response: (lang) => {
      if (lang === 'gl') return '📐 Composición e retículas:\n• **Retícula modular**: 1-6 columnas segundo formato, medianil (gutter) e marxes coherentes\n• **Proporcións**: sección áurea 1:1.618, raíz cadrada de 2 (formato DIN), regra dos terzos\n• **Marxes harmónicas**: relación 2:3:4:5 (superior:interior:exterior:inferior)\n• **Cálculo gutter**: <60 páx = 0.5 in; 61-150 = 0.625 in; 151-400 = 1.0 in; 401-600 = 1.125 in\n• **Equilibrio**: simetría (formal, clásico) vs asimetría (dinámico, moderno)\n  A retícula é a columna vertebral do libro. Necesitas axuda coa túa maquetación?';
      if (lang === 'en') return '📐 Composition and grids:\n• **Modular grid**: 1-6 columns per format, consistent gutter and margins\n• **Proportions**: golden ratio 1:1.618, square root of 2 (DIN format), rule of thirds\n• **Harmonic margins**: ratio 2:3:4:5 (top:inside:outside:bottom)\n• **Gutter calculation**: <60 pp = 0.5 in; 61-150 = 0.625 in; 151-400 = 1.0 in; 401-600 = 1.125 in\n• **Balance**: symmetry (formal, classic) vs asymmetry (dynamic, modern)\n  The grid is the backbone of the book. Need help with your layout?';
      return '📐 Composición y retículas:\n• **Retícula modular**: 1-6 columnas según formato, medianil (gutter) y márgenes coherentes\n• **Proporciones**: sección áurea 1:1.618, raíz cuadrada de 2 (formato DIN), regla de los tercios\n• **Márgenes armónicos**: relación 2:3:4:5 (superior:interior:exterior:inferior)\n• **Cálculo gutter**: <60 pág = 0.5 in; 61-150 = 0.625 in; 151-400 = 1.0 in; 401-600 = 1.125 in\n• **Equilibrio**: simetría (formal, clásico) vs asimetría (dinámico, moderno)\n  La retícula es la columna vertebral del libro. ¿Necesitas ayuda con tu maquetación?';
    },
  },
  {
    pattern: /estructura.*libro|book.*structure|cubierta|cover|portada|lomo|spine|portadilla|portada.*interior|página.*legal|copyright.*page|tripa|preliminares|prologo|apéndice|anexo|colofón|guardas|endpapers|flyleaf/i,
    response: (lang) => {
      if (lang === 'gl') return '📖 Estrutura completa do libro:\n• **Cubierta**: portada (título, autor, editorial), lomo (cálculo exacto: páx × grosor papel), contracuberta (sinopse, código barras, ISBN)\n• **Guardas**: unen cubierta e tripa (especiais en tapa dura)\n• **Portadilla**: primeira páxina impresa\n• **Portada interior**: título completo, subtítulo, autor, editorial\n• **Páxina legal**: copyright, ISBN, DL, imprenta, créditos\n• **Preliminares**: prólogo, introdución\n• **Texto principal**: corpo da obra\n• **Finales**: apéndices, índices, bibliografía, colofón\n  Coñecer a estrutura é clave para unha maquetación profesional.';
      if (lang === 'en') return '📖 Complete book structure:\n• **Cover**: front (title, author, publisher), spine (exact calc: pages × paper thickness), back (synopsis, barcode, ISBN)\n• **Endpapers**: join cover and text block (special on hardcover)\n• **Half title**: first printed page\n• **Title page**: full title, subtitle, author, publisher\n• **Copyright page**: copyright, ISBN, legal deposit, printer, credits\n• **Front matter**: foreword, introduction\n• **Body text**: main work\n• **Back matter**: appendices, indexes, bibliography, colophon\n  Knowing the structure is key to professional layout.';
      return '📖 Estructura completa del libro:\n• **Cubierta**: portada (título, autor, editorial), lomo (cálculo exacto: págs × grosor papel), contracubierta (sinopsis, código barras, ISBN)\n• **Guardas**: unen cubierta y tripa (especiales en tapa dura)\n• **Portadilla**: primera página impresa\n• **Portada interior**: título completo, subtítulo, autor, editorial\n• **Página legal**: copyright, ISBN, DL, imprenta, créditos\n• **Preliminares**: prólogo, introducción\n• **Texto principal**: cuerpo de la obra\n• **Finales**: apéndices, índices, bibliografía, colofón\n  Conocer la estructura es clave para una maquetación profesional.';
    },
  },
  {
    pattern: /publicación.*moderna|modern.*publishing|pod.*vs.*offset|offset.*vs.*pod|tiraje.*económico|300.*copias|break.*even|punto.*equilibrio.*impresión/i,
    response: (lang) => {
      if (lang === 'gl') return '📊 Publicación moderna 2025-2026:\n• **POD vs offset**: POD rendibiliza ata ~300 copias; offset (mellor custo unitario) desde 500\n• **Amazon KDP**: 60% marxe papel, 70% ebook ($2.99-$9.99)\n• **Cálculo lomo KDP**: papel branco = páx × 0.002252 in; crema = páx × 0.0025 in\n• **Plataformas**: KDP, IngramSpark, Lulu, Draft2Digital — cada unha ten cálculos de lomo diferentes\n• **Resolución**: 300 DPI, modo CMYK para impresión\n• **Arquivos**: PDF páxina simple (non spreads), fontes incrustadas\n  Cal é o teu volume de tiraxe? Axúdoche a elixir a opción máis rendible.';
      if (lang === 'en') return '📊 Modern publishing 2025-2026:\n• **POD vs offset**: POD is profitable up to ~300 copies; offset (better unit cost) from 500\n• **Amazon KDP**: 60% margin print, 70% ebook ($2.99-$9.99)\n• **Spine calculation KDP**: white paper = pp × 0.002252 in; cream = pp × 0.0025 in\n• **Platforms**: KDP, IngramSpark, Lulu, Draft2Digital — each has different spine calculations\n• **Resolution**: 300 DPI, CMYK mode for print\n• **Files**: single-page PDF (not spreads), embedded fonts\n  What is your print run volume? I\'ll help you choose the most profitable option.';
      return '📊 Publicación moderna 2025-2026:\n• **POD vs offset**: POD rentabiliza hasta ~300 copias; offset (mejor coste unitario) desde 500\n• **Amazon KDP**: 60% margen papel, 70% ebook ($2.99-$9.99)\n• **Cálculo lomo KDP**: papel blanco = págs × 0.002252 in; crema = págs × 0.0025 in\n• **Plataformas**: KDP, IngramSpark, Lulu, Draft2Digital — cada una tiene cálculos de lomo diferentes\n• **Resolución**: 300 DPI, modo CMYK para impresión\n• **Archivos**: PDF página simple (no spreads), fuentes incrustadas\n  ¿Cuál es tu volumen de tiraje? Te ayudo a elegir la opción más rentable.';
    },
  },
  {
    pattern: /epub|ebook|libro.*electrónico|digital.*book|reflowable|epub.*3|kindle|mobi|apple.*books|kobo/i,
    response: (lang) => {
      if (lang === 'gl') return '📱 EPUB e publicación dixital:\n• **Estratexia EPUB primeiro**: construír EPUB 3.0 (reflowable) antes que PDF\n• **Navegación**: usar H1/H2 correctos para TOC navegable\n• **Cubierta**: 2560×3840 px, formato sRGB\n• **Apple Books** é a plataforma máis esixente — debe pasar EpubCheck\n• **Non incluir**: números de páxina, encabezados, notas ao pé fixas\n• **Distribución**: Amazon (converte EPUB a KFX), Apple Books, Kobo, Google Play\n  O EPUB é o futuro. Queres publicar o teu libro en formato dixital?';
      if (lang === 'en') return '📱 EPUB and digital publishing:\n• **EPUB-first strategy**: build EPUB 3.0 (reflowable) before PDF\n• **Navigation**: use proper H1/H2 for navigable TOC\n• **Cover**: 2560×3840 px, sRGB format\n• **Apple Books** is the pickiest — must pass EpubCheck\n• **Don\'t include**: page numbers, running heads, fixed footnotes\n• **Distribution**: Amazon (converts EPUB to KFX), Apple Books, Kobo, Google Play\n  EPUB is the future. Want to publish your book digitally?';
      return '📱 EPUB y publicación digital:\n• **Estrategia EPUB primero**: construir EPUB 3.0 (reflowable) antes que PDF\n• **Navegación**: usar H1/H2 correctos para TOC navegable\n• **Cubierta**: 2560×3840 px, formato sRGB\n• **Apple Books** es la plataforma más exigente — debe pasar EpubCheck\n• **No incluir**: números de página, encabezados, notas al pie fijas\n• **Distribución**: Amazon (convierte EPUB a KFX), Apple Books, Kobo, Google Play\n  El EPUB es el futuro. ¿Quieres publicar tu libro en formato digital?';
    },
  },
  {
    pattern: /metadatos|metadata|bisac|categoría.*libro|descripción.*libro|palabras.*clave|seo.*libro|keywords.*book|book.*description|taxonomía/i,
    response: (lang) => {
      if (lang === 'gl') return '🏷️ Metadatos para libros:\n• **Campos crave**: título exacto, subtítulo, ISBN propio por formato, categorías BISAC\n• **Consistencia**: mesmos metadatos en TODAS as plataformas (Amazon, Ingram, Google Books)\n• **Descrición**: 150-250 palabras con palabras clave, beneficios, público obxectivo\n• **Palabras clave**: 5-7 termos específicos (ex: "ajedrez escolar", "aperturas para niños")\n• **Impacto**: bos metadatos = mellor posicionamento en buscadores e Amazon\n  Uns metadatos pobres fan que o libro sexa invisible. Revisámoschos?';
      if (lang === 'en') return '🏷️ Book metadata:\n• **Key fields**: exact title, subtitle, unique ISBN per format, BISAC categories\n• **Consistency**: same metadata on ALL platforms (Amazon, Ingram, Google Books)\n• **Description**: 150-250 words with keywords, benefits, target audience\n• **Keywords**: 5-7 specific terms (e.g., "school chess", "openings for kids")\n• **Impact**: good metadata = better search ranking on Amazon and Google\n  Poor metadata makes your book invisible. Shall we review yours?';
      return '🏷️ Metadatos para libros:\n• **Campos clave**: título exacto, subtítulo, ISBN propio por formato, categorías BISAC\n• **Consistencia**: mismos metadatos en TODAS las plataformas (Amazon, Ingram, Google Books)\n• **Descripción**: 150-250 palabras con palabras clave, beneficios, público objetivo\n• **Palabras clave**: 5-7 términos específicos (ej: "ajedrez escolar", "aperturas para niños")\n• **Impacto**: buenos metadatos = mejor posicionamiento en buscadores y Amazon\n  Unos metadatos pobres hacen que el libro sea invisible. ¿Los revisamos?';
    },
  },
  {
    pattern: /híbrido|hybrid.*publishing|editorial.*híbrida|asisted.*publishing|asisted.*publish|partnership.*publishing/i,
    response: (lang) => {
      if (lang === 'gl') return '📚 Edición híbrida (2025-2026):\n• **Modelo**: o autor paga pero a editorial pon o seu nome e di ser a editora\n• **Custos**: moi variables (4 cifras baixas a 6 cifras). Típico ~25.000€ con tiraxe\n• **Advertencia**: Jane Friedman advirte que é "difícil obter beneficio só coas vendas"\n• **Novo modelo**: editoriais tradicionais que asocian con autores de éxito en autoedición — máis regalías, o autor retén dereitos\n• **Autoedición vs híbrido**: moitas veces a autoedición dá máis control e marxe\n  En JREDITION ofrecemos packs de autoedición transparentes (1.500€ - 9.000€) sen labirintos híbridos.';
      if (lang === 'en') return '📚 Hybrid publishing (2025-2026):\n• **Model**: author pays but publisher puts its name on the book\n• **Costs**: highly variable (low 4-figures to 6-figures). Typical ~$25,000 with print run\n• **Warning**: Jane Friedman warns it\'s "challenging to earn a profit from book sales alone"\n• **New model**: traditional publishers partnering with successful self-published authors — higher royalties, author retains rights\n• **Self vs hybrid**: self-publishing often gives more control and margin\n  At JREDITION we offer transparent self-publishing packs (€1,500 - €9,000) with no hybrid labyrinths.';
      return '📚 Edición híbrida (2025-2026):\n• **Modelo**: el autor paga pero la editorial pone su nombre y dice ser la editora\n• **Costes**: muy variables (4 cifras bajas a 6 cifras). Típico ~25.000€ con tiraje\n• **Advertencia**: Jane Friedman advierte que es "difícil obtener beneficio solo con las ventas"\n• **Nuevo modelo**: editoriales tradicionales que asocian con autores de éxito en autoedición — más regalías, el autor retiene derechos\n• **Autoedición vs híbrido**: muchas veces la autoedición da más control y margen\n  En JREDITION ofrecemos packs de autoedición transparentes (1.500€ - 9.000€) sin laberintos híbridos.';
    },
  },
  {
    pattern: /color.*management|gestión.*color|cmyk|srgb|rich.*black|negro.*intenso|tac|total.*area.*coverage|perfil.*color|color.*profile/i,
    response: (lang) => {
      if (lang === 'gl') return '🎨 Xestión de cor editorial:\n• **sRGB IEC61966-2.1**: recomendar para proxectos novos — impresoras modernas mápanos con precisión\n• **CMYK**: usar para impresión. Converter só unha vez para evitar erros de redondeo\n• **Negro intenso (rich black)**: C:40, M:30, Y:30, K:100 — para áreas grandes en cubertas\n• **Texto corpo**: 100% negro só (K:100)\n• **TAC máximo**: 270% (Total Area Coverage) para evitar acumulación de tinta\n• **Imaxes B/N**: escala de grises, gamma 2.2-2.4\n  Unha boa xestión de cor separa un libro profesional dun afeccionado.';
      if (lang === 'en') return '🎨 Color management for publishing:\n• **sRGB IEC61966-2.1**: recommend for new projects — modern printers map it accurately\n• **CMYK**: use for print. Convert only once to avoid rounding errors\n• **Rich black**: C:40, M:30, Y:30, K:100 — for large cover areas\n• **Body text**: 100% black only (K:100)\n• **Max TAC**: 270% (Total Area Coverage) to avoid ink pooling\n• **B&W images**: grayscale, gamma 2.2-2.4\n  Good color management separates a professional book from an amateur one.';
      return '🎨 Gestión de color editorial:\n• **sRGB IEC61966-2.1**: recomendar para proyectos nuevos — impresoras modernas lo mapean con precisión\n• **CMYK**: usar para impresión. Convertir solo una vez para evitar errores de redondeo\n• **Negro intenso (rich black)**: C:40, M:30, Y:30, K:100 — para áreas grandes en cubiertas\n• **Texto cuerpo**: 100% negro solo (K:100)\n• **TAC máximo**: 270% (Total Area Coverage) para evitar acumulación de tinta\n• **Imágenes B/N**: escala de grises, gamma 2.2-2.4\n  Una buena gestión de color separa un libro profesional de uno amateur.';
    },
  },
  {
    pattern: /regla.*2.*pruebas|two.*proof.*rule|proof.*copy|prueba.*copia|copia.*prueba|revisión.*impresión|print.*proof/i,
    response: (lang) => {
      if (lang === 'gl') return '✅ Regra das 2 probas: "Pide polo menos 2 copias de proba se fas cambios tras a primeira proba. A primeira detecta erros. A segunda confirma que as correccións non introduciron novos problemas." — Sabedoría editorial esencial. Encárgoche as túas probas de imprenta?';
      if (lang === 'en') return '✅ The Two-Proof Rule: "Order at least two proof copies if you make changes after your first proof. The first catches problems. The second confirms your fixes didn\'t introduce new ones." — Essential publishing wisdom. Shall I order your print proofs?';
      return '✅ Regla de las 2 pruebas: "Pide al menos 2 copias de prueba si haces cambios tras la primera prueba. La primera detecta errores. La segunda confirma que las correcciones no introdujeron nuevos problemas." — Sabiduría editorial esencial. ¿Te encargo tus pruebas de imprenta?';
    },
  },
  {
    pattern: /plataforma.*pod|kdp|ingramspark|lulu|draft2digital|publicar.*amazon|autoedición.*amazon|amazon.*kdp|print.*on.*demand.*plataforma/i,
    response: (lang) => {
      if (lang === 'gl') return '🖨️ Plataformas POD comparativa:\n• **KDP (Amazon)**: maior alcance. Papel branco: páx × 0.002252 in; crema: páx × 0.0025 in\n• **IngramSpark**: distribución a librerías. Lomo: (páx / 444) + 0.06 in (papel 50#)\n• **Lulu**: bo para probas. Lomo: (páx / 444) + 0.06 in (papel 60#)\n• **Draft2Digital**: distribución ampla, formato amigable\n• ⚠ Cada plataforma calcula o lomo DIFERENTE. Usa a plantilla específica de cada unha.\n  En cal delas queres publicar?';
      if (lang === 'en') return '🖨️ POD platform comparison:\n• **KDP (Amazon)**: biggest reach. White paper: pp × 0.002252 in; cream: pp × 0.0025 in\n• **IngramSpark**: bookstore distribution. Spine: (pp / 444) + 0.06 in (50# paper)\n• **Lulu**: good for proofs. Spine: (pp / 444) + 0.06 in (60# paper)\n• **Draft2Digital**: wide distribution, easy format\n• ⚠ Each platform calculates spine DIFFERENTLY. Use each one\'s specific template.\n  Which one do you want to publish on?';
      return '🖨️ Plataformas POD comparativa:\n• **KDP (Amazon)**: mayor alcance. Papel blanco: págs × 0.002252 in; crema: págs × 0.0025 in\n• **IngramSpark**: distribución a librerías. Lomo: (págs / 444) + 0.06 in (papel 50#)\n• **Lulu**: bueno para pruebas. Lomo: (págs / 444) + 0.06 in (papel 60#)\n• **Draft2Digital**: distribución amplia, formato amigable\n• ⚠ Cada plataforma calcula el lomo DIFERENTE. Usa la plantilla específica de cada una.\n  ¿En cuál de ellas quieres publicar?';
    },
  },
];

const allEntries: KBEntry[] = [...persona, ...publishing, ...chess, ...editorialDesign];

export function getBotResponse(input: string, lang: Lang): string {
  const lower = input.toLowerCase();
  for (const entry of allEntries) {
    if (entry.pattern.test(lower)) return entry.response(lang);
  }
  return fallback(lang);
}
