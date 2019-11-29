import React, {useEffect, useState} from "react"
import Edit from "./Edit"
import axios from "axios"
import Delete from "./Delete";
import TransactionsItem from "./TransactionsItem"


export default function Transactions(props){
  const [transactions, setTransactions] = useState([]);
  const [showForm, toggleForm] = useState(false)
  const [showDelete, toggleDelete] = useState(false)

  useEffect(() => {
    console.log("INHERE!")
    axios.get('/api/transactions')
      .then((res) => {
        console.log("TESTING",res)
        setTransactions(res.data)
      })  
  }, [])
  
  // function renderEdit(evt, cb){
  //   evt.preventDefault()
  //   cb()
  // }

  // function renderDelete(evt, cb){
  //   evt.preventDefault()
  //   cb()
  // }

  function handleDeleteSuccess(id) {
    console.log('handleDeleteSuccess called');
    const temp = [...transactions]
    temp.splice(temp.map(e => e.id).indexOf(id),1);
    setTransactions(temp);
  }

  return(
    <div>

    {transactions.map((transaction) => {
     
      return(
        <div key={transaction.id}>

          <form>
            {transaction.store_name} <br/> 
            ${transaction.amount} <br/>
            {transaction.entered_on} <br/>
            {transaction.description} <br/>
          </form>

          <TransactionsItem 
            category_id={transaction.category_id}
            id={transaction.id} 
            name={transaction.store_name} 
            amount={transaction.amount} 
            entered_on={transaction.entered_on} 
            description={transaction.description}
            onDeleteSuccess={handleDeleteSuccess}
          />

          {/* {showDelete && <Delete 
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
           />} */}
        </div>
      
        
)
})}
</div>
  )
}