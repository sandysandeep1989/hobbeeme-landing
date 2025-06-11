import { Row, Col } from 'react-bootstrap';
import styles from './OtherClasses.module.css';
import Image from 'next/image';
import { useState } from 'react';

const OtherClasses = () => {
    const serviceCardData = [
        { id: 1, image:'/class/otherClass.svg',  title: 'Bollywood Magic For Young Stars', price: 456, originalPrice: 567, discount: 24, startDate: '15 May, 2025' },
        { id: 2,image:'/class/otherClass.svg',   title: 'Classical Dance Workshop', price: 399, originalPrice: 499, discount: 20, startDate: '20 May, 2025' },
        { id: 3,  image:'/class/otherClass.svg',  title: 'Contemporary Dance Basics', price: 350, originalPrice: 450, discount: 22, startDate: '25 May, 2025' },
    ];

    const [likedCards, setLikedCards] = useState({});

    const handleLike = (cardId) => {
        setLikedCards(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }));
    };

    return (
        <div className={styles.sectionWrapper}>
            <h2 className={styles.sectionTitle}>Other Class Offered By Taal</h2>
            <div className={styles.serviceCardContainer}>
                {serviceCardData.map((item) => (
                    <div key={item.id} className={styles.serviceCardParent}>
                        <div className={styles.serviceCard}>
                            {/* Card Image */}
                            <div className={styles.serviceCardImage}>
                               <img src={item.image}/>
                                <div className={styles.serviceCardHeart} onClick={() => handleLike(item.id)}>
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
                                    <div className={styles.inStudioBadge}>In Studio</div>
                                </div>

                                <div className="flex flex-col gap-1 mt-1">
                                    <div className={styles.bollywoodMagic}>{item.title}</div>
                                    <div className={styles.adeText}>AED {item.price}</div>
                                    <div className={styles.offLineThroughContainer}>
                                        <span className={styles.offText}>{item.discount}% Off</span>
                                        <span className={styles.lineThroughText}>AED {item.originalPrice}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Bar */}
                        <div className={styles.bottomBar}>
                            Next Batch Starts From {item.startDate}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OtherClasses;
