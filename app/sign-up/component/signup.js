'use client'
import styles from '@/app/login/component/login.module.css'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Eye, EyeOff } from '@/app/components/icons';
import Slider from '@/app/login/component/slider';
import { useRouter } from 'next/navigation';


export default function SignupPage() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: '' });
    };
  
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      

      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';

      if (!formData.phone)  newErrors.phone = 'Phone is required';
      else if (!/^\d{10}$/.test(formData.phone))   newErrors.phone = 'Phone number must be exactly 10 digits';
      

      if (!formData.password) newErrors.password = 'Password is required';
      else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
  
      return newErrors;
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // router.push('/personalize-experience');
        
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
        toast.success('Sign Up successful!');
        router.push('/personalize-experience');

        console.log('Sign Up successful:', formData);
      };

    return (
     <>
          <div className='container-fluid'>
                 <div className='row'>
                        <div className={`${styles.startBox} col-md-7 center-box `}>
                         <Link href='/'> <Image src='/logo.webp'  className={styles.logo} width={330} height={96} alt='' /></Link>
                               <div className={styles.container}>
                                           <img src='/bee.gif'  className={styles.bee} width={330} height={96} alt='' />
                                        <h1 className={styles.title}>Sign  
                                            <span style={{display:'inline'}}> Up</span> </h1>
                                        <p className={styles.subtitle}>Please enter the information to create an account.</p>
                                        <form onSubmit={handleSubmit} className={styles.form}>

                                        <div className={styles.formGroup}>
                                                <label htmlFor="name" className={styles.label}>Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="Enter your name"
                                                />
                                                {errors.name && <p className={styles.error}>{errors.name}</p>}
                                                </div>
                                                
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

                                                <div className={styles.formGroup}>
                                                <label htmlFor="phone" className={styles.label}>Mobile Number</label>
                                                <input
                                                    type="number"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className={styles.input}
                                                    placeholder="Enter your Mobile Number"
                                                />
                                                {errors.phone && <p className={styles.error}>{errors.phone}</p>}
                                                </div>

                                                <div className={styles.formGroup}>
                                                <label htmlFor="password" className={styles.label}>Password</label>
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

                                                   <div className={styles.holdRemMobile}> 
                                       
                                        <div className={styles.remember}>
                                            <label className={styles.checkboxContainer}>
                                            <input
                                            type="checkbox"
                                            className={styles.checkboxInput}
                                          />
                                            <span className={styles.checkmark}></span>
                                            </label> Remember me
                                        </div>


                                        <div className={styles.forgot}> <Link href='/forgot-password'> Forgot password</Link></div>
                                        </div>

                                                <button type="submit" className={styles.button}>Sign In</button>
                                            </form>

                                            <ToastContainer position="top-right" autoClose={3000} />
                                       


                                      <div className={styles.terms}> 
                                        <label className={styles.checkboxContainer}>
                                        <input
                                          type="checkbox"
                                          className={styles.checkboxInput}
                                        />
                                        <span className={styles.checkmark}></span>
                                        </label>
                                            I Agree the <Link href='/terms-conditions'>Terms & Conditions</Link>
                                          </div>

                                              <div className={styles.dont}>Already have an account?<Link href='/login'> Sign In</Link></div>
                                             
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
  