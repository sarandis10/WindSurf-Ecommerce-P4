/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Boards from '../src/components/Boards'


const App = () => {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/boards' component={Boards} />
      </Switch>
    </BrowserRouter>
    
  )
}

export default App
