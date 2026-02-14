import { PageHero } from '../components/PageHero';
import { StatsSection } from '../components/StatsSection';
import { Testimonials } from '../components/Testimonials';
import { Gallery } from '../components/Gallery';
import { images } from '../data/images';
import { pageHero } from '../data/content';

export const AboutPage = () => (
  <>
    <PageHero title={pageHero.about.title} breadcrumb={pageHero.about.breadcrumb} background={images.uk} />
    <section className="ftco-section ftco-no-pt ftc-no-pb">
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-5 order-md-last wrap-about d-flex align-items-stretch" data-aos="fade-left">
            <div className="img" style={{ backgroundImage: `url(${images.about})`, border: 'none' }} />
          </div>
          <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate" data-aos="fade-right">
            <h2 className="mb-4">Supporting UK Student Success</h2>
            <div className="d-flex flex-column gap-4">
              <article>
                <h3 className="h5 mb-2">Who We Are</h3>
                <p className="mb-0">
                  MHS Education supports ambitious UK-bound students with practical guidance that turns study plans into achievable offers.
                </p>
              </article>
              <article>
                <h3 className="h5 mb-2">Our Vision</h3>
                <p className="mb-0">
                  Established in 2020, our mission is to make leading UK campuses accessible to students who want tailored support. We match aspirations with
                  the right programmes, routes, and timelines for lasting success.
                </p>
              </article>
              <article>
                <h3 className="h5 mb-2">Student-Centred Approach</h3>
                <p className="mb-0">
                  Every conversation begins with attentive listening. We design personalised pathways that balance academic strengths, financial planning, and
                  wellbeing so each UK milestone feels clear and supported.
                </p>
              </article>
              <article>
                <h3 className="h5 mb-2">Company History</h3>
                <p className="mb-0">
                  Founded in 2020, MHS Education grew from a small advisory team into a multi-intake specialist guiding foundation, undergraduate,
                  postgraduate, diploma, and top-up applicants across the UK. Our partners and student outcomes continue to expand each intake.
                </p>
              </article>
              <article>
                <h3 className="h5 mb-2">Proven Success Stories</h3>
                <p className="mb-0">
                  Hundreds of students have secured offers from renowned universities across the UK through careful preparation, deadline management, and
                  post-offer mentoring.
                </p>
              </article>
              <article>
                <h3 className="h5 mb-2">Our Commitment</h3>
                <p className="mb-0">
                  We continue to develop our service with integrity, responsiveness, and a commitment to education, enabling the next generation of UK
                  students to thrive from application to arrival.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <StatsSection />
    <Testimonials />
    <Gallery />
  </>
);
