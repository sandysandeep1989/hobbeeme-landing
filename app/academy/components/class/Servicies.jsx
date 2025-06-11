'use client'

import React, { useState, useEffect, useRef } from 'react';
import styles from './captured.module.css';
import { ListFilter, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Servicies = () => {
  const [active, setActive] = useState('Dance');
  const [openDropdown, setOpenDropdown] = useState(null);
  const [likedCards, setLikedCards] = useState({});
  const [animatedToggle, setAnimatedToggle] = useState(active);
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const toggleRefs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    setAnimatedToggle(''); // reset
    const timeout = setTimeout(() => setAnimatedToggle(active), 10);
    return () => clearTimeout(timeout);
  }, [active]);

  useEffect(() => {
    const activeIndex = ['Dance', 'Cooking', 'Art'].indexOf(active);
    const activeBtn = toggleRefs.current[activeIndex];
    if (activeBtn) {
      setIndicatorOffset(activeBtn.offsetLeft);
      setIndicatorWidth(activeBtn.offsetWidth);
    }
  }, [active]);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLike = (cardId, e) => {
    e.stopPropagation(); // Stop event from bubbling up to parent
    setLikedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const handleNavigate = () => {
    router.push(`/classes/course-detail`);
  }

  const serviceCardData = [
    { id: 1, title: 'Bollywood Magic For Young Stars', price: 456, originalPrice: 567, discount: 24, startDate: '15 May, 2025', venue: 'In Studio' },
    { id: 2, title: 'Bollywood Magic For Young Stars', price: 399, originalPrice: 499, discount: 20, startDate: '20 May, 2025', venue: 'In Studio' },
    { id: 3, title: 'Bollywood Magic For Young Stars', price: 350, originalPrice: 450, discount: 22, startDate: '25 May, 2025', venue: 'At Your Home' },
    { id: 4, title: 'Bollywood Magic For Young Stars', price: 420, originalPrice: 520, discount: 19, startDate: '30 May, 2025', venue: 'In Studio' },
    { id: 5, title: 'Bollywood Magic For Young Stars', price: 380, originalPrice: 480, discount: 21, startDate: '5 June, 2025', venue: 'Online' },
    { id: 6, title: 'Bollywood Magic For Young Stars', price: 400, originalPrice: 500, discount: 20, startDate: '10 June, 2025', venue: 'Online' }
  ];

  return (
    <div className={''}>

      {/* Header */}
      <div className={styles.serviceContainerHeader}>
        <div className={`${styles.serviceContainerHeaderTitle} ${styles.mobileHide}`}>
          Classes Offered by Taal
        </div>

        <div className={`${styles.filterButtonParent} ${styles.mobileHide}`}>
          <div className={`${styles.filterButton} ${styles.filterHover}`}><ListFilter /> Filters  <ChevronDown /></div>
          <div
            className={`${styles.filterButton} ${styles.ArtHover}`}
            onClick={() => handleDropdown('Art')}
            style={{ position: 'relative' }}
          >
            Art <ChevronDown />
            {(
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>Painting</div>
                <div className={styles.dropdownItem}>Sculpture</div>
                <div className={styles.dropdownItem}>Music</div>
              </div>
            )}
          </div>
          <div
            className={`${styles.filterButton} ${styles.LevelHover}`}
            onClick={() => handleDropdown('Level')}
            style={{ position: 'relative' }}
          >
            Level <ChevronDown />
            {(
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>Beginner</div>
                <div className={styles.dropdownItem}>Intermediate</div>
                <div className={styles.dropdownItem}>Advanced</div>
              </div>
            )}
          </div>
          <div
            className={`${styles.filterButton} ${styles.IndividualHover}`}
            onClick={() => handleDropdown('Individual')}
            style={{ position: 'relative' }}
          >
            Individual <ChevronDown />
            {(
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>One-on-One</div>
                <div className={styles.dropdownItem}>Group</div>
              </div>
            )}
          </div>
          <div
            className={`${styles.filterButton} ${styles.StudioHover}`}
            onClick={() => handleDropdown('Studio')}
            style={{ position: 'relative' }}
          >
            Studio <ChevronDown />
            {(
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownItem}>In Studio</div>
                <div className={styles.dropdownItem}>Online</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className={styles.toggleContainer}>
        {['Dance', 'Cooking', 'Art'].map((item, idx) => (
          <button
            key={item}
            ref={el => toggleRefs.current[idx] = el}
            className={
              `${styles.toggleButton} ${active === item ? styles.toggleActive + ' ' + styles.animated : ''}`
            }
            onClick={() => setActive(item)}
          >
           <span> {item}</span>
          </button>
        ))}
        <div
          className={styles.toggleIndicator}
          style={{
            transform: `translateX(${indicatorOffset}px)`,
            width: `${indicatorWidth}px`
          }}
        />
      </div>

      {/* Service Cards */}
      <div className={styles.serviceCardContainer}>
        {serviceCardData.map((item) => (
          <div key={item.id} className={styles.serviceCardParent} onClick={() => handleNavigate()} style={{ cursor: 'pointer' }}>
            <div className={styles.serviceCard}>
              {/* Card Image */}
              <div className={styles.serviceCardImage}>
                <img
                  src="./bullyImg.jpg"
                  alt={item.title}
                />
                <div className={styles.serviceCardHeart} onClick={(e) => handleLike(item.id, e)}>
                  {likedCards[item.id] ? (

                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.0917 15.6491C8.8197 15.7451 8.3717 15.7451 8.0997 15.6491C5.7797 14.8571 0.595703 11.5531 0.595703 5.95308C0.595703 3.48108 2.5877 1.48108 5.0437 1.48108C6.4997 1.48108 7.7877 2.18508 8.5957 3.27308C9.4037 2.18508 10.6997 1.48108 12.1477 1.48108C14.6037 1.48108 16.5957 3.48108 16.5957 5.95308C16.5957 11.5531 11.4117 14.8571 9.0917 15.6491Z" fill="#D86666" stroke="white" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4921 17.0501C10.2201 17.1461 9.77209 17.1461 9.50009 17.0501C7.18009 16.2581 1.99609 12.9541 1.99609 7.35408C1.99609 4.88208 3.98809 2.88208 6.44409 2.88208C7.90009 2.88208 9.18809 3.58608 9.99609 4.67408C10.8041 3.58608 12.1001 2.88208 13.5481 2.88208C16.0041 2.88208 17.9961 4.88208 17.9961 7.35408C17.9961 12.9541 12.8121 16.2581 10.4921 17.0501Z" stroke="white" strokeWidth="1.06667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Card Badges and Info */}
              <div className={styles.serviceCardBadges}>
                <div className={styles.bollywoodBadgeParent}>
                  <div className={styles.bollywoodBadge}>BOLLYWOOD</div>
                  <div className={styles.inStudioBadge}>{item.venue}</div>
                </div>

                <div className={styles.serviceCardDiscount}>
                  <div className={styles.bollywoodMagic}>{item.title}</div>
                  <div className={styles.adeText}>AED {item.price}


                    <span className={`${styles.lineThroughText} ${styles.mobileShow}`}>AED {item.originalPrice}</span>
                    <span className={`${styles.offText} ${styles.mobileShow}`}>{item.discount}% Off</span>

                  </div>
                  <div className={`${styles.offLineThroughContainer} ${styles.mobileHide}`}>
                    <span className={styles.offText}>{item.discount}% Off</span>
                    <span className={styles.lineThroughText}>AED {item.originalPrice}</span>
                  </div>

                  <div className={`${styles.bottomBar} ${styles.mobileShow}`}>
                    Next Batch Starts From {item.startDate}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className={`${styles.bottomBar} ${styles.mobileHide}`}>
              Next Batch Starts From {item.startDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicies;
