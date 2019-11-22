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
      <div>
        <BrowserRouter>
        I am the NavBar!
        <nav>
          <button>Homepage</button>
          <button><Link to="/new-entry"> New Entry </Link></button>
          <button>Monthly View</button>
          <button>Logout</button>
        </nav>

        <Route path="/new-entry">
          <NewEntry/>
      </Route>

        </BrowserRouter>
      </div>
  )
}
