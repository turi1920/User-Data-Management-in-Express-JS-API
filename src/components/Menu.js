import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav>
      <Link 
        to="/" 
        className={activeLink === "userdata" ? "active" : ""} 
        onClick={() => handleClick("userdata")}
      >
        UserData
      </Link>
      <Link 
        to="/adddata" 
        className={activeLink === "adddata" ? "active" : ""} 
        onClick={() => handleClick("adddata")}
      >
        AddData
      </Link>
      <Link 
        to="/searchdata" 
        className={activeLink === "searchdata" ? "active" : ""} 
        onClick={() => handleClick("searchdata")}
      >
        SearchData
      </Link>
    </nav>
  );
}

export default Menu;
