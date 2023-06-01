import React from "react";

export default function ProjectModal({ children, visible, setVisible }) {
  return (
    <div
      className={visible ? "project-modal active" : "project-modal"}
      onClick={() => setVisible(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
