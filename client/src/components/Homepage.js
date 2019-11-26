import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, BrowserRouter } from "react-router-dom";
import NewCategory from "./NewCategory";
import NewEntry from "./NewEntry";
import "../styles/categorybuttons.css";



export default function Homepage() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then((res) => {
        console.log(res)
        setCategories(res.data)
      })
  }, [])



  return (
    <div>


      {categories.map(category => {
        // return (<div>{category.name}</div>
        return (
          <div className={category.name}>
            <h1>Add Category</h1>
            <h2>Home</h2>
            <h3>General Home Category</h3>
            <button type="submit" id={category.name} className="category_buttons">{category.name} </button>
            </div>
        )

      })}
      I am home page <br />

      <button>New Entry</button>
      <button>Add Category</button>
    </div>
  )
}