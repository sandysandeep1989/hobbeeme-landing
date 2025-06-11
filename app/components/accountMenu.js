'use client'
import React, { useState } from 'react'
import styles from './accountmenu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {  Arrow, TopArr } from './icons'
import SidebarProfile from '../personal-information/component/sidebar'
import { X } from 'lucide-react'

const AccountMenu = () => {

    const [accountPop , setAccountPop] = useState(false);
    const [showAcoccuntSideBar , setShowAcoccuntSideBar] = useState(false);

    
  return (
    <div className={styles.accountMenu}>
        <Image src='/login-pic.png' className={styles.userPic} width={40} height={40} alt='' onClick={()=> setAccountPop(true)} />

        <Image src='/login-pic.png' className={styles.userPicMobile} width={40} height={40} alt='' onClick={()=> setShowAcoccuntSideBar(true)} />

       <div className={`${styles.accOverlay} ${!accountPop ? styles.hide : ''}`} onClick={()=> setAccountPop(false)} ></div>
        <ul className={`${styles.accountMenuList} ${accountPop ? styles.active : ''}`}>
            <span className={styles.TopArr}><TopArr/></span>
            <li onClick={()=> setAccountPop(false)}><Link href='/personal-information'>Account {/*<Arrow/> */}</Link></li>
            <li onClick={()=> setAccountPop(false)}><Link href='/saved-collections'>Whishlist </Link></li>
            <li onClick={()=> setAccountPop(false)}><Link href='/referral-program'>Referral </Link></li>
            <li onClick={()=> setAccountPop(false)}><Link href='/my-wallet'>My Wallet </Link></li>
            <li onClick={()=> setAccountPop(false)}><Link href='/support'>Help Center </Link></li>
            <li onClick={()=> setAccountPop(false)}><Link href='/privacy-policy'>Privacy Policy </Link></li>
            <li onClick={()=> setAccountPop(false)}><Link href='/terms-conditions'>Terms and Conditions  </Link></li>
            <li onClick={()=> setAccountPop(false)}><Link href='#'>Logout </Link></li>
        </ul> 

    
        <div className={`${styles.sideBarShow}  ${showAcoccuntSideBar ? styles.active : ''}`}>
          <div  className={styles.xIcon} onClick={()=> setShowAcoccuntSideBar(false)}><X /></div> 
          <SidebarProfile/>
        </div>
    </div>

    
  )
}

export default AccountMenu