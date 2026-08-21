import { clinicalJourney } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import './Experience.scss';

export default function Experience() {
  const headingRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section className="experience" id="clinical-journey" aria-labelledby="experience-title">
      <div className="container">
        <div className="experience__head reveal" ref={headingRef}>
          <p className="eyebrow">{clinicalJourney.eyebrow}</p>
          <h2 id="experience-title">
            <AccentText parts={clinicalJourney.title} />
          </h2>
        </div>

        <div className="experience__timeline reveal-stagger" ref={listRef}>
          {clinicalJourney.items.map((item, i) => (
            <div
              className={`experience__row ${i % 2 === 1 ? 'is-reversed' : ''} ${item.isUpcoming ? 'is-upcoming' : ''}`}
              key={item.yearLabel}
            >
              <div className="experience__col experience__col--meta">
                <p className="experience__year-label">
                  {item.yearLabel}
                  {item.isUpcoming && <span className="experience__upcoming-badge">Upcoming</span>}
                </p>
                <h3>{item.company}</h3>
                <p className="experience__period">{item.period}</p>
              </div>

              <div className="experience__node" aria-hidden="true">
                <span />
              </div>

              <div className="experience__col experience__col--role">
                <h3>{item.role}</h3>
                <p className="experience__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
