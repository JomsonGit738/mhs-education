import Link from 'next/link';
import { homeAbout } from '../data/content';

export const HomeAboutSection = () => (
  <section className="ftco-section home-about-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 mb-4 mb-lg-0">
          <div className="home-about-media" style={{ backgroundImage: `url(${homeAbout.image})` }} />
        </div>
        <div className="col-lg-7">
          <span className="home-section-eyebrow">About Us</span>
          <h2 className="home-about-title">{homeAbout.title}</h2>
          <p className="home-about-copy">{homeAbout.intro}</p>
          <p className="home-about-copy">{homeAbout.detail}</p>
          <div className="row mt-4">
            {homeAbout.highlights.map((item) => (
              <div key={item.title} className="col-md-4 mb-3">
                <div className="home-about-highlight h-100">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href={homeAbout.ctaHref} className="btn btn-apply-invert mt-2">
            {homeAbout.ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  </section>
);
