import Link from 'next/link';
import { blogs, brand, navLinks } from '../data/content';

export const Footer = () => {
  const recentBlogs = blogs.slice(0, 2);

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <span className="icon icon-map-marker" />
                    <span className="text">{brand.address}</span>
                  </li>
                  <li>
                    <a href={`tel:${brand.shortPhone.replace(/\D/g, '')}`}>
                      <span className="icon icon-phone" />
                      <span className="text">{brand.shortPhone}</span>
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${brand.email}`}>
                      <span className="icon icon-envelope" />
                      <span className="text">{brand.email}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              {recentBlogs.map((post) => (
                <div key={post.id} className="block-21 mb-4 d-flex">
                  <Link className="blog-img mr-4" style={{ backgroundImage: `url(${post.image})` }} href={`/blog/${post.id}`} />
                  <div className="text">
                    <h3 className="heading">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <div className="meta">
                      <div>
                        <span className="icon-calendar" /> {post.date}
                      </div>
                      <div>
                        <span className="icon-person" /> {post.author}
                      </div>
                      <div>
                        <span className="icon-chat" /> {post.comments}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5 ml-md-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>
                      <span className="ion-ios-arrow-round-forward mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2">Subscribe Us!</h2>
              <form className="subscribe-form">
                <div className="form-group">
                  <input type="text" className="form-control mb-2 text-center" placeholder="Enter email address" />
                  <input type="submit" value="Subscribe" className="form-control submit px-3" />
                </div>
              </form>
            </div>
            <div className="ftco-footer-widget mb-5">
              <h2 className="ftco-heading-2 mb-0">Connect With Us</h2>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-facebook" />
                  </a>
                </li>
                <li className="ftco-animate">
                  <a href="#">
                    <span className="icon-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
              Copyright &copy; {new Date().getFullYear()} All rights reserved | This template is made with{' '}
              <i className="icon-heart" aria-hidden="true" /> by{' '}
              <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
