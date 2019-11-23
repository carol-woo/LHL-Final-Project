import React from "react"

//New entry view
export default function NewEntry(){

  return(
    <div>

      I am temp text for NewEntry!
      <form>
      Store Name
      <input type="text" placeholder="Enter store name"></input>
      Date
      <input type="date" placeholder="Enter date of occurance"></input>
      Amount
      <input type="number" placeholder="Enter the total amount"></input>
      Description
      <input type="text" placeholder="Please provide description of transactions"></input>
      </form>
    </div>
  )
} 