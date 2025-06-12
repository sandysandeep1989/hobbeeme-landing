'use client'
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Header from '@/app/components/header';
import Link from 'next/link';
import Footer from '@/app/components/footer';
import { AdditionalIcon, ArrowDown, BuildYourIcon, CheckIcon, EasyManagementIcon, ExpandIcon } from '@/app/components/icons';
import Faq from '@/app/components/home/faq';
import ListingModal from './ListingModal';


const features = [
    { title: 'EXPAND YOUR REACH', desc: 'Connect with new audiences across Dubai and grow your customer base.' },
    { title: 'ADDITIONAL INCOME', desc: 'Create a new revenue stream by sharing your skills and experiences.' },
    { title: 'EASY MANAGEMENT', desc: 'Our platform handles bookings, payments, and communications for you.' },
    { title: 'BUILD YOUR BRAND', desc: 'Showcase your expertise and build a reputation in your field.' }
];

const steps = [{
    title: 'LIST YOUR EXPERIENCE',
    content: 'Tell us about your activity—what it’s about, what people can expect, how long it lasts, and where it happens.'
},
{
    title: 'GO LIVE & GET BOOKINGS',
    content: 'Once approved, your listing goes live. We promote it across our platform, and people start booking!'
},
{
    title: 'HOST & GET PAID',
    content: 'You run your class or experience as planned. Payments are processed securely.'
},
];

const whyList =
    [{
        title: 'TRUSTED PLATFORM',
        content: 'Our verified review system and secure payment processing instill confidence in our users.'
    },
    {
        title: 'MARKETING SUPPORT',
        content: 'Benefit from our marketing efforts across social media, email campaigns, and local partnerships.'
    },
    {
        title: 'FLEXIBLE SCHEDULE',
        content: 'Set your own availability and manage your calendar to fit your lifestyle.'
    },
    {
        title: 'We Handle the Admin, You Bring the Experience',
        content: 'From bookings to payments, our platform takes care of the backend so you can focus on your session..'
    },
    ];

export default function OfferLanding() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.termsAndConditionPage}>
            <Header />
            <section className={styles.partnerSection}>
                <div className="container">
                    <div className="row align-items-center mb-5">
                        <div className={`col-md-6 ${styles.desktopShow}`}>
                            <Image src="/partner/partner-become.png" className={styles.blobImg} width={460} height={460} alt="Partner Group" />
                        </div>
                        <div className="col-md-6 text-white">
                            <span className={styles.planTag}>Offer Services</span>
                            <h1 className={styles.heading}>Become a partner with <span>HOBBEEME</span></h1>

                            <div className={`${styles.MobileShow} ${styles.partnerImg}`}>
                                <Image src="/partner/partner-become.png" className={styles.blobImg} width={460} height={460} alt="Partner Group" />
                            </div>
                            <p className={styles.ParaText}>Do you host creative workshops, fun classes, or unique experiences in Dubai?
                                Whether you're a dance teacher, baking enthusiast, artist, musician, or just someone who loves hosting
                                memorable moments — <strong>Hobbeeme is your platform to shine and earn.</strong></p>

                            <div className={styles.buttonWrapping}>
                                <button onClick={() => setIsModalOpen(true)} className={`${styles.aboutBtn} `}>BECOME A PARTNER <span><ArrowDown /></span></button>
                                <a
                                    href="https://calendly.com/jhankaragarwal91/learn-more-how-to-list-with-hobbeeme"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.learnMoreBtn} `}
                                >
                                    <div className={styles.learnMoreText}>
                                        Learn More <span className={styles.SmallText}>Join our upcoming webinar</span>
                                    </div>
                                    <span><ArrowDown /></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.hobeList} row text-white text-center `}>
                        {features.map((feat, i) => (
                            <div className={`col-md-3 mb-4 col-sm-6 ${styles.cardMinWidth}`} key={i}>
                                <div className={styles.featureCard}>
                                    {feat.title === 'EXPAND YOUR REACH' && <ExpandIcon />}
                                    {feat.title === 'ADDITIONAL INCOME' && <AdditionalIcon />}
                                    {feat.title === 'EASY MANAGEMENT' && <EasyManagementIcon />}
                                    {feat.title === 'BUILD YOUR BRAND' && <BuildYourIcon />}
                                    <h5>{feat.title}</h5>
                                    <p>{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center text-white mb-5">
                        <h2 className={styles.subheading}>HOW TO START</h2>
                        <p>Getting started is simple - follow these steps to begin hosting your experiences</p>
                        <div className={styles.stepsContainer}>
                            {steps.map((step, i) => (
                                <div className={styles.step} key={i}>
                                    <div className={styles.stepNum}>{i + 1}</div>
                                    <h4>{step.title}</h4>
                                    <p>{step.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={`${styles.hobeList} row align-items-center `}>
                        <div className="col-md-6 text-white">
                            <h2 className={styles.subheading}>WHY LIST WITH HOBBEEME?</h2>
                            <ul className={styles.listCheck}>
                                {whyList.map((text, i) => (
                                    <li key={i}><CheckIcon />
                                        <h5>{text.title}</h5>
                                        <p>{text.content}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img src="/partner/why-list.png" className={styles.blobImg} alt="Yoga Session" />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.readyToShare}>
                <Image src='/partner/ready-to-shareBg.png' width={1920} height={414} alt='' className={styles.readyPic} />

                <div className={styles.content}>
                    <h4>Ready to Share What You Love?</h4>
                    <p>Listing your experience takes just a few minutes. Join hundreds of partners already earning with HobbeeMe</p>
                    <Link href='' className={styles.aboutBtn}>LIST YOURSELF NOW <span><ArrowDown /></span></Link>
                </div>
            </section>
            <section className={styles.faq}>
                <Faq></Faq>
            </section>
            <Footer />

            <ListingModal show={isModalOpen} onHide={() => setIsModalOpen(false)} />
        </div>
    );
}
