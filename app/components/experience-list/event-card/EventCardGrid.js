"use client"
import { useState } from 'react';
import styles from './EventCardsGrid.module.css'
import { useRouter } from 'next/navigation';

export default function EventCardGrid({ events, redirectTo }) {
    const router = useRouter();
    const [likedCards, setLikedCards] = useState({});
    
    console.log('redirectTo:', redirectTo); // Debug log
    const isClassPage = redirectTo.startsWith('/classes');
    console.log('isClassPage:', isClassPage); // Debug log

    const toggleLike = (id) => {
        setLikedCards(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleClick = () => {
        if (isClassPage) {
            router.push('/academy');
        } else {
            router.push(redirectTo);
        }
    };

    return (
        <div className={styles.cardGrid}>
            {events.length > 0 ? (
                events.map((event) => (
                    <div key={event.id} className={styles.cardContainer} onClick={handleClick} style={{cursor: 'pointer'}}>
                        <div className={styles.cardImageWrapper}>
                            <img src={event.image} alt="Event" className={styles.cardImage} />
                            {isClassPage && (
                                <div className={styles.rating}>
                                    {event.rating}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                        <path d="M5.08711 1.22399C5.25835 0.817263 5.84158 0.817264 6.01282 1.22399L7.02347 3.62457C7.0957 3.79604 7.25893 3.91319 7.4463 3.92803L10.0696 4.13581C10.5141 4.17101 10.6943 4.71898 10.3557 5.00556L8.35699 6.69694C8.21424 6.81778 8.15186 7.00735 8.19547 7.18796L8.80611 9.71696C8.90956 10.1454 8.43775 10.4841 8.05721 10.2545L5.81127 8.89926C5.65084 8.80245 5.44909 8.80245 5.28867 8.89926L3.04272 10.2545C2.66218 10.4841 2.19035 10.1454 2.2938 9.71696L2.90444 7.18796C2.94806 7.00735 2.88571 6.81778 2.74296 6.69694L0.744241 5.00556C0.405601 4.71898 0.585829 4.17101 1.0303 4.13581L3.65364 3.92803C3.84103 3.91319 4.00425 3.79604 4.07644 3.62457L5.08711 1.22399Z" fill="#644EE5" />
                                    </svg>
                                </div>
                            )}
                            <div className={styles.heart} onClick={(e) => {
                                e.stopPropagation(); // prevent navigation
                                toggleLike(event.id);
                            }} style={{ cursor: "pointer" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15" fill="none">
                                    <path
                                        d="M7.74553 12.9099C7.54153 12.9819 7.20553 12.9819 7.00153 12.9099C5.26153 12.3159 1.37354 9.83794 1.37354 5.63794C1.37354 3.78394 2.86754 2.28394 4.70953 2.28394C5.80153 2.28394 6.76753 2.81194 7.37353 3.62794C7.97953 2.81194 8.95154 2.28394 10.0375 2.28394C11.8795 2.28394 13.3735 3.78394 13.3735 5.63794C13.3735 9.83794 9.48553 12.3159 7.74553 12.9099Z"
                                        stroke={likedCards[event.id] ? "white" : "white"}
                                        strokeWidth="0.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill={likedCards[event.id] ? "#D86666" : "none"}
                                    />
                                </svg>
                            </div>
                            {isClassPage && (
                               <div className={styles.featured}>
                                <div className={styles.featuredDetail}>
                                    <div className={styles.featuredTitle}>
                                        Featured
                                    </div>
                                    <div className={styles.featuredSvg}>
                                       
                                    </div>
                                </div>
                               </div>
                            )}
                            <div className={isClassPage ? styles.tagClassPage : styles.tag}>
                                {!isClassPage && <span>Friday 9 may 2025, 07:00 PM</span>}
                                Only 50 Slots Left!
                            </div>
                        </div>

                        <div className={styles.cardContent}>
                            <div className={styles.flexCardDetail}>
                                <div className={styles.location}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                        <g clipPath="url(#clip0_2344_1774)">
                                            <path d="M5.16611 0.510498C3.1026 0.510498 1.42383 2.18927 1.42383 4.25276C1.42383 6.81361 4.7728 10.5731 4.91539 10.7319C5.04932 10.881 5.28314 10.8808 5.41683 10.7319C5.55941 10.5731 8.90839 6.81361 8.90839 4.25276C8.90835 2.18927 7.22959 0.510498 5.16611 0.510498ZM5.16611 6.13559C4.12791 6.13559 3.28329 5.29096 3.28329 4.25276C3.28329 3.21456 4.12793 2.36994 5.16611 2.36994C6.20429 2.36994 7.0489 3.21458 7.0489 4.25278C7.0489 5.29098 6.20429 6.13559 5.16611 6.13559Z" fill="#FEEA4F" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2344_1774">
                                                <rect width="10.3332" height="10.3332" fill="white" transform="translate(0 0.510254)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    {event.location}
                                </div>
                                <div className={styles.category}>{event.category}</div>
                            </div>
                            <h3 className={styles.eventTitle}>{event.title}</h3>
                            <div className={styles.pricing}>
                                <span className={styles.currentPrice}> AED {event.currentPrice}</span>
                                <span className={styles.originalPrice}>AED {event.originalPrice}</span>
                                <span className={styles.discount}>{event.discount}</span>
                            </div>

                            {isClassPage && (
                                <div className={styles.classCategory}>
                                    <span>Hip hop </span>
                                    <span>Belle Dance</span>
                                    <span>Salsa</span>
                                    <span>Contemp</span>
                                </div>
                            )
                            }
                        </div>
                    </div>
                ))
            ) : (
                <p className={styles.noEvents}>No events found.</p>
            )}
        </div>
    )
}


//  <div className={styles.cardGrid}>
//             {eventData.map((event) => (
//                 <div key={event.id} className={styles.cardContainer}>
//                     <div className={styles.cardImageWrapper}>
//                         <img src={event.image} alt="Event" className={styles.cardImage} />
//                         <div className={styles.rating}>
//                             {event.rating}
//                             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
//                                 <path d="M5.08711 1.22399C5.25835 0.817263 5.84158 0.817264 6.01282 1.22399L7.02347 3.62457C7.0957 3.79604 7.25893 3.91319 7.4463 3.92803L10.0696 4.13581C10.5141 4.17101 10.6943 4.71898 10.3557 5.00556L8.35699 6.69694C8.21424 6.81778 8.15186 7.00735 8.19547 7.18796L8.80611 9.71696C8.90956 10.1454 8.43775 10.4841 8.05721 10.2545L5.81127 8.89926C5.65084 8.80245 5.44909 8.80245 5.28867 8.89926L3.04272 10.2545C2.66218 10.4841 2.19035 10.1454 2.2938 9.71696L2.90444 7.18796C2.94806 7.00735 2.88571 6.81778 2.74296 6.69694L0.744241 5.00556C0.405601 4.71898 0.585829 4.17101 1.0303 4.13581L3.65364 3.92803C3.84103 3.91319 4.00425 3.79604 4.07644 3.62457L5.08711 1.22399Z" fill="#644EE5" />
//                             </svg>
//                         </div>
//                         <div className={styles.heart} onClick={() => toggleLike(event.id)} style={{ cursor: "pointer" }}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15" fill="none">
//                                 <path
//                                     d="M7.74553 12.9099C7.54153 12.9819 7.20553 12.9819 7.00153 12.9099C5.26153 12.3159 1.37354 9.83794 1.37354 5.63794C1.37354 3.78394 2.86754 2.28394 4.70953 2.28394C5.80153 2.28394 6.76753 2.81194 7.37353 3.62794C7.97953 2.81194 8.95154 2.28394 10.0375 2.28394C11.8795 2.28394 13.3735 3.78394 13.3735 5.63794C13.3735 9.83794 9.48553 12.3159 7.74553 12.9099Z"
//                                     stroke={likedCards[event.id]? "red" : "white"}
//                                     strokeWidth="0.8"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     fill={likedCards[event.id] ? "red" : "none"}
//                                 />
//                             </svg>
//                         </div>
//                         <div className={styles.tag}>{event.tag}</div>
//                     </div>

//                     <div className={styles.cardContent}>
//                         <div className={styles.flexCardDetail}>
//                         <div className={styles.location}>
//                             <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
//                                 <g clipPath="url(#clip0_2344_1774)">
//                                     <path d="M5.16611 0.510498C3.1026 0.510498 1.42383 2.18927 1.42383 4.25276C1.42383 6.81361 4.7728 10.5731 4.91539 10.7319C5.04932 10.881 5.28314 10.8808 5.41683 10.7319C5.55941 10.5731 8.90839 6.81361 8.90839 4.25276C8.90835 2.18927 7.22959 0.510498 5.16611 0.510498ZM5.16611 6.13559C4.12791 6.13559 3.28329 5.29096 3.28329 4.25276C3.28329 3.21456 4.12793 2.36994 5.16611 2.36994C6.20429 2.36994 7.0489 3.21458 7.0489 4.25278C7.0489 5.29098 6.20429 6.13559 5.16611 6.13559Z" fill="#FEEA4F" />
//                                 </g>
//                                 <defs>
//                                     <clipPath id="clip0_2344_1774">
//                                         <rect width="10.3332" height="10.3332" fill="white" transform="translate(0 0.510254)" />
//                                     </clipPath>
//                                 </defs>
//                             </svg>
//                             {event.location}
//                         </div>
//                         <div className={styles.category}>{event.category}</div>
//                         </div>
//                         <h3 className={styles.eventTitle}>{event.title}</h3>
//                         <p className={styles.venue}>{event.venue}</p>
//                         <div className={styles.pricing}>
//                             <span className={styles.currentPrice}>{event.currentPrice}</span>
//                             <span className={styles.originalPrice}>{event.originalPrice}</span>
//                             <span className={styles.discount}>{event.discount}</span>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>