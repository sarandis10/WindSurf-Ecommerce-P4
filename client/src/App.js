/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Boards from '../src/components/Boards'
import Nav from '../src/components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
const App = () => {


  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/boards' component={Boards} />
      </Switch>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
