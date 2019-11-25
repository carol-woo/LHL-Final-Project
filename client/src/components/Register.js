import React, {useState} from "react"


//For Register view
export default function Register(){
const [userName, setName] = useState()
const [userEmail, setEmail] = useState()
const [userPassword, setPassword] = useState()
const [householdID, setHouseholdID] = useState()

function submitRegistration(){
      axios({
        method: 'post',
        //Temp sending route from homepage
        url: `/`,
        data: {
          name: userName,
          email: userEmail,
          password: userPassword,
          households_id: householdID
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
            onChange={setName}
          />

        Email
          <input
            type="text"
            email={userEmail}
            onChange={setEmail}
          />
          
        Password
          <input
            type="password"
            password={userPassword}
            onChange={setPassword}
          />

        Household ID
          <input
            type="number"
            household={householdID}
            onChange={setHouseholdID}
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