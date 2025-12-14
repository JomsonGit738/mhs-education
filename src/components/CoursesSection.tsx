import type { ReactNode } from 'react';
import type { Course } from '../data/content';

type CoursesSectionProps = {
  title?: ReactNode;
  description?: ReactNode;
  items: Course[];
};

const CourseCard = ({ course }: { course: Course }) => (
  <div className="col-md-3 course ftco-animate" data-aos="fade-up">
    <div className="img" style={{ backgroundImage: `url(${course.image})` }} />
    <div className="text pt-4">
      <p className="meta d-flex">
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
      <h3>
        <a href="#">{course.title}</a>
      </h3>
      <p>{course.description}</p>
      <p>
        <a href="#" className="btn btn-primary">
          Apply now
        </a>
      </p>
    </div>
  </div>
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
      <div className="row">
        {items.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  </section>
);
