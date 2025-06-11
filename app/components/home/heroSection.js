import React, { useState } from 'react'
import styles from './hero.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {ArrowDown, MenuArrow} from '@/app/components/icons'

export default function HeroSection(){
  
  const [inputSearch, SetInputSearch] = useState('');
  console.log(inputSearch);

  const searchForm = (event) => {
    event.preventDefault(); 
  }

  return (
    <>
    <div className={styles.hero}>
    <video autoPlay muted loop playsInline>
    <source src="/home.mp4" type="video/mp4" />
    Your browser does not support HTML5 video.
  </video>
    </div>

     <div className={styles.heroSection}>
      <h1>Your Next Hobby, Skill or Event Starts Here</h1>
      <p className={`${styles.text} ${styles.mobileHide}`}>From dance classes to desert adventures — explore what you love, meet your tribe, and make memories that stick.</p>
      <p className={`${styles.text} ${styles.mobileShow}`}>From Dance classes to Art Brunches — explore what you love, meet your tribe, and  make memories that stick.</p>
      
      <div className={styles.formSection}>
      <form onSubmit={searchForm} className={styles.searchForm}>
        <input type='text' value={inputSearch} placeholder='Search Event Or experience......' onChange={ (e) => SetInputSearch(e.target.value)} />
         <button type='submit' ><ArrowDown/></button>
      </form>
       <Link href='' className={styles.unique}>PLAN YOUR EVENT
       <div className={styles.arrow2}>
       <MenuArrow/>
       </div>
         </Link>
       </div>
    </div>
    </>
  )
}
