import React, { useState } from 'react'
import styles from './discover.module.css'
import { Bee} from '../icons'

export default function Discover(){
  

  return (
   
        <div className={styles.discoverWrapper}>
              <div className={styles.span1}>
               <span> Discover. Book. Experience <Bee/>  </span>
                <span> Trending in Dubai Now <Bee/> </span>
                 <span>LEARN NEW SKILL EVERY WEEK <Bee/> </span>
            </div>

            <div className={styles.span2}>
               <span> Discover. Book. Experience <Bee/>  </span>
                <span> Trending in Dubai Now <Bee/> </span>
                 <span>LEARN NEW SKILL EVERY WEEK <Bee/> </span>
            </div>
    </div>  

  )
}
