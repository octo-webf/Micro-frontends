import React from "react";
import styles from "../styles/previewProduct.module.css";

export default function PreviewProductSkeleton() {
  return (
    <li>
      <div className={styles.container}>
        <div className={styles.image_skel}></div>
        <div className={styles.description}>
          <div className={styles.title_skel}></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.tags_skel}></div>
            <div className={styles.price_skel}></div>
          </div>
        </div>
      </div>
    </li>
  );
}
