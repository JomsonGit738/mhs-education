import Link from 'next/link';
import { brand, navLinks, socialLinks } from '../data/content';
import { FooterWaveCanvas } from './FooterWaveCanvas';
import { SocialIcon } from './SocialIcon';

const primaryLinks = navLinks.slice(0, 3);
const secondaryLinks = navLinks.slice(3);

export const Footer = () => (
  <footer className="footer-modern">
    <FooterWaveCanvas />
    <div className="container">
      <div className="footer-lead">
        <div className="footer-lead__copy">
          <span className="footer-kicker">Plan your next move</span>
          <h2>Admissions guidance built around clarity, timing, and real student outcomes.</h2>
          <p>
            From first enquiry to final enrolment, MHS Education helps students and partners move with fewer
            delays and better decisions.
          </p>
        </div>
        <div className="footer-lead__actions">
          <Link href="/contact" className="btn btn-apply-invert footer-lead__button">
            <span>Book a Consultation</span>
          </Link>
        </div>
      </div>

      <div className="footer-grid">
        <div className="footer-card footer-card--brand">
          <div className="footer-logo">
            <img src={brand.logo} alt={`${brand.name} logo`} className="footer-brand-logo" />
            <div className="footer-brand-copy">
              <h4>{brand.name}</h4>
              <p className="footer-tagline">{brand.tagline}</p>
            </div>
          </div>
          <p className="footer-intro">
            Trusted admissions support with a student-first approach across applications, documentation, and
            next-step planning.
          </p>

          <div className="footer-contact-stack">
            <a href={`tel:${brand.shortPhone.replace(/\D/g, '')}`} className="footer-contact-pill">
              <span className="icon icon-phone" />
              <span>{brand.shortPhone}</span>
            </a>
            <a href={`mailto:${brand.email}`} className="footer-contact-pill">
              <span className="icon icon-envelope" />
              <span>{brand.email}</span>
            </a>
          </div>

          <ul className="footer-list">
            <li>
              <span className="icon icon-map-marker" />
              {brand.address}
            </li>
          </ul>
        </div>

        <div className="footer-card footer-card--nav">
          <h5>Explore</h5>
          <ul className="footer-links">
            {primaryLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-card footer-card--nav">
          <h5>More</h5>
          <ul className="footer-links">
            {secondaryLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-card footer-card--nav">
          <h5>Legal</h5>
          <ul className="footer-links">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-card footer-card--connect">
          <h5>Connect</h5>
          <p className="footer-connect-copy">Follow us for intakes, scholarships, and student updates.</p>
          <div className="social-grid">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                className="social-tile"
                aria-label={link.label ?? link.icon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon link={link} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} MHS Education. All rights reserved.</span>
        <span>Admissions guidance | Student support | Student success</span>
      </div>
    </div>
  </footer>
);
