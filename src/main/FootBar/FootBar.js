import React from "react";
import styles from "./FootBar.module.css";
import footer from "../../images/footer.png";
import logo from "../../images/logo.png";

export default function FootBar() {
  return (
    <div className={styles.footBar}>
      <div className={styles.backgroundImage}>
        <img src={footer} alt="footer" />
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
        <div>© 2023</div>
      </div>
      <div className={styles.developer}>Developed By Haowei Liu</div>
    </div>
  );
}
