'use client';

import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { heroSlides } from '../data/content';
import { images } from '../data/images';

export const HeroSlider = () => (
  <section className="home-slider owl-carousel">
    <Swiper
      modules={[Autoplay, EffectFade, Pagination]}
      effect="fade"
      speed={900}
      loop
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <div className="slider-item" style={{ backgroundImage: `url(${images.manUsing})` }}>
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text align-items-center justify-content-start" data-scrollax-parent="true">
                <div className="col-md-6 ftco-animate">
                  <h1 className="mb-4">{slide.title}</h1>
                  <p>{slide.description}</p>
                  <p>
                    <Link href={slide.ctaHref} className="btn btn-primary px-4 py-3 mt-3">
                      {slide.ctaLabel}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
