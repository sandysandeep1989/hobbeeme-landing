import { Row, Col } from 'react-bootstrap';
import styles from './OtherClasses.module.css';
import Image from 'next/image';

const OtherClasses = () => {
  const classList = [
    {
      id: 1,
      title: 'Bollywood Magic For Young Stars',
      price: 456,
      originalPrice: 567,
      discount: '24% Off',
      image: '/class.jpg',
      tags: ['BOLLYWOOD', 'In Studio'],
      nextBatch: '15 May, 2025',
    },
    {
      id: 2,
      title: 'Bollywood Magic For Young Stars',
      price: 456,
      originalPrice: 567,
      discount: '24% Off',
      image: '/class.jpg',
      tags: ['BOLLYWOOD', 'In Studio'],
      nextBatch: '15 May, 2025',
    },
    {
      id: 3,
      title: 'Bollywood Magic For Young Stars',
      price: 456,
      originalPrice: 567,
      discount: '24% Off',
      image: '/class.jpg',
      tags: ['BOLLYWOOD', 'In Studio'],
      nextBatch: '15 May, 2025',
    },
  ];

  return (
    <div className={styles.sectionWrapper}>
      <h2 className={styles.sectionTitle}>Other Class Offered By Taal</h2>
      <Row className={styles.cardRow}>
        {classList.map((item) => (
          <Col md={4} key={item.id} className={styles.cardCol}>
            <div className={styles.cardWrapper}>
              <div className={styles.imageWrapper}>
                <Image src={item.image} alt={item.title} layout="fill" className={styles.cardImage} />
                <div className={styles.wishlistIcon}>♡</div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.tagWrapper}>
                  <span className={styles.tag}>{item.tags[0]}</span>
                  <span className={styles.tag}>{item.tags[1]}</span>
                </div>
                <h4 className={styles.classTitle}>{item.title}</h4>
                <div className={styles.priceSection}>
                  <span className={styles.discountedPrice}>AED {item.price}</span>
                  <span className={styles.discount}>{item.discount}</span>
                  <span className={styles.originalPrice}>AED {item.originalPrice}</span>
                </div>
              </div>
              <div className={styles.batchInfo}>Next Batch Starts From {item.nextBatch}</div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OtherClasses;
