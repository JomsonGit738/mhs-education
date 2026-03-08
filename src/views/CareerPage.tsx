import { PageHero } from '../components/PageHero';
import { images } from '../data/images';

const careerTracks = [
  {
    eyebrow: 'Join Our Team',
    title: 'Build meaningful student outcomes with us',
    description:
      'We welcome advisers, counsellors, and operations professionals who value clear communication, careful guidance, and responsible UK admissions support.',
    highlights: ['Student-focused roles', 'Practical admissions delivery', 'Collaborative team culture'],
    ctaLabel: 'Send Your CV',
    ctaHref: 'mailto:info@mhseducation.com',
    ctaClassName: 'btn btn-primary btn-apply-invert',
  },
  {
    eyebrow: 'Become an Agent',
    title: 'Grow your student network through a trusted partnership',
    description:
      'Partner with MHS Education to support foundation, undergraduate, postgraduate, diploma, and top-up applicants with clearer processes, training support, and shared momentum.',
    highlights: ['Structured onboarding support', 'Process and marketing guidance', 'Long-term partnership potential'],
    ctaLabel: 'Partner With Us',
    ctaHref: '/contact',
    ctaClassName: 'btn btn-outline-primary',
  },
] as const;

// Career page covers both internal roles and agent partnerships.
export const CareerPage = () => (
  <>
    <PageHero title="Career" breadcrumb="Career" background={images.bg2} />
    <section className="ftco-section career-modern-section">
      <div className="container">
        <div className="career-modern-intro" data-aos="fade-up">
          <span className="career-modern-eyebrow">Career Opportunities</span>
          <h2 className="career-modern-title">
            Professional opportunities shaped around
            {' '}
            <span>student success and trusted partnerships</span>
          </h2>
          <p className="career-modern-copy">
            Whether you are looking to join our internal team or collaborate as an external recruitment partner, we focus on relationships built around
            clarity, accountability, and strong support for students progressing toward UK study.
          </p>
        </div>
        <div className="career-modern-grid">
          {careerTracks.map((track, index) => (
            <article className="career-modern-card" data-aos="fade-up" data-aos-delay={index * 60} key={track.title}>
              <span className="career-modern-card__eyebrow">{track.eyebrow}</span>
              <h3>{track.title}</h3>
              <p>{track.description}</p>
              <ul className="career-modern-points" aria-label={`${track.eyebrow} highlights`}>
                {track.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <a href={track.ctaHref} className={track.ctaClassName}>
                {track.ctaLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);
