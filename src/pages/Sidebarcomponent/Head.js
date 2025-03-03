import React from 'react'
import img1 from '../../images/file.png'
import './head.css'
import { useState, useEffect } from 'react';



function Head() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    },60000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  
  return (
    <div className='head'>
       <div className='logo3'>
        <img src={img1} alt="G+ Education Logo" className="logo3" />
       </div>
       
       <div className="live-time">
       {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}
       
      </div>

    </div>
  )
}

export default Head