import React, {useEffect, useState} from "react"
import Edit from "./Edit"
import axios from "axios"

export default function Transactions(){
  const [transactions, setTransactions] = useState([]);
  const [showForm, toggleForm] = useState(false)

  useEffect(() => {
    console.log("INHERE!")
    axios.get('/api/transactions')
      .then((res) => {
        console.log("TESTING",res)
        setTransactions(res.data)
      })  
  }, [])
  
  function renderEdit(evt){
    evt.preventDefault()
    toggleForm(prev => !prev)
  }

  return(
    <div>
    {transactions.map(transaction => {
      return(
        <div>
          <form>
            {transaction.store_name} <br/>
            ${transaction.amount} <br/>
            {transaction.entered_on} <br/>
            {transaction.description} <br/>
           <button type="submit" onClick={renderEdit}>Edit</button>
          </form>
          
          {showForm && <Edit 
          category_id={transaction.category_id}
          id={transaction.id} 
          name={transaction.store_name} 
          amount={transaction.amount} 
          entered_on={transaction.entered_on} 
          description={transaction.description}
           />}
        </div>
      
        
)
})}
</div>
  )
}