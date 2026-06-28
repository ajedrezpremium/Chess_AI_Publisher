'use client';

import { useRef, type MouseEvent } from 'react';
import type { Product, Lang } from '@/types';
import { t } from '@/lib/i18n';

interface ProductCardProps {
  product: Product;
  lang: Lang;
  onOpenModal: (product: Product) => void;
}

function getBadge(product: Product): { text: string; type: string } | null {
  if ([1, 2].includes(product.id)) return { text: 'Más vendido', type: 'bestseller' };
  if ([17, 18, 19, 20].includes(product.id)) return { text: 'Novedad', type: 'new' };
  return null;
}

export default function ProductCard({ product, lang, onOpenModal }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const bgColors: Record<string, string> = {
    school: 'linear-gradient(135deg,#1a2a1a,#2a3a2a)',
    mastery: 'linear-gradient(135deg,#1a1a2a,#2a2a3a)',
    grandmaster: 'linear-gradient(135deg,#2a1a1a,#3a2a2a)',
    projects: 'linear-gradient(135deg,#1a2a2a,#2a3a3a)',
    math: 'linear-gradient(135deg,#2a1a2a,#3a2a3a)',
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--rx', `${y * -12}deg`);
    card.style.setProperty('--ry', `${x * 12}deg`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  const badge = getBadge(product);

  return (
    <div className="product-card tilt-card" ref={cardRef}
      onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
      onClick={() => onOpenModal(product)}>
      <div className="product-card-image" style={{ background: bgColors[product.cat] || bgColors.school }}>
        {badge && <span className={`product-badge badge-${badge.type}`}>{badge.type === 'bestseller' ? '⭐' : '🆕'} {badge.text}</span>}
        {product.image ? (
          <img src={product.image} alt={product.title[lang]} className="product-cover" />
        ) : (
          <span style={{ fontSize: '5rem', opacity: 0.3 }}>{product.emoji}</span>
        )}
        <span className={`level-badge level-${product.levelClass}`}>{product.level[lang]}</span>
      </div>
      <div className="product-card-body">
        <h3>{product.title[lang]}</h3>
        <div className="desc">{product.desc[lang]}</div>
      </div>
      <div className="product-card-footer">
        <span className="product-price">{product.price}</span>
        <span className="product-rating">★ {product.rating}</span>
        <span className="buy-btn" onClick={(e) => { e.stopPropagation(); window.open(product.amazon, '_blank'); }}>
          {t('product.details', lang)}
        </span>
      </div>
    </div>
  );
}
