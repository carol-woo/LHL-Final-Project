import React, {useState} from "react"
import axios from "axios";
import '../styles/register.css';

//For Register view
export default function Register(){
const [userName, setName] = useState()
const [userEmail, setEmail] = useState()
const [userPassword, setPassword] = useState()
const [budget, setBudget] = useState()

let date = new Date()

function submitRegistration(){
      axios({
        method: 'post',
        //Temp sending route from homepage
        url: `/new-user`,
        data: {
          name: userName,
          email: userEmail,
          password_digest: userPassword,
          created_at: date,
          budget: budget
        },
          responseType: JSON
      })
      .then(function(response) {
        console.log("TEH Response", response);
      }, (error) => {
        console.log("GOOTTT!")
        console.log(error)
      })
    }

  return(
    <div className="register_container">
      <div className="register_image"></div>
      <div className="register_form_container">
        <h2>Register</h2>
        <form>

          <div className="register_email">
            <input
              className="inputMaterial"
              type="text"
              name={userName}
              onChange={event =>setName(event.target.value)}
              />
              <span className="highlight"></span>
              <span className="bar"></span>
            <label id="title_label">Name</label>
          </div>

          <div className="register_email">
            <input
              className="inputMaterial"
              type="text"
              email={userEmail}
              onChange={event =>setEmail(event.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label id="title_label">Email</label>
          </div>  
            
          <div className="register_email">
            <input
              className="inputMaterial"
              type="password"
              password={userPassword}
              onChange={event =>setPassword(event.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar"></span> 
            <label id="title_label">Password</label>
           </div>

          <div className="register_email">
            <input
              className="inputMaterial"
              type="number"
              household={budget}
              onChange={event =>setBudget(event.target.value)}
            />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label id="title_label">Your Budget</label>
          </div>
            <button
            id="button_to_register"
            type="submit"
            onClick={submitRegistration}
            >
              Submit
            </button>
        </form>
      </div>
    </div>
  )
}