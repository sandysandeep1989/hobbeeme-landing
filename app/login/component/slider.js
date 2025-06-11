import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from '../component/login.module.css'
import 'swiper/css/pagination';

export default function Slider (){
    const slides = [
        { id: 1, image: '/login-pic1.png',},
        { id: 2, image: '/login-pic2.png',  },
        { id: 3, image: '/login-pic3.png',},
      ];
  return (
    <div className="swipperLogin">
     <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
      >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Image src={`${slide.image}`} className={styles.loginPic} width={818} height={1050} alt='' />

      </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}

