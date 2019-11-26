import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import NewEntry from "./NewEntry";
import MonthlyView from "./MonthlyView"
import Homepage from "./Homepage";
import NewCategory from "./NewCategory";
import Login from "./Login";
import Register from "./Register";
import '../styles/nav.css';

//For Navbar view
export default function Navbar(){
  return(
      <div className='nav'>
        <BrowserRouter>
        <nav className="side_nav_bar">
          <h1>Cache My Budget</h1>
          <ul className="nav_ul">
            <li className="nav_li"><Link to="/log-in">Login</Link></li>
            <li className="nav_li"><Link to="/register">Register</Link></li>
            <li className="nav_li"><Link to="/">Homepage</Link></li> 
            <li className="nav_li"><Link to="/new-entry"> New Entry </Link></li> 
            <li className="nav_li"><Link to="/new-category"> Add Category </Link></li> 
            <li className="nav_li"><Link to="/monthly-view">Monthly View</Link></li> 
            <li className="nav_li">Logout</li>
          </ul>
        </nav>

        <div className="homepage">
          <Route exact path="/" component={Homepage}></Route>
        </div>

        <div className="register">
          <Route path="/register" component={Register}></Route>
        </div>

        <div className="login">
          <Route path="/log-in" component={Login}></Route>
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
