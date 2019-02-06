import React from 'react';

const Previous = ({ moveCard, boardID, cardID }) => (
  <a href="#" id="previous" onClick={() => moveCard(boardID, cardID, event.target.text)}> &lt; </a>
);

export default Previous;
