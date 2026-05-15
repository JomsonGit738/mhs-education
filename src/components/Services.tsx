import { services } from '../data/content';

export const Services = () => (
  <section className="ftco-section services-modern">
    <div className="container">
      <div className="services-modern__layout">
        <div className="services-modern__content">
          <h2 className="services-modern__title">Our Services</h2>
          <p className="services-modern__intro text-muted">
            From course selection and application support to interview preparation, student finance guidance, and CV
            or personal statement feedback, we help students stay clear, confident, and organised at every stage of
            the UK university process.
          </p>
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
    </div>
  </section>
);
