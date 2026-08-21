import { cta } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import './CTA.scss';

const RECIPIENT_EMAIL = 'akshayapr.ahs@jkkn.ac.in';
const MAIL_SUBJECT = 'Portfolio Inquiry';
const MAIL_BODY = 'Hi Jenny,\n\nI came across your portfolio and would like to get in touch about:\n\n';

const mailtoUrl =
  `mailto:${RECIPIENT_EMAIL}` +
  `?subject=${encodeURIComponent(MAIL_SUBJECT)}` +
  `&body=${encodeURIComponent(MAIL_BODY)}`;

export default function CTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="cta" id="contact" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta__panel reveal" ref={ref}>
          <h2 id="cta-title">
            {cta.title[0].text}
            <br />
            <AccentText parts={cta.title.slice(1)} />
          </h2>
          <p>{cta.description}</p>

          <a className="btn-primary cta__button" href={mailtoUrl}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <path d="M2.5 6l7.5 5.5L17.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            {cta.button}
          </a>

          <ul className="cta__trust">
            {cta.trustPoints.map((point) => (
              <li key={point}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10.5l4 4 8-9"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}