import styles from './terms.module.css';

const TermsConditions = () => {
  return (


       <div  className={`${styles.accountPageSavedCol} ${styles.accountPage}`}>

         <section className={styles.container}>
      <h2 className={styles.heading}>Terms and Conditions</h2>
      <p className={styles.subheading}>Please read these terms carefully before using our platform</p>

      <div className={styles.section}>
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using BookVerse, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
        </p>
      </div>
      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>2. Use License</h3>
        <p>Permission is granted to temporarily download one copy of the materials on BookVerse for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose</li>
          <li>Attempt to decompile or reverse engineer any software contained on the platform</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>
      </div>
      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>3. Booking and Cancellation</h3>
        <p>Users agree to honor all bookings made through our platform. Cancellation policies vary by experience provider and are clearly stated on each listing. Users acknowledge that they have read and understood the cancellation policy before making a booking.</p>
      </div>
      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>4. User Accounts</h3>
        <p>To access certain features of BookVerse, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all activities that occur under your account.</p>
      </div>
      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>5. Limitation of Liability</h3>
        <p>In no event shall BookVerse or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the platform, even if BookVerse or a BookVerse authorized representative has been notified orally or in writing of the possibility of such damage.</p>
      </div>
      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>6. Governing Law</h3>
        <p>These terms and conditions are governed by and construed in accordance with the laws of [Jurisdiction] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
      </div>
    </section>


       </div>






   
  );
};

export default TermsConditions;
