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
            <div className="img img-video d-flex align-items-center" style={{ backgroundImage: `url(${images.about2})` }}>
              <div className="video justify-content-center">
                <a
                  href="https://vimeo.com/45830194"
                  className="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                  aria-label="Play campus video"
                >
                  <span className="ion-ios-play" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 heading-section heading-section-white ftco-animate pl-lg-5 pt-md-0 pt-5">
            <h2 className="mb-4">Fox University</h2>
            <p>
              Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a
              paradisematic country. A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
            <p>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
        <div className="row d-md-flex align-items-center justify-content-center" ref={ref}>
          <div className="col-lg-12">
            <div className="row d-md-flex align-items-center">
              {stats.map((stat) => (
                <div key={stat.label} className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                  <div className="block-18">
                    <div className="icon">
                      <span className={stat.icon} />
                    </div>
                    <div className="text">
                      <strong className="number">
                        {inView ? <CountUp end={stat.value} duration={3} separator="," /> : 0}
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
