import React from "react";
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import App from "../App";
import NewEntry from "./NewEntry";

//For Navbar view
export default function Navbar(){
  // function Appcomp (){
  //   return <App />
  // }
  // function NewEntryComp() {
  //   return <NewEntry />
  // }
  return(
    <BrowserRouter>
      <div>
        I am the NavBar!
        <nav>
          <button><Link to="/">Homepage</Link></button>
          <button><Link to="/new_entry">New Entry</Link></button>
          <button><Link to="/monthly_view">Monthly View</Link></button>
          <button>Logout</button>
        </nav>

        <Switch>
          <Route path="/" component={App} />
          <Route path="/new_entry" component={NewEntry} />
        </Switch>
       
      </div>
    </BrowserRouter>
  )
}
