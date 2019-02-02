import React from 'react';
import Board from './Board.jsx';
import dataArray from '../../data.json';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data : dataArray
    };
    this.addCard = this.addCard.bind(this);
    this.moveCard = this.moveCard.bind(this);
  }

  addCard(e) {
    let text = window.prompt('Please add text');
    let boardID = $(e.target).parent().prop('id');
    let newArr = [...this.state.data];
    let index = boardID.substr(5);
    newArr[index].cards.push(text);
    this.setState({
      data: newArr
    })
  }

  moveCard(e) {
    let text = e.target.text;
    let cardID = $(e.target).parent().prop('id');
    let boardID = $(e.target).closest('div').prop('id');
    let index = parseInt(boardID.substr(5));
    let newArr = [...this.state.data];
    let cardText = newArr[index].cards[cardID];
    newArr[index].cards.splice(cardID, 1);

    if(text.match(/</g)) {
      index -= 1;
    } else {
      index += 1;
    }
    console.log(index);
    newArr[index].cards.push(cardText);
    this.setState({
      data: newArr
    })
  }

  render() {
    return (
      <div className="row">
        {
          this.state.data.map((el, i) => (
            <Board person={el} key={i} id={i} addCard={this.addCard} moveCard={this.moveCard}/>
          ))
        }
      </div>
    )
  }
}

export default App;