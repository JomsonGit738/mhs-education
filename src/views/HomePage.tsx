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
      description="Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country"
      items={courses.slice(0, 4)}
    />
    <TeachersSection
      title="Certified Teachers"
      description="Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country"
      items={teachers}
    />
    <QuoteSection />
    <BlogSection
      title={
        <span>
          Recent <span>Blog</span>
        </span>
      }
      description="Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country"
      posts={blogs}
    />
    <Testimonials />
    <Gallery />
    <ContactInfo />
  </>
);
