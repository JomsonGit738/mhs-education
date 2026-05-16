'use client';

import type { CSSProperties, KeyboardEvent, ReactNode } from 'react';
import { useState } from 'react';
import type { Teacher } from '../data/content';

type TeachersSectionProps = {
  items: Teacher[];
  title?: ReactNode;
  description?: ReactNode;
};

const serviceThemes = [
  '215 62% 24%',
  '186 58% 22%',
  '226 54% 26%',
  '168 48% 23%',
];

const renderBadgeIcon = (teacher: Teacher) => {
  const role = teacher.role.toLowerCase();

  if (role.includes('admissions') || role.includes('application')) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 2 4 5v6c0 5 3.73 9.08 8 11 4.27-1.92 8-6 8-11V5l-8-3Zm0 2.18 6 2.25V11c0 3.7-2.7 7.18-6 8.93C8.7 18.18 6 14.7 6 11V6.43l6-2.25Zm0 3.32-2 2v2h1v3h2v-3h1v-2l-2-2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (role.includes('finance') || role.includes('scholar')) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M4 5h16v2H4V5Zm0 6h16v2H4v-2Zm0 6h16v2H4v-2Zm6.5-9.25a2.75 2.75 0 1 0 0 5.5h.25v1h1.5v-1h.25a2.75 2.75 0 1 0 0-5.5h-.25v-1h-1.5v1h-.25Zm2 3c.69 0 1.25-.56 1.25-1.25S13.19 9.5 12.5 9.5h-.25v2.25h.25Zm-1.75 1.25h-.25a1.25 1.25 0 0 1 0-2.5h.25v2.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (role.includes('support') || role.includes('experience')) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M12 21s-6.5-4.35-8.42-8.07C2.09 11.1 2 9.83 2 9.24 2 6.35 4.42 4 7.4 4A5.1 5.1 0 0 1 12 6.15 5.1 5.1 0 0 1 16.6 4C19.58 4 22 6.35 22 9.24c0 .59-.09 1.86-1.58 3.69C18.5 16.65 12 21 12 21Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        d="M12 2 1 7l11 5 9-4.09V17h2V7L12 2Zm0 7.17L4.71 7 12 3.83 19.29 7 12 9.17ZM5 11.64v4.18C5 18.42 8.14 20 12 20s7-1.58 7-4.18v-4.18l-7 3.18-7-3.18Zm7 6.36c-3.08 0-5-.98-5-1.82v-2.16l5 2.27 5-2.27v2.16c0 .84-1.92 1.82-5 1.82Z"
        fill="currentColor"
      />
    </svg>
  );
};

const TeacherCard = ({
  teacher,
  index,
  isActive,
  onActivate,
}: {
  teacher: Teacher;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) => {
  const style = {
    '--service-theme': serviceThemes[index % serviceThemes.length],
  } as CSSProperties & Record<'--service-theme', string>;

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onActivate();
    }
  };

  return (
    <article
      className="student-service-card"
      data-aos="fade-up"
      data-active={isActive ? 'true' : 'false'}
      aria-expanded={isActive}
      role="button"
      tabIndex={0}
      style={style}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      onKeyDown={handleKeyDown}
    >
      <div className="student-service-card__meta">
        <div className="student-service-card__icon" aria-hidden="true">
          {renderBadgeIcon(teacher)}
        </div>
        <div>
          <span className="student-service-card__role">{teacher.role}</span>
          <h3>{teacher.name}</h3>
        </div>
      </div>
      <div className="student-service-card__panel">
        <div
          className="student-service-card__photo"
          style={{ backgroundImage: `url(${teacher.image})` }}
          aria-hidden="true"
        />
        <div className="student-service-card__body">
          <p>{teacher.bio}</p>
          <span className="student-service-card__cue" aria-hidden="true">
            <span>Review support</span>
            <svg viewBox="0 0 24 24" className="student-service-card__arrow">
              <path
                d="M7 17 17 7m0 0H9m8 0v8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export const TeachersSection = ({ items, title, description }: TeachersSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="student-services-section">
      <div className="container">
        {(title || description) && (
          <div className="student-services-section__header">
            <div className="student-services-section__eyebrow">Support That Stays With You</div>
            <div className="heading-section text-center">
              {title && <h2>{title}</h2>}
              {description && <p>{description}</p>}
            </div>
          </div>
        )}
        <div className="student-services-grid">
          {items.map((teacher, index) => (
            <TeacherCard
              key={teacher.name}
              teacher={teacher}
              index={index}
              isActive={index === activeIndex}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
