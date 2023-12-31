import React from "react";
import styles from "./Merchandise.module.css";
import { Link } from "react-router-dom";

export default function Merchandise() {
  // get products image and information
  const products = [
    {
      name: 'Cinnamoroll 10" Angel Plush',
      imageUrl: require("../../../../images/product2.jpg"),
      price: "$80",
    },
    {
      name: "Loungefly x Cinnamoroll Mini Backpack",
      imageUrl: require("../../../../images/product1.jpg"),
      price: "$29",
    },
    {
      name: "Cinnamoroll Plush Mini Handbag",
      imageUrl: require("../../../../images/product3.jpg"),
      price: "$29",
    },
    {
      name: "Cinnamoroll Classic Calculator",
      imageUrl: require("../../../../images/product4.jpg"),
      price: "$34",
    },
    {
      name: 'Cinnamoroll 10" Plush (Fairy Rabbit Series)',
      imageUrl: require("../../../../images/product5.jpg"),
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
            <a href="#" className={styles.merchandiseImage} key={index}>
              <img
                key={index}
                src={product.imageUrl}
                alt={`Product ${index + 1}`}
              />
            </a>
            <div className={styles.productInfo}>
              <a href="#" className={styles.productTitle} key={index}>
                {product.name}
              </a>
              <div className={styles.productPrice}>{product.price}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.buttonMore}>
        <Link to="/shop">More Items</Link>
      </div>
    </div>
  );
}
