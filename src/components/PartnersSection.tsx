import { partners } from "../data/content";

// Simple logo strip to showcase partner universities (logos only per client request)
export const PartnersSection = () => (
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-md-8 text-center heading-section ftco-animate">
          <h2 className="mb-3">Partner Universities</h2>
          <p className="mb-0">Trusted institutions we collaborate with for UK-bound students.</p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        {partners.map((partner) => (
          <div key={partner.name} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 text-center">
            <div
              className="partner-logo d-flex align-items-center justify-content-center p-3 bg-white shadow-sm"
              aria-label={partner.name}
            >
              <img src={partner.logo} alt={`${partner.name} logo`} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
