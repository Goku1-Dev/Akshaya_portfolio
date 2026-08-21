import { FormEvent, ChangeEvent, useState } from 'react';
import { cta } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import './CTA.scss';

type Status = 'idle' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RECIPIENT_EMAIL = 'akshayapr.ahs@jkkn.ac.in';

export default function CTA() {
  const ref = useReveal<HTMLDivElement>();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus('error');
      setMessage('Please enter your name.');
      return;
    }

    if (!email.trim()) {
      setStatus('error');
      setMessage('Enter your email address so Jenny can reply to you.');
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus('error');
      setMessage('That email address doesn\u2019t look right — check for typos.');
      return;
    }

    if (!subject.trim()) {
      setStatus('error');
      setMessage('Please add a subject for your message.');
      return;
    }

    if (!description.trim()) {
      setStatus('error');
      setMessage('Please write a short description of what you need.');
      return;
    }

    // No backend wired up here — builds a mailto: link so the visitor's own
    // email client opens with everything prefilled, addressed to Jenny.
    const mailBody = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      description,
    ].join('\n');

    const mailtoUrl =
      `mailto:${RECIPIENT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoUrl;

    setStatus('success');
    setMessage('Opening your email app with the message ready to send…');
    setName('');
    setEmail('');
    setSubject('');
    setDescription('');
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
            <div className="cta__row">
              <div className="cta__field">
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="10" cy="6.5" r="3.5" stroke="currentColor" strokeWidth="1.4" />
                  <path
                    d="M3 17c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  id="cta-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setName(e.target.value);
                    if (status !== 'idle') setStatus('idle');
                  }}
                  aria-label="Your name"
                  aria-invalid={status === 'error'}
                  aria-describedby="cta-feedback"
                />
              </div>

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
            </div>

            <div className="cta__field">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3 4h14v12H3z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path d="M3 4l7 6 7-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <input
                id="cta-subject"
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setSubject(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                aria-label="Subject"
                aria-invalid={status === 'error'}
                aria-describedby="cta-feedback"
              />
            </div>

            <div className="cta__field cta__field--textarea">
              <textarea
                id="cta-description"
                placeholder="Tell Jenny a bit about your project or request…"
                value={description}
                rows={4}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
                  setDescription(e.target.value);
                  if (status !== 'idle') setStatus('idle');
                }}
                aria-label="Description"
                aria-invalid={status === 'error'}
                aria-describedby="cta-feedback"
              />
            </div>

            <button type="submit" className="btn-primary cta__submit">
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