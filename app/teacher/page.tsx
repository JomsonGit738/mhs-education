import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { TeachersPage } from '../../src/views/TeachersPage';
import { buildBreadcrumbSchema } from '../../src/lib/seo';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Teachers and Tutors | Meet the MHS Education Team',
  description:
    'Meet the teachers, tutors, and advisers at MHS Education and learn about the expertise they bring to student support and guidance.',
  keywords: [
    'teachers and tutors',
    'education advisers',
    'student support team',
    'MHS Education staff',
    'teaching expertise',
    'academic guidance',
  ],
  alternates: {
    canonical: 'https://www.mhseducation.co.uk/teacher',
  },
  openGraph: {
    title: 'Teachers and Tutors | Meet the MHS Education Team',
    description:
      'Meet the teachers, tutors, and advisers at MHS Education and learn about the expertise they bring to student support and guidance.',
    url: 'https://www.mhseducation.co.uk/teacher',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Teachers and Tutors at MHS Education',
          url: 'https://www.mhseducation.co.uk/teacher',
          description:
            'Meet the experienced teachers and tutors at MHS Education who guide students through their academic journeys.',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@type': 'Person',
                name: 'MHS Educator',
                worksFor: {
                  '@type': 'EducationalOrganization',
                  name: 'MHS Education',
                },
              },
            },
          ],
        }}
      />
      {/* TODO: replace itemListElement with actual teacher data from data source */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Student Services', path: '/teacher' },
        ])}
      />
      <TeachersPage />
    </>
  );
}
