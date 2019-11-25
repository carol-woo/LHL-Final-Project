import React, {useState} from "react"


//For Register view
export default function Register(){
const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const [householdID, setHouseholdID] = useState()

  return(
    <div>
      I am temp text for Register!
      <form>
        Name
          <input
            type="text"
            name={name}
            onChange={setName}
          />

        Email
          <input
            type="text"
            email={email}
            onChange={setEmail}
          />
          
        Password
          <input
            type="password"
            password={password}
            onChange={setPassword}
          />

        Household ID
          <input
            type="number"
            household={householdID}
            onChange={setHouseholdID}
          />
      </form>
    </div>
  )
}