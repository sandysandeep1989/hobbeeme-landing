'use client'
import Header from '@/app/components/header';
import styles from '../component/account.module.css'
import Footer from '@/app/components/footer';
import Link from 'next/link';
import SidebarProfile from './sidebar';
import {  ChevronRight } from 'lucide-react';
import { PersonalPage } from './personal-center';
import React,{useState} from 'react';

export default function PersonalInformationPage() {
  const [showPersonalPage, setShowPersonalPage] = useState(true);

  const handleSidebarLinkClick = (path) => {
    setShowPersonalPage(path === '/personal-information');
  };

  return (
    <>
      <Header />
      <div className={styles.bodyAccount}>
        <div className={styles.breadCrumb}>
        <div  className={`${styles.CustomeContainer} container`} >
          <ul>
            <li><Link href='/'>Home</Link> <ChevronRight/></li>
            <li className={styles.active}>Account</li>
          </ul>
          </div>
        </div>
        <div  className={`${styles.CustomeContainer} container`}>
          <div className='row'>

            <div className='col-md-3  d-none d-md-block ' >
              <SidebarProfile onLinkClick={handleSidebarLinkClick} />
            </div>
            <div className='col-md-9'>
              <PersonalPage />

            </div>
          </div>
        </div>
     </div>
      <Footer />
    </>
  );
}
