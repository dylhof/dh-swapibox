import React from 'react';
import Card from '../Card/Card';

const CardContainer = ({ cards }) => {
  return(
    <div>
      {cards.map(card => {
        return <Card 
          key={card.id}
          {...card}
        />
      })}
    </div>
  )
}

export default CardContainer;