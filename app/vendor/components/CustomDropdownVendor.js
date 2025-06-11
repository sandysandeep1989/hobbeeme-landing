'use client'
import { useState, useEffect } from 'react';
import styles from './CustomDropdownVendor.module.css';

export function CustomDropdownVendor({ label, options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  // Use the value prop as the selected value (controlled)
  const selected = value;

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  // Optional: close dropdown on outside click or blur
  const handleBlur = () => setIsOpen(false);

  return (
    <div className={styles['things-wrapper']}>
      <label className={styles['things-label']}>{label}</label>
      <div
        className={styles['things-dropdown']}
        onClick={toggleDropdown}
        tabIndex={0}
        onBlur={handleBlur}
      >
        <div className={styles['things-selected']}>
          {selected || 'Select an option'}
        </div>
        {isOpen && (
          <div className={styles['things-options']}>
            {options.map((opt, idx) => (
              <div
                key={idx}
                className={styles['things-option']}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
  