'use client'
import Header from '@/app/components/header'
import styles from '../../personal-information/component/account.module.css'
import Footer from '@/app/components/footer';
import Link from 'next/link';
import SidebarProfile from '../../personal-information/component/sidebar'
import {  ChevronRight } from 'lucide-react';
import { EditInfo } from './EditInfo';
import React,{useState} from 'react';





export default function EditPersonalnformation() {
  const [showPersonalPage, setShowPersonalPage] = useState(false);
  const [activeComponent, setActiveComponent] = useState('');

   // Handle link click in sidebar
  const handleSidebarLinkClick = (component) => {
    setActiveComponent(component);
    setShowPersonalPage(true);
  };

  // Handle back button click from personal page
  const handleBackFromPersonalPage = () => {
    setShowPersonalPage(false);
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

            <div className={`col-md-3 ${!showPersonalPage ? 'd-none d-md-block' : ''}`}>
              <SidebarProfile onLinkClick={handleSidebarLinkClick} />
            </div>
            <div className={`col-md-9 ${showPersonalPage ? 'd-none d-md-block' : ''}`}>


                <EditInfo 
            
                />
            </div>
          </div>
        </div>
     </div>
      <Footer />
    </>
  );
}
