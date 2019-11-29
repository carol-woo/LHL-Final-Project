import React from 'react';
import { BrowserRouter, Link } from "react-router-dom";
import './SideDrawer.css'

const SideDrawer = props => {
let drawerClasses = 'side-drawer';

    if(props.show) {
      drawerClasses ='side-drawer open';
     }

  return (  
  <BrowserRouter>
    <nav className={drawerClasses}>
      <div id="logo_icon"></div>
      <ul>
        <li><Link to="/home" className="a">Homepage</Link></li>
        <li><Link to="/new-entry" className="a">New Entry</Link></li>
        <li><Link to="/new-category" className="a">Add Category</Link></li>
        <li><Link to="/home" className="a">Monthly View</Link></li>
      </ul>
    </nav>
  </BrowserRouter>
    );
  }    

export default SideDrawer 