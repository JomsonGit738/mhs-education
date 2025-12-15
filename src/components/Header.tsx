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
        <form className="searchform order-lg-last">
          <div className="form-group d-flex">
            <input type="text" className="form-control pl-3" placeholder="Search" />
            <button type="submit" className="form-control search">
              <span className="ion-ios-search" />
            </button>
          </div>
        </form>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav mr-auto">
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  href={link.path}
                  className={`nav-link ${link.path === '/' ? 'pl-0' : ''} ${isActive(link.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
        <div className="col-md-4 d-flex align-items-center py-4">
          <Link className="navbar-brand d-flex align-items-center p-0" href="/">
            <img src={brand.logo} alt={`${brand.name} logo`} style={{ height: 70, width: 'auto' }} />
          </Link>
        </div>
        <div className="col-lg-8 d-block">
          <div className="row d-flex">
            <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="icon-paper-plane" />
              </div>
              <div className="text">
                <span>Email</span>
                <span>{brand.email}</span>
              </div>
            </div>
            <div className="col-md d-flex topper align-items-center align-items-stretch py-md-4">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="icon-phone2" />
              </div>
              <div className="text">
                <span>Call</span>
                <span>Call Us: {brand.phone}</span>
              </div>
            </div>
            <div className="col-md topper d-flex align-items-center justify-content-end">
              <p className="mb-0">
                <Link href="/contact" className="btn py-2 px-3 btn-primary d-flex align-items-center justify-content-center">
                  <span>Apply now</span>
                </Link>
              </p>
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
