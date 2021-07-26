/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {


  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/login">
                  <a class="nav-link active" aria-current="page" href="#">Login</a>
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/register">
                  <a class="nav-link" href="#">Register</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav