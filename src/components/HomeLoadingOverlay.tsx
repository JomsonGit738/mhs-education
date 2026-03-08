'use client';

import { useEffect, useState } from 'react';

export const HomeLoadingOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const loadingText = 'Loading...';

  useEffect(() => {
    if (window.matchMedia('(max-width: 991px)').matches) {
      setIsVisible(false);
      document.body.classList.remove('home-loading-active');
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsVisible(false);
      document.body.classList.remove('home-loading-active');
    }, 4000);

    document.body.classList.add('home-loading-active');

    return () => {
      window.clearTimeout(timeoutId);
      document.body.classList.remove('home-loading-active');
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="home-loading-overlay" aria-live="polite" aria-label="Loading homepage content">
      <div className="home-loading-overlay__text" aria-hidden="true">
        {loadingText.split('').map((character, index) => (
          <span
            className="home-loading-overlay__char"
            key={`${character}-${index}`}
            style={{ ['--char-index' as string]: index }}
          >
            {character === ' ' ? '\u00A0' : character}
          </span>
        ))}
      </div>
    </div>
  );
};
