import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

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
      className="column board has-text-centered"
    >
      {board.map(function(row) {
        //render a ROW (of cells) on the Board
        return <div className="row columns" style={{height: rowHeight}} >
          {row.map(function(cell) {
            //render each Cell within a ROW, using the Cell.jsx component
            return <Cell cell={cell} />
          })}
        </div>
      })}
    </div>
  }
}

export default Board
