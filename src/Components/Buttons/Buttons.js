import React from 'react';

const Buttons = (props) => {
  const { fetchPeople } = props
  return(
    <div>
      <button className='people-btn' onClick={fetchPeople}>People</button>
      <button>Planets</button>
      <button>Vehicles</button>
      <button>Favorites</button>
    </div>
  )
}

export default Buttons;