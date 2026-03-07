'use client';

import { FormEvent, useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { brand, courses, navLinks, socialLinks } from '../data/content';

const ScrollAwareNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const pathname = usePathname() || '/';
  const router = useRouter();
  const searchParams = useSearchParams();
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const navListRef = useRef<HTMLUListElement>(null);
  const navLinkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const isActive = useMemo(
    () => (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path)),
    [pathname],
  );
  const activePath = useMemo(
    () => navLinks.find((link) => isActive(link.path))?.path ?? '/',
    [isActive],
  );

  const matchingCourses = useMemo(() => {
    const query = deferredSearchQuery.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return courses
      .filter((course) =>
        [course.title, course.teacher, course.seats, course.duration, course.description]
          .join(' ')
          .toLowerCase()
          .includes(query),
      )
      .slice(0, 5);
  }, [deferredSearchQuery]);

  useEffect(() => {
    setSearchQuery(searchParams.get('query') ?? '');
  }, [searchParams]);

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

  useEffect(() => {
    const positionIndicator = (path: string) => {
      const navList = navListRef.current;
      const navLink = navLinkRefs.current[path];

      if (!navList || !navLink) {
        setIndicatorStyle((current) => ({ ...current, opacity: 0 }));
        return;
      }

      const listRect = navList.getBoundingClientRect();
      const linkRect = navLink.getBoundingClientRect();

      setIndicatorStyle({
        left: linkRect.left - listRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    };

    positionIndicator(activePath);

    const handleResize = () => positionIndicator(activePath);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activePath, isOpen]);

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

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim();

    router.push(query ? `/courses?query=${encodeURIComponent(query)}` : '/courses');
    setIsOpen(false);
    setIsSearchFocused(false);
  };

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
        <form className="searchform order-lg-last course-search" onSubmit={handleSearch}>
          <div className="form-group d-flex">
            <input
              type="text"
              className="form-control pl-3"
              placeholder="Search courses"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => window.setTimeout(() => setIsSearchFocused(false), 150)}
              aria-label="Search courses"
              autoComplete="off"
            />
            <button type="submit" className="form-control search">
              <span className="ion-ios-search" />
            </button>
          </div>
          {isSearchFocused && matchingCourses.length ? (
            <div className="course-search-popover">
              {matchingCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses#${course.id}`}
                  className="course-search-result"
                  onClick={() => setIsSearchFocused(false)}
                >
                  <span className="course-search-result__title">{course.title}</span>
                  <span className="course-search-result__meta">
                    {course.duration} • {course.seats}
                  </span>
                </Link>
              ))}
            </div>
          ) : null}
        </form>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul
            ref={navListRef}
            className="navbar-nav mr-auto segmented-nav"
            onMouseLeave={() => {
              const navList = navListRef.current;
              const navLink = navLinkRefs.current[activePath];

              if (!navList || !navLink) {
                return;
              }

              const listRect = navList.getBoundingClientRect();
              const linkRect = navLink.getBoundingClientRect();

              setIndicatorStyle({
                left: linkRect.left - listRect.left,
                width: linkRect.width,
                opacity: 1,
              });
            }}
          >
            <li
              className="segmented-nav__indicator"
              aria-hidden="true"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
              }}
            />
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <li key={link.path} className={`nav-item ${active ? 'active' : ''}`}>
                  <Link
                    href={link.path}
                    ref={(element) => {
                      navLinkRefs.current[link.path] = element;
                    }}
                    className={`nav-link ${link.path === '/' ? 'pl-0' : ''} ${active ? 'active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => {
                      const navList = navListRef.current;
                      const navLink = navLinkRefs.current[link.path];

                      if (!navList || !navLink) {
                        return;
                      }

                      const listRect = navList.getBoundingClientRect();
                      const linkRect = navLink.getBoundingClientRect();

                      setIndicatorStyle({
                        left: linkRect.left - listRect.left,
                        width: linkRect.width,
                        opacity: 1,
                      });
                    }}
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
            <img src={brand.logo} alt={`${brand.name} logo`} className="topbar-logo" />
          </Link>
        </div>
        <div className="col-lg-9 d-block">
          <div className="row d-flex align-items-center h-100">
            {/* Email and call in a single horizontal row for space efficiency */}
            <div className="col-md-7 d-flex align-items-center p-0 flex-nowrap h-100">
              <div className="d-flex topper align-items-center h-100 py-1 pr-4 flex-nowrap">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span className="icon-envelope" />
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
              <div className="d-flex align-items-center h-100 topbar-actions">
                <div className="topbar-socials d-flex align-items-center mr-3" aria-label="Social media links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={link.icon}
                      href={link.href}
                      className="topbar-social-link"
                      aria-label={link.icon}
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <span className={link.icon} />
                    </a>
                  ))}
                </div>
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
