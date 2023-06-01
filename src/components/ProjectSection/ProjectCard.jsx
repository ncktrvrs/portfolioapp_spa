import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { deleteProject } from "../../reducer/reducer";
import { differenceInDays } from "date-fns";
const { formatDateFromJson } = require("../../utils/formatDateFromJson");

export default function ProjectCard({ project }) {
  const [projects, dispatch] = useContext(Context);

  const bgClass =
    project.status === "in progress"
      ? "project-box in-progress"
      : "project-box upcoming";

  // calculate different between actual date and project deadline
  let dateDiff = differenceInDays(new Date(project.deadline.split("-")), new Date());
  dateDiff = dateDiff > 0 ? dateDiff : 0

  return (
    <div className="project-box-wrapper">
      <div className={bgClass}>
        <div className="project-box-header">
          <span>{formatDateFromJson(project.date, "MMMM dd, yyyy")}</span>
          <div className="more-wrapper">
            <button
              className="close-btn"
              onClick={() => dispatch(deleteProject(project.id))}
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
                className="feather feather-x-circle"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
            </button>
          </div>
        </div>
        <div className="project-box-content-header">
          <p className="box-content-header">{project.title}</p>
          <p className="box-content-subheader">{project.type}</p>
        </div>
        <div className="box-progress-wrapper">
          <p className="box-progress-header">Progress</p>
          <div className="box-progress-bar">
            <span
              className="box-progress"
              style={{
                width: `${project.progress}%`,
                backgroundColor: "#ff942e",
              }}
            ></span>
          </div>
          <p className="box-progress-percentage">{project.progress}%</p>
        </div>
        <div className="project-box-footer">
          <div className="participants">
            {project.participants.map((participant) => {
              const { photo_url } = participant;

              const imgKey = `${project.id}_${participant.id}`;
              return <img key={imgKey} src={photo_url} alt="participant" />;
            })}
            <button className="add-participant" style={{ color: "#ff942e" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-plus"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
          <div className="days-left" style={{ color: "#ff942e" }}>
            {dateDiff} Days Left
          </div>
        </div>
      </div>
    </div>
  );
}
