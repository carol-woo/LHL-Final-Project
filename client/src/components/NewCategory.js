import React, {useState, useEffect} from 'react';
import Popover from "./Popover";
import "../styles/categorybuttons.css";

//New Category view
export default function NewCategory(){
  const [categories, setCategory] = useState();
  const [userId, setUserId] = useState()

  // useEffect(() => {
  //   axios.post('http://localhost:3001/new-category', categories)
  //   .then((res) => {
  //     console.log(res.data)
  //     setCategory(res)
  //   })
  // }, [])

  return(
    <div className="category">
      <h1>Add Category</h1>
      <h2>Home</h2>
      <h3>General Home Category</h3>

      <Popover caption="this is a popover">
      <button type="submit" id="house" className="category_buttons">Home</button>
      </Popover>
      <h3>Specific Home Categories</h3>
      <button type="submit" id="rent" className="category_buttons">Rent</button>
      <button type="submit" id="mortgage" className="category_buttons">Mortgage</button>
      <button type="submit" id="property" className="category_buttons">Property Tax</button>
      <button type="submit" id="water" className="category_buttons">Water</button>
      <button type="submit" id="home_maintenance" className="category_buttons">Home Maintenance</button>
      <button type="submit" id="home_phone" className="category_buttons">Home Phone</button>
      <button type="submit" id="hydro" className="category_buttons">Hydro</button>
      <button type="submit" id="cable_internet" className="category_buttons">Cable/Internet</button>
      <button type="submit" id="cell_phone" className="category_buttons">Cell Phone</button>
      <h2>Insurance</h2>
      <h3>General Insurance Category</h3>
      <button type="submit" id="insurance" className="category_buttons">Insurance</button>
      <h3>Specific Insurance Categories</h3>
      <button type="submit" id="mortgage_insurance" className="category_buttons">Mortgage Insurance</button>
      <button type="submit" id="home_insurance" className="category_buttons">Home insurance</button>
      <button type="submit" id="life_insurance" className="category_buttons">Life Insurance</button>
      <button type="submit" id="auto_insurance" className="category_buttons">Auto Insurance</button>
      <h2>Travel</h2>
      <button type="submit" id="transportation" className="category_buttons">Transportation</button>
      <button type="submit" id="gas" className="category_buttons">Gas</button>
      <button type="submit" id="public_transportation" className="category_buttons">Public Transportation</button>
      <button type="submit" id="parking" className="category_buttons">Parking</button>
      <h2>Eating</h2>
      <h3>General Food Category</h3>
      <button type="submit" id="food" className="category_buttons">Food</button>
      <h3>Specific Food Categories</h3>
      <button type="submit" id="groceries" className="category_buttons">Groceries</button>
      <button type="submit" id="restaurants" className="category_buttons">Restaurants</button>
      <button type="submit" id="beverage" className="category_buttons">Beverage</button>
      <h2>Others</h2>
      <button type="submit" id="recreational" className="category_buttons">Recreational</button>
      <button type="submit" id="loans" className="category_buttons">Loans</button>
      <button type="submit" id="miscellaneous" className="category_buttons">Miscellaneous</button>
      <button type="submit" id="medical" className="category_buttons">Medical/Healtcare</button>
      <button type="submit" id="pets" className="category_buttons">Pets</button>
    </div>
  )
}
