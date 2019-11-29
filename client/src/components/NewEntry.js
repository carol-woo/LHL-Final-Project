import React, { useState, useEffect } from "react";
import axios from "axios";

//New entry view
export default function NewEntry() {
  // const [entries, setEntries] = useState({
  //   storeName: '',
  //   categoryId: '',
  //   transactionAmount: '',
  //   enteredOn: '',
  //   description: ''
  // });

  const [storeName, setStoreName] = useState();
  const [categoryId, setCateroryId] = useState();
  const [transactionAmount, setTransactionAmount] = useState();
  const [enteredOn, setEnteredOn] = useState();
  const [description, setDescription] = useState();

  function submitTransaction(evt) {
    evt.preventDefault()
    axios({
      method: "post",
      url: `/new-entry`,
      data: {
        store_name: storeName,
        category_id: categoryId,
        amount: transactionAmount,
        entered_on: enteredOn,
        description: description
      },
      responseType: JSON
    }).then(
      function(response) {
        console.log("TEH Response", response);
      },
      error => {
        console.log("GOOTTT!");
        console.log(error);
      }
    );
  }

  //   useEffect(() => {

  //    axios({
  //      method: 'put',
  //      url: '/new-entry',
  //      data: {storeName, categoryId, transactionAmount, enteredOn, description}
  //    })
  //    .then(function(response) {
  //      console.log("TEH Response", response);
  //    }, (error) => {
  //      console.log("GOOTTT!")
  //      console.log(error)
  //    })
  //  }, [])

  return (
    <div>
      I am temp text for NewEntry!
      <form>
        Store Name
        <input
          type="text"
          name={storeName}
          placeholder="Enter store name"
          onChange={event => setStoreName(event.target.value)}
        />
        Date
        <input
          type="date"
          name={enteredOn}
          onChange={event => setEnteredOn(event.target.value)}
          placeholder="Enter date of occurance"
        />
        Amount
        <input
          type="number"
          name={transactionAmount}
          onChange={event => setTransactionAmount(event.target.value)}
          placeholder="Enter the total amount"
        />
        Receipt
        <input
          type="file"
          name="avatar"
          placeholder="Click here for receipt"
          accept="image/png, image/jpeg"
        />
        Description
        <input
          type="text"
          name={description}
          onChange={event => setDescription(event.target.value)}
          placeholder="Please provide description of transactions"
        />
        Category
        <input
          type="text"
          name={categoryId}
          onChange={event => setCateroryId(event.target.value)}
          placeholder="Category ID Test"
        />
        <button type="submit" onClick={submitTransaction}>
          Submit
        </button>
      </form>
    </div>
  );
}
