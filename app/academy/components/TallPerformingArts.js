'use client'
import React,{useState,useRef,useEffect} from 'react';
import styles from './tallPerfArts.module.css';


import Servicies from './class/Servicies';
import About from './About';
import CapturedMoments from './class/CapturedMoments';
import Rating from './class/Rating';

export default function TallPerformingArts() {

      const [activeTab, setActiveTab] = useState(1);
        const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);

    const componentsMap = {
      About: <About />,
  Services: <Servicies />,
 
  Gallery: <CapturedMoments />,
  Ratings: <Rating />,
};






  const tabsList = ['About','Services',  'Gallery', 'Ratings'];



    useEffect(() => {
    const current = tabRefs.current[activeTab];
    if (current) {
      setIndicatorStyle({
        left: current.offsetLeft,
        width: current.offsetWidth,
      });
    }
  }, [activeTab]);

  
    return(
        <>
        <section className={styles.tallPerfSection}>
            <div className={styles.tallPerfHeaderCntr}>
                    <div className={styles.tallPerfHeader}>

                    <div className={styles.tallPerfHeaderInner}>
                         <div className={styles.tallPerfHeaderTopRightBtn}>
                        <div><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
  <path d="M9.82031 14.0156H13.1797L11.5 10.9807L9.82031 14.0156Z" fill="#FAE01E"/>
  <path d="M13.9031 15.3229L13.5773 14.7344H9.42226L9.09663 15.3227C8.83129 15.8008 8.46415 16.2147 8.02119 16.5352C7.57822 16.8557 7.07025 17.0749 6.5332 17.1774C6.59545 17.3253 6.66714 17.4682 6.74196 17.6094H16.2576C16.3324 17.4683 16.404 17.3253 16.4663 17.1775C15.9293 17.075 15.4214 16.8557 14.9784 16.5353C14.5355 16.2148 14.1684 15.8009 13.9031 15.3229Z" fill="#FAE01E"/>
  <path d="M9.66869 20.164C10.0083 20.2789 10.3174 20.4697 10.5723 20.7219C10.8272 20.9741 11.0214 21.281 11.14 21.6194L11.159 21.6763C11.1829 21.7478 11.2286 21.8101 11.2898 21.8542C11.351 21.8983 11.4245 21.922 11.5 21.922C11.5754 21.922 11.6489 21.8983 11.7101 21.8542C11.7713 21.8101 11.817 21.7478 11.8409 21.6763L11.8599 21.6192C11.9786 21.2809 12.1728 20.974 12.4277 20.7219C12.6827 20.4697 12.9917 20.279 13.3314 20.164C14.3142 19.8047 15.171 19.1668 15.7968 18.3281H7.20312C7.82903 19.1667 8.68584 19.8047 9.66869 20.164Z" fill="#FAE01E"/>
  <path d="M7.18752 7.1875C7.18891 7.80006 7.32234 8.40512 7.5787 8.96145L11.1496 7.73447C11.3765 7.65668 11.6228 7.65668 11.8497 7.73447L15.4262 8.96335C15.8956 7.93205 15.9391 6.7572 15.5472 5.69403C15.1554 4.63086 14.3598 3.76524 13.3334 3.28523C13.4034 2.869 13.6186 2.49104 13.9409 2.21853C14.2632 1.94602 14.6717 1.79662 15.0938 1.79688C15.1891 1.79688 15.2805 1.75901 15.3479 1.69162C15.4153 1.62422 15.4531 1.53281 15.4531 1.4375C15.4531 1.34219 15.4153 1.25078 15.3479 1.18339C15.2805 1.11599 15.1891 1.07813 15.0938 1.07813C14.5246 1.07685 13.9719 1.26947 13.5268 1.62429C13.0817 1.9791 12.7707 2.47493 12.6451 3.03011C12.4305 2.97015 12.2116 2.92732 11.9903 2.90203C11.4421 2.84291 10.8877 2.88862 10.3566 3.03672C10.2324 2.47994 9.92182 1.98226 9.47621 1.62608C9.03061 1.2699 8.47673 1.07658 7.90627 1.07813C7.81096 1.07813 7.71955 1.11599 7.65216 1.18339C7.58476 1.25078 7.5469 1.34219 7.5469 1.4375C7.5469 1.53281 7.58476 1.62422 7.65216 1.69162C7.71955 1.75901 7.81096 1.79688 7.90627 1.79688C8.32918 1.79637 8.73849 1.94625 9.06107 2.21973C9.38366 2.49321 9.5985 2.87247 9.66721 3.28976C8.92446 3.63434 8.29609 4.18467 7.85659 4.87551C7.41709 5.56635 7.18489 6.36872 7.18752 7.1875Z" fill="#FAE01E"/>
  <path d="M20.08 12.7062C19.949 12.2343 19.7051 11.8015 19.3694 11.445C19.0337 11.0885 18.6162 10.819 18.1531 10.66L11.6173 8.41427C11.5416 8.38832 11.4594 8.38832 11.3837 8.41427L4.84794 10.66C4.17254 10.8919 3.60129 11.3559 3.23578 11.9694C2.87026 12.5829 2.73417 13.3061 2.8517 14.0105C2.96924 14.7148 3.33278 15.3547 3.87768 15.8163C4.42258 16.2778 5.11352 16.5312 5.82763 16.5313C5.92416 16.5313 6.02137 16.5267 6.1184 16.5172C6.60586 16.4702 7.07455 16.3052 7.48398 16.0365C7.8934 15.7678 8.23127 15.4034 8.46839 14.9749L11.5004 9.49638L14.5325 14.9748C14.7696 15.4032 15.1075 15.7675 15.5169 16.0362C15.9264 16.3049 16.395 16.4699 16.8825 16.5169C16.9797 16.5265 17.0766 16.5311 17.1732 16.5309C17.6383 16.5308 18.0971 16.4232 18.5137 16.2165C18.9303 16.0097 19.2935 15.7095 19.5749 15.3392C19.8564 14.9689 20.0484 14.5386 20.136 14.0818C20.2236 13.625 20.2044 13.1543 20.08 12.7062Z" fill="#FAE01E"/>
</svg><span> Academy</span>   </div>
                        
                    </div>




                        <div className={styles.RattingMainDiv}> 
                            <div className={styles.tallPerImgCtnr}><img src='./tallPerformingIstruc.png' alt='tall performing image '/></div>

                            <div className={styles.TextParent}>
                                <h2 className={`${styles.TallPerfHeading} ${styles.mobileHide}`}>Taal Performing Arts </h2>

                                <div className={`${styles.reviewCountContainer} ${styles.mobileShow}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
  <path d="M4.51875 0.480094C4.68999 0.0733666 5.27322 0.0733671 5.44446 0.480095L6.45511 2.88068C6.52734 3.05214 6.69057 3.1693 6.87794 3.18414L9.50125 3.39191C9.94572 3.42711 10.1259 3.97508 9.7873 4.26166L7.78863 5.95305C7.64588 6.07388 7.5835 6.26346 7.62711 6.44407L8.23775 8.97306C8.3412 9.40154 7.86939 9.74023 7.48885 9.51063L5.24291 8.15536C5.08248 8.05855 4.88073 8.05855 4.72031 8.15536L2.47436 9.51063C2.09382 9.74023 1.62199 9.40154 1.72545 8.97306L2.33609 6.44407C2.3797 6.26346 2.31735 6.07388 2.1746 5.95305L0.175882 4.26166C-0.162758 3.97508 0.0174694 3.42711 0.46194 3.39191L3.08529 3.18414C3.27267 3.1693 3.43589 3.05214 3.50808 2.88068L4.51875 0.480094Z" fill="#FEEA4F"/>
</svg>
                                  <div className={`${styles.reviewCount}`}>
                                 <span>4</span> (7,546 reviews)
                                  </div>
                                </div>
                                <h2 className={`${styles.TallPerfHeading} ${styles.mobileShow}`}>Taal Performing Arts By  Mr. Santosh </h2>
                            <div className={styles.locationDiv}><img src='./LocationIcon.svg' alt='location icon' /><span className={styles.locationH}>Dubai, United Arab Emirates</span></div>
                            <div className={styles.rattingDivCtnr}>
                                <div className={styles.stars}>
                                    <img src='./rattingStarIcon.svg'/>
                                     <img src='./rattingStarIcon.svg'/>
                                      <img src='./rattingStarIcon.svg'/>
                                       <img src='./rattingStarIcon.svg'/>
                                        <img src='./rattingStarIcon.svg'/>
                                </div>
                                <span className={styles.outofFive}>4.5</span>
                                <span className={styles.topRattedBtn}>Top Rated</span>
                            </div>


                            </div>
                          



                        </div>


                    </div>

                

                        
                  
                   
                


                </div>


            </div>
        
            
               {/* <div className={styles.bioDiv}>
                    <div className={styles.bioDivFirstItem}>
                        <span>Bio</span>
                        <p>  Tail Performing Arts, led by Mr. Santosh, brings the elegance of Indian dance to students of all ages. 
                            With a deep-rooted passion for Kathak and Bollywood, Mr. Santosh has dedicated his career to teaching the art of dance,
                             helping kids, teens, and ladies master rhythm, expression, and storytelling through movement
                             </p>

                    </div>
                    <div className={styles.bioDivSecItem}>
                         <span>Experience & Education</span>
                         <ul>
                            <li>15+ years teaching Indian dance forms</li>
                            <li>Specialized in Kathak and Bollywood styles</li>
                            <li> Trained under renowned dance masters</li>
                            <li>Experienced in group and private instruction</li>
                         </ul>
                       



                    </div>


                </div> */}

                <div className={styles.tabsWrapper}>

                    <div className={styles.tabsContainer}>

                           { tabsList.map((tab,index)=>(
                            <button 
                            key={index}
                            onClick={() => setActiveTab(index)}
                            ref={el => (tabRefs.current[index] = el)}
                            className={`${styles.tabItem} ${activeTab === index ? styles.active : ''}`}
                            >
                                {tab}
                                
                            </button>
                           ))
                    }

                          <div className={styles.fullLine}></div>
                        <div className={styles.indicator} style={indicatorStyle}></div>


                    </div>

                       <div className={styles.content}>
                       {componentsMap[tabsList[activeTab]]}
                         </div>
                 


                </div>




       

        </section>
        
        
        </>
    )
}