import { offerings } from '../data/content';
import { images } from '../data/images';

export const OfferSection = () => (
  <section className="ftco-section ftco-no-pt ftc-no-pb">
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-5 order-md-last wrap-about wrap-about d-flex align-items-stretch" data-aos="fade-left">
          <div className="img" style={{ backgroundImage: `url(${images.about})`, border: 'none' }} />
        </div>
        <div className="col-md-7 wrap-about py-5 pr-md-4 ftco-animate" data-aos="fade-right">
          <h2 className="mb-4">What We Offer</h2>
          <p>
            We guide UK-bound students through every application milestone: choosing the right pathway, preparing documents, and submitting strong
            applications on time. Our advisers also cover visa, accommodation, and arrival support so you feel confident from first enquiry to enrolment.
          </p>
          <div className="row mt-5">
            {offerings.map((item) => (
              <div key={item.title} className="col-lg-6 mb-3">
                <div className="services-2 d-flex">
                  <div className="icon mt-2 d-flex justify-content-center align-items-center">
                    <span className={item.icon} />
                  </div>
                  <div className="text pl-3">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
