import React, { useState } from 'react';
import styles from './CustomDatePicker.module.css';

const CustomDatePicker = ({ onDateSelect, value }) => {
    // existing code...

    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const [showYearGrid, setShowYearGrid] = useState(false);


    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December',
    ];

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const goToPrevMonth = (e) => {
        e.stopPropagation();
        setCurrentMonth(prev => {
            if (prev === 0) {
                setCurrentYear(year => year - 1);
                return 11;
            }
            return prev - 1;
        });
    };

    const goToNextMonth = (e) => {
        e.stopPropagation();
        setCurrentMonth(prev => {
            if (prev === 11) {
                setCurrentYear(year => year + 1);
                return 0;
            }
            return prev + 1;
        });
    };

  

    const renderDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
        const blanks = Array.from({ length: firstDay }, (_, i) => <div key={`b-${i}`} className={styles.day} />);
        const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

        const daysArr = Array.from({ length: daysInMonth }, (_, i) => {
           
            const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`;
            const isToday = dateStr === todayStr;
            const isSelected = value === dateStr;

            const isActiveToday = isToday && !value;
            return (
                <div
                    key={i}
                    className={`${styles.day} ${isActiveToday ? styles.today : ''} ${isSelected ? styles.selected : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onDateSelect(dateStr);
                    }}
                >
                    {i + 1}
                </div>
            );
        });

        return [...blanks, ...daysArr];
    };

    const renderYearGrid = () => {
        const startYear = currentYear - 50;
        const years = Array.from({ length: 100 }, (_, i) => startYear + i);
      
        return years.map((year) => (
          <div
            key={year}
            className={`${styles.yearCell} ${year === currentYear ? styles.activeYear : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentYear(year);
              setShowYearGrid(false); // 👈 switch back to calendar view
            }}
          >
            {year}
          </div>
        ));
      };
      

    return (
        <div className={styles.calendarContainer} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
                <button onClick={goToPrevMonth} className={styles.navBtn}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M6.33301 10.6666L1.66634 5.99992L6.33301 1.33325" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg></button>
                <div className={styles.monthYear}>
                    <span>{months[currentMonth]}</span>
                    <button
                        className={styles.yearToggleBtn}
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowYearGrid(prev => !prev);
                        }}
                    >
                        {currentYear}
                    </button>

                </div>
                <button onClick={goToNextMonth} className={styles.navBtn}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                    <path d="M1.66699 1.33317L6.33366 5.99984L1.66699 10.6665" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg></button>
            </div>

            <div className={styles.dayHeaders}>
                {days.map((day, idx) => (
                    <div key={idx} className={styles.dayHeader}>{day}</div>
                ))}
            </div>

            {showYearGrid ? (
  <div className={styles.yearGridContainer}>
    <div className={styles.yearGrid}>
      {renderYearGrid()}
    </div>
  </div>
) : (
  <div className={styles.daysGrid}>
    {renderDays()}
  </div>
)}
        </div>
    );
};

export default CustomDatePicker;
