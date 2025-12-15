'use client';

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '../data/content';

export const Testimonials = () => (
  <section className="ftco-section testimony-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-2">
        <div className="col-md-8 text-center heading-section ftco-animate">
          <h2 className="mb-4">Student Says About Us</h2>
          <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
        </div>
      </div>
      <div className="row ftco-animate justify-content-center">
        <div className="col-md-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            autoplay={{ delay: 4500 }}
            pagination={{ clickable: true }}
            breakpoints={{
              1000: { slidesPerView: 2 },
            }}
            className="carousel-testimony owl-carousel"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="item">
                  <div className="testimony-wrap d-flex">
                    <div className="user-img mr-4" style={{ backgroundImage: `url(${item.image})` }} />
                    <div className="text ml-2">
                      <span className="quote d-flex align-items-center justify-content-center">
                        <i className="icon-quote-left" />
                      </span>
                      <p>{item.quote}</p>
                      <p className="name">{item.name}</p>
                      <span className="position">{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  </section>
);
