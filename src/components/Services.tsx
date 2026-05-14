import { services } from '../data/content';

export const Services = () => (
  <section className="ftco-section services-modern">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-md-10 text-center">
          <h2 className="services-modern__title mb-3">Our Services</h2>
          <p className="services-modern__intro text-muted mb-0">
            From course selection and application support to interview preparation, student finance guidance,
            and CV or personal statement feedback, we help students stay clear, confident, and organised at
            every stage of the UK university process.
          </p>
        </div>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article
            key={service.title}
            className={`service-card service-card-gradient service-card--${service.tone} ftco-animate`}
            data-aos="fade-up"
          >
            <div className="service-body">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-copy">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
