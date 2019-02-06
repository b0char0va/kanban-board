import React from 'react';
import Board from './Board.jsx';
import dataArray from '../../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataArray,
    };
    this.addCard = this.addCard.bind(this);
    this.moveCard = this.moveCard.bind(this);
  }

  addCard(boardID) {
    const text = window.prompt('Please add text');
    const newArr = [...this.state.data];
    newArr[boardID].cards.push(text);
    this.setState({
      data: newArr,
    });
  }

  moveCard(boardID, cardID, text) {
    const newArr = [...this.state.data];
    const cardText = newArr[boardID].cards[cardID];
    newArr[boardID].cards.splice(cardID, 1);
    text.trim() === '<' ? boardID -= 1 : boardID += 1;
    newArr[boardID].cards.push(cardText);
    this.setState({
      data: newArr,
    });
  }

  render() {
    return (
      <div className="row">
        {
          this.state.data.map((el, i) => (
            <Board
              person={el}
              key={i}
              boardID={i}
              addCard={this.addCard}
              moveCard={this.moveCard}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
