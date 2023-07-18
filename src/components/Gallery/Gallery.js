import React from "react";
import styles from "./Gallery.module.css";
import leftIcon from "../../images/left_icon.svg";

export default function Gallery() {
  const imageUrls = [
    require("../../images/gallery1.jpg"),
    require("../../images/gallery2.jpg"),
    require("../../images/gallery3.jpg"),
    require("../../images/gallery4.jpg"),
  ];
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <h1>Gallery</h1>
        <div className={styles.buttonSee}>View More</div>
      </div>
      <div className={styles.galleryImage}>
        {imageUrls.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.buttonLeft}>
          <img src={leftIcon} alt="Left" />
        </div>
        <div className={styles.buttonRight}>
          <img src={leftIcon} alt="Right" />
        </div>
      </div>
    </div>
  );
}
