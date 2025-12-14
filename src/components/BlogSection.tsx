import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../data/content';

type BlogSectionProps = {
  title?: ReactNode;
  description?: ReactNode;
  posts: BlogPost[];
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  const [month, day, year] = post.date.replace(',', '').split(' ');

  return (
    <div className="col-md-6 col-lg-4 ftco-animate" data-aos="fade-up">
      <div className="blog-entry">
        <Link to={`/blog/${post.id}`} className="block-20 d-flex align-items-end" style={{ backgroundImage: `url(${post.image})` }}>
          <div className="meta-date text-center p-2">
            <span className="day">{day ?? post.date}</span>
            <span className="mos">{month ?? ''}</span>
            <span className="yr">{year ?? ''}</span>
          </div>
        </Link>
        <div className="text bg-white p-4">
          <h3 className="heading">
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </h3>
          <p>{post.excerpt}</p>
          <div className="d-flex align-items-center mt-4">
            <p className="mb-0">
              <Link to={`/blog/${post.id}`} className="btn btn-primary">
                Read More <span className="ion-ios-arrow-round-forward" />
              </Link>
            </p>
            <p className="ml-auto mb-0">
              <span className="mr-2">{post.author}</span>
              <span className="meta-chat">
                <span className="icon-chat" /> {post.comments}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogSection = ({ title, description, posts }: BlogSectionProps) => (
  <section className="ftco-section bg-light">
    <div className="container">
      {(title || description) && (
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            {title && <h2 className="mb-4">{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
      <div className="row">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  </section>
);
