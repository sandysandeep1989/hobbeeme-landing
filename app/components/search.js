'use client'

import {React, useEffect, useRef, useState} from 'react'
import styles from './search.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { CloseXcon } from './icons'


const mockResults = [
  {
    title: 'Salsa dance by DD Studio',
    description: 'Beginner Ballet Class at Downtown Arts Studio now open for weekend bookings.',
    img: '/search-1.png',
  },
  {
    title: 'Salsa dance by MOhan',
    description: 'Cultural Belly Dance Workshop added at Dubai Marina – limited spots!',
    img: '/search-2.png',

  },
  {
    title: 'Salsa dance by Armani',
    description: 'Bollywood Fusion with Rhythm House – every Thursday in Al Quoz.',
    img: '/search-3.png',

  },
  {
    title: 'Salsa dance by DD Studio',
    description: 'Latin Night Prep Class: Salsa 101 now open in Business Bay.',
    img: '/search-4.png',

  },
  {
    title: 'Salsa dance by DD Studio',
    description: 'Street Style Hip Hop Jam by UrbanX launches this Friday at D3.',
    img: '/search-5.png',

  },
  {
    title: 'Salsa dance by DD Studio',
    description: 'Creative Clay: Pottery + Music mashup coming to JLT Art Hub.',
    img: '/search-1.png',

  }
];


export default function SearchHeader({searchPop, setSearchPop}){

const [hideSearch, setHideSearch] = useState(false)



 const [query, setQuery] = useState('');
    let filtered = [];
    if (query.trim() !== ''){
        filtered = mockResults.filter((item) =>
            item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
     )
    }
  const handleClear = () => {
    setQuery('');
  };

   const handleSearch =()=>{
            setHideSearch(false);
            setSearchPop(false);
     }

     useEffect(()=>{
          setHideSearch(searchPop);
      },[searchPop]);

  return (
    <>
     
   <div className={`${styles.SearchContainer} ${hideSearch ? styles.Active : ''}`}>
      <div className={styles.inputBox}>
        <ArrowLeft onClick={()=>{handleSearch()}}/>
        <span className={styles.circleX} onClick={handleClear}><CloseXcon   /></span>
        <input
          type="text"
          placeholder="Search class or experience……"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />

      </div>
     
       <div className={`${styles.resultBox} ${filtered.length !== 0 ? styles.active : ''} `}>
          <div className={styles.header}>
            <span>Search Result</span>
            <span className={styles.clear} onClick={handleClear}>Clear</span>
          </div>

             <h3>Recently  Classes</h3>
              {filtered.slice(0, 4).map((item, index) => (
             <Link key={index} className={styles.item} href='/experience'>
              <Image src={item.img} alt="thumbnail" className={styles.img} width={50} height={50} />
              <div>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </Link>
             ))}

              <h3>Recently  Expereinces</h3>
              {filtered.slice(0, 4).map((item, index) => (
             <Link key={index} className={styles.item} href='/experience'>
              <Image src={item.img} alt="thumbnail" className={styles.img} width={50} height={50} />
              <div>
                <p className={styles.title}>{item.title}</p>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </Link>
             ))}
         </div>
      
      <div className={styles.overLay} onClick={()=>{handleSearch()}}></div>
    </div>

      </>
  )
}

