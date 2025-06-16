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
    content: 'Tell us about your activity—what it`s about, what people can expect, how long it lasts, and where it happens.'
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

const WhatsAppButton = () => {
    const handleWhatsAppClick = () => {
        const message = "Hi! Welcome to Hobbeeme. We're glad to assist you with our services.";
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/971586582458?text=${encodedMessage}`, '_blank');
    };

    return (
        <button 
            onClick={handleWhatsAppClick}
            className={styles.whatsappButton}
            aria-label="Chat on WhatsApp"
        >
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" 
                    fill="currentColor"
                />
            </svg>
        </button>
    );
};

export default function OfferLanding() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.termsAndConditionPage}>
            <Header />
            <div className={styles.sectionsWrapping}>
           
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
                                    href="https://calendly.com/hobbeemesales/learn-more-how-to-list-with-hobbeeme"
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
            <div className={styles.whatsappContainer}>
                    <WhatsAppButton />
                </div>
            </div>
            <Footer />

            <ListingModal show={isModalOpen} onHide={() => setIsModalOpen(false)} />
        </div>
    );
}
