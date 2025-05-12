import React from "react";
import styles from "./ProjectTemplate.module.css";

export const ProjectTemplate = ({ project }) => {
  const { title, timeline, description, images = [], skills = [] } = project;

  return (
    <article className={styles.container}>

      {/* Title */}
      <h1 className={styles.title}>{title}</h1>

      {/* Timeline */}
      {timeline && <p className={styles.timeline}>Timeline: {timeline}</p>}

      {/* === Project Details === */}
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Project Details</h2>
        <p className={styles.description}>{description}</p>
      </section>

      {/* === Gallery === */}
      {images.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>Gallery</h2>
          <div className={styles.images}>
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                className={styles.image}
              />
            ))}
          </div>
        </section>
      )}

      {/* === Key Skills === */}
      {skills.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>Key Skills</h2>
          <ul className={styles.skills}>
            {skills.map((skill, i) => (
              <li key={i} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </section>
      )}

    </article>
  );
};
