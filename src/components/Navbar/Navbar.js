import React, { useState, useEffect } from "react";
import logo from '../../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function Navbar(){



  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  //  const handleClose = () => {
  //    setAnchorEl(null);
  //  };

 



    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
             
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className= "nav-links show-nav" 
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
         
          </ul>

        </div>

      </nav>
    );
  }
