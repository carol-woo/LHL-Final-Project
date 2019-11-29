import React, {useEffect, useState} from "react"
import Edit from "./Edit"
import axios from "axios"
import Delete from "./Delete";


export default function Transactions(props){
  const [transactions, setTransactions] = useState([]);
  const [showForm, toggleForm] = useState(false)
  const [showDelete, toggleDelete] = useState(false)



  console.log("transactions props", props)

  console.log("i am transactions ", transactions)
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

  function renderDelete(evt){
    evt.preventDefault()
    toggleDelete(prev => !prev)
  }

  function handleDeleteSuccess(id) {
    // remove the transaciton with ID = id, set transactions without that record
    console.log('handleDeleteSuccess called');
    const temp = [...transactions]
    temp.splice(temp.map(e => e.id).indexOf(id),1);
    setTransactions(temp);
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
           <button type="submit" onClick={renderDelete}>Delete</button>
          </form>
          
          {showDelete && <Delete 
          id={transaction.id}
          renderDelete={renderDelete}
          onDeleteSuccess={handleDeleteSuccess}
          />
          }

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