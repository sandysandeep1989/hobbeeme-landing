import Image from "next/image";
import HomePage from './homePage'
import OfferLanding from "./offer-landing/page";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from './page.module.css'

export default function Home() {
  return (
   <>
    {/* <OfferLanding/> */}
    <Header/>
    <div className={styles.comingSoonWrapper}>
      <div className={styles.comingSoonContainer}>
      <img src="/beeImage.png" alt="Bee Mascot" className={styles.beeImage} />
      <h1 className={styles.heading}>
        <span className={styles.white}>WE ARE</span>{' '}
        <span className={styles.gray}>COMING SOON</span>
      </h1>
      <p className={styles.description}>
        We are almost there! If you want to get notified when we launch our service in UAE,
        subscribe to our mailing list!
      </p>

      <div className={styles.subscriptionBox}>
        <input
          type="email"
          placeholder="Enter your email address"
          className={styles.input}
        />
        <button className={styles.button}>NOTIFY ME →</button>
      </div>
      </div>
    </div>
    <Footer/>
   </>
  );
}
