import React, { useState } from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar"
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from './components/Backdrop/Backdrop'


function App(props) {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)


  const drawerToggleClickHandler = () => {
      setSideDrawerOpen((prevState) => !prevState)
  };

  let sideDrawer;
  let backdrop

  if(sideDrawerOpen) {
    sideDrawer = <SideDrawer />;
    backdrop = <Backdrop />
  }
  return (
    <div className="App">
      <Navbar drawerClickHandler={drawerToggleClickHandler}/>
      {sideDrawer}
      {backdrop}
   </div>
  );
}

export default App;
