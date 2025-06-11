import React from 'react';
import styles from './captured.module.css';

const ClassCard = () => (
  <div className={styles.classCard}>
    {/* Image and Heart */}
    <div className={styles.cardImageWrapper}>
      <img
        src="/your-image.jpg"
        alt="Bollywood Magic"
        className={styles.cardImage}
      />
      <button className={styles.heartButton}>
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path
            d="M12 21s-6.5-5.5-9-9.5C1.5 8.5 3.5 5 7 5c1.7 0 3.4 1.1 4.1 2.1C12.6 6.1 14.3 5 16 5c3.5 0 5.5 3.5 4 6.5-2.5 4-9 9.5-9 9.5z"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </button>
    </div>

    {/* Badges */}
    <div className={styles.cardBadges}>
      <span className={styles.badgePrimary}>BOLLYWOOD</span>
      <span className={styles.badgeSecondary}>In Studio</span>
    </div>

    {/* Title and Price */}
    <div className={styles.cardContent}>
      <div className={styles.cardTitle}>
        Bollywood Magic For Young Stars
      </div>
      <div className={styles.cardPrice}>AED 456</div>
      <div className={styles.cardDiscountRow}>
        <span className={styles.discountBadge}>24% Off</span>
        <span className={styles.oldPrice}>AED 567</span>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className={styles.cardBottomBar}>
      Next Batch Starts From 15 May, 2025
    </div>
  </div>
);

export default ClassCard; 