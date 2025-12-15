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
  tagline: "University",
  logo: images.bgRemovedLogo,
  email: "youremail@email.com",
  phone: "+ 1235 2355 98",
  address: "203 Fake St. Mountain View, San Francisco, California, USA",
  shortPhone: "+2 392 3929 210",
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Staff", path: "/teacher" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const heroSlides: HeroSlide[] = [
  {
    title: "University, College School Education",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.heroSlide3,
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  {
    title: "Education Needs Complete Solution",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.heroSlide1,
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
  {
    title: "University, College School Education",
    description:
      "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.heroSlide2,
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
  },
];

export const services: Service[] = [
  {
    title: "Certified Teachers",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: "flaticon-teacher",
    tone: "primary",
  },
  {
    title: "Special Education",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: "flaticon-reading",
    tone: "dark",
  },
  {
    title: "Book & Library",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: "flaticon-books",
    tone: "primary",
  },
  {
    title: "Sport Clubs",
    description:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    icon: "flaticon-diploma",
    tone: "dark",
  },
];

export const offerings: Offering[] = [
  {
    title: "Safety First",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: "flaticon-security",
  },
  {
    title: "Regular Classes",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: "flaticon-reading",
  },
  {
    title: "Certified Teachers",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: "flaticon-diploma",
  },
  {
    title: "Sufficient Classrooms",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: "flaticon-education",
  },
  {
    title: "Creative Lessons",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: "flaticon-jigsaw",
  },
  {
    title: "Sports Facilities",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia.",
    icon: "flaticon-kids",
  },
];

export const stats: Stat[] = [
  { label: "Certified Teachers", value: 18, icon: "flaticon-doctor" },
  { label: "Students", value: 401, icon: "flaticon-doctor" },
  { label: "Courses", value: 30, icon: "flaticon-doctor" },
  { label: "Awards Won", value: 50, icon: "flaticon-doctor" },
];

export const courses: Course[] = [
  {
    id: "course-1",
    title: "Electric Engineering",
    teacher: "Mr. Khan",
    seats: "10 seats",
    duration: "4 Years",
    description:
      "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.course1,
  },
  {
    id: "course-2",
    title: "Electric Engineering",
    teacher: "Mr. Khan",
    seats: "10 seats",
    duration: "4 Years",
    description:
      "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.course2,
  },
  {
    id: "course-3",
    title: "Electric Engineering",
    teacher: "Mr. Khan",
    seats: "10 seats",
    duration: "4 Years",
    description:
      "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.course3,
  },
  {
    id: "course-4",
    title: "Electric Engineering",
    teacher: "Mr. Khan",
    seats: "10 seats",
    duration: "4 Years",
    description:
      "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.course4,
  },
  {
    id: "course-5",
    title: "Electric Engineering",
    teacher: "Mr. Khan",
    seats: "10 seats",
    duration: "4 Years",
    description:
      "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.course5,
  },
  {
    id: "course-6",
    title: "Electric Engineering",
    teacher: "Mr. Khan",
    seats: "10 seats",
    duration: "4 Years",
    description:
      "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.course6,
  },
  {
    id: "course-7",
    title: "Electric Engineering",
    teacher: "Mr. Khan",
    seats: "10 seats",
    duration: "4 Years",
    description:
      "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.course7,
  },
  {
    id: "course-8",
    title: "Electric Engineering",
    teacher: "Mr. Khan",
    seats: "10 seats",
    duration: "4 Years",
    description:
      "Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    image: images.course8,
  },
];

export const teachers: Teacher[] = [
  {
    name: "Bianca Wilson",
    role: "Teacher",
    image: images.teacher1,
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
  {
    name: "Mitch Parker",
    role: "English Teacher",
    image: images.teacher2,
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
  {
    name: "Stella Smith",
    role: "Art Teacher",
    image: images.teacher3,
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
    socials: [
      { icon: "icon-twitter", href: "#" },
      { icon: "icon-facebook", href: "#" },
      { icon: "icon-google-plus", href: "#" },
      { icon: "icon-instagram", href: "#" },
    ],
  },
  {
    name: "Monshe Henderson",
    role: "Science Teacher",
    image: images.teacher4,
    bio: "I am an ambitious workaholic, but apart from that, pretty simple person.",
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
    name: "Racky Henderson",
    role: "Father",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: images.teacher1,
  },
  {
    name: "Henry Dee",
    role: "Mother",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: images.teacher2,
  },
  {
    name: "Mark Huff",
    role: "Mother",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: images.teacher3,
  },
  {
    name: "Rodel Golez",
    role: "Mother",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: images.teacher4,
  },
  {
    name: "Ken Bosh",
    role: "Mother",
    quote:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: images.teacher1,
  },
];

export const blogs: BlogPost[] = [
  {
    id: "skills-develop-memory-1",
    title: "Skills To Develop Your Child Memory",
    author: "Admin",
    date: "June 26, 2019",
    comments: 3,
    image: images.image1,
    excerpt:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    tags: ["Life", "Sport", "Tech", "Travel"],
  },
  {
    id: "skills-develop-memory-2",
    title: "Skills To Develop Your Child Memory",
    author: "Admin",
    date: "June 26, 2019",
    comments: 3,
    image: images.image2,
    excerpt:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    tags: ["Life", "Sport", "Tech", "Travel"],
  },
  {
    id: "skills-develop-memory-3",
    title: "Skills To Develop Your Child Memory",
    author: "Admin",
    date: "June 26, 2019",
    comments: 3,
    image: images.image3,
    excerpt:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    tags: ["Life", "Sport", "Tech", "Travel"],
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
    content: "198 West 21th Street, Suite 721 New York NY 10016",
  },
  {
    title: "Contact Number",
    content: "+ 1235 2355 98",
    href: "tel://1234567920",
  },
  {
    title: "Email Address",
    content: "info@yoursite.com",
    href: "mailto:info@yoursite.com",
  },
  { title: "Website", content: "yoursite.com", href: "#" },
];

export const quoteCourseOptions = [
  "Select Your Course",
  "Art Lesson",
  "Language Lesson",
  "Music Lesson",
  "Sports",
  "Other Services",
];

export const pageHero = {
  about: { title: "About Us", breadcrumb: "About us" },
  courses: { title: "Courses", breadcrumb: "Courses" },
  teacher: { title: "Staff", breadcrumb: "Staff" },
  blog: { title: "Blog", breadcrumb: "Blog" },
  blogSingle: { title: "Blog Single", breadcrumb: "Blog Single" },
  contact: { title: "Contact Us", breadcrumb: "Contact" },
};

export const blogDetail = {
  slug: "creative-wordpress-themes",
  title: "#2. Creative WordPress Themes",
  heroImage: images.image2,
  body: [
    "Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.",
    "Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.",
    "Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni.",
    "Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum.",
    "Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore.",
  ],
  tags: ["Life", "Sport", "Tech", "Travel"],
  author: {
    name: "George Washington",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique.",
    avatar: images.teacher1,
  },
  comments: [
    {
      id: "c1",
      author: "John Doe",
      date: "June 27, 2019 at 2:21pm",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus.",
      replies: [
        {
          id: "c1-1",
          author: "John Doe",
          date: "June 27, 2019 at 2:21pm",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus.",
          replies: [
            {
              id: "c1-1-1",
              author: "John Doe",
              date: "June 27, 2019 at 2:21pm",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus.",
              replies: [
                {
                  id: "c1-1-1-1",
                  author: "John Doe",
                  date: "June 27, 2019 at 2:21pm",
                  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus.",
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
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus.",
    },
    {
      id: "c3",
      author: "John Doe",
      date: "June 27, 2019 at 2:21pm",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus.",
    },
  ] as Comment[],
  categories: [
    { label: "Art", total: 6 },
    { label: "Sports", total: 8 },
    { label: "Language", total: 2 },
    { label: "Food", total: 2 },
    { label: "Music", total: 2 },
  ],
  popular: [
    {
      id: "popular-1",
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      author: "Dave Lewis",
      date: "June 27, 2019",
      comments: 19,
      image: images.image1,
      excerpt: "",
    },
    {
      id: "popular-2",
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      author: "Dave Lewis",
      date: "June 27, 2019",
      comments: 19,
      image: images.image2,
      excerpt: "",
    },
    {
      id: "popular-3",
      title:
        "Even the all-powerful Pointing has no control about the blind texts",
      author: "Dave Lewis",
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
    "School",
    "Kids",
    "Nursery",
    "Daycare",
    "Care",
    "Kindergarten",
    "Teacher",
  ],
  sidebarText:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!",
};
