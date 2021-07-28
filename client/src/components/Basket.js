
import React from 'react'

// eslint-disable-next-line no-unused-vars
const Basket = (props) => {
  const { cartItems ,price ,man, onAdd,onRemove } = props
  // const price = props.price
  // const man = props.man
  const totalPrice = cartItems.reduce((acc,c)=> acc + c.price * c.qty,0)
  console.log(cartItems)

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
            <button onClick={()=>onRemove (item)} className="remove">-
            </button>
          </div>
          <div>
            {item.qty} x £{item.price}
          </div>
          <div>
            Total: {totalPrice}
          </div>
          <div >
            <button className="btn btn-primary">Pay</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Basket