import type { ReactNode } from 'react';
import { services } from '../data/content';
import { getServiceSectionId } from '../lib/sectionIds';

const serviceDescriptionContent: Record<string, ReactNode> = {
  'Academic Guidance': (
    <>
      <strong>Course advice</strong>
      {' '}and <strong>pathway mapping</strong> so your UK plan fits your goals.
    </>
  ),
  'Application Support': (
    <>
      <strong>Hands-on help</strong> with <strong>documents</strong>, <strong>timelines</strong>, and submissions for every intake.
    </>
  ),
  'Interview & Test Preparation': (
    <>
      <strong>Mock interviews</strong> and <strong>test readiness</strong> to present your best profile.
    </>
  ),
  'Student Finance Information': (
    <>
      Guidance on <strong>fees</strong>, <strong>funding options</strong>, and budgeting for UK study.
    </>
  ),
  'CV/PS Guidance': (
    <>
      <strong>Targeted feedback</strong> on <strong>CVs</strong> and <strong>personal statements</strong> to strengthen offers.
    </>
  ),
};

export const Services = () => (
  <section className="ftco-section services-modern">
    <div className="container">
      <div className="services-modern__layout">
        <div className="services-modern__content" data-aos="fade-up">
          <span className="services-modern__eyebrow">Student Support</span>
          <h2 className="services-modern__title">Our Services</h2>
          <p className="services-modern__intro text-muted">
            Clear support for the key parts of the UK university process, from choosing the right course to preparing
            stronger applications.
          </p>
        </div>
        <div className="services-agenda" data-aos="fade-up" data-aos-delay="80">
          <ul className="services-agenda__items" aria-label="MHS Education services">
          {services.map((service) => (
            <li id={getServiceSectionId(service.title)} className="services-agenda__item" key={service.title}>
              <div className="services-agenda__title-wrap">
                <h3 className="services-agenda__title">{service.title}</h3>
              </div>
              <div className="services-agenda__body">
                <p className="services-agenda__copy">
                  {serviceDescriptionContent[service.title] ?? service.description}
                </p>
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
