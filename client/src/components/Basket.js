
import React from 'react'

// eslint-disable-next-line no-unused-vars
const Basket = (props) => {
  const cartItems = props.cartItems
  const price = props.price
  const man = props.man
  console.log(cartItems)

  return (
    <>
      <div>
        <h1>Cart Items:</h1>
      </div>
      <div>
        {cartItems.length === 0 ? <p>chart is empty</p> : <p>item added: £{price} - {man} </p> }
      </div>
    </>
  )
}

export default Basket