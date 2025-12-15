import { notFound } from 'next/navigation';
import type { BlogPost } from '../../../src/data/content';
import { blogs } from '../../../src/data/content';
import { BlogSinglePage } from '../../../src/views/BlogSinglePage';

type PageProps = {
  params: { id: string };
};

export function generateStaticParams() {
  return blogs.map((post) => ({ id: post.id }));
}

export default function Page({ params }: PageProps) {
  const post: BlogPost | undefined = blogs.find((item) => item.id === params.id);
  if (!post) {
    notFound();
  }

  return <BlogSinglePage post={post} />;
}
