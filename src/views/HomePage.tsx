import { BlogSection } from '../components/BlogSection';
import { CoursesSection } from '../components/CoursesSection';
import { Gallery } from '../components/Gallery';
import { HeroSection } from '../components/HeroSection';
import { HomeAboutSection } from '../components/HomeAboutSection';
import { QuoteSection } from '../components/QuoteSection';
import { Services } from '../components/Services';
import { StatsSection } from '../components/StatsSection';
import { TeachersSection } from '../components/TeachersSection';
import { Testimonials } from '../components/Testimonials';
import { PartnersSection } from '../components/PartnersSection';
import { blogs, featuredCourses, teachers } from '../data/content';
import heroSlide1 from '../assets/images/new-images/hero-slider-image-1.jpg';
import heroSlide2 from '../assets/images/new-images/hero-slider-image-2.jpg';
import heroSlide3 from '../assets/images/new-images/hero-slider-image-3.jpg';

const heroActions = [
  { text: 'Apply Now', href: '/contact', variant: 'primary' as const },
  { text: 'View Programmes', href: '/courses', variant: 'secondary' as const },
];

const heroTitles = [
  'Admission for May/June Intake',
  'Comprehensive UK Student Support',
  'Your Pathway to UK Campuses',
];

const heroImages = [
  { src: heroSlide1, alt: 'Students discussing study plans with guidance materials.' },
  { src: heroSlide2, alt: 'A student receiving one-to-one admissions support.' },
  { src: heroSlide3, alt: 'Collaborative session focused on UK study pathways.' },
];

export const HomePage = () => (
  <>
    <HeroSection
      rotatingTitles={heroTitles}
      subtitle="MHS Education helps students compare pathways, prepare stronger applications, and move through each intake with practical support from first shortlist to final offer."
      actions={heroActions}
      images={heroImages}
    />
    <Services />
    <HomeAboutSection />
    <StatsSection />
    <PartnersSection />
    <CoursesSection
      title={
        <span>
          Featured <span>Courses</span>
        </span>
      }
      description="Start with a focused overview of key study routes, then explore the full programmes page for broader options and detailed guidance."
      items={featuredCourses}
      cardHref="/courses"
      cardLabel="Explore Programme"
      sectionActionHref="/courses"
      sectionActionLabel="View All Programmes"
      sectionClassName="featured-courses-section"
      gridClassName="featured-courses-grid"
      cardClassName="featured-course-card"
    />
    <TeachersSection
      title="Student Services"
      description="Our advisory and student support teams coordinate applications, scholarships, and personalised guidance throughout the admissions journey."
      items={teachers}
    />
    <QuoteSection />
    <BlogSection
      title={
        <span>
          Recent <span>Blog</span>
        </span>
      }
      description="Get admissions tips, application checklists, and planning advice from the MHS Education team."
      posts={blogs}
    />
    <Testimonials />
    <Gallery />
  </>
);
