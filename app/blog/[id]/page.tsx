import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '../../../components/JsonLd';
import type { BlogPost } from '../../../src/data/content';
import { blogDetail, blogs } from '../../../src/data/content';
import { buildBreadcrumbSchema } from '../../../src/lib/seo';
import { BlogSinglePage } from '../../../src/views/BlogSinglePage';

type PageProps = {
  params: Promise<{ id: string }>;
};

export const revalidate = 86400;

export function generateStaticParams() {
  return blogs.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  // TODO: replace with actual data fetch from your CMS or data source
  const title = id.replace(/-/g, ' ');
  return {
    title,
    description: `Read this article on MHS Education — ${title}.`,
    alternates: {
      canonical: `https://www.mhseducation.co.uk/blog/${id}`,
    },
    openGraph: {
      title,
      description: `Read this article on MHS Education — ${title}.`,
      url: `https://www.mhseducation.co.uk/blog/${id}`,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const post: BlogPost | undefined = blogs.find((item) => item.id === id);
  if (!post) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          // TODO: replace headline with actual post title from data source
          headline: id.replace(/-/g, ' '),
          url: `https://www.mhseducation.co.uk/blog/${id}`,
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
          { name: id, path: `/blog/${id}` },
        ])}
      />
      <BlogSinglePage post={post} />
    </>
  );
}
