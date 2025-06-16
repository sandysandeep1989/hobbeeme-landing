"use client"
import Footer from '../components/footer';
import Header from '../components/header';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';

const TermsConditions = () => {
  const router = useRouter();

  const handleBack = () => {
    const savedState = localStorage.getItem('listingFormState');
    if (savedState) {
      const state = JSON.parse(savedState);
      // Keep the modal state but remove the navigation flag
      state.isNavigatingToTC = false;
      state.isModalOpen = true;
      localStorage.setItem('listingFormState', JSON.stringify(state));
      localStorage.setItem('cameFromModal', 'true')
    }
    router.back();
  };

  return (
    <div className={styles.termsAndCondition}>
      
      <Header />
      <div className={styles.termsAndConditionWrapping}>
      <div className={styles.backButtonContainer}>
        <button 
          onClick={handleBack} 
          className={styles.backButton}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
        </button>
      </div>
      <div className={`${styles.accountPageSavedCol} ${styles.accountPage}`}>
        <section className={styles.container}>
          <h2 className={styles.heading}>Hobbeeme Partner Terms & Conditions</h2>

          <div className={styles.section}>
            <h3>1. Licensing and Permits</h3>
            <p>
              Partner warrants that it holds all necessary licenses and permits required to operate its business in the UAE, including but not limited to licenses to offer classes or host any other services or experiences listed on the Hobbeeme platform.
            </p>
          </div>
          <hr className={styles.separator} />

          <div className={styles.section}>
            <h3>2. Registration & Listing</h3>
            <ul>
              <li>By listing on Hobbeeme platform, the partner shall get the following benefits:</li>
              <li>Social media coverage of all your classes/workshops - including paid campaigns</li>
              <li>Premium home page listing free for 7 days</li>
              <li>A unique platform to list unlimited classes/workshops annually.</li>
              <li>
                The listing fee of AED 200 shall apply, which must be paid to Hobbeeme within 90 days of the launch, or it will be adjusted against the first payment made to the vendor, whichever occurs first.
              </li>
              <li>Partners must maintain accurate schedules, pricing, and service quality. Non-compliance may result in removal.</li>
            </ul>
          </div>
          <hr className={styles.separator} />

          <div className={styles.section}>
            <h3>3. Payments & Commissions</h3>
            <ul>
              <li>Hobbeeme manages all payments via a secure gateway.</li>
              <li>
                A deductible commission ranging from 25% - 10% applies on the booking value. The tiered commission model shall be shared as part of the agreement upon registration.
              </li>
              <li>Payments to partners will be made on or before the 10th of every month for the previous month.</li>
            </ul>
          </div>
          <hr className={styles.separator} />

          <div className={styles.section}>
            <h3>4. Partner Responsibilities</h3>
            <ul>
              <li>Partners must keep class schedules and pricing updated. Any changes must be notified at least 24 hours in advance.</li>
              <li>Partners offering recurring group classes must provide a one-time complimentary trial session.</li>
              <li>Repeated cancellations or no-shows may lead to termination.</li>
              <li>Pricing must be consistent across all marketing channels.</li>
              <li>Partners must comply with all legal requirements, hold necessary accreditations, and ensure service quality.</li>
              <li>
                Cancellations within 24 hours of a scheduled session will result in a 25% charge per booking, credited to affected customers (if any). Repeated violations (3 instances) may lead to contract termination.
              </li>
            </ul>
          </div>
          <hr className={styles.separator} />

          <div className={styles.section}>
            <h3>5. Marketing & Branding</h3>
            <ul>
              <li>Partners must participate in Hobbeeme's promotional activities, including social media features.</li>
              <li>Being listed on the platform increases partner visibility and traffic.</li>
            </ul>
          </div>
          <hr className={styles.separator} />

          <div className={styles.section}>
            <h3>6. Intellectual Property</h3>
            <ul>
              <li>Partners grant Hobbeeme the right to use their branding, logos, and content for promotional purposes.</li>
              <li>Partners retain ownership of submitted content but authorize Hobbeeme to use it for marketing.</li>
            </ul>
          </div>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsConditions;
