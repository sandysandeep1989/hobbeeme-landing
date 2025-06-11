import { useState } from 'react';
import styles from './FilterSidebar.module.css';
import CustomCheckbox from "../../CustomCheckbox";
export default function TimeFilter({checkedItems,setCheckedItems}) {
    const categories = ['Morning', 'Afternoon', 'Evening', 'Night'];
   
    const handleChange = (category, isChecked) => {
        setCheckedItems((prev) => ({
          ...prev,
          [category]: isChecked,
        }));
      };
    return (
        <div className={styles.section}>
        <h4 className={styles.filterHead}>Time</h4>
        {categories.map((cat) => (
          <label key={cat} className={styles.checkbox}>
              
            <CustomCheckbox
              checked={!!checkedItems[cat]}
              onChange={(checked) => handleChange(cat, checked)}
            />
            <span className={styles.checkboxLabel}>{cat}</span>
          </label>
        ))}
      </div>
    )
    
}