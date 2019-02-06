import React from 'react';
import Card from './Card.jsx';

const Board = ({ person, boardID, addCard, moveCard }) => (
  <div className="col-md-3" id={`title${boardID}`}>
    <h4>{person.name}</h4>
    <ul>
      {
        person.cards.map((el, i) => (
          <Card card={el} key={i} cardID={i} boardID={boardID} moveCard={moveCard} />
        ))
      }
    </ul>
    <a href="#" onClick={() => addCard(boardID)} id="add-card">Add Card</a>
  </div>
);

export default Board;
