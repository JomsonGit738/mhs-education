import { BlogSection } from '../components/BlogSection';
import { CoursesSection } from '../components/CoursesSection';
import { Gallery } from '../components/Gallery';
import { HeroSlider } from '../components/HeroSlider';
import { HomeAboutSection } from '../components/HomeAboutSection';
import { QuoteSection } from '../components/QuoteSection';
import { Services } from '../components/Services';
import { StatsSection } from '../components/StatsSection';
import { TeachersSection } from '../components/TeachersSection';
import { Testimonials } from '../components/Testimonials';
import { PartnersSection } from '../components/PartnersSection';
import { blogs, featuredCourses, teachers } from '../data/content';

export const HomePage = () => (
  <>
    <HeroSlider />
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
