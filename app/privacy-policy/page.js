"use client"
import PrivacyPolicy from "./components/PrivacyPolicy";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { useRouter } from 'next/navigation';
import styles from '../personal-information/component/account.module.css'

export default function Privacy() {
  const router = useRouter();

  return (
    <>
      <Header />
      <div className={`${styles.bodyAccount}`}>
        <div className={`container`}>
          <div className='row'>
            <div className='col-md-12'>
              <div className={styles.backButtonContainer}>
                <button 
                  onClick={() => router.back()} 
                  className={styles.backButton}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  
                </button>
              </div>
              <PrivacyPolicy/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
