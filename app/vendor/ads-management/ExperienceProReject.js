import React, { useState } from "react";
import styles from "./ExperienceProReject.module.css";
import { Ban, Pause } from "lucide-react";

export default function ExperienceProReject({ open, onOpenChange, status }) {
  const [spotName, setSpotName] = useState("");

  const handleSubmit = () => {
    // Submit logic here
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={() => onOpenChange(false)}>
      <div
        className={styles.dialog}
        onClick={(e) => e.stopPropagation()} // Prevent click inside dialog from closing
      >
        <div className={styles.header}>
          <div className={styles.iconWrap}>
            {status === "pause" ? (
              <Pause size={48} color="red" />
            ) : (
              <Ban size={48} color="red" />
            )}
          </div>
          <h2 className={styles.title}>
            {status === "pause"
              ? "Are you sure you want to Pause this Ads?"
              : "Are you sure you want to Cancelled this Ads?"}
          </h2>
          <p className={styles.pausepopp}>This action cannot be undone.</p>
        </div>

        {/* <div className={styles.formGroup}>
          <label htmlFor="remarks">Remarks</label>
          <textarea
            id="remarks"
            placeholder="Enter remark"
            value={spotName}
            onChange={(e) => setSpotName(e.target.value)}
            className={styles.textarea}
          />
        </div> */}

        <div className={styles.footer}>
          <button
            className={`${styles.button} ${styles.cancel}`}
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </button>
          <button
            className={`${styles.button} ${styles.reject}`}
            onClick={handleSubmit}
          >
            {status === "pause" ? "Yes, Pause" : "Yes, Cancel"}
          </button>
        </div>
      </div>
    </div>
  );
}
