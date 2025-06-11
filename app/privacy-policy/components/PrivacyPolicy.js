import styles from './privacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (


       <div  className={`${styles.accountPageSavedCol} ${styles.accountPage}`}>
           <section className={styles.container}>
      <h2 className={styles.heading}>Privacy Policy</h2>
      <p className={styles.subheading}>Last updated: April 15, 2025</p>

      <div className={styles.section}>
        <h3>1. Information We Collect</h3>
        <p>We collect information you provide directly to us when you create an account, make a booking, or communicate with us. This may include:</p>
        <ul>
          <li>Contact information (name, email address, phone number)</li>
          <li>Account credentials (username and password)</li>
          <li>Payment information (credit card details, billing address)</li>
          <li>Profile information (photo, bio, preferences)</li>
          <li>Communications with us or other users through our platform</li>
        </ul>
      </div>

      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>2. How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Process transactions and send related information</li>
          <li>Send you technical notices, updates, security alerts, and support messages</li>
          <li>Respond to your comments, questions, and requests</li>
          <li>Personalize your experience on our platform</li>
          <li>Monitor and analyze trends, usage, and activities</li>
          <li>Detect, prevent, and address fraud and other illegal activities</li>
        </ul>
      </div>

      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>3. Information Sharing</h3>
        <p>We may share your information with:</p>
        <ul>
          <li>Experience providers to facilitate your bookings</li>
          <li>Service providers who perform services on our behalf</li>
          <li>Third parties if we believe disclosure is necessary to comply with legal obligations</li>
          <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition</li>
        </ul>
      </div>

      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>4. Data Security</h3>
        <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.</p>
      </div>

      <hr className={styles.separator} />

      <div className={styles.section}>
        <h3>5. Your Choices</h3>
        <p>You may update, correct, or delete your account information at any time by logging into your account. You may also opt out of receiving promotional communications from us by following the instructions in those messages.</p>
      </div>
    </section>

     


       </div>






   
  );
};

export default PrivacyPolicy;


;

