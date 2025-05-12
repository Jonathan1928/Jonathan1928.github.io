import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";
import { ProjectTemplateWrapper } from "./components/ProjectTemplate/ProjectTemplateWrapper";
import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Routes>
        {/* Home page: bundles your Hero/About/Projects/etc */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />

        {/* Detail page for /projects/mechanical/m1, /projects/software/x, etc */}
        <Route
          path="/projects/:category/:projectId"
          element={<ProjectTemplateWrapper />}
        />

        {/* Optional fallback */}
        <Route path="*" element={<p>404: Page not found</p>} />
      </Routes>
    </div>
  );
}
