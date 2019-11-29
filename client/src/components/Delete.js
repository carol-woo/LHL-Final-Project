import React from "react"
import axios from "axios"

export default function Delete(props){


  const deleteTransaction = () =>{
    axios.delete(`/api/transactions`, {data: {
          id:props.id
        }
      }).then((data) => {
        // check data == 200

        props.onDeleteSuccess(props.id);
      })
    } 



return (
  <div>
Are you sure you want to delete {props.store_name}?
    <button onClick={deleteTransaction}>Yes</button>
    <button onClick={props.renderDelete}>No</button>
  </div>
)
}