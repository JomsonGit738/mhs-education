'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand, navLinks } from '../data/content';

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
    'bg-dark',
    'ftco-navbar-light',
    isScrolled ? 'scrolled' : '',
    isAwake ? 'awake' : 'sleep',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <nav className={navState} id="ftco-navbar">
      <div className="container d-flex align-items-center px-4">
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
        {/* Quick course search entry point required by client */}
        <form className="searchform order-lg-last">
          <div className="form-group d-flex">
            <input type="text" className="form-control pl-3" placeholder="Search courses" />
            <button type="submit" className="form-control search">
              <span className="ion-ios-search" />
            </button>
          </div>
        </form>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav mr-auto">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

const TopBar = () => (
  <div className="bg-top navbar-light">
    <div className="container">
      <div className="row no-gutters d-flex align-items-center align-items-stretch">
        <div className="col-md-3 d-flex align-items-center py-2">
          <Link className="navbar-brand d-flex align-items-center p-0" href="/">
            <img src={brand.logo} alt={`${brand.name} logo`} style={{ height: 60, width: 'auto' }} />
          </Link>
        </div>
        <div className="col-lg-9 d-block">
          <div className="row d-flex align-items-center h-100">
            {/* Email and call in a single horizontal row for space efficiency */}
            <div className="col-md-7 d-flex align-items-center p-0 flex-nowrap h-100">
              <div className="d-flex topper align-items-center h-100 py-1 pr-4 flex-nowrap">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-paper-plane" />
                </div>
                <div className="text d-flex align-items-center flex-nowrap">
                  <span className="mr-2">Email:</span>
                  <span>{brand.email}</span>
                </div>
              </div>
              <div className="d-flex topper align-items-center h-100 py-1 flex-nowrap">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-phone2" />
                </div>
                <div className="text d-flex align-items-center flex-nowrap">
                  <span className="mr-2">Call:</span>
                  <span>{brand.phone}</span>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-end p-0 h-100">
              <div className="d-flex align-items-center h-100">
                {/* Primary CTA keeps apply prominent */}
                <Link
                  href="/contact"
                  className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center topbar-apply"
                >
                  <span>Apply now</span>
                </Link>
                {/* Consultation CTA kept visible with contrast against top bar */}
                <Link
                  href="/contact"
                  className="btn py-2 px-3 btn-apply-invert d-flex align-items-center justify-content-center ml-2"
                >
                  <span>Book a Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
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
