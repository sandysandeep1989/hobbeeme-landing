import { Modal } from 'react-bootstrap';
import styles from './TimeSlotModal.module.css';
import { useState } from 'react';

export default function TimeSlotModal({ show, onHide, onSelectTime }) {
  const slots = [
    '6:30 AM – 8:30 AM',
    '7:00 AM – 9:00 AM',
    '8:00 AM – 10:00 AM',
    '8:30 AM – 10:30 AM',
    '9:45 AM – 11:45 AM',
    '10:15 AM – 12:15 PM',
    '10:45 AM – 12:45 PM',
    '11:30 AM – 1:30 PM',
    '12:00 PM – 2:00 PM',
    '1:00 PM – 3:00 PM',
    '1:30 PM – 3:30 PM',
    '2:30 PM – 4:30 PM',
    '3:30 PM – 5:30 PM',
    '4:00 PM – 6:00 PM',
    '5:00 PM – 7:00 PM'
  ];

  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelect = (slot) => {
    setSelectedSlot(slot);
    onSelectTime(slot);
  };

  return (
    <Modal show={show} onHide={onHide} centered dialogClassName={styles.modalSize} >
      <Modal.Body className={styles.modalBody}>
        <h5 className={styles.title}>Select a time Slot</h5>
        <div className={styles.slotGrid}>
          {slots.map((slot) => (
            <div
              key={slot}
              className={`${styles.slotItem} ${
                selectedSlot === slot ? styles.active : ''
              }`}
              onClick={() => handleSelect(slot)}
            >
              {slot}
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}
