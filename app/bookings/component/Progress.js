import React from 'react';
import styles from './CircularProgress.module.css';

const CircularProgress = ({ percentage = 70 }) => {
  const size = 24;              // Total SVG size
  const stroke = 3;             // Thickness of the ring
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg
      height={size}
      width={size}
      className={styles.svg}
    >
      {/* Background circle */}
      <circle
        stroke="#474747"
        fill="transparent"
        strokeWidth={stroke}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      {/* Progress circle */}
      <circle
        stroke="#FAE01E"
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
        className={styles.progress}
      />
    </svg>
  );
};

export default CircularProgress;
