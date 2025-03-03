import React from "react";
import "./sidebar.css";
import './head.css'
import Head from './Head'
import { AiOutlineSetting } from "react-icons/ai";

const Sidebar= () => (
  <>
  <Head/>
  <div className="sidebar">

  

    <div className="sidebar-list">
        <div className="sidebar-list-item"> <AiOutlineSetting className="icon" /> Admin Setting</div>
      
      <div className="sidebar-list-item">User Settings</div>
      <div className="sidebar-list-item">Course Details</div>
      <div className="sidebar-list-item">Manage Courses</div>

      <div className="sidebar-list-item">Sign-out</div>
    </div>

    
    
    
  </div>

  




  </>
);







export default Sidebar;
