import React from "react"
import axios from "axios"

export default function Delete(props){


  const deleteTransaction = () =>{
    axios.delete(`/api/transactions`, {data: {
          store_name: props.store_name ,
          amount: props.amount,
          entered_on: props.entered_on,
          description: props.description,
          category_id: props.category_id,
          id:props.id
        }
      })
    } 

return (
  <div>
Are you sure you want to delete {props.store_name}?
    <button onClick={deleteTransaction}>Yes</button>
    <button>No</button>
  </div>
)
}