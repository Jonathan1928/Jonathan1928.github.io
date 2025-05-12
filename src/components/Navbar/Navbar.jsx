import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
         <li>
  <button 
    className={styles.menuLink}
    onClick={() => {
      document.getElementById("about").scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }}
  >
    About
  </button>
</li>
<li>
  <button 
    className={styles.menuLink}
    onClick={() => {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }}
  >
    Projects
  </button>
</li>
<li>
  <button 
    className={styles.menuLink}
    onClick={() => {
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }}
  >
    Skills
  </button>
</li>
<li>
  <button 
    className={styles.menuLink}
    onClick={() => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }}
  >
    Contact
  </button>
</li>
        </ul>
      </div>
    </nav>
  );
};
