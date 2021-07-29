import React,{ useRef, useEffect } from 'react'

const Paypal = ( props ) => {
  const paypal = useRef()
  const { cost } = props
  console.log('price is on paypal ',cost)
  useEffect(() => {
    window.paypal.Buttons({
      createOrder: ( data,actions, err )=>{
        return actions.order.create({
          intent: 'CAPTURE' ,
          purchase_units:[
            {
              description: 'whatever',
              amount: {
                currency_code: 'GBP',
                value: cost,
              },
            }
          ],
        })
      },
      onApprove: async(data, actions) => {
        const order =await actions.order.capture()
        console.log(order)
      }
    }).render(paypal.current)
  }, [])

  return (
    <div>
      <div ref ={paypal}></div>
    </div>
  )
}

export default Paypal