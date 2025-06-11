import { useEffect, useRef, useState } from "react";
import styles from './CustomDatePicker.module.css'
import CustomDatePicker from "./CustomDayPicker";
import { IoCalendarClear } from "react-icons/io5";

export default function DateInput({ value, onChange }) {
    const [showPicker, setShowPicker] = useState(false);
    const wrapperRef = useRef(null);

    const today = new Date();
    const formatDate = (dateObj) =>
      `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`;
    const defaultDate = formatDate(today);
  
    const handleDateSelect = (date) => {
      onChange(date); // Send to parent
      setShowPicker(false);
    };
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setShowPicker(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
  
    return (
      <div className={styles.wrapper} ref={wrapperRef}>
        <label className={styles.label}>Date of Birth</label>
        <div className={`${styles.dateField} ${showPicker ? styles.active : ''}`} onClick={() => setShowPicker(!showPicker)}>
          {value || defaultDate}
          <span className={styles.arrow}><IoCalendarClear /></span>
        </div>
        {showPicker && (
          <div className={styles.pickerPopup}>
            <CustomDatePicker onDateSelect={handleDateSelect} value={value} />
          </div>
        )}
      </div>
    );
  }
  