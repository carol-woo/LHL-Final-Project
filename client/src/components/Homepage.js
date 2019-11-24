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