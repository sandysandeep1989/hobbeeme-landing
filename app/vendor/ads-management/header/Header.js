import React from 'react'
import styles from './header.module.css';
const Header = () => {
  return (
    <div className={styles.vendorheader}>
        <div className={styles.logoDiv}>
         <div> <img className={styles.logoimg} src="/vendor/hobLogo.svg" alt="logo"  /></div> 
         <button className={styles.vendorHeaderBtn}>Back</button>  
        </div>
        <div className={styles.gridline}></div>
    </div>
  )
}

export default Header;