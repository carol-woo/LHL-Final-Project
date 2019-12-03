import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import '../styles/nav.css';
import "../styles/App.css";
import Homepage from "./Homepage";
import axios from "axios"; 
import DrawerToggleButton from "./SideDrawer/DrawerToggleButton";

import drawerToggleButton from "./SideDrawer/DrawerToggleButton";

//For Navbar view
export default function Navbar(props){ 

  const nukeMyLogout = async() => {    
    try{
      let response = await axios({
        method: 'get',
        url: `/logout`,
        // withCredentials: true,
      })
        console.log("yay i work in nukeMyLogout")
        return response
      }catch(error){
        console.log(error)
      }
  }


  return( 
      <div className='toolbar'>
        <BrowserRouter>  
        <nav className="toolbar_navigation">
          <div>
            <DrawerToggleButton click={props.drawerClickHandler}/>
          </div>
          <div className="toolbar_logo">
            <Link to="/home"><img src={require("../styles/Images/CIRCLE-07.png")} id="navbar_logo" /></Link>
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
