import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.setState = {
      board: createBoard(4),
      width: props.width,
      view: props.visible
    }
    this.isHidden = this.isHidden.bind(this)
    this.show = this.show.bind(this)
  }

  show (cell) {
    console.log('showing', cell.value)
  }
  render () {
    const board = this.state.board
    const rowHeight = this.state.width / board.length

    return <div
      style={{width: this.state.width, height: this.state.width}}
      className="column board has-text-centered"
    >
      {board.map(function (row, id) {
        // render a ROW (of cells) on the Board
        return <div key={'row' + id}
          className="row columns"
          style={{height: rowHeight}} >
          {row.map(function (cell) {
            // render each Cell within a ROW, using the Cell.jsx component
            return <Cell key={cell.value} cell={cell} isHidden={true}/>
          })}
        </div>
      })}
    </div>
  }
}

export default Board
