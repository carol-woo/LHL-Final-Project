import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "../styles/categorybuttons.css";

//New Category view
export default function NewCategory(){
  // const [categories, setCategory] = useState([]);

  // useEffect(() => {
  //   axios.post('http://localhost:3001/new-category', categories)
  //   .then((res) => {
  //     console.log(res.data)
  //     setCategory(res)
  //   })
  // }, [])

  return(
    <div>
      <button type="submit" id="home_page">Home</button>
    </div>
  )
}
