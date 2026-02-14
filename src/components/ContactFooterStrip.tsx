import { brand, socialLinks } from "../data/content";

// Lightweight contact strip to guarantee address/phone/email presence on every page
export const ContactFooterStrip = () => (
  <section className="ftco-section py-4 bg-primary text-white mb-0">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6 d-flex flex-column flex-md-row gap-3 gap-md-4 align-items-start align-items-md-center">
          <span className="font-weight-bold">Contact us:</span>
          <span>{brand.address}</span>
          <a className="text-white" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          <a className="text-white" href={`tel:${brand.shortPhone.replace(/\D/g, '')}`}>
            {brand.shortPhone}
          </a>
        </div>
        <div className="col-md-6 mt-3 mt-md-0 d-flex justify-content-md-end justify-content-start">
          <ul className="ftco-footer-social list-unstyled d-flex mb-0">
            {socialLinks.map((link) => (
              <li key={link.icon} className="ftco-animate mr-3">
                <a href={link.href} className="text-white">
                  <span className={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
