import React from "react";
import AddNewProjectBtn from "./AddNewProjectBtn";
import Search from "./Search";

export default function Header({ toggleModalWindow }) {
  return (
      <div className="app-header">
        <div className="app-header-left">
          <span className="app-icon"></span>
          <p className="app-name">Portfolio</p>
          <Search />
        </div>
        <div className="app-header-right">
          <button className="mode-switch" title="Switch Theme">
            <svg
              className="moon"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>
        <AddNewProjectBtn toggleModalWindow={ toggleModalWindow } />
          <button className="notification-btn">
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
              className="feather feather-bell"
            >
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <button className="profile-btn">
            <img
              src="https://assets.codepen.io/3306515/IMG_2025.jpg"
              alt="none"
            />
            <span>Zooey D.</span>
          </button>
        </div>
      </div>
  );
}
