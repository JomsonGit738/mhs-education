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
              <div className="row no-gutters slider-text align-items-center justify-content-end" data-scrollax-parent="true">
                <div className="col-md-6 ftco-animate text-md-right text-left">
                  <h1 className="mb-4">{slide.title}</h1>
                  <p className="w-75 ml-md-auto mr-md-0">{slide.description}</p>
                  {/* Primary CTA only; consultation handled in header */}
                  <p className="d-flex flex-wrap justify-content-md-end justify-content-start">
                    <Link href={slide.ctaHref} className="btn btn-apply-invert px-4 py-3 mt-3 mr-2">
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
