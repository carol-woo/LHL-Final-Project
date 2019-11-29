import React, {useEffect, useState} from "react"
import axios from "axios";

export default function Edit(props){
  const [store_name, setStore_Name] = useState()
  const [amount, setAmount] = useState()
  const [entered_on, setEntered_on] = useState()
  const [description, setDescription] = useState()
  
  // function submitEdit(){
  //   axios({
  //     method: 'post',
  //     //Temp sending route from homepage
  //     url: `/api/transactions`,
  //     data: {
  //       store_name,
  //       amount,
  //       entered_on,
  //       description,
  //       category_id: props.category_id,
  //       id: props.id
  //     }
  //     })
  //   .then(function(response) {
  //     console.log("TEH Response", response);
  //   }, (error) => {
  //     console.log("GOOTTT!")
  //     console.log(error)
  //   })
  // }


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
    <div>
      <form>

          Store Name
         <input 
         type="text" 
         placeholder={props.name}
         store_name={store_name}
         onChange={event => setStore_Name(event.target.value)}/>

          Amount
         <input 
         type="number" 
         placeholder={props.amount}
         amount={amount}
         onChange={event => setAmount(event.target.value)}/>

          Date
         <input 
         type="date" 
         placeholder={props.entered_on}
         entered_on={entered_on}
         onChange ={event => setEntered_on(event.target.value)}/>

          Description
         <input 
         type="text" 
         placeholder={props.description}
         description={description}
         onChange={event => setDescription(event.target.value)}/>

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