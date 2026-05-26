import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { ContactPage } from '../../src/views/ContactPage';
import { buildBreadcrumbSchema } from '../../src/lib/seo';

export const metadata: Metadata = {
  title: 'Contact MHS Education | Enquiries and Office Details',
  description:
    'Get in touch with MHS Education for admissions enquiries, course guidance, office details, and support from our student advisory team.',
  keywords: [
    'contact MHS Education',
    'admissions enquiry',
    'office details',
    'student advisory team',
    'course guidance contact',
  ],
  alternates: {
    canonical: 'https://www.mhseducation.co.uk/contact',
  },
  openGraph: {
    title: 'Contact MHS Education | Enquiries and Office Details',
    description:
      'Get in touch with MHS Education for admissions enquiries, course guidance, office details, and support from our student advisory team.',
    url: 'https://www.mhseducation.co.uk/contact',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact MHS Education',
          url: 'https://www.mhseducation.co.uk/contact',
          description:
            'Get in touch with MHS Education for admissions guidance, course enquiries, or general support.',
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
          { name: 'Contact Us', path: '/contact' },
        ])}
      />
      <ContactPage />
    </>
  );
}
