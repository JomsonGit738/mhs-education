import { services } from '../data/content';

export const Services = () => (
  <section className="ftco-section services-modern">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-md-10 text-center">
          <h2 className="mb-3">Our Services</h2>
          <p className="text-muted mb-0">Guidance across every admissions milestone, delivered as one seamless experience.</p>
        </div>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card service-card-gradient ftco-animate" data-aos="fade-up">
            <div className="service-accent">
              <span className={service.icon} />
            </div>
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
