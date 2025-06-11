"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './connecting.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from '@/app/components/icons';


export default function ConnectingPeople() {
  const textWrapperRef = useRef(null);
  const overlayTextRef = useRef(null);

  
    const sectionRef = useRef(null);
    const [activeCount, setActiveCount] = useState(0);
    const scrollProgress = useRef(0);
    const prevScrollY = useRef(0);
    const letters = [...'CONNECTING PEOPLE TO PASSION IN UAE'];
  
    const handleScroll = () => {
      if (!sectionRef.current) return;
  
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > prevScrollY.current;
      prevScrollY.current = currentScrollY;
  
      const rect = sectionRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
  
      if (inView) {
        scrollProgress.current += 1;
  
        // On scroll DOWN → add one letter at a time
        if (scrollingDown && scrollProgress.current % 2 === 0 && activeCount < letters.length) {
          setActiveCount(prev => prev + 1);
        }
  
        // On scroll UP → remove one letter at a time
        if (!scrollingDown && scrollProgress.current % 2 === 0 && activeCount > 0) {
          setActiveCount(prev => prev - 1);
        }
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [activeCount]);
  return (
    <div className={styles.whoAre}>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className={styles.connecting}>
              <div className={styles.tag}>WHO WE ARE</div>
              {/* <div ref={textWrapperRef} className={styles.gradientTextWrapper}>
                <h2 className={styles.gradientTextBase}>
                  CONNECTING PEOPLE TO PASSION IN UAE
                </h2>
                <h2
                  ref={overlayTextRef}
                  className={styles.gradientTextOverlay}
                >
                  CONNECTING PEOPLE TO PASSION IN UAE
                </h2>
              </div> */}

              <div className={styles.sections}>
      <section ref={sectionRef} className={styles.textContainer}>
        <div className={styles.line}>
          {letters.slice(0, 20).map((char, index, arr) => {
            // Check if this char is a space
            if (char === " ") {
              // The previous letter index
              const prevIndex = index - 1;
              // If the previous letter is active, the word is complete
              const wordComplete = prevIndex >= 0 && prevIndex < activeCount;
              return (
                <span
                  key={index}
                  className={wordComplete ? styles.spaceAfterWordComplete : styles.space}
                >
                  {"\u00A0"}
                </span>
              );
            }
            // For normal letters
            return (
              <span key={index} className={index < activeCount ? styles.active : ""}>
                {char}
              </span>
            );
          })}
        </div>
        <div className={styles.line}>
          {letters.slice(20).map((char, index, arr) => {
            // Skip the first space in this line
            if (char === " " && arr.slice(0, index).indexOf(" ") === -1) {
              return null;
            }
            if (char === " ") {
              return (
                <span
                  key={index + 20}
                  className={styles.space}
                >
                  {"\u00A0"}
                </span>
              );
            }
            return (
              <span key={index + 20} className={(index + 20) < activeCount ? styles.active : ''}>
                {char}
              </span>
            );
          })}
        </div>
      </section>
    </div>
              <Image
                src="/bee.gif"
                width={332}
                height={332}
                alt="Loading animation"
                className={styles.bee}
              />
            </div>
          </div>

          <div className='col-md-6'>
            <div className={styles.connectingContent}>
              <p className={styles.mobileHide}>
                Hobbee Me is not just a platform—it's a movement. <br />
                A place where curiosity meets action. We connect Dubai's young explorers with exciting live classes, one-of-a-kind experiences, and buzzing local events.
              </p>
              <p className={styles.mobileShow}>
                Hobbee Me isn’t just a platform—it’s your playground. Where your curiosity turns into cool adventures. From epic live classes to awesome hands-on experiences and the coolest events in Dubai—we bring the fun to you.
              </p>
              <p>
                Whether you're here to master pottery, try aerial yoga, laugh at a live comedy show, or book your next thrill ride—Hobbee Me is where the fun begins.
              </p>
              <Link href='' className={styles.aboutBtn}>
                About Us <span><ArrowDown /></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}