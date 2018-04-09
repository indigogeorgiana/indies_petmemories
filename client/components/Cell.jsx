import React from 'react'

const Cell = (props) => {

  return <div className="cell column">
    {props.cell.value}
  </div>
}

export default Cell
