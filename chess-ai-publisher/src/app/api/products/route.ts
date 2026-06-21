import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/lib/products';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'all';
  const id = searchParams.get('id');

  if (id) {
    const product = products.find(p => p.id === Number(id));
    if (!product) return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    return NextResponse.json(product);
  }

  if (category === 'all') return NextResponse.json(products);
  return NextResponse.json(products.filter(p => p.cat === category));
}
