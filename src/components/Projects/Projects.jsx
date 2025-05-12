import React from "react";

import styles from "./Projects.module.css";

import { CategoryCard } from "./CategoryCard";
import categories from "../../data/categories.json";

export const Projects = () => (
  <section className={styles.container} id="projects">
    <h2 className={styles.title}>Projects</h2>
    <div className={styles.projects}>
      {categories.map(cat => (
        <CategoryCard key={cat.id} category={cat} />
      ))}
    </div>
  </section>
);