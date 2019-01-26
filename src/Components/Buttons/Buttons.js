import React from 'react';

const Buttons = (props) => {
  const { makePeople, makePlanets, makeVehicles } = props
  return(
    <div className='button-div'>
      <button className='people-btn' onClick={makePeople}>People</button>
      <button className='planets-btn' onClick={makePlanets}>Planets</button>
      <button className='vehicles-btn' onClick={makeVehicles}>Vehicles</button>
      <button>Favorites</button>
    </div>
  )
}

export default Buttons;