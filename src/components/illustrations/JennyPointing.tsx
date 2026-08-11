/**
 * Original flat-design character illustration, second pose (hand raised
 * to glasses) for the "Why Hire Me" section. Built from primitive shapes.
 */
export default function JennyPointing() {
  return (
    <svg
      viewBox="0 0 360 480"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of Jenny smiling with her hand raised to her glasses"
    >
      {/* jeans / legs hint at base */}
      <path d="M110 420c0-10 60-14 70-14s70 4 70 14v60H110v-60z" fill="#33415c" />
      {/* jacket / body */}
      <path
        d="M70 460c2-80 40-132 66-148 10 18 30 28 54 28s44-10 54-28c26 16 64 68 66 148H70z"
        fill="#fd8539"
      />
      {/* olive top */}
      <path
        d="M138 330c12 14 28 22 52 22s40-8 52-22c7 6 12 12 16 18-13 20-40 32-68 32s-55-12-68-32c4-6 9-12 16-18z"
        fill="#6b6a3f"
      />
      {/* raised arm sleeve */}
      <path
        d="M228 300c22 4 40 20 46 42l14 46c3 10-3 20-13 22-9 2-18-3-21-12l-16-44c-10-8-16-18-18-30z"
        fill="#fd8539"
      />
      <circle cx="278" cy="392" r="16" fill="#e8a978" />
      {/* neck */}
      <rect x="163" y="228" width="40" height="48" rx="16" fill="#e8a978" />
      {/* face */}
      <ellipse cx="183" cy="188" rx="66" ry="74" fill="#f0b483" />
      {/* ears */}
      <circle cx="120" cy="188" r="11" fill="#f0b483" />
      <circle cx="246" cy="188" r="11" fill="#f0b483" />
      {/* hair back */}
      <path
        d="M107 150c0-52 34-96 76-96s76 44 76 96v18c-10-4-16-14-18-24-8 20-30 32-58 32s-50-12-58-32c-2 10-8 20-18 24v-18z"
        fill="#3a2418"
      />
      {/* curls */}
      <circle cx="112" cy="178" r="18" fill="#3a2418" />
      <circle cx="104" cy="204" r="14" fill="#3a2418" />
      <circle cx="256" cy="178" r="18" fill="#3a2418" />
      <circle cx="264" cy="204" r="14" fill="#3a2418" />
      {/* glasses (one hand touching frame) */}
      <g stroke="#1c1f2e" strokeWidth="5" fill="none">
        <rect x="130" y="180" width="42" height="33" rx="13" />
        <rect x="196" y="180" width="42" height="33" rx="13" />
        <path d="M172 194h24" />
      </g>
      {/* eyes */}
      <circle cx="151" cy="197" r="4" fill="#1c1f2e" />
      <circle cx="217" cy="197" r="4" fill="#1c1f2e" />
      {/* raised hand near glasses */}
      <ellipse cx="205" cy="168" rx="16" ry="13" fill="#e8a978" transform="rotate(-18 205 168)" />
      {/* eyebrows (surprised/happy) */}
      <path d="M136 172c8-8 22-8 30-2" stroke="#3a2418" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* smile, open happy mouth */}
      <path d="M160 224c8 14 40 14 48 0" stroke="#a85a3a" strokeWidth="4" fill="#fff" strokeLinecap="round" />
    </svg>
  );
}
