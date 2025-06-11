import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./page.module.css";
import { Upload } from "lucide-react";
const page = () => {
  return (
    <>
      <Header />
      <div className={styles.inputcontainer}>
        <div className={styles.inputinnercontainer}>
          <div className={styles.inputheading}>Finalize the ad details.</div>
          <div className={styles.inputfieldtext}>
            <div className={styles.adsinputdiv}>
              <div className={styles.inputtitleinner}>Ads Title*</div>
              <input
                placeholder="Enter Ads title"
                className={styles.placeholderset}
              ></input>
            </div>
            <div className={styles.adsinputdiv}>
              <div className={styles.inputtitleinner}>Class / Experience </div>
              <select className={styles.placeholderset}>
                <option value="">Select Class / Experience </option>
                <option value="ad1">Class</option>
                <option value="ad2">Experience</option>
              </select>
            </div>
            <div className={styles.adsinputdiv}>
              <div className={styles.inputtitleinner}>On Tap Action (CTA)</div>
              <input
                placeholder="Please provide the URL to which you would like to redirect the user."
                className={styles.placeholderset}
              ></input>
            </div>
            <div className={styles.adsinputdiv}>
              <div className={styles.inputtitleinner}>Upload Poster*</div>
              <div className={styles.fileInputWrapper}>
                <input
                  id="file-upload"
                  type="file"
                  className={styles.fileInput}
                />
                <input
                  type="text"
                  readOnly
                  placeholder="No file chosen"
                  className={styles.fileNameDisplay}
                />
                <label htmlFor="file-upload" className={styles.chooseButton}>
                  <Upload size={16} /> Upload
                </label>
              </div>
              <span className={styles.uploadlowerinfo}>
                Accept: JPG, PNG, GIF
              </span>
            </div>
            <div className={styles.adsinputdiv}>
              <div className={styles.schedulingstyle}>Scheduling</div>
              <div className={styles.dateinputfeild}>
                <div className={styles.datelabelset}>
                  <label htmlFor="start-date">Start Date</label>
                  <input type="date" id="start-date" name="start-date"  className={styles.dateinputbarset}/>
                </div>
                <div className={styles.datelabelset}>
                  <label htmlFor="end-date">End Date</label>
                  <input type="date" id="end-date" name="end-date" className={styles.dateinputbarset} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
