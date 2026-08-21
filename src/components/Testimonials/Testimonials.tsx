import { learningReflection } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import { useCarousel } from '../../hooks/useCarousel';
import { useResponsivePerView } from '../../hooks/useResponsivePerView';
import './Testimonials.scss';

// Repurposed from a fabricated-quote testimonials carousel into a
// first-person "Learning Reflection" section. No third-party names, roles,
// or star ratings — every line here is something Akshaya herself would say.
export default function Testimonials() {
  const headingRef = useReveal<HTMLDivElement>();
  const perView = useResponsivePerView([[1024, 3], [640, 2], [0, 1]], 1);
  const { page, pageCount, goTo, handlers, isDragging, dragOffsetPercent } = useCarousel({
    count: learningReflection.items.length,
    perView,
    autoplayMs: 6000,
  });

  return (
    <section className="testimonials" id="learning-reflection" aria-labelledby="testimonials-title">
      <div className="testimonials__panel">
        <div className="container">
          <div className="testimonials__head reveal" ref={headingRef}>
            <h2 id="testimonials-title">
              <AccentText parts={learningReflection.title} />
            </h2>
            <p>{learningReflection.description}</p>
          </div>

          <div
            className={`testimonials__carousel${isDragging ? ' is-dragging' : ''}`}
            {...handlers}
          >
            <div
              className="testimonials__track"
              style={{
                transform: `translateX(calc(-${page * 100}% + ${dragOffsetPercent}%))`,
                transition: isDragging ? 'none' : undefined,
              }}
            >
              {Array.from({ length: pageCount }).map((_, pageIndex) => (
                <div className="testimonials__page" key={pageIndex}>
                  {learningReflection.items
                    .slice(pageIndex * perView, pageIndex * perView + perView)
                    .map((item) => (
                      <figure className="testimonials__card" key={item.theme}>
                        <span className="testimonials__quote-mark" aria-hidden="true">
                          &ldquo;
                        </span>
                        <blockquote>{item.reflection}</blockquote>
                        <figcaption>
                          <span>
                            <strong>{item.theme}</strong>
                          </span>
                        </figcaption>
                      </figure>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials__dots" role="tablist" aria-label="Learning reflection slides">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={page === i}
                className={page === i ? 'is-active' : ''}
                onClick={() => goTo(i)}
                aria-label={`Show reflection slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}