import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { UseRoutes,Router,Routes } from "react-router-dom"; 

import Home from "./Home";
import Dashboard from "./Sidebar";

function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
