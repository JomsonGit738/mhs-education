import Image from 'next/image';

import { homeAbout } from '../data/content';

const aboutHighlightIcons = {
  'Established Expertise': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="home-about-highlight__icon-svg">
      <path
        d="M12 3 5 6.5v5.8c0 4.1 2.8 7.9 7 8.7 4.2-.8 7-4.6 7-8.7V6.5L12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9.4 12 1.7 1.7 3.6-3.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'Multiple Study Routes': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="home-about-highlight__icon-svg">
      <path
        d="M4.5 6.5h6.2c1.5 0 2.8.8 3.5 2 .7-1.2 2-2 3.5-2h1.8v10.2h-1.8c-1.8 0-3.3.8-4.3 2.1-.8-1.2-2.3-2.1-4.2-2.1H4.5V6.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 8.3v10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  ),
  'Student-First Support': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="home-about-highlight__icon-svg">
      <path
        d="M12 5.2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 19c1.5-2.6 4-4 7-4s5.5 1.4 7 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8.5h2.5M20.25 7.25v2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
    </svg>
  ),
} as const;

export const HomeAboutSection = () => (
  <section className="ftco-section home-about-section">
    <div className="container">
      <div className="home-about-stack">
        <div className="home-about-intro-row">
          <div className="home-about-media">
            <Image
              src={homeAbout.image}
              alt="MHS Education student guidance"
              fill
              sizes="(max-width: 991px) 100vw, 38vw"
              className="home-about-image"
            />
          </div>
          <div className="home-about-intro">
            <span className="home-section-eyebrow">About Us</span>
            <h2 className="home-about-title">{homeAbout.title}</h2>
            <p className="home-about-copy">{homeAbout.intro}</p>
            <p className="home-about-copy">{homeAbout.detail}</p>
          </div>
        </div>
        <div className="home-about-highlights" aria-label="About section highlights">
          {homeAbout.highlights.map((item) => (
            <div key={item.title} className="home-about-highlight">
              <div className="home-about-highlight__icon">
                {aboutHighlightIcons[item.title as keyof typeof aboutHighlightIcons]}
              </div>
              <div className="home-about-highlight__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
