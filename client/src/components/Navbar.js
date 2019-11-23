import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import App from "../App";
import NewEntry from "./NewEntry";
import MonthlyView from "./MonthlyView"
import Homepage from "./Homepage";

//For Navbar view
export default function Navbar(){
  function Appcomp (){
    return <App />
  }
  function NewEntryComp() {
    return <NewEntry />
  }
  return(
      <div className='nav'>
        <BrowserRouter>
        I am the NavBar!
        <nav>
          <button><Link to="/">Homepage</Link></button>
          <button><Link to="/new-entry"> New Entry </Link></button>
          <button><Link to="/monthly-view">Monthly View</Link></button>
          <button>Logout</button>
        </nav>

        <div className="homepage">
        <Route exact path="/" component={Homepage}></Route>
        </div>
        
        <div className="new-entry">
        <Route path="/new-entry" component={NewEntry}></Route>
        </div>
        
        <div className="monthly-view">
        <Route path="/monthly-view" component={MonthlyView}></Route>
        </div>


        </BrowserRouter>
      </div>
  )
}
