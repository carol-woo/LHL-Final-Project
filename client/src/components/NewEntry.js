import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/NewEntry.css";

//New entry view
export default function NewEntry() {
  const [storeName, setStoreName] = useState('');
  const [categoryId, setCateroryId] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [enteredOn, setEnteredOn] = useState('');
  const [description, setDescription] = useState('');
  const [currentCategories, setCurrentCategories] = useState([])

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
        setStoreName('')
        setTransactionAmount('')
        setEnteredOn('')
        setDescription('')
      },
      error => {
        console.log(error);
      }
    );
  }

  useEffect(() => {
    console.log("INHERE!")
    axios.get('/api/home')
      .then((res) => {
        setCurrentCategories(res.data.userCategories)
      })  
  }, [])

  // const receiptScan = async () => {
  //   try {
  //     // let postResult = await callProcess([imageFile], {})
  //     // //     // this token is used later to request the result
  //     // const token = postResult.token
  //     // console.log('My post token', token)
      
  //     let getResult = await callResult(token)
  //     console.log("testing my total", getResult.result)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const handleFileChange = async (event) => {
    console.log("Test file", event.target.files[0].name)
    const fileName = event.target.files[0].name;
    axios({
      method: 'post',
      url: '/api/receipt',
      data: {fileName},
      responseType: JSON
    }).then(
      function(response){
        setStoreName('')
        setTransactionAmount('')
        setEnteredOn('')
        console.log("The response in handleFileChange post", response)
        alert(`${response.data}`)
      },
      error => {
        console.log("Error in new entry axios post", error)
      }
    )
    // const imageFile = `./receiptImages/${event.target.files[0].name}`
    // let postResult = await callProcess(event.target.files, {})
      //     // this token is used later to request the result
      // const token = await postResult.token
      // console.log('My post token', token)

  }

  return (
    <div className="new-entry">
    <div className="new_entry_banner">
      <img className="piggybank" src={require("../styles/Images/new_entry.jpg")} />
      <h3 className="newEntry">Looking to add a new category to your cache? Set your budget amount with your category and click on the button to submit! </h3>
    </div>
      <form>
      <h1>Add a new entry!</h1>
      
      Store Name
      <span>
        <input
          className="inputMaterial"
          type="text"
          value={storeName}
          placeholder="Enter store name"
          onChange={event => setStoreName(event.target.value)}
        />
        <span className="highlight"></span>
        <span className="bar"></span>
      </span>

      Date
      <span>
        <input
        className="inputMaterial"
          type="date"
          value={enteredOn}
          onChange={event => setEnteredOn(event.target.value)}
          placeholder="Enter date of occurance"
          
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        </span>

        Amount
        <span>
        <input
        className="inputMaterial"
          type="number"
          value={transactionAmount}
          onChange={event => setTransactionAmount(event.target.value)}
          placeholder="Enter the total amount"
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        </span>

        Receipt
        <span>
        <input
        className="inputMaterial"
          type="file"
          name="avatar"
          placeholder="Click here for receipt"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
          />
          <button
          className="inputMaterial"
          name="scan"
          type="submit"
          placeholder="FileSelect"
          // onClick={handleFileChange}
          ></button>
        <span className="highlight"></span>
        <span className="bar"></span>
        </span>

        Description
        <span>
        <input
          className="inputMaterial"
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
          placeholder="Provide description of transactions!"
        />
        <span className="highlight"></span>
        <span className="bar"></span>
        </span>

        Category
        <span>
          <select id="categories" onChange={(event) => setCateroryId(event.target.value )}>
            <option></option>
            {currentCategories.map(category => {
              return(
                <option value={category.id}>{category.name}</option>
              )
            })}
          </select>
        </span>


        <button className="newEntryButton" type="submit" onClick={submitTransaction}>
          Submit
        </button>
      </form>
    </div>
  );
}
