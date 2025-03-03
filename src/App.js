import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom"; 

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./pages/Sidebarcomponent/Sidebar";
import Head from "./pages/Sidebarcomponent/Head";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard2" element={<Head />} />

        <Route
          path="/dashboard"
          element={
            <div className="flex">
              <Sidebar />
              <div >
                <Dashboard />
              </div>
            </div>
            
          }
        />
        

      
          
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
