import { PageHero } from '../components/PageHero';
import { StatsSection } from '../components/StatsSection';
import { Testimonials } from '../components/Testimonials';
import { Gallery } from '../components/Gallery';
import { images } from '../data/images';
import { pageHero } from '../data/content';

export const AboutPage = () => (
  <>
    <PageHero title={pageHero.about.title} breadcrumb={pageHero.about.breadcrumb} background={images.bg1} />
    <section className="ftco-section ftco-no-pt ftc-no-pb">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch" data-aos="fade-left">
            <div className="img" style={{ backgroundImage: `url(${images.about})`, border: 'none' }} />
          </div>
          <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate" data-aos="fade-right">
            <h2 className="mb-4">Fox University Established Since 1960</h2>
            <p>
              On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the word.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <p>
              On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand
              times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return
              to its own, safe country.
            </p>
          </div>
        </div>
      </div>
    </section>
    <StatsSection />
    <Testimonials />
    <Gallery />
  </>
);
