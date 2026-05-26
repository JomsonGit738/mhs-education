import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { CoursesPage } from '../../src/views/CoursesPage';
import { courses } from '../../src/data/content';
import { buildBreadcrumbSchema, buildCourseSchema } from '../../src/lib/seo';

type CoursesPageRouteProps = {
  searchParams?: {
    query?: string | string[];
  };
};

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Courses at MHS Education | Study Routes and Subjects',
  description:
    'Browse courses and study routes with guidance on subjects, entry paths, and options for students planning undergraduate or postgraduate study.',
  keywords: [
    'courses UK',
    'study routes',
    'foundation programmes',
    'undergraduate courses',
    'postgraduate courses',
    'subject guidance',
  ],
  alternates: {
    canonical: 'https://www.mhseducation.co.uk/courses',
  },
  openGraph: {
    title: 'Courses at MHS Education | Study Routes and Subjects',
    description:
      'Browse courses and study routes with guidance on subjects, entry paths, and options for students planning undergraduate or postgraduate study.',
    url: 'https://www.mhseducation.co.uk/courses',
  },
};

export default function Page({ searchParams }: CoursesPageRouteProps) {
  const query = Array.isArray(searchParams?.query) ? searchParams?.query[0] : searchParams?.query;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Courses at MHS Education',
          url: 'https://www.mhseducation.co.uk/courses',
          description:
            'Browse courses and educational programmes offered by MHS Education for students in the UK.',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Example Course',
              url: 'https://www.mhseducation.co.uk/courses/example',
            },
          ],
        }}
      />
      {/* TODO: replace itemListElement with dynamically fetched course data */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Courses', path: '/courses' },
        ])}
      />
      {courses.map((course) => (
        <JsonLd key={course.id} data={buildCourseSchema(course)} />
      ))}
      <CoursesPage query={query} />
    </>
  );
}
