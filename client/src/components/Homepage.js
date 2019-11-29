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


  return (
    <div className="category">

      <Transactions categoryId={categories.id}/>

      {categories.map((category) => {
        return (
          <div
          key={category.id}
          className={category.name}>
            <h1>Add Category</h1>
            <h2>Home</h2>
            <h3>General Home Category</h3>
            <button
            type="submit"
            id={category.name}
            className="category_buttons"
            >{category.name} </button>
            <button
            type="submit"
            id={category.name}
            className="category_buttons"
            onClick={() => deleteUserCategory(category.id)}
            >Delete</button>
            </div>
            
        )
      })}

      
      I am home page <br />

      <button>New Entry</button>
      <button>Add Category</button>
    </div>
  )
}