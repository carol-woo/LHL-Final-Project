import React, {useEffect, useState} from "react"
import axios from "axios";
import "../styles/Edit.css";

export default function Edit(props){
  const [store_name, setStore_Name] = useState()
  const [amount, setAmount] = useState()
  const [entered_on, setEntered_on] = useState()
  const [description, setDescription] = useState()
  
  const submitEdit = async (evt) => {
    evt.preventDefault()
    try {
      let response = await axios({
        method: 'post',
        url: `/api/transactions`,
        data: {
          store_name,
          amount,
          entered_on,
          description,
          category_id: props.category_id,
          id: props.id
        },
      })
      props.renderEdit()
      return response
    } catch(error) {
      console.log("GOOTTT!")
      console.log(error)
    }
    }


  return(
    <div className="edit">
      <form>

        <span>
          Store Name
         <input 
         className="inputMaterial"
         type="text" 
         placeholder={props.name}
         store_name={store_name}
         onChange={event => setStore_Name(event.target.value)}/>
         <span className="highlight"></span>
        <span className="bar"></span>
        </span>

        <span>
          Amount
         <input 
         className="inputMaterial"
         type="number" 
         placeholder={props.amount}
         amount={amount}
         onChange={event => setAmount(event.target.value)}/>
         <span className="highlight"></span>
        <span className="bar"></span>
         </span>

         <span>
          Date
         <input 
         className="inputMaterial"
         type="date" 
         placeholder={props.entered_on}
         entered_on={entered_on}
         onChange ={event => setEntered_on(event.target.value)}/>
         <span className="highlight"></span>
        <span className="bar"></span>
        </span>

        <span>
          Description
         <input 
         className="inputMaterial"
         type="text" 
         placeholder={props.description}
         description={description}
         onChange={event => setDescription(event.target.value)}/>
         <span className="highlight"></span>
        <span className="bar"></span>
        </span>


        <button
          id="button_to_Edit"
          type="submit"
          onClick={submitEdit}
        >
              Submit
        </button>

      </form>
    </div>
  )
}