import React from "react";
import styles from "./InformationPara.module.css";
import NavTable from "./NavTable";
import InformationContent from "./InformationContent";

export default function InformationPara() {
  return (
    <div className={styles.infoPara}>
      <p>
        <span className={styles.inlineBold}>Cinnamoroll</span> (シナモロール),
        or <span className={styles.inlineBold}>Cinnamon</span>(
        <span className={styles.inlineItalic}>シナモン</span>), is a Sanrio
        character and a member of the Cinnamoroll universe. He was born on March
        6th, on a cloud far up in the sky. He is a small, shy and chubby boy dog
        with white fur, blue eyes, pink cheeks, a plump and curly tail that
        resembles a cinnamon roll (hence his name), and long ears that enable
        him to fly. Cinnamon is shy but friendly, and always wants to help out
        his friends when they need it. He works at café cinnamon, and sometimes
        sleeps on customers laps. Cinnamon's favorite food is warm, fresh
        cinnamon rolls. Cinnamon was deemed the most popular Sanrio character in
        2020 - 2023, winning first place in the Sanrio Character Ranking.
      </p>
      <NavTable />
      <InformationContent />
    </div>
  );
}
