import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import NewEntry from "./NewEntry";
import MonthlyView from "./MonthlyView"
import Homepage from "./Homepage";
import NewCategory from "./NewCategory";
import '../styles/nav.css';

//For Navbar view
export default function Navbar(){
  return(
      <div className='nav'>
        <BrowserRouter>
        <nav>
        I am the NavBar! <br/>
          <button><Link to="/">Homepage</Link></button> 
          <button><Link to="/new-entry"> New Entry </Link></button> 
          <button><Link to="/new-category"> Add Category </Link></button> 
          <button><Link to="/monthly-view">Monthly View</Link></button> 
          <button>Logout</button>
        </nav>

        <div className="homepage">
          <Route exact path="/" component={Homepage}></Route>
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
