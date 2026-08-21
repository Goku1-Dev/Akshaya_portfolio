import { useEffect, useRef, useState } from 'react';
import { whyHireMe } from '../../data/content';
import AccentText from '../AccentText';
import JennyPointing from '../illustrations/JennyPointing';
import { useReveal } from '../../hooks/useReveal';
import './WhyHireMe.scss';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const duration = 1400;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span className="why-hire__stat-value" ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function WhyHireMe() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="why-hire" id="about" aria-labelledby="why-hire-title">
      <div className="container">
        <div className="why-hire__panel reveal" ref={ref}>
          <div className="why-hire__figure" aria-hidden="true">
            <div className="why-hire__figure-backdrop" />
            <JennyPointing />
          </div>

          <div className="why-hire__content">
            <h2 id="why-hire-title">
              <AccentText parts={whyHireMe.title} />
            </h2>
            <p className="why-hire__desc">{whyHireMe.description}</p>
            {whyHireMe.careerGoal && <p className="why-hire__desc why-hire__goal">{whyHireMe.careerGoal}</p>}

            <div className="why-hire__stats">
              {whyHireMe.stats.map((stat) =>
                typeof stat.value === 'number' ? (
                  <div className="why-hire__stat" key={stat.label}>
                    <Counter value={stat.value} suffix={stat.suffix ?? ''} />
                    <span className="why-hire__stat-label">{stat.label}</span>
                  </div>
                ) : (
                  // No verified numeric value yet — show the label as plain
                  // placeholder text instead of animating a made-up number.
                  <div className="why-hire__stat why-hire__stat--placeholder" key={stat.label}>
                    <span className="why-hire__stat-label">{stat.label}</span>
                  </div>
                )
              )}
            </div>

            <a className="btn-outline" href={whyHireMe.cta.href}>
              {whyHireMe.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
