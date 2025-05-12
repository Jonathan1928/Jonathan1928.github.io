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
                The Earth is a beautiful place with it's countless geological formations, 
                aquatic features, flora, and fauna. By being able to see a small glimpse
                of these, I have incredible admiration of our planet and want to make sure countless
                generations get to witness it as well.
                In the future I would like to contribute to work that I know helps restore the Earth in some manner. 
                The Earth has shown incredibe resiliance and ability to recover, showing hope for its longevity. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cooking.png")} alt="Cooking icon" />
            <div className={styles.aboutItemText}>
              <h3>Culinary Passion</h3>
              <p>
                From a young age I have loved cooking and especially eating despite being kind of a picky eater.
                I find that cooking allows me to physical extress my creativity and love for food in a unique way. 
                Tasting food goes far beyond its nurtious values, but it is an experience given to you by the chef, 
                hand crafted because they think it will make you feel comforted. 
                Truly delicous food can be remembered for a lifetime or bring you back to a specifc time and place.
                Showcasing that food not only warms the stomach, but also the soul. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
