import type { TextPart, InfoCardItem } from '../../types';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import './InfoCardGrid.scss';

interface InfoCardGridProps {
  id: string;
  eyebrow: string;
  title: TextPart[];
  description?: string;
  items: InfoCardItem[];
  /** 'dark' matches the Services/Testimonials navy panel treatment; 'light' (default) sits directly on the page background. */
  variant?: 'light' | 'dark';
}

/**
 * Generic reusable card-grid section. Reused for Clinical Areas & Hospital
 * Exposure, Critical Care Equipment, Certifications, and Workshops &
 * Seminars — four sections your original design system had no component
 * for, without inventing four near-duplicate SCSS files.
 *
 * Renders nothing if `items` is empty — used for sections (like Achievements)
 * that should stay hidden until real content exists, rather than shipping
 * with invented placeholder entries.
 */
export default function InfoCardGrid({
  id,
  eyebrow,
  title,
  description,
  items,
  variant = 'light',
}: InfoCardGridProps) {
  const headingRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  if (!items || items.length === 0) return null;

  return (
    <section className={`info-grid info-grid--${variant}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="info-grid__head reveal" ref={headingRef}>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${id}-title`}>
            <AccentText parts={title} />
          </h2>
          {description && <p className="info-grid__desc">{description}</p>}
        </div>

        <div className="info-grid__grid reveal-stagger" ref={gridRef}>
          {items.map((item) => (
            <article className="info-grid__card" key={item.title}>
              {item.tag && <span className="info-grid__tag">{item.tag}</span>}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
