/**
 * Uses the actual photo (public/about.png) instead of the drawn illustration.
 * No inline styles here — sizing/positioning is fully controlled by
 * WhyHireMe.scss (.why-hire__figure img) so desktop/mobile behave correctly.
 */
export default function JennyPointing() {
  return (
    <img
      className="why-hire__photo"
      src="/about.png"
      alt="Photo of Jenny"
    />
  );
}