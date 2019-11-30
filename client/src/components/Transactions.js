import React, {useEffect, useState} from "react"
import axios from "axios"
import TransactionsItem from "./TransactionsItem"
import "../styles/Transactions.css"



export default function Transactions(props){
  const [transactions, setTransactions] = useState([]);  
  useEffect(() => {
    axios({
      method: "get",
      url: `/categories-transactions/${props.id}`,
      responseType: 'json'
    }).then(
      function(response) {  
        console.log("TEH Response", response);
        setTransactions(response.data.data);
      },
      error => {
        alert(`Category could not be deleted`)
        console.log(error);
      }
    );
  }, [])
  
  
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
            <p className="transactionP"><span className="heading">Store Name:</span> { transaction.store_name}</p>
            <p className="transactionP"><span className="heading">Amount Spent:</span> ${transaction.amount}</p>
            <p className="transactionP"><span className="heading">Date:</span> { (new Date(transaction.entered_on).toDateString())}</p>
            <p className="transactionP"><span className="heading">description:</span> { transaction.description}</p>
          </form>

          <TransactionsItem
            handleOnGetTransactions={props.handleOnGetTransactions}
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