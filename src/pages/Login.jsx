import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handlerOnSubmit(event) {
    event.preventDefault();

    localStorage.setItem("token", "USERSTOKEN");
    navigate("/dashboard");
  }

  return (
    <div className="login-section">
      <div className="project-add-card-header">
        <h3>LOGIN</h3>
      </div>
      <form className="new-project" onSubmit={handlerOnSubmit}>
        <label htmlFor="username">Name</label>
        <div className="search-wrapper new-project">
          <input
            id="username"
            className="search-input"
            type="text"
            placeholder="Enter your name"
            name="username"
          />
        </div>

        <label htmlFor="pass">Password</label>
        <div className="search-wrapper new-project">
          <input
            id="pass"
            className="search-input"
            type="password"
            placeholder="Enter your password"
            name="pass"
          />
        </div>

        <button type="submit" className="create-project">
          Submit
        </button>
      </form>
    </div>
  );
}
