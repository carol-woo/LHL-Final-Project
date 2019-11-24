import React, {useState, useEffect} from 'react';
import axios from 'axios';

//New entry view
export default function NewEntry(){

  // const [entries, setEntries] = useState([ 
  //   store_name
  //   // category_id,
  //   // amount,
  //   // entered_on,
  //   // description
  // ]);
  const [storeName, setStoreName] = useState([])
  const [categoryId, setCateroryId] = useState([])
  const [transactionAmount, setTransactionAmount] = useState([])
  const [enteredOn, setEnteredOn] = useState([])
  const [description, setDescription] = useState([])

  function submitTransaction () = event => {
    event.preventDefault();
    const newTransaction = {
      setStoreName(store_name: event.target.value); 
    }
  }
  
  //  useEffect(() => {
  //   axios({
  //     method: 'post',
  //     url: 'http://localhost:3001/new-entry/:',
  //     data: {store_name, category_id, amount, entered_on, description}
  //   })
  //   .then(function(response) {
  //     console.log(response);
  //   })
  // })


  return(
    <div>

      I am temp text for NewEntry!
      <form>
      Store Name
      <input
      type="text"
      name={storeName}
      placeholder="Enter store name"
      onChange={event =>setStoreName(event.target.value)}
      ></input>
      Date
      <input
      type="date"
      name={enteredOn}
      onChange={event => setEnteredOn(event.target.value)}
      placeholder="Enter date of occurance"
      ></input>
      Amount
      <input
      type="number"
      name={transactionAmount}
      onChange={event => setTransactionAmount(event.target.value)}
      placeholder="Enter the total amount"
      ></input>
      Description
      <input
      type="text"
      name={description}
      onChange={event => setDescription(event.target.value)}
      placeholder="Please provide description of transactions"
      ></input>
      Category
      <input type="text"
      name={categoryId}
      onChange={event => setCateroryId(event.target.value)}
      placeholder="Category ID Test"
      ></input>
      <button
      type="submit"
      onClick={() => submitTransaction()}
      >Submit</button>
      
      </form>
    </div>
  )
} 