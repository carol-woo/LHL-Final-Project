import React, { useState, useEffect,Fragment } from 'react';
import axios from 'axios';
import Transactions from "./Transactions"
import "../styles/categorybuttons.css";




export default function Homepage() {

  const [categories, setCategories] = useState([]);
  


  useEffect(() => {
    console.log("INHERE!")
    axios.get('/api/home')
      .then((res) => {
        console.log("TESTING",res)
        setCategories(res.data)
      })  
  }, [])


  return (
    <div className="category">

      <Transactions categoryId={categories.id}/>

      {categories.map((category) => {
        return (
          <div
          key={category.id}
          className={category.name} >
          
            <h1>Add Category</h1>
            <h2>Home</h2>
            <h3>General Home Category</h3>
            <button
            type="submit"
            id={category.name}
            className="category_buttons"
            >{category.name} </button>
            </div>
        )
      })}

      
      I am home page <br />

      <button>New Entry</button>
      <button>Add Category</button>
    </div>
  )
}