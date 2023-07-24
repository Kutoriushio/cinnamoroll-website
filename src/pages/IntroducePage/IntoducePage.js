import React from "react";
import SideTable from "./components/SideTable";
import InformationPara from "./components/InformationPara";
import styles from "./IntroducePage.module.css";
import { useEffect } from "react";

export default function IntroducePage() {
  // Back to top when loading a page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="main-content">
      <div className={styles.information}>
        <h1>Cinnamoroll</h1>
        <div className={styles.infoContent}>
          <SideTable />
          <InformationPara />
        </div>
      </div>
    </div>
  );
}
