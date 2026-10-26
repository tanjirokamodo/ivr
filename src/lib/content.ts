export type Treatment = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  suitableFor: string;
  approach: string[];
  note: string;
};

export type EventOffering = {
  title: string;
  rhythm: string;
  audience: string;
  description: string;
};

export const siteSettings = {
  name: "Dr Dadhe's Ayur & Nature Cure LLP",
  shortName: "Dr Dadhe's",
  tagline: "Ayurveda, nature cure & supportive care",
  phonePrimary: "9966426060",
  phoneSecondary: "9666857070",
  whatsappNumber: "919966426060",
  email: "drdadhesayurandnaturecure369@gmail.com",
  addressLines: ["C683+FW6", "Pilligundla", "Telangana 501203"],
  hours: "Wednesday–Monday, 8:00 AM–2:00 PM",
  closure: "Tuesday closed",
  mapsUrl:
    "https://maps.google.com/?q=Dr.Dadhe%27s+Ayur+and+Nature+Cure,+Telangana",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Dr.Dadhe%27s+Ayur+and+Nature+Cure,+Telangana&output=embed",
  copyrightYear: 2026,
} as const;

export const navigation = [
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Practitioner", href: "/practitioner" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
] as const;

export const practitioner = {
  name: "Vaidya Sri Dadhe Venkat Rao",
  displayName: "Vaidya Sri Venkat Rao",
  role: "Founder & practitioner",
  introduction:
    "The clinic describes Vaidya Sri Venkat Rao's work as bringing Ayurveda, nature cure and disciplined lifestyle practices together for people navigating chronic and long-standing health concerns.",
  approach:
    "His publicly stated approach focuses on understanding the individual, supporting balance and building practical routines around food, rest and daily life.",
  approvalNote:
    "Professional qualifications and registrations were not publicly listed on the reference website and should be supplied and approved by the clinic before production publication.",
} as const;

export const treatments: Treatment[] = [
  {
    slug: "ayurvedic-consultation",
    title: "Ayurvedic Consultation",
    eyebrow: "Individual assessment",
    summary:
      "A conversation-led review of present concerns, routines, diet and lifestyle to inform an individual care discussion.",
    description:
      "Consultation is the starting point for care at the clinic. It gives the practitioner space to understand the person behind the concern and discuss whether an Ayurvedic or nature-cure approach may be appropriate.",
    suitableFor: "People seeking an initial assessment or a review of an existing care plan.",
    approach: [
      "Discuss current concerns and relevant health history",
      "Review food, sleep, activity and daily routine",
      "Explain a proposed plan, precautions and next steps",
    ],
    note: "Bring details of current medicines, diagnoses and treating clinicians to your consultation.",
  },
  {
    slug: "panchakarma",
    title: "Panchakarma",
    eyebrow: "Classical care pathway",
    summary:
      "A traditional Ayurvedic programme that must be individualised and undertaken only after practitioner assessment.",
    description:
      "Panchakarma refers to a structured group of traditional Ayurvedic procedures. The appropriate sequence, duration and suitability vary by person; this demo does not present a standard protocol.",
    suitableFor: "Adults assessed as suitable by a qualified practitioner.",
    approach: [
      "Suitability and contraindication screening",
      "A personalised preparatory and main-care sequence",
      "Dietary guidance, rest and follow-up discussion",
    ],
    note: "Not every therapy is appropriate for every person. Clinical assessment is essential.",
  },
  {
    slug: "abhyanga",
    title: "Abhyanga",
    eyebrow: "Traditional oil application",
    summary:
      "A traditional external oil application selected according to the consultation and individual comfort.",
    description:
      "Abhyanga is an Ayurvedic external oil practice. Oils, technique and session format should be selected for the individual rather than treated as a one-size-fits-all service.",
    suitableFor: "People for whom external oil application is considered appropriate after assessment.",
    approach: [
      "Discuss sensitivities, skin concerns and relevant conditions",
      "Select an appropriate oil and session format",
      "Share practical after-care guidance",
    ],
    note: "Please disclose allergies, pregnancy, recent procedures or acute symptoms before care.",
  },
  {
    slug: "shirodhara",
    title: "Shirodhara",
    eyebrow: "Focused traditional therapy",
    summary:
      "A traditional practice involving a controlled stream of warm liquid, offered only when considered suitable.",
    description:
      "Shirodhara is publicly listed among the clinic's traditional therapies. A practitioner should determine suitability, medium, temperature and duration after consultation.",
    suitableFor: "Individuals assessed for this specific traditional therapy.",
    approach: [
      "Confirm health history and present comfort",
      "Plan temperature, duration and materials",
      "Monitor comfort throughout the session",
    ],
    note: "This service is not a substitute for evaluation or treatment of neurological, psychiatric or sleep disorders.",
  },
  {
    slug: "pinda-sveda",
    title: "Pinda Sveda",
    eyebrow: "Herbal warmth therapy",
    summary:
      "A traditional external application using warmed herbal poultices, adapted to the individual.",
    description:
      "Pinda Sveda uses prepared herbal bundles as part of a warm external therapy. Ingredients, heat and technique require professional judgement and careful screening.",
    suitableFor: "People assessed for a local or whole-body external warmth practice.",
    approach: [
      "Review heat sensitivity and relevant medical history",
      "Select ingredients and method for the individual",
      "Check skin and comfort throughout the session",
    ],
    note: "Acute inflammation, altered sensation and some health conditions may make heat therapies unsuitable.",
  },
  {
    slug: "neurological-recovery-support",
    title: "Neurological Recovery Support",
    eyebrow: "Complementary support",
    summary:
      "Supportive Ayurvedic and lifestyle care for people living with paralysis or recovering after stroke.",
    description:
      "The clinic publicly describes care for paralysis and post-stroke recovery. On this demo, that care is presented only as complementary support alongside diagnosis, rehabilitation and prescribed treatment from the person's medical team.",
    suitableFor: "People with a confirmed diagnosis who are already under appropriate medical care.",
    approach: [
      "Coordinate around existing medical and rehabilitation plans",
      "Discuss safe, supportive routines and external therapies",
      "Review comfort and goals without promising outcomes",
    ],
    note: "Stroke symptoms are an emergency. Seek immediate hospital care; do not delay emergency treatment.",
  },
  {
    slug: "child-development-support",
    title: "Child Development Support",
    eyebrow: "Family-centred support",
    summary:
      "Gentle, family-centred supportive care for children with developmental or attention-related needs.",
    description:
      "The reference website mentions Autism and ADHD. Any Ayurvedic input should be complementary, age-appropriate and coordinated with the child's paediatric, developmental and educational care.",
    suitableFor: "Families seeking an additional supportive conversation alongside established professional care.",
    approach: [
      "Listen to the child and family's priorities",
      "Review routines, sensitivities, food and sleep",
      "Keep recommendations practical and coordinated",
    ],
    note: "No therapy on this site is presented as a cure for Autism, ADHD or another developmental condition.",
  },
  {
    slug: "chronic-condition-support",
    title: "Chronic Condition Support",
    eyebrow: "Care alongside medical treatment",
    summary:
      "A measured, complementary approach for people managing long-term health conditions.",
    description:
      "The clinic's public website mentions liver disease, kidney disease and cancer support. These serious conditions require specialist medical care. Ayurvedic or lifestyle support should never replace, interrupt or delay prescribed treatment.",
    suitableFor: "People under the active care of an appropriate medical specialist.",
    approach: [
      "Review diagnoses, medicines and current treatment",
      "Avoid conflict with prescribed clinical care",
      "Focus on safe routines and general wellbeing goals",
    ],
    note: "Always obtain approval from your treating specialist before adding herbs, supplements or restrictive diets.",
  },
];

export const eventOfferings: EventOffering[] = [
  {
    title: "Swarna Bindu Prashana",
    rhythm: "Every Pushyami Nakshatra",
    audience: "Children from 15 days to 16 years",
    description:
      "A traditional Ayurvedic childhood-care offering prepared and shared with attention to quality and tradition.",
  },
  {
    title: "Pournami Prasadam",
    rhythm: "Every Pournami",
    audience: "Adults and children",
    description:
      "A traditional community offering associated with the full moon, prayer, gratitude and collective wellbeing.",
  },
  {
    title: "Amavasya Theertham",
    rhythm: "Every Amavasya",
    audience: "Adults and children",
    description:
      "A traditional new-moon offering associated with reflection, renewal and spiritual wellbeing.",
  },
];

export const getTreatment = (slug: string) =>
  treatments.find((treatment) => treatment.slug === slug);

