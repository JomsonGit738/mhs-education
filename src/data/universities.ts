import type { StaticImageData } from "next/image";
import angliaRuskinLogo from "../assets/images/universities/aru-logo.png";
import ardenLogo from "../assets/images/universities/arden-logo.svg";
import bathSpaUniversityLogo from "../assets/images/universities/Bath-Spa-University.svg";
import canterburyLogo from "../assets/images/universities/caterbury-christ-church-dark.svg";
import londonMetLogo from "../assets/images/universities/london-metropolitan-university-logo.svg";
import roehamptonLogo from "../assets/images/universities/roehampton-logo-trans.svg";
import ugmLogo from "../assets/images/universities/ugm-logo.png";
import ukManagementCollegeLogo from "../assets/images/universities/uk_management_college_logo.jpeg";
import universityOfLawLogo from "../assets/images/universities/ulaw-logo.svg";
import universityOfSuffolkLogo from "../assets/images/universities/University-of-Suffolk-UoS-logo.png";
import uwsLogo from "../assets/images/universities/uws.svg";
import wolverhamptonLogo from "../assets/images/universities/wolverhampton_logo.svg";

export type UniversityLogo = {
  name: string;
  logo: StaticImageData;
  category: string;
  scale: number;
};

export const universityLogos: UniversityLogo[] = [
  // Adjust `scale` to visually normalize logos with different built-in whitespace.
  {
    name: "Anglia Ruskin University",
    logo: angliaRuskinLogo,
    category: "University",
    scale: 1.2,
  },
  {
    name: "Arden University",
    logo: ardenLogo,
    category: "University",
    scale: 0.9,
  },
  {
    name: "Bath Spa University",
    logo: bathSpaUniversityLogo,
    category: "University",
    scale: 0.5,
  },
  {
    name: "Canterbury Christ Church University",
    logo: canterburyLogo,
    category: "University",
    scale: 1.3,
  },
  {
    name: "London Metropolitan University",
    logo: londonMetLogo,
    category: "University",
    scale: 0.8,
  },
  {
    name: "University of Roehampton",
    logo: roehamptonLogo,
    category: "University",
    scale: 1,
  },
  { name: "UGM", logo: ugmLogo, category: "Partner", scale: 1.7 },
  {
    name: "UK Management College",
    logo: ukManagementCollegeLogo,
    category: "College",
    scale: 1.3,
  },
  {
    name: "University of Law",
    logo: universityOfLawLogo,
    category: "University",
    scale: 1.1,
  },
  {
    name: "University of Suffolk",
    logo: universityOfSuffolkLogo,
    category: "University",
    scale: 0.6,
  },
  { name: "UWS", logo: uwsLogo, category: "University", scale: 0.7 },
  {
    name: "University of Wolverhampton",
    logo: wolverhamptonLogo,
    category: "University",
    scale: 0.8,
  },
];
