'use client'
import Image from "next/image";
import HomePage from './homePage'
import OfferLanding from "./offer-landing/page";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from './page.module.css'
import SubscriptionForm from './components/SubscriptionForm'

export default function Home() {
  return (
    <>
      {/* <OfferLanding/> */}
      <Header/>
      <main className={styles.comingSoonWrapper}>
        <div>
          <Image
            src="/bee.png"
            alt="Bee Logo"
            width={300}
            height={300}
            className={styles.beeImage}
          />
          <h1 className={styles.heading}>
            <span className={styles.white}>WE ARE</span>{' '}
            <span className={styles.gray}>COMING SOON</span>
          </h1>
          <p className={styles.description}>
            We're working hard to bring you something amazing. Stay tuned for updates!
          </p>
          <SubscriptionForm />
        </div>
      </main>
      <Footer/>
    </>
  );
}
