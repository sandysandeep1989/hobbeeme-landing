'use client'
import Header from '@/app/components/header';
import styles from '@/app/personal-information/component/account.module.css'
import Footer from '@/app/components/footer';
import Link from 'next/link';
import SidebarProfile from '../personal-information/component/sidebar';
import {  ChevronRight } from 'lucide-react';
import { BuildYourCirclePage } from './component/build-your-circle';





export default function buildCircle() {


  return (
    <>
      <Header />
      <div className={`${styles.bodyAccount} ${styles.buildCirclePctnr}`}>
        <div className={styles.breadCrumb}>
        <div  className={`${styles.CustomeContainer} container`}>
          <ul>
            <li><Link href='/'>Home</Link> <ChevronRight/></li>
            <li className={styles.active}>Account</li>
          </ul>
          </div>
        </div>
        <div className={`${styles.CustomeContainer} container`}>
          <div className='row'>
            <div className='col-md-3 d-none d-md-block'>
              <SidebarProfile/>
            </div>
            <div className='col-md-9  '>
                <BuildYourCirclePage/>
            </div>
          </div>
        </div>
     </div>
      <Footer />
    </>
  );
}
