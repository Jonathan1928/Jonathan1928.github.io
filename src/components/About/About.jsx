import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/brain.png")} alt="Brain icon" />
            <div className={styles.aboutItemText}>
              <h3>Intellectually Curious</h3>
              <p>
                I am an avid learner, intrinsically motivated to understand how different mechanisms work.
                The deeper I dive into any subject, the more I discover an endless well of ideas waiting to be explored, 
                fueling my curiosity. 
                When I encounter something I do not yet understand, I know exactly how to seek out the right resources. 
                Whether it is textbooks, YouTube tutorials, or leveraging AI, 
                I am committed to grasping the underlying process, not just the end result. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/earth.png")} alt="Earth icon" />
            <div className={styles.aboutItemText}>
              <h3>Ecological Restoration</h3>
              <p>
                The Earth is a breathtaking tapestry of geological formations, winding waterways, lush vegetation, and vibrant wildlife. 
                Even a brief glimpse of these wonders has filled me with profound admiration for our planet, 
                and I want to ensure that countless generations can experience them as well. 
                I am eager to apply my engineering skills to projects that reduce our environmental footprint or restore the Earth, 
                because it is never too late to make a difference. 
                Contributing to the workforce dedicated to our planet’s renewal is where I want to focus my energy.  
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cooking.png")} alt="Cooking icon" />
            <div className={styles.aboutItemText}>
              <h3>Culinary Passion</h3>
              <p>
                From a young age, I’ve been drawn to the kitchen, finding enjoyment in the independence of cooking for myself.
                For me, cooking is a liberating creative outlet: 
                rather than following a recipe book, I improvise with whatever ingredients I find in the fridge, trusting my intuition to guide flavour and technique.
                Food is far more than just fuel—it’s an art form that tells stories, evokes memories, and offers comfort in every bite.
                A truly memorable meal can transport you back to a cherished moment or introduce you to a new world, warming both the stomach and the soul.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
