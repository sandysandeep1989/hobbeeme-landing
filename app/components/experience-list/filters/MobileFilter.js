import { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import DayFilter from './DayFilter';
import LocationFilter from './LocationFilter';
import styles from './MobileFilter.module.css'; // Create a new CSS module
import PriceFilter from './PriceFilter';
import TimeFilter from './TimeFilter';



export default function MobileFilter({ onClose })  {

    const [checkedItems, setCheckedItems] = useState({});
    const [priceRange, setPriceRange] = useState([0, 20000]);

    const handleReset = () => {
        setCheckedItems({});
        setPriceRange([0, 20000]);
    };

    const [activeFilter, setActiveFilter] = useState('Sub-Category');
    return (
        <div className={styles.mobileFilter}>
            <div className={styles.header}>
                <h3>Filters</h3>
                <button className={styles.resetBtn} onClick={handleReset}>Reset</button>
            </div>

            <div className={styles.filterBody}>
                {/* Two-column layout */}
                <div className={styles.leftColumn}>
                    {[
                        'Sub-Category',
                        'Price',
                        'Location',
                        'Day',
                        'Time'
                    ].map((label) => (
                        <button
                            key={label}
                            className={`${styles.filterLabel} ${activeFilter === label ? styles.active : ''}`}
                            onClick={() => setActiveFilter(label)}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <div className={styles.rightColumn}>
                    {activeFilter === 'Sub-Category' && (
                        <CategoryFilter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                    )}
                    {activeFilter === 'Price' && (
                        <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
                    )}
                    {activeFilter === 'Location' && (
                        <LocationFilter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                    )}
                    {activeFilter === 'Day' && (
                        <DayFilter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                    )}
                    {activeFilter === 'Time' && (
                        <TimeFilter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
                    )}
                  
                    {/* Add Age filter when you have it */}
                </div>
            </div>

            <div className={styles.footer}>
            <button onClick={onClose} className={styles.closeBtn}>Close</button>
                <button className={styles.applyBtn}>Apply</button>
            </div>
        </div>
    );
}
