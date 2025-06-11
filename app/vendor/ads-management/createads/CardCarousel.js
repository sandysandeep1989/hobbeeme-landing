"use client";
import React, { useState } from "react";
import styles from "./CardCarousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cardsData = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: "Spot ",
  tit: `#${2345 + i}`,
  subtitle: "Home Ads spot - Carousel",
  size: "300 × 250 px",
  price: "100 AED/ Day",
}));

const CardCarousel = () => {
  const cardsPerPage = 8;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const currentCards = cardsData.slice(
    page * cardsPerPage,
    (page + 1) * cardsPerPage
  );

  return (
    <>
      <div className={styles.carouselWrapper}>
        <div className={styles.crouselheading}>Choose Your Spot</div>
        <div className={styles.crouselpara}>Select one.</div>
      </div>

      <div className={styles.carousel}>
        {currentCards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div>
              <div>
                <span className={styles.title}>{card.title}</span>
                <span className={styles.tit}>{card.tit}</span>
              </div>

              <div className={styles.subtitle}>{card.subtitle}</div>
            </div>

            <div>
              <span className={styles.crouselspan}>Size </span>
              <span className={styles.crouselspan1}>- {card.size}</span>
            </div>
            <div>
              <span className={styles.crouselspan}>Price </span>
              <span className={styles.crouselspan1}>- {card.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button onClick={handlePrev} disabled={page === 0}>
          <ChevronLeft/>
        </button>
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === page ? styles.active : ""}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
        <button onClick={handleNext} disabled={page === totalPages - 1}>
          <ChevronRight/>
        </button>
      </div>
    </>
  );
};

export default CardCarousel;
