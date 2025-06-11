"use client";
import { useRouter, usePathname } from "next/navigation";
import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/vendor/ads-management/createads") {
      router.push("/vendor/ads-management/inputads");
    } else if (pathname === "/vendor/ads-management/inputads") {
      router.push("/vendor/ads-management/paymentsads");
    }
  };

  return (
    <div className={styles.footervendor}>
      <button onClick={handleClick} className={styles.vendorfooterBtn}>
        Next
      </button>
    </div>
  );
};

export default Footer;
