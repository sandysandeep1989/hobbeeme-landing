import React, { useState, useRef, useEffect } from 'react';
import styles from './Dropdown.module.css';

export default function Dropdown({ label = "Select an option", options = [], onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // 🛑 prevent modal from thinking it's an outside click
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option.value);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <button className={`${styles.dropdownToggle} ${isOpen ? styles.dropdownActive : ''}`} onClick={toggleDropdown}>
        {selected ? selected.label : label}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 10L12 14L17 10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        </span>
      </button>
      <ul className={`${styles.dropdownMenu} ${isOpen ? styles.show : ''}`} onClick={(e) => e.stopPropagation()}>
        {options.map((option) => (
          <li
            key={option.value}
            className={styles.dropdownItem}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
