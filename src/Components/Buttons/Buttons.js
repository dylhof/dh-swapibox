import React from 'react';

const Buttons = (props) => {
  const { makePeople, makePlanets, makeVehicles } = props
  return(
    <div className='control-div'>
      <div className='button-div'>
        <button className='people-btn' onClick={makePeople}></button>
        <p>People</p>
      </div>
      <div className='button-div'>
        <button className='planets-btn' onClick={makePlanets}></button>
        <p>Planets</p>
      </div>
      <div className='button-div'>
        <button className='vehicles-btn' onClick={makeVehicles}></button>
        <p>Vehicles</p>
      </div>
      <div className='button-div'>
        <button className='favorites-btn'></button>
        <p>Favorites</p>
      </div>
    </div>
  )
}

export default Buttons;