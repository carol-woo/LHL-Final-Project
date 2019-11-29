import React, { useState, useEffect } from "react";
import axios from "axios";
import Popover from "./Popover";
import "../styles/categorybuttons.css";

//New Category view
export default function NewCategory() {
  const [categories, setCategories] = useState([]);
  const [budget, setBudget] = useState('');
  // const [selectedCategoryId, setSelectedCategoryId] = useState();
  // const [selectedCategoryName, setSelectedCategoryName] = useState();

  function handleInput (event) {
    const value = event.target.value;
    setBudget(value)
  }

  function submitCategory({id, name}) {
    // setSelectedCategoryId(id)
    // setSelectedCategoryName(name)
    axios({
      method: "post",
      url: `/api/new-category`,
      data: {
        selectedCategoryId: Number(id),
        categoryBudget: Number(budget),
        name: name
      },
      responseType: 'json'
    }).then(
      function(response) {

        // console.log("TEH Response", response);
      },
      error => {
        alert(`${name} category has already been added`)
        console.log(error);
      }
    );
  }

  useEffect(() => {
    axios.get("/api/new-category").then(res => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="category">
      <h1>Add Category</h1>

      <form>
        {categories.map((category) => {
          let stringName = category.name.replace(" ", "-");
          return (
            <div key={category.id}>
            <input
              type="number" 
              id={category.id}             
              value={budget}
              // onChange={event => {event.preventDefault();
              //   setBudget(event.target.value)}}
              onChange={handleInput}
            />
            <button
              key={category.id}
              type="submit"
              id={stringName}
              name={category.name}
              // id={category.name}
              className="category_buttons"
              onClick={event => {event.preventDefault();
                submitCategory(category)}}
            >
              {category.name}
            </button>
            </div>
          );
        })}
        </form>
    </div>
  );
}
