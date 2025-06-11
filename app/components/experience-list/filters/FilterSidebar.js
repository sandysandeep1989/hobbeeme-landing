'use client';

import { usePathname } from 'next/navigation';
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import DayFilter from "./DayFilter";
import PriceFilter from "./PriceFilter";
import TimeFilter from "./TimeFilter";
import styles from './FilterSidebar.module.css';
import LocationFilter from "./LocationFilter";
import Link from "next/link";

export default function FilterSideBar() {
  const pathname = usePathname();

  const isClasses = pathname === "/classes";
  const isExperiences = pathname === "/experience";

  const [checkedItems, setCheckedItems] = useState({});
  const [priceRange, setPriceRange] = useState([0, 20000]);

  const handleReset = () => {
    setCheckedItems({});
    setPriceRange([0, 20000]);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h3>Filter</h3>
        <button className={styles.reset} onClick={handleReset}>Reset</button>
      </div>

      <div className={styles.tabWrapping}>
        <div className={styles.tabs}>
          <Link href="/classes" className={styles.tabLink}>
            <button className={`${styles.tab} ${isClasses ? styles.activeTabs : ""}`}>
              Classes
            </button>
          </Link>
          <Link href="/experience" className={styles.tabLink}>
            <button className={`${styles.tab} ${isExperiences ? styles.activeTabs : ""}`}>
              Experiences
            </button>
          </Link>
        </div>
      </div>

      <CategoryFilter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
      <PriceFilter priceRange={priceRange} setPriceRange={setPriceRange} />
      <LocationFilter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
      <DayFilter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
      <TimeFilter checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
    </div>
  );
}
