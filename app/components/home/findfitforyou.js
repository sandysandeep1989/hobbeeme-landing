import React, { useState , useRef} from 'react'
import styles from './find.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';


import { Navigation, Autoplay } from 'swiper/modules';

import {Next, Prev} from '../icons'


export default function FindFitForYou(){
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  
  

  return (
    <div className={styles.find}>

        <div className='container'>
              <h3>Find What Fits You</h3>
              <div className={styles.sliderWrapper}>
              <div className={styles.customNavButtons}>
                <button ref={prevRef} className={styles.navButton}><Prev/></button>
                <button ref={nextRef} className={styles.navButton}><Next/></button>
            </div>
             <div className={styles.swiperOverflowRight}>
                  <Swiper
                    modules={[Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={3.8}
                        loop={true}
                        autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        }}
                        // autoplay={false}
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
                              slidesPerView: 2.2,
                            },
                            500: {
                              spaceBetween: 20,
                              slidesPerView: 2.4,
                            },
                            768: {
                              spaceBetween: 25,
                              slidesPerView: 2.8,
                            },
                            968: {
                              spaceBetween: 25,
                              slidesPerView: 3.0,
                            },
                            1024: {
                              spaceBetween: 30,
                              slidesPerView: 3.2,
                            },
                            1280: {
                              spaceBetween: 30,
                              slidesPerView: 3.8,
                            },
                            1366: {
                              spaceBetween: 30,
                              slidesPerView: 3.8,
                            }
                          }}
                    >
                        <SwiperSlide>
                          <div className={styles.imageWrapper}>
                            <Link href=''>
                            <div className={styles.imgBg}>
                            <Image 
                                src="/kidImg.png" 
                                width={300} 
                                height={324} 
                                alt="Slide 1"
                                className={styles.imageResponsive}
                              />

                            </div>
                              
                            </Link>
                            
                          </div>
                          <div className={styles.head}><Link href=''>KIDS</Link></div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.imageWrapper}>
                            <Link href=''>
                            <div className={styles.imgBg2}>

                           
                              <Image 
                                src="/family5.png" 
                                width={300} 
                                height={324} 
                                alt="Slide 2"
                                className={styles.imageResponsive}
                                
                              />
                               </div>
                            </Link>
                            <div className={styles.head}><Link href=''>COUPLES</Link></div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.imageWrapper}>
                            <Link href=''>
                            <div className={styles.imgBg3}>

                              <Image 
                                src="/girl.png" 
                                width={300} 
                                height={324} 
                                alt="Slide 3"
                        
                              />
                              </div>
                            </Link>
                            <div className={styles.head}><Link href=''>Online Classes</Link></div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.imageWrapper}>
                            <Link href=''>
                            <div className={styles.imgBg4}>

                              <Image 
                                src="/family.png" 
                                width={300} 
                                height={324} 
                                alt="Slide 4"
                                

                              />
                              </div>
                            </Link>
                            <div className={styles.head}><Link href=''>FAMILY</Link></div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.imageWrapper}>
                            <Link href=''>
                            <div className={styles.imgBg5}>

                              <Image 
                                src="/adventuresImg.png" 
                                width={300} 
                                height={324} 
                                alt="Slide 5"
                
                              />
                              </div>
                            </Link>
                            <div className={styles.head}><Link href=''>ADVENTURE</Link></div>
                          </div>
                        </SwiperSlide>
                    </Swiper>
                    </div>

        </div>
        </div>

       
    </div>
  )
}
