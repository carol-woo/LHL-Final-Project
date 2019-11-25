import React, {useState} from "react"



//For Login view
export default function Login(){
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return(
    <div>
      I am temp login!
      <form>

        Email
          <input
            type ="text"
            email={email}
            onChange={setEmail}
          />

        Password
          <input
            type="password"
            password={password}
            onChange={setPassword}
          />
      </form>
    </div>
  )
}