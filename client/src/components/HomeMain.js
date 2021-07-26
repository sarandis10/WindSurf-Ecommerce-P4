/* eslint-disable react/no-unknown-property */
import React from 'react'
import { Link } from 'react-router-dom'
import board from '../images/board.jpg'
import sail from '../images/sail.jfif'
import mast from '../images/mast.jfif'
import boom from '../images/boom.jfif'

const HomeMain = () => {


  return (
    <>
      <div className="card" styles="width: 18rem;">
        <img src={board} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Boards</h5>
          <p className="card-text">Find the lasted used and new windsurf boards</p>
          <Link to="/boards">
            <a href="#" className="btn btn-primary">Find Your Board</a> 
          </Link>
        </div>
      </div>
      {/* BOARDS */}
      <div className="card" styles="width: 18rem;">
        <img src={sail} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Sails</h5>
          <p className="card-text">Freeride, Wave, old-school sail. name it, you will find it here!</p>
          <a href="#" className="btn btn-primary">Find Your Sail</a> 
        </div>
      </div>
      {/* masts */}
      <div className="card" styles="width: 18rem;">
        <img src={mast} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Masts</h5>
          <p className="card-text">All types of RMD and SDM masts</p>
          <a href="#" className="btn btn-primary">Find Your Mast</a> 
        </div>
      </div>
      {/* masts */}
      <div className="card" styles="width: 18rem;">
        <img src={boom} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Boom</h5>
          <p className="card-text">new,old,carbon, new, used all booms are here! </p>
          <a href="#" className="btn btn-primary">Find Your Boom</a> 
        </div>
      </div>
    </>

  )
}

export default HomeMain