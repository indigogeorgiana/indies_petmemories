import React from 'react'
import Cell from './Cell'

import createBoard from '../createBoard'

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: createBoard(4),
      width: props.width,
      height: props.height,
      isHidden: props.isHidden
        
    }
  }

  render() {
  ReactDOM.render(Parent, app)

    return 
      <div style={{width: this.state.width, height: this.state.height, isHidden: this.state.isHidden}}
      className="column board has-text-centered"
    >
  {board.map(function (row, id) {
  // render a ROW (of cells) on the Board
  return 
  <div key={id},  className={row columns}  style={{height: rowHeight, 
  isHidden: {isHidden}, cellsShow: {!isHidden}}} >
    {row.map(function (cell) {    
  //render each cell wint a row, using the cell.jsx component
      return <Cell key={cell.value} cell={cell} onClick={this.state.cellsShow} />
   
      }
      }