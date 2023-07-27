import React, { useEffect, useState } from "react";
import styles from "./GalleryPage.module.css";

export default function GalleryPage() {
  const [data, setData] = useState([]);
  const url = "https://d10wfvpnh9c4my.cloudfront.net/images/gallery/";

  useEffect(() => {
    fetch("http://localhost:8080/gallery/all")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error", error));

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-content">
      <div className={styles.galleryContainer}>
        <div className={styles.galleryTitle}>
          <h1>Cinnamoroll's Gallery</h1>
          <button>Upload</button>
        </div>
        <div className={styles.galleryImage}>
          {data.map((file) => (
            <a href="#" key={file.id}>
              <img
                src={`${url}${file.url}`}
                key={file.id}
                alt={`gallery${file.id}`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
