import React from 'react'
import styles from './vendorHeader.module.css'
import Image from 'next/image'


const VendorHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <div className={styles.headerLogo}>
            <img src="/vendor/hobLogo.svg" alt="logo"  />
          </div>
         
        </div>
        <div className={styles.headerRight}>
        <div className={styles.backButton}>
            Back
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorHeader
