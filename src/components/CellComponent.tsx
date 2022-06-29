import React from 'react'
import { Cell } from '../models/cell'

interface ICell {
  cell: Cell
}

const CellComponent = ({ cell }: ICell) => {
  return <div className={`cell ${cell.color}`}>
    {cell.figure?.logo && <img src={cell.figure.logo} />}
  </div>
}

export default CellComponent
