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
        <nav>
        I am the NavBar! <br/>
          <button><Link to="/">Homepage</Link></button> <br/>
          <button><Link to="/new-entry"> New Entry </Link></button> <br/>
          <button><Link to="/monthly-view">Monthly View</Link></button> <br/>
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
