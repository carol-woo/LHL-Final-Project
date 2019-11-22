import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import HomepageSingleCategory from "./components/HomepageSingleCategory";
import NewEntry from "./components/NewEntry"
import { Switch, Route, BrowserRouter } from "react-router-dom"


function App() {
  return (
    <div className="App">
      
      Hello World!
      <Navbar />
   </div>
  );
}

export default App;
