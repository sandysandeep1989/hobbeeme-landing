'use client'
import { useState } from 'react'
import styles from '@/app/personal-information/component/account.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';
import { DeleteIcon, EditIcon } from '@/app/personal-information/component/sidebaricons';
import AddParticipants from './add-participant';

export const BuildYourCirclePage = () => {

  const [popActive, setPopActive] = useState(false);

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

      const popShow =()=>{
        setPopActive(true);
      }

      const popClose = (data) =>{
        setPopActive(data);
      }
  


  return (
     <div  className={`${styles.accountPageSavedCol} ${styles.accountPage}`}>

          {popActive &&  <AddParticipants popClose={popClose}/>}
        

          <div className='row'>
            <div className='col-md-9'>
              <h1>Build Your Circle</h1>
              <p className={styles.suprtTxt}>Save your information for quicker bookings</p>
            </div>
            <div className='col-md-3'>
              <button type='button' className={`${styles.addParticipant} ${styles.addParticipantt}`} onClick={popShow}>+ Add Participants</button>
            </div>
          
            </div>

            <div className={styles.buildTable}>
              <table>
                <tbody className={styles.buildTableBody}>
                  {Array.from({length:4}).map((_, index) => (
                    <tr key={index}>
                    <th>Chirag Arora</th>
                    <td>(205) 555-0100</td>
                    <td>john.watson@example.com</td>
                    <td className={styles.actions}>
                         <div  onClick={popShow}><EditIcon /></div> 
                         <div  onClick={popShow}> <DeleteIcon/>  </div>
                    </td>
                    </tr>
                 ) )}
                  
                </tbody>
              </table>
            </div>
            {/* ----for mobile ------------- */}


             <div className={`${styles.addParticipantBtnCtnrM} d-none `}>
              <button type='button' className={`${styles.addParticipant} ${styles.addParticipantM}`} onClick={popShow}>+ Add Participants</button>
            </div>          
      
    
     
         {/* <ToastContainer position="top-right" autoClose={3000} /> */}

   

    
     </div>
  )
}
