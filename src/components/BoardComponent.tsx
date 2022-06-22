import React from 'react'
import type { Board } from '../models/board'
import CellComponent from './CellComponent'

interface Props {
	board: Board
  setBoard: React.Dispatch<React.SetStateAction<Board>>
}

const BoardComponent = ({ board, setBoard }: Props) => {
  return <div className="board">
    {
      board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {
            row.map((cell) => (
              <CellComponent key={cell.id} cell={cell}/>
            ))
          }
        </React.Fragment>
      ))
    }
  </div>
}

export default BoardComponent
