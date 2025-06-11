import { useState } from 'react';
import styles from './FilterSidebar.module.css';
import CustomCheckbox from "../../CustomCheckbox";
import { Modal } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import FilterSideBar from './FilterSidebar';

// Dynamically import MapView with SSR disabled
const MapView = dynamic(() => import('./MapView'), { ssr: false });

export default function LocationFilter({ checkedItems, setCheckedItems }) {
  const [showMap, setShowMap] = useState(false);

  const categories = [
    'At Your Premise (147)',
    'Academic City (6)',
    'Al Barari (3)',
    'Al Barsha (43)',
    'Al Furjan (5)'
  ];

  const handleChange = (category, isChecked) => {
    setCheckedItems((prev) => ({
      ...prev,
      [category]: isChecked,
    }));
  };

  return (
    <>
      <div className={styles.section}>
        <div className={styles.sectionHeadWrapping}>
          <h4 className={styles.filterHead}>Location</h4>
          {/* <button className={styles.viewMap} onClick={() => setShowMap(true)}>
            View Map
          </button> */}
        </div>

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

      {/* Map Modal */}
      <Modal show={showMap} onHide={() => setShowMap(false)} size="lg" centered dialogClassName={styles.mapfilterModal}>

        <Modal.Body>
          <div className={styles.mapViewContainer}>
            <div className={styles.filterSidebar}>
              <FilterSideBar />
            </div>
            <div className={styles.mapView}>
              <MapView />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
