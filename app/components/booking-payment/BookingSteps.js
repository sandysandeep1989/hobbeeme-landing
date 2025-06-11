import React from 'react';
import { useEffect } from 'react';
import styles from './BookingSteps.module.css';

const BookingSteps = ({ currentStep, setCurrentStep }) => {
  const steps = [
    {
      id: 1,
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <ellipse cx="8.33333" cy="14.5833" rx="5.83333" ry="2.91667" stroke="black" strokeLinejoin="round"/>
      <circle cx="8.33333" cy="5.83333" r="3.33333" stroke="black" strokeLinejoin="round"/>
      <path d="M12.8506 3.68823C14.342 3.86209 15.5 5.12867 15.5 6.66675C15.5 8.32343 14.1566 9.66654 12.5 9.66675C12.2147 9.66675 11.9392 9.62395 11.6777 9.54956C11.9701 9.28621 12.2314 8.98897 12.4551 8.66382C12.4699 8.66414 12.4851 8.66675 12.5 8.66675C13.6044 8.66654 14.5 7.77115 14.5 6.66675C14.5 5.81916 13.972 5.09565 13.2275 4.80444C13.1458 4.41361 13.0178 4.0397 12.8506 3.68823Z" fill="black"/>
      <path d="M13.3945 11.201C14.4749 11.2789 15.4565 11.494 16.2275 11.8152C16.7159 12.0188 17.1446 12.2741 17.458 12.5828C17.7731 12.8933 17.9999 13.2883 18 13.7498C18 14.2114 17.7731 14.6063 17.458 14.9168C17.1445 15.2256 16.716 15.4808 16.2275 15.6844C16.0026 15.7781 15.7589 15.8611 15.501 15.9363C15.6886 15.5647 15.799 15.1727 15.8252 14.7674C15.8308 14.7651 15.8372 14.7639 15.8428 14.7615C16.2588 14.5882 16.5634 14.3944 16.7559 14.2049C16.9464 14.0171 17 13.8633 17 13.7498C16.9999 13.6364 16.9462 13.4833 16.7559 13.2957C16.5634 13.1061 16.2588 12.9115 15.8428 12.7381C15.5863 12.6313 15.2952 12.5386 14.9775 12.4578C14.5711 11.9844 14.0343 11.5587 13.3945 11.201Z" fill="black"/>
    </svg>,
      label: 'Package'
    },
    {
      id: 2,
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M1.66699 5.83333C1.66699 3.99238 3.15938 2.5 5.00033 2.5H15.0003C16.8413 2.5 18.3337 3.99238 18.3337 5.83333V14.1667C18.3337 16.0076 16.8413 17.5 15.0003 17.5H5.00033C3.15938 17.5 1.66699 16.0076 1.66699 14.1667V5.83333Z" stroke="white" strokeLinejoin="round" />
        <path d="M1.66699 5.83333H18.3337V9.16666H1.66699V5.83333Z" stroke="white" strokeLinejoin="round" />
        <path d="M6.66667 14.1667H5" stroke="white" strokeLinecap="round" />
      </svg>,
      label: 'Details'
    },
    {
      id: 3,
      svg:
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M1.66699 5.83333C1.66699 3.99238 3.15938 2.5 5.00033 2.5H15.0003C16.8413 2.5 18.3337 3.99238 18.3337 5.83333V14.1667C18.3337 16.0076 16.8413 17.5 15.0003 17.5H5.00033C3.15938 17.5 1.66699 16.0076 1.66699 14.1667V5.83333Z" stroke="white" strokeLinejoin="round" />
          <path d="M1.66699 5.83333H18.3337V9.16666H1.66699V5.83333Z" stroke="white" strokeLinejoin="round" />
          <path d="M6.66667 14.1667H5" stroke="white" strokeLinecap="round" />
        </svg>,
      label: 'Payment'
    },
  ];

  const handleStepClick = (stepId) => {
    if (stepId > currentStep) {
      setCurrentStep(stepId);
    }
  };

  useEffect(() => {
    const connectorPaths = document.querySelectorAll(`.${styles.connectorPath}`);
    connectorPaths.forEach((path, index) => {
      if (index < currentStep - 1) {
        path.classList.add(styles.connectorFilled);
      } else {
        path.classList.remove(styles.connectorFilled);
      }
    });
  }, [currentStep]);

  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={styles.step}>
            <div
              className={`${styles.iconWrapper} ${currentStep >= step.id ? styles.active : ''
                }`}
            >
              {step.svg}
            </div>
            <div
              className={styles.stepLabel}
              onClick={() => handleStepClick(step.id)}
            >
              {step.label}
            </div>
          </div>

          {index < steps.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 562 2"
              className={styles.connectorSVG} // optional class for styling/animation
              fill="none"
            >
              <path
                d="M1 1L561 1.00005"
                stroke="#2F2F2F"
                strokeLinecap="round"
                strokeDasharray="562" // Set to the path length for initial hiding
                strokeDashoffset="562" // Hide the stroke initially
                className={styles.connectorPath} // Add a class for styling
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BookingSteps;
