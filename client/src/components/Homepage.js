import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Homepage () {

  const [categories, setCategories] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:3001/categories')
      .then((res) => {
        console.log(res)
        setCategories(res.data)
      })
  }, [])

// Alternative with promise.all. This may be used with multiple requests
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
        console.log(category.name)
        
        return category.name
      })}
      I am home page <br/>
      <button>Add Entry</button>
      <button>Add Category</button>

    </div>
  )
}