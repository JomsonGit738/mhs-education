'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand, navLinks, socialLinks } from '../data/content';

const mobileNavIcons: Record<string, string> = {
  '/': 'icon-home',
  '/courses': 'icon-book',
  '/services': 'icon-briefcase',
  '/career': 'icon-suitcase',
  '/about': 'icon-info',
  '/contact': 'icon-paper-plane',
  search: 'ion-ios-search',
};

const MobileMenuButton = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    className="navbar-toggler"
    type="button"
    aria-controls="ftco-nav"
    aria-expanded={isOpen}
    aria-label="Toggle navigation"
    onClick={onClick}
  >
    <span className="navbar-toggler__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" className="navbar-toggler__icon-svg">
        <path
          d="M4 7h16M4 12h16M4 17h16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  </button>
);

const MobileNavList = ({
  pathname,
  onNavigate,
  variant = 'scroll',
}: {
  pathname: string;
  onNavigate: () => void;
  variant?: 'scroll' | 'topbar';
}) => (
  <ul className={`navbar-nav mr-auto segmented-nav segmented-nav--mobile segmented-nav--mobile-${variant}`}>
    {navLinks.map((link) => {
      const active = link.path === '/' ? pathname === '/' : pathname.startsWith(link.path);
      return (
        <li key={link.path} className={`nav-item ${active ? 'active' : ''}`}>
          <Link
            href={link.path}
            className={`nav-link ${link.path === '/' ? 'pl-0' : ''} ${active ? 'active' : ''}`}
            aria-current={active ? 'page' : undefined}
            onClick={onNavigate}
          >
            <span className="segmented-nav__icon" aria-hidden="true">
              <span className={mobileNavIcons[link.path]} />
            </span>
            <span className="segmented-nav__text">{link.label}</span>
          </Link>
        </li>
      );
    })}
  </ul>
);

const ScrollAwareNavbar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
        <span className="scroll-navbar-brand">
          <span className="scroll-navbar-brand__primary">MHS</span>
          <span className="scroll-navbar-brand__secondary">Education</span>
        </span>
        <div className="navbar-shell__meta">
          <ContactList />
          <SocialLinksList className="navbar-shell__socials d-flex align-items-center" />
        </div>
        <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <MobileNavList pathname={pathname} onNavigate={() => setIsOpen(false)} variant="scroll" />
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

const TopBar = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname() || '/';

  return (
    <div className="bg-top navbar-light">
      <div className="container topbar-container">
        <div className="row no-gutters d-flex align-items-center align-items-stretch">
          <div className="col-md-3 d-flex align-items-center py-2 topbar-brand-col">
            <Link className="navbar-brand d-flex align-items-center p-0" href="/">
              <img src={brand.logo} alt={`${brand.name} logo`} className="topbar-logo" />
            </Link>
            <div className="topbar-mobile-toggle">
              <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen((open) => !open)} />
            </div>
          </div>
          <div className="col-lg-9 d-block topbar-content-col">
            <TopBarNav />
          </div>
        </div>
        <div className={`topbar-mobile-nav ${isOpen ? 'show' : ''}`}>
          <MobileNavList pathname={pathname} onNavigate={() => setIsOpen(false)} variant="topbar" />
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <ScrollAwareNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
