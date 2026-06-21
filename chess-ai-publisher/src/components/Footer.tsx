'use client';

import { t, type Lang } from '@/lib/i18n';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">♚</div>
              <span>JREDITION</span>
            </div>
            <p>{t('footer.desc', lang)}</p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.nav', lang)}</h4>
            <a href="#catalog">{t('footer.catalog', lang)}</a>
            <a href="#educational">{t('footer.educational', lang)}</a>
            <a href="#cyberchess">CiberAjedrez</a>
            <a href="#author">{t('footer.author', lang)}</a>
          </div>
          <div className="footer-col">
            <h4>{t('footer.products', lang)}</h4>
            <a href="https://amzn.to/3u2HTvR" target="_blank" rel="noopener">Ajedrez 1er Grado</a>
            <a href="https://amzn.to/3cBY6Cq" target="_blank" rel="noopener">Ajedrez 2º Grado</a>
            <a href="https://amzn.to/3u7mDoy" target="_blank" rel="noopener">Ajedrez 3er Grado</a>
            <a href="https://amzn.to/3cyaqmY" target="_blank" rel="noopener">Ajedrez 4º Grado</a>
          </div>
          <div className="footer-col">
            <h4>{t('footer.contact', lang)}</h4>
            <a href="mailto:xg@xadrezgalego.net">xg@xadrezgalego.net</a>
            <a href="tel:+34986260259">+34 986 260 259</a>
            <a href="https://www.xadrezgalego.net" target="_blank" rel="noopener">xadrezgalego.net</a>
            <div className="social-links">
              <a href="https://www.youtube.com/channel/UCLsGWfmBxDuuOCRLEkVLJPA" target="_blank" rel="noopener" aria-label="YouTube">YT</a>
              <a href="https://instagram.com/xadrez_galego" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
              <a href="https://www.facebook.com/Xadrezgalego/" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
              <a href="https://twitter.com/XadrezGalegoSL" target="_blank" rel="noopener" aria-label="Twitter">X</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 JREDITION · {t('footer.rights', lang)}</span>
          <span>{t('footer.made', lang)}</span>
        </div>
      </div>
    </footer>
  );
}
