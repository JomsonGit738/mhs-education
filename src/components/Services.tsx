import { services } from '../data/content';

export const Services = () => (
  <section className="ftco-services ftco-no-pb">
    <div className="container-wrap">
      <div className="row no-gutters">
        {services.map((service) => (
          <div
            key={service.title}
            className={`col-md-3 d-flex services align-self-stretch py-5 px-4 ftco-animate ${
              service.tone === 'primary' ? 'bg-primary' : 'bg-darken'
            }`}
            data-aos="fade-up"
          >
            <div className="media block-6 d-block text-center">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className={service.icon} />
              </div>
              <div className="media-body p-2 mt-3">
                <h3 className="heading">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
