'use client'
import Header from '@/app/components/header';
import styles from '@/app/personal-information/component/account.module.css'
import Footer from '@/app/components/footer';
import Link from 'next/link';
import SidebarProfile from '../personal-information/component/sidebar';
import {  ChevronRight } from 'lucide-react';
import { SavedCollectionPage } from './component/saved-collection';





export default function SavedCollection() {


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
                <SavedCollectionPage/>
            </div>
          </div>
        </div>
     </div>
      <Footer />
    </>
  );
}
