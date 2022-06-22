import React from 'react'
import { Cell } from '../models/cell'

interface ICell {
  cell: Cell
}

const CellComponent = ({ cell }: ICell) => {
  return <div className={`cell ${cell.color}`}>
  </div>
}

export default CellComponent
