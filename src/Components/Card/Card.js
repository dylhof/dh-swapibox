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

  }


  return (
    <div className='card'>{card}</div>
  )
}

export default Card;