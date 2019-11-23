import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Homepage () {

  const [state, setState] = useState()


  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:3001/categories')
    ])
    .then(function(values) {
      console.log(values)
      setState(...values)
    })
  }, [])
  return (
    <div>
      {state}
      I am home page <br/>
      <button>Add Entry</button>
      <button>Add Category</button>

    </div>
  )
}