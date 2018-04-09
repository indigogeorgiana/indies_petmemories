import React from 'react'
import Cell from './Cell'

function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

const createCell = (value) => ({
  value
})

const createBoard = (size) => {
  var values = [
    'Mice', 'Mice',
    'Rabbits', 'Rabbits',
    'Guinea Pigs', 'Guinea Pigs',
    'Dogs', 'Dogs',
    'Cats', 'Cats',
    'Rats', 'Rats',
    'Parrots', 'Parrots',
    'Ducks', 'Ducks'
  ]
  values = shuffle(values)

  return Array(size).fill(0).map(
    () => Array(size).fill(0).map(
      () => createCell(values.pop())
    )
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: createBoard(4),
      width: props.width
    }
  }
  render() {
    const board = this.state.board
    const rowHeight = this.state.width / board.length

    return <div
      style={{width: this.state.width, height: this.state.width}}
      className="column is-6 is-offset-3 board has-text-centered"
    >
      {board.map(function(row) {
        return <div className="row columns" style={{height: rowHeight}} >
          {row.map(function(cell) {
            return <Cell cell={cell} />
          })}
        </div>
      })}
    </div>
  }
}

export default Board
