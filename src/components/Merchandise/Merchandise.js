import React from "react";
import styles from "./Merchandise.module.css";

export default function Merchandise() {
  const products = [
    {
      name: "Loungefly x Cinnamoroll Mini Backpack",
      imageUrl: require("../../images/product2.jpg"),
      price: "$80",
    },
    {
      name: 'Cinnamoroll 10" Angel Plush',
      imageUrl: require("../../images/product1.jpg"),
      price: "$29",
    },
    {
      name: "Cinnamoroll Plush Mini Handbag",
      imageUrl: require("../../images/product3.jpg"),
      price: "$29",
    },
    {
      name: "Cinnamoroll Classic Calculator",
      imageUrl: require("../../images/product4.jpg"),
      price: "$34",
    },
    {
      name: 'Cinnamoroll 10" Plush (Fairy Rabbit Series)',
      imageUrl: require("../../images/product5.jpg"),
      price: "$44",
    },
  ];

  return (
    <div className={styles.merchandise}>
      <div className={styles.merchandiseHeader}>
        <h1>Merchandise</h1>
      </div>
      <div className={styles.merchandiseItem}>
        {products.map((product, index) => (
          <div className={styles.merchandiseThumbnail}>
            <div className={styles.merchandiseImage}>
              <img
                key={index}
                src={product.imageUrl}
                alt={`Product ${index + 1}`}
              />
            </div>
            <div className={styles.productInfo}>
              <div className={styles.productTitle}>{product.name} </div>
              <div className={styles.productPrice}>{product.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonMore}>
        <a href="#">More Items</a>
      </div>
    </div>
  );
}
