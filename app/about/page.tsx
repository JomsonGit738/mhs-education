import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { AboutPage } from '../../src/views/AboutPage';
import { buildBreadcrumbSchema } from '../../src/lib/seo';

export const metadata: Metadata = {
  title: 'About MHS Education | Mission, Team and Values',
  description:
    'Learn about MHS Education, our mission, our team, and the values that shape the admissions guidance we provide to students across the UK.',
  keywords: [
    'about MHS Education',
    'education consultancy team',
    'student guidance mission',
    'UK admissions support',
    'education values',
  ],
  alternates: {
    canonical: 'https://www.mhseducation.co.uk/about',
  },
  openGraph: {
    title: 'About MHS Education | Mission, Team and Values',
    description:
      'Learn about MHS Education, our mission, our team, and the values that shape the admissions guidance we provide to students across the UK.',
    url: 'https://www.mhseducation.co.uk/about',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About MHS Education',
          url: 'https://www.mhseducation.co.uk/about',
          description:
            "Learn about MHS Education's mission, team, and commitment to helping students achieve their academic and career goals in the UK.",
          publisher: {
            '@type': 'EducationalOrganization',
            name: 'MHS Education',
            url: 'https://www.mhseducation.co.uk',
          },
        }}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About MHS Education', path: '/about' },
        ])}
      />
      <AboutPage />
    </>
  );
}
