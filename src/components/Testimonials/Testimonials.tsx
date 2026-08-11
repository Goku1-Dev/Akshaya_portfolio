import { testimonials } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import { useCarousel } from '../../hooks/useCarousel';
import { useResponsivePerView } from '../../hooks/useResponsivePerView';
import './Testimonials.scss';

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);
}

export default function Testimonials() {
  const headingRef = useReveal<HTMLDivElement>();
  const perView = useResponsivePerView([[1024, 3], [640, 2], [0, 1]], 1);
  const { page, pageCount, goTo, handlers } = useCarousel({
    count: testimonials.items.length,
    perView,
    autoplayMs: 6000,
  });

  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__panel">
        <div className="container">
          <div className="testimonials__head reveal" ref={headingRef}>
            <h2 id="testimonials-title">
              <AccentText parts={testimonials.title} />
            </h2>
            <p>{testimonials.description}</p>
          </div>

          <div className="testimonials__carousel" {...handlers}>
            <div className="testimonials__track" style={{ transform: `translateX(-${page * 100}%)` }}>
              {Array.from({ length: pageCount }).map((_, pageIndex) => (
                <div className="testimonials__page" key={pageIndex}>
                  {testimonials.items
                    .slice(pageIndex * perView, pageIndex * perView + perView)
                    .map((t) => (
                      <figure className="testimonials__card" key={t.name}>
                        <span className="testimonials__quote-mark" aria-hidden="true">
                          &ldquo;
                        </span>
                        <blockquote>{t.quote}</blockquote>
                        <figcaption>
                          <span className="testimonials__avatar" aria-hidden="true">
                            {initials(t.name)}
                          </span>
                          <span>
                            <strong>{t.name}</strong>
                            <span className="testimonials__role">{t.role}</span>
                          </span>
                          <span className="testimonials__rating">
                            <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
                              <path
                                fill="#ffb020"
                                d="M10 1.5l2.6 5.6 6.1.7-4.6 4.2 1.3 6-5.4-3.1-5.4 3.1 1.3-6L1.3 7.8l6.1-.7L10 1.5z"
                              />
                            </svg>
                            {t.rating.toFixed(1)}
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials__dots" role="tablist" aria-label="Testimonials slides">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={page === i}
                className={page === i ? 'is-active' : ''}
                onClick={() => goTo(i)}
                aria-label={`Show testimonial slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
