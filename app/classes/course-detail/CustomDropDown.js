import { useState } from 'react';
import styles from './CustomDropdown.module.css';

const CustomDropdown = ({ label, options, selected, onChange, icons }) => {
    const [open, setOpen] = useState(false);

    const handleSelect = (option) => {
        onChange(option);
        setOpen(false);
    };

    return (
        <div className={styles.dropdownWrapper}>
            <div className={styles.label}>{label}</div>
            <div
                className={styles.dropdownHeader}
                onClick={() => setOpen(!open)}
                tabIndex={0}
                onBlur={() => setTimeout(() => setOpen(false), 150)}
            >
                <div className={styles.dropdownBtn}>
                    <div className={styles.selected}>
                        {icons && icons[selected] && (
                            <span className={styles.optionIcon}>{icons[selected]}</span>
                        )}
                        {selected || 'Select'}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M9.33203 13.3333L15.9987 18.6667L22.6654 13.3333" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {open && (
                <ul className={styles.dropdownList}>
                    {options.map((opt) => (
                        <li
                            key={opt}
                            className={`${styles.dropdownItem} ${selected === opt ? styles.active : ''}`}
                            onClick={() => handleSelect(opt)}
                        >
                            {icons && icons[opt] && (
                                <span className={styles.optionIcon}>{icons[opt]}</span>
                            )}
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
