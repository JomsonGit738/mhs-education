import { PageHero } from "../components/PageHero";
import { pageHero } from "../data/content";
import { images } from "../data/images";

// Career page covers Join Our Team and Become an Agent requests
export const CareerPage = () => (
  <>
    <PageHero title="Career" breadcrumb="Career" background={images.bg2} />
    <section className="ftco-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ftco-animate">
            <h2 className="mb-3">Join Our Team</h2>
            <p>
              We are always looking for student-focused advisers, counsellors, and operations teammates who believe in personalised UK admissions guidance.
              Share your CV and cover letter and we will connect you with open roles.
            </p>
            <p className="mb-0">
              <a href="mailto:info@mhseducation.com" className="btn btn-primary">
                Send Your CV
              </a>
            </p>
          </div>
          <div className="col-md-6 ftco-animate">
            <h2 className="mb-3">Become an Agent</h2>
            <p>
              Partner with us to support students applying for UK foundation, undergraduate, postgraduate, diploma, and top-up programmes. We provide
              training, process guides, and marketing material to help you scale student success.
            </p>
            <p className="mb-0">
              <a href="/contact" className="btn btn-outline-primary">
                Partner With Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);
