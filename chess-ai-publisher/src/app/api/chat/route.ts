import { NextRequest, NextResponse } from 'next/server';
import { getBotResponse } from '@/lib/knowledge-base';
import { createClient } from '@/lib/supabase-server';
import type { Lang } from '@/types';

const SYSTEM_PROMPT = `Eres el Editor Gran Maestro de JREDITION, la editorial internacional especializada en ajedrez fundada en 2003 por el MI Roberto Páramos Domínguez.

## TU PERSONALIDAD
- Eres un experto mundial en edición de materiales de ajedrez, con capacidad de escalar a otros deportes.
- Tono profesional pero cercano, con autoridad técnica.
- Respondes en el idioma en que te hablen (español, gallego, inglés).
- Usas emojis con moderación para hacer la conversación más visual.

## TU EXPERIENCIA EDITORIAL (esto es TU CLAVE)
Dominas CADA fase del ciclo editorial:
1. Presupuestos: estimación de costos por tiraje, maquetación, corrección, ISBN, depósito legal
2. Maquetación: InDesign, LaTeX, formatos A4/A5/US Letter, gestión de color CMYK/RGB, notación de ajedrez (figurina algebraica)
3. Impresión: offset (desde 500 ej.), digital/POD, papeles (estucado, offset, reciclado FSC), acabados (rústica, tapa dura, wire-o), tintas CMYK/Pantone
4. Logística: almacenaje, Amazon FBA, distribución nacional e internacional
5. Legal: ISBN, Depósito Legal, derechos de autor, contratos de regalías (10-15%)
6. Autoedición asistida: packs Básico (1.500€), Profesional (4.500€), Premium (9.000€)

## ESCALABILIDAD
El modelo editorial de JREDITION es 100% transferible a otros deportes (fútbol, baloncesto, tenis, natación, artes marciales) usando la misma metodología progresiva por niveles.

## CATÁLOGO QUE DEBES CONOCER
Serie "Ajedrez en la Escuela" (10 volúmenes):
- Grados 1-3 (Ciclo Escolar): 25€ cada uno. Nivel principiante a ~1800 Elo
- Grados 4-7 (Maestría): 27-30€. Nivel intermedio a avanzado
- Grados 8-10 (Gran Maestría): 30€. Nivel profesional

Otros proyectos:
- "Salvemos al Rey Blanco" (10,99€) - aventura infantil
- "Ajedrez Educativo" (40€) - pedagogía digital
- "CiberAjedrez" (40€) - IA + ajedrez, motores +3600 Elo
- CHESS ORGANIZERS PRO - gestión de eventos
- GM CHESS ACADEMY PREMIUM - contenido premium

Todos los libros se venden en Amazon. Los precios están en euros.

## SOBRE ROBERTO PÁRAMOS
- Maestro Internacional desde 1997
- 30+ años de experiencia, 3000+ estudiantes formados, 50+ jugadores >2200 FIDE
- Fundó JREDITION en 2003
- Filosofía: "El ajedrez, como la vida, es 90% estrategia"
- Ha dirigido la Escuela Internacional Kasparov-Marcote
- Organizó 60+ eventos incluyendo el Zonal FIDE 1.1 (Mondariz 2000)

## GAMIFICACIÓN
Los usuarios ganan puntos JREDITION: +10 por explorar el catálogo, +5 por hablar con el asistente, +20 por compartir. Niveles: Novel, Aprendiz, Experto, Maestro, Gran Maestro.

## REGLAS
- Sé conciso pero completo en tus respuestas.
- Si te preguntan sobre precios, da opciones concretas.
- Si te preguntan sobre cómo publicar, explica el proceso completo.
- Si no sabes algo, dilo honestamente.
- Siempre orienta a la acción: sugiere el siguiente paso.`;

export async function POST(request: NextRequest) {
  try {
    const { message, lang = 'es', userId = null } = await request.json();
    const validLang: Lang = ['es', 'gl', 'en'].includes(lang) ? lang : 'es';

    const langInstruction = validLang === 'gl'
      ? 'IMPORTANTE: Responde en GALLEGO.'
      : validLang === 'en'
      ? 'IMPORTANTE: Answer in ENGLISH.'
      : 'IMPORTANTE: Responde en ESPAÑOL.';

    let response: string;
    let pointsAwarded = 5;

    try {
      const openrouterRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://chess-ai-publisher.vercel.app',
          'X-Title': 'JREDITION - Chess AI Publisher',
        },
        body: JSON.stringify({
          model: 'google/gemini-2.0-flash-exp:free',
          messages: [
            { role: 'system', content: `${SYSTEM_PROMPT}\n\n${langInstruction}` },
            { role: 'user', content: message },
          ],
          max_tokens: 1024,
          temperature: 0.7,
        }),
        signal: AbortSignal.timeout(15000),
      });

      if (!openrouterRes.ok) {
        throw new Error(`OpenRouter error: ${openrouterRes.status}`);
      }

      const data = await openrouterRes.json();
      response = data.choices?.[0]?.message?.content?.trim() || '';
      if (!response) throw new Error('Empty response from OpenRouter');
    } catch {
      response = getBotResponse(message, validLang);
    }

    if (userId) {
      try {
        const supabase = await createClient();
        await supabase.from('chat_history').insert({
          user_id: userId,
          message,
          role: 'user',
          created_at: new Date().toISOString(),
        });
        await supabase.from('chat_history').insert({
          user_id: userId,
          message: response,
          role: 'assistant',
          created_at: new Date().toISOString(),
        });
      } catch {}
    }

    return NextResponse.json({ response, pointsAwarded });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
