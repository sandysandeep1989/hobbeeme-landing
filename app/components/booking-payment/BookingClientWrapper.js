'use client';
import { useState } from 'react';
import styles from './BookingSteps.module.css';
import BookingSteps from './BookingSteps';
import PackageStep from './PackageStep';
import DetailsStep from './DetailsStep';
import PaymentStep from './PaymentStep';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function BookingClientWrapper() {
  const [currentStep, setCurrentStep] = useState(1);

  let content;
  switch (currentStep) {
    case 2:
      content = <DetailsStep currentStep ={currentStep} setCurrentStep= {setCurrentStep}/>;
      break;
    case 3:
      content = <PaymentStep currentStep ={currentStep} setCurrentStep= {setCurrentStep}/>;
      break;
    default:
      content = <PackageStep currentStep ={currentStep} setCurrentStep= {setCurrentStep}/>;
  }

  return (
    <div className={`${styles.bookingClientWrapper} ${styles.bookingClientWrappcpy}`}>
       <div className='breadCrumb'>
                        <div className={`CustomeContainer`}>
                            <ul>
                                <li><Link href='/'>Home</Link> <ChevronRight /></li>
                                <li>Experience <ChevronRight /></li>
                                <li>Aladdin Tour; Old Town, Souks, Tastings <ChevronRight /></li>
                                <li>Select Package</li>
                            </ul>
                        </div>
                    </div>
      <BookingSteps currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {content}
    </div>
  );
}
