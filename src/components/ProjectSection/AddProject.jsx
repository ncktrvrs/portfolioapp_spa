import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { addProject } from "../../reducer/reducer";
import { v4 as uuidv4 } from "uuid";
import { differenceInDays } from "date-fns";

export default function AddProject({ toggleModalWindow }) {

  const [, dispatch] = useContext(Context);

  // three different states for each form field  
  // const [projectTitle, setProjectTitle] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [deadline, setDeadline] = useState("");

  // a common useState for all form fields instead of three separate ones
  const [formData, setFormData] = useState({
    projectTitle: "",
    startDate: "",
    deadline: "",
  });

  const handlerOnSubmit = function (event) {
    event.preventDefault();

    const { projectTitle, startDate, deadline } = formData;

    const dateDiff = differenceInDays(
      new Date(deadline.split("-")),
      new Date()
    );

    const project = {
      id: uuidv4(),
      status: "upcoming",
      date: startDate,
      title: projectTitle,
      type: "Prototyping",
      progress: 0,
      days_before_deadline: dateDiff,
      participants: [],
    };

    dispatch(addProject(project));
    setFormData({
      projectTitle: "",
      startDate: "",
      deadline: "",
    });
    toggleModalWindow();
  };

  function handlerOnChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <div className="project-add-card-header">
        <h3>Add new project</h3>
        <button className="close-btn" onClick={toggleModalWindow}>
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
      {/* <form className="new-project" onSubmit={createProject}> */}
      <form className="new-project" onSubmit={handlerOnSubmit}>
        <label htmlFor="title">Project title</label>
        <div className="search-wrapper new-project">
          <input
            id="title"
            className="search-input"
            type="text"
            placeholder="Enter title"
            name="projectTitle"
            value={formData.projectTitle}
            // onChange={(event) => setProjectTitle(event.target.value)}
            // onChange={(event) => setFormData({
            //   ...formData,
            //   projectTitle: event.target.value,
            // })}
            onChange={handlerOnChange}
          />
        </div>

        <label htmlFor="startDate">Start date</label>
        <div className="search-wrapper new-project">
          <input
            id="startDate"
            className="search-input"
            type="date"
            name="startDate"
            value={formData.startDate}
            // onChange={(event) => setStartDate(event.target.value)}
            // onChange={(event) => setFormData({
            //   ...formData,
            //   startDate: event.target.value,
            // })}
            onChange={handlerOnChange}
          />
        </div>

        <label htmlFor="deadline">Deadline</label>
        <div className="search-wrapper new-project">
          <input
            id="deadline"
            className="search-input"
            type="date"
            value={formData.deadline}
            name="deadline"
            // onChange={(event) => setDeadline(event.target.value)}
            // onChange={(event) => setFormData({
            //   ...formData,
            //   deadline: event.target.value,
            // })}
            onChange={handlerOnChange}
          />
        </div>

        <button className="create-project">Create Project</button>
      </form>
    </>
  );
}
