import { offerings } from '../data/content';

export const OfferSection = () => (
  <section className="ftco-section offer-modern-section">
    <div className="container">
      <div className="offer-modern-intro" data-aos="fade-up">
        <span className="offer-modern-eyebrow">What We Offer</span>
        <h2 className="offer-modern-title">
          Practical support across
          {' '}
          <span>every stage of the UK admissions process</span>
        </h2>
        <p className="offer-modern-copy">
          Our service model is built to help students make clearer decisions, prepare stronger applications, and stay organised from initial enquiry through to
          enrolment planning.
        </p>
      </div>
      <div className="offer-modern-grid">
        {offerings.map((item, index) => (
          <article className="offer-modern-card" data-aos="fade-up" data-aos-delay={index * 40} key={item.title}>
            <div className="offer-modern-card__icon" aria-hidden="true">
              <span className={item.icon} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
