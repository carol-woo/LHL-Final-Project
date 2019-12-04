import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Transactions from "./Transactions"
import "../styles/Homepage.css";
import "../styles/categorybuttons.css"
import {Link, BrowserRouter } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button} from 'react-bootstrap';


export default function Homepage() {
  const [categories, setCategories] = useState([]);
  const [modal, toggleModal] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState(-1);
  const [graphData, setGraphData] = useState([]);
  const [progressNow, setProgressNow] = useState();



  useEffect(() => {
    return async () => {
      try {
        const res = await axios.get('/api/home')

        console.log("TESTING HOME PAGE", res)
        console.log('!!!!!!!!!!!', res.data)
        setCategories(res.data.userCategories.map(cat => { return { ...cat, show: false } }));
        const graphData = res.data.dailyTotalTransactions.map(eachDay => ({
          "name": eachDay.day,
          "Average amount spent per day": eachDay.total,
          "Average daily budget": res.data.average
        }))
        setGraphData(graphData);

      } catch (err) {
        console.error(err)
      }
    }
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

  function updateCategories(){
    axios.get('/api/home')
      .then((res) => {
        console.log("TESTING HOME PAGE", res.data)
        setCategories(res.data.userCategories.map( cat => {return {...cat, show: false}}));
        const graphData = res.data.dailyTotalTransactions.map(eachDay => ({
          "name": eachDay.day,
          "Average amount spent per day": eachDay.total,
          "Average daily budget": res.data.average
        }))
        setGraphData(graphData);
    })
  }

  function confirmModal(id){

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
             <Button variant="danger" onClick={() => {deleteUserCategory(id); toggleModal(prev => !prev)}}>
               Delete Category
             </Button>
           </Modal.Footer>
         </Modal>
       </>
   )
  }
  return (

    <div>
    <div className="homepage_chart">
      <LineChart className="Chart" width={1000} height={600} data={graphData} margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 2500]}/>
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Average daily budget" stroke="#8884d8" />
        <Line type="monotone" dataKey="Average amount spent per day" stroke="#82ca9d" />
     34-AC
        </LineChart>
    </div>

    <div className="homepage_category">
      <BrowserRouter>

      {modal && confirmModal(selectedCategoryId)}
      {categories.map((category) => {
        let sum = category.sum
        return (
          <div className="category_column">
            <div
              key={category.id}
              className={category.name}>
                <div className="main_individual_category">
                  <div className="single-category">
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
                      <ProgressBar animated striped variant="info" min={0} max={category.category_budget} now={sum} id="progress_bar"/>
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
                  onClick={() => toggleModal(prev => {setSelectedCategoryId(category.id); return !prev})}
                ></button>
                </div>

          {category.show &&
           <Transactions 
            id={category.id} 
            handleOnGetTransactions={getTransactions} 
            show={category.show}
            updateCategories={updateCategories}
          />}
              </div>
            </div>
          </div>
        )
      })}
      
      </BrowserRouter>
    </div>
    </div>
  )
}