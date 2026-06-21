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

const allEntries: KBEntry[] = [...persona, ...publishing, ...chess];

export function getBotResponse(input: string, lang: Lang): string {
  const lower = input.toLowerCase();
  for (const entry of allEntries) {
    if (entry.pattern.test(lower)) return entry.response(lang);
  }
  return fallback(lang);
}
