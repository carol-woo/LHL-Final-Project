import React, { useState, useEffect,Fragment } from 'react';
import axios from 'axios';
import Transactions from "./Transactions"
// import "../styles/categorybuttons.css";
import "../styles/Homepage.css";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Category from './Category';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'





export default function Homepage() {

  const [categories, setCategories] = useState([]);
  const [amountRemaining, setAmountRemaining] = useState()
  const [transactions, setTransactions] = useState({})
  // {
  //   [id]: [
  //     { transactions },
  //     {},
  //   ]
  // }

  // transactions[category.id]

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
    updateState(id)

    axios({
      method: "post",
      url: `/api/home`,
      data: {
        deleteCategoryId: Number(id)
      },
      responseType: 'json'
    }).then(
      function(response) {
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

  console.log(transactions)

  return (
    <div className="homepage_category">
      <BrowserRouter>

      {categories.map((category) => {
        console.log(category.amount)
        return (
          <div className="category_column">
<<<<<<< HEAD

            <div
              key={category.id}
              className={category.name}>
              <div className="individual_category">

                <button
                  type="submit"
                  id={category.name}
                  className="homepage_category_buttons"
                  onClick={() => getTransactions(category.id)}
                >
                  {category.name}
                </button>

                <h1 id="homepage_category_title">{category.name}</h1>  
                <p>Your set budget is ${category.category_budget}</p>
                <p>Budget remaining: ${amountRemaining}</p>
                <p>Amount spent: $$$</p>  

                <Link to="/category-transactions" id="category_title"></Link>

                <button
                  type="submit"
                  id={category.name}
                  className="homepage_category_buttons"
                  onClick={() => deleteUserCategory(category.id)}
                >Delete</button>
              
                {category.show &&
                  <Transactions 
                    id={category.id} 
                    handleOnGetTransactions={getTransactions} 
                    show={category.show}
                  />
                }
=======
          <div
          key={category.id}
          className={category.name}>
          <div className="main_individual_category">
          <button
          type="submit"
          id={category.name}
          className="homepage_category_buttons"
          onClick={() => getTransactions(category.id)}
          >{category.name} </button>

          <div className="homepage_category_info">

              <div className="homepage_category_title">
                <h1 id="homepage_category_title">{category.name}</h1> 
                <p>Total Budget: ${category.category_budget}</p>
              </div>

              <div className="progress">
                <ProgressBar now={60} id="progress_bar"/>
              </div>
              
              <div className="budget_amount_info">
                <p>Budget remaining: $$$</p>
                <p>Amount spent: $$$</p>    
              </div>     

          </div>
            <Link to="/category-transactions" id="category_title">
          </Link>
            <button
            type="submit"
            id="trash_can_button"
            className="homepage_category_buttons"
            onClick={() => deleteUserCategory(category.id)}
            ></button>
         
          {category.show && <Transactions 
          id={category.id} 
          handleOnGetTransactions={getTransactions} 
          show={category.show}
          RB={RB}
          />}
>>>>>>> master
              </div>
            </div>
          </div>
        )
      })}
      

      
      </BrowserRouter>

      
    </div>
  )
}