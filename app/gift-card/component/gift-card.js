'use client'
import React, {useState} from 'react';
import styles from './gift.module.css';
import Image from 'next/image';
import Header from '@/app/components/header';

import Footer from '@/app/components/footer';
import { AdditionalIcon, ArrowDown, BuildYourIcon, CheckIcon, EasyManagementIcon, ExpandIcon } from '@/app/components/icons';
import Faq from '@/app/components/home/faq';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendGiftPop from './send-gift'


const features = [
  { title: 'EXPAND YOUR REACH', desc: 'Connect with new audiences across Dubai and grow your customer base.' },
  { title: 'ADDITIONAL INCOME', desc: 'Create a new revenue stream by sharing your skills and experiences.' },
  { title: 'EASY MANAGEMENT', desc: 'Our platform handles bookings, payments, and communications for you.' },
  { title: 'BUILD YOUR BRAND', desc: 'Showcase your expertise and build a reputation in your field.' }
];

const steps = [{
  title:'LIST YOUR EXPERIENCE',
  content:'Tell us about your activity—what it’s about, what people can expect, how long it lasts, and where it happens.'
},
{
  title:'GO LIVE & GET BOOKINGS',
  content:'Once approved, your listing goes live. We promote it across our platform, and people start booking!'
},
{
  title:'HOST & GET PAID',
  content:'You run your class or experience as planned. Payments are processed securely.'
},
];

const whyList = 
[{
  title:'TRUSTED PLATFORM',
  content:'Our verified review system and secure payment processing instill confidence in our users.'
},
{
  title:'MARKETING SUPPORT',
  content:'Benefit from our marketing efforts across social media, email campaigns, and local partnerships.'
},
{
  title:'FLEXIBLE SCHEDULE',
  content:'Set your own availability and manage your calendar to fit your lifestyle.'
},
{
  title:'We Handle the Admin, You Bring the Experience',
  content:'From bookings to payments, our platform takes care of the backend so you can focus on your session..'
},
];

export default function GiftCardPage() {


  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState({});
  const[popShow, setPopShow] = useState(false);

  const amounts = [100, 200, 400, 500, 1000];

  const handleSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setErrors({ ...errors, amount: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    const finalAmount = selectedAmount || parseFloat(customAmount);
    if (!finalAmount || isNaN(finalAmount) || finalAmount <= 0) {
      validationErrors.amount = 'Please select or enter a valid amount';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((msg, i) => {
        setTimeout(() => toast.error(msg), i * 100);
      });
      return;
    }

    setPopShow(true);
   
    console.log({ amount: finalAmount, note });
  };

  const popClose = (data) =>{
    setPopShow(data);
  }


  return (
    <>
    <Header/>
    {popShow && 
      <SendGiftPop popClose={popClose}/>
    }

    <section className={styles.partnerSection}>
      <div className={` container ${styles.CustCtnr}`}>

      <div className="row align-items-center mb-3 mb-md-5">
          
          <div className="col-md-12 text-center">
            <span className={styles.planTag}>Gifting</span>
            <h1 className={styles.heading}>Hobbeeme <span> Gift Card</span></h1>
            <p className="text-light">The gift of discovery starts here.</p>

          </div>
        </div>


        <div className="row  mb-3 mb-md-5">
          <div className="col-md-5">
            <Image src="/gift-card.png" className={styles.blobImg} width={567} height={437} alt="Partner Group" />
          </div>
          <div className="col-md-7 ">
            <div className={styles.giftCard}>
            <h4>Not sure what to gift? </h4>
            <p className={styles.textLight}>Let them pick classes and experiences across Dubai <br></br>
               a HobbeeMe gift card.</p>

            <p className={styles.textLight}>Gift cards are delivered by email and contain redemption instructions.</p>



                <form onSubmit={handleSubmit} className={styles.form}>
                  <label className={styles.label}>Select Value:</label>

                     <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                      setErrors({ ...errors, amount: '' });
                    }}
                    className={`${styles.input} ${errors.amount ? styles.errorInput : ''} `}
                  />
                  <div className={styles.buttonGroup}>
                    {amounts.map((amount) => (
                      <button
                        type="button"
                        key={amount}
                        className={`${styles.amountBtn} ${selectedAmount === amount ? styles.active : ''}`}
                        onClick={() => handleSelect(amount)}
                      >
                        AED {amount}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    placeholder="Custom Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                      setErrors({ ...errors, amount: '' });
                    }}
                    className={`${styles.input} ${errors.amount ? styles.errorInput : ''} d-none d-lg-block`}
                  />

                  {errors.amount && <p className={styles.error}>{errors.amount}</p>}

                  <label className={styles.label}>Gift Note (Optional)</label>
                  <textarea
                    placeholder="Write a gift note (optional)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className={styles.textarea}
                  />

                  <button type="submit" className={styles.submitBtn}>Next</button>
                </form>
                <ToastContainer position="top-right" autoClose={3000} />
                
           
                </div>

          </div>
        </div>

        <div className="row text-white text-center pt-5 ">
           <h3 className={styles.whyHead}>Why they'll love Hobbee Me</h3>
          {features.map((feat, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className={styles.featureCard}>
               {feat.title === 'EXPAND YOUR REACH' && <ExpandIcon/>}
               {feat.title === 'ADDITIONAL INCOME' && <AdditionalIcon/>}
               {feat.title === 'EASY MANAGEMENT' && <EasyManagementIcon/>}
               {feat.title === 'BUILD YOUR BRAND' && <BuildYourIcon/>}
                   <h5>{feat.title}</h5>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>

         
            <section className={styles.faq}>
              <div className={` container ${styles.FaqCustCtnr}`}>
                   <Faq></Faq>

              </div>
           
              </section>
    <Footer/>
    </>
  );
}
