import { CoursesSection } from '../components/CoursesSection';
import { PageHero } from '../components/PageHero';
import { courses, pageHero } from '../data/content';
import { images } from '../data/images';

export const CoursesPage = () => (
  <>
    <PageHero title={pageHero.courses.title} breadcrumb={pageHero.courses.breadcrumb} background={images.uk} />
    <CoursesSection items={courses} />
  </>
);
