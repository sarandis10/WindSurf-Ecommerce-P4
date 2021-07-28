import React from 'react'

const Flicker = () => {


  return (
    
    <div>
      <>
        {(() => {
          const switchElement = document.querySelector('.switch')
          switchElement.addEventListener('click', ()=> {
            document.body.classList.toggle('dark')
          })
        })()}
      </>
    </div> 
    
  )
}

export default Flicker