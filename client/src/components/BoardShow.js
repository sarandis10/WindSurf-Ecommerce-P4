/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{ useEffect , useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const BoardShow = () => {
  const [board, setBoard] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/boards/${id}`)
        setBoard(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, []) //id

  console.log('this is the board', board)
  return (
    <>
      <div className="card" styles="width: 18rem;">
        <img src={board.image} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{board.manufacturer}</h5>
          <p className="card-text">{board.pice}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{board.liters}</li>
          <li className="list-group-item">{board.make}</li>
          <li className="list-group-item">{board.price}</li>
          <Link to="/checkout">
            <a href="#" className="btn btn-primary">Buy me</a>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default BoardShow