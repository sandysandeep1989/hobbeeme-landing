import React from "react";
import styles from "./page.module.css";
import CardCarousel from "./CardCarousel";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const page = () => {
  return (
    <>
      <Header />
      <div className={styles.createadscontainer}>
        <div className={styles.createadsinner}>
          <CardCarousel />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
