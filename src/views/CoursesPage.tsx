'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CoursesSection } from '../components/CoursesSection';
import { PageHero } from '../components/PageHero';
import { courses, pageHero } from '../data/content';
import { images } from '../data/images';

export const CoursesPage = () => {
  const searchParams = useSearchParams();
  const query = (searchParams.get('query') ?? '').trim();

  const filteredCourses = useMemo(() => {
    if (!query) {
      return courses;
    }

    const normalizedQuery = query.toLowerCase();

    return courses.filter((course) =>
      [course.title, course.teacher, course.seats, course.duration, course.description]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <>
      <PageHero title={pageHero.courses.title} breadcrumb={pageHero.courses.breadcrumb} background={images.uk} />
      <CoursesSection
        title={
          query ? (
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
          query
            ? `Browse matching programmes and refine your search by trying course names, durations, or study routes.`
            : 'Review a broader set of study options across foundation, undergraduate, postgraduate, diploma, and top-up routes, each supported with admissions guidance tailored to your goals.'
        }
        items={filteredCourses}
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
