import React from "react"
import axios from "axios"


//This is the toggle delete with 2 buttons when you click on delete.
export default function Delete(props){
  const deleteTransaction = () =>{
    axios.delete(`/api/transactions`, {data: {
          id:props.id
        }
      }).then((data) => {
        props.onDeleteSuccess(props.id);
        props.renderDelete()
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