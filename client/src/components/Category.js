import React, {useState, useEffect} from "react"
import axios from "axios"
import TransactionsItem from "./TransactionsItem"


export default function Category(){
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/category-transactions')
      .then((res) => {
        setTransactions(res.data)
      })  
  }, [])
  
  function handleDeleteSuccess(id) {
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
          </div>
        )
      })}
    </div>
  )
}