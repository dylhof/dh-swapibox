import React from 'react';

const Card = (props) => {
  let card;
  
  switch (props.category) {
    case 'person':
      card =
        <div>
          <h3 >Name: {props.name} <i class="fas fa-star"></i></h3>
          <p>Homeworld: {props.homeworld}</p>
          <p>Species: {props.species}</p>
          <p>Homeworld Population: {props.population}</p>
          
        </div>
      break;
    case 'planet': 
      card = 
        <div>
          <h3>Name: {props.name} <i class="fas fa-star"></i></h3>
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
    case 'vehicle':
      card = 
        <div>
          <h3>Name: {props.name} <i class="fas fa-star"></i></h3>
          <p>Model: {props.model}</p>
          <p>Class: {props.class}</p>
          <p>Passengers: {props.passengers}</p>
        </div>
      break;
  }

  return (
    <div className='card'>{card}</div>
  )
}

export default Card;