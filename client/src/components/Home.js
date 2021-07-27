/* eslint-disable quotes */
import React from 'react'
import HomeMain from './HomeMain'
// eslint-disable-next-line
import Flicker from './Flicker'


const App = () => {


  return (
    <>
      
      <header>
        <div className="switch">
          <div className="flicker"></div>
          <div className="moon"></div>
        </div>
        <div>
          <>
            {
              // <Flicker></Flicker>
            }
          </>
        </div> 
      </header>
      <div className="hero-image">
        <div className="cube" id="jp"></div>
        <div className="cube" id="fanatic"></div>
        <div className="cube" id="starboard"></div>
        <div className="cube" id="mistral"></div>
      </div>
      <div>
        <h1>I am home </h1>
        <HomeMain></HomeMain>
      </div>
    </>
  )
}

export default App