'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent, MouseEvent as ReactMouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import { blogs, courses, navLinks, offerings, services } from '../data/content';
import { getOfferingSectionId, getServiceSectionId } from '../lib/sectionIds';

type SearchItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string;
};

const pageDescriptions: Record<string, string> = {
  '/': 'MHS Education admissions guidance and student support.',
  '/courses': 'Foundation, undergraduate, postgraduate, diploma, and top-up programmes.',
  '/services': 'Application, academic, finance, interview, and personal statement support.',
  '/career': 'Career opportunities and local agent partnership applications.',
  '/about': 'Learn about MHS Education and our approach to student guidance.',
  '/contact': 'Contact our team for admissions guidance and application support.',
};

const searchIndex: SearchItem[] = [
  ...navLinks.map((link) => ({
    title: link.label,
    description: pageDescriptions[link.path] ?? `Visit the ${link.label} page.`,
    href: link.path,
    category: 'Page',
  })),
  {
    title: 'Privacy Policy',
    description: 'How MHS Education collects, uses, stores, and protects personal information.',
    href: '/privacy-policy',
    category: 'Legal',
    keywords: 'data protection cookies ICO GDPR',
  },
  {
    title: 'Terms of Service',
    description: 'Terms and conditions for using the MHS Education website and services.',
    href: '/terms-of-service',
    category: 'Legal',
    keywords: 'terms conditions website use',
  },
  ...courses.map((course) => ({
    title: course.title,
    description: course.description,
    href: `/courses#${course.id}`,
    category: 'Programme',
    keywords: `${course.teacher} ${course.seats} ${course.duration}`,
  })),
  ...services.map((service) => ({
    title: service.title,
    description: service.description,
    href: `/services#${getServiceSectionId(service.title)}`,
    category: 'Service',
  })),
  ...offerings.map((offering) => ({
    title: offering.title,
    description: offering.description,
    href: `/services#${getOfferingSectionId(offering.title)}`,
    category: 'Support',
  })),
  ...blogs.map((post) => ({
    title: post.title,
    description: post.excerpt,
    href: `/blog/${post.id}`,
    category: 'Insight',
    keywords: post.tags?.join(' '),
  })),
];

type SiteSearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: () => void;
};

export const SiteSearchModal = ({ isOpen, onClose, onNavigate }: SiteSearchModalProps) => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const normalizedQuery = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalizedQuery) {
      return searchIndex.filter((item) => item.category === 'Page').slice(0, 6);
    }

    return searchIndex
      .map((item) => {
        const title = item.title.toLowerCase();
        const searchableText = [item.title, item.description, item.category, item.keywords]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        if (!searchableText.includes(normalizedQuery)) {
          return null;
        }

        const score = title.startsWith(normalizedQuery) ? 0 : title.includes(normalizedQuery) ? 1 : 2;
        return { item, score };
      })
      .filter((result): result is { item: SearchItem; score: number } => result !== null)
      .sort((left, right) => left.score - right.score || left.item.title.localeCompare(right.item.title))
      .slice(0, 10)
      .map((result) => result.item);
  }, [normalizedQuery]);

  useEffect(() => {
    if (!isOpen) {
      setQuery('');
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  const handleDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Tab' || !dialogRef.current) {
      return;
    }

    const focusableElements = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>('button, a[href], input, [tabindex]:not([tabindex="-1"])'),
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

  const handleResultNavigation = (event: ReactMouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    onNavigate();
    router.push(href);
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="modal site-search-modal show"
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-search-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
        onKeyDown={handleDialogKeyDown}
      >
        <div className="modal-content site-search-modal__content">
          <div className="modal-header site-search-modal__header">
            <div>
              <span className="site-search-modal__eyebrow">Search MHS Education</span>
              <h2 className="modal-title" id="site-search-title">What can we help you find?</h2>
            </div>
            <button type="button" className="site-search-modal__close" onClick={onClose} aria-label="Close search">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body site-search-modal__body">
            <label htmlFor="site-search-input" className="sr-only">Search the website</label>
            <div className="site-search-modal__field">
              <span className="ion-ios-search" aria-hidden="true" />
              <input
                ref={inputRef}
                id="site-search-input"
                type="search"
                className="form-control"
                value={query}
                placeholder="Search programmes, services, guidance, or pages"
                autoComplete="off"
                aria-controls="site-search-results"
                onChange={(event) => setQuery(event.target.value)}
              />
              {query ? (
                <button type="button" className="site-search-modal__clear" onClick={() => setQuery('')}>
                  Clear
                </button>
              ) : null}
            </div>

            <div className="site-search-modal__summary" role="status" aria-live="polite">
              {normalizedQuery
                ? `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${query.trim()}”`
                : 'Suggested pages'}
            </div>

            <div id="site-search-results" className="site-search-modal__results">
              {results.length ? (
                results.map((result) => (
                  <a
                    key={`${result.category}-${result.title}-${result.href}`}
                    href={result.href}
                    className="course-search-result site-search-modal__result"
                    onClick={(event) => handleResultNavigation(event, result.href)}
                  >
                    <span className="site-search-modal__result-category">{result.category}</span>
                    <span className="course-search-result__title">{result.title}</span>
                    <span className="course-search-result__meta">{result.description}</span>
                  </a>
                ))
              ) : (
                <div className="site-search-modal__empty">
                  <h3>No matching results</h3>
                  <p>Try a course name, “application”, “scholarship”, “contact”, or another shorter phrase.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
