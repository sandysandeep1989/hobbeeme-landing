'use client';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

import styles from './Calendar.module.css';
import CalendarModal from './CalendarPopup';
import TimeSlotModal from './TimeSlotModal';
import { useRouter } from 'next/navigation';


export default function BookingCard() {
    const [showCalendar, setShowCalendar] = useState(false);
    const [showTimeSlot, setShowTimeSlot] = useState(false);
    const [selectedDate, setSelectedDate] = useState('11/5/2024');
    const [selectedTime, setSelectedTime] = useState('7:00 AM – 9:00 AM',);

    const router = useRouter();

    const handleClick = () => {
        router.push('./booking-page')
    }

  
    return (
        <Container className={styles.bookingContainer}>
            <p className={styles.priceText}>
                From <del className={styles.oldPrice}>AED 2345</del> AED 3345/Person
            </p>

            <div
                onClick={() => setShowCalendar(true)}
                className={styles.selectBox}
            >
                <p className={styles.label}>Dates</p>
                <div className={styles.dateDiv}>
                    <p>{selectedDate}</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M9.33301 13.6666L15.9997 19L22.6663 13.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></span>
                </div>

            </div>

            <div
                onClick={() => setShowTimeSlot(true)}
                className={styles.selectBox}
            >
                <p className={styles.label}>Time Slot</p>
                <div className={styles.dateDiv}>
                    <p>{selectedTime}</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M9.33301 13.6666L15.9997 19L22.6663 13.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></span>
                </div>

            </div>

            <p className={styles.totalPrice}>
                Total Price <span className={styles.highlightedPrice}>AED 2480.00</span>
            </p>

            <Button className={styles.bookNowBtn} onClick={handleClick}> 
                BOOK NOW
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M14 15.3333L18 11.3333M18 11.3333L14 7.30432M18 11.3333L5 11.3333" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>

            {/* Calendar Modal */}
            <CalendarModal
                show={showCalendar}
                onHide={() => setShowCalendar(false)}
                onSelectDate={date => {
                    setSelectedDate(date);
                    setShowCalendar(false);
                }}
            />

            <TimeSlotModal
                show={showTimeSlot}
                onHide={() => setShowTimeSlot(false)}
                onSelectTime={time => {
                    setSelectedTime(time);
                    setShowTimeSlot(false);
                }}

            />

            {/* Time Slot Modal (to be implemented) */}
        </Container>
    );
}
