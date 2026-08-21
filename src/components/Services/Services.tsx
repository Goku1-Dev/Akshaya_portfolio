import { services } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import { useCarousel } from '../../hooks/useCarousel';
import { useResponsivePerView } from '../../hooks/useResponsivePerView';
import './Services.scss';

const icons = [
  // UI/UX
  <svg key="a" viewBox="0 0 32 32" fill="none">
    <rect x="4" y="6" width="24" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 12h24" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
  </svg>,
  // Web
  <svg key="b" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 16h24M16 4c3.5 3.4 5.4 7.7 5.4 12S19.5 24.6 16 28c-3.5-3.4-5.4-7.7-5.4-12S12.5 7.4 16 4z" stroke="currentColor" strokeWidth="1.8" />
  </svg>,
  // Landing
  <svg key="c" viewBox="0 0 32 32" fill="none">
    <rect x="5" y="4" width="22" height="24" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M9 11h14M9 16h9M9 21h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>,
];

export default function Services() {
  const headingRef = useReveal<HTMLDivElement>();
  const perView = useResponsivePerView([[1024, 3], [640, 2], [0, 1]], 1);
  const { page, pageCount, goTo, handlers } = useCarousel({
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

          <div className="services__carousel" {...handlers}>
            <div
              className="services__track"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {Array.from({ length: pageCount }).map((_, pageIndex) => (
                <div className="services__page" key={pageIndex}>
                  {services.items
                    .slice(pageIndex * perView, pageIndex * perView + perView)
                    .map((item, i) => (
                      <article className="services__card" key={item.title}>
                        <div className="services__icon">{icons[(pageIndex * perView + i) % icons.length]}</div>
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
