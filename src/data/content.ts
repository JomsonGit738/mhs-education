import { images } from "./images";

export type HeroSlide = {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
  // Optional secondary CTA lets us surface “Book a Free Consultation”
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  tone: "primary" | "dark";
};

export type Offering = {
  title: string;
  description: string;
  icon: string;
};

export type Stat = {
  label: string;
  value: number;
  icon: string;
  suffix?: string;
};

export type Course = {
  id: string;
  title: string;
  teacher: string;
  seats: string;
  duration: string;
  description: string;
  image: string;
};

export type SocialLink = {
  icon: string;
  href: string;
};
// Social link metadata supports footer/contact reuse
export const socialLinks: SocialLink[] = [
  { icon: "icon-facebook", href: "#" },
  { icon: "icon-instagram", href: "#" },
  { icon: "icon-linkedin", href: "#" },
  { icon: "icon-twitter", href: "#" }, // Using twitter icon to represent X until an X glyph is provided
];

export type Teacher = {
  name: string;
  role: string;
  image: string;
  bio: string;
  socials: SocialLink[];
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type BlogPost = {
  id: string;
  title: string;
  author: string;
  date: string;
  comments: number;
  image: string;
  excerpt: string;
  tags?: string[];
};

export type GalleryItem = {
  image: string;
};

export type ContactCard = {
  title: string;
  content: string;
  href?: string;
};

export type Comment = {
  id: string;
  author: string;
  date: string;
  text: string;
  replies?: Comment[];
};

export type Partner = {
  name: string;
  logo: string;
};

export const brand = {
  name: "MHS Education",
  tagline: "Admissions Guidance",
  logo: images.bgRemovedLogo,
  email: "info@mhseducation.com",
  phone: "07521772131",
  address: "MHS Education, Suite F5, New Road Business Centre, 109 New Road, Whitechapel, E1 1HJ",
  shortPhone: "07521772131",
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "Services", path: "/services" },
  { label: "Career", path: "/career" },
  { label: "About us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    title: "Admission for May/June Intake",
    description: "Mapping Higher Success with tailored UK admission pathways and documentation support.",
    image: images.heroSlide1,
    ctaLabel: "Apply Now",
    ctaHref: "/contact",
    secondaryCtaLabel: "Book a Free Consultation",
    secondaryCtaHref: "/contact",
  },
  {
    title: "Your Pathway to UK Campuses",
    description: "Foundation, undergraduate, postgraduate, diploma, and top-up guidance with clear timelines.",
    image: images.heroSlide2,
    ctaLabel: "Apply Now",
    ctaHref: "/contact",
    secondaryCtaLabel: "Book a Free Consultation",
    secondaryCtaHref: "/contact",
  },
  {
    title: "Comprehensive UK Student Support",
    description: "Visa, finance, interview prep, and arrival support so every milestone stays on track.",
    image: images.heroSlide3,
    ctaLabel: "Apply Now",
    ctaHref: "/contact",
    secondaryCtaLabel: "Book a Free Consultation",
    secondaryCtaHref: "/contact",
  },
];

// Services ordered to mirror the client’s list
export const services: Service[] = [
  {
    title: "Academic Guidance",
    description: "Course advice and pathway mapping so your UK plan fits your goals.",
    icon: "flaticon-reading",
    tone: "primary",
  },
  {
    title: "Application Support",
    description: "Hands-on help with documents, timelines, and submissions for every intake.",
    icon: "flaticon-diploma",
    tone: "dark",
  },
  {
    title: "Interview & Test Preparation",
    description: "Mock interviews and test readiness to present your best profile.",
    icon: "flaticon-kids",
    tone: "primary",
  },
  {
    title: "Student Finance Information",
    description: "Guidance on fees, funding options, and budgeting for UK study.",
    icon: "flaticon-security",
    tone: "dark",
  },
  {
    title: "CV/PS Guidance",
    description: "Targeted feedback on CVs and personal statements to strengthen offers.",
    icon: "flaticon-teacher",
    tone: "dark",
  },
];

export const offerings: Offering[] = [
  {
    title: "Foundation Programmes",
    description: "Start strong with tailored foundation options that bridge you into UK undergraduate degrees.",
    icon: "flaticon-education",
  },
  {
    title: "Undergraduate Degrees",
    description: "Match your ambitions with courses at leading UK universities.",
    icon: "flaticon-reading",
  },
  {
    title: "Postgraduate Degrees",
    description: "Shape your specialism with masters pathways that strengthen your UK career prospects.",
    icon: "flaticon-diploma",
  },
  {
    title: "Short Courses",
    description: "Upskill quickly with career-focused short courses and professional certificates.",
    icon: "flaticon-jigsaw",
  },
  {
    title: "Visa Guidance",
    description: "Stay compliant with documentation checks, timelines, and interview preparation.",
    icon: "flaticon-security",
  },
  {
    title: "Scholarship Support",
    description: "Identify funding options and strengthen applications for financial aid.",
    icon: "flaticon-teacher",
  },
];

export const stats: Stat[] = [
  { label: "Students", value: 1000, suffix: "+", icon: "flaticon-doctor" },
  { label: "Courses", value: 50, suffix: "+", icon: "flaticon-doctor" },
  { label: "Partners", value: 10, suffix: "+", icon: "flaticon-doctor" },
];

export const courses: Course[] = [
  {
    id: "programme-foundation",
    title: "Foundation Programmes",
    teacher: "Admissions Team",
    seats: "Multiple intakes",
    duration: "1 Year",
    description:
      "Bridge to undergraduate study with guided course selection, documentation checks, and application submission.",
    image: images.course1,
  },
  {
    id: "programme-undergraduate",
    title: "Undergraduate Degrees",
    teacher: "Admissions Team",
    seats: "Rolling placements",
    duration: "3-4 Years",
    description:
      "Personalised shortlisting and application guidance to secure competitive offers at leading universities.",
    image: images.course2,
  },
  {
    id: "programme-postgraduate",
    title: "Postgraduate Degrees",
    teacher: "Admissions Team",
    seats: "Limited cohorts",
    duration: "1-2 Years",
    description:
      "Strengthen your profile with tailored statements, references, and timeline management for masters admissions.",
    image: images.course3,
  },
  {
    id: "programme-diploma",
    title: "Diploma Programmes",
    teacher: "Admissions Team",
    seats: "Multiple intakes",
    duration: "1-2 Years",
    description: "Career-focused diplomas with support on entry criteria, statements, and timely submissions.",
    image: images.course4,
  },
  {
    id: "programme-topup",
    title: "Top-up Degrees",
    teacher: "Admissions Team",
    seats: "Limited cohorts",
    duration: "1 Year",
    description: "Top-up guidance to complete your honours degree with the right UK university fit.",
    image: images.course5,
  },
];

export const teachers: Teacher[] = [
  {
    name: "Admissions Guidance",
    role: "UK Advisers",
    image: images.teacher1,
    bio: "UCAS and direct-apply support with tailored shortlisting, personal statement feedback, and offer follow-up for UK universities.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
  {
    name: "Visa & Compliance",
    role: "UKVI Support",
    image: images.teacher2,
    bio: "UKVI-focused checklists, CAS coordination, and interview readiness so your student visa stays on track.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
  {
    name: "Finance & Scholarships",
    role: "Funding Advisory",
    image: images.teacher3,
    bio: "Student finance, bursary, and scholarship guidance with budgeting advice for living and studying in the UK.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
  {
    name: "Student Support",
    role: "Experience Team",
    image: images.teacher4,
    bio: "Accommodation search, travel planning, NHS/GP and banking guidance, and pre-arrival briefings for a smooth UK landing.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Saira",
    role: "Foundation Student",
    quote:
      "They helped me shortlist the right foundation programme and guided every document. I received my offer quickly and felt supported the whole time.",
    image: images.personSaira,
  },
  {
    name: "Daniel",
    role: "Undergraduate Applicant",
    quote:
      "Clear timelines, strong personal statement feedback, and quick responses made my application stress-free. I secured multiple offers.",
    image: images.personDaniel,
  },
  {
    name: "Priya",
    role: "Postgraduate Applicant",
    quote:
      "The team refined my SOP and coordinated references, which really elevated my masters application. Visa prep was straightforward too.",
    image: images.personPriya,
  },
  {
    name: "Ahmed",
    role: "Visa Support",
    quote:
      "Their document checklist and interview tips were invaluable. I felt confident through the visa process and travelled on time.",
    image: images.personAhmed,
  },
  {
    name: "Lina",
    role: "Student Support",
    quote:
      "Accommodation guidance and pre-departure briefings took away all the uncertainty. I knew exactly what to expect on arrival.",
    image: images.personLina,
  },
];

export const partners: Partner[] = [
  // Placeholder logos reused from existing assets until brand logos are supplied.
  { name: "Partner 1", logo: images.image1 },
  { name: "Partner 2", logo: images.image2 },
  { name: "Partner 3", logo: images.image3 },
  { name: "Partner 4", logo: images.image4 },
  { name: "Partner 5", logo: images.image5 },
  { name: "Partner 6", logo: images.heroSlide1 },
  { name: "Partner 7", logo: images.heroSlide2 },
  { name: "Partner 8", logo: images.heroSlide3 },
  { name: "Partner 9", logo: images.uk },
  { name: "Partner 10", logo: images.mhsEducation },
];

export const blogs: BlogPost[] = [
  {
    id: "plan-your-study-path",
    title: "Plan Your UK Study Pathway",
    author: "MHS Education",
    date: "October 10, 2024",
    comments: 3,
    image: images.image1,
    excerpt:
      "How to shortlist UK universities, align intakes, and prepare documents early so your application stays ahead of deadlines.",
    tags: ["Admissions", "Planning", "Guidance"],
  },
  {
    id: "strengthen-application",
    title: "Strengthen Your UK University Application",
    author: "MHS Education",
    date: "November 04, 2024",
    comments: 5,
    image: images.image2,
    excerpt:
      "Tips for crafting a compelling personal statement, coordinating references, and presenting your profile clearly to decision makers.",
    tags: ["Admissions", "Personal Statement", "Offers"],
  },
  {
    id: "visa-checklist",
    title: "UK Visa Preparation Checklist for Students",
    author: "MHS Education",
    date: "December 01, 2024",
    comments: 2,
    image: images.image3,
    excerpt:
      "Stay compliant with a UK student visa checklist that covers documents, CAS timelines, and interview readiness.",
    tags: ["Visa", "Compliance", "Student Support"],
  },
];

export const gallery: GalleryItem[] = [
  { image: images.course1 },
  { image: images.image2 },
  { image: images.image3 },
  { image: images.image4 },
];

export const contactCards: ContactCard[] = [
  {
    title: "Address",
    content: "Suite F5, New Road Business Centre, 109 New Road, Whitechapel, E1 1HJ",
  },
  {
    title: "Contact Number",
    content: "07521772131",
    href: "tel://07521772131",
  },
  {
    title: "Email Address",
    content: "info@mhseducation.com",
    href: "mailto:info@mhseducation.com",
  },
  { title: "Website", content: "mhsglobalassociates.com", href: "https://www.mhsglobalassociates.com" },
];

export const quoteCourseOptions = [
  "Select Your Support Need",
  "Foundation Programmes",
  "Undergraduate Applications",
  "Postgraduate Applications",
  "Visa Guidance",
  "Scholarship Support",
  "Student Support",
];

export const pageHero = {
  about: { title: "About MHS Education", breadcrumb: "About" },
  courses: { title: "Programmes", breadcrumb: "Programmes" },
  teacher: { title: "Student Services", breadcrumb: "Student Services" },
  services: { title: "Services", breadcrumb: "Services" },
  blog: { title: "Insights", breadcrumb: "Insights" },
  blogSingle: { title: "Insight Detail", breadcrumb: "Insight" },
  contact: { title: "Contact Us", breadcrumb: "Contact" },
};

export const blogDetail = {
  slug: "personalised-admissions-roadmap",
  title: "Your Personalised Admissions Roadmap",
  heroImage: images.heroSlide2,
  body: [
    "Personalised admissions planning starts with listening to your goals, budget, and timelines. We shortlist programmes that align with your strengths and preferences, then guide you through documentation and deadlines.",
    "Clear, concise personal statements, verified references, and organised paperwork help decision makers understand your profile. We iterate quickly so you submit with confidence.",
    "Beyond the offer, our team supports visa preparation, scholarship guidance, accommodation advice, and pre-departure briefings so you arrive ready for success.",
  ],
  tags: ["Admissions", "Planning", "Visa"],
  author: {
    name: "MHS Education",
    bio: "Our advisers connect students with leading UK universities through attentive, personalised guidance.",
    avatar: images.teacher1,
  },
  comments: [
    {
      id: "c1",
      author: "John Doe",
      date: "June 27, 2019 at 2:21pm",
      text: "How early should I start preparing for a January intake?",
      replies: [
        {
          id: "c1-1",
          author: "John Doe",
          date: "June 27, 2019 at 2:21pm",
          text: "We recommend beginning at least 4-6 months ahead to secure documents and manage deadlines.",
          replies: [
            {
              id: "c1-1-1",
              author: "John Doe",
              date: "June 27, 2019 at 2:21pm",
              text: "Thanks! Do you also review personal statements?",
              replies: [
                {
                  id: "c1-1-1-1",
                  author: "John Doe",
                  date: "June 27, 2019 at 2:21pm",
                  text: "Yes, we iterate on statements and references to strengthen applications.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "c2",
      author: "John Doe",
      date: "June 27, 2019 at 2:21pm",
      text: "Do you help with scholarship applications as well?",
    },
    {
      id: "c3",
      author: "John Doe",
      date: "June 27, 2019 at 2:21pm",
      text: "Is visa guidance included in your complimentary support?",
    },
  ] as Comment[],
  categories: [
    { label: "Admissions", total: 6 },
    { label: "Visa", total: 5 },
    { label: "Scholarships", total: 4 },
    { label: "Student Support", total: 3 },
    { label: "Planning", total: 2 },
  ],
  popular: [
    {
      id: "popular-1",
      title: "5 ways to strengthen your personal statement",
      author: "MHS Education",
      date: "June 27, 2019",
      comments: 19,
      image: images.image1,
      excerpt: "",
    },
    {
      id: "popular-2",
      title: "Visa interview tips for first-time applicants",
      author: "MHS Education",
      date: "June 27, 2019",
      comments: 19,
      image: images.image2,
      excerpt: "",
    },
    {
      id: "popular-3",
      title:
        "How to choose the right intake for your study plan",
      author: "MHS Education",
      date: "June 27, 2019",
      comments: 19,
      image: images.image3,
      excerpt: "",
    },
  ],
  archives: [
    { label: "December 2018", total: 30 },
    { label: "November 2018", total: 20 },
    { label: "September 2018", total: 6 },
    { label: "August 2018", total: 8 },
  ],
  tagCloud: [
    "Admissions",
    "Visa",
    "Scholarship",
    "Student Support",
    "Planning",
    "Applications",
    "Offers",
  ],
  sidebarText:
    "MHS Education provides personalised admissions guidance, visa support, and student services that carry you from enquiry to enrolment with confidence.",
};
