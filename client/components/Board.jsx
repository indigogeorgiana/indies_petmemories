import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.setState = {
      board: createBoard(4),
      width: props.width,
      hiddenTag: props.hiddenTag,
    }
  }

  render () {
    const board = this.state.board
    const rowHeight = this.state.width / board.length
    const hiddenTag = this.state.hiddenTag
    
    return <div
      style={{width: this.state.width, height: this.state.width, showTag: this.state.showTag}}
      className="column board has-text-centered"
    >
      {board.map(function (row, id) {
        // render a ROW (of cells) on the Board
        return <div key={id} className="row columns" style={{height: rowHeight, showTag:}} >
          {row.map(function (cell) {
            // render each Cell within a ROW, using the Cell.jsx component
            // return <Cell key={cell.value} cell={cell} onClick={this.turnAround} />
            return <Cell key={cell.value} cell={cell} />
          })}
        </div>
      })}
    </div>
  }
}

export default Board
