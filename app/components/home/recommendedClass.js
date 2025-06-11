"use client"
import React, { useState, useRef } from 'react'
import styles from './recommended.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import { useRouter } from 'next/navigation';


import { Navigation, Autoplay } from 'swiper/modules';

import { HeartFilled, Heart, Next, Prev, MenuArrow } from '../icons'


export default function RecommendedClass() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const router = useRouter();
     const handlenav = () => {
        router.push('./classes');
     }

    const handleMouseEnter = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    };

    const [heart, setHeart] = useState({
        heart1: 'empty',
        heart2: 'empty',
        heart3: 'empty',
        heart4: 'empty',
        heart5: 'empty',
        heart6: 'empty',
        heart7: 'empty',
        heart8: 'empty',
        heart9: 'empty',
        heart10: 'empty',
    });


    console.log(heart.heart1);





    return (
        <div className={styles.recommneded}>

            <div className='container'>
                <h3>Recommended CLASSES</h3>
                <div className={styles.sliderWrapper}>
                    <div className={styles.customNavButtons}>
                        <Link href='' className={styles.exploreBtn}>EXPLORE MORE<MenuArrow /></Link>
                        <button ref={prevRef} className={styles.navButton}><Prev /></button>
                        <button ref={nextRef} className={styles.navButton}><Next /></button>
                    </div>
                    <div className={styles.swiperOverflowRight} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Swiper
                            ref={swiperRef}
                            modules={[Autoplay, Navigation]}
                            spaceBetween={18}
                            slidesPerView={3.8}
                            loop={true}
                            autoplay={{
                                delay: 3500,
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
                                    spaceBetween: 18,
                                    slidesPerView: 1.3,
                                },
                                480:{
                                    spaceBetween: 18,
                                    slidesPerView: 1.8,
                                },
                                768: {
                                    spaceBetween: 18,
                                    slidesPerView: 2.8,
                                },
                                968: {
                                    spaceBetween: 18,
                                    slidesPerView: 3.0,
                                },
                                1024: {
                                    spaceBetween: 18,
                                    slidesPerView: 3.2,
                                },
                                1280: {
                                    spaceBetween: 18,
                                    slidesPerView: 3.8,
                                },
                                1366: {
                                    spaceBetween: 18,
                                    slidesPerView: 3.8,
                                }
                            }}
                        >
                            <SwiperSlide>
                                <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart2: prev.heart2 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart2 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>

                                <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart1: prev.heart1 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart1 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                            <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart3: prev.heart3 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart3 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>

                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                    
                                </div>

                                <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart4: prev.heart4 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart4 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>
                            </SwiperSlide>



                            <SwiperSlide>
                            <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart5: prev.heart5 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart5 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>

                                <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart6: prev.heart6 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart6 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                            <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart8: prev.heart8 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart8 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>

                                <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart7: prev.heart7 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart7 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>
                            </SwiperSlide>


                            <SwiperSlide>
                            <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart10: prev.heart10 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart10 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>

                                <div className={styles.recommnededBox} onClick={handlenav}>
                                    <div className={styles.pic}>
                                        <div onClick={(e) => {
                                            e.stopPropagation();
                                            setHeart((prev) => ({
                                                ...prev,
                                                heart9: prev.heart9 === 'filed' ? 'empty' : 'filed'
                                            }))
                                        }} className={styles.hrt}>{heart.heart9 === 'filed' ? <HeartFilled /> : <Heart />}</div>
                                        <Link href=''><Image src="/recommend-pic.png" width={416} height={178} alt="Slide 1" /></Link>
                                    </div>
                                    <div className={styles.detailWrapping}>
                                    <div className={styles.blrow}>
                                        <div className={styles.tag}>  BOLLYWOOD</div>
                                        <div className={styles.studioTag}>  In Studio</div>
                                    </div>


                                    <div className={styles.Head}>  Mandala Art for relaxation</div>
                                    <div className={styles.subHead}>    By Crafting Happiness</div>
                                    <div className={styles.ad}> AED 456 </div>

                                    <div className={styles.dis}>    <span className={styles.ad1}> 24% Off</span> <span className={styles.ad2}>  AED 567</span> </div>
                                    </div>
                                    <div className={styles.btn} >Next Batch starts From 15 May, 2025</div>
                                </div>
                            </SwiperSlide>


                        </Swiper>
                    </div>

                </div>
            </div>


        </div>
    )
}
