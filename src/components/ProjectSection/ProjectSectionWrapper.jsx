import React, { useEffect, useContext } from "react";
import ProjectList from "./ProjectList";
import ProjectSectionHeader from "./ProjectSectionHeader";
import { Context } from "../../context/Context";
import { getProjects } from "../../server/api";
import { loadProjects } from "../../reducer/reducer";

export default function ProjectSectionWrapper() {
  const [{ projects, view }, dispatch] = useContext(Context);

  useEffect(() => {
    getProjects().then((projects) => dispatch(loadProjects(projects)));
  }, [dispatch]);

  return (
    <div className="projects-section">
      <ProjectSectionHeader />
      <div
        className={
          view === "grid"
            ? "project-boxes jsGridView"
            : "project-boxes jsListView"
        }
      >
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
