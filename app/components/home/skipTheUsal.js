import React, { useState } from 'react'
import styles from './skip.module.css'
import Link from 'next/link'
import { MenuArrow} from '../icons'

export default function SkipTheUsal(){
  

  return (
    <div className={styles.skipThe}>
         <video autoPlay muted loop playsInline>
          <source src="/familyVideo.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

      <div className={styles.videoTxt}>
           <h3>Skip the usual gifts—give your loved ones memories.</h3>
           <p>With a HobbeeMe Gift Voucher, You can choose from exciting classes, events, and experiences they'll truly enjoy.</p>
           <Link href='' className={styles.getVoucher}>Get Gift Voucher <span><MenuArrow/></span></Link>
        </div>

    </div>
  )
}
