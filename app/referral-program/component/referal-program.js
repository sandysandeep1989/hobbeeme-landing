'use client'
import { useState } from 'react'
import styles from '@/app/personal-information/component/account.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export const ReferalProgramPage = () => {

  

      const [referralCode] = useState("JOHNSMITH25");

      const handleCopy = () => {
        navigator.clipboard.writeText(referralCode);
        toast.success("Referral code copied!");
      };


  


  return (
     <div  className={` ${styles.accountPage} ${styles.accountPageRefrral}`}>
            <h1>Referral Program  </h1>
            <p className={styles.suprtTxt}>  Share the love and earn rewards when friends join</p>

            <div className={styles.referalContainer}>
              <Image src="/referal-pic.svg" alt="Referral" width={196} height={154} className={styles.referalImage} />
            
              <h2 className={styles.title}>Your Referral Code</h2>
              <p className={`${styles.subtitle} ${styles.hareThishng}`}>Share this code with friends to earn $15 credit for each new signup</p>

              <div className={styles.inputWrapper}>
                <input className={`${styles.input} ${styles.copyInput}`} value={referralCode} readOnly />  
                <button onClick={handleCopy} className={styles.copyBtn}>Copy</button>
              </div>
         <ToastContainer position="top-right" autoClose={3000} />

              <div className={styles.howItWorks}>
                <h3 className={styles.howTitle}>How it works</h3>
                <p className={styles.step}>1. Share your unique referral code with friends</p>
                <p className={styles.step}>2. You earn AED 25 credit when they complete their Paid booking</p>
              </div>
            </div>

        
    
     </div>
  )
}
