import React from "react";
import SideTable from "./components/SideTable";
import InformationPara from "./components/InformationPara";
import styles from "./IntroducePage.module.css";

export default function IntroducePage() {
  return (
    <div className="main-content">
      <div className={styles.information}>
        <h1>Cinnamoroll</h1>
        <div className={styles.infoContent}>
          <InformationPara />
          <SideTable />
        </div>
      </div>
    </div>
  );
}
