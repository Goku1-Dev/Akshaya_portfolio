import { services } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import { useCarousel } from '../../hooks/useCarousel';
import { useResponsivePerView } from '../../hooks/useResponsivePerView';
import './Services.scss';

// UI/UX design icon
const iconUiUx = (
  <svg key="ui-ux" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="6" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 12h24" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
  </svg>
);

// Web / globe icon
const iconWeb = (
  <svg key="web" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M4 16h24M16 4c3.5 3.4 5.4 7.7 5.4 12S19.5 24.6 16 28c-3.5-3.4-5.4-7.7-5.4-12S12.5 7.4 16 4z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
  </svg>
);

// Landing / document icon
const iconLanding = (
  <svg key="landing" viewBox="0 0 32 32" fill="none">
    <rect x="5" y="4" width="22" height="24" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 11h14M9 16h9M9 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Mobile app icon
const iconMobile = (
  <svg key="mobile" viewBox="0 0 32 32" fill="none">
    <rect x="9" y="3" width="14" height="26" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M14 25h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Branding / palette icon
const iconBranding = (
  <svg key="branding" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 5c-6.6 0-12 5.4-12 12s5.4 11 9 11c1.7 0 2-1 2-2.2 0-1-.7-1.4-.7-2.4 0-1.4 1.2-2.4 2.7-2.4h2.6c4.6 0 8.4-3.7 8.4-8.3C28 9.2 22.6 5 16 5z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="11" cy="14" r="1.4" fill="currentColor" />
    <circle cx="16" cy="10" r="1.4" fill="currentColor" />
    <circle cx="21" cy="14" r="1.4" fill="currentColor" />
  </svg>
);

// Testing / bug icon
const iconTesting = (
  <svg key="testing" viewBox="0 0 32 32" fill="none">
    <rect x="11" y="10" width="10" height="14" rx="4" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M11 14H6M11 18H6M11 22H6M21 14h5M21 18h5M21 22h5M13 10c0-1.7 1.3-3 3-3s3 1.3 3 3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Consulting / lightbulb icon (fallback)
const iconDefault = (
  <svg key="default" viewBox="0 0 32 32" fill="none">
    <path
      d="M16 4a9 9 0 0 0-5 16.5c.8.5 1.3 1.4 1.3 2.3V24h7.4v-1.2c0-.9.5-1.8 1.3-2.3A9 9 0 0 0 16 4z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path d="M12.5 27.5h7M13.5 30h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/**
 * Picks an icon based on keywords found in the service's tag/title,
 * so each card's icon matches what the service actually is instead of
 * cycling through a fixed array by index.
 */
function getIconForService(tag: string, title: string) {
  const text = `${tag} ${title}`.toLowerCase();

  if (text.includes('ui') || text.includes('ux') || text.includes('design')) return iconUiUx;
  if (text.includes('mobile') || text.includes('app')) return iconMobile;
  if (text.includes('landing') || text.includes('page')) return iconLanding;
  if (text.includes('brand') || text.includes('logo') || text.includes('identity')) return iconBranding;
  if (text.includes('test') || text.includes('qa') || text.includes('bug')) return iconTesting;
  if (text.includes('web') || text.includes('site') || text.includes('development')) return iconWeb;

  return iconDefault;
}

export default function Services() {
  const headingRef = useReveal<HTMLDivElement>();
  const perView = useResponsivePerView([[1024, 3], [640, 2], [0, 1]], 1);
  const { page, pageCount, goTo, handlers, isDragging, dragOffsetPercent } = useCarousel({
    count: services.items.length,
    perView,
    autoplayMs: 5000,
  });

  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__panel">
        <div className="container">
          <div className="services__head reveal" ref={headingRef}>
            <div>
              <p className="eyebrow">{services.eyebrow}</p>
              <h2 id="services-title" className="services__title">
                <AccentText parts={services.title} />
              </h2>
            </div>
            <p className="services__desc">{services.description}</p>
          </div>

          <div
            className={`services__carousel${isDragging ? ' is-dragging' : ''}`}
            {...handlers}
          >
            <div
              className="services__track"
              style={{
                transform: `translateX(calc(-${page * 100}% + ${dragOffsetPercent}%))`,
                transition: isDragging ? 'none' : undefined,
              }}
            >
              {Array.from({ length: pageCount }).map((_, pageIndex) => (
                <div className="services__page" key={pageIndex}>
                  {services.items
                    .slice(pageIndex * perView, pageIndex * perView + perView)
                    .map((item) => (
                      <article className="services__card" key={item.title}>
                        <div className="services__icon">{getIconForService(item.tag, item.title)}</div>
                        <div className="services__tags">
                          <span className="services__tag">{item.tag}</span>
                          <span className="services__tag services__tag--exposure">{item.exposureLevel}</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <a className="services__link" href="#contact" aria-label={`Learn more about ${item.title}`}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </article>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="services__dots" role="tablist" aria-label="Services slides">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={page === i}
                aria-label={`Show slide ${i + 1}`}
                className={page === i ? 'is-active' : ''}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}