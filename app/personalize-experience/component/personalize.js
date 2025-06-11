// 'use client'
// import styles from '@/app/login/component/login.module.css'
// import Image from 'next/image';
// import { useState } from 'react';
// import Link from 'next/link';
// import 'react-toastify/dist/ReactToastify.css';
// import { useRouter } from 'next/navigation';
// import Slider from '@/app/login/component/slider';

// const interests = [
//   "Arts & Crafts",
//   "Music",
//   "Dance",
//   "Sports & Fitness",
//   "Cooking & Baking",
//   "Writing & Literature",
//   "Technology & Coding",
//   "Photography & Filmmaking",
//   "Gardening & Nature",
//   "Mindfulness & Meditation",
//   "Others"
// ];

// const goal = [
//    "Learn a new skill", "Have fun & socialize",  "Build a creative portfolio", "Explore local experiences",  "Improve existing skills", "Relaxation & Stress relief", "Other"
//  ]

// const classes = [ "Weekday mornings", "Weekday evenings",  "Weekends", "Flexible", ]
// const level = [ "Beginner", "Intermediate",  "Advanced", "Just exploring", ]
// const activity = [ "Private", "Small groups",  "Open to both", ]



// export default function PersonalizePage() {
//   const router = useRouter();
//   const [configStep, setConfigStep] = useState([
//     { step: '1', status: 'deactive' }, { step: '2', status: 'deactive' }, { step: '3', status: 'deactive' },
//     { step: '4', status: 'deactive' }, { step: '5', status: 'deactive' }, { step: '6', status: 'deactive' }
//   ]);
  


//   const [selectInterest, setSelectInterest] = useState([]);
//   const [selectGoal, setSelectGoal] = useState([]);
//   const [selectClass, setSelectClass] = useState([]);
//   const [selectLevel, setSelectLevel] = useState([]);
//   const [selectActivity, setSelectActivity] = useState([]);





//   const Start = () => {
//     setConfigStep(prev =>
//       prev.map(item =>
//         item.step === '1' ? { ...item, status: 'active' } : item
//       )
//     )
//   }

//   const StepOne = () => {
//     setConfigStep(prev =>
//       prev.map(item => {
//         if (item.step === '2') {
//           return { ...item, status: 'active' };
//         } else if (item.step === '1') {
//           return { ...item, status: 'deactive' };
//         } else {
//           return item;
//         }
//       })
//     );
//   };

//   const StepTwo = () => {
//       setConfigStep(prev => 
//         prev.map (item => {
//           if(item.step === '3'){
//             return{...item, status: 'active'};
//           }
//           else if (item.step === '2'){
//             return{...item, status: 'deactive'};
//           }
//           else{
//             return item;
//           }
//         })
       
//       )
//   }


//   const StepThree = () => {
//     setConfigStep(prev => 
//       prev.map (item => {
//         if(item.step === '4'){
//           return{...item, status: 'active'};
//         }
//         else if (item.step === '3'){
//           return{...item, status: 'deactive'};
//         }
//         else{
//           return item;
//         }
//       })
     
//     )
// }

// const StepFour = () =>{
//   setConfigStep(prev => 
//     prev.map (item => {
//       if(item.step === '5'){
//         return{...item, status: 'active'};
//       }
//       else if (item.step === '4'){
//         return{...item, status: 'deactive'};
//       }
//       else{
//         return item;
//       }
//     })
   
//   )
// }

// const StepFive = () =>{
//   setConfigStep(prev => 
//     prev.map (item => {
//       if(item.step === '6'){
//         return{...item, status: 'active'};
//       }
//       else if (item.step === '5'){
//         return{...item, status: 'deactive'};
//       }
//       else{
//         return item;
//       }
//     })
   
//   )
//   router.push('/');
// }

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectInterest([...selectInterest, value]);
//     } else {
//       setSelectInterest(selectInterest.filter((item) => item !== value));
//     }
//   };


//   const handleChangeGoal = (e) => {
//     const {value, checked} = e.target
//     if(checked){
//       setSelectGoal([...selectGoal, value]);
//     }
//     else{
//       setSelectGoal(selectGoal.filter((item)=> item != value));
//     }
//   }

//   const handleChangeClass = (e) => {
//     const {value, checked} = e.target
//     if(checked){
//       setSelectClass([...selectClass, value]);
//     }
//     else{
//       setSelectClass(selectClass.filter((item)=> item != value));
//     }
//   }

//   const handleChangeActivity = (e) => {
//     setSelectActivity(e.target.value);
//   }

  


//   const handleChangeLevel = (e) => {
//     setSelectLevel(e.target.value);
//   }

  


  

//   console.log(configStep)

//   return (
//     <>
//       <div className='container-fluid'>
//         <div className='row'>
//           <div className='col-md-7 center-box'>
//             <Link href='/'> <Image src='/logo.webp' className={styles.logo} width={330} height={96} alt='' /></Link>

//             {configStep[0].status === 'deactive' && 
//                !configStep.some(item => item.status === 'active') && (
                
//               <div className={styles.container}>
//                 <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />


//                 <h1 className={`${styles.title} ${styles.titleHide}`}>Help Us
//                   <span>
//                     Personalize Your </span>
//                   <span>Experience!</span></h1>
                  
//                     <h1 className={`${styles.title} ${styles.titleMobile}`}>
//                       Help Us Personalize Your Experience!<span>Hobbeeme!</span></h1>

//                 <p className={`${styles.subtitle} ${styles.subtitleHide}`}>Answer a few questions to help us tailor your Hobbeeme<br />
//                   Journey with personalized class and experience<br /> recommendations.</p>
//                     <p className={`${styles.subtitle} ${styles.PersoSubtitleMobile}`}>
//                    Answer a few questions to help us tailor your Hobbeeme Journey with personalized class and experience recommendations.</p>
//                 <div className={styles.btnGrp}>
//                   <button type="button" className={styles.skip}>Skip</button>
//                   <button type="button" onClick={() => Start()} className={styles.button}>Start</button>
//                 </div>
//               </div>
//               )
//             }


//             {configStep[0].status === 'active' &&
//               <div className={styles.container}>
//                 <span className={configStep[0].status === 'active' ? styles.step1 : ''}>
//                   <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
//                 </span>

//                 <div className={styles.steps}>
//                   <span className={configStep[0].status === 'active' ? styles.active : ''}></span>
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                   <span></span>
//                 <span></span>

//                 </div>

//                 <h1 className={`${styles.title}   ${styles.PersTitleMob} `}>
//                   Which of these activities are you most interested in?</h1>
               

//                 <div className={styles.remberHold}>
//                   {interests.map((interest, index) => (
//                     <div className={styles.remember} key={index}>
//                       <label className={styles.checkboxContainer}>
//                         <input value={interest}
//                           checked={selectInterest.includes(interest)}
//                           onChange={handleCheckboxChange}
//                           type="checkbox"
//                           className={styles.checkboxInput}
//                         />
//                         <span className={styles.checkmark}></span>
//                       </label> {interest}
//                     </div>
//                   ))}
//                 </div>

//                 <button type="button" onClick={() => StepOne()} className={styles.button}>Next</button>
//               </div>
//             }



//         {configStep[1].status === 'active' &&
//               <div className={styles.container}>
//                 <span className={configStep[1].status === 'active' ? styles.step2 : ''}>
//                   <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
//                 </span>

//                 <div className={styles.steps}>
//                 <span className={configStep[1].status === 'active' ? styles.active : ''}></span>
//                   <span className={configStep[1].status === 'active' ? styles.active : ''}></span>
//                   <span></span>
//                   <span></span>
//                 <span></span>

//                 </div>

//                 <h1 className={`${styles.title} `}>
//                 What’s your primary goal for joining these activities?</h1>
                

//                 <div className={styles.remberHold}>
//                   {goal.map((goal, index) => (
//                     <div className={styles.remember} key={index}>
//                       <label className={styles.checkboxContainer}>
//                         <input value={goal}
//                           checked={selectGoal.includes(goal)}
//                           onChange={handleChangeGoal}
//                           type="checkbox"
//                           className={styles.checkboxInput}
//                         />
//                         <span className={styles.checkmark}></span>
//                       </label> {goal}
//                     </div>
//                   ))}
//                 </div>

//                 <button type="button" onClick={() => StepTwo()} className={styles.button}>Next</button>
//               </div>
//             }





//         {configStep[2].status === 'active' &&
//               <div className={styles.container}>
//                 <span className={configStep[2].status === 'active' ? styles.step3 : ''}>
//                   <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
//                 </span>

//                 <div className={styles.steps}>
//                 <span className={configStep[2].status === 'active' ? styles.active : ''}></span>
//                   <span className={configStep[2].status === 'active' ? styles.active : ''}></span>
//                   <span className={configStep[2].status === 'active' ? styles.active : ''}></span>
//                   <span></span>
//                 <span></span>

//                 </div>

//                 <h1 className={`${styles.title}    `}>
//                  When do you usually prefer to attend classes or experiences?</h1>
                 
//                 <div className={styles.remberHold}>
//                   {classes.map((classes, index) => (
//                     <div className={styles.remember} key={index}>
//                       <label className={styles.checkboxContainer}>
//                         <input value={classes}
//                           checked={selectClass.includes(classes)}
//                           onChange={handleChangeClass}
//                           type="checkbox"
//                           className={styles.checkboxInput}
//                         />
//                         <span className={styles.checkmark}></span>
//                       </label> {classes}
//                     </div>
//                   ))}
//                 </div>

//                 <button type="button" onClick={() => StepThree()} className={styles.button}>Next</button>
//               </div>
//             }





//       {configStep[3].status === 'active' &&
//               <div className={styles.container}>
//                 <span className={configStep[3].status === 'active' ? styles.step4 : ''}>
//                   <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
//                 </span>

//                 <div className={styles.steps}>
//                 <span className={configStep[3].status === 'active' ? styles.active : ''}></span>
//                 <span className={configStep[3].status === 'active' ? styles.active : ''}></span>
//                   <span className={configStep[3].status === 'active' ? styles.active : ''}></span>
//                   <span className={configStep[3].status === 'active' ? styles.active : ''}></span>
//                   <span></span>

//                 </div>

//                 <h1 className={`${styles.title}   `}>
//                 What is your skill level in your chosen interests?</h1>
                 
//                 <div className={styles.remberHold}>
//                   {level.map((level, index) => (
//                     <div className={styles.remember} key={index}>
//                       <label className={styles.radioContainer}>
//                         <input value={level}
//                           checked={selectLevel.includes(level)}
//                           onChange={handleChangeLevel}
//                           type="radio"
//                           className={styles.radioInput}
//                         />
//                         <span className={styles.customRadio}></span>
//                       </label> {level}
//                     </div>
//                   ))}
//                 </div>

//                 <button type="button" onClick={() => StepFour()} className={styles.button}>Next</button>
//               </div>
//             }



//        {configStep[4].status === 'active' &&
//               <div className={styles.container}>
//                 <span className={configStep[4].status === 'active' ? styles.step5 : ''}>
//                   <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
//                 </span>

//                 <div className={styles.steps}>
//                 <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
//                 <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
//                 <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
//                   <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
//                   <span className={configStep[4].status === 'active' ? styles.active : ''}></span>

//                 </div>

//                 <h1 className={`${styles.title}   `}>
//                 What is your skill level in your chosen interests?</h1>
                 
//                 <div className={styles.radioGroup}>
//                   {activity.map((activity, index) => (
//                     <div className={styles.remember} key={index}>
//                       <label className={styles.radioContainer}>
//                         <input value={activity}
//                           checked={selectActivity.includes(activity)}
//                           onChange={handleChangeActivity}
//                           type="radio"
                     
//                         />
//                         <span className={styles.customRadio}></span>
//                       </label> {activity}
//                     </div>
//                   ))}

//                 </div>

//                 <button type="button" onClick={() => StepFive()} className={styles.button}>Next</button>
//               </div>
//             }




//     {configStep[5].status === 'active' &&
//               <div className={styles.container}>
//                 <div className={styles.thankYou}>
//                 <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M75 147.5C115.041 147.5 147.5 115.041 147.5 75C147.5 34.9594 115.041 2.5 75 2.5C34.9594 2.5 2.5 34.9594 2.5 75C2.5 115.041 34.9594 147.5 75 147.5Z" fill="#FEEA4F"/>
//                   <path d="M60.6542 105.175L43.6542 88.5703C43.2865 88.2129 42.9942 87.7854 42.7946 87.313C42.595 86.8407 42.4922 86.3331 42.4922 85.8203C42.4922 85.3075 42.595 84.7999 42.7946 84.3276C42.9942 83.8552 43.2865 83.4277 43.6542 83.0703L49.2917 77.5703C50.0477 76.8378 51.0591 76.4282 52.1117 76.4282C53.1644 76.4282 54.1757 76.8378 54.9317 77.5703L65.0517 87.4628L93.4342 44.3128C94.0199 43.4421 94.9211 42.8332 95.9475 42.6149C96.9738 42.3965 98.0449 42.5858 98.9342 43.1428L105.644 47.3578C106.082 47.6273 106.462 47.982 106.761 48.401C107.059 48.82 107.271 49.2947 107.382 49.7969C107.494 50.2991 107.504 50.8187 107.411 51.3247C107.318 51.8307 107.124 52.313 106.842 52.7428L73.2342 103.853C72.5608 104.853 71.6762 105.694 70.6428 106.315C69.6094 106.937 68.4523 107.325 67.2529 107.451C66.0536 107.577 64.8412 107.438 63.7011 107.045C62.561 106.652 61.521 106.014 60.6542 105.175Z" fill="#644EE5"/>
//                   </svg>

//                   <h1>Thank You!</h1>
//                   <p>We've captured your preferences and will customize your recommendations accordingly.</p>
//                     <button type="button" onClick={() => StepFive()} className={styles.button}>Buzz into My Picks</button>
//                   </div>
//                   </div>
//             } 


//           </div>
//           <div className='col-md-5 d-none d-md-block'>
//             <Slider />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




'use client'
import styles from '@/app/login/component/login.module.css'
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Slider from '@/app/login/component/slider';

const interests = [
  "Arts & Crafts",
  "Music",
  "Dance",
  "Sports & Fitness",
  "Cooking & Baking",
  "Writing & Literature",
  "Technology & Coding",
  "Photography & Filmmaking",
  "Gardening & Nature",
  "Mindfulness & Meditation",
  "Others"
];

const goal = [
   "Learn a new skill", "Have fun & socialize",  "Build a creative portfolio", "Explore local experiences",  "Improve existing skills", "Relaxation & Stress relief", "Other"
 ]

const classes = [ "Online", "At Home",  "In Studio", "Outdoor", ]
const level = [ "Less than 2 hours", "2-5 hours",  "6-10 hours", "More than 10 hours", ]
const activity = [ "Private", "Small groups",  "Open to both", ]
const activityTwo = [ "Classes", "Experience",  "Open to both", ]
const activityThree = [ "Group Classes", "1 on 1 sessions",  "Open to both", ]



export default function PersonalizePage() {
  const router = useRouter();
  const [configStep, setConfigStep] = useState([
    { step: '1', status: 'deactive' }, { step: '2', status: 'deactive' }, { step: '3', status: 'deactive' },
    { step: '4', status: 'deactive' }, { step: '5', status: 'deactive' }, { step: '6', status: 'deactive' },{ step: '7', status: 'deactive' }
  ]);
  


  const [selectInterest, setSelectInterest] = useState([]);
  const [selectGoal, setSelectGoal] = useState([]);
  const [selectClass, setSelectClass] = useState([]);
  const [selectLevel, setSelectLevel] = useState([]);
  const [selectActivity, setSelectActivity] = useState([]);
  const [selectActivityTwo, setSelectActivityTwo] = useState([]);
    const [selectActivityThree, setSelectActivityThree] = useState([]);





  const Start = () => {
    setConfigStep(prev =>
      prev.map(item =>
        item.step === '1' ? { ...item, status: 'active' } : item
      )
    )
  }

  const StepOne = () => {
    setConfigStep(prev =>
      prev.map(item => {
        if (item.step === '2') {
          return { ...item, status: 'active' };
        } else if (item.step === '1') {
          return { ...item, status: 'deactive' };
        } else {
          return item;
        }
      })
    );
  };

  const StepTwo = () => {
      setConfigStep(prev => 
        prev.map (item => {
          if(item.step === '3'){
            return{...item, status: 'active'};
          }
          else if (item.step === '2'){
            return{...item, status: 'deactive'};
          }
          else{
            return item;
          }
        })
       
      )
  }


  const StepThree = () => {
    setConfigStep(prev => 
      prev.map (item => {
        if(item.step === '4'){
          return{...item, status: 'active'};
        }
        else if (item.step === '3'){
          return{...item, status: 'deactive'};
        }
        else{
          return item;
        }
      })
     
    )
}

const StepFour = () =>{
  setConfigStep(prev => 
    prev.map (item => {
      if(item.step === '5'){
        return{...item, status: 'active'};
      }
      else if (item.step === '4'){
        return{...item, status: 'deactive'};
      }
      else{
        return item;
      }
    })
   
  )
}

const StepFive = () =>{
  setConfigStep(prev => 
    prev.map (item => {
      if(item.step === '6'){
        return{...item, status: 'active'};
      }
      else if (item.step === '5'){
        return{...item, status: 'deactive'};
      }
      else{
        return item;
      }
    })
   
  )

}

const StepSix = () =>{
  setConfigStep(prev => 
    prev.map (item => {
      if(item.step === '7'){
        return{...item, status: 'active'};
      }
      else if (item.step === '6'){
        return{...item, status: 'deactive'};
      }
      else{
        return item;
      }
    })
   
  )
  router.push('/');
}





  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectInterest([...selectInterest, value]);
    } else {
      setSelectInterest(selectInterest.filter((item) => item !== value));
    }
  };


  const handleChangeGoal = (e) => {
    const {value, checked} = e.target
    if(checked){
      setSelectGoal([...selectGoal, value]);
    }
    else{
      setSelectGoal(selectGoal.filter((item)=> item != value));
    }
  }

  const handleChangeClass = (e) => {
    const {value, checked} = e.target
    if(checked){
      setSelectClass([...selectClass, value]);
    }
    else{
      setSelectClass(selectClass.filter((item)=> item != value));
    }
  }

  const handleChangeActivity = (e) => {
    setSelectActivity(e.target.value);
  }
    const handleChangeActivityTwo = (e) => {
    setSelectActivityTwo(e.target.value);
  }
  

    const handleChangeActivityThree = (e) => {
    setSelectActivityThree(e.target.value);
  }

  


  const handleChangeLevel = (e) => {
    setSelectLevel(e.target.value);
  }

  


  

  console.log(configStep)

  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-7 center-box'>
            <Link href='/'> <Image src='/logo.webp' className={styles.logo} width={330} height={96} alt='' /></Link>

            {configStep[0].status === 'deactive' && 
               !configStep.some(item => item.status === 'active') && (
                
              <div className={styles.container}>
                <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />


                <h1 className={`${styles.title} ${styles.titleHide}`}>Help Us
                  <span>
                    Personalize Your </span>
                  <span>Experience!</span></h1>
                  
                    <h1 className={`${styles.title} ${styles.titleMobile}`}>
                      Help Us Personalize Your Experience!<span>Hobbeeme!</span></h1>

                <p className={`${styles.subtitle} ${styles.subtitleHide}`}>Answer a few questions to help us tailor your Hobbeeme<br />
                  Journey with personalized class and experience<br /> recommendations.</p>
                    <p className={`${styles.subtitle} ${styles.PersoSubtitleMobile}`}>
                   Answer a few questions to help us tailor your Hobbeeme Journey with personalized class and experience recommendations.</p>
                <div className={styles.btnGrp}>
                  <button type="button" className={styles.skip}>Skip</button>
                  <button type="button" onClick={() => Start()} className={styles.button}>Start</button>
                </div>
              </div>
              )
            }

            {/* ---= */}

              {configStep[0].status === 'active' &&
              <div className={styles.container}>
                <span className={configStep[0].status === 'active' ? styles.step1 : ''}>
                  <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
                </span>

                <div className={styles.steps}>
                 <span className={configStep[0].status === 'active' ? styles.active : ''}></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>

                </div>

                <h1 className={`${styles.title}   `}>
                What are you looking for?</h1>
                 
                <div className={styles.radioGroup}>
                  {activityTwo.map((activityt, index) => (
                    <div className={styles.remember} key={index}>
                      <label className={styles.radioContainer}>
                        <input value={activityt}
                          checked={selectActivityTwo.includes(activityt)}
                          onChange={handleChangeActivityTwo}
                          type="radio"
                     
                        />
                        <span className={styles.customRadio}></span>
                      </label> {activityt}
                    </div>
                  ))}

                </div>

                <button type="button" onClick={() => StepOne()} className={styles.button}>Next</button>
              </div>
            }

        {/* ---------------- */}


            {configStep[1].status === 'active' &&
              <div className={styles.container}>
                <span className={configStep[1].status === 'active' ? styles.step2 : ''}>
                  <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
                </span>

                <div className={styles.steps}>
                  <span className={configStep[1].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[1].status === 'active' ? styles.active : ''}></span>
                  <span></span>
                  <span></span>
                  <span></span>
                 <span></span>
               

                </div>

                <h1 className={`${styles.title}   ${styles.PersTitleMob} `}>
                  Which of these activities are you most interested in?</h1>
               

                <div className={styles.remberHold}>
                  {interests.map((interest, index) => (
                    <div className={styles.remember} key={index}>
                      <label className={styles.checkboxContainer}>
                        <input value={interest}
                          checked={selectInterest.includes(interest)}
                          onChange={handleCheckboxChange}
                          type="checkbox"
                          className={styles.checkboxInput}
                        />
                        <span className={styles.checkmark}></span>
                      </label> {interest}
                    </div>
                  ))}
                </div>

                <button type="button" onClick={() => StepTwo()} className={styles.button}>Next</button>
              </div>
            }



        {configStep[2].status === 'active' &&
              <div className={styles.container}>
                <span className={configStep[2].status === 'active' ? styles.step3 : ''}>
                  <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
                </span>

                <div className={styles.steps}>
                <span className={configStep[2].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[2].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[2].status === 'active' ? styles.active : ''}></span>
                  <span></span>
                <span></span>
                <span></span>

                </div>

                <h1 className={`${styles.title} `}>
                What’s your primary goal for joining these activities?</h1>
                

                <div className={styles.remberHold}>
                  {goal.map((goal, index) => (
                    <div className={styles.remember} key={index}>
                      <label className={styles.checkboxContainer}>
                        <input value={goal}
                          checked={selectGoal.includes(goal)}
                          onChange={handleChangeGoal}
                          type="checkbox"
                          className={styles.checkboxInput}
                        />
                        <span className={styles.checkmark}></span>
                      </label> {goal}
                    </div>
                  ))}
                </div>

                <button type="button" onClick={() => StepThree()} className={styles.button}>Next</button>
              </div>
            }





        {configStep[3].status === 'active' &&
              <div className={styles.container}>
                <span className={configStep[3].status === 'active' ? styles.step4 : ''}>
                  <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
                </span>

                <div className={styles.steps}>
                <span className={configStep[3].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[3].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[3].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[3].status === 'active' ? styles.active : ''}></span>
                  <span></span>
                    <span></span>

                </div>

                <h1 className={`${styles.title}    `}>
                 Where do you usually prefer to attend your hobby classes / experiences?</h1>
                 
                <div className={styles.remberHold}>
                  {classes.map((classes, index) => (
                    <div className={styles.remember} key={index}>
                      <label className={styles.checkboxContainer}>
                        <input value={classes}
                          checked={selectClass.includes(classes)}
                          onChange={handleChangeClass}
                          type="checkbox"
                          className={styles.checkboxInput}
                        />
                        <span className={styles.checkmark}></span>
                      </label> {classes}
                    </div>
                  ))}
                </div>

                <button type="button" onClick={() => StepFour()} className={styles.button}>Next</button>
              </div>
            }





      {configStep[4].status === 'active' &&
              <div className={styles.container}>
                <span className={configStep[4].status === 'active' ? styles.step5 : ''}>
                  <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
                </span>

                <div className={styles.steps}>
                <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
                <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
                  <span className={configStep[4].status === 'active' ? styles.active : ''}></span>
                  <span></span>
                  

                </div>

                <h1 className={`${styles.title}   `}>
                How much time can you dedicate to Hobbies per week?</h1>
                 
                <div className={styles.remberHold}>
                  {level.map((level, index) => (
                    <div className={styles.remember} key={index}>
                      <label className={styles.radioContainer}>
                        <input value={level}
                          checked={selectLevel.includes(level)}
                          onChange={handleChangeLevel}
                          type="radio"
                          className={styles.radioInput}
                        />
                        <span className={styles.customRadio}></span>
                      </label> {level}
                    </div>
                  ))}
                </div>

                <button type="button" onClick={() => StepFive()} className={styles.button}>Next</button>
              </div>
            }



        {configStep[5].status === 'active' &&
              <div className={styles.container}>
                <span className={configStep[5].status === 'active' ? styles.step6 : ''}>
                  <img src='/bee.gif' className={styles.bee} width={330} height={96} alt='' />
                </span>

                <div className={styles.steps}>
                <span className={configStep[5].status === 'active' ? styles.active : ''}></span>
                <span className={configStep[5].status === 'active' ? styles.active : ''}></span>
                <span className={configStep[5].status === 'active' ? styles.active : ''}></span>
                <span className={configStep[5].status === 'active' ? styles.active : ''}></span>
                <span className={configStep[5].status === 'active' ? styles.active : ''}></span>
                <span className={configStep[5].status === 'active' ? styles.active : ''}></span>
                

                </div>

                <h1 className={`${styles.title}   `}>
                Would you be interested in group activities or 1 on 1 sessions?</h1>
                 
                <div className={styles.radioGroup}>
                  {activityThree.map((activityth, index) => (
                    <div className={styles.remember} key={index}>
                      <label className={styles.radioContainer}>
                        <input value={activityth}
                          checked={selectActivityThree.includes(activityth)}
                          onChange={handleChangeActivityThree}
                          type="radio"
                     
                        />
                        <span className={styles.customRadio}></span>
                      </label> {activityth}
                    </div>
                  ))}

                </div>

                <button type="button" onClick={() => StepSix()} className={styles.button}>Next</button>
              </div>
            }




             {configStep[6].status === 'active' &&
              <div className={styles.container}>
                <div className={styles.thankYou}>
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75 147.5C115.041 147.5 147.5 115.041 147.5 75C147.5 34.9594 115.041 2.5 75 2.5C34.9594 2.5 2.5 34.9594 2.5 75C2.5 115.041 34.9594 147.5 75 147.5Z" fill="#FEEA4F"/>
                  <path d="M60.6542 105.175L43.6542 88.5703C43.2865 88.2129 42.9942 87.7854 42.7946 87.313C42.595 86.8407 42.4922 86.3331 42.4922 85.8203C42.4922 85.3075 42.595 84.7999 42.7946 84.3276C42.9942 83.8552 43.2865 83.4277 43.6542 83.0703L49.2917 77.5703C50.0477 76.8378 51.0591 76.4282 52.1117 76.4282C53.1644 76.4282 54.1757 76.8378 54.9317 77.5703L65.0517 87.4628L93.4342 44.3128C94.0199 43.4421 94.9211 42.8332 95.9475 42.6149C96.9738 42.3965 98.0449 42.5858 98.9342 43.1428L105.644 47.3578C106.082 47.6273 106.462 47.982 106.761 48.401C107.059 48.82 107.271 49.2947 107.382 49.7969C107.494 50.2991 107.504 50.8187 107.411 51.3247C107.318 51.8307 107.124 52.313 106.842 52.7428L73.2342 103.853C72.5608 104.853 71.6762 105.694 70.6428 106.315C69.6094 106.937 68.4523 107.325 67.2529 107.451C66.0536 107.577 64.8412 107.438 63.7011 107.045C62.561 106.652 61.521 106.014 60.6542 105.175Z" fill="#644EE5"/>
                  </svg>

                  <h1>Thank You!</h1>
                  <p>We've captured your preferences and will customize your recommendations accordingly.</p>
                    <button type="button" onClick={() => StepSix()} className={styles.button}>Buzz into My Picks</button>
                  </div>
                  </div>
            } 


          </div>
          <div className='col-md-5 d-none d-md-block'>
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}

