import React from "react";
import introduceImg from "../../../images/introduce_img.png";
import styles from "./SideTable.module.css";

export default function Information() {
  return (
    <div className={styles.infoTable}>
      <h2>Cinnamoroll</h2>
      <img src={introduceImg} alt="cinanmoroll" />
      <div className={styles.infoTableItem}>
        <h3> Japanese Name</h3>
        <div className={styles.infoTableItemContent}>シナモロール</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Alternate Names</h3>
        <div className={styles.infoTableItemContent}>
          シナモン <br />
          (Cinnamon) (Real name)
        </div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Birthday</h3>
        <div className={styles.infoTableItemContent}>March 6</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Place of Birth</h3>
        <div className={styles.infoTableItemContent}>
          The clouds in the sky{" "}
        </div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Gender</h3>
        <div className={styles.infoTableItemContent}>Male</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Universe</h3>
        <div className={styles.infoTableItemContent}>Cinnamoroll Universe</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Residence</h3>
        <div className={styles.infoTableItemContent}>Shukuru Town</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Species</h3>
        <div className={styles.infoTableItemContent}>Dog</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Height</h3>
        <div className={styles.infoTableItemContent}> 21.5cm</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Appearance</h3>
        <div className={styles.infoTableItemContent}>
          Little, chubby, shy, white fur, blue eyes, pink cheeks, plump and
          curly tail that resembles a cinnamon roll
        </div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Charm Point</h3>
        <div className={styles.infoTableItemContent}>
          His cinnamon roll shaped tail
        </div>
      </div>
      <h2>Personality</h2>
      <div className={styles.infoTableItem}>
        <h3> Hobbies</h3>
        <div className={styles.infoTableItemContent}>Eating</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Skills</h3>
        <div className={styles.infoTableItemContent}>
          Flying with his long ears
        </div>
      </div>
      <h2>Family and Friends</h2>
      <div className={styles.infoTableItem}>
        <h3> Mother</h3>
        <div className={styles.infoTableItemContent}>The Sky</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Mother</h3>
        <div className={styles.infoTableItemContent}>The Sun</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Siblings</h3>
        <div className={styles.infoTableItemContent}>
          Poron (Older Sister), <br />
          Unnamed Cloud Siblings
        </div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Owner</h3>
        <div className={styles.infoTableItemContent}>Anna</div>
      </div>
      <h2>Creation</h2>
      <div className={styles.infoTableItem}>
        <h3> Debut</h3>
        <div className={styles.infoTableItemContent}>2002</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Created By</h3>
        <div className={styles.infoTableItemContent}>Miyuki Okumura</div>
      </div>
      <div className={styles.infoTableItem}>
        <h3> Voiced By</h3>
        <div className={styles.infoTableItemContent}>
          Taeko Kawata
          <br />
          Jenny Yokobori
        </div>
      </div>
    </div>
  );
}
