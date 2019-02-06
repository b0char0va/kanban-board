import React from 'react';
import Next from './Next.jsx';
import Previous from './Previous.jsx';

const Card = ({ card, cardID, boardID, moveCard }) => (
  <li id={cardID}>
    {boardID > 0 ? <Previous moveCard={moveCard} cardID={cardID} boardID={boardID} /> : null}
    {card}
    {boardID < 3 ? <Next moveCard={moveCard} cardID={cardID} boardID={boardID} /> : null}
  </li>
);

export default Card;
