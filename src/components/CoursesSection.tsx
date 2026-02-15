import type { ReactNode } from 'react';
import type { Course } from '../data/content';
import Link from 'next/link';

type CoursesSectionProps = {
  title?: ReactNode;
  description?: ReactNode;
  items: Course[];
};

const CourseCard = ({ course }: { course: Course }) => (
  <article className="course-card-modern ftco-animate" data-aos="fade-up">
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
      <Link href="/contact" className="btn btn-apply-invert mt-2">
        Apply Now
      </Link>
    </div>
  </article>
);

export const CoursesSection = ({ title, description, items }: CoursesSectionProps) => (
  <section className="ftco-section">
    <div className="container-fluid px-4">
      {(title || description) && (
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section ftco-animate">
            {title && <h2 className="mb-4">{title}</h2>}
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
      <div className="courses-grid">
        {items.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  </section>
);
