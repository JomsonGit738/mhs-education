import { BlogSection } from '../components/BlogSection';
import { ContactInfo } from '../components/ContactInfo';
import { CoursesSection } from '../components/CoursesSection';
import { Gallery } from '../components/Gallery';
import { HeroSlider } from '../components/HeroSlider';
import { OfferSection } from '../components/OfferSection';
import { QuoteSection } from '../components/QuoteSection';
import { Services } from '../components/Services';
import { StatsSection } from '../components/StatsSection';
import { TeachersSection } from '../components/TeachersSection';
import { Testimonials } from '../components/Testimonials';
import { blogs, courses, teachers } from '../data/content';

export const HomePage = () => (
  <>
    <HeroSlider />
    <Services />
    <OfferSection />
    <StatsSection />
    <CoursesSection
      title={
        <span>
          Our <span>Courses</span>
        </span>
      }
      description="Explore programmes from foundation to postgraduate with tailored guidance on the right fit, timelines, and documentation."
      items={courses.slice(0, 4)}
    />
    <TeachersSection
      title="Student Services"
      description="Our advisory and student support teams coordinate applications, visas, scholarships, accommodation, and pre-departure prep."
      items={teachers}
    />
    <QuoteSection />
    <BlogSection
      title={
        <span>
          Recent <span>Blog</span>
        </span>
      }
      description="Get admissions tips, visa checklists, and planning advice from the MHS Education team."
      posts={blogs}
    />
    <Testimonials />
    <Gallery />
    <ContactInfo />
  </>
);
