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


  const [filteredBoards, setFilteredBoards] = useState([])

  const handleFilter = (event) => {
    const filteredBoardsArray = boards.filter(item => {
      return item.manufacturer === event.target.value
    })
    setFilteredBoards(filteredBoardsArray)
  }

  const uniqueRegion = []

  // populates my dropdown list
  boards.map(item => {
    if (uniqueRegion.indexOf(item.manufacturer) === -1) {
      uniqueRegion.push(item.manufacturer)
    }
  })

  console.log('filteredBoards',filteredBoards)
  console.log('uniqueRegion',uniqueRegion)
  return (
    <>
      <select onChange={handleFilter}>{uniqueRegion.map((item) => {
        if (item === '') {
          return <option key='none' value=''>Other</option>
        } else {
          return (
            <>
              <option key={item.index} value={item}>{item}</option>
            </>
          )
        }
      })}
      <option key='last' value="All">All</option>
      </select>
      <div onChange={handleFilter} className="card" styles="width: 18rem;">
        {(filteredBoards.length > 0 ? filteredBoards : boards).map((iter,index)=> {
          return (
            <>
              <img src={iter.image} className="card-img-top" alt="..."/>
              <div key ={index} className="card-body">
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