"use client"
import { Col, Container, Row } from 'react-bootstrap';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ExperienceHost from '../components/experience/ExperienceHost';
import BookingCard from '../components/experience/BookingCard';
import EventCard from '../components/experience/EventCards';
import CustomerReview from '../components/experience/CustomerRivew';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';
import SeatBooking from '../components/experience/SeatBooking';
import { ChevronRight } from 'lucide-react';
export default function ExperienceDetailPage() {
    const totalPrice = 2480;
    const router = useRouter();

    const handleClick = () => {
        router.push('./booking-page')
    }
    return (
        <>
            <div className={styles.experienceWrapper}>
                <Header />
                <Container fluid className={styles.tourContainer}>
                    <div className='breadCrumb'>
                        <div className={`CustomeContainer`}>
                            <ul>
                                <li><Link href='/'>Home</Link> <ChevronRight /></li>
                                <li className={styles.active}>Experience <ChevronRight /></li>
                                <li>Aladdin Tour; Old Town, Souks, Tastings</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.headerSection}>
                        <div className={styles.headerText}>
                            <h1 className={styles.title}>Aladdin Tour; Old Town, Souks, Tastings</h1>
                            <p className={styles.location}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" fill="none">
                                    <path d="M6 0.125C2.89852 0.125 0.375 2.53848 0.375 5.50391C0.375 6.91613 1.01871 8.79418 2.2882 11.086C3.30773 12.9261 4.48723 14.59 5.1007 15.418C5.20437 15.5594 5.33991 15.6745 5.49633 15.7538C5.65276 15.8331 5.82567 15.8744 6.00105 15.8744C6.17644 15.8744 6.34935 15.8331 6.50578 15.7538C6.6622 15.6745 6.79774 15.5594 6.90141 15.418C7.51383 14.59 8.69438 12.9261 9.71391 11.086C10.9813 8.79488 11.625 6.91684 11.625 5.50391C11.625 2.53848 9.10148 0.125 6 0.125ZM6 8C5.55499 8 5.11998 7.86804 4.74997 7.62081C4.37996 7.37357 4.09157 7.02217 3.92127 6.61104C3.75097 6.1999 3.70642 5.7475 3.79323 5.31105C3.88005 4.87459 4.09434 4.47368 4.40901 4.15901C4.72368 3.84434 5.12459 3.63005 5.56105 3.54323C5.9975 3.45642 6.4499 3.50097 6.86104 3.67127C7.27217 3.84157 7.62357 4.12996 7.87081 4.49997C8.11804 4.86998 8.25 5.30499 8.25 5.75C8.24935 6.34654 8.01209 6.91846 7.59027 7.34027C7.16846 7.76209 6.59654 7.99935 6 8Z" fill="#FEEA4F" />
                                </svg>
                                Dubai, United Arab Emirates</p>
                            <div className={styles.ratingWrapper}>
                                <span className={styles.badge}>Top Rated</span>

                                <span className={styles.stars}>
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                        >
                                            <path
                                                d="M16.6124 7.15715L12.933 10.7438L13.8019 15.8095C13.8397 16.031 13.7488 16.2549 13.5669 16.3872C13.4641 16.4622 13.3418 16.5 13.2195 16.5C13.1256 16.5 13.0311 16.4776 12.9449 16.4321L8.39542 14.0404L3.84656 16.4315C3.64809 16.5366 3.4065 16.5195 3.22457 16.3866C3.04264 16.2543 2.95168 16.0304 2.98948 15.8089L3.85837 10.7432L0.178415 7.15715C0.0177486 7.00003 -0.0407291 6.76494 0.0289716 6.5517C0.0986723 6.33847 0.283556 6.18194 0.506244 6.14945L5.59144 5.41109L7.86557 0.802578C8.06463 0.399141 8.7262 0.399141 8.92526 0.802578L11.1994 5.41109L16.2846 6.14945C16.5073 6.18194 16.6922 6.33788 16.7619 6.5517C16.8316 6.76553 16.7731 6.99944 16.6124 7.15715Z"
                                                fill="#FEEA4F"
                                            />
                                        </svg>
                                    ))}
                                </span>

                                <span> 4.5   <Link href='' className={styles.reviewLink}>Read Reviews</Link></span>
                            </div>

                        </div>
                        <div className={styles.buttonWrapper}>
                            <button >
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M5.6665 4.49996L8.33315 1.83329M8.33315 1.83329L10.9998 4.49996M8.33315 1.83329L8.33315 11.1666" stroke="white" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.4964 6.5C13.2284 7.41306 13.6662 8.57207 13.6662 9.83333C13.6662 12.7788 11.2784 15.1667 8.33285 15.1667C5.38733 15.1667 2.99951 12.7788 2.99951 9.83333C2.99951 8.57207 3.43732 7.41306 4.16926 6.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                                </svg>
                                Share</button>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                    <path d="M8.8432 3.63486L8.33317 4.18282L7.82314 3.63486C6.41472 2.12171 4.13123 2.12171 2.72282 3.63486C1.3144 5.148 1.3144 7.60129 2.72281 9.11444L7.3131 14.0461C7.87647 14.6513 8.78987 14.6513 9.35323 14.0461L13.9435 9.11444C15.3519 7.60129 15.3519 5.148 13.9435 3.63486C12.5351 2.12171 10.2516 2.12171 8.8432 3.63486Z" stroke="white" strokeWidth="0.8" strokeLinejoin="round" />
                                </svg>
                                Save</button>
                        </div>
                    </div>

                    <div className={styles.imageGrid}>
                        <div className={`${styles.column} ${styles.leftColumn}`}>
                            <div className={`${styles.imageWrapper} ${styles.large}`}>
                                <Image src="/experience/tourImg.png" alt="Main" layout="fill" className={styles.image} />
                            </div>
                        </div>

                        <div className={styles.column}>
                            <div className={styles.imageWrapper}>
                                <Image src="/experience/tourimg2.png" alt="img2" layout="fill" className={styles.image} />
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image src="/experience/tourImg3.png" alt="img3" layout="fill" className={styles.image} />
                            </div>
                        </div>

                        <div className={styles.column}>
                            <div className={styles.imageWrapper}>
                                <Image src="/experience/tourImg4png.png" alt="img4" layout="fill" className={styles.image} />
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image src="/experience/tourImg5.png" alt="img5" layout="fill" className={styles.image} />
                            </div>
                        </div>
                    </div>

                    <Row>
                        <Col md={8}>
                            <ExperienceHost />
                        </Col>
                        <Col md={4}>
                            {/* <BookingCard/> */}

                            {/* <div className={styles.bookingSummary}>
                            <div className={styles.detailRow}>
                                <span>Dates</span>
                                <span>Friday 16 May 2025</span>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Time Slot</span>
                                <span>9:30 AM - 12:30 PM</span>
                            </div>
                            <div className={styles.detailRow}>
                                <span>Age Limit</span>
                                <span>12+ yrs</span>
                            </div>
                            <div className={styles.totalRow}>
                                <span>Total Price</span>
                                <span className={styles.totalPrice}>AED {totalPrice.toFixed(2)}</span>
                            </div>
                            <button className={styles.bookNowBtn} onClick={handleClick}>BOOK NOW →</button>
                        </div> */}

                            <SeatBooking />
                        </Col>
                    </Row>

                    <div className={styles.divider}></div>

                    <EventCard />

                    <div className={styles.divider}></div>

                    {/* <CustomerReview /> */}

                </Container>
                <Footer />
            </div>
        </>
    );
}