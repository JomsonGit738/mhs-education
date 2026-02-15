import Link from 'next/link';
import { brand, navLinks, socialLinks } from '../data/content';

export const Footer = () => (
  <footer className="footer-modern">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-card">
          <div className="footer-logo d-flex align-items-center mb-3">
            <img src={brand.logo} alt={`${brand.name} logo`} style={{ height: 56, width: 'auto' }} />
            <div className="ml-3">
              <h4 className="mb-1">{brand.name}</h4>
              <p className="mb-0 text-muted small">{brand.tagline}</p>
            </div>
          </div>
          <ul className="footer-list">
            <li>
              <span className="icon icon-map-marker mr-2" />
              {brand.address}
            </li>
            <li>
              <a href={`mailto:${brand.email}`}>
                <span className="icon icon-envelope mr-2" />
                {brand.email}
              </a>
            </li>
            <li>
              <a href={`tel:${brand.shortPhone.replace(/\D/g, '')}`}>
                <span className="icon icon-phone mr-2" />
                {brand.shortPhone}
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-card">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-card">
          <h5 className="mb-3">Connect</h5>
          <p className="text-muted small mb-3">Follow us for intakes, scholarships, and student updates.</p>
          <div className="social-grid">
            {socialLinks.map((link) => (
              <a key={link.icon} href={link.href} className="social-tile" aria-label={link.icon}>
                <span className={link.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MHS Education. All rights reserved.</span>
        <span>Admissions guidance • Visa support • Student success</span>
      </div>
    </div>
  </footer>
);
