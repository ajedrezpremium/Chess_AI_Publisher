'use client';

import { useEffect } from 'react';
import type { Product, Lang } from '@/types';
import { t } from '@/lib/i18n';

interface ProductModalProps {
  product: Product;
  lang: Lang;
  onClose: () => void;
}

export default function ProductModal({ product, lang, onClose }: ProductModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="modal-overlay open" onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>
        <h2>{product.title[lang]}</h2>
        <div style={{ margin: '8px 0', color: 'var(--gold)', fontWeight: 600 }}>{product.level[lang]}</div>
        <div className="price">{product.price}</div>
        <div className="desc">{product.desc[lang]}</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <a className="buy-btn" href={product.amazon} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '1rem', padding: '12px 28px' }}>
            {t('product.buy', lang)}
          </a>
          {product.kindle && (
            <a className="buy-btn" href={product.kindle} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '1rem', padding: '12px 28px', background: 'var(--accent-blue)' }}>
              {t('product.kindle', lang)}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
