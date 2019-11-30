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

  const backdropClickHandler = () => { 
    setSideDrawerOpen(false)
  }

  let backdrop

  if(sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler}/>
  }
  
  return (
    <div className="App">
      <Navbar 
      drawerClickHandler={drawerToggleClickHandler} 
      />
      <SideDrawer show={sideDrawerOpen} close={setSideDrawerOpen}/>
      {backdrop}
   </div>
  );
}

export default App;
