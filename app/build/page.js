'use client'
import Header from '@/app/components/header';
import styles from '@/app/personal-information/component/account.module.css'
import Footer from '@/app/components/footer';
import Link from 'next/link';
import SidebarProfile from '../personal-information/component/sidebar';
import {  ChevronRight } from 'lucide-react';
import { SupportPage } from './component/support-page';





export default function PersonalInformationPage() {


  return (
    <>
      <Header />
      <div className={styles.bodyAccount}>
        <div className={styles.breadCrumb}>
        <div className='container'>
          <ul>
            <li><Link href='/'>Home</Link> <ChevronRight/></li>
            <li className={styles.active}>Account</li>
          </ul>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 d-none d-md-bblock'>
              <SidebarProfile/>
            </div>
            <div className='col-md-9'>
                <SupportPage/>
            </div>
          </div>
        </div>
     </div>
      <Footer />
    </>
  );
}
