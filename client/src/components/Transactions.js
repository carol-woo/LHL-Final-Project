import React, {useEffect, useState} from "react"
import Edit from "./Edit"
import axios from "axios"
import Delete from "./Delete";
import TransactionsItem from "./TransactionsItem"


export default function Transactions(props){
  const [transactions, setTransactions] = useState([]);
  console.log("~~~~~~~~~~~~~~props for transactions~~~~~~~~~~~~~`", props)
  // useEffect(() => {
  //   console.log("INHERE!")
  //   axios.get(`/categories-transactions/${props.id}`)
  //     .then((res) => {
  //       console.log("TESTING",res)
  //       setTransactions(res.data)
  //     })  
  // }, [])
  
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
        </div>
      
        
)
})}
</div>
  )
}