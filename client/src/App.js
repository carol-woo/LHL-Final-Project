import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import HomepageSingleCategory from "./components/HomepageSingleCategory";
import { Switch, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      Hello World!
      <Navbar />
      <HomepageSingleCategory />
      <button>Add Entry</button>
      <button>Add Category</button>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </div>
  );
}

export default App;
