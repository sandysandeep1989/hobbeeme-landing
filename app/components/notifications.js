'use client'

import {React, useEffect, useRef, useState} from 'react'
import styles from './notification.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { NewsAlert, PaymentFailed, TopArr, PaymentSuccess }from './icons'
import { MoveLeft } from 'lucide-react'

const notifications = [
  {
    type: 'NewsAlert',
    title: 'New Event Alert!',
    timestamp: 'May 7 · 14:32',
    message: 'Pottery workshop added near you.'
  },
  {
    type: 'paymentFailed',
    title: 'Payment Failed',
    timestamp: 'May 7 · 14:32',
    message: 'Your recent payment didn’t go through.'
  },
  {
    type: 'paymentSuccess',
    title: 'Payment Successful',
    timestamp: 'May 7 · 14:32',
    message: 'AED 75 paid for “Arabic Cooking Masterclass.'
  }
];

export default function Notifications(){


  return (
      <div className={styles.Notifications} >
          <div className={styles.topArr}><TopArr/></div>
             <h4>  Notifications</h4>

          <ul>
            {notifications.map((notification, index) => (
                <li key={index}>
                  {notification.type  === 'paymentSuccess' && <PaymentSuccess/>}
                  {notification.type  === 'paymentFailed' && <PaymentFailed/>}
                  {notification.type  === 'NewsAlert' && <NewsAlert/>}


                  <div className={styles.content}>
                     <div className={styles.head}>{notification.title} </div>
                      <div className={styles.date}>{notification.timestamp}</div>
                     <div className={styles.msg}>{notification.message}</div>
                  </div>
                </li>
            ))
          }
            
          </ul>


    </div>
  )
}
