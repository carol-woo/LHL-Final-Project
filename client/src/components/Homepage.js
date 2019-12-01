import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Transactions from "./Transactions"
import "../styles/Homepage.css";
import {Link, BrowserRouter } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button} from 'react-bootstrap';





export default function Homepage() {
  const [categories, setCategories] = useState([]);
  const [modal, toggleModal] = useState(false)
 
  useEffect(() => {
    axios.get('/api/home')
      .then((res) => {
        setCategories(res.data.map( cat => {return {...cat, show: false}}));
      })
  }, [])

  function updateState (categoryId) {
    let tempCategories = [...categories];
    tempCategories = categories.filter(eachCategory => eachCategory.id !== categoryId)
    setCategories(tempCategories);
  }

  function deleteUserCategory(id) {
   axios({
      method: "post",
      url: `/api/home`,
      data: {
        deleteCategoryId: Number(id)
      },
      responseType: 'json'
    }).then(
      
      function(response) {
        updateState(id)
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

  function confirmModal(){

    return (
      <>
         <Modal show={modal} onHide={() => toggleModal(prev => !prev)} animation={true}>
           <Modal.Header closeButton>
             <Modal.Title>ATTENTION!!</Modal.Title>
           </Modal.Header>
           <Modal.Body>Are you sure you want to delete this category?</Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={() => toggleModal(prev => !prev)}>
               Close
             </Button>
             <Button variant="danger">
               Delete Category
             </Button>
           </Modal.Footer>
         </Modal>
       </>
   )
  }

  return (
    <div className="homepage_category">
      <BrowserRouter>
  
      {categories.map((category) => {

        return (
          <div className="category_column">
            {modal && confirmModal()}
            <div
              key={category.id}
              className={category.name}>
                <div className="main_individual_category">
                  <button
                    type="submit"
                    id={category.name}
                    className="homepage_category_buttons"
                    onClick={() => getTransactions(category.id)}
                    >{category.name} 
                  </button>

                  <div className="homepage_category_info">

                    <div className="homepage_category_title">
                      <h1 id="homepage_category_title">{category.name}</h1> 
                      <p>Total Budget: ${category.category_budget}</p>
                    </div>

                    <div className="progress">
                      <ProgressBar animated striped variant="info" min={0} max={category.category_budget} now={category.sum} id="progress_bar"/>
                    </div>
                
                    <div className="budget_amount_info">
                      <p>Budget remaining: ${category.category_budget - category.sum}</p>
                      <p>Amount spent: ${category.sum}</p>    
                    </div>     
                </div>
                <Link to="/category-transactions" id="category_title"></Link>
                <button
                  type="submit"
                  id="trash_can_button"
                  className="homepage_category_buttons"
                  onClick={() => toggleModal(prev => !prev)}
                ></button>

          {category.show &&
           <Transactions 
            id={category.id} 
            handleOnGetTransactions={getTransactions} 
            show={category.show}
          />}
              </div>
            </div>
          </div>
        )
      })}
      
      </BrowserRouter>
    </div>
  )
}