'use client';

import { useState } from 'react';
import type { Lang, Product } from '@/types';
import { products } from '@/lib/products';
import { t } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductModal from '@/components/ProductModal';

const filters = ['all', 'school', 'mastery', 'grandmaster', 'projects'] as const;
type Filter = typeof filters[number];

export default function CatalogPage() {
  const [lang, setLang] = useState<Lang>('es');
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeFilter === 'all' ? products : products.filter(p => p.cat === activeFilter);

  return (
    <>
      <Header lang={lang} points={0} onLangChange={setLang} onGamificationOpen={() => {}} />
      <main style={{ paddingTop: 100 }}>
        <div className="container">
          <div className="section-label">📖 {t('catalog.label', lang)}</div>
          <h2 className="section-title">{t('catalog.title', lang)}</h2>
          <p className="section-subtitle">{t('catalog.subtitle', lang)}</p>
          <div className="catalog-filters">
            {filters.map(f => (
              <button key={f} className={`filter-btn${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}>{t(`filter.${f}`, lang)}</button>
            ))}
          </div>
          <div className="products-grid">
            {filtered.map(p => (
              <ProductCard key={p.id} product={p} lang={lang} onOpenModal={setSelectedProduct} />
            ))}
          </div>
        </div>
      </main>
      <Footer lang={lang} />
      {selectedProduct && (
        <ProductModal product={selectedProduct} lang={lang} onClose={() => setSelectedProduct(null)} />
      )}
    </>
  );
}
