import { FormEvent } from 'react';
import { footer, nav } from '../../data/content';
import './Footer.scss';

const socialIcons: Record<string, JSX.Element> = {
  facebook: (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <path d="M12.5 6.5H11c-.3 0-.5.2-.5.5v1.5H12.5l-.3 2H10.5V16H8v-5.5H6.5v-2H8V7.2C8 5.4 9 4 11 4h1.5v2.5z" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <path d="M17 5.5c-.5.25-1.1.4-1.7.5.6-.4 1.1-1 1.3-1.7-.6.35-1.2.6-1.9.75A2.9 2.9 0 0012.9 4c-1.6 0-2.9 1.4-2.9 3 0 .25.03.5.08.7-2.4-.1-4.6-1.3-6-3.1-.25.45-.4 1-.4 1.55 0 1 .5 1.9 1.3 2.45-.5 0-.9-.15-1.3-.35v.05c0 1.4 1 2.6 2.3 2.85-.25.07-.5.1-.75.1-.2 0-.35 0-.5-.05.35 1.15 1.4 2 2.7 2A5.8 5.8 0 013 14.5a8.2 8.2 0 004.4 1.3c5.3 0 8.2-4.4 8.2-8.2v-.35c.6-.4 1-.9 1.4-1.5z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="14" height="14" rx="4" />
      <circle cx="10" cy="10" r="3.2" />
      <circle cx="14.2" cy="5.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <rect x="3" y="8" width="3" height="9" />
      <circle cx="4.5" cy="4.7" r="1.7" />
      <path d="M9 8h2.8v1.3c.5-.8 1.5-1.5 2.9-1.5 2.3 0 3.3 1.5 3.3 4V17h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.7 1.2-1.7 2.4V17H9V8z" />
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <h2>
              {footer.title[0].text}
              <br />
              {footer.title[1].text}
            </h2>
          </div>
          <a className="btn-primary" href={footer.cta.href}>
            {footer.cta.label}
          </a>
        </div>

        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <a className="footer__brand" href="#home">
              <span className="footer__brand-mark" aria-hidden="true">
                3
              </span>
              {footer.brand}
            </a>
            <p>{footer.description}</p>
          </div>

          {footer.columns.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => {
                  // Look up the real href from nav.links so labels like
                  // "Projects" correctly resolve to #portfolio rather than
                  // a slugified-but-nonexistent #projects anchor.
                  const navMatch = nav.links.find((l) => l.label === link);
                  const href = navMatch ? navMatch.href : `#${link.toLowerCase().replace(/\s+/g, '-')}`;
                  return (
                    <li key={link}>
                      <a href={href}>{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          <div className="footer__col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:${footer.contact.phone.replace(/\s+/g, '')}`}>{footer.contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${footer.contact.email}`}>{footer.contact.email}</a>
              </li>
            </ul>
          </div>

          <div className="footer__col footer__col--newsletter">
            <h4>Get the latest information</h4>
            <form
              className="footer__form"
              onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
              aria-label="Subscribe to newsletter"
            >
              <label className="sr-only" htmlFor="footer-email">
                Email Address
              </label>
              <input id="footer-email" type="email" placeholder="Email Address" required />
              <button type="submit" aria-label="Subscribe">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{footer.copyright}</p>

          <div className="footer__social">
            {footer.social.map((key) => (
              <a key={key} href="#" aria-label={key}>
                {socialIcons[key]}
              </a>
            ))}
          </div>

          <div className="footer__legal">
            {footer.legal.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>

        <nav className="sr-only" aria-label="Footer">
          <ul>
            {nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
