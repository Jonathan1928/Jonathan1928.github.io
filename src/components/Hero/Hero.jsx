import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jonathan</h1>
        <p className={styles.description}>
          I'm a mechanical engineering and management student at McMaster University.
          I love to challenge myself in all aspects including intellectually, physically, and socially.
          I have experience in CAD and currently developing my skills in finite element analysis (FEA),
          computational fluid dynamics (CFD), MATLAB and by extension Simulink.  
        </p>
        <a href="mailto:jonathandemuy14@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/photo_me.jpg")}
        alt="photo_me.jpg"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
