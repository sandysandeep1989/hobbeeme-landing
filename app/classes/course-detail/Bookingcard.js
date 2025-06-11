"use client"
import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import styles from './BookingCar.module.css';
import CustomDropdown from './CustomDropDown';
import { ArrowDown } from '@/app/components/icons';


const BookingCard = ({ handleBookNow }) => {
  const [attendance, setAttendance] = useState('Group');
  const [level, setLevel] = useState('Beginner');
  const [session, setSession] = useState('8');
  const [batchTime, setBatchTime] = useState('Tuesday and Thursday: 5:30 pm to 6:30 pm');
  const [startDate, setStartDate] = useState('7 May 2025');
  const [checked, setChecked] = useState(false);
  const [seats, setSeats] = useState(2);
  const [slot, setSlot] = useState('Mon 1 PM');



  const handleIncrement = () => setSeats(seats + 1);
  const handleDecrement = () => {
    if (seats > 1) setSeats(seats - 1);
  };

  const pricePerSeat = 456;
  const totalPrice = pricePerSeat * seats;

  const attendanceIcons = {
    'Group': (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21" stroke="#FAE01E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3.12793C16.8578 3.3503 17.6174 3.85119 18.1597 4.55199C18.702 5.25279 18.9962 6.11382 18.9962 6.99993C18.9962 7.88604 18.702 8.74707 18.1597 9.44787C17.6174 10.1487 16.8578 10.6496 16 10.8719" stroke="#FAE01E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299" stroke="#FAE01E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#FAE01E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    '1:1 Private': (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21" stroke="#FAE01E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#FAE01E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  const handleCheckboxChange = (value) => {
    setChecked(value);
  };

  return (
    <div className={styles.cardContainer}>
      {checked && (
        <div className={styles.voucherHeader}>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
  <path d="M2.83398 12.7499C3.96115 12.7499 5.04216 13.1977 5.83919 13.9947C6.63622 14.7917 7.08398 15.8727 7.08398 16.9999C7.08398 18.1271 6.63622 19.2081 5.83919 20.0051C5.04216 20.8022 3.96115 21.2499 2.83398 21.2499V24.0833C2.83398 24.8347 3.1325 25.5554 3.66385 26.0867C4.1952 26.6181 4.91587 26.9166 5.66732 26.9166H28.334C29.0854 26.9166 29.8061 26.6181 30.3375 26.0867C30.8688 25.5554 31.1673 24.8347 31.1673 24.0833V21.2499C30.0401 21.2499 28.9591 20.8022 28.1621 20.0051C27.3651 19.2081 26.9173 18.1271 26.9173 16.9999C26.9173 15.8727 27.3651 14.7917 28.1621 13.9947C28.9591 13.1977 30.0401 12.7499 31.1673 12.7499V9.91659C31.1673 9.16514 30.8688 8.44447 30.3375 7.91312C29.8061 7.38176 29.0854 7.08325 28.334 7.08325H5.66732C4.91587 7.08325 4.1952 7.38176 3.66385 7.91312C3.1325 8.44447 2.83398 9.16514 2.83398 9.91659V12.7499Z" stroke="#ED99DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.416 7.08325V9.91659" stroke="#ED99DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.416 24.0833V26.9166" stroke="#ED99DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M18.416 15.5833V18.4166" stroke="#ED99DC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          Book a Voucher
        </div>
      )}

      <div className={styles.dropdownwrapper}>
        <CustomDropdown
          label="How do you want to attend?"
          options={['Group', '1:1 Private']}
          selected={attendance}
          onChange={setAttendance}
          icons={attendanceIcons}
        />
      </div>

      {attendance === 'Group' && (
        <div className={styles.seatSection}>
          <label>Seats</label>
          <div className={styles.seatSelector}>
            <button onClick={handleDecrement} className={styles.button}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34" fill="none">
              <path d="M16.6875 31C24.3875 31 30.6875 24.7 30.6875 17C30.6875 9.3 24.3875 3 16.6875 3C8.9875 3 2.6875 9.3 2.6875 17C2.6875 24.7 8.9875 31 16.6875 31Z" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.0879 17H22.2879" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg></button>
            <span className={styles.seatCount}>{seats}</span>
            <button onClick={handleIncrement} className={styles.button}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 34 34" fill="none">
              <path d="M17.2002 31C24.9002 31 31.2002 24.7 31.2002 17C31.2002 9.3 24.9002 3 17.2002 3C9.5002 3 3.2002 9.3 3.2002 17C3.2002 24.7 9.5002 31 17.2002 31Z" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.5996 17H22.7996" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M17.2002 22.6V11.4" stroke="#FAE01E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg></button>
          </div>
        </div>
      )}

      <Row className={styles.dropdownRow}>
        <Col xl={6}>
          <CustomDropdown
            label="Level"
            options={['Beginner', 'Intermediate']}
            selected={level}
            onChange={setLevel}
          />
        </Col>

        <Col xl={6}>
          <CustomDropdown
            label="Session"
            options={['8', '12']}
            selected={session}
            onChange={setSession}
          /></Col>

      </Row>

      {!checked && (
        attendance === '1:1 Private' ? (
          <div className={styles.dropdownwrapper}>
            <CustomDropdown
              label="First Slot"
              options={['Mon 1 PM', 'Tue 3 PM']}
              selected={slot}
              onChange={setSlot}
            />
          </div>
        ) : (
          <>
            <div className={styles.dropdownwrapper}>
              <CustomDropdown
                label="Batch"
                options={[
                  'Monday & Wednesday, 5:30 pm to 6:30 pm',
                  'Tuesday and Thursday: 5:30 pm to 6:30 pm',
                ]}
                selected={batchTime}
                onChange={setBatchTime}
              />
            </div>

            <div className={styles.dropdownwrapper}>
              <CustomDropdown
                label="Start from"
                options={['7 May 2025', '14 May 2025']}
                selected={startDate}
                onChange={setStartDate}
              />
            </div>
          </>
        )
      )}

      <div className={styles.sessionExpire}>
        {checked
          ? <div className={styles.checkedSession}>Your Voucher will expire in 30 days i.e 10 july 2025</div>
          : <div className={styles.uncheckedSession}>Your sessions will expire on 10 july 2025</div>
        }
      </div>

      {checked && (
        <div className={styles.termsCondition}>
          <h3>Terms and Conditions</h3>
          <ul>
            <li>Full payment is required at the time of booking to secure your spot.</li>
            <li>Cancellations must be made at least 48 hours in advance for a full refund.</li>
            <li>Participants are responsible for their own belongings during the workshop.</li>
          </ul>
          
        </div>
      )}

      <div className={styles.cardFooter}>
       
        <p className={styles.totalPrice}>
          Total Price <span>AED {totalPrice.toFixed(2)}</span>
        </p>
        <Button className={styles.btnBook} onClick={handleBookNow}>BOOK NOW →</Button>
        <button 
          className={styles.voucherButton} 
          onClick={() => handleCheckboxChange(!checked)}
        >
          {checked ? <div className={styles.goback}><span><ArrowDown/></span>Go Back</div> : <div className={styles.voucherText}>Confused about Timing? Buy voucher instead! <span><ArrowDown /></span></div>}
        </button>
      </div>
    </div>
  );
};

export default BookingCard;
