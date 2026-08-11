import { FormEvent, ChangeEvent, useState } from 'react';
import { cta } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import './CTA.scss';

type Status = 'idle' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function CTA() {
  const ref = useReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus('error');
      setMessage('Enter your email address to get in touch.');
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus('error');
      setMessage('That email address doesn\u2019t look right — check for typos.');
      return;
    }

    // No backend wired up here — this simulates a successful submit.
    setStatus('success');
    setMessage('Thanks! Jenny will get back to you within a day.');
    setEmail('');
  };

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

          <form className="cta__form" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="cta-email">
              Email address
            </label>
            <div className="cta__field">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 5h14a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path d="M2.5 6l7.5 5.5L17.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <input
                id="cta-email"
                type="email"
                placeholder={cta.placeholder}
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEmail(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                aria-invalid={status === 'error'}
                aria-describedby="cta-feedback"
              />
            </div>
            <button type="submit" className="btn-primary">
              {cta.button}
            </button>
          </form>

          <p
            id="cta-feedback"
            className={`cta__feedback ${status !== 'idle' ? `is-${status}` : ''}`}
            role={status === 'error' ? 'alert' : 'status'}
          >
            {message}
          </p>

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
