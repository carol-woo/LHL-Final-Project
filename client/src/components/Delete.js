import React from "react"
import axios from "axios"
import "../styles/delete.css"


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
    <button className="yes"onClick={deleteTransaction} aria-label="Green check mark for deleting transaction"></button>
    Are you sure you want to delete {props.store_name}?
    <button className="no"onClick={props.renderDelete} aria-label="No button for not wanting to delete a transaction"></button>
  </div>
)
}