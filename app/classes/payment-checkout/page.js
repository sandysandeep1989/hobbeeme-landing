'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import BookingHeader from './component/BookingHeader';
import Payment from './component/Payment';
import DetailStep from './component/DetailStep';
import { useRouter } from 'next/navigation';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';


export default function PaymentCheckout() {
    const [currentStep, setCurrentStep] = useState(1);
    const router = useRouter();
    const [maxMembers, setMaxMembers] = useState(null);

    useEffect(() => {
        // Read maxMembers from local storage
        const storedMaxMembers = localStorage.getItem('maxMembers');
        if (storedMaxMembers) {
            setMaxMembers(parseInt(storedMaxMembers, 10));
            // Clean up local storage
            localStorage.removeItem('maxMembers');
        }
    }, []); // Empty dependency array ensures this runs only once on mount

    let content;
    switch (currentStep) {
        case 2:
            content = <Payment currentStep={currentStep} setCurrentStep={setCurrentStep} />;
            break;

        default:
            content = <DetailStep currentStep={currentStep} setCurrentStep={setCurrentStep} maxMembers={maxMembers} />;
    }

    return (
        <div className={styles.page}>
            <Header/>
            <div className={styles.bookingClientWrapper}>
            <div className='breadCrumb'>
                        <div className={`CustomeContainer`}>
                            <ul>
                                <li><Link href='/'>Home</Link> <ChevronRight /></li>
                                <li >Classes <ChevronRight /></li>
                                <li>Academy <ChevronRight /></li>
                                <li>Kathak Grace in Motion <ChevronRight /></li>
                                <li>Your Information  </li>
                            </ul>
                        </div>
                    </div>
                <BookingHeader currentStep={currentStep} setCurrentStep={setCurrentStep} />
                {content}
            </div>
            <Footer/>
        </div>
    );
}