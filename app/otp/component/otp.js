'use client'
import styles from '@/app/login/component/login.module.css'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from '@/app/login/component/slider';



export default function OtpPage({ length = 6 }) {
  const [otp, setOtp] = useState(Array(length).fill(''));
  const [errors, setErrors] = useState({});
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }
    setErrors({});
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (e.key === 'Delete' && index < length - 1) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim();
    if (!/^\d{6}$/.test(pastedData)) return;

    const newOtp = pastedData.split('').slice(0, length);
    setOtp(newOtp);
    inputRefs.current[length - 1].focus();
  };

  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (otp.includes('') || otp.length !== length) {
      newErrors.otp = 'Please enter the complete 6-digit OTP';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((msg, i) =>
        setTimeout(() => toast.error(msg), i * 100)
      );
      return;
    }

    const otpValue = otp.join('');
    toast.success('OTP submitted: ' + otpValue);
    console.log('Final OTP:', otpValue);
  };

    return (
     <>
          <div className='container-fluid'>
                 <div className='row'>
                        <div className={`${styles.startBox} col-md-7 center-box `}>
                           <Link href='/'> <Image src='/logo.webp'  className={styles.logo} width={330} height={96} alt='' /></Link>
                               <div className={styles.container}>
                                           <img src='/bee.gif'  className={styles.bee} width={330} height={96} alt='' />

                                      <div className={styles.back}>
                                          <Link href='/login'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10 8L6 12M6 12L10 16M6 12L18 12" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          Back</Link>
                                      </div>

                                        <h1 className={styles.title}>Enter  
                                            <span style={{display:'inline'}}> OTP</span>  </h1>
                                        <p className={styles.subtitle}>We have sent an OTP code to your registered email address to reset your password.</p>
                                        <form onSubmit={handleSubmit} className={styles.form}>
                                                    <div className={styles.formGroup}>

                                                      <div className={styles.otpInput}>
                                                        {otp.map((digit, index) => (
                                                          <input
                                                            key={index}
                                                            type="text"
                                                            maxLength={1}
                                                            value={digit}
                                                            onChange={(e) => handleChange(index, e.target.value)}
                                                            onKeyDown={(e) => handleKeyDown(index, e)}
                                                            onPaste={index === 0 ? handlePaste : undefined}
                                                            ref={(el) => (inputRefs.current[index] = el)}
                                                            className={styles.otpInput}
                                                          />
                                                        ))}
                                                      </div>
                                                      {errors.otp && <p className={styles.error}>{errors.otp}</p>}
                                                    </div>

                                                    <button type="submit" className={styles.button}>Submit OTP</button>
                                                  </form>


                                            <ToastContainer position="top-right" autoClose={3000} />
                                       


                                      

                                             
                                          </div>


                        </div>
                         <div className='col-md-5 d-none d-md-block'>
                                                    <Slider/>
                            </div>
                 </div>
          </div>
     </>
    );
  }
  