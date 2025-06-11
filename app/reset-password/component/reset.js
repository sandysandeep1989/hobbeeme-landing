'use client'
import styles from '@/app/login/component/login.module.css'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff } from '@/app/components/icons';
import Slider from '@/app/login/component/slider';


export default function ResetPasswordPage() {

    const [formData, setFormData] = useState({ confirm_password: '', password: '' });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

   const [confirmShowPassword, setConfirmShowPassword] = useState(false);

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' });
    };
  
    const validateForm = () => {
      const newErrors = {};
    
      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

      if (!formData.confirm_password) newErrors.confirm_password = 'Confirm Password is required';
      else if (formData.confirm_password.length < 6) newErrors.confirm_password = 'Confirm Password must be at least 6 characters';

      if (
        formData.password &&
        formData.confirm_password &&
        formData.password !== formData.confirm_password
      ) {
         newErrors.confirm_password = 'Password and Confirm Password must be the same';
        //  newErrors.password = 'Password and Confirm Password must be the same';
      }
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

                                        <h1 className={styles.title}>Reset  
                                            <span style={{display:'inline'}}> Password</span></h1>
                                        <p className={styles.subtitle}>Enter your new password here.</p>
                                        <form onSubmit={handleSubmit} className={styles.form}>

                                         <div className={styles.formGroup}>
                                                <label htmlFor="password" className={styles.label}>Enter New Password</label>
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    id="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="Enter your password"
                                                    />
                                                    <button
                                                    type="button"
                                                    onClick={() => setShowPassword((prev) => !prev)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        right: '10px',
                                                        transform: 'translateY(-50%)',
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        color: '#0070f3',
                                                        fontSize: '0.9rem'
                                                    }}
                                                    >
                                                    {showPassword ? <EyeOff/> : <Eye/>}
                                                    </button>
                                                </div>
                                                 {errors.password && <p className={styles.error}>{errors.password}</p>}
                                                </div>



                                                <div className={styles.formGroup}>
                                                <label htmlFor="confirm_password" className={styles.label}>Confirm Password</label>
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                    type={confirmShowPassword ? 'text' : 'password'}
                                                    id="confirm_password"
                                                    name="confirm_password"
                                                    value={formData.confirm_password}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="Re-Enter New Password"
                                                    />
                                                    <button
                                                    type="button"
                                                    onClick={() => setConfirmShowPassword((prev) => !prev)}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '50%',
                                                        right: '10px',
                                                        transform: 'translateY(-50%)',
                                                        background: 'none',
                                                        border: 'none',
                                                        cursor: 'pointer',
                                                        color: '#0070f3',
                                                        fontSize: '0.9rem'
                                                    }}
                                                    >
                                                    {showPassword ? <EyeOff/> : <Eye/>}
                                                    </button>
                                                </div>
                                                 {errors.password && <p className={styles.error}>{errors.password}</p>}
                                                </div>


                                              

                                                <button type="submit" className={styles.button}>Conform Password</button>
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
  