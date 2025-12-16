import { images } from "./images";

export type HeroSlide = {
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
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
  { label: "About", path: "/about" },
  { label: "Programmes", path: "/courses" },
  { label: "Student Services", path: "/teacher" },
  { label: "Insights", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    title: "Personalised UK Admissions Guidance",
    description: "We connect ambitious students with leading UK universities through tailored shortlisting and attentive advice.",
    image: images.heroSlide1,
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  {
    title: "Your Pathway to UK Campuses",
    description: "From foundation to postgraduate study, we manage UCAS and direct applications, documentation, and deadlines with care.",
    image: images.heroSlide1,
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  {
    title: "Comprehensive UK Student Support",
    description: "Visa guidance, scholarship advice, accommodation support, and pre-departure briefings keep you confident for the UK.",
    image: images.heroSlide2,
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
];

export const services: Service[] = [
  {
    title: "University Applications",
    description: "Course shortlisting, profile positioning, and offer follow-up with personalised guidance.",
    icon: "flaticon-diploma",
    tone: "primary",
  },
  {
    title: "Visa & Compliance",
    description: "Step-by-step support for visa preparation, documentation checks, and interview readiness.",
    icon: "flaticon-security",
    tone: "dark",
  },
  {
    title: "Scholarships & Finance",
    description: "Scholarship guidance plus student finance advice to help you plan with confidence.",
    icon: "flaticon-reading",
    tone: "primary",
  },
  {
    title: "Student Support",
    description: "Accommodation guidance, travel planning, and pre-departure briefings for a smooth arrival.",
    icon: "flaticon-kids",
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
  { label: "Qualification Pathways", value: 4, icon: "flaticon-doctor" },
  { label: "Annual Intakes", value: 3, icon: "flaticon-doctor" },
  { label: "Complimentary Support", value: 100, icon: "flaticon-doctor" },
  { label: "Students Guided", value: 500, icon: "flaticon-doctor" },
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
    id: "programme-short",
    title: "Short Courses",
    teacher: "Admissions Team",
    seats: "Flexible starts",
    duration: "Flexible",
    description:
      "Career-focused short programmes with guidance on the right fit, prerequisites, and application steps.",
    image: images.course4,
  },
  {
    id: "programme-visa",
    title: "Visa Guidance",
    teacher: "Student Services",
    seats: "By appointment",
    duration: "Ongoing",
    description:
      "Document checklists, interview preparation, and compliance support so you travel with confidence.",
    image: images.course5,
  },
  {
    id: "programme-support",
    title: "Student Support",
    teacher: "Student Services",
    seats: "On demand",
    duration: "Ongoing",
    description:
      "Accommodation guidance, travel planning, pre-departure briefings, and on-arrival advice.",
    image: images.course6,
  },
];

export const teachers: Teacher[] = [
  {
    name: "MHS Admissions Team",
    role: "Senior Advisers",
    image: images.teacher1,
    bio: "Personalised course mapping, documentation support, and application follow-up for every student.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
  {
    name: "Visa & Compliance",
    role: "Student Services",
    image: images.teacher2,
    bio: "Visa preparation, timeline planning, and interview readiness to keep you compliant and confident.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
  {
    name: "Scholarships & Finance",
    role: "Advisory",
    image: images.teacher3,
    bio: "Funding pathways, scholarship guidance, and budgeting advice tailored to your destination.",
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
    bio: "Accommodation, travel, and pre-departure support to make your arrival smooth and stress-free.",
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
    image: images.teacher1,
  },
  {
    name: "Daniel",
    role: "Undergraduate Applicant",
    quote:
      "Clear timelines, strong personal statement feedback, and quick responses made my application stress-free. I secured multiple offers.",
    image: images.teacher2,
  },
  {
    name: "Priya",
    role: "Postgraduate Applicant",
    quote:
      "The team refined my SOP and coordinated references, which really elevated my masters application. Visa prep was straightforward too.",
    image: images.teacher3,
  },
  {
    name: "Ahmed",
    role: "Visa Support",
    quote:
      "Their document checklist and interview tips were invaluable. I felt confident through the visa process and travelled on time.",
    image: images.teacher4,
  },
  {
    name: "Lina",
    role: "Student Support",
    quote:
      "Accommodation guidance and pre-departure briefings took away all the uncertainty. I knew exactly what to expect on arrival.",
    image: images.teacher1,
  },
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
    title: "Strengthen Your University Application",
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
    title: "Visa Preparation Checklist for Students",
    author: "MHS Education",
    date: "December 01, 2024",
    comments: 2,
    image: images.image3,
    excerpt:
      "Stay compliant with a simple visa checklist that covers documents, timelines, and interview readiness.",
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
    content: "info@mhsglobalassociates.com",
    href: "mailto:info@mhsglobalassociates.com",
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
