'use client';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styles from "./Calendar.module.css";
import { getTwoMonths } from "../../utils/dateUtils";

const CalendarModal = ({ show, onHide, onSelectDate }) => {
    const [monthOffset, setMonthOffset] = useState(0);

    const handleNext = () => {
        if (monthOffset < 3) setMonthOffset(prev => prev + 1);
    };

    const handlePrevious = () => {
        if (monthOffset > 0) setMonthOffset(prev => prev - 1);
    };

    const { currentMonth, nextMonth } = getTwoMonths(monthOffset);

    return (
        <Modal show={show} onHide={onHide} centered dialogClassName={styles.modalSize}>
            <Modal.Body className={styles.modalBody}>
                <div className={styles.header}>
                    <span className={styles.title}>Select a Date</span>
                    <div className={styles.navButtons}>
                        {monthOffset > 0 && (
                            <Button  onClick={handlePrevious} className={styles.slideButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                    <g filter="url(#filter0_d_2247_35586)">
                                        <rect x="24" y="25.5" width="24" height="24" rx="12" transform="rotate(180 24 25.5)" fill="white" />
                                        <rect x="23.7778" y="25.2778" width="23.5556" height="23.5556" rx="11.7778" transform="rotate(180 23.7778 25.2778)" stroke="white" strokeWidth="0.444444" />
                                        <path d="M13.7783 9.2778L9.77832 13.2778L13.7783 17.2778" stroke="#141516" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_2247_35586" x="0" y="0.611111" width="26.6667" height="26.3704" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dx="1.48148" dy="0.296296" />
                                            <feGaussianBlur stdDeviation="0.592593" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2247_35586" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2247_35586" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </Button>
                        )}
                        {monthOffset < 3 && (
                            <Button  onClick={handleNext} className={styles.slideButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                    <g filter="url(#filter0_d_2247_35588)">
                                        <rect y="1.5" width="24" height="24" rx="12" fill="white" />
                                        <rect x="0.222222" y="1.72222" width="23.5556" height="23.5556" rx="11.7778" stroke="white" strokeWidth="0.444444" />
                                        <path d="M10.2217 17.7222L14.2217 13.7222L10.2217 9.7222" stroke="#141516" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_2247_35588" x="0" y="0.611111" width="26.6667" height="26.3704" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dx="1.48148" dy="0.296296" />
                                            <feGaussianBlur stdDeviation="0.592593" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2247_35588" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2247_35588" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </Button>
                        )}
                    </div>
                </div>

                <div className={styles.calendarGrid}>
                    {[currentMonth, nextMonth].map((month, i) => (
                        <div className={styles.monthBlock} key={i}>
                            <div className={styles.monthTitle}>
                                {month.name} {month.year}
                            </div>
                            <div className={styles.weekdays}>
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                                    <span key={d}>{d}</span>
                                ))}
                            </div>
                            <div className={styles.dates}>
                                {month.dates.map((d, idx) => (
                                    <div
                                        key={idx}
                                        className={`${styles.dateCell} ${d.disabled ? styles.disabled : ""}`}
                                        onClick={() => !d.disabled && onSelectDate(d.dateStr)}
                                    >
                                        {d.day}
                                        {d.price && <div className={ d.disabled ? styles.disabledPrice : styles.price}>{d.price}</div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CalendarModal;
