import React, { useEffect, useState } from 'react'
import type { Board } from '../models/board'
import { Cell } from '../models/cell'
import CellComponent from './CellComponent'

interface Props {
	board: Board
  setBoard: React.Dispatch<React.SetStateAction<Board>>
}

const BoardComponent = ({ board, setBoard }: Props) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  const updateBoard = () => {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  const selectHandle = (cell: Cell) => {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell)
      setSelectedCell(null)
    } else {
      setSelectedCell(cell)
    }
  }

  const hightLightCells = () => {
    board.highLiteCells(selectedCell)
    updateBoard()
  }

  useEffect(() => {
    hightLightCells()
  }, [selectedCell])

  return <div className="board">
    {
      board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {
            row.map((cell) => (
              <CellComponent
                key={cell.id}
                cell={cell}
                selected={selectedCell?.x === cell.x && selectedCell?.y === cell.y}
                onClick={selectHandle}
              />
            ))
          }
        </React.Fragment>
      ))
    }
  </div>
}

export default BoardComponent
