import React, { useState } from "react"
import axios from "axios"
import { Redirect } from 'react-router-dom'



//For Login view
export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [redirect, setRedirect] = useState(false)


  const submitLogin = async (event) => {
    event.preventDefault()
    try {
      let response = await axios({
        method: 'post',
        url: `/login`,
        data: {
          email: email,
          password: password
        },
        withCredentials: true,
      })

      console.log("TEH Response", response);
      setRedirect(true);
      console.log("Changing redirect state", redirect);
      console.log("HELLO! IS IT THE homepage you are looking for?")
      return response
    } catch(error) {
      console.log("GOOTTT!")
      console.log(error)
    }
    }

  if (redirect) {
    return <Redirect to='/new-category' />
  }
  

  return (
    <div>
      I am temp login!
      <form onSubmit={submitLogin}>

        Email
          <input
          type="text"
          email={email}
          onChange={event => setEmail(event.target.value)}
        />

        Password
          <input
          type="password"
          password={password}
          onChange={event => setPassword(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}