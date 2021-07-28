/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


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
  },[])  //boards


  const [filteredBoards, setFilteredBoards] = useState([])
  const [filteredBoardsbymake, setFilteredBoardstbymake] = useState([])

  const handleFilter = (event) => {
    const filteredBoardsArray = (filteredBoardsbymake.length > 0 ? filteredBoardsbymake : boards).filter(item => {
      return item.manufacturer === event.target.value
    })
    setFilteredBoards(filteredBoardsArray)
    // setFilteredBoardstbymake(filteredBoardsArray)
  }
  

  const handleFilterMake = (event) => {
    const filteredBoardsArray = (filteredBoards.length > 0 ? filteredBoards : boards).filter(item => {
      return item.make === event.target.value
    })
    // setFilteredBoards(filteredBoardsArray)
    setFilteredBoardstbymake(filteredBoardsArray)
  }
  console.log('giati den exeis data mesa',filteredBoardsbymake)
  const uniqueRegion = []

  // populates my dropdown list
  boards.map(item => {
    if (uniqueRegion.indexOf(item.manufacturer) === -1) {
      uniqueRegion.push(item.manufacturer)
    }
  })


  // experiment
  const uniqueType = []
  boards.map(item => {
    if (uniqueType.indexOf(item.make) === -1) {
      uniqueType.push(item.make)
    }
  })

  console.log('filteredBoards',filteredBoards)
  console.log('uniqueRegion',uniqueRegion)
  console.log('uniqueType',uniqueType)

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

      <select onChange={handleFilterMake}>{uniqueType.map((item) => {
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
                <Link to={`/boards/${iter.id}`}> 
                  <a href="#" className="btn btn-primary">Find More</a>
                </Link>
              </div>
            </>
          )
        })}
        
      </div>
    </>
  )
}

export default Boards