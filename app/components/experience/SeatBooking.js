'use client'
import { useState } from 'react';
import styles from './SeatBooking.module.css';
import { useRouter } from 'next/navigation';

const SeatBooking = ({ onBookNow }) => {
    const pricePerSeat = 456;
    const [seats, setSeats] = useState(2);

    const handleIncrement = () => setSeats(seats + 1);
    const handleDecrement = () => {
        if (seats > 1) setSeats(seats - 1);
    };

    const totalPrice = pricePerSeat * seats;


    const router = useRouter();

    const handleClick = () => {
        if (onBookNow) {
            onBookNow(); // custom function from parent
        } else {
            router.push('./booking-page'); // default behavior
        }
    };

    return (
        <div className={styles.container}>
            <p className={styles.priceLine}>
                From <span className={styles.striked}>AED 567</span>
                AED {pricePerSeat}/Person
            </p>

            <div className={styles.seatSection}>
                <label>Seats</label>
                <div className={styles.seatSelector}>
                    <button onClick={handleDecrement} className={styles.button}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 34 34" fill="none">
                        <path d="M16.6875 31C24.3875 31 30.6875 24.7 30.6875 17C30.6875 9.3 24.3875 3 16.6875 3C8.9875 3 2.6875 9.3 2.6875 17C2.6875 24.7 8.9875 31 16.6875 31Z" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.0879 17H22.2879" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></button>
                    <span className={styles.seatCount}>{seats}</span>
                    <button onClick={handleIncrement} className={styles.button}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 34 34" fill="none">
                        <path d="M17.2002 31C24.9002 31 31.2002 24.7 31.2002 17C31.2002 9.3 24.9002 3 17.2002 3C9.5002 3 3.2002 9.3 3.2002 17C3.2002 24.7 9.5002 31 17.2002 31Z" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.5996 17H22.7996" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17.2002 22.6V11.4" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
                    </svg></button>
                </div>
            </div>

            <p className={styles.totalPrice}>
                Total Price <span>AED {totalPrice.toFixed(2)}</span>
            </p>

            <button className={styles.bookBtn} onClick={handleClick}>BOOK NOW →</button>
        </div>
    );
};

export default SeatBooking;
