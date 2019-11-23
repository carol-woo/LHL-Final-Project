import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Homepage () {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    axios.get('http://localhost:3001/categories')
      .then((res) => {
        console.log(res)
        setCategories(res.data)
      })
=======
    Promise.all([
      axios.get('http://localhost:3001/categories'),
    ])
    .then(([{ data: categoriesData }]) => {
      setCategories(categoriesData)
    })
>>>>>>> master
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