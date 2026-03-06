import type { ReactNode } from 'react';
import type { Course } from '../data/content';
import Link from 'next/link';

type CoursesSectionProps = {
  title?: ReactNode;
  description?: ReactNode;
  items: Course[];
  cardHref?: string;
  cardLabel?: string;
  sectionActionHref?: string;
  sectionActionLabel?: string;
  sectionClassName?: string;
  gridClassName?: string;
  cardClassName?: string;
  emptyState?: ReactNode;
};

const CourseCard = ({
  course,
  cardHref = '/contact',
  cardLabel = 'Apply Now',
  cardClassName = '',
}: {
  course: Course;
  cardHref?: string;
  cardLabel?: string;
  cardClassName?: string;
}) => (
  <article id={course.id} className={`course-card-modern ftco-animate ${cardClassName}`.trim()} data-aos="fade-up">
    <div className="course-img" style={{ backgroundImage: `url(${course.image})` }} />
    <div className="course-body">
      <p className="meta d-flex flex-wrap">
        <span>
          <i className="icon-user mr-2" />
          {course.teacher}
        </span>
        <span>
          <i className="icon-table mr-2" />
          {course.seats}
        </span>
        <span>
          <i className="icon-calendar mr-2" />
          {course.duration}
        </span>
      </p>
      <h3 className="course-title">{course.title}</h3>
      <p className="course-copy">{course.description}</p>
      <Link href={cardHref} className="btn btn-apply-invert mt-2">
        {cardLabel}
      </Link>
    </div>
  </article>
);

export const CoursesSection = ({
  title,
  description,
  items,
  cardHref,
  cardLabel,
  sectionActionHref,
  sectionActionLabel,
  sectionClassName,
  gridClassName,
  cardClassName,
  emptyState,
}: CoursesSectionProps) => (
  <section className={`ftco-section ${sectionClassName ?? ''}`.trim()}>
    <div className="container-fluid px-4">
      {(title || description) && (
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            {title && <h2 className="mb-4">{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
      {items.length ? (
        <div className={`courses-grid ${gridClassName ?? ''}`.trim()}>
          {items.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              cardHref={cardHref}
              cardLabel={cardLabel}
              cardClassName={cardClassName}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-5">
          {emptyState ?? <p className="mb-0 text-secondary">No courses matched your search.</p>}
        </div>
      )}
      {sectionActionHref && sectionActionLabel ? (
        <div className="text-center mt-4">
          <Link href={sectionActionHref} className="btn btn-outline-primary px-4 py-3">
            {sectionActionLabel}
          </Link>
        </div>
      ) : null}
    </div>
  </section>
);
