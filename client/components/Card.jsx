import React from 'react';

const Card = ({card, id, moveCard}) => (
  <li id={id}>
    <a href="#" className="previous" onClick={moveCard}> &lt; </a>
    {card}
    <a href="#" className="next" onClick={moveCard}> &gt; </a>
  </li>
);

export default Card;