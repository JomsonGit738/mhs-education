import Link from 'next/link';
import { CoursesSection } from '../components/CoursesSection';
import { PageHero } from '../components/PageHero';
import { courses, pageHero } from '../data/content';
import { images } from '../data/images';

type CoursesPageProps = {
  query?: string;
};

export const CoursesPage = ({ query = '' }: CoursesPageProps) => {
  const normalizedQuery = query.trim().toLowerCase();

  const filteredCourses = normalizedQuery
    ? courses.filter((course) =>
        [course.title, course.teacher, course.seats, course.duration, course.description]
          .join(' ')
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : courses;

  return (
    <>
      <PageHero title={pageHero.courses.title} breadcrumb={pageHero.courses.breadcrumb} background={images.uk} />
      <CoursesSection
        title={
          normalizedQuery ? (
            <span>
              Search Results for <span>&quot;{query}&quot;</span>
            </span>
          ) : (
            <span>
              Explore <span>Our Programmes</span>
            </span>
          )
        }
        description={
          normalizedQuery
            ? `Browse matching programmes and refine your search by trying course names, durations, or study routes.`
            : 'Review a broader set of study options across foundation, undergraduate, postgraduate, diploma, and top-up routes, each supported with admissions guidance tailored to your goals.'
        }
        items={filteredCourses}
        sectionClassName="courses-catalog-section"
        cardClassName="courses-catalog-card"
        emptyState={
          <div>
            <p className="mb-3 text-secondary">No programmes matched &quot;{query}&quot;.</p>
            <Link href="/courses" className="btn btn-outline-primary px-4 py-3">
              View All Programmes
            </Link>
          </div>
        }
      />
    </>
  );
};
