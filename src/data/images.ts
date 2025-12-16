import type { StaticImageData } from "next/image";
import about from "../assets/images/about.jpg";
import about2 from "../assets/images/about-2.jpg";
import bg1 from "../assets/images/bg_1.jpg";
import bg2 from "../assets/images/bg_2.jpg";
import bg3 from "../assets/images/bg_3.jpg";
import bg5 from "../assets/images/bg_5.jpg";
import heroSlide1 from "../assets/images/new-images/hero-slider-image-1.jpg";
import heroSlide2 from "../assets/images/new-images/hero-slider-image-2.jpg";
import heroSlide3 from "../assets/images/new-images/hero-slider-image-3.jpg";
import mhsEducation from "../assets/images/new-images/mhseducation.jpeg";
import bgRemovedLogo from "../assets/images/new-images/bg-removed-logo.png";
import uk from "../assets/images/new-images/uk.jpg";
import manUsing from "../assets/images/new-images/man-using.jpg";
import course1 from "../assets/images/course-1.jpg";
import course2 from "../assets/images/course-2.jpg";
import course3 from "../assets/images/course-3.jpg";
import course4 from "../assets/images/course-4.jpg";
import course5 from "../assets/images/course-5.jpg";
import course6 from "../assets/images/course-6.jpg";
import course7 from "../assets/images/course-7.jpg";
import course8 from "../assets/images/course-8.jpg";
import image1 from "../assets/images/image_1.jpg";
import image2 from "../assets/images/image_2.jpg";
import image3 from "../assets/images/image_3.jpg";
import image4 from "../assets/images/image_4.jpg";
import image5 from "../assets/images/image_5.jpg";
import teacher1 from "../assets/images/teacher-1.jpg";
import teacher2 from "../assets/images/teacher-2.jpg";
import teacher3 from "../assets/images/teacher-3.jpg";
import teacher4 from "../assets/images/teacher-4.jpg";

const toSrc = (img: StaticImageData | string) =>
  typeof img === "string" ? img : img.src;

const rawImages = {
  about,
  about2,
  bg1,
  bg2,
  bg3,
  bg5,
  heroSlide1,
  heroSlide2,
  heroSlide3,
  mhsEducation,
  bgRemovedLogo,
  uk,
  manUsing,
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
  course7,
  course8,
  image1,
  image2,
  image3,
  image4,
  image5,
  teacher1,
  teacher2,
  teacher3,
  teacher4,
} as const;

export const images: Record<keyof typeof rawImages, string> =
  Object.fromEntries(
    Object.entries(rawImages).map(([key, value]) => [key, toSrc(value)])
  ) as Record<keyof typeof rawImages, string>;

export type ImageKey = keyof typeof images;
