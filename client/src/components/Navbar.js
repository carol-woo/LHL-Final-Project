import React from "react";
import {Link, BrowserRouter } from "react-router-dom";
import '../styles/nav.css';
import "../styles/App.css";
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

//For Navbar view
export default function Navbar(props){ 
  const nukeMyLogout = async() => {   
    window.location.href = '/login'
  }

  return( 
      <div className='toolbar'>
        <BrowserRouter>  
        <nav className="toolbar_navigation">
          <div>
            <DrawerToggleButton click={props.drawerClickHandler}/>
          </div>
          <div className="toolbar_logo">
            <Link to="/home"><img src={require("../styles/Images/CIRCLE-08.png")} id="navbar_logo" /></Link>
          </div>
          <div className="spacer"/>
          <div className="toolbar_navigation_items">
            <ul className="nav_ul">
              <li className="nav_li"><button className="logout" type ="submit" onClick={nukeMyLogout}>Logout</button></li>
            </ul>
          </div>
        </nav>


        </BrowserRouter>
      </div>
  )
}
