'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand, navLinks, socialLinks } from '../data/content';
import { imageAssets } from '../data/images';
import { MobileNavigationDrawer } from './MobileNavigationDrawer';
import { SiteSearchModal } from './SiteSearchModal';
import { SocialIcon } from './SocialIcon';

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
    aria-controls="mobile-navigation-drawer"
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

const ScrollAwareNavbar = ({
  isOpen,
  onMenuToggle,
}: {
  isOpen: boolean;
  onMenuToggle: () => void;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAwake, setIsAwake] = useState(false);

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
    <nav className={navState} id="ftco-navbar" aria-label="Secondary site navigation">
      <div className="container navbar-shell d-flex align-items-center">
        <span className="scroll-navbar-brand">
          <span className="scroll-navbar-brand__primary">MHS</span>
          <span className="scroll-navbar-brand__secondary">Education</span>
        </span>
        <div className="navbar-shell__meta">
          <span className="navbar-shell__lead">Just one click for the first step to admission</span>
          <ContactList />
          <SocialLinksList className="navbar-shell__socials d-flex align-items-center" />
        </div>
        <MobileMenuButton isOpen={isOpen} onClick={onMenuToggle} />
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
        <SocialIcon link={link} />
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

const TopBarNav = ({
  isSearchOpen,
  onSearch,
}: {
  isSearchOpen: boolean;
  onSearch: () => void;
}) => {
  const pathname = usePathname() || '/';

  return (
    <nav className="topbar-nav-cluster" aria-label="Primary navigation">
      <ul className="topbar-nav-list">
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
      <button
        type="button"
        className="topbar-search-button"
        aria-label="Search the website"
        aria-haspopup="dialog"
        aria-expanded={isSearchOpen}
        onClick={onSearch}
      >
        <span className="ion-ios-search" aria-hidden="true" />
      </button>
      <SocialLinksList className="topbar-socials topbar-socials--topnav d-flex align-items-center" />
    </nav>
  );
};

const TopBar = ({
  isOpen,
  onMenuToggle,
  isSearchOpen,
  onSearch,
}: {
  isOpen: boolean;
  onMenuToggle: () => void;
  isSearchOpen: boolean;
  onSearch: () => void;
}) => {
  return (
    <div className="bg-top navbar-light">
      <div className="container topbar-container">
        <div className="row no-gutters d-flex align-items-center align-items-stretch">
          <div className="col-md-3 d-flex align-items-center py-2 topbar-brand-col">
            <Link className="navbar-brand d-flex align-items-center p-0" href="/">
              <Image
                src={imageAssets.bgRemovedLogo}
                alt={`${brand.name} admissions guidance logo`}
                className="topbar-logo"
                priority
              />
            </Link>
            <div className="topbar-mobile-toggle">
              <MobileMenuButton isOpen={isOpen} onClick={onMenuToggle} />
            </div>
          </div>
          <div className="col-lg-9 d-block topbar-content-col">
            <TopBarNav isSearchOpen={isSearchOpen} onSearch={onSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchTriggerRef = useRef<HTMLElement | null>(null);
  const mobileMenuTriggerRef = useRef<HTMLElement | null>(null);

  const openSearch = useCallback(() => {
    searchTriggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setIsSearchOpen(true);
  }, []);
  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    window.setTimeout(() => searchTriggerRef.current?.focus({ preventScroll: true }), 0);
  }, []);
  const dismissSearchForNavigation = useCallback(() => setIsSearchOpen(false), []);
  const closeMobileMenu = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => mobileMenuTriggerRef.current?.focus({ preventScroll: true }), 350);
  }, []);
  const dismissMobileMenuForNavigation = useCallback(() => setIsOpen(false), []);
  const toggleMobileMenu = useCallback(() => {
    if (isOpen) {
      closeMobileMenu();
      return;
    }

    mobileMenuTriggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setIsOpen(true);
  }, [closeMobileMenu, isOpen]);

  return (
    <>
      <header>
        <TopBar
          isOpen={isOpen}
          onMenuToggle={toggleMobileMenu}
          isSearchOpen={isSearchOpen}
          onSearch={openSearch}
        />
        <ScrollAwareNavbar isOpen={isOpen} onMenuToggle={toggleMobileMenu} />
      </header>
      <MobileNavigationDrawer
        isOpen={isOpen}
        onClose={closeMobileMenu}
        onNavigate={dismissMobileMenuForNavigation}
      />
      <SiteSearchModal
        isOpen={isSearchOpen}
        onClose={closeSearch}
        onNavigate={dismissSearchForNavigation}
      />
    </>
  );
};
