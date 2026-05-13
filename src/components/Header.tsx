'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand, navLinks, socialLinks } from '../data/content';

const ScrollAwareNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const pathname = usePathname() || '/';

  const isActive = useMemo(
    () => (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path)),
    [pathname],
  );

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      setIsScrolled(top > 150);
      setIsAwake(top > 350);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navState = [
    'navbar',
    'navbar-expand-lg',
    'navbar-dark',
    'ftco-navbar-light',
    isScrolled ? 'scrolled' : '',
    isAwake ? 'awake' : 'sleep',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navState} id="ftco-navbar">
      <div className="container navbar-shell d-flex align-items-center">
        <div className="navbar-shell__meta">
          <ContactList />
          <SocialLinksList className="navbar-shell__socials d-flex align-items-center" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="ftco-nav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="oi oi-menu" /> Menu
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav mr-auto segmented-nav segmented-nav--mobile">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <li key={link.path} className={`nav-item ${active ? 'active' : ''}`}>
                  <Link
                    href={link.path}
                    className={`nav-link ${link.path === '/' ? 'pl-0' : ''} ${active ? 'active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item">
              <Link href="/courses" className="nav-link" onClick={() => setIsOpen(false)}>
                Search Courses
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const SocialLinksList = ({ className = 'topbar-socials d-flex align-items-center mr-3' }: { className?: string }) => (
  <div className={className} aria-label="Social media links">
    {socialLinks.map((link, index) => (
      <a
        key={link.icon}
        href={link.href}
        className="topbar-social-link"
        aria-label={link.label ?? link.icon}
        target="_blank"
        rel="noopener noreferrer"
        style={{ animationDelay: `${index * 90}ms` }}
      >
        <span className={link.icon} />
      </a>
    ))}
  </div>
);

const ContactList = ({ className = 'topbar-contact-list' }: { className?: string }) => (
  <div className={className} aria-label="Contact information">
    <a className="topbar-contact-item" href={`mailto:${brand.email}`}>
      <span className="topbar-contact-icon icon-envelope" aria-hidden="true" />
      <span className="topbar-contact-copy">
        <span className="topbar-contact-value">{brand.email}</span>
      </span>
    </a>
    <a className="topbar-contact-item" href={`tel:${brand.phone}`}>
      <span className="topbar-contact-icon icon-phone2" aria-hidden="true" />
      <span className="topbar-contact-copy">
        <span className="topbar-contact-value">{brand.phone}</span>
      </span>
    </a>
  </div>
);

const TopBarNav = () => {
  const pathname = usePathname() || '/';

  return (
    <div className="topbar-nav-cluster">
      <ul className="topbar-nav-list" aria-label="Primary navigation">
        {navLinks.map((link) => {
          const active = link.path === '/' ? pathname === '/' : pathname.startsWith(link.path);
          return (
            <li key={link.path} className="topbar-nav-item">
              <Link
                href={link.path}
                className={`topbar-nav-link ${active ? 'active' : ''}`}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/courses" className="topbar-search-button" aria-label="Search courses">
        <span className="ion-ios-search" aria-hidden="true" />
      </Link>
      <SocialLinksList className="topbar-socials topbar-socials--topnav d-flex align-items-center" />
    </div>
  );
};

const TopBar = () => (
  <div className="bg-top navbar-light">
    <div className="container topbar-container">
      <div className="row no-gutters d-flex align-items-center align-items-stretch">
        <div className="col-md-3 d-flex align-items-center py-2 topbar-brand-col">
          <Link className="navbar-brand d-flex align-items-center p-0" href="/">
            <img src={brand.logo} alt={`${brand.name} logo`} className="topbar-logo" />
          </Link>
        </div>
        <div className="col-lg-9 d-block topbar-content-col">
          <TopBarNav />
        </div>
      </div>
    </div>
  </div>
);

export const Header = () => (
  <header>
    <TopBar />
    <ScrollAwareNavbar />
  </header>
);
