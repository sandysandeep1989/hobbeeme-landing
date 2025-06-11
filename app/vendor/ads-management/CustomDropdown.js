'use client';
import { useState } from 'react';
import { Ban,  EllipsisVertical, Pause } from 'lucide-react';
import styles from './Dropdown.module.css'; // ✅ CSS Module import
import { Eye } from '@/app/components/icons';

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        <EllipsisVertical size={24} />
      </button>

      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.item}>
            <Eye size={16} />
            <span>View Details</span>
          </div>
           <div className={styles.item}>
            <Pause size={16} />
            <span>Pause</span>
          </div>
           <div className={styles.item}>
            <Ban size={16} />
            <span>Cancel</span>
          </div>
        </div>
      )}
    </div>
  );
}
