import type { ReactNode } from 'react';
import type { Teacher } from '../data/content';

type TeachersSectionProps = {
  items: Teacher[];
  title?: ReactNode;
  description?: ReactNode;
};

const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
  <div className="col-md-6 col-lg-3 ftco-animate" data-aos="fade-up">
    <div className="staff">
      <div className="img-wrap d-flex align-items-stretch">
        <div className="img align-self-stretch" style={{ backgroundImage: `url(${teacher.image})` }} />
      </div>
      <div className="text pt-3 text-center">
        <h3>{teacher.name}</h3>
        <span className="position mb-2">{teacher.role}</span>
        <div className="faded">
          <p>{teacher.bio}</p>
          <ul className="ftco-social text-center">
            {teacher.socials.map((social) => (
              <li key={social.icon} className="ftco-animate">
                <a href={social.href}>
                  <span className={social.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export const TeachersSection = ({ items, title, description }: TeachersSectionProps) => (
  <section className="ftco-section bg-light">
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
        {items.map((teacher) => (
          <TeacherCard key={teacher.name} teacher={teacher} />
        ))}
      </div>
    </div>
  </section>
);
