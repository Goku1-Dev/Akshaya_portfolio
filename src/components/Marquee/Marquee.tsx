import { marquee } from '../../data/content';
import './Marquee.scss';

export default function Marquee() {
  // Duplicate the word list so the CSS translateX(-50%) loop is seamless.
  const loopWords = [...marquee.words, ...marquee.words];

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__strip">
        <div className="marquee__track">
          {loopWords.map((word, i) => (
            <span className="marquee__item" key={`${word}-${i}`}>
              {word}
              <span className="marquee__dot">+</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
