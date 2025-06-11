"use client";
import React from "react";
import styles from "./page.module.css";
import { Plus } from "lucide-react";
import AdsTable from "./AdsTable";
import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/vendor/ads-management/createads");
  };
  return (
    <div className={styles.backgro}>
      <div className={styles.adsinnerdiv}>
        <div className={styles.adsheaderdiv}>
          <div className={styles.adsheading}>Ads Management</div>
          <button onClick={handleClick} className={styles.adsbtn}>
            <Plus /> Create New Ads
          </button>
        </div>
        <AdsTable />
      </div>
    </div>
  );
};

export default page;
