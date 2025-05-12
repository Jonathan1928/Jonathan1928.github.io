// src/components/ProjectTemplate/ProjectTemplateWrapper.jsx
import React from "react";
import { useParams } from "react-router-dom";
import categories from "../../data/categories.json";
import { ProjectTemplate } from "./ProjectTemplate";
import styles from "./ProjectTemplateWrapper.module.css";

export function ProjectTemplateWrapper() {
  const { category, projectId } = useParams();
  const categoryObj = categories.find(c => c.id === category);
  const project     = categoryObj?.items.find(p => p.id === projectId);

  if (!project) {
    return <p>Not found…</p>;
  }

  return (
    <div className={styles.pageWrapper}>
      <ProjectTemplate project={project} />
    </div>
  );
}
