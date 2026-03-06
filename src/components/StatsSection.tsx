'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/content';

export const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <section className="ftco-section ftco-counter img stats-section-video" id="section-counter">
      <video
        className="stats-section-video__media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="https://videos.pexels.com/video-files/6209376/6209376-uhd_4096_2160_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="stats-section-video__overlay" aria-hidden="true" />
      <div className="container stats-section-video__content">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-lg-8 heading-section heading-section-white ftco-animate text-center">
            <h2 className="mb-4">UK Student Support</h2>
            <p>
              MHS Education guides ambitious students with personalised admissions planning, careful documentation checks, and attentive follow-up so every
              UK application stays on track.
            </p>
            <p>
              Beyond receiving offers, we provide scholarship guidance and responsive student support to help you move from application to enrolment with
              confidence.
            </p>
          </div>
        </div>
        <div className="row d-md-flex align-items-center justify-content-center" ref={ref}>
          <div className="col-lg-12">
            <div className="row d-md-flex align-items-stretch stats-grid-modern">
              {stats.map((stat) => (
                <div key={stat.label} className="col-sm-6 col-lg-4 d-flex justify-content-center ftco-animate">
                  <div className="stat-card-modern">
                    <div className="icon">
                      <span className={stat.icon} />
                    </div>
                    <div className="text">
                      <strong className="number">
                        {inView ? <CountUp end={stat.value} duration={3} separator="," suffix={stat.suffix ?? ''} /> : 0}
                      </strong>
                      <span>{stat.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
