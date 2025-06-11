import { useState } from 'react';
import styles from './cusDrop.module.css';
import { FaChevronDown } from 'react-icons/fa';

const CusDropDown = ({ label, options, selected, onChange }) => {
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
                        <div className={styles.selected}>{selected || 'Select'}</div>
                        {/* <FaChevronDown className={styles.icon} /> */}
                        <img src='./arrow-Bdown.svg' />
                    </div>
             

            </div>

            {open && (
                <ul className={styles.dropdownList}>
                    {options.map((opt) => (
                        <li
                            key={opt}
                            className={`${styles.dropdownItem} ${selected === opt ? styles.active : ''
                                }`}
                            onClick={() => handleSelect(opt)}
                        >
                            {opt}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CusDropDown;
