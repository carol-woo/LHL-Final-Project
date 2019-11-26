import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import NewEntry from "./NewEntry";
import MonthlyView from "./MonthlyView"
import Homepage from "./Homepage";
import NewCategory from "./NewCategory";
import Login from "./Login";
import Register from "./Register";
import '../styles/nav.css';
import axios from "axios";

//For Navbar view
export default function Navbar(){

  const nukeMyLogout = async() => {
    try{
      let response = await axios({
        method: 'post',
        url: `/logout`,
        withCredentials: true,
      })
        console.log("yay i work in nukeMyLogout")
        return response
      }catch(error){
        console.log(error)
      }
  }


  return(
      <div className='nav'>
        <BrowserRouter>
        <nav className="side_nav_bar">
          <h1>Cache My Budget</h1>
          <ul className="nav_ul">
            <li className="nav_li"><Link to="/login">Login</Link></li>
            <li className="nav_li"><Link to="/register">Register</Link></li>
            <li className="nav_li"><Link to="/">Homepage</Link></li> 
            <li className="nav_li"><Link to="/new-entry"> New Entry </Link></li> 
            <li className="nav_li"><Link to="/new-category"> Add Category </Link></li> 
            <li className="nav_li"><Link to="/monthly-view">Monthly View</Link></li> 
            <li className="nav_li"><button type ="submit" onClick={nukeMyLogout}>Logout</button></li>
          </ul>
        </nav>

        <div className="homepage">
          <Route exact path="/" component={Homepage}></Route>
        </div>

        <div className="register">
          <Route path="/register" component={Register}></Route>
        </div>

        <div className="login">
          <Route path="/login" component={Login}></Route>
        </div>
        
        <div className="new-entry">
          <Route path="/new-entry" component={NewEntry}></Route>
        </div>

        <div>
          <Route path="/new-category" component={NewCategory}></Route>
        </div>
        
        <div className="monthly-view">
          <Route path="/monthly-view" component={MonthlyView}></Route>
        </div>


        </BrowserRouter>
      </div>
  )
}
