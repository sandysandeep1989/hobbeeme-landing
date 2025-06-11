import React from "react";
import styles from "./page.module.css";
import Header from "../header/Header";
const page = () => {
  return (
    <>
     <Header/>
      <div className={styles.paymentadscon}>
        <div className={styles.paymentadsconinner}>
          <div className={styles.paymentsHeading}>Payment</div>
          <div className={styles.paymentsInfo}>
            <div className={styles.leftpaymentsInfo}>
              <div className={styles.leftpaymentsInfohead}>Order Info</div>
              <div className={styles.leftpaymentsInfopic}>
                <img src="/adsposter/festival.svg" alt="festivalw" />
                <div className={styles.festivalrightdiv}>
                  <span className={styles.festivalrightdivspan1}>
                    Weekend Zumba Promo
                  </span>
                  <span className={styles.festivalrightdivspan2}>
                    Zumba for Beginners
                  </span>
                </div>
              </div>
              <div className={styles.leftinfodivborder}></div>
              {/* this is my last div */}
              <div className={styles.leftpaymentsInfolastdiv}>
                <div className={styles.paymentgatewaydetail}>
                  <div className={styles.paymentgatewaydetailheader}>
                    Complete payment
                  </div>
                  <div className={styles.paymentgatewaydetailspan}>
                    <span className={styles.paymentgatewaydetailspan1}>
                      Well contact you only it there's any updates to your
                      booking
                    </span>
                    <span className={styles.paymentgatewaydetailspan2}>
                      <img src="/adsposter/visa.svg" alt="visasvg" />
                      <img src="/adsposter/Discover.svg" alt="visasvg" />
                      <img src="/adsposter/Maestro.svg" alt="visasvg" />
                      <img src="/adsposter/Mastercard.svg" alt="visasvg" />
                    </span>
                  </div>
                </div>
                {/* last div */}
                <div className={styles.debitCardDetaildiv}>
                  <div className={styles.debitCardDetaildivHeader}>
                    Credit/ debit card
                  </div>
                  <div className={styles.debitinputnum}>
                    <label>Card Number</label>
                    <input className={styles.debitcardentry}></input>
                  </div>

                  <div className={styles.debitcardentryDate}>
                    <div className={styles.debitcardentryDateinput}>
                      <label>Expiration date</label>
                      <input placeholder="MM/YY"></input>
                    </div>
                    <div className={styles.debitcardentryDateinput}>
                      <label>Security code</label>
                      <input></input>
                    </div>
                  </div>
                </div>
              </div>
              {/* this is my last div */}
            </div>
            <div className={styles.rightpaymentsInfo}>
              <div className={styles.rightpaymentsInfo1}>
                 <div className={styles.rightpaymentsInfo1div}>Weekend Zumba Promo</div>
                  <div  className={styles.rightpaymentsInfo1div1}>Free cancellation (24 hours) until approved by Admin.</div>
              </div>
              <div className={styles.midborder}></div>
              <div className={styles.rightpaymentsInfo2}>
                <div className={styles.rightinfospan}>
                  <div className={styles.rightdividespan} >
                    <span className={styles.rightdividespan1}>Start Date</span>
                    <span className={styles.rightdividespan2}>11/05/2024</span>
                  </div>
                   <div className={styles.rightdividespan} >
                     <span  className={styles.rightdividespan1}>End Date</span>
                    <span className={styles.rightdividespan2}>17/05/2024</span>
                   </div>
                    <div className={styles.rightdividespan} >
                       <span className={styles.rightdividespan1}>Duration</span>
                    <span className={styles.rightdividespan2}>6 Days</span>
                    </div>
                    <div className={styles.rightdividespan} >
                       <span className={styles.rightdividespan1}>Price / Day</span>
                    <span className={styles.rightdividespan2}>100 AED</span>
                    </div>
               
                </div>
                <div className={styles.midborder}></div>
                <div className={styles.rightpricespan}>
                   <span className={styles.pricespan}>Total Price</span>
                   <span className={styles.pricespan1}>600 AED</span>
                </div>
              </div>
             <button className={styles.finalbtn}>Confirm and pay</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
