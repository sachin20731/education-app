import React from "react";
import LoginForm from "./LoginForm";
import "./Home.css";
import background from "../images/annie-spratt-OIuCXxx08yg-unsplash.jpg";
import logo from "../images/file.png";

const Home = () => {
  return (
    <div className="home-container">
    

      <div className="login-box">
        <LoginForm />
        
      </div>
      <div className="css">
      <img src={logo} alt="G+ Education Logo" className="logo" /> 
        
      
      </div>
      <div className="ss-home">
          <h1 className="ss1"> Welcome To <br/> <span className="ss">  G+ Education</span></h1>
      </div>
        <div className="ss-head"> G+ Education Is One oF The Best Online learning Platform</div>
    </div>
  );
};

export default Home;
