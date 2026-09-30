export const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#technology" },
  { label: "Security", href: "#security" },
  { label: "FAQ", href: "#faq" },
];

export const LOOP_STEPS = [
  {
    key: "assess",
    title: "Assess",
    description:
      "Learners take an adaptive assessment that adjusts difficulty in real time, so every result reflects true ability — not luck or memorization.",
  },
  {
    key: "understand",
    title: "Understand",
    description:
      "Sensighty builds a live skill model for each learner, pinpointing exactly which concepts are solid and which have gaps — down to the sub-skill.",
  },
  {
    key: "adapt",
    title: "Adapt",
    description:
      "AI-guided micro-lessons, practice sets, and explanations are generated for the specific gap — not a generic course replay.",
  },
  {
    key: "master",
    title: "Master",
    description:
      "Learners are reassessed on the gap alone. Mastery is only confirmed once the model shows durable, verified understanding.",
  },
];

export const PROBLEMS = [
  {
    title: "Static tests measure memory, not mastery",
    before:
      "Fixed-form quizzes ask the same questions to everyone, so strong guessers and shallow memorizers can score as well as learners who truly understand the material.",
    after:
      "Sensighty's adaptive engine continuously recalibrates question difficulty, isolating genuine ability from lucky guesses or rote recall.",
  },
  {
    title: "Feedback stops at a percentage score",
    before:
      "A grade of 68% tells you almost nothing about what to do next — for the learner, the teacher, or the manager.",
    after:
      "Sensighty translates every result into a skill-gap map and a concrete remediation path, automatically.",
  },
  {
    title: "Remediation is generic and manual",
    before:
      "\"Please review Chapter 4\" is the extent of most remediation — expensive to personalize and easy to ignore.",
    after:
      "AI-generated micro-lessons target the specific misconception, at the moment it's detected.",
  },
  {
    title: "Integrity relies on manual proctoring",
    before:
      "Catching copied answers or AI-assisted cheating after the fact is slow, invasive, and often unreliable.",
    after:
      "Behavioral and psychometric signals flag anomalies during the assessment, reducing reliance on webcams and manual review.",
  },
];

export const CAPABILITIES = [
  {
    title: "Adaptive assessment engine",
    description:
      "Item Response Theory (3PL IRT) selects each question based on the learner's current ability estimate, converging quickly on an accurate skill measurement.",
    icon: "gauge",
  },
  {
    title: "Live skill & mastery model",
    description:
      "Every learner has a continuously updated model of strengths and gaps, mapped to specific concepts and Bloom's Taxonomy levels.",
    icon: "layers",
  },
  {
    title: "AI-guided remediation",
    description:
      "When a gap is detected, Sensighty generates a targeted micro-lesson and practice set — then reassesses to confirm the gap is closed.",
    icon: "sparkles",
  },
  {
    title: "Dynamic item generation",
    description:
      "New, non-repeating question variants are generated on demand, reducing answer-sharing and item exposure over time.",
    icon: "shuffle",
  },
  {
    title: "Behavioral & psychometric telemetry",
    description:
      "Response-time patterns, answer-change behavior, and ability-consistency checks help flag irregular activity for review.",
    icon: "activity",
  },
  {
    title: "Role-based dashboards",
    description:
      "Purpose-built views for learners, instructors, and administrators — from an individual skill map to a cohort-wide gap heatmap.",
    icon: "layout",
  },
  {
    title: "Enterprise-grade access control",
    description:
      "Tenant isolation, role-based permissions, and full audit logging designed for education and enterprise IT requirements.",
    icon: "shield",
  },
  {
    title: "Open integrations",
    description:
      "Connect to your LMS, HRIS, or ATS via API and standard rostering formats, so Sensighty fits into workflows you already run.",
    icon: "plug",
  },
];

export const IMPACT_STATS = [
  {
    stat: "Faster",
    label: "Skill-gap identification",
    detail: "Adaptive testing converges on an accurate ability estimate in far fewer questions than fixed-form exams.",
  },
  {
    stat: "Targeted",
    label: "Remediation, not repetition",
    detail: "Designed to reduce time spent re-studying material learners have already mastered.",
  },
  {
    stat: "Lower",
    label: "Manual grading overhead",
    detail: "Automated scoring and gap analysis are built to reduce routine grading and reporting work for instructors.",
  },
  {
    stat: "Higher",
    label: "Confidence in results",
    detail: "Behavioral and psychometric signals are designed to reduce false confidence in memorized or copied answers.",
  },
];

export const SOLUTIONS = [
  {
    key: "learners",
    audience: "For Learners",
    headline: "Learn what you actually need to learn.",
    description:
      "Stop rewatching lessons you've already mastered. Sensighty shows you precisely which concepts are holding you back, teaches you those concepts directly, and confirms mastery before you move on.",
    points: [
      "A personal skill map, not just a grade",
      "Micro-lessons targeted to your exact gaps",
      "Clear proof of mastery you can show teachers or employers",
    ],
  },
  {
    key: "educators",
    audience: "For Educators & Bootcamps",
    headline: "See every learner's skill gaps automatically.",
    description:
      "Replace guesswork with a live, cohort-wide view of who understands what. Spend office hours on the concepts that are actually blocking progress.",
    points: [
      "Cohort-level skill-gap heatmaps",
      "Auto-generated remediation assignments",
      "Less time grading, more time teaching",
    ],
  },
  {
    key: "enterprises",
    audience: "For Enterprises",
    headline: "Measure and prove technical competency.",
    description:
      "Move beyond course-completion metrics. Sensighty gives L&D and compliance teams a defensible, auditable record of what employees actually know.",
    points: [
      "Competency records tied to real roles and skills",
      "Enterprise SSO, RBAC, and audit logging",
      "Reporting built for compliance and upskilling programs",
    ],
  },
  {
    key: "hiring",
    audience: "For Hiring Teams",
    headline: "Assess problem-solving ability, not memorized answers.",
    description:
      "Give candidates an adaptive technical assessment that's hard to game, and get a clear, comparable skill profile instead of a pass/fail score.",
    points: [
      "Adaptive, role-specific skill assessments",
      "Anomaly flags for irregular test-taking behavior",
      "Structured skill reports hiring managers can compare",
    ],
  },
];

export const TECHNOLOGY_PILLARS = [
  {
    title: "3PL Item Response Theory",
    description:
      "A psychometric model that estimates learner ability from item difficulty, discrimination, and guessing parameters — the same statistical foundation used in major standardized assessments.",
  },
  {
    title: "Bloom's Taxonomy mapping",
    description:
      "Every skill is tagged by cognitive level — from recall to analysis and evaluation — so mastery means genuine understanding, not surface recognition.",
  },
  {
    title: "AI remediation orchestration",
    description:
      "A model-orchestration layer selects the right explanation style, difficulty, and format for each learner's detected gap, then hands off to reassessment.",
  },
  {
    title: "Telemetry & anomaly detection",
    description:
      "Response latency, revision patterns, and ability-consistency scoring feed a lightweight anomaly model that flags — rather than accuses — irregular sessions for human review.",
  },
];

export const SECURITY_POINTS = [
  {
    title: "Tenant isolation",
    description: "Each organization's data, content, and analytics are logically isolated by design.",
  },
  {
    title: "Role-based access control",
    description: "Granular permissions for learners, instructors, admins, and hiring reviewers.",
  },
  {
    title: "Audit logging",
    description: "Every assessment event and administrative action is logged for traceability.",
  },
  {
    title: "Encryption in transit & at rest",
    description: "Industry-standard encryption protects data throughout its lifecycle.",
  },
  {
    title: "Flexible deployment",
    description: "Cloud, private-cloud, or on-premise deployment options for regulated environments.",
  },
  {
    title: "Data retention controls",
    description: "Configurable retention and export policies to match your compliance requirements.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "How is Sensighty different from a standard LMS quiz feature?",
    answer:
      "Most LMS quizzes are fixed-form: every learner sees the same questions and gets a percentage score. Sensighty adapts question difficulty in real time, builds a per-concept skill model, and automatically routes learners to targeted remediation — then reassesses to confirm the gap is closed.",
  },
  {
    question: "What is Item Response Theory (IRT) and why does it matter?",
    answer:
      "IRT is a psychometric framework that estimates a learner's true ability based on how they respond to items of varying difficulty. It allows Sensighty to reach an accurate skill estimate in fewer questions and reduces the effect of guessing on results.",
  },
  {
    question: "How does Sensighty approach test integrity?",
    answer:
      "Sensighty combines dynamic item generation with behavioral and psychometric telemetry — such as response-time patterns and answer-consistency checks — to flag irregular sessions for review. This is designed to reduce reliance on invasive proctoring while supporting human judgment, not replace it.",
  },
  {
    question: "Can Sensighty integrate with our existing LMS, HRIS, or ATS?",
    answer:
      "Yes. Sensighty is designed to connect via API and standard rostering formats so it can sit alongside the systems you already use, rather than replacing them.",
  },
  {
    question: "Do you support on-premise or private-cloud deployment?",
    answer:
      "Yes, for enterprise and regulated customers we offer private-cloud and on-premise deployment options alongside our standard cloud offering.",
  },
  {
    question: "Is the impact data on this site from real customers?",
    answer:
      "The figures on this site describe the outcomes Sensighty is designed to produce. As pilot programs complete, we publish verified, sourced results in our case studies rather than projected figures.",
  },
];
