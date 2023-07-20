import React from "react";
import styles from "./Gallery.module.css";
import { useState } from "react";
import leftIcon from "../../images/left_icon.svg";

export default function Gallery() {
  const [images, setImages] = useState([
    require("../../images/gallery1.jpg"),
    require("../../images/gallery2.jpg"),
    require("../../images/gallery3.jpg"),
    require("../../images/gallery4.jpg"),
    require("../../images/gallery5.jpg"),
    require("../../images/gallery6.jpg"),
    require("../../images/gallery7.jpg"),
    require("../../images/gallery8.png"),
  ]);

  function handleNextImage() {
    const nextImages = images.slice(1);
    setImages([...nextImages, images[0]]);
  }

  function handlePrevImage() {
    const prevImages = images.slice();
    prevImages.unshift(prevImages.pop());
    console.log(prevImages);
    setImages(prevImages);
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.galleryHeader}>
        <h1>Gallery</h1>
        <a href="#">
          <div className={styles.buttonSee}>View More</div>
        </a>
      </div>
      <div className={styles.galleryImage}>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Gallery ${index + 1}`} />
        ))}
      </div>
      <div className={styles.buttonGroup}>
        <button className={styles.buttonLeft} onClick={handlePrevImage}>
          <img src={leftIcon} alt="Left" />
        </button>
        <button className={styles.buttonRight} onClick={handleNextImage}>
          <img src={leftIcon} alt="Right" />
        </button>
      </div>
    </div>
  );
}
