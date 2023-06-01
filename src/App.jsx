import React from "react";
import Dashboard from "./components/Dashboard";
import { ContextComponent } from "./context/Context";

export default function App() {
  return (
    <ContextComponent>
      <Dashboard />
    </ContextComponent>
  );
}
