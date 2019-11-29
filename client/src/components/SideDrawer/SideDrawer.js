import React from 'react';
import { BrowserRouter, Link, Route } from "react-router-dom";
import NewEntry from "../NewEntry";
import MonthlyView from "../MonthlyView"
import Homepage from "../Homepage";
import NewCategory from "../NewCategory";
import './SideDrawer.css'
import Login from "../Login";
import Register from "../Register";
import {
  CSSTransition
} from 'react-transition-group';



const routes = [
  { path: '/register', name: 'Register', Component: Register },
  { path: '/login', name: 'Login', Component: Login },
]


const SideDrawer = props => {
let drawerClasses = 'side-drawer';

    if(props.show) {
      drawerClasses ='side-drawer open';
     }

  return (  
  <div>
  <BrowserRouter>
    <nav className={drawerClasses}>
        <div className="logo_icon">
        <img src={require("../../styles/Images/CIRCLE-06.png")} id="app_logo"/>
        </div>
    <ul>
        <li><Link to="/login" className="a">Login</Link></li>
        <li><Link to="/register" className="a">Register</Link></li>
        <li><Link to="/home" className="a">Homepage</Link></li>
        <li><Link to="/new-entry" className="a">New Entry</Link></li>
        <li><Link to="/api/new-category" className="a">Add Category</Link></li>
        <li><Link to="/home" className="a">Monthly View</Link></li>
      </ul>
    </nav>

        <div className="homepage">
          <Route exact path="/home" component={Homepage}></Route>
        </div>

        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <Component />
                </div>
              </CSSTransition>
            )}
          </Route>
        ))}

        <div className="new-entry">
          <Route path="/new-entry" component={NewEntry}></Route>
        </div>

        <div>
          <Route path="/api/new-category" component={NewCategory}></Route>
        </div>

        <div className="monthly-view">
          <Route path="/monthly-view" component={MonthlyView}></Route>
        </div>

  </BrowserRouter>
    </div>
    );
  }    

export default SideDrawer 