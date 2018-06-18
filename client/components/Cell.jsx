import React from 'react'

const Cell = (props) => {
  return <div className="cell column" >
    <button style={{visibility: props.vis}}>
      {props.cell.value}
    </button>
  </div>
}

export default Cell
