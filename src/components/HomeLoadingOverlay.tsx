'use client';

import { useEffect, useState } from 'react';

export const HomeLoadingOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);

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
      <div className="loader" aria-hidden="true">
        {['M', 'H', 'S'].map((letter, index) => (
          <span
            key={letter}
            className="loader__letter"
            style={{ ['--loader-delay' as string]: `${index * 0.18}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
};
