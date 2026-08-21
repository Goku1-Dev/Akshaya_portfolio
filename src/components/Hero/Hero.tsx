import { hero } from '../../data/content';
import AccentText from '../AccentText';
import JennyPortrait from '../illustrations/JennyPortrait';
import { useReveal } from '../../hooks/useReveal';
import './Hero.scss';

export default function Hero() {
  const titleRef = useReveal<HTMLHeadingElement>();
  const asideRef = useReveal<HTMLDivElement>();
  const portraitRef = useReveal<HTMLDivElement>();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container container">
        <div className="hero__badge reveal is-visible">
          <span className="hero__wave" aria-hidden="true">
            👋
          </span>
          {hero.greeting}
        </div>

        <h1 id="hero-title" className="hero__title reveal" ref={titleRef}>
          <AccentText parts={hero.title} />
          <br />
          {hero.subtitle}
        </h1>

        <div className="hero__portrait-wrap reveal" ref={portraitRef}>
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="hero__portrait">
            <JennyPortrait />
          </div>

          <div className="hero__aside hero__aside--left reveal" ref={asideRef}>
            <span className="hero__quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <p>{hero.quote}</p>
          </div>

          <div className="hero__aside hero__aside--right">
            {/* Honest status badge — replaces the old star-rating +
                "X years experience" block, which overstated her status. */}
            <p className="hero__years">
              <strong>{hero.statusBadge.value}</strong>
              <span>{hero.statusBadge.label}</span>
            </p>
          </div>

          <div className="hero__cta-group">
            <a className="btn-primary" href={hero.ctaPrimary.href}>
              {hero.ctaPrimary.label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn-outline" href={hero.ctaSecondary.href}>
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
