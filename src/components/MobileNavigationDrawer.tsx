'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { brand, navLinks, socialLinks } from '../data/content';
import { imageAssets } from '../data/images';
import { SocialIcon } from './SocialIcon';

type MobileNavigationDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: () => void;
};

export const MobileNavigationDrawer = ({ isOpen, onClose, onNavigate }: MobileNavigationDrawerProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname() || '/';

  useEffect(() => setIsMounted(true), []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 220);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const desktopMedia = window.matchMedia('(min-width: 992px)');
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        onNavigate();
      }
    };

    document.addEventListener('keydown', handleEscape);
    desktopMedia.addEventListener('change', handleDesktopChange);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleEscape);
      desktopMedia.removeEventListener('change', handleDesktopChange);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose, onNavigate]);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !drawerRef.current) {
      return;
    }

    const focusableElements = Array.from(
      drawerRef.current.querySelectorAll<HTMLElement>('button, a[href], [tabindex]:not([tabindex="-1"])'),
    ).filter((element) => !element.hasAttribute('disabled'));
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement?.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement?.focus();
    }
  };

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div
      className={`mobile-navigation-drawer${isOpen ? ' is-open' : ''}`}
      aria-hidden={!isOpen}
    >
      <div
        ref={drawerRef}
        id="mobile-navigation-drawer"
        className="mobile-navigation-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onKeyDown={handleKeyDown}
      >
        <div className="mobile-navigation-drawer__header">
          <Link href="/" className="mobile-navigation-drawer__brand" onClick={onNavigate} tabIndex={isOpen ? 0 : -1}>
            <Image
              src={imageAssets.bgRemovedLogo}
              alt={`${brand.name} admissions guidance logo`}
              className="mobile-navigation-drawer__logo"
            />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-navigation-drawer__close"
            aria-label="Close navigation"
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav className="mobile-navigation-drawer__nav" aria-label="Mobile site navigation">
          <ul className="mobile-navigation-drawer__links">
            {navLinks.map((link, index) => {
              const isActive = link.path === '/' ? pathname === '/' : pathname.startsWith(link.path);

              return (
                <li key={link.path} style={{ '--drawer-link-index': index } as CSSProperties}>
                  <Link
                    href={link.path}
                    className={`mobile-navigation-drawer__link${isActive ? ' is-active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={onNavigate}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mobile-navigation-drawer__footer">
          <div className="mobile-navigation-drawer__socials" aria-label="Social media links">
            {socialLinks.map((link) => (
              <a
                key={link.icon}
                href={link.href}
                aria-label={link.label ?? link.icon}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
              >
                <SocialIcon link={link} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
