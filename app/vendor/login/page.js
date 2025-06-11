'use client'
import React, { useState } from 'react'
import styles from './login.module.css'
import Link from 'next/link'

const page = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
            newErrors.email = 'Enter a valid email';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        } else if (!/(?=.*[A-Z])/.test(password)) {
            newErrors.password = 'Password must contain at least one uppercase letter';
        } else if (!/(?=.*[0-9])/.test(password)) {
            newErrors.password = 'Password must contain at least one number';
        } else if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password)) {
            newErrors.password = 'Password must contain at least one special character';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            // Submit form or call API here
            alert('Form submitted!');
        }
    };

    return (
        <div className='vendorContainer'>
            <div className="container-fluid">
                <div className='row'>
                    <div className='col-lg-5'>
                        <div className={styles.videoContainer}>
                            <video src="/vendor/login.mp4" autoPlay muted loop />
                            <div className={styles.videoText}>
                                <div>
                                    Buzz in, Busy Bee
                                </div>
                                <div>
                                    Let's build your  <span>hive!</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className={styles.loginHeader}>
                            <div className={styles.logo}>
                                <img src="/vendor/hobLogo.svg" alt="logo" />
                            </div>

                        </div>

                        <div className={styles.formContainer}>
                            <div className={styles.loginFormSection}>



                                <h1 className={styles.heading}>Host With Hobbeeme</h1>
                                <p className={styles.subHeading}>Whether you're teaching a craft or curating an experience, we help you share your hobby with a growing community of learners and adventurers.</p>

                                <div className={styles.loginForm}>

                                    <div className={styles.mainForm}>
                                        <form className={styles.loginFormGap} onSubmit={handleSubmit} noValidate>
                                            <div className={styles.fields}>


                                                <label>Email</label>
                                                <input type="text" placeholder='m@example' value={email} onChange={e => setEmail(e.target.value)} className={errors.email ? styles.inputError : ''} />
                                                {errors.email && <div className={styles.error}>{errors.email}</div>}
                                            </div>
                                            <div>
                                                <div className={styles.fields} >


                                                    <div className={styles.ForgotPasswordFields}>
                                                        <label>Password</label>
                                                        <Link href="/vendor/forgot-password" className={styles.forgotPassword}>Forgot Password?</Link>

                                                    </div>

                                                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} className={errors.password ? styles.inputError : ''}/>
                                                    {errors.password && <div className={styles.error}>{errors.password}</div>}
                                                </div>
                                            </div>
                                            <button className={styles.loginButton}>Log In</button>
                                            <p className={styles.signUpLink}>Don't have an account?  <Link href="/vendor/sign-up">Register!</Link></p>
                                        </form>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>





        </div>
    )
}

export default page
