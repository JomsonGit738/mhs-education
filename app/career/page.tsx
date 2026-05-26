import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { CareerPage } from "../../src/views/CareerPage";
import { buildBreadcrumbSchema } from '../../src/lib/seo';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Career Guidance | Student Advice and Opportunities',
  description:
    'Find career guidance, student advice, and useful opportunities to help you make informed decisions about study, progression, and future goals.',
  keywords: [
    'career guidance',
    'student advice',
    'career opportunities',
    'study progression',
    'education consultancy careers',
    'future planning',
  ],
  alternates: {
    canonical: 'https://www.mhseducation.co.uk/career',
  },
  openGraph: {
    title: 'Career Guidance | Student Advice and Opportunities',
    description:
      'Find career guidance, student advice, and useful opportunities to help you make informed decisions about study, progression, and future goals.',
    url: 'https://www.mhseducation.co.uk/career',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Career Opportunities at MHS Education',
          url: 'https://www.mhseducation.co.uk/career',
          description:
            'Explore career opportunities and professional roles available at MHS Education, a UK-based education consultancy.',
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
          { name: 'Career', path: '/career' },
        ])}
      />
      <CareerPage />
    </>
  );
}
