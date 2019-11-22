import React from "react"
import { Switch, Route } from "react-router-dom"

//New entry view
export default function NewEntry(){

  return(
    <div>

      I am temp text for NewEntry!

       <Switch>
        <Route path="/new_entry" component={NewEntry} />
      </Switch>
    </div>
  )
} 