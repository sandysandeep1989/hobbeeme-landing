'use client'
import React, { useState } from 'react';
import styles from './about.module.css'





export default function AcademyPage() {


    const fullText = `Welcome to Taal Classes, where we believe in the power of language to connect cultures and enrich lives. Our mission is to provide engaging and interactive language learning experiences that cater to students of all ages and backgrounds. Whether you're looking to master a new language for travel, work, or personal growth, our dedicated instructors are here to guide you every step of the way. Join us for a journey of discovery, where you'll not only learn a new language but also immerse yourself in the vibrant cultures that speak it. Let's embark on this exciting adventure together!`;



    const [isExpanded, setIsExpanded] = useState(false);

  const splitIndex = fullText.indexOf("you're");
  const previewText =
    splitIndex !== -1 ? fullText.slice(0, splitIndex + "you're".length) + '...' : fullText;

    return(
        <>
        <div>
            {/* <h3 className={styles.aboutTall}>about Taal Performing Arts </h3> */}
            <div className={styles.aboutTopHeading}>

               
                <div className={styles.aboutTopHeadingItem}>
                    <div className={styles.aboutTopHeadingItemImgDiv}>
           

                         <img  src='./dance.svg' alt='Coockinng Icon'/>
                    </div>
                    <div>
                        <h5>Dance, Cooking, Art</h5>
                        <span>Level</span>
                    </div>
                </div>
                <div className={styles.aboutTopHeadingItem}>
                    <div className={styles.aboutTopHeadingItemImgDiv}>
                

                         <img  src='./studio.svg' alt='studio icon'/>
                    </div>
                    <div>
                        <h5>In Studio, online, at your place</h5>
                        <span>Mode of class</span>
                    </div>
                </div>
                <div className={styles.aboutTopHeadingItem}>  
                    <div className={styles.aboutTopHeadingItemImgDiv}>
              

                    <img    src='./bigg.svg' alt='beginer icon'/>
                    </div>   
                    <div>
                        <h5>Beginners, intermediate, professionals</h5>
                        <span>Level</span>
                    </div>
                </div>
                <div className={styles.aboutTopHeadingItem}>
                    <div className={styles.aboutTopHeadingItemImgDiv}>
                    <img src='./kidIcon.svg' alt='language  icon'/>

                    </div>
                    <div>
                        <h5>Kids, Teenagers & Adults</h5>
                        <span>Language</span>
                    </div>


                </div>
                <div className={styles.aboutTopHeadingItem}>
                    <div className={styles.aboutTopHeadingItemImgDiv}>
                    <img src='./lang.svg' alt='language  icon'/>

                    </div>
                    <div>
                        <h5>English, Hindi</h5>
                        <span>Language</span>
                    </div>


                </div>


            </div>

            <div className={`${styles.aboutBottomHeading} ${styles.mobileHide}`} >
                <div className={`${styles.philosophySec} ${styles.philosophySecOne}`}>
                    <h3>About & Bio </h3>
                    <p>Tail Performing Arts, led by Mr. Santosh, brings the elegance of Indian dance to students of all ages. With a deep-rooted passion for Kathak and Bollywood, Mr. Santosh has dedicated his career to teaching the art of dance, helping kids, teens, and ladies master rhythm, expression, and storytelling through movement</p>
                </div>

                <div className={`${styles.philosophySec} ${styles.philosophySecTwo}`}>
                    <h3>Experience & Education</h3>
                    <ul>
                            <li>Established in 2008, serving the Dubai community for 16+ years.</li>


                            <li>Home to 10+ certified instructors across classical and modern Indian dance forms.</li>
                            <li>Affiliated with the Indian Council for Cultural Relations (ICCR) for standardized curriculum.</li>
                            <li>
                            Trained over 2,000 students, many of whom have performed on international stages.</li>

                            <li>
                            Offers structured certificate programs and annual assessments.
                            </li>
                            <li>
                            Hosts yearly stage productions, inter-school dance competitions, and community outreach programs.

                            </li>
                         </ul>


                </div>


                



            </div>
            <div className={`${styles.aboutBottomHeading} ${styles.mobileShow}`}>
                <div className={`${styles.philosophySec} ${styles.philosophySecOne}`}>
                    <h3>Bio</h3>
                    <p>
        {isExpanded ? fullText : previewText}
        {!isExpanded && (
          <span
           className={styles.readMoreButton}
            onClick={() => setIsExpanded(true)}
          >
            Read more
          </span>
        )}
      </p>
                </div>


                <div className={`${styles.philosophySec} ${styles.philosophySecOne}`}>
                    <h3>Genere</h3>
                    <p>Bollywood</p>
                </div>
                <div className={`${styles.philosophySec} ${styles.philosophySecOne}`}>
                    <h3>Materials required</h3>
                    <p>Students must wear comfortable clothings</p>
                </div>
                <div className={`${styles.philosophySec} ${styles.philosophySecOne}`}>
                    <h3>Who can join </h3>
                    <p>Toddlers, kids , teenagers, Ladies, Male, kids & Teenagers
                    Kids & Ladies, ALL, AGE GROUP WILL BE INFORMED PRIOR</p>
                </div>

            


            </div>



        </div>
       
             
      
        </>
    )
}