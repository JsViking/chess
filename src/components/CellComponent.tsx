import React from 'react'
import { Cell } from '../models/cell'

interface ICell {
  cell: Cell
  selected: boolean
  onClick: (cell: Cell) => void
}

const CellComponent = ({ cell, selected, onClick }: ICell) => {
  return (
    <div
      className={`cell ${cell.color} ${selected ? 'selected' : ''}`}
      onClick={() => onClick(cell)}
      style={{ backgroundColor: cell.available && cell.figure ? 'green' : '' }}
    >
      {cell.available && !cell.figure && <div className="avaliable"></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  )
}

export default CellComponent
