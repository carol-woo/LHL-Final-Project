import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import HomepageSingleCategory from "./components/HomepageSingleCategory"
import { Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      Hello World!
      <Navbar />
      <HomepageSingleCategory />
      <button>Add Entry</button>
      <button>Add Category</button>
    </div>
  );
}

export default App;
