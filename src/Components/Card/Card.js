import React from 'react';

const Card = (props) => {
  let card;
  
  switch (props.category) {
    case 'person':
      card =
        <div>
          <h3 >Name: {props.name}</h3>
          <p>Homeworld: {props.homeworld}</p>
          <p>Species: {props.species}</p>
          <p>Homeworld Population: {props.population}</p>
        </div>
      break;
    case 'planet': 
      card = 
        <div>
          <h3>Name: {props.name}</h3>
          <p>Terrain: {props.terrain}</p>
          <p>Climate: {props.climate}</p>
          <p>Residents:</p>
          <ul> 
            {props.residents.map(resident => {
              return <li key={resident}>{resident}</li>
            })}
          </ul>
        </div>
      break;
  }

//   Name
// Terrain
// Population
// Climate
// Residents This is an array of urls
  return (
    <div className='card'>{card}</div>

  )
}

export default Card;