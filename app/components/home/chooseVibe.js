"use client"
import React, { useState, useRef, useEffect } from 'react'
// import {eventCardsData} from '@/app/components/experience-list/event-card/data/EventCard'
import styles from './choose.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { VibeIcon, MenuArrow } from '@/app/components/icons'
import PlanAEventPage from '@/app/plan-a-event/component/plan-a-event'

import EventCardGrid from '@/app/components/experience-list/event-card/EventCardGrid'

export const eventCardsData = [
  {
    id: 1,
    title: "Ishq Sufiana Music Night",
    category: "Creative & Performing Arts",
    date: "2025-05-23",
    price: 456,
    timeOfDay: "Evening",
    area: "Al Barari",
    location: "Alvor Park, Dubai",
    tag: "Concerts",
    rating: 4.8,
    availableSeats: 50,
    image: '/experience/cardImg.png',
    rating: 4,
    location: 'Dubai',
    venue: 'Alive Park',
    currentPrice: 'AED 456',
    originalPrice: 'AED 567',
    discount: '24% Off',
    tag: 'Only 50 Slots Left!'
  },
  {
    id: 2,
    title: "Sufi Music Night",
    category: "Art, Culture & Expression",
    date: "2025-05-24",
    price: 399,
    timeOfDay: "Night",
    area: "Al Furjan",
    location: "Downtown Stage, Dubai",
    tag: "Concerts",
    rating: 4.6,
    availableSeats: 12,
    image: '/experience/cardImg.png',
    rating: 4,
    location: 'Dubai',
    venue: 'Alive Park',
    currentPrice: 'AED 456',
    originalPrice: 'AED 567',
    discount: '24% Off',
    tag: 'Only 50 Slots Left!'
  },
  {
    id: 3,
    title: "Culinary Secrets: Emirati Cuisine",
    category: "Food & Culinary",
    date: "2025-05-25",
    price: 299,
    timeOfDay: "Afternoon",
    area: "Academic City",
    location: "Culinary School, Dubai",
    tag: "Workshops",
    rating: 4.9,
    availableSeats: 8,
    image: '/experience/cardImg.png',
    rating: 4,
    location: 'Dubai',
    venue: 'Alive Park',
    currentPrice: 'AED 456',
    originalPrice: 'AED 567',
    discount: '24% Off',
    tag: 'Only 50 Slots Left!'
  },
  {
    id: 4,
    title: "Wellness Yoga Retreat",
    category: "Wellness & Lifestyle",
    date: "2025-05-26",
    price: 1200,
    timeOfDay: "Morning",
    area: "Al Barari",
    location: "Zen Garden, Dubai",
    tag: "Retreats",
    rating: 4.7,
    availableSeats: 20,
    image: '/experience/cardImg.png',
    rating: 4,
    location: 'Dubai',
    venue: 'Alive Park',
    currentPrice: 'AED 456',
    originalPrice: 'AED 567',
    discount: '24% Off',
    tag: 'Only 50 Slots Left!'
  },
  {
    id: 5,
    title: "Rock Climbing Adventure",
    category: "Adventure & Outdoors",
    date: "2025-05-27",
    price: 700,
    timeOfDay: "Morning",
    area: "Al Furjan",
    location: "Mountain Base, Dubai",
    tag: "Adventures",
    rating: 4.4,
    availableSeats: 10,
    image: '/experience/cardImg.png',
    rating: 4,
    location: 'Dubai',
    venue: 'Alive Park',
    currentPrice: 'AED 456',
    originalPrice: 'AED 567',
    discount: '24% Off',
    tag: 'Only 50 Slots Left!'
  },
  {
    id: 6,
    title: "Football Skills Camp",
    category: "Sports & Fitness",
    date: "2025-05-28",
    price: 350,
    timeOfDay: "Evening",
    area: "Your Premise",
    location: "Local Turf, Dubai",
    tag: "Training",
    rating: 4.2,
    availableSeats: 30,
    image: '/experience/cardImg.png',
    rating: 4,
    location: 'Dubai',
    venue: 'Alive Park',
    currentPrice: 'AED 456',
    originalPrice: 'AED 567',
    discount: '24% Off',
    tag: 'Only 50 Slots Left!'
  },
  {
    id: 7,
    title: "Kids Creative Workshop",
    category: "Kids & Teens Activities",
    date: "2025-05-29",
    price: 150,
    timeOfDay: "Afternoon",
    area: "Al Barari",
    location: "Learning Hub, Dubai",
    tag: "Workshop",
    rating: 4.5,
    availableSeats: 25,
    image: '/experience/cardImg.png',
    rating: 4,
    location: 'Dubai',
    venue: 'Alive Park',
    currentPrice: 'AED 456',
    originalPrice: 'AED 567',
    discount: '24% Off',
    tag: 'Only 50 Slots Left!'
  },
  {
    id: 8,
    title: "Remote Public Speaking Class",
    category: "Online & Hybrid",
    date: "2025-05-30",
    price: 200,
    timeOfDay: "Evening",
    area: "Online",
    location: "Zoom",
    tag: "Class",
    rating: 4.9,
    availableSeats: 100,
    image: '/experience/cardImg.png',
    rating: 4,
    location: 'Dubai',
    venue: 'Alive Park',
    currentPrice: 'AED 456',
    originalPrice: 'AED 567',
    discount: '24% Off',
    tag: 'Only 50 Slots Left!'
  },


];


export default function ChooseVibe() {

  const [tabItems, setTabItems] = useState('liveClass');
  const [animatedTab, setAnimatedTab] = useState(tabItems);
  const [filteredEvents, setFilteredEvents] = useState(eventCardsData);

  const tabFun = (val) => {
    setTabItems(val);
  }

  const tabLabels = ['liveClass', 'Experiences', 'PlanEvent'];
  const tabRefs = useRef([]);
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);

  useEffect(() => {
    const activeIndex = tabLabels.indexOf(tabItems);
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab) {
      setIndicatorOffset(activeTab.offsetLeft);
      setIndicatorWidth(activeTab.offsetWidth);
    }
  }, [tabItems]);

  useEffect(() => {
    setAnimatedTab(''); // reset
    const timeout = setTimeout(() => setAnimatedTab(tabItems), 10);
    return () => clearTimeout(timeout);
  }, [tabItems]);


  return (
    <div className={styles.choose}>

      <div className={styles.headingGroup}>
        <h2>CHOOSE YOUR VIBE</h2>
        <p>What are you in the mood for? Choose your vibe and start exploring.</p>

        {/* <div className={styles.tab}>
            <div className={tabItems === 'liveClass' ? `${styles.tabItem} ${styles.active}`: styles.tabItem} onClick={()=>{tabFun('liveClass')}} >live class</div>
            <div className={tabItems === 'Experiences' ? `${styles.tabItem} ${styles.active}`: styles.tabItem} onClick={()=>{tabFun('Experiences')}}>Experiences</div>
            <div className={tabItems === 'PlanEvent' ? `${styles.tabItem} ${styles.active}`: styles.tabItem} onClick={()=>{tabFun('PlanEvent')}}>Plan A Event</div>
        </div> */}

        <div className={styles.tab}>
          {tabLabels.map((label, idx) => (
            <div
              key={label}
              className={
                tabItems === label
                  ? `${styles.tabItem} ${styles.active} ${animatedTab === label ? styles.animated : ''}`
                  : styles.tabItem
              }
              onClick={() => tabFun(label)}
              ref={el => tabRefs.current[idx] = el}
            >
              {label === 'liveClass' ? 'live class' : label === 'Experiences' ? 'Experiences' : 'Plan A Event'}
            </div>
          ))}
          {indicatorWidth > 0 && (
            <div
              className={styles.tabIndicator}
              style={{
                transform: `translateX(${indicatorOffset}px)`,
                width: `${indicatorWidth}px`
              }}
            />
          )}
        </div>

      </div>

      <div className={styles.cardBoxSec}>


        <div className='container'>


          {tabItems === 'liveClass' &&
            <div className='row'>
              <div className='col-6 col-md-6 col-lg-3'>
                <div className={styles.cardLive}>
                  <Image src='/card1-bg.webp' alt='' width={152} height={240} className={styles.cardBg1} />
                  <Image src='/card1.png' alt='' width={336} height={434} quality={90} className={styles.card1} />
                  <div className={styles.priceBG}>
                    <div className={styles.tagName}>ART & CRAFT</div>
                    <p>From : 124 AED</p>
                    <span className='arrow'><VibeIcon /></span>
                  </div>
                </div>
              </div>


              <div className='col-6 col-md-6 col-lg-3'>
                <div className={`${styles.cardLive} ${styles.cardLive2}`} >
                  <Image src='/card2bg.webp' alt='' width={186} height={240} quality={100} className={styles.cardBg1} />
                  <Image src='/card2.png' alt='' width={534} height={431} quality={90} className={styles.card1} />
                  <div className={styles.priceBG}>
                    <div className={styles.tagName}>MUSIC</div>
                    <p>From : 124 AED</p>
                    <span className='arrow'><VibeIcon /></span>
                  </div>
                </div>
              </div>

              <div className='col-6 col-md-6 col-lg-3'>
                <div className={`${styles.cardLive} ${styles.cardLive3}`} >
                  <Image src='/card-3bg.svg' alt='' width={254} height={254} className={styles.cardBg1} />
                  <Image src='/card3.png' alt='' width={591} height={789} className={styles.card1} />
                  <div className={styles.priceBG}>
                    <div className={styles.tagName}>DANCE</div>
                    <p>From : 124 AED</p>
                    <span className='arrow'><VibeIcon /></span>
                  </div>
                </div>
              </div>


              <div className='col-6 col-md-6 col-lg-3'>
                <div className={`${styles.cardLive} ${styles.cardLive4}`} >
                  <Image src='card4-bg.svg' alt='' width={267} height={254} className={styles.cardBg1} />
                  <Image src='/card4.png' alt='' width={412} height={461} className={styles.card1} />
                  <div className={styles.priceBG}>
                    <div className={styles.tagName}>COOKING</div>
                    <p>From : 124 AED</p>
                    <span className='arrow'><VibeIcon /></span>
                  </div>
                </div>
              </div>



              <div className='col-6 col-md-6 col-lg-3'>
                <div className={`${styles.cardLive} ${styles.cardLive5}`} >
                  <Image src='/card5-bg.svg' alt='' width={269} height={269} className={styles.cardBg1} />
                  <Image src='/card5.png' alt='' width={279} height={442} className={styles.card1} />
                  <div className={styles.priceBG}>
                    <div className={styles.tagName}>PHOTOGRAPHY</div>
                    <p>From : 124 AED</p>
                    <span className='arrow'><VibeIcon /></span>
                  </div>
                </div>
              </div>


              <div className='col-6 col-md-6 col-lg-3'>
                <div className={`${styles.cardLive} ${styles.cardLive6}`} >
                  <Image src='/card6-bg.svg' alt='' width={240} height={240} className={styles.cardBg1} />
                  <Image src='/card6.png' alt='' width={316} height={412} className={styles.card1} />
                  <div className={styles.priceBG}>
                    <div className={styles.tagName}>GAMING</div>
                    <p>From : 124 AED</p>
                    <span className='arrow'><VibeIcon /></span>
                  </div>
                </div>
              </div>

              <div className='col-6 col-md-6 col-lg-3'>
                <div className={`${styles.cardLive} ${styles.cardLive7}`} >
                  <Image src='/card7-bg.svg' alt='' width={274} height={274} className={styles.cardBg1} />
                  <Image src='/card7.png' alt='' width={279} height={488} className={styles.card1} />
                  <div className={styles.priceBG}>
                    <div className={styles.tagName}>SPORTS</div>
                    <p>From : 124 AED</p>
                    <span className='arrow'><VibeIcon /></span>
                  </div>
                </div>
              </div>


              <div className='col-6 col-md-6 col-lg-3'>
                <div className={`${styles.cardLive} ${styles.cardLive8}`} >
                  <Image src='/card8-bg.svg' alt='' width={240} height={262} className={styles.cardBg1} />
                  <Image src='/card8.png' alt='' width={518} height={458} className={styles.card1} />
                  <div className={styles.priceBG}>
                    <div className={styles.tagName}>WELLBEING</div>
                    <p>From : 124 AED</p>
                    <span className='arrow'><VibeIcon /></span>
                  </div>
                </div>
              </div>



            </div>
          }


          {tabItems === 'PlanEvent' && <PlanAEventPage />}
          {tabItems === 'Experiences' && <EventCardGrid events={filteredEvents} redirectTo='/experienceDetailPage' />}

        </div>


      </div>
    </div>
  )
}
