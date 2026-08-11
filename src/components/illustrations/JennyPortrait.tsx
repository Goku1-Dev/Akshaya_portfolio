/**
 * Original flat-design character illustration for the hero section.
 * Built from scratch as primitive shapes (no traced/copied artwork).
 */
export default function JennyPortrait() {
  return (
    <svg
      viewBox="0 0 420 480"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustrated portrait of Jenny, product designer"
    >
      {/* hair back */}
      <path
        d="M120 150c0-58 47-105 105-105s105 47 105 105v70c0 12-4 22-11 30 6 30 4 62-8 92H139c-12-30-14-62-8-92-7-8-11-18-11-30v-70z"
        fill="#3a2418"
      />
      {/* neck */}
      <rect x="188" y="248" width="44" height="55" rx="18" fill="#e8a978" />
      {/* body / jacket */}
      <path
        d="M85 480c4-70 45-118 70-132 12 20 34 33 65 33s53-13 65-33c25 14 66 62 70 132H85z"
        fill="#fd8539"
      />
      {/* olive top under jacket */}
      <path
        d="M160 355c14 16 32 26 60 26s46-10 60-26c8 6 14 13 18 20-15 22-45 36-78 36s-63-14-78-36c4-7 10-14 18-20z"
        fill="#6b6a3f"
      />
      {/* jacket lapels */}
      <path d="M150 348c-9 8-16 19-21 32l30 62 14-70-23-24z" fill="#e56b1f" />
      <path d="M270 348c9 8 16 19 21 32l-30 62-14-70 23-24z" fill="#e56b1f" />
      {/* face */}
      <ellipse cx="210" cy="205" rx="72" ry="80" fill="#f0b483" />
      {/* ears */}
      <circle cx="140" cy="205" r="12" fill="#f0b483" />
      <circle cx="280" cy="205" r="12" fill="#f0b483" />
      {/* hair front / fringe */}
      <path
        d="M138 165c-4-46 30-84 72-84s76 38 72 84c-18-16-40-8-46 4-10-22-34-30-52-16-4-16-24-20-46 12z"
        fill="#3a2418"
      />
      {/* curls sides */}
      <circle cx="126" cy="190" r="20" fill="#3a2418" />
      <circle cx="118" cy="220" r="16" fill="#3a2418" />
      <circle cx="294" cy="190" r="20" fill="#3a2418" />
      <circle cx="302" cy="220" r="16" fill="#3a2418" />
      {/* glasses */}
      <g stroke="#1c1f2e" strokeWidth="5" fill="none">
        <rect x="152" y="196" width="46" height="36" rx="14" />
        <rect x="222" y="196" width="46" height="36" rx="14" />
        <path d="M198 210h24" />
        <path d="M152 210h-14" />
        <path d="M268 210h14" />
      </g>
      {/* eyes */}
      <circle cx="175" cy="214" r="4" fill="#1c1f2e" />
      <circle cx="245" cy="214" r="4" fill="#1c1f2e" />
      {/* eyebrows */}
      <path d="M160 190c8-6 20-6 28-1" stroke="#3a2418" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M232 189c8-5 20-5 28 1" stroke="#3a2418" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* nose */}
      <path d="M208 218c-2 8-5 14-10 18" stroke="#d99562" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* smile */}
      <path d="M186 244c10 12 38 12 48 0" stroke="#a85a3a" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
