"use client"
import TermsConditions from "./components/TermsConditions";
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import Link from 'next/link';
import {  ChevronRight } from 'lucide-react';
import SidebarProfile from '../personal-information/component/sidebar';
import styles from '../personal-information/component/account.module.css'


export default function Terms() {



     return (
    <>
      <Header />
      <div  className={`${styles.bodyAccount} ${styles.SavedCollPCtnr}`}>
        <div className={styles.breadCrumb}>
        <div className={`${styles.CustomeContainer} container`}>
          <ul>
            <li><Link href='/'>Home</Link> <ChevronRight/></li>
            <li className={styles.active}>Account</li>
          </ul>
          </div>
        </div>
        <div  className={`${styles.CustomeContainer} container`}>
          <div className='row'>
            <div className='col-md-3 d-none d-md-block'>
              <SidebarProfile/>
            </div>
            <div className='col-md-9'>
                   <TermsConditions/>
         
            </div>
          </div>
        </div>
     </div>
      <Footer />
    </>
  );



}
