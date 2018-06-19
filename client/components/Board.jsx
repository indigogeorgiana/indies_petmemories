import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      board: createBoard(4),
      width: props.width,
      hidden: true
    }
    this.hideValues = this.hideValues.bind(this)
    //this.showValues = this.ShowValues.bind(this)
  }

  hideValues () {
    this.setState({
      color: 'pink'
    })
  }

  showValues () {
    this.setState({
      color: 'black'
    })
  }

  render () {
    const board = this.state.board
    const rowHeight = this.state.width / board.length
    const hidden = this.state.hidden

    return <div
      style={{width: this.state.width, height: this.state.width}}
      className="column board has-text-centered"
    >
      {board.map(function (row) {
        // render a ROW (of cells) on the Board
        return <div key = 'cell' className="row columns" style={{height: rowHeight}} >
          {row.map(function (cell) {
            // render each Cell within a ROW, using the Cell.jsx component

            return <Cell key= {cell.value} cell={cell} hidden={hidden} />
          })}
        </div>
      })}
    </div>
  }
}

export default Board
