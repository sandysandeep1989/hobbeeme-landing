"use client"
import PrivacyPolicy from "./components/PrivacyPolicy";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';


import styles from '../personal-information/component/account.module.css'


export default function Privacy() {



     return (
    <>
      <Header />
      <div  className={`${styles.bodyAccount}`}>
       <div  className={` container`}>
          <div className='row'>
          
            <div className='col-md-12'>
                   <PrivacyPolicy/>
         
            </div>
          </div>
        </div>
        
     </div>
      <Footer />
    </>
  );

}
