import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JsonLd from '../../../components/JsonLd';
import type { BlogPost } from '../../../src/data/content';
import { blogDetail, blogs } from '../../../src/data/content';
import { buildBreadcrumbSchema } from '../../../src/lib/seo';
import { BlogSinglePage } from '../../../src/views/BlogSinglePage';

type PageProps = {
  params: { id: string };
};

export const revalidate = 86400;

export function generateStaticParams() {
  return blogs.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // TODO: replace with actual data fetch from your CMS or data source
  const title = params.id.replace(/-/g, ' ');
  return {
    title,
    description: `Read this article on MHS Education — ${title}.`,
    alternates: {
      canonical: `https://www.mhseducation.co.uk/blog/${params.id}`,
    },
    openGraph: {
      title,
      description: `Read this article on MHS Education — ${title}.`,
      url: `https://www.mhseducation.co.uk/blog/${params.id}`,
    },
  };
}

export default function Page({ params }: PageProps) {
  const post: BlogPost | undefined = blogs.find((item) => item.id === params.id);
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
          headline: params.id.replace(/-/g, ' '),
          url: `https://www.mhseducation.co.uk/blog/${params.id}`,
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
          { name: params.id, path: `/blog/${params.id}` },
        ])}
      />
      <BlogSinglePage post={post} />
    </>
  );
}
