import { PageHero } from '../components/PageHero';
import { StatsSection } from '../components/StatsSection';
import { Testimonials } from '../components/Testimonials';
import { Gallery } from '../components/Gallery';
import { images } from '../data/images';
import { pageHero } from '../data/content';

const aboutHighlights = [
  {
    title: 'Who We Are',
    description: 'MHS Education supports ambitious UK-bound students with practical guidance that turns study plans into achievable offers.',
  },
  {
    title: 'Our Vision',
    description:
      'Established in 2020, our mission is to make leading UK campuses accessible through tailored support, well-matched programmes, and realistic timelines.',
  },
  {
    title: 'Student-Centred Approach',
    description:
      'Every conversation starts with attentive listening so we can shape personalised routes around academic strengths, finances, and student wellbeing.',
  },
  {
    title: 'Company History',
    description:
      'From a focused advisory team, we have grown into a multi-intake specialist supporting foundation, undergraduate, postgraduate, diploma, and top-up applicants.',
  },
  {
    title: 'Proven Success Stories',
    description:
      'Students have secured offers from respected universities across the UK through careful preparation, deadline management, and post-offer mentoring.',
  },
  {
    title: 'Our Commitment',
    description:
      'We continue to develop our service with integrity, responsiveness, and a long-term commitment to helping students thrive from application to enrolment.',
  },
];

export const AboutPage = () => (
  <>
    <PageHero title={pageHero.about.title} breadcrumb={pageHero.about.breadcrumb} background={images.uk} />
    <section className="ftco-section ftco-no-pt ftc-no-pb about-story-section">
      <div className="container">
        <div className="about-story-layout">
          <div className="about-story-intro" data-aos="fade-up">
            <h2 className="about-story-title">
              Clear guidance for UK admissions
            </h2>
            <p className="about-story-lead">
              We help students move forward with clarity, from course selection and application planning to offer management and enrolment preparation. Our focus
              is straightforward advice, responsive communication, and outcomes that align with each student&apos;s goals.
            </p>
          </div>
        </div>

        <div className="about-company-story" aria-label="MHS Education story">
          <div className="about-company-story__rail" aria-hidden="true">
            <span>Our Story</span>
          </div>
          {aboutHighlights.map((item, index) => (
            <article className="about-story-card" data-aos="fade-up" data-aos-delay={index * 40} key={item.title}>
              <div className="about-story-card__content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
    <StatsSection />
    <Testimonials />
    <Gallery />
  </>
);
