import React, { useState } from 'react'
import styles from './start.module.css'
import { Check, MenuArrow} from '../icons'
import Link from 'next/link'
export default function StartForFree(){
  

  return (
   
    <div className={styles.skipThe}>
        <div className='container'>
      <h3>Start for free & <span> Get paid</span></h3>
      <p className={styles.pra}>Whether you're a yoga teacher, artist, chef, DJ, or desert explorer — HobbeeMe is the place to showcase your passion to Dubai’s vibrant crowd. From pottery to parkour, you bring the vibe — we bring the audience.</p>
        <ul>
            <li><Check/> Zero listing fees</li>
            <li><Check/> Earn with every booking</li>
            <li><Check/>  We help you get discovered</li>
             </ul>
              <Link href='' className={styles.ListBtn}>LIST YOUR CLASS NOW <span><MenuArrow/></span></Link>

              <img src='/bouncing-bee.gif' width={400} height={400} className={styles.flyBee}/>

    </div>
    </div>
        

  )
}
