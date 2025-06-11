'use client'
import { useState } from 'react'
import styles from '@/app/personal-information/component/account.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export const SupportPage = () => {

    const [formData, setFormData] = useState({
        subject: '',
        message: '',
      });
      
      const [errors, setErrors] = useState({});
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      
        // Clear specific field error on change
        setErrors((prev) => ({ ...prev, [name]: '' }));
      };
      
      const validateSupport = () => {
        const newErrors = {};
        if (formData.subject.trim() === ''){
           newErrors.subject = ' Subject cannot blank';
        }
      
        if (formData.message.trim() == '') {
          newErrors.message = ' Message cannot blank';
       }
        setErrors(newErrors);
      
        // Auto-clear errors after 3 seconds
        if (Object.keys(newErrors).length > 0) {
          Object.values(newErrors).forEach((msg, i) => {
            setTimeout(() => toast.error(msg), i * 300); // Slight delay between toasts
          });
          setTimeout(() => setErrors({}), 3000); // Clear validation state after 3s
        }
      
        return Object.keys(newErrors).length === 0;
      };
      
      const handleMessageSubmit = (e) => {
          e.preventDefault();
          if (validateSupport()) {
            toast.success('Support ticket rasied  successfully!');
          }
      };


  


  return (
     <div className={styles.accountPage}>
            <h1 className={styles.sizeTfour}>Support</h1>
            <p className={styles.suprtTxt}>Fill out the form below and we'll get back to you as soon as possible</p>

            <form className={styles.form} onSubmit={handleMessageSubmit} noValidate>
     
      
        <div className={styles.inputGroup}>
          <label>Subject</label>
          <input type="text" name="subject" placeholder="Enter your subject" value={formData.subject} onChange={handleChange} />
          {errors.subject && <span className={styles.error}>{errors.subject}</span>}

        </div>
         <br></br>
        <div className={styles.inputGroup}>
          <label>Message</label>
          <textarea type="text" name="message" placeholder="Enter your Message" value={formData.message} onChange={handleChange} />
          {errors.message && <span className={styles.error}>{errors.message}</span>}

        </div>
        <button type='submit' className={styles.updateBtn}> Submit Request</button>

     
         <ToastContainer position="top-right" autoClose={3000} />

      </form>

    
     </div>
  )
}
