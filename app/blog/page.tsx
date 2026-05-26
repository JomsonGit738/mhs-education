import type { Metadata } from 'next';
import JsonLd from '../../components/JsonLd';
import { BlogPage } from '../../src/views/BlogPage';
import { blogs } from '../../src/data/content';
import { buildBlogListingSchema, buildBreadcrumbSchema } from '../../src/lib/seo';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Education Blog | Advice, Tips and Student News',
  description:
    'Read articles, practical tips, and education news from MHS Education for students and parents planning university applications and study choices.',
  keywords: [
    'education blog',
    'student advice',
    'university application tips',
    'parent guidance',
    'education news',
    'MHS Education blog',
  ],
  alternates: {
    canonical: 'https://www.mhseducation.co.uk/blog',
  },
  openGraph: {
    title: 'Education Blog | Advice, Tips and Student News',
    description:
      'Read articles, practical tips, and education news from MHS Education for students and parents planning university applications and study choices.',
    url: 'https://www.mhseducation.co.uk/blog',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'MHS Education Blog',
          url: 'https://www.mhseducation.co.uk/blog',
          description:
            'Articles, tips, and news for students and parents navigating UK education, university applications, and career choices.',
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
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <JsonLd data={buildBlogListingSchema(blogs)} />
      <BlogPage />
    </>
  );
}
