import React from 'react';

const Buttons = (props) => {
  const { fetchPeople, fetchPlanets, fetchVehicles } = props
  return(
    <div>
      <button className='people-btn' onClick={fetchPeople}>People</button>
      <button className='planets-btn' onClick={fetchPlanets}>Planets</button>
      <button className='vehicles-btn' onClick={fetchVehicles}>Vehicles</button>
      <button>Favorites</button>
    </div>
  )
}

export default Buttons;