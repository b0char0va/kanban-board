import React from 'react';
import Card from './Card.jsx';

const Board = ({ person, id, addCard, moveCard}) => (
  <div className="col-md-3" id={`title${id}`}>
    <h4>{person.name}</h4>
    <ul>
      {
        person.cards.map((el, i) => (
          <Card card={el} key={i} id={i} moveCard={moveCard}/>
        ))
      }
    </ul>
    <a href="#" onClick={addCard} id='add-card'>Add Card</a>
  </div>
);

export default Board;
