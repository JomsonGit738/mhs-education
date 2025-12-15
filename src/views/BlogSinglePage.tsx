import type { BlogPost } from '../data/content';
import { blogDetail, pageHero } from '../data/content';
import { images } from '../data/images';
import { PageHero } from '../components/PageHero';
import { CommentTree } from '../components/CommentTree';

type BlogSinglePageProps = {
  post: BlogPost;
};

export const BlogSinglePage = ({ post }: BlogSinglePageProps) => {
  const detail = blogDetail;
  return (
    <>
      <PageHero title={pageHero.blogSingle.title} breadcrumb={pageHero.blogSingle.breadcrumb} background={images.bg1} />
      <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 ftco-animate">
              <h2 className="mb-3">{detail.title}</h2>
              <p className="text-muted">
                {post.date} &bull; {post.author}
              </p>
              <p>{detail.body[0]}</p>
              <p>
                <img src={detail.heroImage} alt="" className="img-fluid" />
              </p>
              {detail.body.slice(1).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="tag-widget post-tag-container mb-5 mt-5">
                <div className="tagcloud">
                  {detail.tags.map((tag) => (
                    <a key={tag} href="#" className="tag-cloud-link">
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              <div className="about-author d-flex p-4 bg-light">
                <div className="bio mr-5">
                  <img src={detail.author.avatar} alt="Author avatar" className="img-fluid mb-4" />
                </div>
                <div className="desc">
                  <h3>{detail.author.name}</h3>
                  <p>{detail.author.bio}</p>
                </div>
              </div>

              <div className="pt-5 mt-5">
                <h3 className="mb-5 h4 font-weight-bold">{detail.comments.length} Comments</h3>
                <CommentTree comments={detail.comments} />

                <div className="comment-form-wrap pt-5">
                  <h3 className="mb-5 h4 font-weight-bold">Leave a comment</h3>
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
                      <input type="submit" value="Post Comment" className="btn py-3 px-4 btn-primary" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sidebar ftco-animate">
              <div className="sidebar-box">
                <form className="search-form">
                  <div className="form-group">
                    <span className="icon icon-search" />
                    <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                  </div>
                </form>
              </div>
              <div className="sidebar-box ftco-animate">
                <h3>Category</h3>
                <ul className="categories">
                  {detail.categories.map((category) => (
                    <li key={category.label}>
                      <a href="#">
                        {category.label} <span>({category.total})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Popular Articles</h3>
                {detail.popular.map((article) => (
                  <div key={article.id} className="block-21 mb-4 d-flex">
                    <a className="blog-img mr-4" style={{ backgroundImage: `url(${article.image})` }} />
                    <div className="text">
                      <h3 className="heading">
                        <a href="#">{article.title}</a>
                      </h3>
                      <div className="meta">
                        <div>
                          <a href="#">
                            <span className="icon-calendar" /> {article.date}
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-person" /> {article.author}
                          </a>
                        </div>
                        <div>
                          <a href="#">
                            <span className="icon-chat" /> {article.comments}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Tag Cloud</h3>
                <ul className="tagcloud m-0 p-0">
                  {detail.tagCloud.map((tag) => (
                    <a key={tag} href="#" className="tag-cloud-link">
                      {tag}
                    </a>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Archives</h3>
                <ul className="categories">
                  {detail.archives.map((entry) => (
                    <li key={entry.label}>
                      <a href="#">
                        {entry.label} <span>({entry.total})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-box ftco-animate">
                <h3>Paragraph</h3>
                <p>{detail.sidebarText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
