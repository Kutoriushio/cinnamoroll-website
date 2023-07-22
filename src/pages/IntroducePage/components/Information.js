import React from "react";
import introduceImg from "../../../images/introduce_img.png";
import styles from "./information.module.css";

export default function Information() {
  return (
    <div className={styles.information}>
      <h1>Cinnamoroll</h1>
      <div className={styles.infoContent}>
        <div className={styles.infoPara}>
          <p>
            Cinnamoroll (シナモロール), or Cinnamon (シナモン), is a Sanrio
            character and a member of the Cinnamoroll universe. He was born on
            March 6th, on a cloud far up in the sky. He is a small, shy and
            chubby boy dog with white fur, blue eyes, pink cheeks, a plump and
            curly tail that resembles a cinnamon roll (hence his name), and long
            ears that enable him to fly. Cinnamon is shy but friendly, and
            always wants to help out his friends when they need it. He works at
            café cinnamon, and sometimes sleeps on customers laps. Cinnamon's
            favorite food is warm, fresh cinnamon rolls. Cinnamon was deemed the
            most popular Sanrio character in 2020 - 2023, winning first place in
            the Sanrio Character Ranking.
          </p>
        </div>
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
        </div>
      </div>
      <div className={styles.navTable}>
        <div> Contents</div>
      </div>
    </div>
  );
}
