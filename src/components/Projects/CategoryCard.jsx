import React from "react";
import styles from "./CategoryCard.module.css";
import { Link } from "react-router-dom";

export const CategoryCard = ({ category: { title, imageSrc, items } }) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.list}>
        {items.map(({ id, label, link }) => (
          <li key={id} className={styles.item}>
            <Link to={link} className={styles.button}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
