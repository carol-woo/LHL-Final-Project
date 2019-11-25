import React, {useState} from "react"
import axios from "axios"


//For Register view
export default function Register(){
const [userName, setName] = useState()
const [userEmail, setEmail] = useState()
const [userPassword, setPassword] = useState()
const [householdId, setHouseholdId] = useState()

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
          households_id: householdId
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
    <div>
      I am temp text for Register!
      <form>
        Name
          <input
            type="text"
            name={userName}
            onChange={event =>setName(event.target.value)}
          />

        Email
          <input
            type="text"
            email={userEmail}
            onChange={event =>setEmail(event.target.value)}
          />
          
        Password
          <input
            type="password"
            password={userPassword}
            onChange={event =>setPassword(event.target.value)}
          />

        Household ID
          <input
            type="number"
            household={householdId}
            onChange={event =>setHouseholdId(event.target.value)}
          />

          <button
          type="submit"
          onClick={submitRegistration}
          >
            Submit
          </button>
      </form>
    </div>
  )
}