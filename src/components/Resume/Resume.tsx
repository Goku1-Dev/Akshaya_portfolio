import { resume } from '../../data/content';
import AccentText from '../AccentText';
import { useReveal } from '../../hooks/useReveal';
import './Resume.scss';

// The actual target of nav's "Resume" link. Previously #resume pointed at
// the training timeline (now the Clinical Journey section) with no real
// resume file link anywhere on the page.
export default function Resume() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="resume-section" id="resume" aria-labelledby="resume-title">
      <div className="container">
        <div className="resume-section__panel reveal" ref={ref}>
          <div>
            <p className="eyebrow">{resume.eyebrow}</p>
            <h2 id="resume-title">
              <AccentText parts={resume.title} />
            </h2>
            <p className="resume-section__desc">{resume.description}</p>
          </div>

          <div className="resume-section__actions">
            <a className="btn-primary" href={resume.fileUrl} target="_blank" rel="noreferrer">
              {resume.viewLabel}
            </a>
            <a className="btn-outline" href={resume.fileUrl} download>
              {resume.downloadLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
