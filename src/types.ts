/** A fragment of a heading — lets copy mix plain and accent-colored text. */
export interface TextPart {
  text: string;
  accent: boolean;
}

/**
 * Generic card item used by InfoCardGrid (Clinical Areas, Equipment,
 * Certifications, Workshops & Seminars). `tag` doubles as an exposure-level
 * label ("Clinical Exposure", "Academic Knowledge", "Observed", etc.) so we
 * never imply independent/professional performance of a skill or procedure.
 */
export interface InfoCardItem {
  title: string;
  description: string;
  tag?: string;
}

/** A single entry in the Clinical Training Journey timeline. */
export interface ClinicalJourneyItem {
  /** e.g. "Year 3 — Advanced Clinical Exposure" */
  yearLabel: string;
  /** Hospital/department name, or a bracketed placeholder like "[Hospital Name]" */
  company: string;
  /** Training period, or a bracketed placeholder like "[Training Period]" */
  period: string;
  /** Student status — never "Intern" unless an actual internship was held */
  role: string;
  description: string;
  /** True only for the upcoming Year 4 internship entry */
  isUpcoming?: boolean;
}

/** A Skills carousel item with an explicit exposure-level label. */
export interface SkillItem {
  title: string;
  description: string;
  tag: string;
  exposureLevel: string;
}

/** A stat card in the About section — `value` is optional so unverified
 * metrics can render as plain placeholder text instead of an animated counter. */
export interface AboutStat {
  value?: number;
  suffix?: string;
  label: string;
}

/** A first-person reflection card (replaces fabricated third-party testimonials). */
export interface ReflectionItem {
  theme: string;
  reflection: string;
}
