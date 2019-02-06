import React from 'react';

const Next = ({ moveCard, boardID, cardID}) => (
  <a href="#" id="next" onClick={() => moveCard(boardID, cardID, event.target.text)}> &gt; </a>
);

export default Next;
