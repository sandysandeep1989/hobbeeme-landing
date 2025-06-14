"use client"
import PrivacyPolicy from "./components/terms";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';


import styles from '../personal-information/component/account.module.css'
import Terms from "./components/terms";


export default function Privacy() {



     return (
    <>
      <Header />
      <div  className={`${styles.bodyAccount}`}>
       <div  className={` container`}>
          <div className='row'>
          
            <div className='col-md-12'>
                   <Terms/>
         
            </div>
          </div>
        </div>
        
     </div>
      <Footer />
    </>
  );

}
