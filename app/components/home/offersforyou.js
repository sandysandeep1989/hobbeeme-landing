import React, { useState , useRef} from 'react'
import styles from './offer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';


import { Navigation, Autoplay } from 'swiper/modules';

import {Next, Prev} from '../icons'


export default function OfferForYou(){
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  
  

  return (
    <div className={styles.offer}>

        <div className='container'>
          <div className={styles.sliderHeader}></div>
              <h3>OFFERS FOR YOU</h3>
              <div className={styles.sliderWrapper}>
              <div className={styles.customNavButtons}>
                <button ref={prevRef} className={styles.navButton}><Prev/></button>
                <button ref={nextRef} className={styles.navButton}><Next/></button>
            </div>

            <div className={styles.swiperOverflowRight}>
                  <Swiper
                    modules={[Autoplay, Navigation]}
                        spaceBetween={50}
                        slidesPerView={2.5}
                        loop={true}
                        autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                          }}
                          onBeforeInit={(swiper) => {
                            if (swiper.params.navigation) {
                              swiper.params.navigation.prevEl = prevRef.current;
                              swiper.params.navigation.nextEl = nextRef.current;
                            }
                          }}
                          breakpoints={{
                            0: {
                            spaceBetween: 20,
                            slidesPerView: 1.3,
                            },
                            768: {
                            spaceBetween: 30,
                            slidesPerView: 2.4,
                            },
                            968: {
                            spaceBetween: 30,
                            slidesPerView: 2.2,
                            },
                            1024: {
                            spaceBetween: 30,
                            slidesPerView: 2.2,
                            },
                            1280: {
                            spaceBetween: 40,
                            slidesPerView: 2.2,
                            },
                            1366: {
                            spaceBetween: 40,
                            slidesPerView: 2.2,
                            },
                            1440: {
                            spaceBetween: 50,
                            slidesPerView: 2.3,
                            },
                            }}
                        
                    >
                        <SwiperSlide><Image src="/offer-card1.png" width={708} height={396} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide><Image src="/offer-card2.png" width={708} height={396} alt="Slide 2" /></SwiperSlide>
                        <SwiperSlide><Image src="/offer-card-3.png" width={708} height={396} alt="Slide 3" /></SwiperSlide>
                        <SwiperSlide><Image src="/offer-card1.png" width={708} height={396} alt="Slide 1" /></SwiperSlide>
                        <SwiperSlide><Image src="/offer-card2.png" width={708} height={396} alt="Slide 2" /></SwiperSlide>
                        <SwiperSlide><Image src="/offer-card-3.png" width={708} height={396} alt="Slide 3" /></SwiperSlide>
                    </Swiper>
                    </div>

        </div>
        </div>

       
    </div>
  )
}
