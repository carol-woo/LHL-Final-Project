import React, { useState, useEffect,Fragment } from 'react';
import axios from 'axios';
import Transactions from "./Transactions"
import "../styles/categorybuttons.css";
import "../styles/Homepage.css";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Category from './Category';





export default function Homepage() {

  const [categories, setCategories] = useState([]);

  


  useEffect(() => {
    console.log("INHERE!")
    axios.get('/api/home')
      .then((res) => {
        console.log("TESTING",res)
        setCategories(res.data.map( cat => {return {...cat, show: false}}));
      })  
  }, [])

  function updateState (categoryId) {
    let tempCategories = [...categories];
    tempCategories = categories.filter(eachCategory => eachCategory.id !== categoryId)
    setCategories(tempCategories);
    console.log("TESTING THE tempCategory", tempCategories)
  }

  function deleteUserCategory(id) {
    console.log("TESTING THE CATEGORY inside the deletefunction in homepage", id)
    // setSelectedCategoryId(id)
    // setSelectedCategoryName(name)
    updateState(id)

    axios({
      method: "post",
      url: `/api/home`,
      data: {
        deleteCategoryId: Number(id)
        // categoryBudget: Number(budget),
        // name: name
      },
      responseType: 'json'
    }).then(
      function(response) {

        // console.log("TEH Response", response);
      },
      error => {
        alert(`Category could not be deleted`)
        console.log(error);
      }
    );
  }

  function getTransactions(id, cb) {
    const temp = [...categories];
    let index = temp.map( c => c.id ).indexOf(id);
    temp[index].show = !temp[index].show;
    setCategories(temp)
  }

  return (
    <div className="category">
      <BrowserRouter>


      {categories.map((category) => {
        return (
          <div
          key={category.id}
          className={category.name}>
            <h1>{category.name}</h1>           
           <Link to="/category-transactions">
            <button
            type="submit"
            id={category.name}
            className="category_buttons"
            onClick={() => getTransactions(category.id)}
            >{category.name} </button>
          </Link>

            <button
            type="submit"
            id={category.name}
            className="category_buttons"
            onClick={() => deleteUserCategory(category.id)}
            >Delete</button>
         
          {category.show && <Transactions id={category.id} handleOnGetTransactions={getTransactions} show={category.show}/>}
            
            </div>
            
        )
      })}
      

      
      </BrowserRouter>

      
    </div>
  )
}