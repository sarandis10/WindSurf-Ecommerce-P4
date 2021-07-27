/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Boards = () => {
  const [boards, setBoards] = useState([])

  useEffect(() => {
    const getData = async () => {
      // install axios by running `yarn add axios` in the client folder in terminal 
      // use axios here instead of fetch
      const { data } = await axios.get('/api/boards') // * <-- replace with your endpoint
      // const data = await res.json()
      setBoards(data)
      console.log(boards)
    }
    getData()
  },[])

  return (
    <>
    
      <div className="card" styles="width: 18rem;">
        {boards.map(iter=> {
          return (
            <>
              <img src={iter.image} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Make: {iter.manufacturer}</h5>
                <p className="card-text">Model: {iter.make}</p>
                <a href="#" className="btn btn-primary">Find More</a>
              </div>
            </>
          )
        })}
        
      </div>
    </>
  )
}

export default Boards