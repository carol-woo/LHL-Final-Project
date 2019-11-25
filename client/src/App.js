import React from 'react';
import './styles/App.css';
import Navbar from "./components/Navbar"
import Login from "./components/Login";
import Register from "./components/Register";



function App() {
  return (
    <div className="App">
      <Login />
      <Register />
      <Navbar />
   </div>
  );
}

export default App;
