import { BlogSection } from '../components/BlogSection';
import { PageHero } from '../components/PageHero';
import { blogs, pageHero } from '../data/content';
import { images } from '../data/images';

export const BlogPage = () => (
  <>
    <PageHero title={pageHero.blog.title} breadcrumb={pageHero.blog.breadcrumb} background={images.uk} />
    <BlogSection posts={blogs} />
  </>
);
