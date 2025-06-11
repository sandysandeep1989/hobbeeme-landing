
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import styles from './CalendarWithEvents.module.css';
import { Card, Button } from 'react-bootstrap';

const CalendarWithEvents = ({ events }) => {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState(null);

    const startOfMonth = currentDate.startOf('month');
    const endOfMonth = currentDate.endOf('month');
    const daysInMonth = endOfMonth.date();
    const daysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    useEffect(() => {
        // Check if there are events on the current day
        const today = dayjs();
        const hasEventToday = events.some(event => dayjs(event.date).isSame(today, 'day'));
        if (hasEventToday) {
            setSelectedDate(today);
        }
    }, [events]);

    const handlePrevMonth = () => {
        setCurrentDate(prev => prev.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        if (currentDate < dayjs().add(4, 'month')) {
            setCurrentDate(prev => prev.add(1, 'month'));
        }
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const renderCalendar = () => {
        const days = [];
        const startDay = startOfMonth.day();

        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className={styles.empty}></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = startOfMonth.date(day);
            const isPast = date.isBefore(dayjs(), 'day');
            const hasEvent = events.some(event => dayjs(event.date).isSame(date, 'day'));
            const isSelected = selectedDate && dayjs(selectedDate).isSame(date, 'day');

            days.push(
                <div
                    key={day}
                    className={`${styles.day} ${isPast ? styles.past : ''} ${hasEvent ? styles.hasEvent : ''}  ${isSelected ? styles.activeDay : ''}`}
                    onClick={() => handleDateClick(date)}
                >
                    {day}
                    <span className={`${styles.dot} ${!hasEvent ? styles.invisible : ''}`}></span>
                </div>
            );
        }

        return days;
    };

    const getTimeFromTimeOfDay = (timeOfDay) => {
        switch (timeOfDay) {
            case 'Morning': return '09:00 AM';
            case 'Afternoon': return '02:00 PM';
            case 'Evening': return '06:00 PM';
            case 'Night': return '08:30 PM';
            default: return 'TBD';
        }
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.header}>
                {currentDate.month() > dayjs().month() && (
                    <button className={styles.nextPrevious} onClick={handlePrevMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M6.33301 10.6667L1.66634 6.00001L6.33301 1.33334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}
                <span>{currentDate.format('MMMM YYYY')}</span>
                {currentDate < dayjs().add(4, 'month') && (
                    <button className={styles.nextPrevious} onClick={handleNextMonth}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M1.6665 1.33335L6.33317 6.00002L1.6665 10.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                )}
            </div>

            <div className={styles.daysHeader}>
                {daysInWeek.map(day => <div key={day} className={styles.dayName}>{day}</div>)}
            </div>

            <div className={styles.daysGrid}>
                {renderCalendar()}
            </div>

            {selectedDate && (
                <div className={styles.eventsList}>
                    <h3>Activities ({events.filter(e => dayjs(e.date).isSame(selectedDate, 'day')).length})</h3>
                    {events.filter(e => dayjs(e.date).isSame(selectedDate, 'day')).map((event, idx) => (
                        <div key={idx}>
                            <div className={styles.eventActivities}>
                                <div className={styles.timedots}>{getTimeFromTimeOfDay(event.timeOfDay)}
                                    <span></span>
                                </div>
                                <div className={styles.eventCard}>
                                    <img src={event.image} alt={event.title} />
                                    <div className={styles.eventDetails}>
                                        <h4>{event.title}</h4>
                                        <p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                                <g clipPath="url(#clip0_7180_3815)">
                                                    <path d="M5.20951 0.500244C3.21254 0.500244 1.58789 2.12489 1.58789 4.12185C1.58789 6.60013 4.82889 10.2384 4.96688 10.3921C5.09648 10.5364 5.32277 10.5362 5.45215 10.3921C5.59014 10.2384 8.83113 6.60013 8.83113 4.12185C8.83109 2.12489 7.20646 0.500244 5.20951 0.500244ZM5.20951 5.94397C4.20479 5.94397 3.3874 5.12657 3.3874 4.12185C3.3874 3.11712 4.2048 2.29974 5.20951 2.29974C6.21422 2.29974 7.0316 3.11714 7.0316 4.12186C7.0316 5.12659 6.21422 5.94397 5.20951 5.94397Z" fill="#FEEA4F" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_7180_3815">
                                                        <rect width="10" height="10" fill="white" transform="translate(0.210938 0.5)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            {event.location}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CalendarWithEvents;
