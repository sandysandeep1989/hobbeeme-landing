// components/EventForm.js
"use client";

import { useState, useEffect } from "react";
import styles from "./EventForm.module.css";
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const corporateEvents = [
  "Corporate Events",
  "Team Building & Employee Engagement",
  "Corporate Social Responsibility"
];

const EventForm = ({popClose, eventSelect, eventVal}) => {
    
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: eventVal || "",
    guests: "",
    date: "",
    message: "",
    companyName: "",
  });

  const [errors, setErrors] = useState({});
  const [isCorporateEvent, setIsCorporateEvent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Set initial event type and corporate status
  useEffect(() => {
    if (eventVal) {
      setFormData(prev => ({
        ...prev,
        eventType: eventVal
      }));
      setIsCorporateEvent(corporateEvents.includes(eventVal));
    }
  }, [eventVal]);

  // Update corporate status when event type changes
  useEffect(() => {
    setIsCorporateEvent(corporateEvents.includes(formData.eventType));
  }, [formData.eventType]);

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
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    if (!formData.guests) newErrors.guests = "Guest count is required";
    if (!formData.date) newErrors.date = "Event Date is required";
    
    // Add company name validation for corporate events
    if (isCorporateEvent && !formData.companyName) {
      newErrors.companyName = "Company Name is required for corporate events";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((msg, i) => {
        setTimeout(() => toast.error(msg), i * 100);
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/send-event-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit event request');
      }

      setSubmitted(true);
      console.log("Form Data:", formData);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error.message || 'Failed to submit event request');
    } finally {
      setLoading(false);
    }
  };

  const popHide = () => {
    if (submitted) {
      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        eventType: eventVal || "",
        guests: "",
        date: "",
        message: "",
        companyName: "",
      });
      setSubmitted(false);
    }
    popClose(false);
  }

  return (
    <div className={styles.eventPup}>
       
          <div className={styles.eventHeading}>
                   <svg width="52" height="52" viewBox="0 0 52 52" onClick={popHide} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="26" cy="26" r="25.5" fill="#242424" stroke="white"/>
                  <path d="M30.0377 21.0956L21.0938 30.0396M30.0377 30.0395L21.0938 21.0956" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                   <h2>Tell Us About Your Event</h2>  
               </div>
       
    {submitted ? (
      <div className={styles.successContainer}>
        <div>

        </div>
        <div className={styles.closemodal}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={popHide} style={{cursor:'pointer'}}>
            <path d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.successGif}>
          <Image
            src="/thankyou.gif"
            alt="Success"
            width={100}
            height={100}
            className={styles.successImage}
          />
        </div>
        <h3 className={styles.successTitle}>Thank You!</h3>
        <p className={styles.successMessage}>Your form has been submitted successfully</p>
        <p className={styles.greetings}>We appreiciate you taking the time to fill out our form. We've received your submission and will process it promptly</p>
        <button 
          className={styles.closeButton} 
          onClick={popHide}
        >
          Close
        </button>
      </div>
    ) : (
      <form className={styles.eventFormContainer} onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <label>Full Name</label>
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Your Name" className={styles.input} />
               {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
          </div>
          
          <div className="col-md-6">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className={styles.input} />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
          </div>

          <div className="col-md-6">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (456 345 2345)" className={styles.input} />
            {errors.phone && <p className={styles.error}>{errors.phone}</p>}
          </div>

          <div className="col-md-6">
            <label>Event Type</label>
            <select 
              name="eventType" 
              value={formData.eventType} 
              onChange={handleChange} 
              className={styles.input}
            >
              <option value="">Select Event Type</option>
              {eventSelect.map((item, index) => (
                <option value={item} key={index}>{item}</option>
              ))}
            </select>
          </div>

          {isCorporateEvent && (
            <div className="col-md-6">
              <label>Company Name</label>
              <input 
                type="text" 
                name="companyName" 
                value={formData.companyName} 
                onChange={handleChange} 
                placeholder="Enter Company Name" 
                className={styles.input} 
              />
              {errors.companyName && <p className={styles.error}>{errors.companyName}</p>}
            </div>
          )}

          <div className="col-md-6">
            <label>Number Of Guests</label>
            <input type="number" name="guests" value={formData.guests} onChange={handleChange} placeholder="Estimated Guest Count" className={styles.input} />
            {errors.guests && <p className={styles.error}>{errors.guests}</p>}
          </div>

          <div className="col-md-6">
            <label>Event Date</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className={styles.input} />
            {errors.date && <p className={styles.error}>{errors.date}</p>}
          </div>
          
          <div className="col-12">
            <label>Additional Information</label>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your event..." className={styles.textarea}></textarea>
          </div>
          <div className="col-12 text-center">
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={loading}
            >
              {loading ? (
                <div className={styles.loaderContainer}>
                  <div className={styles.loader}></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                'Submit Request'
              )}
            </button>
          </div>
        </div>
      </form>
    )}
    <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default EventForm;
