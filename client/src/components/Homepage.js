import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Homepage () {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3001/categories'),
    ])
    .then(([{ data: categoriesData }]) => {
      setCategories(categoriesData)
    })
  }, [])


  return (
    <div>
      {categories.map(category => {
        return <div>{category.name}</div>
      })}
      I am home page <br/>
      <button>Add Entry</button>
      <button>Add Category</button>

    </div>
  )
}