'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ProductSlideShow.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ProductCard from './ProductCard';

export default function ProductSlideShow({products}) {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper1"
      >
        {products.map((product) => (
        <SwiperSlide key={product.id}className='swiper-slide1'>
          <ProductCard product={product}/>
        </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
