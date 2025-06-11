'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './account.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CustomDropdown from '@/app/edit-profile/component/CustomDropDwon';
import { IoCalendarClear } from 'react-icons/io5';
import CustomDatePicker from '@/app/components/custom-daypicker/CustomDayPicker';

export const PersonalPage = () => {
  const { push } = useRouter();

  const router = useRouter();

  // const [formData, setFormData] = useState({
  //     name: '',
  //     email: '',
  //     mobile: '',
  //     gender: '',
  //     dob: '',
  //     address: '',
  //     nationality: '',
  //     emirate: '',
  //     country: '',

  //   });

  const [isEditing, setIsEditing] = useState(false);
  const dropdownOptions = {
    gender: ['Male', 'Female', 'Other', 'Prefer not to say'],
    nationality: ['Emirati', 'Indian', 'Pakistani', 'British', 'American', 'Other'],
    country: ['United Arab Emirates', 'India', 'Pakistan', 'UK', 'USA', 'Other'],
    emirate: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman'],

  };


  const [formData, setFormData] = useState({
    name: 'John Watson',
    email: 'john.watson@example.com',
    mobile: '(205) 555-0100',
    gender: 'Male',
    dob: '1985-05-15',
    address: '123 Main St, Dubai',
    nationality: 'American',
    emirate: 'Dubai',
    country: 'United Arab Emirates',
  });

  const handelStartQuiz = () => {
    router.push('/personalize-experience')
  }


  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear specific field error on change
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateProfile = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9\-\+\(\)\s]{10,15}$/;

    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.mobile && !mobileRegex.test(formData.mobile)) {
      newErrors.mobile = 'Invalid mobile number';
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

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);


  const handleProfileSubmit = (e) => {
    e.preventDefault();
    if (validateProfile()) {
      toast.success('Profile updated successfully!');
      setIsEditing(false);
    }
  };


  const validatePassword = () => {
    const newErrors = {};
    if (!formData.newPassword || !formData.confirmPassword) {
      newErrors.confirmPassword = 'Both password fields are required';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => toast.error(newErrors.confirmPassword), 300);
      setTimeout(() => setErrors({}), 3000);
    }

    return Object.keys(newErrors).length === 0;
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePassword()) {
      toast.success('Password updated successfully!');
    }
  };

  const [showPicker, setShowPicker] = useState(false);
  const wrapperRef = useRef(null);

  const today = new Date();
  const formatDate = (dateObj) =>
    `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
  const defaultDate = formatDate(today);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);



  return (
    <div className={`${styles.accountPage} ${styles.accountPagePernlinfo}`}>
      {isEditing ? <h1>Edit Personal Information</h1> : <h1> Personal Information</h1>}


      <form className={`${styles.form} ${styles.formRemovePadding} ${isEditing ? styles.bdrbtm : ''}`} onSubmit={handleProfileSubmit} noValidate>
        <div className={styles.header}>
          <div className={styles.profileHolder}>
            <div className={styles.ProfilePic}>
              <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.81592 12V8C1.81592 6.34315 2.33203 4.92893 3.36425 3.75736C4.39648 2.58579 5.64248 2 7.10226 2H14.1507C15.6105 2 16.8565 2.58579 17.8887 3.75736C18.9209 4.92893 19.4371 6.34315 19.4371 8V16C19.4371 17.6569 18.9209 19.0711 17.8887 20.2426C16.8565 21.4142 15.6105 22 14.1507 22H7.10226C5.64248 22 4.39648 21.4142 3.36425 20.2426C2.33203 19.0711 1.81592 17.6569 1.81592 16V12Z" fill="#644EE5" stroke="white" strokeWidth="3" />
                <path fillRule="evenodd" clipRule="evenodd" d="M7.10145 4C5.15817 4 3.57722 5.7944 3.57722 8V16C3.57722 18.2056 5.15817 20 7.10145 20H14.1499C16.0932 20 17.6741 18.2056 17.6741 16V8C17.6741 5.7944 16.0932 4 14.1499 4H7.10145ZM7.1008 2H14.1493C17.0688 2 19.4356 4.68628 19.4356 8V16C19.4356 19.3137 17.0688 22 14.1493 22H7.1008C4.18122 22 1.81445 19.3137 1.81445 16V8C1.81445 4.68628 4.18122 2 7.1008 2Z" fill="white" />
                <path d="M10.627 15H13.6005" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.0726 8.85815C12.2041 8.70887 12.3825 8.625 12.5685 8.625C12.7546 8.625 12.9329 8.70887 13.0645 8.85815C13.196 9.00743 13.2699 9.20991 13.2699 9.42103C13.2699 9.63214 13.196 9.83462 13.0645 9.9839L9.09641 14.488C9.0178 14.5772 8.92064 14.6425 8.81392 14.6778L7.86502 14.992C7.83659 15.0014 7.80645 15.002 7.77776 14.9937C7.74908 14.9853 7.72289 14.9684 7.70195 14.9446C7.68101 14.9208 7.66608 14.8911 7.65873 14.8586C7.65138 14.826 7.65188 14.7918 7.66017 14.7595L7.93704 13.6825C7.96817 13.5615 8.02567 13.4514 8.10423 13.3623L12.0726 8.85815Z" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.6182 9.375L12.6094 10.5" stroke="white" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>


              {isEditing ? (
                <label htmlFor="profile-upload" className={styles.imageUploadLabel}>
                  <Image
                    src={previewUrl || "/profile-account.png"}
                    width={80}
                    height={80}
                    alt="Profile"
                    className={styles.profileImage}
                  />
                  <input
                    id="profile-upload"
                    type="file"
                    accept="image/png, image/jpeg, image/webp"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setImageFile(file);
                        setPreviewUrl(URL.createObjectURL(file));
                      }
                    }}
                    className={styles.hiddenFileInput}
                  />
                </label>
              ) : (
                <Image
                  src={previewUrl || "/profile-account.png"}
                  width={80}
                  height={80}
                  alt="Profile"
                  className={styles.profileImage}
                />
              )}


            </div>
            <div className={styles.ProfileName}>
              <h5>John Watson</h5>
              <p>(205) 555-0100</p>
            </div>
          </div>
          {!isEditing && (
            <button className={styles.editBtn} onClick={() => setIsEditing(true)}>Edit Profile</button>
          )}
        </div>

        <div className={styles.grid}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" value={formData.name} className={styles.nameformControl} onChange={handleChange} disabled={!isEditing} />
          </div>
        </div>

        <div className={`${styles.grid} ${styles.gridReduceP}`}>
          {['email', 'mobile', 'gender', 'dob', 'address', 'nationality', 'emirate', 'country'].map((field) => (
            <div key={field} className={styles.inputGroup}>
              <label>{field.replace(/([A-Z])/g, ' $1')}</label>

              {['gender', 'nationality', 'emirate', 'country'].includes(field) ? (
                isEditing ? (
                  <CustomDropdown
                    options={dropdownOptions[field]}
                    selected={formData[field]}
                    onChange={(value) => setFormData({ ...formData, [field]: value })}
                  />
                ) : (
                  <input
                    type="text"
                    name={field}
                    className={`form-control ${styles.formControl}`}
                    value={formData[field]}
                    disabled
                  />
                )
              ) : field === 'dob' ? (
                isEditing ? (
                  <div ref={wrapperRef} className={styles.datePickerWrapper}>
                    <div
                      className={`${styles.dateField} ${showPicker ? styles.active : ''}`}
                      onClick={() => setShowPicker(!showPicker)}
                    >
                      {formData.dob || defaultDate}
                      <span className={styles.arrow}><IoCalendarClear /></span>
                    </div>
                    {showPicker && (
                      <div className={styles.pickerPopup}>
                        <CustomDatePicker
                          onDateSelect={(date) => {
                            setFormData({ ...formData, dob: date });
                            setShowPicker(false);
                          }}
                          value={formData.dob}
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type="text"
                    name="dob"
                    value={formData.dob}
                    className={`form-control ${styles.formControl}`}
                    disabled
                  />
                )
              ) : (
                <input
                  type="text"
                  name={field}
                  placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  className={`form-control ${styles.formControl} ${errors[field] ? 'is-invalid' : ''}`}
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              )}

              {errors[field] && <div className="invalid-feedback">{errors[field]}</div>}
            </div>
          ))}

        </div>

        {isEditing && (
          <div className={styles.formFooter}>
            <button type="submit" className={styles.saveBtn}>Save </button>
          </div>
        )}
        <ToastContainer position="top-right" autoClose={3000} />
      </form>

      {!isEditing && (
        <div className={`${styles.footer}  ${styles.footerPersonalCenter}`}>
          <div>
            <h3>Let’s Personalize Your Experience</h3>
            <p>Tell us a bit about you so we can recommend the most exciting events, classes, and activities.</p>
          </div>
          <button type="button" className={styles.quizBtn} onClick={handelStartQuiz}>Start Quiz</button>
        </div>
      )}


      {/* 
      <ToastContainer position="top-right" autoClose={3000} /> */}
    </div>
  )
}
