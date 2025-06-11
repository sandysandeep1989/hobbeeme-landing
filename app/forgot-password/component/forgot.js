'use client'
import styles from '@/app/login/component/login.module.css'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff } from '@/app/components/icons';
import Slider from '@/app/login/component/slider';


export default function ForgotPasswordPage() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' });
    };
  
    const validateForm = () => {
      const newErrors = {};
    

      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

      return newErrors;
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
      
        if (Object.keys(validationErrors).length > 0) {
          setErrors(validationErrors);
      
          // 🔁 Show each error in a separate toast
          Object.values(validationErrors).forEach((msg, i) => {
            setTimeout(() => toast.error(msg), i * 100); // slight delay to prevent overlap
          });
      
          return;
        }
      
        // ✅ Proceed if no errors
        toast.success('Send OTP!');
        console.log('Login successful:', formData);
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

                                        <h1 className={styles.title}>Forgot  
                                            <span style={{display:'inline'}}> Password</span>  ?</h1>
                                        <p className={styles.subtitle}>Enter your email address to receive a one time code <br/>
                                        to reset your password.</p>
                                        <form onSubmit={handleSubmit} className={styles.form}>

                                        
                                                
                                                <div className={styles.formGroup}>
                                                <label htmlFor="email" className={styles.label}>Email address</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="Enter your email address"
                                                />
                                                {errors.email && <p className={styles.error}>{errors.email}</p>}
                                                </div>

                                              

                                                <button type="submit" className={styles.button}>Send OTP</button>
                                            </form>

                                            <ToastContainer position="top-right" autoClose={3000} />
                                       


                                      

                                             
                                          </div>


                        </div>
                        <div className='col-md-5 d-none d-md-block'>
                            <Slider />
                        </div>
                 </div>
          </div>
     </>
    );
  }
  