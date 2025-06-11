'use client'

import React from 'react'
import styles from '../login/login.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { useContext } from 'react'
import { MultiStepContext } from '../../utils/MultiStepContext'
import { CustomDropdownVendor } from '../components/CustomDropdownVendor'

const page = () => {

const {stepNo} = useContext(MultiStepContext)

const [selectedIdentity, setSelectedIdentity] = useState(null);
const [selectedBusiness, setSelectedBusiness] = useState(null);
const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [mobile, setMobile] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [errors, setErrors] = useState({});

const  [classProvider, setClassProvider] = useState(false);
const  [experienceProvider, setExperienceProvider] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);
  if (Object.keys(validationErrors).length === 0) {
    // Submit form or go to next step
    alert('Form submitted!');
  }
};

const validate = () => {
  const newErrors = {};
  if (!fullName.trim()) {
    newErrors.fullName = 'Full Name is required';
  }
  if (!email) {
    newErrors.email = 'Email is required';
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
    newErrors.email = 'Enter a valid email';
  }
  if (!mobile) {
    newErrors.mobile = 'Mobile Number is required';
  } else if (!/^[0-9]{7,15}$/.test(mobile)) {
    newErrors.mobile = 'Enter a valid mobile number';
  }
  if (!password) {
    newErrors.password = 'Password is required';
  } else if (password.length < 8) {
    newErrors.password = 'Password must be at least 8 characters';
  } else if (!/(?=.*[A-Z])/.test(password)) {
    newErrors.password = 'Password must contain at least one uppercase letter';
  } else if (!/(?=.*[0-9])/.test(password)) {
    newErrors.password = 'Password must contain at least one number';
  } else if (!/(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/.test(password)) {
    newErrors.password = 'Password must contain at least one special character';
  }
  if (!confirmPassword) {
    newErrors.confirmPassword = 'Confirm Password is required';
  } else if (password !== confirmPassword) {
    newErrors.confirmPassword = 'Passwords do not match';
  }
  return newErrors;
};

    return (
        <div>
            <div className='vendorContainer'>
                <div className="container-fluid">
                    <div className='row'>


                     

                            {/* first page */}


{stepNo === 1 && (
    <div className={styles.formContainer}>
                            <div className={styles.loginFormSection}>



                                <h1 className={styles.heading}>Join the Swarm</h1>
                                <p className={styles.subHeading}>Whether you're teaching a craft or curating an experience, we help you share your hobby with a growing community of learners and adventurers.</p>

                                <div className={styles.loginForm}>

                                    <div className={styles.mainForm}>
                                        <form className={styles.loginFormGap} onSubmit={handleSubmit} noValidate>
                                            <div className={styles.fields}>
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    value={fullName}
                                                    onChange={e => setFullName(e.target.value)}
                                                    className={errors.fullName ? styles.inputError : ''}
                                                />
                                                {errors.fullName && <div className={styles.error}>{errors.fullName}</div>}
                                            </div>
                                            <div className={styles.signUpHalfFields}>
                                                <div className={styles.fields}>
                                                    <label>Email</label>
                                                    <input
                                                        type="text"
                                                        placeholder="m@example"
                                                        value={email}
                                                        onChange={e => setEmail(e.target.value)}
                                                        className={errors.email ? styles.inputError : ''}
                                                    />
                                                    {errors.email && <div className={styles.error}>{errors.email}</div>}
                                                </div>
                                                <div className={styles.fields}>
                                                    <label>Mobile Number</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Mobile Number"
                                                        value={mobile}
                                                        onChange={e => setMobile(e.target.value)}
                                                        className={errors.mobile ? styles.inputError : ''}
                                                    />
                                                    {errors.mobile && <div className={styles.error}>{errors.mobile}</div>}
                                                </div>
                                            </div>
                                            <div className={styles.signUpHalfFields}>
                                                <div className={styles.fields}>
                                                    <label>Password</label>
                                                    <input
                                                        type="password"
                                                        placeholder="Enter at least 8 character"
                                                        value={password}
                                                        onChange={e => setPassword(e.target.value)}
                                                        className={errors.password ? styles.inputError : ''}
                                                    />
                                                    {errors.password && <div className={styles.error}>{errors.password}</div>}
                                                </div>
                                                <div className={styles.fields}>
                                                    <label>Confirm Password</label>
                                                    <input
                                                        type="password"
                                                        placeholder="Enter confirm password"
                                                        value={confirmPassword}
                                                        onChange={e => setConfirmPassword(e.target.value)}
                                                        className={errors.confirmPassword ? styles.inputError : ''}
                                                    />
                                                    {errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}
                                                </div>
                                            </div>
                                            <button className={styles.loginButton}>Next</button>
                                            <p className={styles.signUpLink}>Already have an account?  <Link href="/vendor/sign-up">Log In!</Link></p>
                                        </form>

                                    </div>
                                </div>
                            </div>

                            </div>
)}











                                {/* second page */}

                                {stepNo === 2 && (
                                    <div className={styles.formContainer}>
<div className={styles.loginFormSection}>



<h1 className={styles.heading}>What kind of creator are you?</h1>
<p className={styles.subHeading}>Select all that apply.</p>

<div className={styles.loginForm}>



<div className={styles.providerParent}>
    
  

    <div className={`${styles.Provider} ${classProvider === 'class Provider' ? styles.activeProvider : ''}`} onClick={() => setClassProvider('class Provider')}>
        <div>
            <img src="/vendor/provider.svg" alt="classProvider" />
            </div>
            <div className={styles.providerText}>
            Class Provider

                </div>
        </div>


        <div className={`${styles.Provider} ${classProvider === 'experience Provider' ? styles.activeProvider : ''}`} onClick={() => setClassProvider('experience Provider')}>
        <div>
            <img src="/vendor/provider2.svg" alt="classProvider" />
            </div>
            <div className={styles.providerText}>
        Experience Provider

                </div>
        </div>


        </div>

    
</div>
</div>
</div>

)}



{/* third page */}

{stepNo === 3 && (


<div className={styles.ExcitedContainer}>
<div className={styles.loginFormSection}>



<h1 className={styles.heading}>List the classes you're excited to teach.</h1>
<p className={styles.subHeading}>Select all that apply.</p>

<div className={styles.loginForm}>



<div className={styles.skillParent}>
    
  

    <div className={styles.SkillCard}>
        <div className={styles.skillImage}>
                <img src="/vendor/art.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Art & Craft

                </div>
        </div>
        <div className={styles.SkillCard}>
        <div className={styles.skillImage}>
                <img src="/vendor/music.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Music

                </div>
        </div>

        <div className={styles.SkillCard}>
        <div className={styles.skillImage}>
                <img src="/vendor/dance.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Dance

                </div>
        </div>
        <div className={styles.SkillCard}>
        <div className={styles.skillImage}>
                <img src="/vendor/sport.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Sports & Fitness
                </div>
        </div>



        <div className={styles.SkillCard}>
        <div className={styles.skillImage}>
                <img src="/vendor/lifeStyle.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Wellness & Lifestyle
                </div>
        </div>

        <div className={styles.SkillCard}>
        <div className={styles.skillImage}>
                <img src="/vendor/food.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Food & Culinary
                </div>
        </div>


        <div className={styles.SkillCard}>
        <div className={styles.skillImage}>
                <img src="/vendor/digitalSkill.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Digital Skills
                </div>
        </div>


        <div className={styles.SkillCard}>
        <div className={styles.skillImage}>
                <img src="/vendor/otherSkill.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Other Skills
                </div>
        </div>


        


        </div>

    
</div>
</div>

</div>

)}

{/* fourth page */}


                                

{stepNo === 4 && (


<div className={styles.hostContainer}>
<div className={styles.loginFormSection}>



<h1 className={styles.heading}>List the experiences you're excited to host.</h1>
<p className={styles.subHeading}>Select all that apply.</p>

<div className={styles.loginForm}>



<div className={styles.skillParent}>
    
  

    <div className={styles.SkillCard2}>
        <div className={styles.skillImage}>
                <img src="/vendor/creative.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Creative & Performing Arts

                </div>
        </div>


        <div className={styles.SkillCard2}>
        <div className={styles.skillImage}>
                <img src="/vendor/culture.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Art, Culture & Expression

                </div>
        </div>


        <div className={styles.SkillCard2}>
        <div className={styles.skillImage}>
                <img src="/vendor/wellness.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Wellness & Lifestyle

                </div>
        </div>



        <div className={styles.SkillCard2}>
        <div className={styles.skillImage}>
                <img src="/vendor/cultinary.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Food & Culinary

                </div>
        </div>


        <div className={styles.SkillCard2}>
        <div className={styles.skillImage}>
                <img src="/vendor/adventure.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Adventure & Outdoors

                </div>
        </div>


        <div className={styles.SkillCard2}>
        <div className={styles.skillImage}>
                <img src="/vendor/community.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Community & Networking

                </div>
        </div>

        <div className={styles.SkillCard2}>
        <div className={styles.skillImage}>
                <img src="/vendor/camps.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Camps 
                </div>
        </div>

        <div className={styles.SkillCard2}>
        <div className={styles.skillImage}>
                <img src="/vendor/others.png" alt="classProvider" />
                </div>
            <div className={styles.skillText}>
            Others
                </div>
        </div>

       


        


        </div>

    
</div>
</div>

</div>

)}
     

     {stepNo === 5 && (


<div className={styles.subcategoriesContainer}>
<div className={styles.loginFormSection}>



<h1 className={styles.heading}>What subcategories do you have for dance?</h1>
<p className={styles.subHeading}>Select all that apply.</p>

<div className={styles.categoriesDiv}>


    <div className={styles.subcategoriesOptions}>
    Ballet
        </div>
        <div className={styles.subcategoriesOptions}>
        Bollywood
        </div>
        <div className={styles.subcategoriesOptions}>
        Belly Dance
        </div>
        <div className={styles.subcategoriesOptions}>
        Salsa
        </div>
        <div className={styles.subcategoriesOptions}>
        Hip Hop
        </div>
        <div className={styles.subcategoriesOptions}>
        Classical
        </div>
        <div className={styles.subcategoriesOptions}>
        Other
        </div>


<div className={styles.questionCategories}>

<h5>what other ub categories do you offer ?</h5>
<input type="text" placeholder='Example' />
       
</div>


    
</div>
</div>

</div>

)}




{stepNo === 6 && (


<div className={styles.subcategoriesContainer}>
<div className={styles.loginFormSection}>



<h1 className={styles.heading}>Where does the magic happen?</h1>
<p className={styles.subHeading}>Select all that apply.</p>

<div className={styles.categoriesDiv}>


    <div className={styles.subcategoriesOptions}>
    In Studio
        </div>
        <div className={styles.subcategoriesOptions}>
        Online
        </div>
        <div className={styles.subcategoriesOptions}>
        At Customer's Place
        </div>


      


    
</div>
</div>

</div>

)}




{/* 
{stepNo === 7 && (


<div className={styles.subcategoriesContainer}>
<div className={styles.loginFormSection}>



<h1 className={styles.heading}>Where does the magic happen?</h1>
<p className={styles.subHeading}>Select all that apply.</p>

<div className={styles.categoriesDiv}>


    <div className={styles.subcategoriesOptions}>
    In Studio
        </div>
        <div className={styles.subcategoriesOptions}>
        Online
        </div>
        <div className={styles.subcategoriesOptions}>
        At Customer's Place
        </div>


      


    
</div>
</div>

</div>

)} */}



{stepNo === 7 && (


<div className={styles.subcategoriesContainer}>
<div className={styles.loginFormSection}>



<h1 className={styles.heading}>One last thing – Just to verify you're you</h1>
<p className={styles.subHeading}>Please Upload Document For Verification</p>

<div className={styles.categoriesDiv}>

<CustomDropdownVendor label="Identity document" options={["Passport", "National ID"]}   value={selectedIdentity}
  onChange={setSelectedIdentity} />

{selectedIdentity && (
  <div className={styles.verifyFormLabel}>
    <div className={styles.uploadBox}>
      <input
        type="file"
        className={styles.uploadInput}
        id="file-upload"
        multiple
        style={{ display: 'none' }}
      />
      <label htmlFor="file-upload" className={styles.uploadLabel}>
        <img src="/uploadImg.svg" alt="upload" className={styles.uploadIcon} />
        <div className={styles.uploadText}>
          Drag your file(s) or <span className={styles.browse}>browse</span>
        </div>
      </label>
    </div>
  </div>
)}

<CustomDropdownVendor label="Business Document" options={["Trade License", "VAT Certificate"]} value={selectedBusiness} onChange={setSelectedBusiness} />


{selectedBusiness && (
  <div className={styles.verifyFormLabel}>
    <div className={styles.uploadBox}>
      <input
        type="file"
        className={styles.uploadInput}
        id="file-upload"
        multiple
        style={{ display: 'none' }}
      />
      <label htmlFor="file-upload" className={styles.uploadLabel}>
        <img src="/uploadImg.svg" alt="upload" className={styles.uploadIcon} />
        <div className={styles.uploadText}>
          Drag your file(s) or <span className={styles.browse}>browse</span>
        </div>
      </label>
    </div>
  </div>
)}
    <div className={styles.verifyFormLabel}>
        <label className={styles.verifyLabel}>Portfolio or website link</label>
        <input type="text" className={styles.verifyInput} placeholder='Example.com' />
    </div>

      


    
</div>
</div>

</div>

)}




{stepNo === 8 && (


<div className={styles.subReadyContainer}>



<img src="/vendor/ready.png" alt="success" />
<div className={styles.readyContainerParent}>
   
<h1 className={styles.heading}>Your Request is In!</h1>

<div className={styles.readyContainer}>
   
<h5>You're Almost Ready to Go Live!</h5>
<p className={styles.readyPara}>Our team typically reviews new host submissions within 24–48 hours. You'll receive a notification once your account is approved or if we need any further information.</p>
</div>



    <button className={styles.backToHome}>
        Back to Main Menu
        </button>

      
        </div>

    
</div>



)}








                    </div>
                </div>





            </div>

        </div>
    )
}

export default page
