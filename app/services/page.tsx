import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { ServicesPage } from "../../src/views/ServicesPage";
import { buildBreadcrumbSchema } from '../../src/lib/seo';

export const metadata: Metadata = {
  title: 'Education Services | Admissions and Student Guidance',
  description:
    'See the education services offered by MHS Education, including admissions support, application guidance, interview preparation, and student advice.',
  keywords: [
    'education services',
    'admissions support',
    'application guidance',
    'student advice',
    'interview preparation',
    'MHS Education services',
  ],
  alternates: {
    canonical: 'https://www.mhseducation.co.uk/services',
  },
  openGraph: {
    title: 'Education Services | Admissions and Student Guidance',
    description:
      'See the education services offered by MHS Education, including admissions support, application guidance, interview preparation, and student advice.',
    url: 'https://www.mhseducation.co.uk/services',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Education Consultancy Services',
          url: 'https://www.mhseducation.co.uk/services',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'MHS Education',
            url: 'https://www.mhseducation.co.uk',
          },
          description:
            'MHS Education offers expert consultancy services including university admissions guidance, course selection support, and student career planning across the UK.',
          areaServed: {
            '@type': 'Country',
            name: 'United Kingdom',
          },
          serviceType: 'Education Consultancy',
        }}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <ServicesPage />
    </>
  );
}
