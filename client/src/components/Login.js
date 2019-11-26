import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import '../styles/login.css';



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
    return <Redirect to='/' />
  }

  return (
    <div className="login_container">
      <div className="login_image"></div>
      <div className="login_form">
        <h2>Login</h2>
        <form onSubmit={submitLogin}>
          <div>
            <label for="username">Email</label>
            <input
            type="email"
            email={email}
            onChange={event => setEmail(event.target.value)}
          />
          </div>
          <div>
          <label for="password">Password</label>
            <input
            type="password"
            password={password}
            onChange={event => setPassword(event.target.value)}
          />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}