import React from 'react';
import './SideDrawer.css'

const SideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li><a href="/home">Homepage</a></li>
      <li><a href="/new-entry">New Entry</a></li>
      <li><a href="/new-category">Add Category</a></li>
      <li><a href="/home">Monthly View</a></li>
    </ul>
  </nav>
)    

export default SideDrawer