import type { Metadata } from 'next';
import JsonLd from '../components/JsonLd';
import { HomePage } from '../src/views/HomePage';

export const metadata: Metadata = {
  title: 'MHS Education | UK University Admissions Guidance',
  description:
    'MHS Education helps students apply to UK universities with clear admissions advice, course guidance, and personal support at every stage.',
  keywords: [
    'UK education consultancy',
    'university admissions guidance',
    'student application support',
    'course advice UK',
    'MHS Education',
  ],
  alternates: {
    canonical: 'https://www.mhseducation.co.uk/',
  },
  openGraph: {
    title: 'MHS Education | UK University Admissions Guidance',
    description:
      'MHS Education helps students apply to UK universities with clear admissions advice, course guidance, and personal support at every stage.',
    url: 'https://www.mhseducation.co.uk/',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: 'MHS Education',
          url: 'https://www.mhseducation.co.uk',
          logo: 'https://www.mhseducation.co.uk/mhseducation.jpeg',
          description:
            'MHS Education is a UK-based education consultancy helping students with university admissions, course selection, and career guidance.',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'GB',
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            availableLanguage: 'English',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'MHS Education',
          url: 'https://www.mhseducation.co.uk',
        }}
      />
      <HomePage />
    </>
  );
}
