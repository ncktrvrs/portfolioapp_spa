import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar";
import ProjectModal from "../components/ProjectSection/ProjectModal";
import AddProject from "../components/ProjectSection/AddProject";
import MessagesSection from "../components/MessageSection/MessagesSection";
import MessagesBtn from "../components/MessageSection/MessagesBtn";
import ProjectSectionWrapper from "../components/ProjectSection/ProjectSectionWrapper";

import messagesArr from "../data/messages.json";

export default function Dashboard() {
  const [messages, setMessages] = useState(messagesArr);
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  function toggleMessagesSection() {
    setShow(!show);
  }

  function toggleModalWindow() {
    setVisible(!visible);
  }

  return (
    <div className="app-container">
      <Header toggleModalWindow={toggleModalWindow} />
      <ProjectModal visible={visible} setVisible={setVisible}>
        <AddProject toggleModalWindow={toggleModalWindow} />
      </ProjectModal>
      <MessagesBtn toggleMessagesSection={toggleMessagesSection} />
      <div className="app-content">
        <Sidebar />
        <Outlet/>
        <MessagesSection
          messages={messages}
          show={show}
          toggleMessagesSection={toggleMessagesSection}
        />
      </div>
    </div>
  );
}
