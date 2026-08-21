// Central content file — all portfolio copy lives here.
// Content for Akshaya, 3rd Year Critical Care Technology Student.
//
// PLACEHOLDER POLICY: any value wrapped in [ ] is a placeholder that must be
// replaced with real information before publishing. Never delete a
// placeholder to "fill the gap" with invented facts — leave it bracketed
// until the real detail is supplied.

export const nav = {
  brand: 'AKSHAYA',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#services' },
    { label: 'Clinical Journey', href: '#clinical-journey' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const hero = {
  greeting: 'Hello!',
  title: [
    { text: "I'm", accent: false },
    { text: 'Akshaya,', accent: true },
  ],
  subtitle: '3rd Year Critical Care Technology Student',
  quote:
    'Building clinical knowledge and technical skills through academic learning, supervised hospital training, and hands-on exposure to critical care environments.',
  // Replaces the old star-rating + "X years experience" block, which
  // overstated her status. This renders as a simple, honest status badge.
  statusBadge: {
    value: '3rd',
    label: 'Year Student',
  },
  ctaPrimary: { label: 'View Clinical Journey', href: '#clinical-journey' },
  ctaSecondary: { label: 'Contact Me', href: '#contact' },
};

export const services = {
  eyebrow: 'My Skills',
  title: [
    { text: 'My', accent: false },
    { text: 'Skills', accent: true },
  ],
  description:
    'Developing clinical, technical, and professional skills through academic coursework, supervised hospital training, and hands-on exposure to critical care environments.',
  items: [
    {
      title: 'Patient Monitoring',
      description:
        'Understanding how vital signs and clinical parameters of critically ill patients are observed and recorded under supervision.',
      tag: 'Clinical Knowledge',
      exposureLevel: 'Clinical Exposure',
    },
    {
      title: 'Critical Care Fundamentals',
      description:
        'Academic understanding of critical care concepts, patient safety principles, and the role of the care team in intensive care settings.',
      tag: 'Clinical Knowledge',
      exposureLevel: 'Academic Knowledge',
    },
    {
      title: 'Infection Control Awareness',
      description:
        'Learning hygiene protocols and infection-prevention practices followed in hospital and critical care environments.',
      tag: 'Clinical Knowledge',
      exposureLevel: 'Academic Knowledge',
    },
    {
      title: 'ICU Equipment Awareness',
      description:
        'Familiarity with commonly used critical care equipment and its role in patient monitoring and support.',
      tag: 'Technical Knowledge',
      exposureLevel: 'Familiar With',
    },
    {
      title: 'Basic Clinical Documentation',
      description:
        'Developing a basic understanding of how patient information and clinical observations are recorded in a hospital setting.',
      tag: 'Technical Knowledge',
      exposureLevel: 'Learning',
    },
    {
      title: 'Teamwork & Communication',
      description:
        'Developing the ability to work within a multidisciplinary healthcare team and communicate clearly in a clinical environment.',
      tag: 'Professional Skills',
      exposureLevel: 'Developing',
    },
  ],
};

// Clinical Training Journey — year-wise timeline (was "experience").
// Nav item: "Clinical Journey" → #clinical-journey.
export const clinicalJourney = {
  eyebrow: 'Clinical Journey',
  title: [
    { text: 'My Clinical Training', accent: false },
    { text: 'Journey', accent: true },
  ],
  items: [
    {
      yearLabel: 'Year 1 — Foundation Clinical Exposure',
      company: '[Hospital Name]',
      period: '[Training Period]',
      role: 'Student Clinical Exposure',
      description:
        'Gained early exposure to hospital environments and a foundational understanding of patient care, hygiene practices, and clinical routines under supervision.',
    },
    {
      yearLabel: 'Year 2 — Hospital & Patient Care Training',
      company: '[Hospital Name]',
      period: '[Training Period]',
      role: 'Clinical Training',
      description:
        'Observed and learned about ward workflows, patient monitoring basics, infection control practices, and the importance of teamwork in a clinical setting.',
    },
    {
      yearLabel: 'Year 3 — Advanced Clinical Exposure',
      company: '[Hospital Name / Department]',
      period: '[Training Period]',
      role: 'Clinical Posting',
      description:
        'Strengthening clinical knowledge through hands-on learning, patient observation, equipment awareness, and interaction with multidisciplinary healthcare teams.',
    },
    {
      yearLabel: 'Year 4 — Internship (Upcoming)',
      company: '[Hospital Name — To Be Confirmed]',
      period: 'Upcoming',
      role: 'Major Clinical Internship',
      description:
        'Preparing academically and clinically to begin her major internship, where she looks forward to gaining deeper practical exposure under professional supervision.',
      isUpcoming: true,
    },
  ],
};

// Clinical Areas & Hospital Exposure — rendered via <InfoCardGrid>.
export const clinicalAreas = {
  id: 'clinical-areas',
  eyebrow: 'Hospital Exposure',
  title: [
    { text: 'Clinical Areas &', accent: false },
    { text: 'Hospital Exposure', accent: true },
  ],
  description:
    'Areas of the hospital and critical care environment I have been exposed to during academic clinical training.',
  items: [
    {
      title: 'Intensive Care Unit',
      description:
        'Observed ICU workflows, patient monitoring routines, and the coordination between nursing and technical staff.',
      tag: 'Clinical Exposure',
    },
    {
      title: 'Patient Monitoring',
      description:
        'Learned how vital signs and clinical parameters are continuously tracked for critically ill patients.',
      tag: 'Clinical Exposure',
    },
    {
      title: 'Infection Control',
      description:
        'Observed hygiene protocols and infection-prevention practices followed within hospital units.',
      tag: 'Academic Learning',
    },
    {
      title: 'Multidisciplinary Team Environment',
      description:
        'Gained awareness of how doctors, nurses, and technicians coordinate patient care as a team.',
      tag: 'Observed',
    },
  ],
};

// Critical Care Equipment — rendered via <InfoCardGrid>.
// Reflects study/observation only — never independent operation.
export const equipment = {
  id: 'equipment',
  eyebrow: 'Critical Care Technology',
  title: [
    { text: 'Critical Care', accent: false },
    { text: 'Equipment', accent: true },
  ],
  description:
    'Equipment I have studied or observed in a clinical setting as part of academic and hospital training. This reflects exposure and learning, not independent operation.',
  items: [
    {
      title: 'Patient Monitor',
      description:
        'Studied how patient monitors display vital signs such as heart rate, blood pressure, and oxygen saturation.',
      tag: 'Observed',
    },
    {
      title: 'Pulse Oximeter',
      description: 'Learned how this device is used to measure oxygen saturation in patients.',
      tag: 'Academic Knowledge',
    },
    {
      title: 'Infusion Pump',
      description:
        'Gained a basic understanding of how infusion pumps are used to regulate fluid and medication delivery.',
      tag: 'Observed',
    },
    {
      title: 'ECG',
      description: 'Studied the basics of ECG monitoring and its role in assessing cardiac activity.',
      tag: 'Academic Knowledge',
    },
  ],
};

// Certifications — rendered via <InfoCardGrid>. Replace placeholders with
// real certification details as they become available.
export const certifications = {
  id: 'certifications',
  eyebrow: 'Certifications',
  title: [
    { text: 'My', accent: false },
    { text: 'Certifications', accent: true },
  ],
  description: 'Certifications completed during academic training.',
  items: [
    {
      title: '[Certification Name]',
      description: 'Issued by [Issuing Organization] · [Completion Date]',
      tag: '[Certificate ID]',
    },
  ],
};

// Workshops & Seminars — rendered via <InfoCardGrid>. Replace placeholders
// with real event details as they become available.
export const workshops = {
  id: 'workshops',
  eyebrow: 'Workshops & Seminars',
  title: [
    { text: 'Workshops &', accent: false },
    { text: 'Seminars', accent: true },
  ],
  description: 'Healthcare workshops, seminars, and academic events attended during her training.',
  items: [
    {
      title: '[Workshop / Seminar Name]',
      description: 'Organized by [Organization] · [Date]',
      tag: 'Academic Event',
    },
  ],
};

// NOTE — Achievements section intentionally omitted.
// Per content policy: only build this section once real achievements
// (academic honors, paper/poster presentations, competitions, volunteering)
// are supplied. Do not fill it with placeholder content in the meantime.

export const whyHireMe = {
  title: [
    { text: 'About', accent: false },
    { text: 'Me', accent: true },
  ],
  description:
    'I am a 3rd year Critical Care Technology student building my clinical knowledge and technical skills through academic coursework and supervised hospital training. I am developing an understanding of patient monitoring, critical care fundamentals, and hospital workflows, and I am eager to keep learning from experienced healthcare teams.',
  careerGoal:
    'My goal is to build a career in Critical Care Technology — strengthening my clinical and technical skills, developing patient-centered care habits, and learning from experienced healthcare professionals as I move into my internship year and beyond.',
  stats: [
    { value: 3, suffix: '', label: 'Year Student' },
    { label: '[Number] Clinical Training Areas — to be confirmed' },
  ],
  cta: { label: 'Contact Me', href: '#contact' },
};

export const portfolio = {
  title: [
    { text: 'Lets have a look at ', accent: false },
    { text: 'my Projects', accent: false },
  ],
  titleAccentWord: 'Projects',
  cta: { label: 'See All', href: '#' },
  filters: [
    'Critical Care',
    'Clinical Learning',
    'Patient Care',
    'Medical Equipment',
    'Academic',
  ],
  items: [
    {
      title: 'Critical Care Patient Monitoring',
      tag: 'Critical Care',
      description:
        'An academic project focused on understanding vital signs, patient monitoring, and the importance of continuous observation in critical care settings.',
      objective: '[Project Objective]',
      studied: '[What Was Studied]',
      contribution: "[Akshaya's Contribution]",
      outcome: '[Key Learning / Outcome]',
      status: 'Completed',
      accent: '#fd8539',
    },
    {
      title: 'ICU Equipment Study',
      tag: 'Medical Equipment',
      description:
        'A study of commonly used critical care equipment and their basic functions in supporting the monitoring and management of critically ill patients.',
      objective: '[Project Objective]',
      studied: '[What Was Studied]',
      contribution: "[Akshaya's Contribution]",
      outcome: '[Key Learning / Outcome]',
      status: 'Completed',
      accent: '#5b6bff',
    },
    {
      title: 'Patient Care & Safety',
      tag: 'Patient Care',
      description:
        'An academic study covering patient safety, infection prevention, hygiene practices, and the importance of maintaining a safe critical care environment.',
      objective: '[Project Objective]',
      studied: '[What Was Studied]',
      contribution: "[Akshaya's Contribution]",
      outcome: '[Key Learning / Outcome]',
      status: 'Completed',
      accent: '#2fb897',
    },
    {
      title: 'Emergency Care Learning',
      tag: 'Clinical Learning',
      description:
        'A learning project focused on understanding emergency care procedures, rapid patient assessment, and the importance of timely clinical support.',
      objective: '[Project Objective]',
      studied: '[What Was Studied]',
      contribution: "[Akshaya's Contribution]",
      outcome: '[Key Learning / Outcome]',
      status: 'Upcoming Project',
      accent: '#e0507a',
    },
    {
      title: 'Critical Care Technology Portfolio',
      tag: 'Academic',
      description:
        'A collection of academic learning, clinical exposure, skills, and experiences developed throughout the Critical Care Technology program.',
      objective: '[Project Objective]',
      studied: '[What Was Studied]',
      contribution: "[Akshaya's Contribution]",
      outcome: '[Key Learning / Outcome]',
      status: 'Completed',
      accent: '#b47cff',
    },
  ],
};

// Learning Reflection — replaces fabricated third-party testimonials.
// First-person only; no invented names, roles, or quotes attributed to
// faculty/supervisors. Reintroduce real named testimonials only once
// verified quotes (with permission) are supplied.
export const learningReflection = {
  title: [
    { text: 'What Clinical Training', accent: false },
    { text: 'Has Taught Me', accent: true },
  ],
  description:
    'My academic journey and clinical training have helped me develop discipline, responsibility, teamwork, and a deeper understanding of patient-centered critical care.',
  items: [
    {
      theme: 'Discipline',
      reflection:
        'Clinical training has taught me the importance of showing up prepared, following protocol carefully, and taking responsibility for the small details that matter in patient care.',
    },
    {
      theme: 'Teamwork',
      reflection:
        'Observing multidisciplinary hospital teams has shown me how critical care depends on clear communication and coordination between doctors, nurses, and technicians.',
    },
    {
      theme: 'Patient-Centered Thinking',
      reflection:
        'Being present in clinical environments has helped me understand that every observation and procedure exists to support the patient, not just to complete a task.',
    },
    {
      theme: 'Continuous Learning',
      reflection:
        'Every clinical posting has reminded me how much there is still to learn, and has built my motivation to keep strengthening my knowledge before my internship.',
    },
  ],
};

export const cta = {
  title: [
    { text: 'Have a Healthcare', accent: false },
    { text: 'Opportunity?', accent: false },
    { text: "Let's Connect", accent: true },
  ],
  description:
    'I am looking forward to my upcoming internship, gaining valuable clinical experience, and contributing to a dedicated critical care team.',
  placeholder: 'Enter Email Address',
  button: 'Contact Email',
  trustPoints: [
    'Dedicated Critical Care Student',
    'Hands-On Clinical Exposure',
    'Passionate About Patient Care',
  ],
};

export const marquee = {
  words: [
    'Critical Care',
    'Patient Care',
    'ICU',
    'Patient Monitoring',
    'Clinical Practice',
    'Healthcare',
  ],
};

export const blog = {
  eyebrow: 'My Learning Journey',
  title: [
    { text: 'My Clinical', accent: false },
    { text: 'Learning', accent: false },
  ],
  cta: { label: 'See All', href: '#' },
  posts: [
    {
      title: 'Understanding the Role of Critical Care Technology',
      tag: 'Critical Care',
      author: 'Akshaya',
      date: '3rd Year',
      accent: '#7b6ef6',
    },
    {
      title: 'Importance of Patient Monitoring in Critical Care',
      tag: 'Patient Monitoring',
      author: 'Akshaya',
      date: '3rd Year',
      accent: '#0f9d6c',
    },
    {
      title: 'Learning Through Clinical Training and Hospital Exposure',
      tag: 'Clinical Learning',
      author: 'Akshaya',
      date: '3rd Year',
      accent: '#f2a900',
    },
  ],
};

// Resume section — id="resume", the actual nav target for "Resume".
export const resume = {
  eyebrow: 'Resume',
  title: [
    { text: 'View My', accent: false },
    { text: 'Resume', accent: true },
  ],
  description:
    'A summary of my academic background, clinical training, skills, and certifications as a 3rd year Critical Care Technology student.',
  viewLabel: 'View Resume',
  downloadLabel: 'Download Resume',
  // Replace with the real resume file path once available, e.g. '/resume-akshaya.pdf'.
  fileUrl: '#',
};

export const footer = {
  brand: 'AKSHAYA',
  title: [
    { text: 'Lets Connect ', accent: false },
    { text: 'there', accent: false },
  ],
  cta: { label: 'Contact Me', href: '#contact' },
  description:
    '3rd Year Critical Care Technology student passionate about patient care, clinical learning, and building a meaningful career in the healthcare field.',
  columns: [
    {
      title: 'Navigation',
      links: ['Home', 'About', 'Resume', 'Projects'],
    },
  ],
  contact: {
    phone: '[Phone Number]',
    email: '[Email Address]',
  },
  // Only professionally relevant networks — add others back only if Akshaya wants them public.
  social: ['linkedin'],
  legal: ['User Terms & Conditions', 'Privacy Policy'],
  copyright: '© 2026 Akshaya. All Rights Reserved.',
};
