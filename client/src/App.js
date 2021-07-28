/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Boards from '../src/components/Boards'
import Nav from '../src/components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import BoardShow from './components/BoardShow'


const App = () => {


  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/boards' component={Boards} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/boards/:id' component={BoardShow} />
      </Switch>
      <Footer />
    </BrowserRouter>
    
  )
}

export default App
