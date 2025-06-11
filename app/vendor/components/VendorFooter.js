'use client'
import React from 'react'
import styles from './vendorFooter.module.css'
import { useContext } from 'react'
import { MultiStepContext } from '../../utils/MultiStepContext'
const   VendorFooter = () => {

  const {stepNo, setStepNo} = useContext(MultiStepContext)

  const handlePrev = () => {
    if(stepNo > 1){
      setStepNo(stepNo - 1)
    }
  }

  const handleNext = () => {
    if(stepNo < 8){
      setStepNo(stepNo + 1)
    }
  }
  
  return (
    <div className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerSection}>
                <div className={styles.previous} onClick={handlePrev}>
                    Previous
                    </div>



                    <div className={styles.next} onClick={handleNext}>
                        Next
                    </div>
            </div>
        </div>
      
    </div>
  )
}

export default VendorFooter
