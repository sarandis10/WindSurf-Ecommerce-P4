/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{ useEffect , useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Basket from './Basket'

const BoardShow = () => {
  const [cartItems,setCartItems] = useState([])
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



  const onAdd = (board)=>{
    const exist = cartItems.find(x=> x.id === board.id)

    if (exist){
      setCartItems(cartItems.map(x=> 
        x.id === board.id ? {...exist, qty: exist.qty + 1 } : x))
    } else {
      setCartItems([...cartItems,{...board, qty: 1}])
    }
  }

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
          <li className="list-group-item">Liters: {board.liters}</li>
          <li className="list-group-item">Model: {board.make}</li>
          <li className="list-group-item">Price: £{board.price}</li>
        
          <a href="#" onClick={onAdd} className="btn btn-primary">Add to Cart</a>
          <br></br>
          <Basket onAdd={onAdd} cartItems={cartItems} price={board.price} man = {board.manufacturer}></Basket>
        </ul>
      </div>
    </>
  )
}

export default BoardShow