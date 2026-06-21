import { NextRequest, NextResponse } from 'next/server';
import { getBotResponse } from '@/lib/knowledge-base';
import type { Lang } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const { message, lang = 'es' } = await request.json();
    const validLang: Lang = ['es', 'gl', 'en'].includes(lang) ? lang : 'es';

    const response = getBotResponse(message, validLang);

    return NextResponse.json({
      response,
      pointsAwarded: 5,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
