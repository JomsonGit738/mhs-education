import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '../data/content';
import { blogDetail, pageHero } from '../data/content';
import { getImageAsset, images } from '../data/images';
import { CommentTree } from '../components/CommentTree';
import { PageHero } from '../components/PageHero';

type BlogSinglePageProps = {
  post: BlogPost;
};

export const BlogSinglePage = ({ post }: BlogSinglePageProps) => {
  const detail = blogDetail;

  return (
    <>
      <PageHero title={pageHero.blogSingle.title} breadcrumb={pageHero.blogSingle.breadcrumb} background={images.uk} />
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <article className="col-lg-8 ftco-animate">
              <h2 className="mb-3">{post.title}</h2>
              <p className="text-muted">
                {post.date} &bull; {post.author}
              </p>
              <p>{detail.body[0]}</p>
              <figure>
                <Image
                  src={getImageAsset(detail.heroImage)}
                  alt="Students reviewing a personalised UK admissions roadmap."
                  className="img-fluid"
                  priority
                />
                <figcaption className="sr-only">
                  Personalised admissions planning support for UK university applicants.
                </figcaption>
              </figure>
              {detail.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  {detail.tags.map((tag) => (
                    <span key={tag} className="tag-cloud-link">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <section className="about-author d-flex p-4 bg-light" aria-labelledby="about-author-heading">
                <div className="bio mr-5">
                  <Image
                    src={getImageAsset(detail.author.avatar)}
                    alt={`${detail.author.name} author portrait`}
                    className="img-fluid mb-4"
                  />
                </div>
                <div className="desc">
                  <h3 id="about-author-heading">{detail.author.name}</h3>
                  <p>{detail.author.bio}</p>
                </div>
              </section>

              <section className="pt-5 mt-5" aria-labelledby="comments-heading">
                <h3 id="comments-heading" className="mb-5 h4 font-weight-bold">
                  {detail.comments.length} Comments
                </h3>
                <CommentTree comments={detail.comments} />

                <div className="comment-form-wrap pt-5" aria-labelledby="comment-form-heading">
                  <h3 id="comment-form-heading" className="mb-5 h4 font-weight-bold">
                    Leave a comment
                  </h3>
                  <form className="p-5 bg-light">
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" cols={30} rows={10} className="form-control" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn py-3 px-4 btn-primary">
                        <span>Post Comment</span>
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </article>

            <aside className="col-lg-4 sidebar ftco-animate" aria-label="Blog sidebar">
              <div className="sidebar-box">
                <form className="search-form">
                  <div className="form-group">
                    <label htmlFor="blog-search" className="sr-only">
                      Search insights
                    </label>
                    <span className="icon icon-search" />
                    <input
                      id="blog-search"
                      type="search"
                      className="form-control"
                      placeholder="Type a keyword and hit enter"
                    />
                  </div>
                </form>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Category</h3>
                <ul className="categories">
                  {detail.categories.map((category) => (
                    <li key={category.label}>
                      <span>
                        {category.label} <span>({category.total})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Popular Articles</h3>
                {detail.popular.map((article) => (
                  <div key={article.id} className="block-21 mb-4 d-flex">
                    <div
                      className="blog-img mr-4"
                      style={{ backgroundImage: `url(${article.image})` }}
                      role="img"
                      aria-label={`${article.title} article image`}
                    />
                    <div className="text">
                      <h3 className="heading">{article.title}</h3>
                      <div className="meta">
                        <div>
                          <span>
                            <span className="icon-calendar" /> {article.date}
                          </span>
                        </div>
                        <div>
                          <span>
                            <span className="icon-person" /> {article.author}
                          </span>
                        </div>
                        <div>
                          <span>
                            <span className="icon-chat" /> {article.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Tag Cloud</h3>
                <ul className="tagcloud m-0 p-0">
                  {detail.tagCloud.map((tag, index) => (
                    <span key={`${tag}-${index}`} className="tag-cloud-link">
                      {tag}
                    </span>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Archives</h3>
                <ul className="categories">
                  {detail.archives.map((entry) => (
                    <li key={entry.label}>
                      <span>
                        {entry.label} <span>({entry.total})</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Paragraph</h3>
                <p>{detail.sidebarText}</p>
              </div>
              <div className="sidebar-box ftco-animate">
                <Link href="/blog" aria-label="Browse all MHS Education insights">
                  Browse all insights
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};
