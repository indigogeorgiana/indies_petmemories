import React from 'react'

const Cell = (props) => {
  return <div className="cell column" style={{color: props.color}} >
   { if(props.hidden)
    else {
    {props.cell.value}
    }
    }
  </div>
}

export default Cell
