
import React from 'react'
import { useHistory } from 'react-router-dom'
import Paypal from './Paypal'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
const Basket = (props) => {
  const { cartItems ,price ,man, onAdd,onRemove } = props
  // const price = props.price
  // const man = props.man
  const totalPrice = cartItems.reduce((acc,c)=> acc + c.price * c.qty,0)
  console.log(cartItems)

  const history = useHistory()

  const moreShopping = () => {
    history.push('')
  }

  // eslint-disable-next-line no-undef
  const [checkout,setCheckout] = useState(false)
  console.log(checkout)
  console.log('price in the basket',price)
  return (
    <>
      <div>
        <h1>Cart Items:</h1>
      </div>
      <div>
        {cartItems.length === 0 ? <p>chart is empty</p> : <p>item added: £{price} - {man} </p> }
      </div>
      {cartItems.map((item)=>(
        <div key={item.id} className="row">
          <div>{item.man}</div>
          <div>
            <button onClick={()=>onAdd(item)} className="add">+
            </button>
            <button onClick={()=>onRemove(item)} className="remove">-
            </button>
          </div>
          <div>
            {item.qty} x £{item.price}
          </div>
          <div>
            Total: {totalPrice}
          </div>
          <div >
            { checkout ? (
              <Paypal cost={price}/>
            ) : (
              <button onClick= {() => setCheckout(true)} className="btn btn-primary">Checkout</button>)
            }
          </div>
          <div >
            <button onClick={()=>moreShopping()} className="btn btn-primary">Keep shoping</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Basket