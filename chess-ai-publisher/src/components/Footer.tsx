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
              <span>CHESS AI PUBLISHER</span>
            </div>
            <p>{t('footer.desc', lang)}</p>
          </div>
          <div className="footer-col">
            <h4>{t('footer.nav', lang)}</h4>
            <a href="#catalog">{t('footer.catalog', lang)}</a>
            <a href="#educational">{t('footer.educational', lang)}</a>
            <a href="#cyberchess">{t('footer.cyberchess', lang)}</a>
            <a href="#author">{t('footer.author', lang)}</a>
          </div>
          <div className="footer-col">
            <h4>{t('footer.products', lang)}</h4>
            <a href="https://amzn.to/3u2HTvR" target="_blank" rel="noopener">{t('footer.product1', lang)}</a>
            <a href="https://amzn.to/3cBY6Cq" target="_blank" rel="noopener">{t('footer.product2', lang)}</a>
            <a href="https://amzn.to/3u7mDoy" target="_blank" rel="noopener">{t('footer.product3', lang)}</a>
            <a href="https://amzn.to/3cyaqmY" target="_blank" rel="noopener">{t('footer.product4', lang)}</a>
          </div>
          <div className="footer-col">
            <h4>{t('footer.contact', lang)}</h4>
            <a href="mailto:xg@xadrezgalego.net">xg@xadrezgalego.net</a>
            <a href="tel:+34986260259">+34 986 260 259</a>
            <a href="https://www.xadrezgalego.net" target="_blank" rel="noopener">xadrezgalego.net</a>
            <div className="social-links">
              <a href="https://www.youtube.com/channel/UCLsGWfmBxDuuOCRLEkVLJPA" target="_blank" rel="noopener" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M23.5 6.2c-.3-1-1-1.7-2-2-1.8-.5-9-.5-9-.5s-7.2 0-9 .5c-1 .3-1.7 1-2 2-.5 1.8-.5 5.8-.5 5.8s0 4 .5 5.8c.3 1 1 1.7 2 2 1.8.5 9 .5 9 .5s7.2 0 9-.5c1-.3 1.7-1 2-2 .5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.5 15V9l6 3-6 3z"/></svg>
              </a>
              <a href="https://instagram.com/xadrez_galego" target="_blank" rel="noopener" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.7.6.7.3 1.3.7 1.9 1.3s1 1.2 1.3 1.9c.3.7.5 1.5.6 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.6 2.7-.3.7-.7 1.3-1.3 1.9s-1.2 1-1.9 1.3c-.7.3-1.5.5-2.7.6-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.7-.6-.7-.3-1.3-.7-1.9-1.3S2 20.5 1.7 19.8c-.3-.7-.5-1.5-.6-2.7-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-1.2.3-2 .6-2.7.3-.7.7-1.3 1.3-1.9S4.5 3.5 5.2 3.2c.7-.3 1.5-.5 2.7-.6 1.2-.1 1.6-.1 4.8-.1zM12 6.5c-3 0-5.5 2.5-5.5 5.5s2.5 5.5 5.5 5.5 5.5-2.5 5.5-5.5-2.5-5.5-5.5-5.5zm0 9c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.5-9.2c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3 1.3-.6 1.3-1.3-.6-1.3-1.3-1.3z"/></svg>
              </a>
              <a href="https://www.facebook.com/Xadrezgalego/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com/XadrezGalegoSL" target="_blank" rel="noopener" aria-label="Twitter X">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CHESS AI PUBLISHER · {t('footer.rights', lang)}</span>
          <span>{t('footer.made', lang)}</span>
        </div>
      </div>
    </footer>
  );
}
