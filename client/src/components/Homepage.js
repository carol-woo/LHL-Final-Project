import React, { useState, useEffect,Fragment } from 'react';
import axios from 'axios';
import { Route, Link, BrowserRouter } from "react-router-dom";
import NewCategory from "./NewCategory";
import NewEntry from "./NewEntry";
import Edit from "./Edit";
import "../styles/categorybuttons.css";



export default function Homepage() {

  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [showForm, toggleForm] = useState(false)


  useEffect(() => {
    console.log("INHERE!")
    axios.get('/api/home')
      .then((res) => {
        console.log("TESTING",res)
        setCategories(res.data)
      })  
  }, [])

  useEffect(() => {
    console.log("INHERE!")
    axios.get('/api/transactions')
      .then((res) => {
        console.log("TESTING",res)
        setTransactions(res.data)
      })  
  }, [])
  
  function renderEdit(evt){
    evt.preventDefault()
    toggleForm(prev => !prev)
  }

  return (
    <div>
      {categories.map(category => {
        return (
          <div className={category.name}>
            <h1>Add Category</h1>
            <h2>Home</h2>
            <h3>General Home Category</h3>
            <button type="submit" id={category.name} className="category_buttons">{category.name} </button>
            </div>
        )
      })}

      {transactions.map(transaction => {
        return(
          <div>
            <form>
              {transaction.store_name} <br/>
              ${transaction.amount} <br/>
              {transaction.entered_on} <br/>
              {transaction.description} <br/>
             <button type="submit" onClick={renderEdit}>Edit</button>
            </form>
            
            {showForm && <Edit 
            category_id={transaction.category_id}
            id={transaction.id} 
            name={transaction.store_name} 
            amount={transaction.amount} 
            entered_on={transaction.entered_on} 
            description={transaction.description}
             />}
          </div>
          
  )
})}
      
      I am home page <br />

      <button>New Entry</button>
      <button>Add Category</button>
    </div>
  )
}