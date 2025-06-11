// RightSidebar.jsx
import React, { useEffect, useRef } from "react";
import styles from "./RightSidebar.module.css";

export default function RightSidebar({ isOpen, setIsOpen, data }) {
  const sidebarRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      <div
        ref={sidebarRef}
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
      >
        <div className={styles.dataContent}>
           <div className={styles.adssideparenthead}>
            <div className={styles.adssidehead}>Ads Info</div>
            {data==="Paused" && (
                <button className={styles.sideadsbtn}>Resume Ads</button>
            )}
           </div>
          
          {data === "Active" && (
            <div className={styles.sideparentbar}>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Status</span>
                <span className={styles.sidespan2}>Acive</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Ads Title</span>
                <span className={styles.sidespan2}>
                  Summer Salsa Workshop Promo
                </span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Spot</span>
                <span className={styles.sidespan2}>
                  #2345, Home Ads spot - Carousel (300 x 250 px)
                </span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>On tap action (CTA)</span>
                <span className={styles.sidespan2}>https://hobbeme.com/</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Duration</span>
                <span className={styles.sidespan2}>7 Days</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Amount Paid</span>
                <span className={styles.sidespan2}>500 AED</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Start Date</span>
                <span className={styles.sidespan2}>12 May 2025</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>End Date</span>
                <span className={styles.sidespan2}>16 May 2025</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>View</span>
                <span className={styles.sidespan2}>505</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Clicks</span>
                <span className={styles.sidespan2}>450</span>
              </div>
            </div>
          )}
          {["Scheduled", "Completed", "Paused", "Pending Approval"].includes(
            data
          ) && (
            <div className={styles.sideparentbar}>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Status</span>
                <span className={styles.sidespan2}>{data}</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Ads Title</span>
                <span className={styles.sidespan2}>
                  Summer Salsa Workshop Promo
                </span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Spot</span>
                <span className={styles.sidespan2}>
                  #2345, Home Ads spot - Carousel (300 x 250 px)
                </span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>On tap action (CTA)</span>
                <span className={styles.sidespan2}>https://hobbeme.com/</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Duration</span>
                <span className={styles.sidespan2}>7 Days</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Amount Paid</span>
                <span className={styles.sidespan2}>500 AED</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Start Date</span>
                <span className={styles.sidespan2}>12 May 2025</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>End Date</span>
                <span className={styles.sidespan2}>16 May 2025</span>
              </div>
            </div>
          )}
          {data === "Rejected" && (
            <div className={styles.sideparentbar}>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Status</span>
                <span className={styles.sidespan2}>Rejected</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Ads Title</span>
                <span className={styles.sidespan2}>
                  Summer Salsa Workshop Promo
                </span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Spot</span>
                <span className={styles.sidespan2}>
                  #2345, Home Ads spot - Carousel (300 x 250 px)
                </span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>On tap action (CTA)</span>
                <span className={styles.sidespan2}>https://hobbeme.com/</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Duration</span>
                <span className={styles.sidespan2}>7 Days</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Amount Paid</span>
                <span className={styles.sidespan2}>500 AED</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Start Date</span>
                <span className={styles.sidespan2}>12 May 2025</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>End Date</span>
                <span className={styles.sidespan2}>16 May 2025</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Reason</span>
                <span className={styles.sidespan2}>
                  Creative is too cluttered; simplify graphics for clarity.
                </span>
              </div>
            </div>
          )}
          {data === "Cancelled" && (
            <div className={styles.sideparentbar}>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Status</span>
                <span className={styles.sidespan2}>Cancelled</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Ads Title</span>
                <span className={styles.sidespan2}>
                  Summer Salsa Workshop Promo
                </span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Spot</span>
                <span className={styles.sidespan2}>
                  #2345, Home Ads spot - Carousel (300 x 250 px)
                </span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>On tap action (CTA)</span>
                <span className={styles.sidespan2}>https://hobbeme.com/</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Duration</span>
                <span className={styles.sidespan2}>7 Days</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Amount Paid</span>
                <span className={styles.sidespan2}>500 AED</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Start Date</span>
                <span className={styles.sidespan2}>12 May 2025</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>End Date</span>
                <span className={styles.sidespan2}>16 May 2025</span>
              </div>
              <div className={styles.adsSideData}>
                <span className={styles.sidespan1}>Note</span>
                <span className={styles.sidespan2}>
                  New landing page required.
                </span>
              </div>
            </div>
          )}
        </div>
        <div className={styles.posterAds}>
          <div>Ads Poster</div>
          <img
            className={styles.posterImage}
            src="/adsposter/adsposter.svg"
            alt="adsposter"
          />
        </div>
      </div>
    </>
  );
}
