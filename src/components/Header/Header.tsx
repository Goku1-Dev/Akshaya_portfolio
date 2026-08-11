import { useEffect, useState } from 'react';
import { nav } from '../../data/content';
import './Header.scss';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(nav.links[0].href);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="home">
      <div className="site-header__bar container">
        <a
          className="site-header__cta-mobile-hide site-header__home"
          href="#home"
          onClick={() => handleLinkClick('#home')}
        >
          <span className="site-header__pill">Home</span>
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {nav.links.slice(1, -1).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeHref === link.href ? 'is-active' : ''}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* <a className="site-header__brand" href="#home" onClick={() => handleLinkClick('#home')}>
          <span className="site-header__brand-mark" aria-hidden="true">
            A
          </span>
          {nav.brand}
        </a> */}

        <a
          className="site-header__cta"
          href={nav.links[nav.links.length - 1].href}
          onClick={() => handleLinkClick(nav.links[nav.links.length - 1].href)}
        >
          {nav.links[nav.links.length - 1].label}
        </a>

        <button
          type="button"
          className={`site-header__burger ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`site-header__mobile ${isOpen ? 'is-open' : ''}`}>
        <ul>
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => handleLinkClick(link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
