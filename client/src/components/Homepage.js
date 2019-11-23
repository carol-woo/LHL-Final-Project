import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Homepage () {

  const [categories, setCategories] = useState([]);

  // Promise.all([
  //   axios.get('http://localhost:3001/categories')
  // ])
  // .then(function(values) {
  //   console.log("THE VALUES ARE", values)

  // })

  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then((res) => {
        console.log(res)
        setCategories('res.data: ', res.data)
      })
  }, [])


  // useEffect(() => {
  //   Promise.all([
  //     axios.get('http://localhost:3001/categories'),
  //     axios.get('http://localhost:3001/transactions'),
  //   ])
  //   .then(([{ data: categoriesData }, transactionsResponse]) => {
  //     console.log('categoriesData: ', categoriesData, transactionsResponse)
  //     setCategories(categoriesData)
  //   })
  // }, [])


  return (
    <div>
      {categories.map(category => {
        return category.name
      })}
      I am home page <br/>
      <button>Add Entry</button>
      <button>Add Category</button>

    </div>
  )
}