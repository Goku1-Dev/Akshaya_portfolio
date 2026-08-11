import { useMemo, useState } from 'react';
import { portfolio } from '../../data/content';
import { useReveal } from '../../hooks/useReveal';
import { useCarousel } from '../../hooks/useCarousel';
import { useResponsivePerView } from '../../hooks/useResponsivePerView';
import './Portfolio.scss';

export default function Portfolio() {
  const headingRef = useReveal<HTMLDivElement>();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filtered = useMemo(
    () => (activeFilter ? portfolio.items.filter((p) => p.tag === activeFilter) : portfolio.items),
    [activeFilter]
  );

  const perView = useResponsivePerView([[860, 2], [0, 1]], 1);
  const { page, pageCount, next, prev, goTo, handlers } = useCarousel({
    count: filtered.length,
    perView,
  });

  const active = filtered[Math.min(page * perView, Math.max(filtered.length - 1, 0))];

  return (
    <section className="portfolio" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <div className="portfolio__head reveal" ref={headingRef}>
          <h2 id="portfolio-title">
            Lets have a look at
            <br />
            my <span className="accent">Portfolio</span>
          </h2>
          <a className="btn-primary" href={portfolio.cta.href}>
            {portfolio.cta.label}
          </a>
        </div>

        <div className="portfolio__carousel" {...handlers}>
          <div className="portfolio__track" style={{ transform: `translateX(-${page * 100}%)` }}>
            {Array.from({ length: pageCount }).map((_, pageIndex) => (
              <div className="portfolio__page" key={pageIndex}>
                {filtered
                  .slice(pageIndex * perView, pageIndex * perView + perView)
                  .map((item) => (
                    <article
                      className="portfolio__card"
                      key={item.title}
                      style={{ ['--accent' as string]: item.accent }}
                    >
                      <div className="portfolio__thumb">
                        <span className="portfolio__thumb-tag">{item.title.split(' - ')[0]}</span>
                        <a className="portfolio__thumb-link" href="#portfolio" aria-label={`View ${item.title}`}>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  ))}
              </div>
            ))}
          </div>

          <button
            type="button"
            className="portfolio__nav portfolio__nav--prev"
            onClick={prev}
            aria-label="Previous project"
          >
            ‹
          </button>
          <button
            type="button"
            className="portfolio__nav portfolio__nav--next"
            onClick={next}
            aria-label="Next project"
          >
            ›
          </button>
        </div>

        <div className="portfolio__dots" role="tablist" aria-label="Portfolio slides">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={page === i}
              className={page === i ? 'is-active' : ''}
              onClick={() => goTo(i)}
              aria-label={`Show project ${i + 1}`}
            />
          ))}
        </div>

        <div className="portfolio__filters" role="tablist" aria-label="Filter projects by category">
          <button
            type="button"
            className={activeFilter === null ? 'is-active' : ''}
            onClick={() => setActiveFilter(null)}
          >
            All
          </button>
          {portfolio.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? 'is-active' : ''}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {active && (
          <div className="portfolio__detail">
            <h3>
              {active.title} <span className="portfolio__detail-arrow">↗</span>
            </h3>
            <p>{active.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
