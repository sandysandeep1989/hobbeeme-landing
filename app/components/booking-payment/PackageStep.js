import React, { useState } from 'react';
import styles from './PackageStep.module.css'; // Create and style this CSS module
import { Col, Container, Row } from 'react-bootstrap';
import SeatBooking from '../experience/SeatBooking';

const packages = [
  {
    id: 1,
    title: 'Burj Khalifa At the Top: Level 124 &',
    features: [
      'Access to Burj Khalifa Levels 124 & 125',
      'Access to the telescopes at observation decks',
      'Free Wi-Fi',
    ],
    price: 456,
  },
  {
    id: 2,
    title: 'Burj Khalifa At the Top: Level 124 &',
    features: [
      'Access to Burj Khalifa Levels 124 & 125',
      'Access to the telescopes at observation decks',
      'Free Wi-Fi',
    ],
    price: 456,
  },
  {
    id: 3,
    title: 'Burj Khalifa At the Top: Level 124 &',
    features: [
      'Access to Burj Khalifa Levels 124 & 125',
      'Access to the telescopes at observation decks',
      'Free Wi-Fi',
    ],
    price: 456,
  },
];



export default function PackageStep({ currentStep, setCurrentStep }) {
  const [selectedId, setSelectedId] = useState(1);
  const totalPrice = 2480;


  const handleStepClick = (stepId) => {
    if (stepId > currentStep) {
      setCurrentStep(stepId);
    }
  };

  const nextStep = 2;

 

  return (
   
    
      <Container className={styles.mainSection}>
        <Row>
          <Col md={7}>
            <div className={styles.packageList}>

              <div className={styles.tourInfo}>
                <img
                  src="/experience/aladin.png"
                  alt="Tour"
                  className={styles.tourImage}
                />
                <div>
                  <h3>Aladdin Tour; Old Town, Souks, Tastings</h3>
                  <p>
                    Enjoy stress-free visit to the local markets (souks) and Explore Grand Souk,
                    spice Souk and Gold Souk and get the best deals with Aladdin.
                  </p>
                </div>
              </div>

              <div className={styles.choosepackageHead}>Choose Your Package</div>
              {packages.map(pkg => (
                <div
                  key={pkg.id}
                  className={`${styles.packageCard} ${selectedId === pkg.id ? styles.selected : ''
                    }`}
                >
                  <div className={styles.leftCard}>
                    <h3>{pkg.title}</h3>
                    <ul>
                      {pkg.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>


                  <div className={styles.rightCard}>
                    <button
                      disabled={selectedId === pkg.id}
                      onClick={() => setSelectedId(pkg.id)}
                      className={selectedId === pkg.id ? styles.selectedBtn : styles.selectBtn}
                    >
                      {selectedId === pkg.id ? 'Selected' : 'Select'}
                    </button>
                    <span className={selectedId === pkg.id ? styles.selectedPrice : styles.price}>AED {pkg.price} / person</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={5} className='d-none d-md-block'>
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
              <button className={styles.bookNowBtn} onClick={() => handleStepClick(nextStep)}>BOOK NOW →</button>
            </div> */}
            <SeatBooking onBookNow={() => handleStepClick(2)}/>
            </Col>
        </Row>
       

      </Container>
  
  );
}
