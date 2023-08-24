'use client'

import Image from 'next/image'
import React from 'react'
import event_1 from '/public/images/event_1.jpg'
import styles from './MainEventBanner.module.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// import required modules
import { Scrollbar } from 'swiper/modules';

export default function EventBanner() {
  return (
    <div>
        <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className={styles.mySwiper}
      >
        <SwiperSlide><Image src={event_1} width={750} height={680} alt="이벤트 배너" layout="responsive" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}
