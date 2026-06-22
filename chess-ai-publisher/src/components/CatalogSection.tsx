'use client';

import { useState } from 'react';
import { t, type Lang } from '@/lib/i18n';
import { products } from '@/lib/products';
import type { Product } from '@/types';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

interface CatalogSectionProps {
  lang: Lang;
}

const filters = ['all', 'school', 'mastery', 'grandmaster', 'projects', 'math'] as const;
type Filter = typeof filters[number];

export default function CatalogSection({ lang }: CatalogSectionProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeFilter === 'all' ? products : products.filter(p => p.cat === activeFilter);

  return (
    <section id="catalog" className="section">
      <div className="container">
        <div className="section-label">📖 {t('catalog.label', lang)}</div>
        <h2 className="section-title">{t('catalog.title', lang)}</h2>
        <p className="section-subtitle">{t('catalog.subtitle', lang)}</p>

        <div className="catalog-filters">
          {filters.map(f => (
            <button key={f} className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}>
              {t(`filter.${f}`, lang)}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} lang={lang} onOpenModal={setSelectedProduct} />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} lang={lang} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
}
