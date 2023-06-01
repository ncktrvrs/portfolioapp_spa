import React from "react";
import MessageList from "./MessageList";

export default function MessagesSection({ show, toggleMessagesSection }) {
  return (
    <div className={show ? "messages-section show" : "messages-section"}>
      <div className="projects-section-header">
        <p>Client Messages</p>
        <button className="close-btn" onClick={toggleMessagesSection}>
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
      <div className="messages">
        <MessageList />
      </div>
    </div>
  );
}
