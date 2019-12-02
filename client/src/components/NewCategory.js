import React, { useState, useEffect } from "react";
import axios from "axios";
import Popover from "./Popover";
import "../styles/categorybuttons.css";
import "../styles/NewCategory.css";


const CategoryBudgetForm = ({category, onClick}) => {
  const [budget, setBudget] = useState(0);

  const handleInput = (event) => {
    const value = event.target.value;
    setBudget(value)
  };

  const stringName = category.name.replace(" ", "-");

  return (<div key={category.id} id="add_new_category">

          <div className="add_new_cate">
          <p>Set budget amount</p>
            <input
              type="number" 
              id={category.id}             
              value={budget}
              // onChange={event => {event.preventDefault();
              //   setBudget(event.target.value)}}
              onChange={(event) => handleInput(event)}
            />
            <button
              key={category.id}
              type="submit"
              id={stringName}
              name={category.name}
              // id={category.name}
              className="category_buttons"
              onClick={(e) => { e.preventDefault(); onClick(budget); }}
            >
              {category.name}
            </button>
          </div>  
            </div>);
}

//New Category view
export default function NewCategory() {
  const [categories, setCategories] = useState([]);
 

  function submitCategory({id, name}, budget) {
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
      console.log(res.data)
      setCategories(res.data);
    });
  }, []);

  return (
      <div className="new_category">
    
        <div className="form_category">
          {categories.map((category, i) => {
            return (
              <CategoryBudgetForm onClick={(budget) => {  submitCategory(category, budget)}} category={category} />
            );
          })}
          </div>
     
    </div>
  );
}
