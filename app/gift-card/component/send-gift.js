// components/EventForm.js
"use client";

import { useState } from "react";
import styles from './sendGift.module.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendGiftPop = ({popClose, eventSelect, eventVal}) => {
    
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    guests: "",
    date: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.date) newErrors.date = "Delivery Date is required";


    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((msg, i) => {
        setTimeout(() => toast.error(msg), i * 100);
      });
      return;
    }

    toast.success("Event request submitted!");
    console.log("Form Data:", formData);
  };

  const popHide = () =>{
    popClose(false);
  }

  return (
    <div className={styles.eventPup}>
        <div className={styles.eventHeading}>
                 <svg width="52" height="52" viewBox="0 0 52 52" onClick={popHide} fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" r="25.5" fill="#242424" stroke="white"/>
                <path d="M30.0377 21.0956L21.0938 30.0396M30.0377 30.0395L21.0938 21.0956" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                 <h2>Sending as a gift ?</h2>  
             </div>
    <form className={styles.eventFormContainer} onSubmit={handleSubmit}>
    
      <div className="row">
        <div className="col-md-12">
          <label>Recipient Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Name" className={styles.input} />
             {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
        </div>
        
        <div className="col-md-12">
          <label>Recipient Email </label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className={styles.input} />
              {errors.email && <p className={styles.error}>{errors.email}</p>}

        </div>
      
       


        <div className="col-md-12">
          <label>Delivery Date</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} className={styles.input} />
          {errors.date && <p className={styles.error}>{errors.date}</p>}
        </div>
        
        
        <ToastContainer position="top-right" autoClose={3000}></ToastContainer>
        <div className="col-12 text-center">
          <button type="submit" className={styles.submitButton}>Submit Request</button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default SendGiftPop;
