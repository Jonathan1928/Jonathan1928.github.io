import React from 'react';

import styles from './Skills.module.css';
import { getImageUrl } from '../../utils'; 

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <img
            src={getImageUrl('skills/inventor.png')}
            alt="Autodesk Inventor icon"
            className={styles.icon}
          />
          <span className={styles.label}>Autodesk Inventor</span>
        </li>
        <li className={styles.item}>
          <img
            src={getImageUrl('skills/python.png')}
            alt="Python icon"
            className={styles.icon}
          />
          <span className={styles.label}>Python</span>
        </li>
        <li className={styles.item}>
          <img
            src={getImageUrl('skills/MATLAB.png')}
            alt="MATLAB icon"
            className={styles.icon}
          />
          <span className={styles.label}>MATLAB</span>
        </li>
        <li className={styles.item}>
          <img
            src={getImageUrl('skills/simulink.png')}
            alt="simulink icon"
            className={styles.icon}
          />
          <span className={styles.label}>Simulink</span>
        </li>
        <li className={styles.item}>
          <img
            src={getImageUrl('skills/ansys.png')}
            alt="ansys icon"
            className={styles.icon}
          />
          <span className={styles.label}>Ansys</span>
        </li>
      </ul>
    </section>
  );
};
