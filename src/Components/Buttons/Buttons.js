import React from 'react';

const Buttons = (props) => {
  const { fetchData, makePeople, makePlanets } = props
  return(
    <div className='button-div'>
      <button className='people-btn' onClick={makePeople}>People</button>
      <button className='planets-btn' onClick={makePlanets}>Planets</button>
      <button className='vehicles-btn' onClick={() => fetchData('vehicles')}>Vehicles</button>
      <button>Favorites</button>
    </div>
  )
}

export default Buttons;