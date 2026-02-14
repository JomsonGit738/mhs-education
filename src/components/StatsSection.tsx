'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/content';
import { images } from '../data/images';

export const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.35 });

  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: `url(${images.bg3})` }}
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2 d-flex">
          <div className="col-md-6 align-items-stretch d-flex">
            <div className="img img-video d-flex align-items-center p-2" style={{ backgroundImage: 'none' }}>
              <video
                className="w-100 h-100 rounded"
                poster={images.about2}
                controls
                preload="none"
                aria-label="Play campus video"
              >
                <source
                  src="https://videos.pexels.com/video-files/6209376/6209376-uhd_4096_2160_25fps.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col-md-6 heading-section heading-section-white ftco-animate pl-lg-5 pt-md-0 pt-5">
            <h2 className="mb-4">Supporting UK Student Success</h2>
            <p>
              MHS Education guides ambitious students with personalised admissions planning, careful documentation checks, and attentive follow-up so every
              UK application stays on track.
            </p>
            <p>
              Beyond offers, we provide visa preparation, scholarship guidance, accommodation advice, and pre-departure briefings to help you arrive in the UK
              with confidence.
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
