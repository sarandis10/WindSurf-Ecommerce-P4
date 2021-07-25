/* eslint-disable quotes */
import React from 'react'

const App = () => {


  return (
    <>
      <header>
        <div className="switch">
          <div className="flicker"></div>
        </div>
        <div>
          <>
            {(() => {
              // eslint-disable-next-line no-unused-vars
              const switchElement = document.querySelector('.switch')

              switchElement.addEventListener('click', ()=> {
                document.body.classList.toggle('dark')
              })
            })()}
          </>
        </div> 
      </header>
      <div>
        <h1>I am home </h1>
      </div>
    </>
  )
}

export default App