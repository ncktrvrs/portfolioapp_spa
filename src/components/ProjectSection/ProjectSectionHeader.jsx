import React, { useContext, useMemo } from "react";
import { Context } from "../../context/Context";
import { toggleProjectsView } from "./../../reducer/reducer";

const { format } = require("date-fns");

export default function ProjectSectionHeader() {
  const [{ projects, view }, dispatch] = useContext(Context);

  // calculation projects in progress, upcoming and total
  // const projectsInProgress = projects.filter(
  //   (project) => project.status === "in progress"
  // ).length;

  // const projectsUpcoming = projects.filter(
  //   (project) => project.status === "upcoming"
  // ).length;

  // const projectsTotal = projectsInProgress + projectsUpcoming;

  // calculation projects info using useMemo hook
  const { projectsInProgress, projectsUpcoming, projectsTotal } =
    useMemo(() => {
      const projectsInProgress = projects.filter(
        (project) => project.status === "in progress"
      ).length;
      const projectsUpcoming = projects.filter(
        (project) => project.status === "upcoming"
      ).length;
      const projectsTotal = projectsInProgress + projectsUpcoming;
      return { projectsInProgress, projectsUpcoming, projectsTotal };
    }, [projects]);

  return (
    <>
      <div className="projects-section-header">
        <p>Projects</p>
        <p className="time">{format(new Date(), "MMMM dd")}</p>
      </div>
      <div className="projects-section-line">
        <div className="projects-status">
          <div className="item-status">
            <span className="status-number">{projectsInProgress}</span>
            <span className="status-type">In Progress</span>
          </div>
          <div className="item-status">
            <span className="status-number">{projectsUpcoming}</span>
            <span className="status-type">Upcoming</span>
          </div>
          <div className="item-status">
            <span className="status-number">{projectsTotal}</span>
            <span className="status-type">Total Projects</span>
          </div>
        </div>
        <div
          className="view-actions"
          onClick={() => dispatch(toggleProjectsView(view))}
        >
          <button
            className={
              view === "list"
                ? "view-btn list-view active"
                : "view-btn list-view"
            }
            title="List View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-list"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
          </button>
          <button
            className={
              view === "grid"
                ? "view-btn grid-view active"
                : "view-btn grid-view"
            }
            title="Grid View"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-grid"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
