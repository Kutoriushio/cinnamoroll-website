import React, { useEffect } from "react";
import styles from "./Gallery.module.css";
import { useState } from "react";
// import leftIcon from "../../images/left_icon.svg";
import { Link } from "react-router-dom";

export default function Gallery() {
  // Need copy pictures to make it infinite loop
  const images = [
    require("../../../../images/gallery1.jpg"),
    require("../../../../images/gallery2.jpg"),
    require("../../../../images/gallery3.jpg"),
    require("../../../../images/gallery4.jpg"),
    require("../../../../images/gallery5.jpg"),
    require("../../../../images/gallery6.jpg"),
    require("../../../../images/gallery7.jpg"),
    require("../../../../images/gallery8.png"),
    require("../../../../images/gallery1.jpg"),
    require("../../../../images/gallery2.jpg"),
    require("../../../../images/gallery3.jpg"),
    require("../../../../images/gallery4.jpg"),
    require("../../../../images/gallery5.jpg"),
    require("../../../../images/gallery6.jpg"),
    require("../../../../images/gallery7.jpg"),
    require("../../../../images/gallery8.png"),
  ];

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <h1>Gallery</h1>
        <Link to="/gallery">
          <div className={styles.buttonSee}>View More</div>
        </Link>
      </div>
      <div className={styles.galleryImage}>
        {images.map((imageUrl, index) => (
          <a href="#">
            <img key={index} src={imageUrl} alt={`Gallery ${index + 1}`} />
          </a>
        ))}
      </div>
      {/* <div className={styles.buttonGroup}>
        <button className={styles.buttonLeft}>
          <img src={leftIcon} alt="Left" onClick={handleNextImg} />
        </button>
        <button className={styles.buttonRight} onClick={handleNextImg}>
          <img src={leftIcon} alt="Right" />
        </button>
      </div> */}
    </div>
  );
}
