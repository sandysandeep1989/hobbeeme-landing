// components/EventForm.js
"use client";

import { useState } from "react";
import styles from "./EventForm.module.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddParticipants = ({popClose, eventSelect, eventVal}) => {
    
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    dateOfBirth: "",
    relation: "",
    mobileNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
  
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    if (!formData.gender.trim()) newErrors.gender = 'Gender is required';
    if (!formData.dateOfBirth.trim()) newErrors.dateOfBirth = 'Date of Birth is required';
    if (!formData.relation.trim()) newErrors.relation = 'Relation is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile Number is required';
  
    setErrors(newErrors);
  
    if (Object.keys(newErrors).length > 0) {
      Object.values(newErrors).forEach((msg, i) => {
        setTimeout(() => toast.error(msg), i * 300);
      });
      return false;
    }
  
    return true;
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      toast.success('Member added successfully!');
      // Submit logic here
    }
  };


  const popHide = () =>{
       popClose(false);
  }

  return (
    <div className={styles.eventPup}>
       
    <form className={styles.eventFormContainer} onSubmit={handleSubmit}>
         <div className={styles.eventHeading}>
               
            <h2>Add a Member</h2> 
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={popHide}>
                  <path d="M9.24261 0.757865L0.757324 9.24315M9.24261 9.24309L0.757324 0.757812" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>

                 
             </div>
    
            <div className="row">
                 <div className="col-md-12">
                    <label>Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Your Name" className={styles.input} />
                    {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
                  </div>

                  <div className="col-md-12">
                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className={styles.input}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className={styles.error}>{errors.gender}</p>}
                  </div>

                  <div className="col-md-12">
                    <label>Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className={styles.input} />
                    {errors.dateOfBirth && <p className={styles.error}>{errors.dateOfBirth}</p>}
                  </div>

                  <div className="col-md-12">
                    <label>Relation</label>
                    <input type="text" name="relation" value={formData.relation} onChange={handleChange} placeholder="Enter Relation" className={styles.input} />
                    {errors.relation && <p className={styles.error}>{errors.relation}</p>}
                  </div>

                  <div className="col-md-12">
                    <label>Mobile Number</label>
                    <input type="number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Mobile Number" className={styles.input} />
                    {errors.mobileNumber && <p className={styles.error}>{errors.mobileNumber}</p>}
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

export default AddParticipants;
