import React from 'react';
import { useEffect } from 'react';
import styles from './BookingHeader.module.css';

export default function BookingHeader({ currentStep, setCurrentStep }) {
    const steps = [
        {
            id: 1,
            svg: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M1.66699 5.83333C1.66699 3.99238 3.15938 2.5 5.00033 2.5H15.0003C16.8413 2.5 18.3337 3.99238 18.3337 5.83333V14.1667C18.3337 16.0076 16.8413 17.5 15.0003 17.5H5.00033C3.15938 17.5 1.66699 16.0076 1.66699 14.1667V5.83333Z" stroke="white" strokeLinejoin="round" />
                <path d="M1.66699 5.83333H18.3337V9.16666H1.66699V5.83333Z" stroke="white" strokeLinejoin="round" />
                <path d="M6.66667 14.1667H5" stroke="white" strokeLinecap="round" />
            </svg>,
            label: 'Details'
        },
        {
            id: 2,
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
                       <svg xmlns="http://www.w3.org/2000/svg" width="1198" height="2" viewBox="0 0 1198 2" fill="none" className={styles.connectorSVG}>
                         <path
                             d="M1 1L1197 1.0001"
                             stroke="#2F2F2F"
                             strokeLinecap="round"
                             className={styles.connectorPath}
                         />
                       </svg>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}