'use client';

import type { Product, Lang } from '@/types';
import { t } from '@/lib/i18n';

interface ProductCardProps {
  product: Product;
  lang: Lang;
  onOpenModal: (product: Product) => void;
}

export default function ProductCard({ product, lang, onOpenModal }: ProductCardProps) {
  const bgColors: Record<string, string> = {
    school: 'linear-gradient(135deg,#1a2a1a,#2a3a2a)',
    mastery: 'linear-gradient(135deg,#1a1a2a,#2a2a3a)',
    grandmaster: 'linear-gradient(135deg,#2a1a1a,#3a2a2a)',
    projects: 'linear-gradient(135deg,#1a2a2a,#2a3a3a)',
    math: 'linear-gradient(135deg,#2a1a2a,#3a2a3a)',
  };

  return (
    <div className="product-card" onClick={() => onOpenModal(product)}>
      <div className="product-card-image" style={{ background: bgColors[product.cat] || bgColors.school }}>
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
