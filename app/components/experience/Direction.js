import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Direction.module.css';

const Direction = () => {
  return (
    
      <Row>
        <Col md={3}>
          <h3 className={styles.heading}>Direction</h3>
        </Col>
        <Col md={9}>
          <p className={styles.address}>
            At Instructor's Home Studio: (Unit# provided upon booking)<br />
            MARIA/1 Building, Al Ittihad Rd, Nahda Al Nahd Dubai
          </p>

          <div className={styles.mapContainer}>
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.5840536722096!2d-73.98594108459248!3d40.57733997934506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2445dbb0a59cb%3A0x46923421b7beccc8!2sConey%20Island%2C%20Brooklyn%2C%20NY%2011224!5e0!3m2!1sen!2sus!4v1616161616161"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.map}
            ></iframe>
          </div>
        </Col>
      </Row>
   
  );
};

export default Direction;
