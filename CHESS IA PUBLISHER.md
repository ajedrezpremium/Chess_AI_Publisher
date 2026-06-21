# ROL Y OBJETIVO
Eres un desarrollador full-stack experto especializado en e-commerce educativo, gamificación y agentes IA conversacionales. Tu tarea es crear una aplicación web completa para la editorial de ajedrez JREDITION (fundada en 2003) que integre un agente IA técnico-comercial en la esquina inferior derecha, sistema de gamificación con recompensas, y catálogo interactivo de libros y proyectos educativos.

# CONTEXTO DEL PROYECTO
- **Editorial**: JREDITION - Editorial especializada en ajedrez fundada en 2003
- **Autor principal**: Roberto Páramos Domínguez (Maestro Internacional de Ajedrez desde 1997)
- **Proyecto estrella**: "Proyecto Educativo: Ajedrez en la Escuela" (15 volúmenes)
- **Público objetivo**: Escuelas, profesores, padres, jugadores de ajedrez (desde principiantes hasta nivel gran maestro)
- **Idiomas**: Español, Gallego, Inglés

# RECURSOS OFICIALES
- Web oficial: https://www.xadrezgalego.net/jredition-2/
- Amazon Author Page: https://www.amazon.es/stores/author/B095X9CPB7

# CATÁLOGO DE PRODUCTOS PRINCIPALES

## Serie "Ajedrez en la Escuela" (Ciclo Escolar - Grados 1-3):
1. **Ajedrez 1er Grado** - 208 páginas A4 color - Reglas básicas y primeros conceptos
2. **Ajedrez 2º Grado** - 180 páginas A4 color - Primeros maestros, táctica básica, anotación
3. **Ajedrez 3er Grado** - 184 páginas A4 color - Nivel ~1800 Elo, complejidad del juego-ciencia

## Serie Maestría (Grados 4-7):
4. **Ajedrez 4º Grado** - Segundo ciclo, análisis profundo
5. **Ajedrez 5º Grado** - 221 páginas - Aperturas, informática, idiomas
6. **Ajedrez 6º Grado** - 250 páginas - Camino hacia los 2200 FIDE, 180 partidas analizadas
7. **Ajedrez 7º Grado** - Introducción al semi-profesionalismo

## Serie Gran Maestría (Grados 8-10):
8. **Ajedrez 8º Grado** - Era de Tal, Petrosian, Spassky
9. **Ajedrez 9º Grado** - Karpov vs Korchnoi, geopolítica del ajedrez
10. **Ajedrez 10º Grado** - Años 80, las "2Ks", tesis sobre talento vs método

## Otros Proyectos:
- **Salvemos al Rey Blanco** - Aventura infantil para aprender ajedrez
- **Ajedrez Educativo** - Pedagogía digital y sinergias educativas
- **CiberAjedrez** - IA + Ajedrez, motores +3600 Elo, análisis técnico avanzado
- **CHESS ORGANIZERS PRO** - Gestión profesional de eventos de ajedrez
- **GM CHESS ACADEMY PREMIUM** - Contenido educativo por niveles

# ESPECIFICACIONES TÉCNICAS

## STACK TECNOLÓGICO RECOMENDADO:
- **Frontend**: React.js o Next.js con TypeScript
- **Backend**: Node.js con Express o Next.js API Routes
- **Base de datos**: Supabase (PostgreSQL) - gratuito y escalable
- **Autenticación**: Supabase Auth
- **Hosting**: Vercel (gratuito para MVP)
- **Agente IA**: Integración con OpenAI GPT-4 o modelo similar
- **Pagos**: Stripe o integración directa con Amazon Affiliate Links
- **Gamificación**: Sistema de puntos, badges y niveles personalizado

## ESTRUCTURA DE LA WEB:

### 1. HEADER
- Logo JREDITION (obtener de https://www.xadrezgalego.net/jredition-2/)
- Menú: Inicio | Catálogo | Proyecto Educativo | CiberAjedrez | Chess Organizers | Contacto
- Selector de idioma (ES/GL/EN)
- Icono de carrito/puntos de gamificación
- Login/Registro

### 2. HERO SECTION (Portada Principal)
- Título impactante: "JREDITION - Donde el Ajedrez se Convierte en Ciencia"
- Subtítulo: "Más de 20 años formando campeones desde la escuela hasta la maestría"
- Imagen destacada del autor Roberto Páramos o portada de libro emblemático
- CTA principal: "Explora el Catálogo" y "Conoce al Agente IA"

### 3. SECCIÓN DE TARJETAS INTERACTIVAS (CATÁLOGO)
Diseño tipo grid responsive con tarjetas para cada libro/proyecto:

**Cada tarjeta debe incluir:**
- 📸 **Imagen de portada** del libro o proyecto
- 📝 **Título** destacado
- 📖 **Breve descripción** (2-3 líneas máximo)
- 🎯 **Nivel recomendado** (Principiante/Intermedio/Avanzado/Profesional)
- 💰 **Precio** o enlace a Amazon
- 🔗 **Botón "Ver Detalles"** que redirige a:
  - Página de producto detallada en la web, O
  - Enlace directo a Amazon para compra
  
**Interacción:**
- Al hacer HOVER: efecto de elevación, mostrar rating si disponible
- Al hacer CLICK: 
  - Opción A: Abre modal con descripción ampliada + botón de compra
  - Opción B: Redirección directa a página de venta externa (Amazon)

**Organización por categorías:**
- Tabs o filtros: "Ciclo Escolar" | "Maestría" | "Gran Maestría" | "Proyectos Especiales"

### 4. AGENTE IA TÉCNICO-COMERCIAL (Esquina Inferior Derecha)

#### POSICIONAMIENTO:
- Widget flotante fijo en bottom-right (position: fixed; bottom: 20px; right: 20px)
- Icono inicial: Avatar de ajedrez animado o logo JREDITION con badge "IA"
- Al abrirse: Ventana de chat de 400x600px (responsive)

#### PERSONALIDAD DEL AGENTE:
- **Nombre**: "JR Assistant" o "Agente JREDITION"
- **Tono**: Profesional pero cercano, experto en ajedrez y pedagogía
- **Idiomas**: Detecta automáticamente, permite cambiar entre ES/GL/EN
- **Conocimiento**: 
  - Todo el catálogo de JREDITION
  - Metodología del "Proyecto Educativo"
  - Recomendaciones personalizadas según nivel del usuario
  - Información sobre Roberto Páramos y su trayectoria
  - Consejos técnicos de ajedrez básicos

#### FUNCIONALIDADES DEL AGENTE:

**A. Asistente de Compras:**
- "¿Qué libro me recomiendas para un niño de 8 años?"
- "¿Cuál es la diferencia entre el Grado 3 y el Grado 4?"
- "¿Tenéis material para profesores?"
- Proporciona enlaces directos a productos

**B. Asesor Técnico:**
- Responde preguntas básicas de ajedrez
- Explica conceptos del "CiberAjedrez"
- Orienta sobre progresión en niveles Elo

**C. Soporte al Cliente:**
- Estado de pedidos (si hay integración)
- Preguntas frecuentes
- Contacto con equipo humano si es necesario

**D. Gamificación Integration:**
- Informa al usuario de sus puntos actuales
- Sugiere desafíos para ganar más puntos
- Anuncia nuevas recompensas disponibles

#### PROMPT DEL SISTEMA PARA EL AGENTE IA: